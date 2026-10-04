# Pre-Action AI Safety Review

**Status:** early, untested concept. No implemented safety system or safety-performance claim.

[Portfolio](../../README.md)

## Original Idea

Keep the separation between proposing, criticizing, and auditing, but apply it to the risk of an AI's proposed answer or action **before** the system acts. The intuition is deliberation before action, rather than immediate execution. The human analogy motivates the idea; it is not a scientific claim about human cognition or AI consciousness.

My starting idea is to have the AI evaluate its own potentially dangerous answers or actions before it acts.

## Proposed Direction, Not Implemented

1. Generate a proposed answer or action without executing it.
2. Review potential harms, affected parties, permissions, reversibility, and uncertainty against an explicit policy.
3. Audit whether the risk judgment has evidence or is merely speculation.
4. Let an enforcement layer allow, revise, block, or request human approval before a consequential action.

The fourth step is a proposed design requirement, not a feature already built. A prompt alone cannot guarantee that tools obey a safety decision. Repeated roles using the same model may share the same failure.

## Open Questions

- What counts as a dangerous action in the selected domain, and who sets that policy?
- Can untrusted content persuade the reviewer to waive an actual restriction?
- Does the review reduce unsafe actions without unnecessarily blocking harmless ones?
- What happens on disagreement, missing evidence, or a timeout?
- Which actions always require independent checks or human authorization?

## Evidence Needed

Define a narrow use case first. Pre-register safe, unsafe, and ambiguous scenarios, include attempts to manipulate the review, and compare against both a standard Single baseline and a Single with the same risk checklist, tools, and budget. Measure missed hazards, false blocks, latency, and cost on fresh cases.

A first prompt and a prototype are planned, not published here. No system can be described as safe on the basis of a favorable self-review alone.
