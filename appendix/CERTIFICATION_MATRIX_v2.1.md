# APPENDIX — CERTIFICATION MATRIX (v2.1)
**Claim → Requirement → Test → Evidence → Gate**

## C1 — P0–P1 survivability under corelet loss
- **Requirement:** Maintain P0–P1 with up to 5 corelets lost.
- **Test:** injected corelet isolation drills + sustained operation.
- **Evidence:** power logs, containment logs, load-shedding state.
- **Gate:** PASS required before HEA.

## C2 — Radiator loop loss containment
- **Requirement:** isolate punctured loop sector; maintain P0–P1.
- **Test:** pressure loss simulation, valve isolation timing.
- **Evidence:** loop telemetry, valve logs, thermal stability.
- **Gate:** PASS in Phase-0.

## C3 — Mobility robustness (wheels + seals)
- **Requirement:** 24 months continuous analog run without mission-ending dust failure.
- **Test:** Phase-0 field operation (Atacama/Devon).
- **Evidence:** maintenance log, failure stats, seal inspection reports.
- **Gate:** PASS required before Mars deployment.

## C4 — MarsOS critical action governance
- **Requirement:** 2/3 vote for critical actions; advisory mode for P3/P4 safe mode actions.
- **Test:** replayable incident suite + fault injection.
- **Evidence:** decision logs, vote records, denial records.
- **Gate:** PASS required before autonomous commissioning.

## C5 — Dead-Man Switch protocol correctness
- **Requirement:** after 30 days missing heartbeat → P0–P2 + comm maximize + Mayday.
- **Test:** long-duration comm blackout simulation.
- **Evidence:** mode transition log, telemetry burst verification.
- **Gate:** PASS required before HEA.
