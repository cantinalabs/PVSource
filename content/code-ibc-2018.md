# IBC 2018 & Solar

The **2018 International Building Code (IBC)** is the edition where rooftop solar design matured. Two changes drive this: **Chapter 15 (Roof Assemblies and Rooftop Structures)** was reorganized so that the photovoltaic (PV) provisions moved to a clearly numbered section, and the referenced structural standard advanced to **ASCE/SEI 7-16**, which for the first time added a **dedicated wind-load method for rooftop solar panels**. Together these make the 2018 IBC a meaningful step up in rigor for commercial rooftop arrays.

This article covers how the 2018 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2015 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc-2015.md), [IBC 2021 & Solar](code-ibc-2021.md), and [IBC 2024 & Solar](code-ibc-2024.md).

> **Note on adoption.** The IBC is a *model* code with legal force only where adopted, and jurisdictions commonly adopt it with amendments (and on their own timeline). Some states moved from the 2015 to the 2018 IBC quickly; others lagged. Confirm the adopted edition and local amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

## Scope and Applicability to PV

The 2018 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family homes and townhouses typically fall under the **International Residential Code (IRC)**. For large rooftop arrays on commercial and industrial buildings, the IBC is the controlling structural document.

The 2018 IBC addresses rooftop PV in two coordinated places:

- **Chapter 15** — roof-assembly fire classification, PV listing/labeling, and maintenance of the roof's fire rating.
- **Chapter 16** — the structural loads (dead, live, snow, wind, seismic) the roof and framing must resist with the array installed, via reference to **ASCE 7-16**.

Firefighter-access and clear-pathway operational rules are coordinated with the **International Fire Code (IFC)**, and the electrical system remains under **NFPA 70 (National Electrical Code)**.

## Structural Requirements and Referenced ASCE 7 Edition

The 2018 IBC references **ASCE/SEI 7-16** as its structural-loading standard (IBC Chapter 35, Referenced Standards). This is the pivotal upgrade of this edition.

**ASCE 7-16 introduced dedicated rooftop-solar wind provisions** in **Chapter 29**, principally **Sections 29.4.3 and 29.4.4**:

- **Section 29.4.3** applies to solar arrays on **low-slope roofs (roof slope less than 7 degrees)**, with limits on panel chord length, tilt, and height above the roof. The method comes from wind-tunnel research on the arrangements in widespread commercial use, and it provides pressure coefficients plus adjustments for parapets, panel length, and proximity to the roof edge.
- **Section 29.4.4** addresses panels that fall outside the 29.4.3 limits, and the standard's removal of the prior 60-foot mean-roof-height ceiling means these provisions apply to **buildings of all heights** — important for tall commercial buildings.

Structural requirements a designer must satisfy under the 2018 IBC include:

| Load type | Requirement (2018 IBC + ASCE 7-16) |
|-----------|-------------------------------------|
| **Dead load** | The weight of the PV system, its supports, and ballast is treated as **dead load**; the rack-support dead load must be shown on the construction documents. |
| **Roof live load** | The roof must be designed for roof live load assuming panels are absent; PV live load in covered areas is additive unless the area under each panel is inaccessible. |
| **Snow load** | Snow, including **drift** induced by the panels, must be included where applicable. |
| **Wind load** | Determined using the **dedicated rooftop-solar method** of ASCE 7-16 §29.4.3 / §29.4.4, with effective wind area per §26.2 — a significant improvement over the generic C&C approach of the prior edition. |
| **Seismic** | The array mass contributes to seismic demand; ballasted (unattached) arrays must be evaluated for sliding and uplift. |

```
 2018 IBC structural-load path for rooftop PV
 ---------------------------------------------
 Chapter 15  --> roof assembly, fire, listing (Sec. 1510.7)
 Chapter 16  --> loads: dead + live + snow(+drift) + wind + seismic
 Referenced standard --> ASCE 7-16
     new:  Sec. 29.4.3 / 29.4.4  = dedicated rooftop-SOLAR wind method
     new:  applies to buildings of ALL heights (60-ft cap removed)
```

## Rooftop-Mounted PV Provisions

In the 2018 IBC, Chapter 15 was renumbered and the rooftop-solar language sits in **Section 1510.7 (Photovoltaic Panels and Modules)**. (In this edition, **Section 1511** covers Reroofing.) Key subsections:

- **1510.7.1 — Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled in accordance with UL 1703** and **installed in accordance with the manufacturer's installation instructions.** The explicit "manufacturer's instructions" wording was tightened in this edition.
- **1510.7.2 — Fire classification.** The installed system must maintain the roof's fire classification (coordinated with the Section 1505 fire-classification requirements; see below).

Structural design for the array is governed by Chapter 16 and ASCE 7-16 as described above. Ballasted, non-penetrating arrays are permitted but must be designed to resist sliding and uplift and to carry their ballast as dead load.

## Fire Classification

The 2018 IBC requires that a rooftop-mounted PV system **not diminish the fire classification of the roof assembly**. The roof's required class (Class A, B, or C) is set by **Section 1505** and **Table 1505.1** according to the building's construction type, and the PV modules and mounting system must carry a matching or higher fire-tested rating.

By the 2018 edition, **system-level fire testing to UL 2703** (the standard for PV mounting systems and rack-mounted assemblies) was established practice: a module's stand-alone UL 1703 rating and its rating *as mounted* on a specific rack ("system fire class") are distinct, and the as-installed class is what must satisfy the roof requirement. Designers should confirm the rack/module combination's tested system fire class rather than relying on the module rating alone.

## What Changed vs the Previous Edition

Relative to the [IBC 2015 & Solar](code-ibc-2015.md) edition, the 2018 IBC brings:

- **Renumbering and consolidation** of the rooftop-PV language into **Section 1510.7 (Photovoltaic Panels and Modules)** within a reorganized Chapter 15 (in 2015 the model code used Section 1509.7).
- **Advance to ASCE 7-16**, which for the first time supplies a **dedicated wind-load method for rooftop solar** (§29.4.3 / §29.4.4) instead of borrowing the generic rooftop-equipment Components and Cladding provisions used under ASCE 7-10.
- **Removal of the 60-ft mean-roof-height limit** for the rooftop-equipment/solar wind provisions, extending the method to **buildings of all heights**.
- Tightened **installation-per-manufacturer's-instructions** wording in the PV listing subsection.
- Continued reliance on **UL 1703** for module listing, with **UL 2703** system-level fire testing now standard practice.

The practical upshot: wind design for commercial rooftop arrays became far more standardized and defensible under the 2018 IBC than under 2015. The next edition, [IBC 2021 & Solar](code-ibc-2021.md), keeps ASCE 7-16 but changes how load combinations are referenced and updates the PV listing standards.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

## Sources & Further Reading

- ICC Digital Codes — [2018 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2018P6)
- ICC Digital Codes — [2018 IBC, Section 1505 Fire Classification](https://codes.iccsafe.org/s/IBC2018/chapter-15-roof-assemblies-and-rooftop-structures/IBC2018-Ch15-Sec1505)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- ASCE Amplify — [ASCE 7-16 Section 29.4.3, Rooftop Solar Panels for Buildings of All Heights](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [ASCE 7-16 Wind Load Provisions](https://www.structuremag.org/article/asce-7-16-wind-load-provisions/)
- FEMA — [2018 IBC: A Compilation of Wind-Resistant Provisions](https://www.fema.gov/sites/default/files/2020-07/2018-ibc-compliation-wind-resistant-provisions.pdf)
- ICC — [Structural Load Determination: 2018 and 2021 IBC and ASCE/SEI 7-16](https://shop.iccsafe.org/structural-load-determination-2018-ibc-2021-ibc-and-asce-sei-7-16.html)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc-2015.md) · [IBC 2021 & Solar](code-ibc-2021.md) · [IBC 2024 & Solar](code-ibc-2024.md)
