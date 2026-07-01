# Commercial Solar Codes & Fire Requirements

This page covers the codes that govern solar on **commercial and other non-IRC structures** — buildings designed under the **International Building Code (IBC)** and, in California, the **California Building Code (CBC)**. It addresses the four common commercial PV configurations — **rooftop (attached and ballasted), carport, and ground mount** — across structural, fire-access, and electrical domains. For the model-code system and acronyms, start with [Building Codes & Standards Explained](./codes-standards-overview.md).

> **AHJ + fire marshal are authoritative.** Commercial PV almost always involves separate building, electrical, and fire plan reviews. Section numbers below are edition-specific and reorganize between cycles. Confirm the edition and amendments in force locally.

## Which Code Applies?

| Configuration | Primary structural code | Fire access | Electrical |
|---------------|------------------------|-------------|------------|
| Rooftop (attached) | IBC / CBC + ASCE 7 | IFC Ch. 12 (commercial pathways) | NEC 690, 705 |
| Rooftop (ballasted) | IBC / CBC + ASCE 7 (uplift, sliding, roof capacity) | IFC Ch. 12 | NEC 690, 705 |
| Carport / canopy | IBC (structure as a building) + ASCE 7 | Egress/clearance; IFC as applicable | NEC 690, 705 (often 691 if large) |
| Ground mount | IBC + ASCE 7 (foundations, geotech) | Site fire access, defensible space | NEC 690, 705, 691 (≥ 5 MW) |

## Structural Requirements

Commercial structural review is typically more rigorous than residential and frequently requires a **registered design professional (PE) stamp**.

### Governing Loads (ASCE 7)

- **Wind:** Designed to **ASCE 7** component-and-cladding pressures using the site's ultimate wind speed, exposure, risk category, and **roof pressure zones** (interior field, perimeter, corner — corners govern). Rooftop equipment near parapets and roof edges sees the highest uplift.
- **Seismic:** ASCE 7 seismic provisions apply to attached and especially **ballasted** systems (sliding and overturning of unanchored arrays). High seismic design categories may force mechanical attachment or restraint.
- **Snow:** ASCE 7 ground/roof snow loads, including **drift and sliding-snow** accumulation behind and between module rows.
- **Roof live/dead load:** The structure must carry the added PV dead load (≈ 3–6+ lb/ft² depending on ballast) plus its original roof live/snow load. Ballasted systems can add substantial concentrated load — verify roof and deck capacity.

### Attached vs. Ballasted

- **Attached (penetrating) systems** transfer uplift through fasteners into the structural roof framing; flashing maintains the roof membrane warranty and weather resistance.
- **Ballasted systems** resist uplift and sliding with concrete weight rather than penetrations. They require careful **uplift, sliding, and seismic** analysis, **roof structural capacity** verification (often a structural upgrade or load-spreading), and frequently wind-tunnel-tested racking with manufacturer engineering. Ballast layout is typically PE-stamped.

> **Ballasted-system uplift is the classic commercial pitfall.** Edge and corner zones need extra ballast or supplemental attachment; the bare roof may lack capacity for the added concentrated load. A roof structural evaluation is standard.

### Carports and Ground Mounts

- **Solar carports/canopies** are *buildings/structures* under the IBC: foundations, columns, lateral system, drainage, and sometimes vehicle-impact and egress/lighting provisions all apply, plus ASCE 7 loads.
- **Ground mounts** require **geotechnical** input for foundations (driven piles, helical anchors, or ballast), frost depth, and lateral capacity. Large sites add site fire access roads and **vegetation/defensible-space** management.

## Fire Service Access & Rooftop Pathways (IFC / CFC)

Commercial rooftop PV access is governed by **IFC Chapter 12** (2021 IFC **Section 1205.3** for non-R-3 / commercial; numbering varies by edition). The intent: keep firefighters able to walk, ventilate, and fight fire around an energized array.

### Perimeter Pathway

- A minimum **6-foot-wide clear perimeter** around the roof edges.
- Where **either building axis is ≤ 250 ft**, the perimeter may be reduced to a minimum **4 ft wide**.

### Interior Pathways

- Pathways at intervals **not greater than 150 ft** throughout the roof length and width.
- A **4-foot-wide straight pathway** to roof **standpipes** and **ventilation hatches**.
- A **4-foot-wide pathway around roof access hatches**, with at least one such pathway to a parapet or roof edge.

### Smoke Ventilation

- Arrays must be configured to allow **smoke/heat ventilation** operations. The IFC addresses smoke ventilation around the array and at required hatches/pathways so crews can perform vertical ventilation.

### Marking / Placards

- Commercial systems require fire-service **marking and placards**: rapid-shutdown labels and array maps, disconnect identification, and circuit/equipment marking per NEC 690/705 and IFC. Many fire marshals enforce a **local placard standard** (reflective, engraved) at the entrance, ATS/main, and roof.

### R-3-Similar Exception

> Where the fire code official determines a commercial roof configuration is **similar to a Group R-3** dwelling, the **residential** access/setback provisions (the ridge-setback approach) may be accepted as an alternative.

### Occupancy Considerations

Access requirements and review scrutiny scale with **occupancy classification** (assembly, institutional, high-rise, hazardous occupancies), **building height** (high-rise provisions), and whether the building is **sprinklered**. High-rise and large-footprint buildings draw closer fire-marshal review.

### Commercial Rooftop Access-Pathway Diagram

```
   +======================================================================+
   |  <----------------------- ROOF EDGE / PARAPET --------------------->  |
   |    6 ft clear perimeter  (4 ft if either axis <= 250 ft)             |
   |  +----------------------------------------------------------------+  |
   |  |  [PV]   [PV]   [PV] | 4 ft |  [PV]   [PV]   [PV]                |  |
   |  |  ARRAY  BLOCK       |interi|  ARRAY  BLOCK                      |  |
   |  |                     | -or  |                            (HATCH)|  |
   |  |  ---- interior pathway, <= 150 ft spacing ----      4 ft path -+|  |
   |  |  [PV]   [PV]   [PV] | path |  [PV]   [PV]  | 4 ft path to       |  |
   |  |  ARRAY  BLOCK       |      |  ARRAY       | standpipe/vent -->[S]| |
   |  +----------------------------------------------------------------+  |
   |    6 ft clear perimeter                                              |
   +======================================================================+

   - 6 ft clear perimeter (reducible to 4 ft on smaller footprints)
   - Interior pathways >= 4 ft, spaced <= 150 ft across length & width
   - 4 ft pathways to standpipes [S], ventilation hatches, roof hatches
   - Smoke-ventilation access preserved
   (2021 IFC Sec. 1205.3 values; confirm the edition & local amendments.)
```

## Electrical Requirements (NEC)

Commercial systems use the same core NEC articles as residential, plus large-system provisions.

### Article 690 (PV) and Article 705 (Interconnection)

- **690** governs conductor sizing (690.8), overcurrent protection (690.9), disconnects (690.13/690.15), and grounding.
- **705** governs the **point of interconnection**. The **120% busbar rule** (`main + PV breaker ≤ 120% × busbar`) applies to load-side connections; large commercial systems frequently use **supply-side (line-side) taps**, dedicated PV switchgear, or the **sum-of-amperes** method per the adopted edition of 705.12.

### Article 691 — Large-Scale PV (≥ 5 MW)

For PV **electric supply stations with an inverter generating capacity ≥ 5,000 kW (5 MW)**, **Article 691** provides modified, engineering-supervised requirements:

- Documented **engineered design** by a licensed PE.
- Isolating devices **need not be within sight** of equipment and may be remote, with documented isolation procedures (691.9).
- An allowance (691.10) to **substitute an engineered fire-mitigation plan** for certain **690.11 DC arc-fault** requirements.
- These are utility-scale stations, typically not connected as a load-side interconnection on a building panel.

### Rapid Shutdown — NEC 690.12

Required for PV on buildings. Same touch-safe thresholds as residential:

- **Outside the array boundary:** ≤ **30 V within 30 s**.
- **Inside the array boundary:** ≤ **80 V within 30 s**, **or** a listed **PVHCS to UL 3741**. Large commercial roofs increasingly use UL 3741 hazard-control systems to satisfy the inside-the-boundary requirement at scale.

### DC Arc-Fault (690.11) and Ground-Fault (690.41 / 690.5)

- **690.11:** DC circuits ≥ 80 V on/penetrating a building require listed **DC AFCI** protection (Article 691 has the engineered-alternative allowance noted above).
- **Ground-fault protection** is required for PV arrays per Article 690 (690.41 system grounding; ground-fault detection/interruption provisions). Inverters typically provide this.

### Medium-Voltage, Transformers, and Three-Phase Service

- Most commercial systems interconnect to **three-phase** service (208Y/120, 480Y/277, or higher). Inverter and OCPD sizing follow 690.8/690.9 at three-phase voltages.
- Larger systems add **step-up transformers** and may operate **medium-voltage (≥ 1 kV)** collection, governed by **NEC Article 690 Part X (over 1000 V)**, **Article 490** (over 1000 V equipment), and utility interconnection standards. These require specialized engineering, clearances, and equipment listings.
- Grid-interactive inverters must be listed to **UL 1741** (current interconnections to **UL 1741 SB**, aligned with **IEEE 1547-2018**) to meet utility interconnection rules.

### Working Clearances and Labeling

- **NEC 110.26** working space applies to all switchgear, inverters, combiners, and disconnects (depth scales with voltage and conditions).
- Extensive **labeling/placarding** per 690/705 plus fire-marshal placard standards (rapid shutdown, disconnects, array maps, interconnection warnings, equipment ratings).

## PE Stamp, AHJ & Fire-Marshal Review

> **Expect a registered design professional (PE) stamp** on commercial PV: structural calculations (attachment/ballast, roof capacity, ASCE 7 loads) and, frequently, the electrical one-line. Carports and ground mounts essentially always require structural/civil PE stamps and may require geotechnical reports.

Typical commercial review path:

1. **Building plan review** — structural adequacy, roof capacity, attachment/ballast, PE stamp.
2. **Electrical plan review** — NEC 690/705 (and 691 if applicable), one-line, sizing, OCPD, disconnects, labeling.
3. **Fire-marshal review** — IFC Chapter 12 pathways/perimeter, smoke ventilation, placards, rapid shutdown, and (if storage is present) **NFPA 855 / UL 9540** for ESS siting, separation, and explosion control.

## California Specifics (CBC / CFC / Title 24)

- Commercial buildings use the **CBC** (Title 24, Part 2), **CFC** (Part 9), and **CEC** (Part 3). The **2025 Title 24 edition is effective January 1, 2026**.
- The **Title 24 Part 6 Energy Code** imposes **solar PV (and, increasingly, battery storage) requirements on many new nonresidential occupancies** (offices, retail, schools, warehouses, and others, with prescribed sizing and exceptions). This is a separate energy-code mandate from the structural/fire/electrical rules above.
- California amends IFC access and adds **WUI** and seismic-driven provisions; Cal Fire and local fire marshals enforce additional PV access guidance.

> Confirm current Title 24 Part 6 nonresidential PV/storage mandates and any local fire-marshal PV access guidance for your occupancy and jurisdiction — see the [California DGS Title 24 resources](https://www.dgs.ca.gov/BSC/Resources/2025-Title-24-California-Code-Changes).

## Sources & Further Reading

- [ICC Digital Codes — 2021 IFC Chapter 12, Energy Systems](https://codes.iccsafe.org/content/IFC2021P1/chapter-12-energy-systems)
- [IFC 1205.3 Commercial Rooftop Access & 1205.3.3 Smoke Ventilation](https://codes.iccsafe.org/s/IFC2021P1/chapter-12-energy-systems/IFC2021P1-Pt03-Ch12-Sec1205.3.3)
- [NFPA — Accessways for roof-mounted PV installations](https://www.nfpa.org/news-blogs-and-articles/blogs/2020/07/24/accessways-for-roof-mounted-photovoltaic-installations)
- [NFPA 70, National Electrical Code](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [IAEI — 2023 NEC and Photovoltaic Power Systems](https://iaeimagazine.org/columns/photovoltaic/2023-national-electrical-code-and-photovoltaic-power-systems/)
- [NFPA 855, Stationary Energy Storage Systems](https://www.nfpa.org/codes-and-standards/nfpa-855-standard-development/855)
- [UL Solutions — Energy Storage System Testing and Certification (UL 9540 / 9540A)](https://www.ul.com/services/energy-storage-system-testing-and-certification)
- [ASCE 7 — Minimum Design Loads](https://www.asce.org/publications-and-news/asce-7)
- [California DGS — 2025 Title 24 California Code Changes](https://www.dgs.ca.gov/BSC/Resources/2025-Title-24-California-Code-Changes)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. Code editions, amendments, and section numbers vary by jurisdiction and change between cycles. Always confirm the codes in force with your local AHJ and fire marshal, and retain a licensed professional (PE, engineer, electrician, or contractor) for project-specific compliance.*
