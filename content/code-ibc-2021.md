# IBC 2021 & Solar

The **2021 International Building Code (IBC)** keeps the rooftop-solar framework established in 2018 but refines it in two important ways: the structural **load combinations** are now taken directly from **ASCE/SEI 7** rather than being restated in Chapter 16, and the **listing standards** for photovoltaic (PV) panels and modules are broadened to reflect the newer international product standard. The referenced loading standard remains **ASCE/SEI 7-16**.

This article covers how the 2021 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2018 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc-2015.md), [IBC 2018 & Solar](code-ibc-2018.md), and [IBC 2024 & Solar](code-ibc-2024.md).

> **Note on adoption.** The IBC is a *model* code and carries legal force only where adopted, usually with local amendments and on a state-by-state timeline. As of the mid-2020s many jurisdictions had adopted the 2021 IBC while others remained on 2018 or 2015. Confirm the adopted edition and local amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

## Scope and Applicability to PV

The 2021 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family dwellings and townhouses typically fall under the **International Residential Code (IRC)**. For large commercial and industrial rooftop arrays, the IBC is the controlling structural document.

Rooftop PV is addressed in two coordinated locations:

- **Chapter 15 (Roof Assemblies and Rooftop Structures)** — PV listing/labeling and roof fire classification.
- **Chapter 16 (Structural Design)** — dead, live, snow, wind, and seismic loads with the array in place, via reference to **ASCE 7-16**.

Firefighter access and pathway rules are coordinated with the **International Fire Code (IFC)**; the electrical system remains under **NFPA 70 (National Electrical Code)**.

## Structural Requirements and Referenced ASCE 7 Edition

The 2021 IBC references **ASCE/SEI 7-16** (IBC Chapter 35, Referenced Standards) — the same loading standard as the 2018 edition. That means the **dedicated rooftop-solar wind provisions** in **ASCE 7-16 Chapter 29 (Sections 29.4.3 and 29.4.4)** continue to govern wind design for rooftop arrays, including the low-slope (roof slope less than 7 degrees) method with adjustments for parapets, panel length, and roof-edge proximity, applicable to **buildings of all heights**.

The notable structural change in 2021 is procedural rather than a new load: the **2021 IBC deleted its own load-combination equations from Chapter 16 and points directly to ASCE 7 Chapter 2** for both **Strength Design (LRFD)** and **Allowable Stress Design (ASD)** load combinations. This removes a long-standing source of duplication (and occasional inconsistency) between the IBC and ASCE 7.

| Load type | Requirement (2021 IBC + ASCE 7-16) |
|-----------|-------------------------------------|
| **Load combinations** | Taken **directly from ASCE 7 Chapter 2** (the IBC no longer restates them). |
| **Dead load** | PV system, supports, and ballast are dead load; rack-support dead load must appear on the construction documents. |
| **Roof live load** | Roof designed for live load assuming panels absent; PV live load in covered areas is additive unless the area under each panel is inaccessible. |
| **Snow load** | Snow, including panel-induced **drift**, included where applicable. |
| **Wind load** | Dedicated rooftop-solar method of **ASCE 7-16 §29.4.3 / §29.4.4**, effective wind area per §26.2. |
| **Seismic** | Array mass contributes to seismic demand; ballasted (unattached) arrays evaluated for sliding and uplift. |

```
 2021 IBC structural-load path for rooftop PV
 ---------------------------------------------
 Chapter 15  --> roof assembly, fire, listing (Sec. 1510.7)
 Chapter 16  --> loads: dead + live + snow(+drift) + wind + seismic
   * load COMBINATIONS now come straight from ASCE 7 Chapter 2 *
 Referenced standard --> ASCE 7-16 (Sec. 29.4.3 / 29.4.4 rooftop-solar wind)
```

## Rooftop-Mounted PV Provisions

In the 2021 IBC the rooftop-solar language remains in **Chapter 15, Section 1510.7 (Photovoltaic Panels and Modules)**, carried forward from 2018. Key points:

- **Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled** and installed per the manufacturer's instructions. The 2021 edition broadens the acceptable product standard: panels/modules may be listed to **UL 1703 *or* to both UL 61730-1 and UL 61730-2**, reflecting the harmonized international PV safety standard (**UL 61730 / IEC 61730**) that was superseding stand-alone UL 1703. (In the related PV-shingle and building-integrated-PV roofing sections, UL 61730-1/-2 were added as accepted standards.)
- **Fire classification.** The installed system must maintain the roof's required fire classification (see below).
- **Structural design.** Governed by Chapter 16 and ASCE 7-16, with load combinations from ASCE 7 Chapter 2.

Ballasted, non-penetrating arrays are permitted; they must carry ballast as dead load and be designed to resist sliding and uplift under the applicable ASCE 7-16 provisions.

## Fire Classification

The 2021 IBC continues to require that a rooftop-mounted PV system **not diminish the roof assembly's fire classification**. The required class (A, B, or C) is set by **Section 1505** and **Table 1505.1** based on the building's construction type, and the module-and-rack combination must carry a matching or higher **system-level** fire-tested class.

System-level fire testing to **UL 2703** (PV mounting systems and rack-mounted modules) is the established basis for determining the as-installed fire class. As with prior editions, the module's stand-alone rating and its rating on a specific rack differ; the tested rack/module system class is what must satisfy the roof requirement.

## What Changed vs the Previous Edition

Relative to the [IBC 2018 & Solar](code-ibc-2018.md) edition, the 2021 IBC brings:

- **Load combinations pulled directly from ASCE 7 Chapter 2.** The IBC deleted its duplicate Strength Design and Allowable Stress Design combination equations, eliminating IBC-vs-ASCE inconsistencies.
- **Broadened PV listing standards.** Rooftop panels/modules may be listed to **UL 1703 or to both UL 61730-1 and UL 61730-2**, reflecting the shift toward the harmonized **UL/IEC 61730** PV module safety standard. UL 61730-1/-2 were also added in the PV-shingle and building-integrated-PV roofing sections.
- **Same referenced loading standard (ASCE 7-16)** and therefore the same **rooftop-solar wind method (§29.4.3 / §29.4.4)** as 2018 — no change to the core wind procedure.
- Continued reliance on **UL 2703** for system-level fire classification and on **Section 1510.7** as the home of the PV provisions.

The takeaway: the 2021 IBC is an incremental, cleanup-oriented update for solar — same wind physics as 2018, cleaner load-combination referencing, and modernized product-listing standards. The larger structural jump comes with the [IBC 2024 & Solar](code-ibc-2024.md) edition, which advances to ASCE 7-22 and restructures the Chapter 15 PV and reroofing language.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

## Sources & Further Reading

- ICC Digital Codes — [2021 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2021P1/chapter-15-roof-assemblies-and-rooftop-structures)
- ICC Digital Codes — [2021 IBC, Chapter 16 Structural Design](https://codes.iccsafe.org/content/IBC2021P2/chapter-16-structural-design)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [2021 IBC Significant Structural Changes](https://www.structuremag.org/article/2021-ibc-significant-structural-changes/)
- Professional Roofing (Mark S. Graham) — [A compendium of changes (April 2021)](https://www.professionalroofing.net/Articles/A-compendium-of-changes--04-01-2021/4861)
- ICC — [Structural Load Determination: 2018 and 2021 IBC and ASCE/SEI 7-16](https://shop.iccsafe.org/structural-load-determination-2018-ibc-2021-ibc-and-asce-sei-7-16.html)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc-2015.md) · [IBC 2018 & Solar](code-ibc-2018.md) · [IBC 2024 & Solar](code-ibc-2024.md)
