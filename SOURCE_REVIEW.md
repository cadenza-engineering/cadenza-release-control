Automated single-admin control distribution from Cadenza source `8da8b3be54d8a8609de35a56941e113bcdecb851` (PR #1147). No independent human authorization claim. Runtime source/artifact/CI/migration/provenance/replay/target/rollback checks remain mandatory. New records identify automated policy execution separately from deployment. Production credentials are not attached; deployment remains disabled pending integration verification. Distribution manifest binds exact code and configuration.

## School private storage CI enrollment proposal — 2026-10-01

This draft changes only the enrolled application workflow digest and its distribution manifest entry. It does not activate the enrollment, change production policy, or release the application. Control CI and the application storage tests must pass before adoption.

The proposed workflow adds a hosted runner with a local private School object sink, desktop and mobile native 10 MiB PDF tests, authenticated byte and hash readback, reference cleanup, exact process ownership checks, residue guards, and diagnostic artifacts. Every existing stage remains. The browser job budget is 120 minutes based on the actual 60 minute timeout and the new large-file case bounds. Individual assertion timeouts are unchanged.

The runner uses the official MinIO Linux amd64 release binary, 118,849,720 bytes, SHA-256 `53e2a2cb16c5366ea6fbbc479c19ddb4c6a0948273e752f740fb1fbf27bb817c`. The published GitHub API digest agrees with the downloaded official checksum. No binary was downloaded or executed locally. The script verifies the exact HTTPS source, allowed redirects, byte count and hash before execution. It requires the hosted Linux runner and local app and database, uses synthetic credentials in a private temporary directory, binds localhost port 19105, and refuses cleanup when process ownership or bucket emptiness is uncertain. Customer secrets are not inherited.

The source is frozen at School commit `580608ed996041219072fe41e3212521871ffd28`. Scoped validation and native execution remain pending. Accepted 512 MiB audio, 2 GiB video, upload tokens, interrupted transfers, deployed R2 and provider outcomes remain separate open acceptance requirements.

Previous workflow digest: `93b2653e1a4bd0c4bcbe1505a44680837a4a18e8f9ee82fa2268f04d78abd58d`. Proposed workflow digest: `e6535e4cc4de930746316226e5435585bec5aac4198ac999802b190359627c8e`. The proposal was prepared against control main `93b074bfab088ff71140ad487756cc9584506ce6`. All other enrollment values and packaged component hashes were verified unchanged.

Independent School review found that upload-artifact v4 omits hidden files by default. The revised workflow uploads only the two validated ownership and residue JSON paths in a separate artifact with include-hidden-files enabled. Existing browser artifacts keep their previous behavior. The two JSON schemas contain only synthetic fixture/process identity and object metadata; no credentials or environment files are included. Official source: https://github.com/actions/upload-artifact/blob/v4/README.md#uploading-hidden-files . Application scoped and native storage gates remain pending.

The proposed quality job explicitly lints the two new storage source paths and checks the CommonJS runner syntax before full typecheck. Default Next lint omits these paths; this closes their pending scoped lint gate in hosted CI without local heavy execution. Existing root tsconfig includes the new e2e TypeScript spec, so the unchanged full typecheck also verifies it. No other workflow steps or budgets change. These checks and native execution remain pending on the application candidate.

## Coherent failure repair and original storage candidate

Final proposed workflow digest `e6535e4cc4de930746316226e5435585bec5aac4198ac999802b190359627c8e` binds the full original 310-case shared suite and every prior browser command, plus six planned desktop/mobile private PDF, exact 2 GiB video, exact 10 MiB CV and 512 MiB audio cases. Explicit configured lint covers every changed browser source and the runner; full TypeScript checking and unit gates are retained. The actual prior job exceeded 60 minutes with 70 shared cases still unverified, so this proposal allows 120 minutes including large-file bounds.

Thirteen browser stages and two fixture seed stages use `!cancelled() && steps.browser_health.outcome == success` after verified local health. Later independent stages execute after an earlier test failure; no continue-on-error or final failure suppression is introduced. A failed stage still fails the job. Build/install/health failure does not run these tests. Exact cleanup and artifact stages remain always-run. Official status semantics were reviewed at https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#status-check-functions .

The exact video 201 assertion remains required; no schema workaround or promise reduction is included. The Competition native My prospects handoff remains unresolved, with stronger exact destination diagnostics rather than a bypass. All corrected application lint/types/unit/native gates and independent source review remain pending. This draft does not activate the pin or perform a release.


## 2026-10-01: proposed V10 exact CI workflow enrollment

Proposed `.github/workflows/ci.yml` SHA-256 `7918a497019c82a8fd211542201842d0930b24e0199a97136662921d3a7b53bf` replaces `e6535e4cc4de930746316226e5435585bec5aac4198ac999802b190359627c8e` in `runtimePolicy.workflowSha256`. The separate reviewed owner-prebuilt-build workflow digest remains6ef76c86099d9b8b14ffe01acda1ea0a23b42bbd5c657da9e259c527eac1f0bc. Gate core requires CI evidence digest equal runtimePolicy.workflowSha256; prepare-artifact separately checks reviewedBuilderWorkflowSha256 against owner-prebuilt-build.yml. A discarded private proposal incorrectly changed the separate builder digest; it was never pushed/adopted.

V9 early storage diagnostic artifact/tee preserves native failure status; V10 adds three changed browser specs to existing explicit lint. Every native command, role seed, guard, timeout, cleanup and late artifact remains retained. Generated log/context content is not preemptively certified credential-free; retain private artifact access.

Previous application80d0 run36883001357 passed migration/quality/build/health but selected browser markers364PASS/37FAIL/12SKIP; storage cleanup failed. Five later storage cases stopped at dirty-bucket preflight, so 2GiB behavior remains untested. Focused repairs require full CI/native reproof. Original inventories, provider, protected release and sale clearance remain OPEN.

Exactly three paths: nested CI workflow digest, enrollment distribution hash/byte entry, this source review. All27 baseline/proposed package hash/bytes checked. Other runtime policy/requiredchecks, builder/toolchain, approver, signer, permissions, governance, dispatch identities unchanged. No activepin, merge, release, production data or credential changes.

## 2026-10-03: current control main conflict reconciliation

Merged control main ee4f639 (article-only CI enrollment) into this proposal. The proposed runtimePolicy.workflowSha256 remains 7918a497019c82a8fd211542201842d0930b24e0199a97136662921d3a7b53bf, verified against application candidate179fd5. Every other enrollment value and packaged component is retained from current control main. The distribution entry is regenerated from actual enrollment bytes. New control CI is required; this proposal does not merge control main, activate a pin, deploy or authorize a sale.

## 2026-10-03: early native withdrawal repair diagnostics

Proposed application workflow SHA256 8afe2fbf30a8ba4f7ed7937d9532f0a6eee35a8f17c2f087a83683d5f1a1483f adds one actual desktop/mobile keyboard repair retake after verified local health and an immediate small diagnostic artifact. All previous workflow bytes remain in order, including the full shared suite, workers, timeouts, required gates and final storage/process cleanup. pipefail and failed-step status are retained. The early two cases repeat in the full suite and do not increase unique coverage. The proposal avoids waiting for the full shared-suite log to diagnose this browser-reproduced withdrawal defect. Independent workflow review and exact candidate native execution remain pending. No control main merge, pin activation, DDL, deployment or sale clearance is performed by this draft.

## Current failed controls and repair retakes — October 3

Proposed application CI workflow SHA-256 dde88f05dd702cd5019c1623c512e0a4e999a54ce06dca26235e78d9feda9679 expands the prior early withdrawal retake to twelve exact spec files, fourteen cases across desktop and mobile (28 planned executions). Actual early failure fails the job and leaves the unchanged full shared suite untested. Early success still requires the full shared suite and all original selected gates. Both projects, workers, pipefail, and always server/storage cleanup and evidence uploads are retained. Repeated early/full cases add no unique coverage. Independent source review and YAML parse passed; actual browser retakes remain pending. This draft changes only the runtime CI digest and its packaged enrollment checksum, with this appended review note. Separate builder digest, policies, identities and every other packaged component remain unchanged. No control activation, production migration, deployment, or sellability verdict is performed.


## Request Info browser regression enrollment — October 3

Proposed application CI digest 83490960d73e2a7323aaa12fe5f3d7d1485397396a91879c65b6ddc622049cbf adds the new School Request Info spec to the existing early command: five distinct cases across desktop/mobile, ten planned executions, alongside all prior 28 (38 planned total). Two added cross-profile cases cover hydrated and typed SSR origins; both profile component boundaries are scoped by organization slug. Explicit lint also enrolls the new spec. The full school-ci glob command, both projects, workers, pipefail, failure gating, other selected stages, artifact uploads and exact storage cleanup remain unchanged. Early failure leaves full shared acceptance untested; early success requires the complete original suite. Source fixes are unverified until exact hosted gates and native retakes pass. The enrollment digest and its manifest hash/bytes are updated from actual bytes; all 27 packaged entries verified. Builder, policy, identities and all other packaged files unchanged. Independent source review and new control CI required. No production merge, pin activation, migration, deployment or sellability clearance.


## Sidebar Clear All native defect regression — October 3

Proposed application CI digest de63be9af049edc5142d8757a12368fac9c9f88009e007d21a9d292351f704ea adds only the Festival/Competition public-lane Clear All regression spec to the existing early command and explicit lint. Two cases across desktop/mobile add four planned executions; all previous38 remain (42 planned total). The complete original shared admissions glob, projects, workers, pipefail, required gates, failure gating, artifact custody and exact storage/process cleanup remain unchanged. Compiler corrections and reset behavior require fresh hosted runtime verification; no source review counts as native PASS. Only enrollment digest/manifest actual checksum and this appended note change; all27 packaged entries verified and other policies/builder/identities retained. Independent review and current control CI required; no activation, DDL, deployment or sellability claim.


## Reviewed 82-execution candidate enrollment proposal — October 3

Application candidate `55cd101cfa8136e8283e884c3182a54d8bc273f6` enrolls CI workflow SHA-256 `08eb2eb21aea59143e610f0087c75ab908c8383812f8752d62be170353adea91`, replacing `de63be9af049edc5142d8757a12368fac9c9f88009e007d21a9d292351f704ea`. The reviewed combined packet contains 30 paths. Its early browser command plans 82 desktop/mobile executions: the prior 42, eight from the earlier reviewed additions, and 32 from sixteen additional cases (six School, one Hiring, nine Festival). Repeated early/full cases do not add unique coverage. Independent bounded enrollment/overlap source review receipt SHA-256 is `331597a526ed9c2b861189821155a0dbffc24f242076965b89b7ca490e6572d5`.

Previous application candidate `24717798a31942a89dc5da46e5eb3317c0df3b2a`, CI run `37100999016`, is terminal FAIL; its early browser markers were 40 PASS and 2 FAIL, with both failures in School export audit assertions. Those historical failures remain evidence. Current candidate CI run `37103651814` is pending; no current native result, complete shared-suite pass, artifact approval, deployment or sellability clearance is claimed. The complete original shared-suite command, projects, workers, pipefail, failure gating, required checks, artifact custody and exact storage/process cleanup remain retained in the reviewed application workflow.

This private proposal changes only runtimePolicy.workflowSha256, the actual enrollment hash/bytes in the distribution manifest, and this appended review note. All 27 packaged entries were checked against exact base bytes; the other 26 entries and packaged files are unchanged. All other enrollment values, production and ledger policies, separate builder/toolchain digests, governance and dispatch identities remain unchanged. Independent review and current control CI are required before adoption. This preparation does not modify the control checkout, merge or push, activate OWNER_GATE_SHA, attach credentials, run a migration, deploy, or authorize a sale.


## Current failure repairs and reviewed next86 workflow enrollment proposal — October 3

Proposed application CI workflow SHA-256 `6accb7a24e69ba2e93911e884b864a4c12b277cee1dff965adf61603d2383ee3` replaces `08eb2eb21aea59143e610f0087c75ab908c8383812f8752d62be170353adea91` in `runtimePolicy.workflowSha256`. The proposed bytes are bound to the persistent combined packet `.qa-machine/prepared/combined-next86-reviewed-repairs-20261003/.github/workflows/ci.yml`. This is a source-only enrollment proposal against exact control base `65a37da584741a0c634118c30bb48c921c78c7ad`; the new application candidate identity and exact hosted runtime outcomes must be recorded separately after integration.

Current application candidate `55cd101cfa8136e8283e884c3182a54d8bc273f6`, hosted run `37103651814`, finished with 70 PASS and 12 FAIL in the 82-execution early browser stage. The full shared suite was skipped; downstream storage preconditions failed on retained School object residue, and strict cleanup refused that residue. Those failures and retained evidence remain; this enrollment update does not turn them into passing acceptance. The proposed combined workflow plans the next 86-execution early stage and the hosted School capture path. Both the corrected browser controls and any capture/runtime outcomes require their actual candidate retakes.

Exactly three proposed control paths change: the nested application workflow digest, the enrollment entry checksum and actual byte length in the distribution manifest, and this appended source review note. All 27 baseline packaged file checksums and byte lengths were verified against Git base bytes. The other 26 distribution entries and component bytes are unchanged. Every other enrollment value, required-check name, production and ledger policy, builder and toolchain digest, governance, environment, owner and dispatch identity is preserved. Independent bounded review and control CI are required before adoption. No control checkout mutation, activation, commit, push, release pin, migration, deployment, credential operation or sellability clearance occurs during this preparation.


## Reviewed next126 browser enrollment — October 3

Application source e41d0a931612842caa5b0ea99001d8d1d94b59d4, tree812bc0cbb1e6e75056392c5761cf3740249920d2, enrolls exact workflow SHA256 9d5b1e595649380e68ffecf50c1be0b2c417e433a94937c3cd0604008ce5a7d7, replacing 6accb7a24e69ba2e93911e884b864a4c12b277cee1dff965adf61603d2383ee3. Six appended native specs add40 planned desktop/mobile executions to original86 (126 planned, runtime pending). The single School early-success dependency is removed so the unchanged complete School glob runs after an early failure; !cancelled and healthy localhost guard, prior failing job status, assertions, workers, owned fixture/unknown-write retention and strict final residue refusal remain unchanged. Combined enrollment inverse and exact source packet content were independently reviewed.

Required application CI37135038413 is in progress; source review is not browser acceptance. Previous e79 run37130726826 failed on one of86 cases; private storage6 and later gates passed, and exact storage cleanup verified. Ordinary inquiry206 capture passed independently, while automatically triggered shared capture37135034036 has differing obsolete native bytes and remains separately tracked.

Exactly three control paths: runtimePolicy.workflowSha256, enrollment manifest actual hash/bytes, this note. All27 baseline packaged hashes/bytes verified; other26 entries/components and every other enrollment field unchanged. New control CI and source peer review required. This draft is unactivated: no active release pin, production policy, migration, deployment, credential or sellability change.


## Prepared next160 browser enrollment (unactivated) — 2026-10-03

App private source tree: 67945fe0342c78fdbcdf37ed512559c8628508ac. Reviewed required CI workflow SHA256: 706a1892ce0e09b8b6b1dee1d95e0b2fc3f07b94074b4c1e630ccb9a47856182. Preserves all original125 spec files across desktop/mobile, removes68 duplicate file/project invocations, adds trust and event-editor specs (127unique files/254pairs). Planned early160 is unrun; separate local synthetic fee4/deposit2/aid6 captures are unrun.

Only runtimePolicy.workflowSha256 changes in enrollment; the distribution manifest updates its matching digest/byte length. All other26 packaged entries and policy fields remain byte equivalent. This preparation does not activate the control pin, approve a release, apply DDL, or deploy. Exact app/control CI, recovery custody and production browser proof remain required.


## Prepared next178 browser enrollment (unactivated) - 2026-10-03

App source prepared commit5c124c032fa8d9bce4b94f3cf09ad7cb526a0ccd, tree8a1e42cc620076c25a6104e4ad0c31b2d43fbbe8. Required CI workflow SHA25653dbfa8b169eb409c1933c1e11d646f3ae8e2dfb7e33ec2b8f6199bdad2713ca. Original127 unique specs retained plus5 explicitly enrolled files,132unique/264file-project pairs; School census123, remainder87. Early178=160prior+16newcontrol executions+2prior message retakes, all unrun. Exact e41 CI terminal failure retained; corrected failures require browser retakes.

Only enrollment workflow digest, matching manifest hash, and this append-only note change. All other26 packaged entries and policy fields unchanged. This is unactivated; app/control CI, recovery, release and production browser acceptance remain required.
