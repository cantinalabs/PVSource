# The International Residential Code (IRC) & Solar

The **International Residential Code (IRC)** governs solar on one- and two-family dwellings — roof access and fire setbacks, structural attachment, and pointers to the NEC for electrical work.

## IRC 2015

The **2015 International Residential Code (IRC)** is the model code that governs construction of **detached one- and two-family dwellings and townhouses** not more than three stories above grade. The 2015 edition is historically important for rooftop solar: it introduced **Section R324, "Solar Energy Systems"** — the first time the IRC carried a dedicated, comprehensive set of provisions for roof-mounted photovoltaic (PV) systems on dwellings. Earlier editions (2009, 2012) had no equivalent stand-alone solar section, so R324 is the baseline against which every later edition's changes are measured.

This article covers what the 2015 IRC requires for residential PV: scope, fire-service roof access and ridge setbacks, structural attachment, and the pointer to the National Electrical Code (NEC) for the electrical installation. For the broader model-code framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and the residential-specific summary in [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2015 IRC model text. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

### Scope: What R324 Covers for Dwellings

Section R324 applies to **solar energy systems** installed on structures built under the IRC — one- and two-family dwellings and townhouses. It addresses both **solar thermal** and **photovoltaic** systems, but the provisions most relevant to rooftop solar deal with PV panels and modules.

The 2015 R324 is organized (in summary) as follows:

| Subsection (2015 IRC) | Subject |
|---|---|
| R324.1 | General / scope |
| R324.2 | Solar thermal systems |
| R324.3 | Photovoltaic systems (general, listing) |
| R324.4 | Rooftop-mounted PV — structural, wind, fire classification |
| R324.5 | Building-integrated photovoltaic (BIPV) systems |
| R324.6 | Photovoltaic systems — fire classification cross-reference |
| R324.7 | Access and pathways (fire-service roof access) |

> Section numbering within R324 was reorganized in later editions. In the **2015 IRC the fire-service access and setback rules live in R324.7**; in the 2018 and 2021 editions they were consolidated under **R324.6**. Do not assume the same subsection number applies across editions — verify against the edition your AHJ enforces.

Two general requirements from R324.3 are worth noting:

- **Listing.** PV systems must be **listed and labeled** and installed in accordance with the manufacturer's instructions and the applicable codes.
- **Electrical.** Photovoltaic systems must be installed in accordance with the applicable provisions that point to the **NEC (NFPA 70)** — see the electrical pointer below.

### Fire-Service Roof Access & Setback Pathways

The 2015 IRC's roof-access rules (**R324.7**) exist so firefighters can walk the roof, ventilate it, and work around energized PV during a fire. These residential provisions closely mirror — and were coordinated with — the roof-access provisions of the **International Fire Code**. For the fire-code side of the same rules, see [IFC 2018 & Solar](code-ifc.md).

#### Access pathways

Not fewer than **two 36-inch-wide pathways** on separate roof planes, running from the lowest roof edge to the ridge, are required. For each roof plane bearing an array, a **36-inch (914 mm) pathway** from the lowest edge to the ridge must be provided on the same plane, an adjacent plane, or straddling both. Pathways must be over roof areas capable of supporting firefighters.

```
        RIDGE
  ======================
  |  18" min setback     |   <- setback at ridge (see below)
  |  +----------------+  |
  |  |                |  |
  |  |   PV  ARRAY    |  |
  |  |                |  |
  |  +----------------+  |
  |                      |
  |<-36"->|      |<-36"->|   <- two 36" access pathways,
  | path  |      | path  |      edge-to-ridge, on separate
  ======================        roof planes
     LOWEST ROOF EDGE (eave)
```

#### Setback at the ridge — and the key exception

A clear setback is required on **both sides of a horizontal ridge** so crews can cut ventilation openings. The 2015 IRC scales the setback to how much of the roof the array covers:

| PV array coverage (plan-view of total roof area) | Ridge setback each side |
|---|---|
| **Not more than 33%** | **18 in. (457 mm)** |
| More than 66% | 36 in. (914 mm) |

> **The 18-inch exception.** The headline residential concession is that an array covering **no more than about one-third (≤33%) of the roof plan area** qualifies for a reduced **18-inch** ridge setback instead of the larger setback. This lets a modest residential array sit closer to the ridge while preserving a firefighter working space. Coverage is measured in **plan view (as projected onto a horizontal plane), not along the roof slope** — a subtlety that trips up designers. Confirm the exact measurement method with your plan reviewer.

```
   ridge line
   ===============================
        ^  18" (array <=33% of roof)  ^
        |                             |
        +--- clear setback each side -+
```

Panels and modules must **not** be placed on the portion of a roof below an **emergency escape and rescue opening (bedroom egress window)**.

### Structural Attachment

Rooftop PV adds dead load and new uplift/​downward-load paths that the existing framing must carry.

- **Gravity and dead load.** The array's added dead load (modules plus racking — commonly on the order of a few pounds per square foot) must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop-mounted PV panels/modules and their supports must resist the **component-and-cladding wind loads** derived from the IRC wind provisions, which are coordinated with **ASCE 7** (Minimum Design Loads and Associated Criteria for Buildings and Other Structures). Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still satisfy its original snow-load requirement (also from ASCE 7 as referenced by the IRC) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not merely the roof sheathing, with adequate embedment; spacing is set by the calculated uplift and the fastener's withdrawal capacity. Penetrations must be flashed to maintain the roof's weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation** for spans, attachment spacing, and uplift. Marginal or non-standard framing frequently triggers a required structural evaluation.

### Electrical: Pointer to the NEC

The IRC does **not** contain the detailed electrical rules for PV. Instead, R324's photovoltaic provisions direct the installation to the **National Electrical Code (NFPA 70)** — principally:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

Note that **rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2015 IRC pairs with the **2014 NEC** in most adopting jurisdictions, whose 690.12 required a rapid-shutdown boundary around the array; the more stringent module-level ("conductors inside the array") rapid-shutdown requirement arrived with the **2017 NEC**. Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** alongside the 2015 IRC.

### What Changed vs. the Previous Edition

Because there was **no dedicated solar section before 2015**, the 2015 IRC's change is foundational rather than incremental:

- **New Section R324, "Solar Energy Systems"** was added — the first stand-alone IRC solar section. The 2012 IRC had no comparable provision, so rooftop PV was previously handled through general structural, roofing, and electrical requirements plus local practice.
- It **codified fire-service roof access, pathways, and ridge setbacks** for dwellings (in R324.7), including the **≤33% coverage / 18-inch ridge-setback** exception.
- It **explicitly tied rooftop PV to wind and structural provisions** (component-and-cladding loads coordinated with ASCE 7) and to the roof's **fire classification**.
- It **directed the electrical installation to the NEC** rather than restating electrical rules.

The next edition (see [IRC 2018 & Solar](code-irc.md)) reorganized these same rules — moving access and setbacks to **R324.6**, tightening the ridge-setback coverage threshold, and adding a sprinkler-based alternative. Later editions ([IRC 2021 & Solar](code-irc.md) and [IRC 2024 & Solar](code-irc.md)) refined the pathways further and, in 2024, renumbered the section entirely.

---

> **Disclaimer.** This article is an educational summary of the 2015 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. Section numbers, dimensions, and thresholds are drawn from the model edition and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

### Sources & Further Reading

- [2015 IRC, Chapter 3 — Building Planning (Section R324, Solar Energy Systems)](https://codes.iccsafe.org/content/IRC2015/chapter-3-building-planning)
- [2015 IRC, Section R324.7 — Access and pathways (ICC Digital Codes)](https://codes.iccsafe.org/s/GCIRC2015P1/chapter-3-building-planning/GCIRC2015P1-Pt03-Ch03-SecR324.7)
- [Installation of Photovoltaic Systems — Code Compliance Brief (PNNL Building America Solution Center)](https://basc.pnnl.gov/code-compliance/installation-photovoltaic-systems-code-compliance-brief)
- [2015 IRC — A Compilation of Wind Resistant Provisions (FEMA)](https://www.fema.gov/sites/default/files/2020-08/2015_IRC_compilaton_of_wind_resistanc_provisions.pdf)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2018 & Solar](code-irc.md) · [IRC 2021 & Solar](code-irc.md) · [IRC 2024 & Solar](code-irc.md) · [IFC 2018 & Solar](code-ifc.md)

## IRC 2018

The **2018 International Residential Code (IRC)** governs construction of **detached one- and two-family dwellings and townhouses** up to three stories. It carries forward **Section R324, "Solar Energy Systems"** — the dedicated solar section first introduced in 2015 — but **reorganizes and tightens the fire-service roof-access provisions**. The most consequential 2018 change is the relocation of access and setback rules to **Section R324.6** and a stricter ridge-setback threshold, softened by a new **sprinkler-based alternative**.

This article covers the 2018 IRC's residential PV requirements: scope, fire-service roof access and ridge setbacks (including the key ≤33% coverage exception), structural attachment, and the pointer to the National Electrical Code (NEC). For context, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Residential Solar Codes & Fire Requirements](residential-codes.md); compare the prior edition at [IRC 2015 & Solar](code-irc.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2018 IRC model text. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

### Scope: What R324 Covers for Dwellings

Section R324 applies to **solar energy systems** — both solar thermal and photovoltaic (PV) — installed on structures built under the IRC, meaning one- and two-family dwellings and townhouses. The provisions relevant to rooftop solar address PV panels and modules: their listing, structural support, wind resistance, fire classification, and roof access.

The 2018 R324 is organized (in summary) as follows:

| Subsection (2018 IRC) | Subject |
|---|---|
| R324.1 | General / scope |
| R324.2 | Solar thermal systems |
| R324.3 | Photovoltaic systems (general, listing) |
| R324.4 | Rooftop-mounted PV — structural, wind, fire classification |
| R324.5 | Building-integrated photovoltaic (BIPV) systems |
| **R324.6** | **Roof access and pathways (fire-service access + setbacks)** |
| R324.6.1 | Pathways |
| R324.6.2 | Setback at ridge |
| R324.6.2.1 | Alternative setback (sprinklered dwellings) |

> **Key structural note.** In the **2015 IRC** the fire-access rules were in **R324.7**; the **2018 edition moved them to R324.6** and added subsections R324.6.1, R324.6.2, and R324.6.2.1. Do not assume the same subsection number applies across editions — verify against the edition your AHJ enforces.

### Fire-Service Roof Access & Setback Pathways

The 2018 roof-access rules (**R324.6**) let firefighters walk the roof, ventilate it, and work around energized PV. They are closely coordinated with the roof-access provisions of the **International Fire Code** — see [IFC 2018 & Solar](code-ifc.md) for the parallel fire-code text.

#### Access pathways (R324.6.1)

Not fewer than **two 36-inch-wide pathways** on separate roof planes, running from the lowest roof edge to the ridge, are required. For each roof plane bearing an array, a **36-inch (914 mm) pathway** from the lowest edge to the ridge must be provided on the same plane, an adjacent plane, or straddling both. Pathways must be located over roof areas capable of supporting firefighters.

```
        RIDGE
  ======================
  | 18" min setback (<=33%) |
  |  +----------------+  |
  |  |                |  |
  |  |   PV  ARRAY    |  |
  |  |                |  |
  |  +----------------+  |
  |<-36"->|      |<-36"->|   <- two 36" access pathways,
  | path  |      | path  |      edge-to-ridge, separate planes
  ======================
     LOWEST ROOF EDGE (eave)
```

#### Setback at the ridge — the key exception (R324.6.2)

A clear setback is required on **both sides of a horizontal ridge**. In the 2018 IRC the threshold was **tightened** relative to 2015:

| PV array coverage (plan-view of total roof area) | Ridge setback each side (2018 base rule) |
|---|---|
| **Not more than 33%** | **18 in. (457 mm)** |
| More than 33% | 36 in. (914 mm) |

> **The 18-inch exception.** An array covering **no more than about one-third (≤33%) of the roof plan area** qualifies for the reduced **18-inch** ridge setback; anything larger requires the full **36-inch** setback. Compared with 2015 (where the 36-inch setback only kicked in above **66%** coverage), the 2018 base rule is **stricter** — the larger setback now applies as soon as coverage exceeds 33%. Coverage is measured in **plan view (projected onto a horizontal plane), not along the slope.**

#### Sprinkler alternative (R324.6.2.1)

The 2018 IRC added a **new alternative** that restores the more generous 66% threshold when the dwelling is protected by fire sprinklers:

> Where an **automatic sprinkler system** is installed in the dwelling in accordance with **NFPA 13D or IRC Section P2904**, an array covering **≤66%** of the roof plan area may use the **18-inch** ridge setback; above 66%, the **36-inch** setback applies.

Panels and modules must **not** be placed on the portion of a roof below an **emergency escape and rescue opening**.

### Structural Attachment

Rooftop PV adds dead load and new uplift/​downward-load paths the existing framing must carry.

- **Gravity and dead load.** The array's added dead load must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop PV panels/modules and their supports must resist the **component-and-cladding wind loads** from the IRC wind provisions, coordinated with **ASCE 7**. Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still meet its original snow-load requirement (ASCE 7, as referenced by the IRC) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not merely the sheathing, with adequate embedment; spacing follows the calculated uplift and fastener withdrawal capacity. Penetrations must be flashed to maintain weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation** for spans, attachment spacing, and uplift. Marginal or non-standard framing frequently triggers a required structural evaluation.

### Electrical: Pointer to the NEC

The 2018 IRC does **not** restate the detailed electrical rules for PV. R324's photovoltaic provisions direct the installation to the **National Electrical Code (NFPA 70)**:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

**Rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2018 IRC is commonly adopted alongside the **2017 NEC**, whose 690.12 introduced the module-level ("inside the array boundary," conductors limited to 80 V) rapid-shutdown requirement — a significant tightening over the 2014 NEC's array-boundary rule. Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** with the 2018 IRC.

### What Changed vs. the Previous Edition

Relative to [IRC 2015 & Solar](code-irc.md):

- **Fire-access rules relocated** from **R324.7 (2015)** to **R324.6 (2018)**, with new numbered subsections for pathways (R324.6.1), ridge setback (R324.6.2), and the sprinkler alternative (R324.6.2.1).
- **Ridge-setback threshold tightened.** In 2015, the full 36-inch setback applied only above **66%** coverage; in 2018 the **36-inch setback applies as soon as coverage exceeds 33%**. The ≤33% / 18-inch exception carries over.
- **New sprinkler-based alternative (R324.6.2.1).** Dwellings sprinklered to **NFPA 13D or IRC P2904** may keep the 18-inch setback up to **66%** coverage — restoring flexibility that the base rule removed.
- The **structural, wind (ASCE 7), fire-classification, and NEC-pointer** provisions are substantively continuous with 2015.

The following edition ([IRC 2021 & Solar](code-irc.md)) retained the R324.6 structure while refining pathway placement (street/driveway side, emergency-escape-opening pathways) and BIPV references; the [IRC 2024 & Solar](code-irc.md) edition then renumbered the section entirely.

---

> **Disclaimer.** This article is an educational summary of the 2018 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. Section numbers, dimensions, and thresholds are drawn from the model edition and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

### Sources & Further Reading

- [2018 IRC, Section R324.6 — Roof Access and Pathways (UpCodes)](https://up.codes/s/roof-access-and-pathways)
- [2018 IRC, Section R324.6.1 — Roof access example (Contra Costa County)](https://www.contracosta.ca.gov/DocumentCenter/View/69155/Example-for-Roof-Mount-Solar-Fire-Setbacks-per-Code)
- [Modified Roof Setbacks for Residential Solar PV Systems, 2018 (CALSSA)](https://www.solarelectricsupply.com/media/sparsh/product_attachment/CALSSA_Modified_Setbacks_and_Pathways_06-20-2018.pdf)
- [Section R324 Solar Energy Systems — installation reference (Harford County, MD)](https://www.harfordcountymd.gov/DocumentCenter/View/3607/Installation-of-Solar-Mounted-Roofing-Panels)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2015 & Solar](code-irc.md) · [IRC 2021 & Solar](code-irc.md) · [IRC 2024 & Solar](code-irc.md) · [IFC 2018 & Solar](code-ifc.md)

## IRC 2021

The **2021 International Residential Code (IRC)** governs construction of **detached one- and two-family dwellings and townhouses** up to three stories. It keeps **Section R324, "Solar Energy Systems,"** and retains the **R324.6 roof-access structure** introduced in 2018, while **refining the fire-service pathway rules** — most notably requiring a pathway on the **street or driveway side** and an explicit pathway to **emergency escape and rescue openings**, and clarifying pathway obstruction language. The ridge-setback thresholds and the sprinkler alternative carry over from 2018.

This article covers the 2021 IRC's residential PV requirements: scope, fire-service roof access and ridge setbacks (with the key ≤33% coverage exception), structural attachment, and the pointer to the National Electrical Code (NEC). For context, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Residential Solar Codes & Fire Requirements](residential-codes.md); compare [IRC 2018 & Solar](code-irc.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2021 IRC model text. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

### Scope: What R324 Covers for Dwellings

Section R324 applies to **solar energy systems** — solar thermal and photovoltaic (PV) — installed on structures built under the IRC (one- and two-family dwellings and townhouses). For rooftop solar it governs listing, structural support, wind resistance, fire classification, and roof access.

The 2021 R324 is organized (in summary) as follows:

| Subsection (2021 IRC) | Subject |
|---|---|
| R324.1 | General / scope |
| R324.2 | Solar thermal systems |
| R324.3 | Photovoltaic systems (general, listing) |
| R324.4 | Rooftop-mounted PV — structural, wind, fire classification |
| R324.5 | Building-integrated photovoltaic (BIPV) systems |
| **R324.6** | **Roof access and pathways** |
| R324.6.1 | Pathways |
| R324.6.2 | Setback at ridge |
| R324.6.2.1 | Alternative setback (sprinklered dwellings) |

> The **R324.6** location for fire-access rules is the same as 2018 (it was **R324.7** back in 2015). The **2024 edition renumbers the whole section to R329** — do not carry the R324 number forward blindly. Verify against the edition your AHJ enforces.

### Fire-Service Roof Access & Setback Pathways

The 2021 roof-access rules (**R324.6**) preserve firefighter access for walking, ventilating, and working around energized PV. They remain coordinated with the roof-access provisions of the **International Fire Code** — see [IFC 2018 & Solar](code-ifc.md).

#### Access pathways (R324.6.1)

Not fewer than **two 36-inch-wide pathways** on separate roof planes, from the lowest roof edge to the ridge, are required, with **not fewer than one pathway on the street or driveway side** of the roof. For each roof plane bearing an array, a **36-inch (914 mm) pathway** from the lowest edge to the ridge must be provided on the same plane, an adjacent plane, or straddling both. The 2021 text also clarifies that pathways should be located in areas with **minimal obstructions** (vent pipes, conduit, mechanical equipment) and adds an explicit **36-inch pathway to any emergency escape and rescue opening**.

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
     LOWEST ROOF EDGE (eave)   <- + 36" pathway to any egress window
```

#### Setback at the ridge — the key exception (R324.6.2)

A clear setback is required on **both sides of a horizontal ridge**, scaled to coverage (unchanged from 2018):

| PV array coverage (plan-view of total roof area) | Ridge setback each side |
|---|---|
| **Not more than 33%** | **18 in. (457 mm)** |
| More than 33% | 36 in. (914 mm) |

> **The 18-inch exception.** An array covering **no more than about one-third (≤33%) of the roof plan area** qualifies for the reduced **18-inch** ridge setback; larger arrays require the full **36-inch** setback. Coverage is measured in **plan view (projected onto a horizontal plane), not along the slope.**

#### Sprinkler alternative (R324.6.2.1)

Where an **automatic sprinkler system** complying with **NFPA 13D or IRC Section P2904** is installed, an array covering **≤66%** of the roof plan area may use the **18-inch** setback; above 66%, the **36-inch** setback applies. Panels and modules must **not** be placed on the portion of a roof below an **emergency escape and rescue opening**.

### Structural Attachment

Rooftop PV adds dead load and new load paths the existing framing must carry.

- **Gravity and dead load.** The added array dead load must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop PV panels/modules and supports must resist **component-and-cladding wind loads** from the IRC provisions, coordinated with **ASCE 7**. The 2021 IRC generation is coordinated with the **ASCE 7-16** load standard, which introduced explicit rooftop-solar wind provisions. Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still meet its original snow-load requirement (ASCE 7) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not just the sheathing, with adequate embedment; spacing follows the calculated uplift and fastener withdrawal capacity. Penetrations must be flashed to maintain weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation**. Marginal or non-standard framing frequently triggers a required structural evaluation.

### Electrical: Pointer to the NEC

The 2021 IRC does **not** restate PV electrical rules; R324 directs the installation to the **National Electrical Code (NFPA 70)**:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

**Rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2021 IRC is commonly paired with the **2020 NEC**, which retained module-level rapid shutdown and refined the initiation and BIPV-listing provisions (including an allowance in 690.12 for listed BIPV where cutting the system has been determined not to expose firefighters to shock hazard). Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** with the 2021 IRC.

### What Changed vs. the Previous Edition

Relative to [IRC 2018 & Solar](code-irc.md):

- **Pathway rules refined (R324.6.1).** The 2021 edition adds an explicit requirement for **at least one pathway on the street or driveway side**, clarifies that pathways should avoid **obstructions** (vents, conduit, mechanical equipment), and calls out a **36-inch pathway to emergency escape and rescue openings**.
- **Ridge-setback thresholds unchanged.** The **≤33% / 18-inch** exception, the **>33% / 36-inch** base rule, and the **≤66% sprinkler alternative (R324.6.2.1)** all carry over from 2018.
- **Structural/wind coordination advances** with the **ASCE 7-16** generation of load provisions and its rooftop-solar wind rules.
- **NEC pairing** typically advances to the **2020 NEC** (rapid-shutdown and BIPV refinements), though NEC adoption is independent of the IRC.

The next edition ([IRC 2024 & Solar](code-irc.md)) **renumbers the section from R324 to R329** and adjusts firefighter-access-pathway provisions — a larger structural change than the 2018-to-2021 refinements.

---

> **Disclaimer.** This article is an educational summary of the 2021 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. Section numbers, dimensions, and thresholds are drawn from the model edition and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

### Sources & Further Reading

- [2021 IRC, Section R324.6.2 — Setback at ridge (ICC Digital Codes)](https://codes.iccsafe.org/s/IRC2021P3/part-iii-building-planning-and-construction/IRC2021P3-Pt03-Ch03-SecR324.6.2)
- [2021 IRC, Section R324.6 — Roof Access and Pathways (UpCodes)](https://up.codes/s/roof-access-and-pathways)
- [Providing Access to Roofs with a PV System (NFPA)](https://www.nfpa.org/news-blogs-and-articles/blogs/2020/07/24/accessways-for-roof-mounted-photovoltaic-installations)
- [2015 IRC / 2021 IRC solar access comparison (Houston Permitting Center)](https://www.houstonpermittingcenter.org/media/7121/download)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2015 & Solar](code-irc.md) · [IRC 2018 & Solar](code-irc.md) · [IRC 2024 & Solar](code-irc.md) · [IFC 2018 & Solar](code-ifc.md)

## IRC 2024

The **2024 International Residential Code (IRC)** governs construction of **detached one- and two-family dwellings and townhouses** up to three stories. Its headline change for rooftop solar is **structural, not just editorial**: the residential PV provisions long known as **Section R324** were **reorganized and renumbered to Section R329, "Photovoltaic Systems,"** with the solar-thermal material moved to its own location. The familiar fire-service roof-access framework — pathways, ridge setbacks, and the sprinkler alternative — carries forward largely intact, with **refinements to the firefighter-access pathway provisions**.

This article covers the 2024 IRC's residential PV requirements: scope, fire-service roof access and ridge setbacks (with the key ≤33% coverage exception), structural attachment, and the pointer to the National Electrical Code (NEC). For context, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Residential Solar Codes & Fire Requirements](residential-codes.md); compare [IRC 2021 & Solar](code-irc.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2024 IRC model text. The 2024 IRC is relatively new and, as of this writing, is being adopted on a rolling basis; many jurisdictions still enforce 2021, 2018, or 2015. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

### Scope: What R329 Covers for Dwellings

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

### Fire-Service Roof Access & Setback Pathways

The 2024 roof-access rules (**R329.6**) preserve firefighter access for walking, ventilating, and working around energized PV, and remain coordinated with the roof-access provisions of the **International Fire Code** — see [IFC 2018 & Solar](code-ifc.md).

#### Access pathways (R329.6.1)

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

#### Setback at the ridge — the key exception (R329.6.2)

A clear setback is required on **both sides of a horizontal ridge**, scaled to coverage (thresholds continuous with 2018/2021):

| PV array coverage (plan-view of total roof area) | Ridge setback each side |
|---|---|
| **Not more than 33%** | **18 in. (457 mm)** |
| More than 33% | 36 in. (914 mm) |

> **The 18-inch exception.** An array covering **no more than about one-third (≤33%) of the roof plan area** qualifies for the reduced **18-inch** ridge setback; larger arrays require the full **36-inch** setback. Coverage is measured in **plan view (projected onto a horizontal plane), not along the slope.**

#### Sprinkler alternative (R329.6.2.1)

Where an **automatic sprinkler system** complying with **NFPA 13D or IRC Section P2904** is installed, an array covering **≤66%** of the roof plan area may use the **18-inch** setback; above 66%, the **36-inch** setback applies. Panels and modules must **not** be placed on the portion of a roof below an **emergency escape and rescue opening**.

#### Ground-mounted PV (R329.7)

The 2024 edition addresses **ground-mounted photovoltaic systems** in their own subsection, requiring them to be designed and installed to the applicable structural provisions (referencing IRC Section R301). This is a useful clarification for residential detached arrays that are not on the dwelling roof.

### Structural Attachment

Rooftop PV adds dead load and new load paths the existing framing must carry.

- **Gravity and dead load.** The added array dead load must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop PV panels/modules and supports must resist **component-and-cladding wind loads** from the IRC provisions, coordinated with **ASCE 7**. The 2024 IRC generation is coordinated with the **ASCE 7-22** load standard, which further updated rooftop-solar wind and (regionally) tornado provisions. Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still meet its original snow-load requirement (ASCE 7) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not just the sheathing, with adequate embedment; spacing follows the calculated uplift and fastener withdrawal capacity. Penetrations must be flashed to maintain weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation**. Marginal or non-standard framing frequently triggers a required structural evaluation.

### Electrical: Pointer to the NEC

The 2024 IRC does **not** restate PV electrical rules; the photovoltaic section directs the installation to the **National Electrical Code (NFPA 70)**:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

**Rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2024 IRC is commonly paired with the **2023 NEC**, which retained module-level rapid shutdown and continued to refine 690.12 (initiation devices, labeling, and BIPV allowances) as well as energy-storage-system interconnection rules. Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** with the 2024 IRC.

### What Changed vs. the Previous Edition

Relative to [IRC 2021 & Solar](code-irc.md):

- **Section renumbered R324 → R329.** The residential PV provisions were **reorganized into Section R329, "Photovoltaic Systems,"** and solar-thermal content was separated. This is the most visible change and the biggest source of citation confusion — legacy documents citing "R324" generally map to **R329** under the 2024 IRC.
- **Firefighter-access pathway provisions refined**, including clarified/​added conditions for pathway exemptions. Verify the precise triggers with the published code and your AHJ.
- **Ground-mounted PV** given a clearer dedicated subsection (R329.7).
- **Ridge-setback thresholds unchanged.** The **≤33% / 18-inch** exception, the **>33% / 36-inch** base rule, and the **≤66% sprinkler alternative** carry forward from 2018/2021.
- **Structural/wind coordination advances** to the **ASCE 7-22** generation of load provisions; NEC pairing typically advances to the **2023 NEC** (though NEC adoption is independent of the IRC).

Because the 2024 IRC is newly published and still being adopted, expect a long transition during which most residential PV permits are still reviewed under the [2021](code-irc.md), [2018](code-irc.md), or [2015](code-irc.md) editions. Always confirm the edition in force before designing to R329 numbering.

---

> **Disclaimer.** This article is an educational summary of the 2024 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. The 2024 edition is newly published; section numbers (including the R324-to-R329 renumbering), dimensions, and thresholds should be verified against the published code and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

### Sources & Further Reading

- [2024 IRC — Index (ICC Digital Codes)](https://codes.iccsafe.org/content/IRC2024V2.0/index)
- [2024 Significant Code Changes for the IRC (NAHB)](https://www.nahb.org/-/media/NAHB/advocacy/docs/top-priorities/codes/code-adoption/signficant-code-changes-2024-irc.pdf)
- [Section R324 / R329 roof-access example, Roof-Mounted PV (mybuildingpermit.com)](https://mybuildingpermit.com/sites/default/files/TS_24_Residential%20Solar%20Systems_FINAL_4_14_25.pdf)
- [Section R324—Solar energy systems, state adoption reference (Washington WAC 51-51-03240)](https://app.leg.wa.gov/WAC/default.aspx?cite=51-51-03240&pdf=true)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2015 & Solar](code-irc.md) · [IRC 2018 & Solar](code-irc.md) · [IRC 2021 & Solar](code-irc.md) · [IFC 2018 & Solar](code-ifc.md)

---

*Reference and educational use only — not code-compliance advice. Model codes are adopted and amended locally; confirm the exact edition and any local amendments with your AHJ and a licensed professional.*
