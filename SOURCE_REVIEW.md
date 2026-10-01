Automated single-admin control distribution from Cadenza source `8da8b3be54d8a8609de35a56941e113bcdecb851` (PR #1147). No independent human authorization claim. Runtime source/artifact/CI/migration/provenance/replay/target/rollback checks remain mandatory. New records identify automated policy execution separately from deployment. Production credentials are not attached; deployment remains disabled pending integration verification. Distribution manifest binds exact code and configuration.

## School private storage CI enrollment proposal — 2026-10-01

This draft changes only the enrolled application workflow digest and its distribution manifest entry. It does not activate the enrollment, change production policy, or release the application. Control CI and the application storage tests must pass before adoption.

The proposed workflow adds a hosted runner with a local private School object sink, desktop and mobile native 10 MiB PDF tests, authenticated byte and hash readback, reference cleanup, exact process ownership checks, residue guards, and diagnostic artifacts. Every existing stage and the 60 minute job budget remain.

The runner uses the official MinIO Linux amd64 release binary, 118,849,720 bytes, SHA-256 `53e2a2cb16c5366ea6fbbc479c19ddb4c6a0948273e752f740fb1fbf27bb817c`. The published GitHub API digest agrees with the downloaded official checksum. No binary was downloaded or executed locally. The script verifies the exact HTTPS source, allowed redirects, byte count and hash before execution. It requires the hosted Linux runner and local app and database, uses synthetic credentials in a private temporary directory, binds localhost port 19105, and refuses cleanup when process ownership or bucket emptiness is uncertain. Customer secrets are not inherited.

The source is frozen at School commit `580608ed996041219072fe41e3212521871ffd28`. Scoped validation and native execution remain pending. Accepted 512 MiB audio, 2 GiB video, upload tokens, interrupted transfers, deployed R2 and provider outcomes remain separate open acceptance requirements.

Previous workflow digest: `93b2653e1a4bd0c4bcbe1505a44680837a4a18e8f9ee82fa2268f04d78abd58d`. Proposed workflow digest: `b937cedcb5e051d68aae7da6d2260f3e8788f472a57b14ac0e6906287c008a00`. The proposal was prepared against control main `93b074bfab088ff71140ad487756cc9584506ce6`. All other enrollment values and packaged component hashes were verified unchanged.
