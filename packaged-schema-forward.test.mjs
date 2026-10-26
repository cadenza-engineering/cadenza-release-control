import test from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Run beside control gate/ after adoption. The evidence-only invocation points
// at generated bundles explicitly; no application source modules are imported.
const gateDir = process.env.CALENDAR_PACKAGED_GATE_DIR
  ? resolve(process.env.CALENDAR_PACKAGED_GATE_DIR)
  : fileURLToPath(new URL('./gate/', import.meta.url));
const core = await import(pathToFileURL(resolve(gateDir, 'core.mjs')).href);
const approval = await import(pathToFileURL(resolve(gateDir, 'github-approval.mjs')).href);
const runtimeModule = await import(pathToFileURL(resolve(gateDir, 'control-runtime.mjs')).href);
const prebuilt = await import(pathToFileURL(resolve(gateDir, 'vercel-prebuilt.mjs')).href);
const { parseBundle, digest, assertReleaseTechnicalChecks } = core;
const { createGithubReleaseRunReader } = approval;
const { createControlReleaseRuntime } = runtimeModule;
const now = Date.parse('2026-10-26T13:00:00.000Z');
const h = value => value.repeat(64);

// Shapes retained from source core/schema-forward/GitHub-run-reader fixtures.
// Opaque synthetic hashes represent bindings; this does not classify SQL or
// prove a real transition, database, environment or production release.
function setup(change = () => {}) {
  const policy = { enabled: true, deploymentCredentialsAttached: true,
    governanceModel: 'AUTOMATED_OWNER_POLICY', allowSchemaForward: true,
    repository: 'example/app', controlRepository: 'example/control', gateSha: 'f'.repeat(40),
    ownerId: 1, operatorId: 2, engineeringId: 3, environmentId: 4,
    approvalEnvironment: 'owner-release', workflowPath: '.github/workflows/owner-release.yml',
    attesterWorkflow: '.github/workflows/prebuilt-builder.yml', projectId: 'prj_test', teamId: 'team_test',
    productionHost: 'cadenza.example', environment: 'production', policyVersion: 'automated-v1',
    workflowSha256: h('2'), requiredChecks: ['CI'] };
  // Exact canonical property order is part of the packaged parser contract.
  const bundle = { version: 2, mode: 'AUTOMATED_SCHEMA_FORWARD', repository: policy.repository,
    releaseSha: 'a'.repeat(40), projectId: policy.projectId, teamId: policy.teamId,
    environment: 'production', baselineSha: 'b'.repeat(40), baselineDeploymentId: 'dpl_baseline',
    ledgerSha256: h('c'), manifestSha256: h('d'), ciRunId: 10, policyVersion: policy.policyVersion,
    issuedAt: new Date(now).toISOString(), expiresAt: new Date(now + 60000).toISOString(),
    nonce: h('e'), artifactSha256: h('7'), schemaTransitionSha256: h('1') };
  const rawBundle = JSON.stringify(bundle);
  const inputs = { runId: 8, rawBundle, expectedBundleSha256: digest(rawBundle) };
  const run = { id: 8, run_attempt: 1, repository: { full_name: policy.controlRepository },
    head_repository: { full_name: policy.controlRepository }, head_sha: policy.gateSha,
    head_branch: 'main', path: policy.workflowPath, event: 'workflow_dispatch', status: 'in_progress',
    conclusion: null, actor: { id: 2, type: 'Bot' }, triggering_actor: { id: 2, type: 'Bot' },
    created_at: new Date(now).toISOString(), display_title: `Release ${bundle.releaseSha} / ${inputs.expectedBundleSha256}` };
  const environment = { id: 4, name: 'owner-release', can_admins_bypass: false,
    deployment_branch_policy: { protected_branches: true, custom_branch_policies: false }, protection_rules: [] };
  const state = { policy, bundle, inputs, run, environment, reads: [] };
  change(state);
  state.readJson = async path => {
    state.reads.push(path);
    if (path === `/repos/${policy.controlRepository}/actions/runs/8`) return run;
    if (path === `/repos/${policy.controlRepository}/environments/owner-release`) return environment;
    assert.fail(`Unexpected provider path in pure packaged fixture: ${path}`);
  };
  state.reader = () => createGithubReleaseRunReader({ policy, readJson: state.readJson, now: () => now })(inputs);
  return state;
}

test('four actual packaged bundles import with the reviewed public APIs', () => {
  for (const value of [parseBundle, digest, assertReleaseTechnicalChecks, createGithubReleaseRunReader, createControlReleaseRuntime, prebuilt.createVercelPrebuiltDeployer]) {
    assert.equal(typeof value, 'function');
  }
});
test('packaged core accepts exact canonical enabled schema-forward mode', () => {
  const f = setup(); assert.deepEqual(parseBundle(f.inputs.rawBundle, f.policy, now), f.bundle);
});
test('packaged core refuses schema-forward without the control opt-in', () => {
  const f = setup(); delete f.policy.allowSchemaForward;
  assert.throws(() => parseBundle(f.inputs.rawBundle, f.policy, now), /Unsupported authorization mode/);
});
test('packaged core refuses missing or malformed transition digest', () => {
  const f = setup(); const missing = { ...f.bundle }; delete missing.schemaTransitionSha256;
  assert.throws(() => parseBundle(JSON.stringify(missing), f.policy, now), /Unexpected bundle fields/);
  assert.throws(() => parseBundle(JSON.stringify({ ...f.bundle, schemaTransitionSha256: 'invalid' }), f.policy, now), /transition digest/);
});
test('packaged technical evidence must bind the exact schema transition', () => {
  const f = setup(); const evidence = { observedAt: now, ...f.bundle,
    mainSha: f.bundle.releaseSha, ciConclusion: 'success', ciEvent: 'push', ciBranch: 'main',
    workflowSha256: f.policy.workflowSha256, checks: [{ name: 'CI', conclusion: 'success' }],
    pendingMigrations: 0, failedMigrations: 0, schemaMatches: true, runtimePermissionsValid: true,
    health: 'healthy', recoveryEvidenceValid: true };
  assert.doesNotThrow(() => assertReleaseTechnicalChecks(f.bundle, evidence, f.policy, now));
  assert.throws(() => assertReleaseTechnicalChecks(f.bundle, { ...evidence, schemaTransitionSha256: h('3') }, f.policy, now), /schema transition/);
});
test('standalone packaged GitHub reader accepts exact schema-forward bundle and protected automated run', async () => {
  const f = setup(); const answer = await f.reader();
  assert.equal(answer.authorizationKind, 'AUTOMATED_OWNER_POLICY');
  assert.equal(answer.humanReleaseReview, false); assert.equal(answer.bundleSha256, f.inputs.expectedBundleSha256);
  assert.equal(answer.releaseSha, f.bundle.releaseSha); assert.equal(answer.consumptionKey, 'example/control:8:1');
  assert.deepEqual(f.reads, ['/repos/example/control/actions/runs/8', '/repos/example/control/environments/owner-release', '/repos/example/control/actions/runs/8']);
});
test('standalone packaged reader refuses disabled mode before provider reads', async () => {
  const f = setup(s => { s.policy.allowSchemaForward = false; });
  await assert.rejects(f.reader(), /Unsupported authorization mode/); assert.deepEqual(f.reads, []);
});
test('standalone packaged reader refuses changed transition bytes under original bundle hash', async () => {
  const f = setup(s => { s.inputs.rawBundle = JSON.stringify({ ...s.bundle, schemaTransitionSha256: h('3') }); });
  await assert.rejects(f.reader(), /Modified bundle/); assert.deepEqual(f.reads, []);
});
for (const [name, change, message] of [
  ['wrong displayed binding', s => { s.run.display_title = 'Release different request'; }, /display.*bound/],
  ['different protected gate source', s => { s.run.head_sha = '9'.repeat(40); }, /Wrong control source/],
  ['replayed control run', s => { s.run.run_attempt = 2; }, /Rerun\/replay/],
  ['environment bypass', s => { s.environment.can_admins_bypass = true; }, /Environment bypass/],
]) test(`standalone packaged reader refuses ${name}`, async () => {
  const f = setup(change); await assert.rejects(f.reader(), message);
});
function assembled(f, productionPolicy) {
  const calls = [];
  const forbidden = name => async () => { calls.push(name); assert.fail(`Unexpected operational access: ${name}`); };
  const execute = createControlReleaseRuntime({ policy: f.policy, productionPolicy,
    readControlJson: f.readJson, readSourceJson: forbidden('source'),
    readProductionConnection: forbidden('production connection'), readVercelObserverToken: forbidden('observer token'),
    ledgerQuery: forbidden('replay ledger'), outputRoot: '/tmp/unused-schema-forward-fixture',
    manifestPath: '/tmp/unused-schema-forward-manifest', attestationPath: '/tmp/unused-schema-forward-attestation',
    runAttestationVerifier: forbidden('attestation'), runPrebuiltCli: forbidden('deployment'), fetchImpl: forbidden('network'), now: () => now });
  return { execute: () => execute(f.inputs), calls };
}
const schemaProof = { classification: 'EXACT_REVIEWED_BASELINE', schemaSha256: h('1'),
  confidentialSchemaSha256: h('2'), catalogDdlSha256: h('3'), classifierSha256: h('4'), counts: { tables: 1 } };
const protectedLedgerPin = { ledgerSha256: h('c'), successfulCount: 213, rolledBackCount: 4 };
test('packaged runtime refuses unenrolled policy before credential/provider callbacks', () => {
  assert.throws(() => createControlReleaseRuntime({ policy: { enabled: false } }), /enrollment disabled/);
  assert.throws(() => createControlReleaseRuntime({ policy: { enabled: true, deploymentCredentialsAttached: false } }), /enrollment disabled/);
});
test('packaged runtime requires observer transition even after exact protected run verification', async () => {
  const f = setup(); const runtime = assembled(f, { schemaProof, ledgerPin: protectedLedgerPin });
  await assert.rejects(runtime.execute(), /Schema-forward mode is not enabled by the control and observer policies/);
  assert.equal(f.reads.length, 3); assert.deepEqual(runtime.calls, []);
});
test('packaged runtime validates pinned transition structure before any operational access', async () => {
  const f = setup(); const runtime = assembled(f, { schemaProof, ledgerPin: protectedLedgerPin, schemaTransition: {} });
  await assert.rejects(runtime.execute(), /schemaTransition keys differ/);
  assert.equal(f.reads.length, 3); assert.deepEqual(runtime.calls, []);
});

function reviewedTransition() {
  return { version: 1, classification: 'ADDITIVE_BASELINE_COMPATIBLE',
    from: { schemaSha256: h('1'), confidentialSchemaSha256: h('2') },
    to: { classification: 'EXACT_REVIEWED_BASELINE', schemaSha256: h('3'), confidentialSchemaSha256: h('2'),
      catalogDdlSha256: h('5'), classifierSha256: h('6'), counts: { tables: 1 } },
    migrations: [{ name: '20261020210000_sub_request_calendar_dates', sha256: h('8') }],
    widenings: [], ledger: { ledgerSha256: h('c'), successfulCount: 213, rolledBackCount: 4 },
    runtimeManifest: {}, classifierEvidenceSha256: h('9') };
}

test('packaged runtime binds a valid reviewed transition to the exact bundle before operational reads', async () => {
  const f = setup();
  const transition = reviewedTransition();
  const runtime = assembled(f, { schemaProof, ledgerPin: protectedLedgerPin, schemaTransition: transition });
  // The bundle's synthetic h('1') is not this transition's canonical digest.
  await assert.rejects(runtime.execute(), /Bundle is not bound to the reviewed schema transition/);
  assert.equal(f.reads.length, 3); assert.deepEqual(runtime.calls, []);
});

// Exercise the standalone deployer's embedded parser without touching an
// artifact, temporary directory, upload CLI or provider. The trusted-provenance
// sentinel is strictly after parseBundle and consumed-bundle binding checks.
for (const enabled of [true, false]) test(`packaged standalone prebuilt mode opt-in=${enabled} gates provenance`, async () => {
  const f = setup(); f.policy.allowSchemaForward = enabled;
  let provenanceCalls = 0;
  const stop = Error('Pure trusted-provenance sentinel; no artifact or upload');
  const deployer = prebuilt.createVercelPrebuiltDeployer({ policy: f.policy,
    outputRoot: '/unused-packaged-artifact-fixture', now: () => now,
    verifyProvenance: async bundle => { provenanceCalls++; assert.deepEqual(bundle, f.bundle); throw stop; },
    baseline: async () => assert.fail('No baseline/provider read intended'),
    runCli: async () => assert.fail('No upload intended') });
  const run = () => deployer.deploy({ bundle: f.bundle,
    approval: { bundleSha256: f.inputs.expectedBundleSha256, releaseSha: f.bundle.releaseSha },
    beforePromotion: async () => assert.fail('No promotion intended') });
  if (enabled) await assert.rejects(run(), error => error === stop);
  else await assert.rejects(run(), /Unsupported authorization mode/);
  assert.equal(provenanceCalls, enabled ? 1 : 0);
});

test('packaged runtime refuses a missing protected ledger pin before provider callbacks', () => {
  const f = setup();
  assert.throws(() => assembled(f, { schemaProof }), /Exact protected production ledger pin required/);
  assert.deepEqual(f.reads, []);
});
test('packaged runtime refuses malformed or extra protected ledger pin fields before callbacks', () => {
  for (const ledgerPin of [{ ...protectedLedgerPin, successfulCount: '213' },
    { ...protectedLedgerPin, ledgerSha256: 'invalid' }, { ...protectedLedgerPin, extra: true }]) {
    const f = setup();
    assert.throws(() => assembled(f, { schemaProof, ledgerPin }), /Exact protected production ledger pin required/);
    assert.deepEqual(f.reads, []);
  }
});
test('packaged schema-forward runtime refuses a transition ledger differing from protected policy', async () => {
  const f = setup(); const transition = reviewedTransition();
  transition.ledger.ledgerSha256 = h('d');
  const runtime = assembled(f, { schemaProof, ledgerPin: protectedLedgerPin, schemaTransition: transition });
  await assert.rejects(runtime.execute(), /Schema-forward ledger differs from protected production ledger pin/);
  assert.equal(f.reads.length, 3); assert.deepEqual(runtime.calls, []);
});
