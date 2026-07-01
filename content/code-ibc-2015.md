# IBC 2015 & Solar

The **2015 International Building Code (IBC)** was the first widely adopted edition of the model code to carry a dedicated set of provisions for **rooftop-mounted photovoltaic (PV) panels and modules**. Before 2015, most jurisdictions treated rooftop solar as generic "rooftop equipment," leaving structural, fire, and access questions largely to the authority having jurisdiction (AHJ) and to referenced standards. The 2015 edition changed that by placing explicit PV language in **Chapter 15 (Roof Assemblies and Rooftop Structures)** and by strengthening the structural-load rules in **Chapter 16 (Structural Design)**.

This article covers how the 2015 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to prior editions. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2018 & Solar](code-ibc-2018.md), [IBC 2021 & Solar](code-ibc-2021.md), and [IBC 2024 & Solar](code-ibc-2024.md).

> **Note on adoption.** The IBC is a *model* code. It only carries legal force where a state or local government adopts it, and jurisdictions frequently adopt it with amendments. Several states remained on the 2012 IBC when the 2015 edition published, while others (and some large cities with their own building codes, such as New York City) renumber or rewrite the PV sections. Always confirm the adopted edition and any local amendments with your **AHJ**, and have a licensed **professional engineer (PE)** verify structural design.

## Scope and Applicability to PV

The 2015 IBC governs the design and construction of most commercial, industrial, institutional, and multifamily buildings. Detached one- and two-family dwellings and townhouses generally fall under the **International Residential Code (IRC)** instead, so for large rooftop arrays on commercial and industrial buildings the IBC is the controlling structural document.

For solar specifically, the 2015 IBC addresses rooftop PV in two places:

- **Chapter 15** — roof-assembly integrity, fire classification, listing/labeling, and (via the fire and building-services codes) rooftop access and pathways.
- **Chapter 16** — the structural loads (dead, live, snow, wind) that the roof and its framing must resist with the array in place.

The code applies to the PV racking, modules, ballast, and the roof structure that supports them. It does **not** cover the electrical system; that is the domain of **NFPA 70 (the National Electrical Code)**, and rooftop firefighter-safety operational rules live in the **International Fire Code (IFC)**.

## Structural Requirements and Referenced ASCE 7 Edition

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

## Rooftop-Mounted PV Provisions

In the model 2015 IBC, the rooftop-solar language is found in **Chapter 15, Section 1509.7 (Photovoltaic Systems)** and its subsections. (Some adopting jurisdictions renumber this content — New York City, for example, uses a Section 1512 — so verify the numbering in your adopted code.)

The core 1509.7 requirements are:

- **Listing and labeling.** Rooftop-mounted PV panels and modules must be **listed and labeled in accordance with UL 1703** and installed per the manufacturer's installation instructions.
- **Structural design.** Panels/modules and their supports must be designed for the applicable dead, live, snow, and wind loads described above.
- **Fire classification.** The installed system must not reduce the roof assembly's required fire classification (see below).
- **Access and pathways.** Roof-access and clear-pathway requirements (commonly 36-inch pathways from eave to ridge and setbacks at ridges) apply to firefighter operations; these are coordinated with the **IFC**. Requirements scale with building type and array layout.

Ballasted (non-penetrating) arrays are permitted but must still satisfy the dead-load, sliding, and uplift demands of Chapter 16. The 2015 edition does not yet contain the more explicit ballasted-array language that later editions add.

## Fire Classification

Under the 2015 IBC, a rooftop-mounted PV system must **maintain the fire classification required for the roof covering** by **Section 1505**. In practice, the PV modules and mounting system must carry a fire-tested classification (Class A, B, or C, per **Table 1505.1** based on the building's construction type) that equals or exceeds the roof covering's required class, so that adding the array does not degrade the roof's fire performance.

At the time of the 2015 edition, module fire testing keyed to **UL 1703**, and system-level fire testing to **UL 2703** (the mounting-system standard) was emerging in the market. The interaction between a module's stand-alone rating and its rating as installed on a given rack ("system-level" fire class) was an active area — one that the 2018 and later editions and the UL standards continued to refine.

## What Changed vs the Previous Edition

Compared with the **2012 IBC**, the headline change is the arrival of **explicit, consolidated rooftop-PV provisions**:

- **New/expanded PV section in Chapter 15** (Section 1509.7 in the model code) giving listing (UL 1703), fire-classification, and design requirements a clear home.
- **Structural clarity in Chapter 16** requiring PV dead load on construction documents, roof live load assuming panels absent, and explicit treatment of **snow drift** caused by panels.
- **Wind design** pinned to the **Component and Cladding** method (because the referenced **ASCE 7-10** still had no dedicated rooftop-solar wind procedure).
- Coordinated **roof-access and pathway** expectations for firefighter safety.

The key thing to carry forward: the 2015 edition establishes the *framework* for rooftop PV, but its wind design still leans on generic rooftop-equipment provisions. The dedicated rooftop-solar wind method arrives with **ASCE 7-16**, referenced beginning in the [IBC 2018 & Solar](code-ibc-2018.md) edition.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

## Sources & Further Reading

- ICC Digital Codes — [2015 International Building Code (IBC), Chapter 35 Referenced Standards](https://codes.iccsafe.org/content/IBC2015/chapter-35-referenced-standards)
- ICC Digital Codes — [2015 IBC, Chapter 16 Structural Design (Section 1607.12 roof live load)](https://codes.iccsafe.org/s/IBC2015P4/chapter-16-structural-design/IBC2015P4-Ch16-Sec1607.12.5.1)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- FEMA — [2015 IBC: A Compilation of Wind-Resistance Provisions](https://www.fema.gov/sites/default/files/2020-07/2015-ibc-compilation-wind-resistance-provisions.pdf)
- Vertex Engineering — [Roof-Mounted Solar PV Panels, Part 1: Structural Code Requirements](https://vertexeng.com/insights/roof-mounted-solar-pv-panels-1-structural-requirements/)
- Solar Power World — [Know your codes for solar mounting](https://www.solarpowerworldonline.com/2018/04/know-your-codes-for-solar-mounting/)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2018 & Solar](code-ibc-2018.md) · [IBC 2021 & Solar](code-ibc-2021.md) · [IBC 2024 & Solar](code-ibc-2024.md)
