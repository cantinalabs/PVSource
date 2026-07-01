# The International Building Code (IBC) & Solar

The **International Building Code (IBC)** governs the structural and fire-classification requirements for rooftop and building-mounted PV on commercial and larger buildings, and sets which edition of **ASCE 7** applies for wind, snow and seismic loads.

## IBC 2015

The **2015 International Building Code (IBC)** was the first widely adopted edition of the model code to carry a dedicated set of provisions for **rooftop-mounted photovoltaic (PV) panels and modules**. Before 2015, most jurisdictions treated rooftop solar as generic "rooftop equipment," leaving structural, fire, and access questions largely to the authority having jurisdiction (AHJ) and to referenced standards. The 2015 edition changed that by placing explicit PV language in **Chapter 15 (Roof Assemblies and Rooftop Structures)** and by strengthening the structural-load rules in **Chapter 16 (Structural Design)**.

This article covers how the 2015 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to prior editions. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2018 & Solar](code-ibc.md), [IBC 2021 & Solar](code-ibc.md), and [IBC 2024 & Solar](code-ibc.md).

> **Note on adoption.** The IBC is a *model* code. It only carries legal force where a state or local government adopts it, and jurisdictions frequently adopt it with amendments. Several states remained on the 2012 IBC when the 2015 edition published, while others (and some large cities with their own building codes, such as New York City) renumber or rewrite the PV sections. Always confirm the adopted edition and any local amendments with your **AHJ**, and have a licensed **professional engineer (PE)** verify structural design.

### Scope and Applicability to PV

The 2015 IBC governs the design and construction of most commercial, industrial, institutional, and multifamily buildings. Detached one- and two-family dwellings and townhouses generally fall under the **International Residential Code (IRC)** instead, so for large rooftop arrays on commercial and industrial buildings the IBC is the controlling structural document.

For solar specifically, the 2015 IBC addresses rooftop PV in two places:

- **Chapter 15** — roof-assembly integrity, fire classification, listing/labeling, and (via the fire and building-services codes) rooftop access and pathways.
- **Chapter 16** — the structural loads (dead, live, snow, wind) that the roof and its framing must resist with the array in place.

The code applies to the PV racking, modules, ballast, and the roof structure that supports them. It does **not** cover the electrical system; that is the domain of **NFPA 70 (the National Electrical Code)**, and rooftop firefighter-safety operational rules live in the **International Fire Code (IFC)**.

### Structural Requirements and Referenced ASCE 7 Edition

The 2015 IBC references **ASCE/SEI 7-10, *Minimum Design Loads for Buildings and Other Structures***, as its structural-loading standard (listed in IBC Chapter 35, Referenced Standards). ASCE 7-10 supplies the wind, snow, seismic, and load-combination methodology that Chapter 16 points to.

A defining limitation of this edition is that **ASCE 7-10 contained no dedicated method for wind loads on rooftop solar panels.** Designers instead used the general **Components and Cladding (C&C)** provisions for rooftop equipment. As a result, the 2015 IBC's own wind language for PV directs the designer to Chapter 16's C&C approach.

The 2015 IBC structural provisions for rooftop PV require, at a minimum:

| Load type | Requirement in the 2015 IBC |
|-----------|-----------------------------|
| **Dead load** | The dead load of the rooftop-mounted PV system, including rack/support systems and ballast, must be shown on the construction documents and carried by the framing. |
| **Roof live load** | The roof area to be covered must be designed for roof live load *assuming the panels are not present*; PV live load in covered areas is additive unless the area under each panel is inaccessible. |
| **Snow load** | Snow, including **snow drift** created by the panels/modules, must be accounted for where applicable. |
| **Wind load** | The array must resist **Component and Cladding** loads per Chapter 16, using an effective wind area based on the dimensions of a single PV unit frame. |

> Because ASCE 7-10 offered no PV-specific wind figure, wind design under the 2015 IBC often relied on the "rooftop equipment" C&C provisions or on manufacturer wind-tunnel data and independent engineering judgment. This is the single biggest structural difference from the 2018 and later editions.

```
 2015 IBC structural-load path for rooftop PV
 ---------------------------------------------
 Chapter 15 (Ch. 15)  --> roof assembly, fire, listing
 Chapter 16 (Ch. 16)  --> loads:  dead + live + snow(+drift) + wind (C&C)
 Referenced standard  --> ASCE 7-10  (no dedicated rooftop-solar wind method)
```

### Rooftop-Mounted PV Provisions

In the model 2015 IBC, the rooftop-solar language is found in **Chapter 15, Section 1509.7 (Photovoltaic Systems)** and its subsections. (Some adopting jurisdictions renumber this content — New York City, for example, uses a Section 1512 — so verify the numbering in your adopted code.)

The core 1509.7 requirements are:

- **Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled in accordance with UL 1703** and installed per the manufacturer's installation instructions.
- **Structural design.** Panels/modules and their supports must be designed for the applicable dead, live, snow, and wind loads described above.
- **Fire classification.** The installed system must not reduce the roof assembly's required fire classification (see below).
- **Access and pathways.** Roof-access and clear-pathway requirements (commonly 36-inch pathways from eave to ridge and setbacks at ridges) apply to firefighter operations; these are coordinated with the **IFC**. Requirements scale with building type and array layout.

Ballasted (non-penetrating) arrays are permitted but must still satisfy the dead-load, sliding, and uplift demands of Chapter 16. The 2015 edition does not yet contain the more explicit ballasted-array language that later editions add.

### Fire Classification

Under the 2015 IBC, a rooftop-mounted PV system must **maintain the fire classification required for the roof covering** by **Section 1505**. In practice, the PV modules and mounting system must carry a fire-tested classification (Class A, B, or C, per **Table 1505.1** based on the building's construction type) that equals or exceeds the roof covering's required class, so that adding the array does not degrade the roof's fire performance.

At the time of the 2015 edition, module fire testing keyed to **UL 1703**, and system-level fire testing to **UL 2703** (the mounting-system standard) was emerging in the market. The interaction between a module's stand-alone rating and its rating as installed on a given rack ("system-level" fire class) was an active area — one that the 2018 and later editions and the UL standards continued to refine.

### What Changed vs the Previous Edition

Compared with the **2012 IBC**, the headline change is the arrival of **explicit, consolidated rooftop-PV provisions**:

- **New/expanded PV section in Chapter 15** (Section 1509.7 in the model code) giving listing (UL 1703), fire-classification, and design requirements a clear home.
- **Structural clarity in Chapter 16** requiring PV dead load on construction documents, roof live load assuming panels absent, and explicit treatment of **snow drift** caused by panels.
- **Wind design** pinned to the **Component and Cladding** method (because the referenced **ASCE 7-10** still had no dedicated rooftop-solar wind procedure).
- Coordinated **roof-access and pathway** expectations for firefighter safety.

The key thing to carry forward: the 2015 edition establishes the *framework* for rooftop PV, but its wind design still leans on generic rooftop-equipment provisions. The dedicated rooftop-solar wind method arrives with **ASCE 7-16**, referenced beginning in the [IBC 2018 & Solar](code-ibc.md) edition.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

### Sources & Further Reading

- ICC Digital Codes — [2015 International Building Code (IBC), Chapter 35 Referenced Standards](https://codes.iccsafe.org/content/IBC2015/chapter-35-referenced-standards)
- ICC Digital Codes — [2015 IBC, Chapter 16 Structural Design (Section 1607.12 roof live load)](https://codes.iccsafe.org/s/IBC2015P4/chapter-16-structural-design/IBC2015P4-Ch16-Sec1607.12.5.1)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- FEMA — [2015 IBC: A Compilation of Wind-Resistance Provisions](https://www.fema.gov/sites/default/files/2020-07/2015-ibc-compilation-wind-resistance-provisions.pdf)
- Vertex Engineering — [Roof-Mounted Solar PV Panels, Part 1: Structural Code Requirements](https://vertexeng.com/insights/roof-mounted-solar-pv-panels-1-structural-requirements/)
- Solar Power World — [Know your codes for solar mounting](https://www.solarpowerworldonline.com/2018/04/know-your-codes-for-solar-mounting/)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2018 & Solar](code-ibc.md) · [IBC 2021 & Solar](code-ibc.md) · [IBC 2024 & Solar](code-ibc.md)

## IBC 2018

The **2018 International Building Code (IBC)** is the edition where rooftop solar design matured. Two changes drive this: **Chapter 15 (Roof Assemblies and Rooftop Structures)** was reorganized so that the photovoltaic (PV) provisions moved to a clearly numbered section, and the referenced structural standard advanced to **ASCE/SEI 7-16**, which for the first time added a **dedicated wind-load method for rooftop solar panels**. Together these make the 2018 IBC a meaningful step up in rigor for commercial rooftop arrays.

This article covers how the 2018 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2015 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc.md), [IBC 2021 & Solar](code-ibc.md), and [IBC 2024 & Solar](code-ibc.md).

> **Note on adoption.** The IBC is a *model* code with legal force only where adopted, and jurisdictions commonly adopt it with amendments (and on their own timeline). Some states moved from the 2015 to the 2018 IBC quickly; others lagged. Confirm the adopted edition and local amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

### Scope and Applicability to PV

The 2018 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family homes and townhouses typically fall under the **International Residential Code (IRC)**. For large rooftop arrays on commercial and industrial buildings, the IBC is the controlling structural document.

The 2018 IBC addresses rooftop PV in two coordinated places:

- **Chapter 15** — roof-assembly fire classification, PV listing/labeling, and maintenance of the roof's fire rating.
- **Chapter 16** — the structural loads (dead, live, snow, wind, seismic) the roof and framing must resist with the array installed, via reference to **ASCE 7-16**.

Firefighter-access and clear-pathway operational rules are coordinated with the **International Fire Code (IFC)**, and the electrical system remains under **NFPA 70 (National Electrical Code)**.

### Structural Requirements and Referenced ASCE 7 Edition

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

### Rooftop-Mounted PV Provisions

In the 2018 IBC, Chapter 15 was renumbered and the rooftop-solar language sits in **Section 1510.7 (Photovoltaic Panels and Modules)**. (In this edition, **Section 1511** covers Reroofing.) Key subsections:

- **1510.7.1 — Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled in accordance with UL 1703** and **installed in accordance with the manufacturer's installation instructions.** The explicit "manufacturer's instructions" wording was tightened in this edition.
- **1510.7.2 — Fire classification.** The installed system must maintain the roof's fire classification (coordinated with the Section 1505 fire-classification requirements; see below).

Structural design for the array is governed by Chapter 16 and ASCE 7-16 as described above. Ballasted, non-penetrating arrays are permitted but must be designed to resist sliding and uplift and to carry their ballast as dead load.

### Fire Classification

The 2018 IBC requires that a rooftop-mounted PV system **not diminish the fire classification of the roof assembly**. The roof's required class (Class A, B, or C) is set by **Section 1505** and **Table 1505.1** according to the building's construction type, and the PV modules and mounting system must carry a matching or higher fire-tested rating.

By the 2018 edition, **system-level fire testing to UL 2703** (the standard for PV mounting systems and rack-mounted assemblies) was established practice: a module's stand-alone UL 1703 rating and its rating *as mounted* on a specific rack ("system fire class") are distinct, and the as-installed class is what must satisfy the roof requirement. Designers should confirm the rack/module combination's tested system fire class rather than relying on the module rating alone.

### What Changed vs the Previous Edition

Relative to the [IBC 2015 & Solar](code-ibc.md) edition, the 2018 IBC brings:

- **Renumbering and consolidation** of the rooftop-PV language into **Section 1510.7 (Photovoltaic Panels and Modules)** within a reorganized Chapter 15 (in 2015 the model code used Section 1509.7).
- **Advance to ASCE 7-16**, which for the first time supplies a **dedicated wind-load method for rooftop solar** (§29.4.3 / §29.4.4) instead of borrowing the generic rooftop-equipment Components and Cladding provisions used under ASCE 7-10.
- **Removal of the 60-ft mean-roof-height limit** for the rooftop-equipment/solar wind provisions, extending the method to **buildings of all heights**.
- Tightened **installation-per-manufacturer's-instructions** wording in the PV listing subsection.
- Continued reliance on **UL 1703** for module listing, with **UL 2703** system-level fire testing now standard practice.

The practical upshot: wind design for commercial rooftop arrays became far more standardized and defensible under the 2018 IBC than under 2015. The next edition, [IBC 2021 & Solar](code-ibc.md), keeps ASCE 7-16 but changes how load combinations are referenced and updates the PV listing standards.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

### Sources & Further Reading

- ICC Digital Codes — [2018 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2018P6)
- ICC Digital Codes — [2018 IBC, Section 1505 Fire Classification](https://codes.iccsafe.org/s/IBC2018/chapter-15-roof-assemblies-and-rooftop-structures/IBC2018-Ch15-Sec1505)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- ASCE Amplify — [ASCE 7-16 Section 29.4.3, Rooftop Solar Panels for Buildings of All Heights](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [ASCE 7-16 Wind Load Provisions](https://www.structuremag.org/article/asce-7-16-wind-load-provisions/)
- FEMA — [2018 IBC: A Compilation of Wind-Resistant Provisions](https://www.fema.gov/sites/default/files/2020-07/2018-ibc-compliation-wind-resistant-provisions.pdf)
- ICC — [Structural Load Determination: 2018 and 2021 IBC and ASCE/SEI 7-16](https://shop.iccsafe.org/structural-load-determination-2018-ibc-2021-ibc-and-asce-sei-7-16.html)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc.md) · [IBC 2021 & Solar](code-ibc.md) · [IBC 2024 & Solar](code-ibc.md)

## IBC 2021

The **2021 International Building Code (IBC)** keeps the rooftop-solar framework established in 2018 but refines it in two important ways: the structural **load combinations** are now taken directly from **ASCE/SEI 7** rather than being restated in Chapter 16, and the **listing standards** for photovoltaic (PV) panels and modules are broadened to reflect the newer international product standard. The referenced loading standard remains **ASCE/SEI 7-16**.

This article covers how the 2021 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2018 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc.md), [IBC 2018 & Solar](code-ibc.md), and [IBC 2024 & Solar](code-ibc.md).

> **Note on adoption.** The IBC is a *model* code and carries legal force only where adopted, usually with local amendments and on a state-by-state timeline. As of the mid-2020s many jurisdictions had adopted the 2021 IBC while others remained on 2018 or 2015. Confirm the adopted edition and local amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

### Scope and Applicability to PV

The 2021 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family dwellings and townhouses typically fall under the **International Residential Code (IRC)**. For large commercial and industrial rooftop arrays, the IBC is the controlling structural document.

Rooftop PV is addressed in two coordinated locations:

- **Chapter 15 (Roof Assemblies and Rooftop Structures)** — PV listing/labeling and roof fire classification.
- **Chapter 16 (Structural Design)** — dead, live, snow, wind, and seismic loads with the array in place, via reference to **ASCE 7-16**.

Firefighter access and pathway rules are coordinated with the **International Fire Code (IFC)**; the electrical system remains under **NFPA 70 (National Electrical Code)**.

### Structural Requirements and Referenced ASCE 7 Edition

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

### Rooftop-Mounted PV Provisions

In the 2021 IBC the rooftop-solar language remains in **Chapter 15, Section 1510.7 (Photovoltaic Panels and Modules)**, carried forward from 2018. Key points:

- **Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled** and installed per the manufacturer's instructions. The 2021 edition broadens the acceptable product standard: panels/modules may be listed to **UL 1703 *or* to both UL 61730-1 and UL 61730-2**, reflecting the harmonized international PV safety standard (**UL 61730 / IEC 61730**) that was superseding stand-alone UL 1703. (In the related PV-shingle and building-integrated-PV roofing sections, UL 61730-1/-2 were added as accepted standards.)
- **Fire classification.** The installed system must maintain the roof's required fire classification (see below).
- **Structural design.** Governed by Chapter 16 and ASCE 7-16, with load combinations from ASCE 7 Chapter 2.

Ballasted, non-penetrating arrays are permitted; they must carry ballast as dead load and be designed to resist sliding and uplift under the applicable ASCE 7-16 provisions.

### Fire Classification

The 2021 IBC continues to require that a rooftop-mounted PV system **not diminish the roof assembly's fire classification**. The required class (A, B, or C) is set by **Section 1505** and **Table 1505.1** based on the building's construction type, and the module-and-rack combination must carry a matching or higher **system-level** fire-tested class.

System-level fire testing to **UL 2703** (PV mounting systems and rack-mounted modules) is the established basis for determining the as-installed fire class. As with prior editions, the module's stand-alone rating and its rating on a specific rack differ; the tested rack/module system class is what must satisfy the roof requirement.

### What Changed vs the Previous Edition

Relative to the [IBC 2018 & Solar](code-ibc.md) edition, the 2021 IBC brings:

- **Load combinations pulled directly from ASCE 7 Chapter 2.** The IBC deleted its duplicate Strength Design and Allowable Stress Design combination equations, eliminating IBC-vs-ASCE inconsistencies.
- **Broadened PV listing standards.** Rooftop panels/modules may be listed to **UL 1703 or to both UL 61730-1 and UL 61730-2**, reflecting the shift toward the harmonized **UL/IEC 61730** PV module safety standard. UL 61730-1/-2 were also added in the PV-shingle and building-integrated-PV roofing sections.
- **Same referenced loading standard (ASCE 7-16)** and therefore the same **rooftop-solar wind method (§29.4.3 / §29.4.4)** as 2018 — no change to the core wind procedure.
- Continued reliance on **UL 2703** for system-level fire classification and on **Section 1510.7** as the home of the PV provisions.

The takeaway: the 2021 IBC is an incremental, cleanup-oriented update for solar — same wind physics as 2018, cleaner load-combination referencing, and modernized product-listing standards. The larger structural jump comes with the [IBC 2024 & Solar](code-ibc.md) edition, which advances to ASCE 7-22 and restructures the Chapter 15 PV and reroofing language.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

### Sources & Further Reading

- ICC Digital Codes — [2021 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2021P1/chapter-15-roof-assemblies-and-rooftop-structures)
- ICC Digital Codes — [2021 IBC, Chapter 16 Structural Design](https://codes.iccsafe.org/content/IBC2021P2/chapter-16-structural-design)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [2021 IBC Significant Structural Changes](https://www.structuremag.org/article/2021-ibc-significant-structural-changes/)
- Professional Roofing (Mark S. Graham) — [A compendium of changes (April 2021)](https://www.professionalroofing.net/Articles/A-compendium-of-changes--04-01-2021/4861)
- ICC — [Structural Load Determination: 2018 and 2021 IBC and ASCE/SEI 7-16](https://shop.iccsafe.org/structural-load-determination-2018-ibc-2021-ibc-and-asce-sei-7-16.html)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc.md) · [IBC 2018 & Solar](code-ibc.md) · [IBC 2024 & Solar](code-ibc.md)

## IBC 2024

The **2024 International Building Code (IBC)** is the most current edition of the model code as of this writing and brings the biggest structural update for rooftop solar since 2018. It advances the referenced loading standard to **ASCE/SEI 7-22**, it restructures **Chapter 15 (Roof Assemblies and Rooftop Structures)** — including a renumbering of the reroofing provisions — and it modernizes the **fire classification** basis for rooftop photovoltaic (PV) systems around **UL 2703** and **Table 1505.1**, while adding more explicit language for **ballasted, unattached arrays**.

This article covers how the 2024 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2021 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc.md), [IBC 2018 & Solar](code-ibc.md), and [IBC 2021 & Solar](code-ibc.md).

> **Note on adoption.** The IBC is a *model* code that carries legal force only where adopted, generally with local amendments and on a state-by-state timeline. The 2024 IBC published in 2023; as of 2026 many jurisdictions were still on the 2021, 2018, or even 2015 editions. Do **not** assume the 2024 IBC (or ASCE 7-22) applies to your project — confirm the adopted edition and amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

### Scope and Applicability to PV

The 2024 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family dwellings and townhouses typically fall under the **International Residential Code (IRC)**. For large commercial and industrial rooftop arrays, the IBC is the controlling structural document.

Rooftop PV is addressed in two coordinated locations:

- **Chapter 15 (Roof Assemblies and Rooftop Structures)** — PV listing/labeling, system-level fire classification, and (new for this edition) more explicit ballasted-array language.
- **Chapter 16 (Structural Design)** — dead, live, snow, wind, and seismic loads with the array in place, via reference to **ASCE 7-22**.

Firefighter access and pathway rules are coordinated with the **International Fire Code (IFC)**; the electrical system remains under **NFPA 70 (National Electrical Code)**.

### Structural Requirements and Referenced ASCE 7 Edition

The 2024 IBC references **ASCE/SEI 7-22** as its structural-loading standard (IBC Chapter 35, Referenced Standards). ASCE 7-22 carries forward the dedicated **rooftop-solar wind method** first introduced in ASCE 7-16 (Chapter 29) and updates the broader wind, snow, seismic, and — newly — **tornado** load provisions. Notable ASCE 7-22 developments relevant to rooftop arrays include revised wind hazard mapping and the introduction of **tornado loads** for certain Risk Category III and IV structures, which can affect large or critical-facility rooftops.

| Load type | Requirement (2024 IBC + ASCE 7-22) |
|-----------|-------------------------------------|
| **Load combinations** | Taken **directly from ASCE 7 Chapter 2** (continued from the 2021 approach). |
| **Dead load** | PV system, supports, and ballast are dead load; rack-support dead load must appear on the construction documents. |
| **Roof live load** | Roof designed for live load assuming panels absent; PV live load in covered areas is additive unless the area under each panel is inaccessible. |
| **Snow load** | Snow, including panel-induced **drift**, per ASCE 7-22 (updated ground-snow mapping). |
| **Wind load** | Dedicated rooftop-solar wind method carried forward from ASCE 7-16 into **ASCE 7-22 Chapter 29**. |
| **Tornado load** | **New in ASCE 7-22** for applicable Risk Category III/IV buildings — may govern for some large or critical rooftops. |
| **Seismic / ballasted arrays** | Ballasted, unattached systems evaluated for **sliding and uplift** (per ASCE 7 Chapter 13 seismic provisions for nonstructural components). |

```
 2024 IBC structural-load path for rooftop PV
 ---------------------------------------------
 Chapter 15  --> roof assembly, fire (UL 2703 + Table 1505.1), ballasted-array rules
 Chapter 16  --> loads: dead + live + snow(+drift) + wind + seismic + TORNADO(new)
   * load combinations from ASCE 7 Chapter 2 *
 Referenced standard --> ASCE 7-22 (rooftop-solar wind method retained; tornado loads added)
```

### Rooftop-Mounted PV Provisions

The 2024 IBC restructured Chapter 15. The **reroofing** provisions were renumbered to **Section 1512 (Reroofing)** in this edition — a change worth flagging because earlier editions used different numbers for that content, and it is easy to confuse "Section 1512" here with the *reroofing* rules rather than the PV rules.

> **Verify the PV section number in your adopted code.** The rooftop-mounted PV listing and fire-classification provisions remain within Chapter 15's photovoltaic language (carried forward from the Section 1510.7 area used in the 2018 and 2021 editions), but the surrounding sections were renumbered in 2024. Confirm the exact citation in the adopted edition before relying on a specific section number.

Key requirements in the 2024 edition:

- **Listing and installation.** Rooftop-mounted PV panel *systems* must be **tested, listed, and identified with a fire classification in accordance with UL 2703**, and installed **in accordance with the manufacturer's installation instructions and the system listing.** Modules continue to be listed to **UL 61730-1/-2 (or UL 1703)** for module-level safety.
- **Ballasted, unattached arrays.** The 2024 edition adds more explicit language: ballasted, unattached PV panel systems are to be installed only on roofs with a **slope not greater than 1 unit vertical in 12 units horizontal (1:12)**, and ballasted, non-penetrating systems must be designed to accommodate **sliding and uplift** (referencing the ASCE 7 Chapter 13 nonstructural-component seismic provisions).
- **Fire classification.** The installed system's fire class must comply with **Table 1505.1** for the building's construction type (see below).

### Fire Classification

The 2024 IBC clarifies and consolidates the rooftop-PV fire basis. A **rooftop-mounted PV panel *system*** must be **tested, listed, and identified with a fire classification in accordance with UL 2703**, and the resulting classification must comply with **Table 1505.1** based on the building's type of construction (Class A, B, or C).

This is a meaningful shift in emphasis: the code now frames the requirement around the **system-level (rack + module) UL 2703 fire classification** rather than leaning on the module's stand-alone rating. In parallel, module-level product listing moved to the harmonized **UL/IEC 61730** standard (with UL 1703 largely retired for new listings). The practical rule is unchanged in spirit — the array must not diminish the roof's required fire class — but the tested basis is now explicitly the installed system.

### What Changed vs the Previous Edition

Relative to the [IBC 2021 & Solar](code-ibc.md) edition, the 2024 IBC brings:

- **Advance to ASCE 7-22** (from ASCE 7-16) as the referenced loading standard — the biggest structural change, bringing updated wind/snow mapping and **new tornado-load provisions** for certain Risk Category III/IV buildings.
- **Chapter 15 restructuring**, including renumbering the **reroofing** provisions to **Section 1512** (do not confuse with PV) and reorganizing surrounding sections — verify the exact PV citation locally.
- **Fire classification recast around UL 2703 and Table 1505.1**, emphasizing the **system-level** (rack + module) fire class as installed, consistent with the retirement of UL 1703 in favor of **UL 61730** for module listing.
- **More explicit ballasted-array language** — a 1:12 maximum roof slope for unattached ballasted systems and an explicit sliding/uplift design requirement referencing ASCE 7 Chapter 13.
- Continued reliance on **load combinations taken directly from ASCE 7 Chapter 2** (carried over from 2021).

The takeaway: the 2024 IBC is a substantive update for commercial rooftop solar — new referenced loading standard, potential tornado-load demand, clearer ballasted-array rules, and a system-level fire-classification basis. Because adoption lags and several details were renumbered, treat any specific section citation as provisional until confirmed against your adopted code.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally and, for the 2024 edition, not yet universally adopted. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

### Sources & Further Reading

- ICC Digital Codes — [2024 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2024V1.0/chapter-15-roof-assemblies-and-rooftop-structures)
- ICC Digital Codes — [2024 IBC, Section 1505 Fire Classification](https://codes.iccsafe.org/s/IBC2024V1.0/chapter-15-roof-assemblies-and-rooftop-structures/IBC2024V1.0-Ch15-Sec1505)
- ICC Digital Codes — [2024 IBC, Chapter 35 Referenced Standards](https://codes.iccsafe.org/content/IBC2024P1/chapter-35-referenced-standards)
- ICC — [2024 IBC Significant Changes – Structural (PDF)](https://www.iccsafe.org/wp-content/uploads/2024-IBC-Structural.pdf)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [2024 IBC Significant Structural Changes, Part 7](https://www.structuremag.org/article/2024-ibc-significant-structural-changes-part-7/)
- ICC — [Structural Load Determination: 2024 IBC and ASCE/SEI 7-22](https://shop.iccsafe.org/structural-load-determination-2024-ibc-and-asce-sei-7-22.html)
- Professional Roofing (Mark S. Graham) — [A clarified code (June 2024)](https://www.professionalroofing.net/Articles/A-clarified-code--06-01-2024/5415)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc.md) · [IBC 2018 & Solar](code-ibc.md) · [IBC 2021 & Solar](code-ibc.md)

---

*Reference and educational use only — not code-compliance advice. Model codes are adopted and amended locally; confirm the exact edition and any local amendments with your AHJ and a licensed professional.*
