# Check The Published Summary

Use Node.js 24 or newer in an ordinary, non-elevated environment:

```sh
node repro/verify.mjs
```

This checks the recorded grade arithmetic, resource fields, method coverage, and fingerprint format. It makes no API calls, needs no credentials, and does not execute generated code. Fingerprints refer to private files and are not validated against answer contents here.

The recorded held-out results for all five methods are scheduler 48/49 and transactions 49/49. The enhanced Single control made a new review call only on the scheduler task. The audit checks consistency, not whether those recorded grades are correct.

Raw answers/code/logs, held-out cases, reference solutions, and the scoring implementation remain private. Independent re-scoring is not possible from this package. A successful audit is not proof of answer quality, experimental provenance, or RED/BLUE superiority.
