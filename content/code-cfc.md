# California Fire Code (CFC) & Solar

The **California Fire Code (CFC)** is **Title 24, Part 9** of the California Code of Regulations. It is based on the **International Fire Code (IFC)** published by the ICC, then amended by California agencies — principally the **Office of the State Fire Marshal (OSFM)** and the Department of Housing and Community Development (HCD) — to add state-specific provisions (wildland-urban interface, seismic, and PV access details). The CFC governs **fire-service rooftop access, solar access pathways, ridge setbacks, marking, and rapid-shutdown enforcement** for photovoltaic (PV) and energy-storage systems.

For the model-code framework and how the I-codes map onto California's Title 24 parts, start with [Building Codes & Standards Explained](codes-standards-overview.md). Because the CFC is California's version of the IFC, read this alongside [The International Fire Code (IFC) & Solar](code-ifc.md) — the structure and most solar provisions are inherited from the IFC.

> **The AHJ and fire marshal are authoritative.** California operates on a **three-year (triennial) code cycle**. Section numbers, the base IFC edition, and CA amendments change between cycles, and **local fire jurisdictions adopt further amendments**. Confirm the edition, published amendments, and any local ordinance in force with your building department and fire marshal before relying on any value below.

## How the CFC Relates to the IFC

The CFC does not rewrite the IFC — it **adopts the corresponding IFC edition by reference and layers California amendments on top**. Practically, that means:

- Solar rooftop **access, pathway, and setback** provisions live in the same chapter as the IFC (energy-systems / solar provisions), with California-specific edits.
- The **California amendments are marked** in the code text (change bars / margin markings) so designers can see what differs from the base IFC.
- The **OSFM Solar Photovoltaic Installation Guideline** historically shaped the residential access/setback approach that later migrated into the IFC and CFC text. Many fire jurisdictions still reference it for interpretation.

The table below shows which base IFC edition each Title 24 cycle adopts. The residential access model (two pathways plus ridge setbacks) and the commercial pathway model (perimeter plus interior pathways) are broadly consistent across recent cycles, but exact section numbers and thresholds shift between editions.

| Title 24 (CFC) Cycle | Base IFC Edition | Published | Typical Effective Date |
|----------------------|------------------|-----------|------------------------|
| 2016 CFC | 2015 IFC | July 2016 | January 1, 2017 |
| 2019 CFC | 2018 IFC | July 2019 | January 1, 2020 |
| 2022 CFC | 2021 IFC | July 2022 | January 1, 2023 |
| 2025 CFC | 2024 IFC | July 2025 | January 1, 2026 |

## 2016 Cycle

The **2016 California Fire Code** is based on the **2015 IFC** (effective January 1, 2017). In the 2015/2016-era fire code, PV rooftop access requirements were located in the fire code's solar/access provisions (historically referenced around **CFC Section 605 / 1204** depending on the edition; verify the exact citation for your jurisdiction).

Key concepts in force during this cycle:

- **Residential (Group R-3) access:** access pathways and **ridge setbacks** derived from the OSFM Solar PV Installation Guideline, intended to give firefighters vertical-ventilation access at the ridge and pathways to travel the roof.
- **Commercial:** perimeter clearances and interior pathways for larger roofs.

> The 2016-era model was heavily influenced by the **OSFM Solar Photovoltaic Installation Guideline**, which many California jurisdictions used to interpret pathway width and ridge-setback expectations.

## 2019 Cycle

The **2019 California Fire Code** is based on the **2018 IFC** (effective January 1, 2020). The 2018 IFC reorganized solar/energy-system provisions, and the CFC followed. This is also the cycle in which **energy storage system (ESS)** provisions became far more prominent (aligning with NFPA 855 concepts) — relevant because residential solar increasingly pairs with batteries.

Residential access under this cycle follows the familiar pattern:

```
   RIDGE ---------------------------------------------------
        18 in setback (array <= 33% of roof plan area)
        36 in setback (array > 33% of roof plan area)
   -----------------------------------------------------------
   [ PV ARRAY ]     36 in pathway     [ PV ARRAY ]
   (>=1 pathway per array roof plane, edge-to-ridge)
   -----------------------------------------------------------
   >= 2 total 36-in pathways on separate roof planes,
      at least one on the street/driveway side
   ROOF EDGE / EAVE ----------------------------------------
```

## 2022 Cycle

The **2022 California Fire Code** is based on the **2021 IFC** (effective January 1, 2023). In the 2021 IFC (and thus 2022 CFC), the solar rooftop-access provisions consolidated into **Chapter 12, Energy Systems** (the residential and commercial solar access language moved here from earlier chapters). Confirm the specific section for your project — the 2021 IFC uses **Section 1205** for solar photovoltaic power systems.

### Residential (Group R-3) Access — 2022 CFC

The residential model in this cycle is well established:

| Provision | Requirement |
|-----------|-------------|
| Pathways to ridge | Not fewer than **two 36-inch-wide pathways** on separate roof planes, edge (eave) to ridge; at least one on the **street/driveway side** |
| Per-array pathway | At least **one 36-inch pathway** per roof plane with an array (same plane, adjacent plane, or straddling) |
| Ridge setback (array ≤ 33% of roof plan area) | **18 inches** on both sides of a horizontal ridge |
| Ridge setback (array > 33% of roof plan area) | **36 inches** on both sides of a horizontal ridge |

> **Alternatives and exceptions exist.** Fire code officials may accept alternative designs (for example, where module-level rapid shutdown, non-combustible construction, or specific roof geometry justify it). California and local amendments may modify these values — verify.

### Commercial / Non-R-3 Access — 2022 CFC

Larger and non-residential roofs use **perimeter and interior pathways** rather than the ridge-setback model:

```
   +==================== ROOF EDGE / PARAPET ====================+
   |   perimeter clear pathway (commonly 6 ft; reducible on      |
   |   smaller footprints)                                       |
   |   +------------------------------------------------------+  |
   |   | [PV]  [PV] | interior |  [PV]  [PV]   (HATCH)         |  |
   |   | ARRAY      | pathway  |  ARRAY        4 ft to hatch/  |  |
   |   |            | >= 4 ft  |               vent/standpipe  |  |
   |   +------------------------------------------------------+  |
   +=============================================================+
   (Commercial values are IFC/CFC edition-specific; confirm.)
```

## 2025 Cycle

The **2025 California Fire Code** is based on the **2024 IFC**, published July 2025, **effective January 1, 2026**. The 2024 IFC retains the Chapter 12 Energy Systems structure. Expect continued alignment with:

- **NFPA 855 / UL 9540 / UL 9540A** for energy-storage siting, separation, and explosion control (increasingly enforced for residential and commercial battery installs).
- **UL 3741** hazard-control systems as an accepted path for the inside-the-array-boundary shutdown requirement enforced alongside the electrical code.

> Because the 2025 CFC is newly effective, **local adoption ordinances and errata are still settling in many jurisdictions**. Confirm the exact effective section numbers and any local fire-marshal PV access policy directly.

## Residential vs. Commercial — Quick Contrast

| Topic | Residential (Group R-3) | Commercial / Non-R-3 |
|-------|-------------------------|----------------------|
| Access model | Edge-to-ridge **pathways** + **ridge setbacks** | **Perimeter** clearance + **interior** pathways |
| Typical pathway width | 36 inches | Often ~4 ft interior; larger perimeter |
| Setback driver | Ridge (vertical ventilation) | Roof edges, hatches, standpipes, smoke ventilation |
| Marking / rapid shutdown | Placards + NEC 690.12 shutdown | Placards + shutdown + array maps; often UL 3741 at scale |
| Storage | NFPA 855 (residential ESS separation/siting) | NFPA 855 (larger ESS, explosion control) |

For the electrical side of these systems (rapid shutdown, disconnects, labeling), see [The California Electrical Code (CEC) & Solar](code-cec.md) and [The National Electrical Code (NEC) & Solar](code-nec.md). For the structural and roof-classification side, see [California Building Code (CBC) & Solar](code-cbc.md) and [California Residential Code (CRC) & Solar](code-crc.md). For statewide energy-code interactions and commercial mandates, see [California Title 24 & Commercial Solar](california-title-24.md).

## Sources & Further Reading

- [California DGS/BSC — Codes (Title 24)](https://www.dgs.ca.gov/BSC/Codes)
- [California DGS/BSC — History of the California Building Standards Code (Title 24)](https://www.dgs.ca.gov/BSC/About/History-of-the-California-Building-Standards-Code---Title-24)
- [ICC Digital Codes — 2022 California Fire Code, Chapter 12 Energy Systems](https://codes.iccsafe.org/content/CAFC2022P1/chapter-12-energy-systems)
- [ICC Digital Codes — 2025 California Fire Code, Chapter 12 Energy Systems](https://up.codes/viewer/california/ca-fire-code-2025/chapter/12/energy-systems)
- [ICC Digital Codes — 2021 IFC Chapter 12, Energy Systems](https://codes.iccsafe.org/content/IFC2021P1/chapter-12-energy-systems)
- [Understanding the Cal Fire / OSFM Solar Photovoltaic Installation Guideline (background)](https://www.fsec.ucf.edu/en/education/southeast_training_network/Background%20on%20CA%20PV%20Installation%20Guide.pdf)
- [Standards & Certification Bodies](fundamentals-standards-bodies.md)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. Code editions, California amendments, and section numbers vary by jurisdiction and change every cycle. Always confirm the codes and local amendments in force with your local AHJ and fire marshal, and retain a licensed professional for project-specific compliance.*
