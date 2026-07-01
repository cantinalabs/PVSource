# IRC 2024 & Solar

The **2024 International Residential Code (IRC)** governs construction of **detached one- and two-family dwellings and townhouses** up to three stories. Its headline change for rooftop solar is **structural, not just editorial**: the residential PV provisions long known as **Section R324** were **reorganized and renumbered to Section R329, "Photovoltaic Systems,"** with the solar-thermal material moved to its own location. The familiar fire-service roof-access framework — pathways, ridge setbacks, and the sprinkler alternative — carries forward largely intact, with **refinements to the firefighter-access pathway provisions**.

This article covers the 2024 IRC's residential PV requirements: scope, fire-service roof access and ridge setbacks (with the key ≤33% coverage exception), structural attachment, and the pointer to the National Electrical Code (NEC). For context, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Residential Solar Codes & Fire Requirements](residential-codes.md); compare [IRC 2021 & Solar](code-irc-2021.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2024 IRC model text. The 2024 IRC is relatively new and, as of this writing, is being adopted on a rolling basis; many jurisdictions still enforce 2021, 2018, or 2015. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

## Scope: What R329 Covers for Dwellings

In the 2024 IRC, the **photovoltaic provisions are consolidated under Section R329, "Photovoltaic Systems"** (the section number that in prior editions was R324). It applies to PV systems installed on structures built under the IRC — one- and two-family dwellings and townhouses — covering listing, structural support, wind resistance, fire classification, roof access, ground-mounted systems, and BIPV.

The 2024 R329 is organized (in summary) as follows:

| Subsection (2024 IRC) | Subject |
|---|---|
| R329.1 | General / scope |
| R329.2 | Photovoltaic systems (general, listing) |
| R329.3 – R329.5 | Rooftop-mounted PV — structural, wind, fire classification |
| **R329.6** | **Roof access and pathways** |
| R329.6.1 | Pathways |
| R329.6.2 | Setback at ridge |
| R329.6.2.1 | Alternative setback (sprinklered dwellings) |
| R329.6.4 | Building-integrated photovoltaic (BIPV) systems |
| R329.7 | Ground-mounted photovoltaic systems |

> **This is the big change.** The residential PV section **moved from R324 to R329** in 2024, and solar-thermal content was separated out. Older references, plan-check checklists, and third-party guides still cite "R324" — when you see R324 in a 2024-context document, confirm whether it should read **R329**. The exact subsection numbering within R329 should be verified against the published 2024 IRC, as the reorganization shifted some sub-numbers. **Verify against the edition your AHJ enforces.**

## Fire-Service Roof Access & Setback Pathways

The 2024 roof-access rules (**R329.6**) preserve firefighter access for walking, ventilating, and working around energized PV, and remain coordinated with the roof-access provisions of the **International Fire Code** — see [IFC 2018 & Solar](code-ifc-2018.md).

### Access pathways (R329.6.1)

Not fewer than **two 36-inch-wide pathways** on separate roof planes, from the lowest roof edge to the ridge, are required, with **not fewer than one pathway on the street or driveway side** of the roof. For each roof plane bearing an array, a **36-inch (914 mm) pathway** from the lowest edge to the ridge must be provided on the same plane, an adjacent plane, or straddling both. The 2024 edition **refines the firefighter-access pathway provisions**, including clarifying/​adding conditions under which certain access pathways may be exempted; confirm the specific exemption language and its triggers with your plan reviewer.

```
        RIDGE
  ======================
  | 18" min setback (<=33%) |
  |  +----------------+  |
  |  |   PV  ARRAY    |  |
  |  +----------------+  |
  |<-36"->|      |<-36"->|   two 36" access pathways,
  | path  |      | path  |   >=1 on street/driveway side
  ======================
     LOWEST ROOF EDGE (eave)
```

### Setback at the ridge — the key exception (R329.6.2)

A clear setback is required on **both sides of a horizontal ridge**, scaled to coverage (thresholds continuous with 2018/2021):

| PV array coverage (plan-view of total roof area) | Ridge setback each side |
|---|---|
| **Not more than 33%** | **18 in. (457 mm)** |
| More than 33% | 36 in. (914 mm) |

> **The 18-inch exception.** An array covering **no more than about one-third (≤33%) of the roof plan area** qualifies for the reduced **18-inch** ridge setback; larger arrays require the full **36-inch** setback. Coverage is measured in **plan view (projected onto a horizontal plane), not along the slope.**

### Sprinkler alternative (R329.6.2.1)

Where an **automatic sprinkler system** complying with **NFPA 13D or IRC Section P2904** is installed, an array covering **≤66%** of the roof plan area may use the **18-inch** setback; above 66%, the **36-inch** setback applies. Panels and modules must **not** be placed on the portion of a roof below an **emergency escape and rescue opening**.

### Ground-mounted PV (R329.7)

The 2024 edition addresses **ground-mounted photovoltaic systems** in their own subsection, requiring them to be designed and installed to the applicable structural provisions (referencing IRC Section R301). This is a useful clarification for residential detached arrays that are not on the dwelling roof.

## Structural Attachment

Rooftop PV adds dead load and new load paths the existing framing must carry.

- **Gravity and dead load.** The added array dead load must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop PV panels/modules and supports must resist **component-and-cladding wind loads** from the IRC provisions, coordinated with **ASCE 7**. The 2024 IRC generation is coordinated with the **ASCE 7-22** load standard, which further updated rooftop-solar wind and (regionally) tornado provisions. Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still meet its original snow-load requirement (ASCE 7) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not just the sheathing, with adequate embedment; spacing follows the calculated uplift and fastener withdrawal capacity. Penetrations must be flashed to maintain weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation**. Marginal or non-standard framing frequently triggers a required structural evaluation.

## Electrical: Pointer to the NEC

The 2024 IRC does **not** restate PV electrical rules; the photovoltaic section directs the installation to the **National Electrical Code (NFPA 70)**:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

**Rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2024 IRC is commonly paired with the **2023 NEC**, which retained module-level rapid shutdown and continued to refine 690.12 (initiation devices, labeling, and BIPV allowances) as well as energy-storage-system interconnection rules. Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** with the 2024 IRC.

## What Changed vs. the Previous Edition

Relative to [IRC 2021 & Solar](code-irc-2021.md):

- **Section renumbered R324 → R329.** The residential PV provisions were **reorganized into Section R329, "Photovoltaic Systems,"** and solar-thermal content was separated. This is the most visible change and the biggest source of citation confusion — legacy documents citing "R324" generally map to **R329** under the 2024 IRC.
- **Firefighter-access pathway provisions refined**, including clarified/​added conditions for pathway exemptions. Verify the precise triggers with the published code and your AHJ.
- **Ground-mounted PV** given a clearer dedicated subsection (R329.7).
- **Ridge-setback thresholds unchanged.** The **≤33% / 18-inch** exception, the **>33% / 36-inch** base rule, and the **≤66% sprinkler alternative** carry forward from 2018/2021.
- **Structural/wind coordination advances** to the **ASCE 7-22** generation of load provisions; NEC pairing typically advances to the **2023 NEC** (though NEC adoption is independent of the IRC).

Because the 2024 IRC is newly published and still being adopted, expect a long transition during which most residential PV permits are still reviewed under the [2021](code-irc-2021.md), [2018](code-irc-2018.md), or [2015](code-irc-2015.md) editions. Always confirm the edition in force before designing to R329 numbering.

---

> **Disclaimer.** This article is an educational summary of the 2024 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. The 2024 edition is newly published; section numbers (including the R324-to-R329 renumbering), dimensions, and thresholds should be verified against the published code and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

## Sources & Further Reading

- [2024 IRC — Index (ICC Digital Codes)](https://codes.iccsafe.org/content/IRC2024V2.0/index)
- [2024 Significant Code Changes for the IRC (NAHB)](https://www.nahb.org/-/media/NAHB/advocacy/docs/top-priorities/codes/code-adoption/signficant-code-changes-2024-irc.pdf)
- [Section R324 / R329 roof-access example, Roof-Mounted PV (mybuildingpermit.com)](https://mybuildingpermit.com/sites/default/files/TS_24_Residential%20Solar%20Systems_FINAL_4_14_25.pdf)
- [Section R324—Solar energy systems, state adoption reference (Washington WAC 51-51-03240)](https://app.leg.wa.gov/WAC/default.aspx?cite=51-51-03240&pdf=true)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2015 & Solar](code-irc-2015.md) · [IRC 2018 & Solar](code-irc-2018.md) · [IRC 2021 & Solar](code-irc-2021.md) · [IFC 2018 & Solar](code-ifc-2018.md)
