# TothMark | AI-ötletek, prototípusok és bizonyítékok

[English overview](README.md)

Az érdeklődésem az AI-rendszerek megbízhatósága, biztonsága és használhatósága. Problémákat és megoldási koncepciókat fogalmazok meg, majd azt keresem, hogyan lehetne ellenőrizni, hogy az ötlet tényleg működik-e. A megvalósításhoz és teszteléshez AI-segítséget használok; ezt nem állítom be önálló programozói teljesítménynek.

## Koncepciók

| Téma | Kérdés | Állapot |
| --- | --- | --- |
| [RED/BLUE válaszpipeline](projects/red-blue-team/README.md) | Javíthatja-e az AI-válaszokat a független alkotás, kritika és audit? | Tesztelt prototípus; jegelve |
| [Cselekvés előtti AI safety ellenőrzés](projects/ai-safety/README.md) | Értékelhető-e a javasolt válasz vagy művelet veszélye még a végrehajtás előtt? | Korai koncepció; még nincs eredmény |
| [Promptalapú képmunkafolyamatok](projects/image-workflows/README.md) | Automatizálható-e részben a kép szerkesztése és felskálázása, következetes vizuális eredménnyel? | Korai koncepció; minták még nincsenek publikálva |

## Mit Mutatott A RED/BLUE Teszt?

Két valódi API-feladatban a Single AI és a teljes pipeline azonos rejtett eredményt ért el: 48/49 az ütemezőben, 49/49 a tranzakció-feldolgozóban. A teljes pipeline drágább és lassabb volt. Ez nem bizonyít általános fölényt, de az ellenőrzési módszert, a hibákat és a következő vizsgálható irányt konkrétan bemutatja.

[Esettanulmány](projects/red-blue-team/README.md) · [Rögzített eredmények](evidence/red-blue-v11.json) · [Összesítés API nélküli ellenőrzése](repro/README.md)

A nyilvános csomag az átnézett összefoglalót, a pipeline lépéseinek időadatait és a rögzített mérési összesítést tartalmazza. Az eredeti válaszok, kódok, részletes naplók, rejtett tesztek és referencia-megoldások privátak maradnak: a pontszámok ebből a csomagból nem mérhetők újra függetlenül. Ez dokumentált kísérleti eredmény, nem függetlenül igazolt teljesítmény.

## Hozzájárulás És Korlátok

Az alapötletet, a célkitűzést és a vizsgálat irányát én adtam. A kód, az ellenőrzők és a dokumentáció AI-segítséggel készültek. A portfólió nem igazol szakmai minősítést, nem állít elsőbbséget a koncepciókra, és nem mutat be még nem mért ötletet kész termékként.

A RED/BLUE fejlesztése 2026-10-04-től jegelve van. A safety és képkészítési irány külön ötlet, nem a korábbi döntetlen átnevezése sikerre.
