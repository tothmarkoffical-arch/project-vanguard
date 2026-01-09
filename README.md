## Architecture Overview (Text)

| Element | Role | Connects To |
|---|---|---|
| Non-equilibrium environment | External reservoir (EM noise + particle flux) used as a gated input assumption for DS-CORE testing | DS-CORE |
| DS-CORE (Corelets) | Modular power core (20 Corelets) with redundancy and graceful degradation | 380 VDC segmented bus, MarsOS |
| 380 VDC segmented bus | Primary distribution backbone with isolation/segmentation for fault containment | THE HIVE, critical loads |
| THE HIVE habitat | Buried hex-module habitat (regolith concrete + composite pressure liner) | BIO-DOME, MarsOS, Verification gates |
| BIO-DOME (Agora) / Chili-Cache | Biological + mental stability core zone (P2 priority) | THE HIVE |
| MYRMEX SWARM (Dig & Print) | Autonomous construction fleet that excavates, processes, and prints the habitat | THE HIVE |
| MarsOS Guardian Kernel (TMR + vote gate) | Safety governance: vote-gated critical actions + advisory mode in Safe Mode | DS-CORE, THE HIVE |
| Verification gates (Phase-0 → Stress Test → HEA) | Evidence-driven validation chain enabling Human Entry Authorization | THE HIVE, full stack |

**Flow (plain text):**  
Non-equilibrium environment → DS-CORE → 380 VDC segmented bus → THE HIVE → BIO-DOME (Chili-Cache).  
MYRMEX SWARM builds THE HIVE. MarsOS governs DS-CORE and THE HIVE. Verification gates enable HEA.
