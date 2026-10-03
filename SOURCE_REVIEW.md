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
