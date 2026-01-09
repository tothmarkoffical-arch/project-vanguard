# 🚀 Project Myrmex
**Autonomous Mars Infrastructure Framework — Zero-Risk Human Presence**

> An audited systems-engineering white paper series for a build-first Mars base:  
> **DS-CORE (Power) • THE HIVE (Habitat) • MYRMEX SWARM (Autonomous Construction) • MarsOS (Safety Governance)**  
> Developed via a multi-model red-team/blue-team review loop (ChatGPT ↔ Gemini) with human-in-the-loop validation.

---

## Quick Links (v2.1 — Audited / Engineering Release)
- **White Paper (EN):** `whitepaper/PROJECT_MYRMEX_MASTER_DOC_v2.1_EN.md`
- **Assumption Register (EN):** `appendix/ASSUMPTION_REGISTER_v2.1_EN.md`
- **Certification Matrix (EN):** `appendix/CERTIFICATION_MATRIX_v2.1_EN.md`

> Hungarian archive versions may exist alongside EN documents for internal drafting.

---

## Core Doctrine
**Humans only enter when the base is verified — not when it’s “good enough”.**

### System Priorities (Load-Shedding)
When power/thermal margin is threatened, the stack maintains loads in this order:
- **P0:** DS-CORE protection + thermal containment (radiator farm essential loops, core protection, control power)
- **P1:** Life support (pressure, O₂/CO₂ control, thermal survivability)
- **P2:** **BIO-DOME / Chili-Cache** (biological + mental stability)
- **P3:** Earth communications
- **P4:** Manufacturing/mining/non-critical compute

**Rule:** Base integrity overrides comfort. In conflicts, higher priority always wins.

---

## What This Repo Is
Project Myrmex is a **systems engineering architecture** designed to be:
- **Measurable:** requirements are stated explicitly
- **Testable:** verification gates define what “proven” means
- **Auditable:** assumptions are tracked and can be challenged
- **Failure-oriented:** designs prioritize containment and graceful degradation

### Scope & Claims (Audit-Safe Framing)
This repo includes:
1) **Standardizable engineering choices** (wheeled mobility, external radiator farm, redundancy, segmentation, QA gates, voting-based control).
2) A **hypothesis-driven energy assumption (DS-CORE reservoir coupling)** that is explicitly **Phase-0 gated** and may be replaced by a validated **hybrid RTG/Solar** source based on test outcomes.

**Non-claim:** that all physics assumptions are currently proven.  
**Claim:** that the architecture is structured for verification prior to human entry.

---

## System Overview (One-Page)
- **DS-CORE:** Sharded “Corelet” power core (20 modules), **N+2** critical redundancy, graceful degradation under module loss, **380 VDC** segmented distribution.
- **Radiator Farm (Audit Fix):** Quad-loop external cooling field with sector isolation + dust mitigation (Whipple + EDS), modularly scalable.
- **THE HIVE:** Buried hex-module habitat with dual-shell design (3D-printed regolith concrete + composite pressure liner).
- **Water Wall (Audit Fix):** Brine/glycol shielding ring with active circulation + freeze protection.
- **BIO-DOME / Chili-Cache:** Central “Agora” prioritized for biological and mental stability; daylight delivered via light-pipe / fiber collection, LEDs at night.
- **MYRMEX SWARM (Audit Fix):** All-wheeled fleet (Rocker-Bogie class) optimized for dust, maintainability, and deterministic construction.
- **MarsOS:** Safety governance via TMR compute and vote-based critical actions; human authorization in advisory Safe Mode; 30-day Dead-Man protocol.

---

## Architecture Diagram
```mermaid
flowchart TB
  R[Non-equilibrium Environment<br/>EM Noise + Particle Flux] --> P[DS-CORE: Corelets]
  P --> B[380 VDC Segmented Bus]
  B --> H[THE HIVE Habitat]
  H --> D[BIO-DOME (Agora)<br/>Chili-Cache]
  S[MYRMEX SWARM<br/>Dig & Print] --> H
  O[MarsOS Guardian Kernel<br/>TMR + Vote Gate] --> P
  O --> H
  V[Verification Gates<br/>Phase-0 → Stress Test → HEA] --> H
Verification & Testing (V-Model)
Human Entry Authorization (HEA) requires:
Phase-0 Earth Analog (24 months): Atacama or Devon Island continuous operation validating dust behavior, radiator farm performance, thermal models, and fleet survivability.
Autonomous Stress Test (Mars, 30 days): fault injection drills (pump stops, sensor faults, loop isolation) proving containment and self-recovery.
Status
v2.1: Audited / Engineering Release (docs in whitepaper/ + appendix/)
How to Contribute (Optional)
Open an Issue for: inconsistencies, missing requirements, test gaps, or sizing assumptions.
Propose changes via PRs with: Claim → Requirement → Test → Evidence → Gate structure.
License
Code: MIT (see LICENSE)
Documentation: Recommended CC BY-SA 4.0 (or CC BY-NC-SA 4.0) — apply if you want clearer reuse terms for papers.
Credits
Author: Márk Tóth
Red Team Audit Inputs: Claude / Perplexity (findings integrated)
Method: multi-model critique loop + human-in-the-loop validation
