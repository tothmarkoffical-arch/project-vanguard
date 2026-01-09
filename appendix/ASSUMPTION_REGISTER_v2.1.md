# APPENDIX — ASSUMPTION REGISTER (v2.1)
**Project:** Myrmex  
**Purpose:** Explicitly track assumptions, test gates, and fallback paths.

## A1 — DS-CORE energy mechanism
- **Assumption:** non-equilibrium reservoir coupling is physically realizable at useful power density.
- **Gate:** Phase-0 validation under controlled test conditions.
- **Fallback:** validated hybrid RTG/Solar source integrated into DS-CORE distribution and protection stack.

## A2 — Radiator Farm sizing (400 m² baseline)
- **Assumption:** 400 m² (4×100 m²) provides sufficient thermal margin for nominal operation, with P0–P1 survivability under 1-loop loss.
- **Gate:** Phase-0 measured emissivity/dust impacts and allowable radiator temperature.
- **Scaling rule:** add loops modularly if measured margins are insufficient.

## A3 — EDS effectiveness on radiators
- **Assumption:** electro-dynamic dust mitigation prevents severe performance degradation.
- **Gate:** Phase-0 dust deposition experiments + long-duration field run.
- **Fallback:** mechanical cleaning cycles, increased radiator area, or protective shutters.

## A4 — Water Wall freeze protection
- **Assumption:** brine/glycol mix + active circulation prevents freezing and stratification.
- **Gate:** Phase-0 thermal cycling tests including “Martian night” profiles.
- **Fallback:** increased insulation, higher circulation power, segmented tanks with localized heating.

## A5 — Bio-Dome daylight pipe savings (~40 kW target)
- **Assumption:** fiber-optic / light-pipe system reduces electrical lighting demand significantly.
- **Gate:** Phase-0 measured PPFD/DLI performance.
- **Fallback:** increased LED capacity + thermal/power budget adjustment.
