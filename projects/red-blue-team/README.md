# RED/BLUE Answer Pipeline

**Status:** exploratory prototype tested; development paused on 2026-10-04. **Result:** superiority not established.

[Portfolio](../../README.md) · [Recorded results](../../evidence/red-blue-v11.json) · [Archive audit](../../repro/README.md)

## Problem And Hypothesis

An AI answer can appear convincing while being unchecked, incomplete, or wrong. My hypothesis was that separating generation, adversarial review, and auditing could detect errors before the final answer is delivered.

The tested architecture made a Single baseline and an independent BLUE candidate, compared them through RED criticism, audited the criticism, and retained or revised an answer. A model-based quality gate reviewed the proposed final output. Registered code tasks also received executable public-test feedback.

```text
Original task ----> Single baseline ----------------------+
             +---> Independent Builder / BLUE ----------+|
                                                       ||
                         public executable checks <-----++
                                   |
                            Critic / RED
                                   |
                                Auditor
                                   |
                         retain or synthesize
                                   |
                        quality gate + public tests
                                   |
                      freeze all experimental arms
                                   |
                        held-out evaluation only
```

## Live Pilot

One registered run per task, using Claude Sonnet 5. Single and BLUE received the same answer budget and initial guidance. No AI answer was deliberately degraded. All five arms were frozen before held-out grading for their task. Held-out feedback did not trigger regeneration.

| Method | Scheduler /49 | Transactions /49 |
| --- | ---: | ---: |
| Single | 48 | 49 |
| Independent BLUE | 48 | 49 |
| Full RED/BLUE | 48 | 49 |
| Single with public-test self-review control | 48 | 49 |
| Two-candidate merge without RED/Auditor | 48 | 49 |

The self-review control actually made a new review call only on the first task. On the second, its conservative call reservation did not fit the full-team cost ceiling, so its answer stayed the original Single. This is an incomplete enhanced-control comparison, not two completed strong-control runs. The merge control completed on both tasks.

The score out of ten is the functional held-out pass rate, not a model's quality opinion. Each task had 8 public and 49 held-out cases. The 98 held-out cases belong to **two tasks**, not 98 independent problems.

## Time And Cost

| Method, both tasks | Model-call seconds | Tokens | Estimated USD |
| --- | ---: | ---: | ---: |
| Single baseline | 103.61 | 16,322 | 0.130924 |
| Full RED/BLUE, including baseline | 778.83 | 125,986 | 0.774356 |

The whole campaign, including new control calls, made 17 successful API calls and used an estimated USD 0.910984. Shared calls were paid once. Costs are usage-based estimates, not account balances or provider invoices. CPU verification time and benchmark judges are not part of the model-call figures; this pilot did not run model judges.

## Failure And Learning

All methods failed the same valid scheduler edge case: a very large worker count. All passed the public cases. This shows why passing the available checks does not establish correctness for every input.

The v11 model-based quality gate also initiated rewrites for concerns its own explanation called non-errors. This exposed a weakness of language-only review: criticism can become an unjustified edit.

The subsequent v12 change makes that gate advisory for registered code tasks. Executable failures can trigger one targeted repair, retained only after measured improvement without losing previously passed public checks. Task switching and manual answer edits invalidate old executable evidence. These changes received local regression testing; **they have not received a fresh live superiority evaluation**.

## What Is And Is Not Supported

The public package records aggregate grades, answer fingerprints, and minimized stage timing. Raw answers, code, detailed logs, held-out cases, and reference solutions remain private. Neither answer contents nor grades can be independently verified from this package alone. The local prototype supported observable steps and repeatable code grading, but this publication does not provide independent score verification. It did not demonstrate a better final answer, lower cost, elimination of hallucination, or general superiority over Single AI.

The original local network failure happened before a model answer and was recorded separately. Its uncertain reservation was not called paid usage. The successful recovery run retained its fixed tasks and controls. There was no repeat-until-positive stopping rule.

## Future Decision

Development is paused. A future comparison would need fresh tasks, a genuinely funded self-review control with the same tools, frozen metrics, and an explicit quality-versus-cost threshold. The original task specifications and answer archive remain private. These tasks have already informed development and cannot count as new evidence for the next run.

Related research shows both opportunities and limitations: [test-oriented code workflows](https://arxiv.org/abs/2401.08500) and [critical evaluation of multi-agent debate](https://arxiv.org/abs/2502.08788). Neither is evidence that this prototype works better.
