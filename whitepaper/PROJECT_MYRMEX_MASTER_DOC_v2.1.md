# 📑 PROJECT MYRMEX: AUTONOMOUS MARS INFRASTRUCTURE FRAMEWORK
## Integrált Stack: **DS-CORE + THE HIVE + MYRMEX SWARM + MarsOS**

**Verzió:** 2.1 (Audited / Engineering Release)  
**Státusz:** PHASE-1 READY (Feltételes Fejlesztési Engedély)  
**Doktrína:** Autonomous Fortress & Zero-Risk Human Presence  
**Dátum:** 2026.01.09.  
**Szerző:** Márk Tóth — AI Systems Architect  
**Audit (Red Team):** Claude / Perplexity (megállapítások beépítve)

---

## Tartalomjegyzék (TOC)
0. Vezetői összefoglaló  
1. Scope & Claims (állítások és keretek)  
2. DS-CORE — energia és termodinamika  
3. THE HIVE — habitat architektúra  
4. MYRMEX SWARM — autonóm építőraj (v2.1 flotta)  
5. MarsOS — szoftver és biztonsági kormányzás  
6. Prioritások és Load-Shedding (P0–P4)  
7. Validáció és tesztelés (V-modell, Phase-0, stresszteszt)  
8. Záródoktrína  

---

# 0. Vezetői összefoglaló (Executive Summary)
A **Project Myrmex** (korábban Vanguard) egy olyan marsi bázisrendszer terve, amely **emberi beavatkozás nélkül épül fel**. Az alapdoktrína: **Zero-Risk Human Presence** — emberek kizárólag egy **kulcsrakész, fizikailag validált, és bizonyítottan hibatűrő** bázisra érkezhetnek.

A **v2.1** verzió integrálja a külső **Red Team auditok** során feltárt kritikus mérnöki hiányosságok javításait. A rendszer elvetette a kockázatos megoldásokat (belső hűtés-függőség, lábas robotika), és ipari-/űripari szinten **bizonyított** irányokra tért át:
- **külső radiátor farm** hőelvezetésre,
- **kerekes (Rocker-Bogie) futóművek** por- és karbantarthatósági okokból,
- **redundáns, szavazásos AI felügyelet** és emberi kormányzás (MarsOS).

---

# 1. Scope & Claims (Állítások és keretek — audit-biztos megfogalmazás)
A Project Myrmex egy **rendszermérnöki architektúra**, amely formalizálja:
- követelményeket és prioritásokat (P0–P4),
- hibaterjedés-gátlást és graceful degradation logikát,
- validációs kapukat (V-modell, Phase-0 Earth analog),
- biztonságkritikus szoftver-kormányzást (MarsOS).

A dokumentum kétféle elemet tartalmaz:
1) **Standardizálható mérnöki döntések** (kerekes mobilitás, külső radiátor farm, redundancia, szegmentáció, QA kapuk, TMR/BFT jellegű szavazás).  
2) **Hipotézis-vezérelt energiafeltételezés (DS-CORE rezervoár-csatolás)**, amely explicit módon **Phase-0 validációhoz kötött**, és a teszteredményektől függően **helyettesíthető** egy validált **hibrid RTG/Solar** forrással.

**Nem állítás:** hogy a DS-CORE fizikai alapfeltevései jelenleg bizonyítottak.  
**Állítás:** hogy az architektúra **mérhető, tesztelhető, auditálható**, és emberbelépés előtt igazolható.

---

# 2. DS-CORE — Energia és termodinamika
**Cél:** stabil **100 kW nettó villamos teljesítmény** biztosítása, és a hulladékhő garantált elvezetése marsi környezetben.

## 2.1 Energia architektúra: “Sharded Monolith”
- **Topológia:** 20 db független **Corelet** modul egy központi, sugárvédett magban.
- **Redundancia:** kritikus közös elemeknél **N+2**.
- **Graceful Degradation:** a rendszer **P0–P1** fenntartására képes **akár 5 Corelet elvesztése** mellett is.
- **Technológia:** szupravezető rezonátorok, nem-egyensúlyi környezeti fluxus hasznosítás (DS-CORE hipotézis)  
  **VAGY** Phase-0 alapján validált **hibrid RTG/Solar** forrás (fallback).

## 2.2 Elektromos “Spec Sheet” (baseline)
| Paraméter | Érték |
|---|---:|
| Rendszer nettó villamos teljesítmény | **100 kW** |
| Coreletek száma | **20** |
| Corelet nettó (névleges) | **5 kW** |
| Fő elosztás | **380 VDC** szegmentált busz |
| Védelmi elv | gyors szegment izoláció (SSCB-osztály) |

> Ha megtartod a korábbi célodat: **SSCB < 5 µs**, azt itt projektkövetelményként szerepeltesd. Kompatibilis a DC szegmentált busz topológiával.

## 2.3 Hőmenedzsment: “Quad-Loop Radiator Farm” (AUDIT FIX)
A hulladékhő elvezetésére a rendszer robusztus, **külső aktív hűtőmezőt** alkalmaz.

### Struktúra
- **4 db független** radiátor hurok, **100 m² / hurok** (összesen **400 m²**)
- szektor-izoláló szelepekkel, nyomásvesztés esetére

### Redundancia / degradáció
- Ha egy kör megsérül (mikrometeorit / fáradás):
  - az érintett szektort a szelepek izolálják,
  - a maradék **300 m²** képes **P0–P1** üzemre (**Graceful Degradation**).

### Védelem
- **Whipple Shield:** többrétegű könnyű páncélzat a csővezetékek körül
- **EDS (Electro-Dynamic Shield):** aktív porlerakódás-gátlás a panel felületén
- **Közegek:**  
  - külső kör: **ammónia**  
  - belső kör: **glikol** (hőcserélőkkel)

### Engineering Note (reviewer-pajzs)
A szükséges radiátor felület erősen függ: radiátor hőmérsékletétől, emisszivitástól, porállapottól és a megengedett ΔT-től.  
A **400 m²** itt **Phase-0 sizing baseline**: a Phase-0 Earth Analog alatt mérve validálandó, és modulárisan skálázható további hurkok hozzáadásával.

---

# 3. THE HIVE — Habitat architektúra
**Cél:** sugárvédett, nyomásálló élettér biztosítása a felszín alatt.

## 3.1 Struktúra
- **Topológia:** hexagonális modulrács, **3–5 m regolit fedés** alatt.
- **Héjszerkezet:**  
  - “A” héj: külső 3D nyomtatott **regolit-beton** (teherhordó)  
  - “B” héj: belső **kompozit nyomástartó liner** (zárt habitat)

## 3.2 Water Wall (Vízfal) és fagyvédelem (AUDIT FIX)
A külső gyűrűben tárolt folyadéktömeg sugárvédelmet és hőpuffert ad.

- **Folyadék:** nem tiszta víz, hanem **glikol / sóoldat (brine)** keverék (**−50°C** fagyáspont)
- **Aktív keringtetés:** integrált fűtőszálak + szivattyúk megelőzik a hőrétegződést és a fagyást

## 3.3 BIO-DOME (Agóra) — Chili-Cache
- **Prioritás:** **P2** (kritikus mentális/biológiai funkció)
- **Energiahatékonyság (AUDIT FIX):**
  - Nappal: **száloptikás napfény-gyűjtők** (parabolikus koncentrátor → light-pipe)
  - Éjjel: LED kiegészítés
- **Megjegyzés:** a ~40 kW megtakarítás **célérték**, Phase-0 során validálandó.

---

# 4. MYRMEX SWARM — Az építőraj (v2.1 flotta)
**Cél:** autonóm kivitelezés (“Dig & Print”) porálló, javítható platformokkal.

**Mérnöki váltás (AUDIT FIX):** a porérzékeny és komplex lábas (hexapod) rendszerek teljes kivezetése. Átállás a NASA-bizonyított **Rocker-Bogie** futóművekre.

## 4.1 SERIES-E (Excavator — “The Mandible”)
- **Feladat:** földmunka, gödörásás, rámpaépítés
- **Futómű:** 6-kerekes Rocker-Bogie (Curiosity osztály)
- **Eszköz:** ultrahangos bontófej + mélyásó kanál

## 4.2 SERIES-P (Processor — “The Foundry”)
- **Feladat:** regolit olvasztása, feedstock gyártása
- **Energia (AUDIT FIX): Hibrid tethered rendszer**
  - olvasztási igény: **40–50 kW**
  - ellátás: **500 m** magasra emelt kábeldobon érkező vezetékes táp
  - **Biztonság:** ~30 perces buffer akkumulátor vészhelyzetre (kábelszakadás → visszatérés)

## 4.3 SERIES-C (Constructor — “The Weaver”)
- **Feladat:** 3D nyomtatás
- **Kialakítás:** kerekes alváz + hidraulikus stabilizátor talpak (outriggers) nyomtatás idejére

## 4.4 SERIES-S (Medic — “The Cherry Picker”)
- **Feladat:** szigetelés fújása, falvizsgálat, zsilip szerelés
- **Kialakítás (AUDIT FIX):** falmászás helyett **teleszkópos gém (boom arm)** kerekes alvázon
- **Előny:** stabil, javítható platform a talajon, mégis eléri a mennyezetet/fal tetejét

---

# 5. MarsOS — Szoftver és biztonság
**Cél:** “Skynet-szintű” kockázatok kizárása és emberi kormányzás biztosítása.

## 5.1 Guardian AI Kernel
- **Architektúra:** **TMR (Triple Modular Redundancy)** — három fizikailag elkülönített compute futtatja párhuzamosan a döntéseket
- **Kritikus beavatkozás:** **2/3** szavazattöbbség szükséges (Byzantine-fault-tolerant elv)
- **Human-in-the-loop:** Safe Mode esetén a P3 (Comm) és P4 (Gyártás) lekapcsolása alapértelmezetten **Advisory**  
  → az AI javasol, az ember engedélyez.

## 5.2 Dead-Man Switch (30 napos protokoll)
- Ha 30 napig nincs érvényes, titkosított emberi “heartbeat” parancs:
  - a rendszer kapcsolat-szakadásra vagy legénységi cselekvőképtelenségre következtet.

**Reakció:**
- vészüzemmód (Load-Shedding **P0–P2**-re)
- maximális energia a kommunikációs tömbre
- folyamatos “Mayday” + telemetria sugárzás

---

# 6. Prioritások és Load-Shedding (P0–P4)
Energia- vagy termikus margin veszélye esetén a rendszer az alábbi sorrendet tartja fenn:

- **P0:** DS-CORE védelem + termikus containment (radiátor farm esszenciális hurkok, magvédelem, vezérlés)
- **P1:** életfenntartás (nyomás, O₂/CO₂ kontroll, hő túlélés)
- **P2:** **BIO-DOME / Chili-Cache** (biológiai + mentális stabilitás)
- **P3:** Földi kommunikáció
- **P4:** gyártás / bányászat / nem kritikus compute

**Szabály:** integritás > komfort. Konfliktusban a magasabb prioritás mindig nyer.

---

# 7. Validáció és tesztelés (V-modell)
Az emberi belépési engedély (**HEA**) csak szigorú validáció után adható ki.

## 7.1 Phase-0: Earth Analog Simulation (AUDIT FIX)
- **Helyszín:** Atacama (Chile) vagy Devon Island (Kanada)
- **Időtartam:** minimum **24 hónap** folyamatos üzem
- **Cél:** validálni
  - Myrmex flotta por- és tömítés-viselkedését
  - Radiátor Farm porállóságát + EDS hatékonyságát
  - DS-CORE termikus modellt és teljesítmény-stabilitást valós terhelés alatt

## 7.2 Autonomous Stress Test (Mars)
- **30 nap** autonóm működés a Marson, emberi beavatkozás nélkül,
- szándékosan injektált hibákkal:
  - szivattyúleállás szimuláció
  - szenzorhibák
  - kör-izolációs drill
- **Cél:** öngyógyító és containment képesség igazolása.

---

# 8. Záródoktrína
A Project Myrmex nem a Föld másolata, hanem egy célgép a túlélésért. A v2.1 elfogadta a marsi realitást: a por ellen kerekekkel, a hideg ellen redundáns radiátorokkal, a szoftveres hibák ellen pedig szavazásos redundanciával és kormányzási protokollokkal védekezünk.

**Státusz:** READY FOR PROTOTYPING (Phase-0 Earth Analog elsőként)
