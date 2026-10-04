# Evaluation And Publication Method

## Scope

This archive records the ended v11 code pilot, not an ongoing experiment or a live API demo. The later v12 repair is documented as a local-tested implementation change, not new evidence of answer superiority. RED/BLUE development is paused.

## Fair Comparison

Single and independent BLUE received the same original task and answer budget. RED reviewed both candidates. Public executable evidence was available to the pipeline and the Single self-review control. The control was assigned the full team's measured cost ceiling, not an identical amount of actually spent compute. One self-review ran; one was blocked before dispatch by conservative reservation. This limitation remains visible.

Five answers per task were frozen before held-out grading. Ties and failed cases remain in the evidence. No deliberately weakened model response was used as a baseline. Known faulty implementations were used only to test the verifier itself.

## Public Audit And Private Scoring

The archive publishes reviewed summaries, privately archived answers' SHA-256 fingerprints, recorded aggregate grades, resource totals, and minimized pipeline stage metadata. Task specifications, raw answers and code, detailed stage outputs, held-out test vectors, reference solutions, scoring sources, and per-case held-out feedback are not published. The audit command checks summary consistency without executing model-generated code or making model calls.

The complete private local ledger also contained duplicated requests, runtime metadata, and provider responses. It has not been uploaded wholesale. The public JSON is an allowlisted extraction, and therefore **does not have the original ledger hash**. Its `sourceLedgerSha256` identifies the original local source; its existence alone does not prove provenance. Answer fingerprints refer to private archived files; they cannot establish contents, timing, or provenance without access to those files.

The full application and live-generation harness are not included. This package does not reproduce held-out grading, stochastic model generation, or the entire application. Independent confirmation of the numeric grades would require separately authorized scoring material or a fresh, independently conducted experiment.

## Boundaries

The 98 held-out cases are clustered within two tasks. This is an exploratory pilot, not a statistically established population advantage. The detailed task descriptions, answers, and held-out inputs remain private. The author has seen the scoring outcomes, so a fresh evaluation still needs fresh tasks.

The original local verifier used resource-limited Node subprocesses, not a general security sandbox. It is not distributed here. The public audit treats generated code as data and does not execute it.

## Publication Hygiene

Only named portfolio files are uploaded. API keys, environment files, account balances, local paths, server logs, local browser storage, raw benchmark answers/code/logs, hidden inputs, and reference solutions are excluded. RED/BLUE source records and scores stay unchanged; this portfolio is a separate publication layer.
