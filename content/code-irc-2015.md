# IRC 2015 & Solar

The **2015 International Residential Code (IRC)** is the model code that governs construction of **detached one- and two-family dwellings and townhouses** not more than three stories above grade. The 2015 edition is historically important for rooftop solar: it introduced **Section R324, "Solar Energy Systems"** — the first time the IRC carried a dedicated, comprehensive set of provisions for roof-mounted photovoltaic (PV) systems on dwellings. Earlier editions (2009, 2012) had no equivalent stand-alone solar section, so R324 is the baseline against which every later edition's changes are measured.

This article covers what the 2015 IRC requires for residential PV: scope, fire-service roof access and ridge setbacks, structural attachment, and the pointer to the National Electrical Code (NEC) for the electrical installation. For the broader model-code framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and the residential-specific summary in [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **AHJ is authoritative.** Every section number and dimension below is from the 2015 IRC model text. Your jurisdiction (the Authority Having Jurisdiction, or AHJ) may enforce a different edition, adopt the IRC with local amendments, or supplement it with the International Fire Code. Confirm the edition in force and have a licensed professional verify the design.

## Scope: What R324 Covers for Dwellings

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

## Fire-Service Roof Access & Setback Pathways

The 2015 IRC's roof-access rules (**R324.7**) exist so firefighters can walk the roof, ventilate it, and work around energized PV during a fire. These residential provisions closely mirror — and were coordinated with — the roof-access provisions of the **International Fire Code**. For the fire-code side of the same rules, see [IFC 2018 & Solar](code-ifc-2018.md).

### Access pathways

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

### Setback at the ridge — and the key exception

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

## Structural Attachment

Rooftop PV adds dead load and new uplift/​downward-load paths that the existing framing must carry.

- **Gravity and dead load.** The array's added dead load (modules plus racking — commonly on the order of a few pounds per square foot) must be supported by the existing roof structure per IRC Chapter 3.
- **Wind load.** Rooftop-mounted PV panels/modules and their supports must resist the **component-and-cladding wind loads** derived from the IRC wind provisions, which are coordinated with **ASCE 7** (Minimum Design Loads and Associated Criteria for Buildings and Other Structures). Uplift is highest at roof **edges and corners**.
- **Snow load.** The roof must still satisfy its original snow-load requirement (also from ASCE 7 as referenced by the IRC) with the array in place.
- **Attachment.** Fasteners must transfer loads into the **structural framing (rafters/trusses)**, not merely the roof sheathing, with adequate embedment; spacing is set by the calculated uplift and the fastener's withdrawal capacity. Penetrations must be flashed to maintain the roof's weather resistance.
- **Fire classification.** The completed module-plus-racking-plus-roof assembly must maintain the roof's required **fire classification**.

> Most AHJs accept manufacturer-listed racking with an engineering letter, or a project-specific **PE-stamped structural calculation** for spans, attachment spacing, and uplift. Marginal or non-standard framing frequently triggers a required structural evaluation.

## Electrical: Pointer to the NEC

The IRC does **not** contain the detailed electrical rules for PV. Instead, R324's photovoltaic provisions direct the installation to the **National Electrical Code (NFPA 70)** — principally:

- **NEC Article 690** — Solar Photovoltaic (PV) Systems
- **NEC Article 705** — Interconnected Electric Power Production Sources

Note that **rapid shutdown** is an NEC requirement (NEC 690.12), not an IRC one. The 2015 IRC pairs with the **2014 NEC** in most adopting jurisdictions, whose 690.12 required a rapid-shutdown boundary around the array; the more stringent module-level ("conductors inside the array") rapid-shutdown requirement arrived with the **2017 NEC**. Because NEC editions are adopted on their own cycle, **verify which NEC edition your AHJ enforces** alongside the 2015 IRC.

## What Changed vs. the Previous Edition

Because there was **no dedicated solar section before 2015**, the 2015 IRC's change is foundational rather than incremental:

- **New Section R324, "Solar Energy Systems"** was added — the first stand-alone IRC solar section. The 2012 IRC had no comparable provision, so rooftop PV was previously handled through general structural, roofing, and electrical requirements plus local practice.
- It **codified fire-service roof access, pathways, and ridge setbacks** for dwellings (in R324.7), including the **≤33% coverage / 18-inch ridge-setback** exception.
- It **explicitly tied rooftop PV to wind and structural provisions** (component-and-cladding loads coordinated with ASCE 7) and to the roof's **fire classification**.
- It **directed the electrical installation to the NEC** rather than restating electrical rules.

The next edition (see [IRC 2018 & Solar](code-irc-2018.md)) reorganized these same rules — moving access and setbacks to **R324.6**, tightening the ridge-setback coverage threshold, and adding a sprinkler-based alternative. Later editions ([IRC 2021 & Solar](code-irc-2021.md) and [IRC 2024 & Solar](code-irc-2024.md)) refined the pathways further and, in 2024, renumbered the section entirely.

---

> **Disclaimer.** This article is an educational summary of the 2015 IRC model text and is **not** a substitute for the adopted code, a plan review, or professional engineering. Section numbers, dimensions, and thresholds are drawn from the model edition and may differ under state or local amendments. The **AHJ is authoritative**; always confirm the edition in force (IRC and NEC) and have a licensed design professional verify structural, fire, and electrical compliance for your specific project.

## Sources & Further Reading

- [2015 IRC, Chapter 3 — Building Planning (Section R324, Solar Energy Systems)](https://codes.iccsafe.org/content/IRC2015/chapter-3-building-planning)
- [2015 IRC, Section R324.7 — Access and pathways (ICC Digital Codes)](https://codes.iccsafe.org/s/GCIRC2015P1/chapter-3-building-planning/GCIRC2015P1-Pt03-Ch03-SecR324.7)
- [Installation of Photovoltaic Systems — Code Compliance Brief (PNNL Building America Solution Center)](https://basc.pnnl.gov/code-compliance/installation-photovoltaic-systems-code-compliance-brief)
- [2015 IRC — A Compilation of Wind Resistant Provisions (FEMA)](https://www.fema.gov/sites/default/files/2020-08/2015_IRC_compilaton_of_wind_resistanc_provisions.pdf)
- Related pages on this site: [Building Codes & Standards Explained](codes-standards-overview.md) · [Residential Solar Codes & Fire Requirements](residential-codes.md) · [IRC 2018 & Solar](code-irc-2018.md) · [IRC 2021 & Solar](code-irc-2021.md) · [IRC 2024 & Solar](code-irc-2024.md) · [IFC 2018 & Solar](code-ifc-2018.md)
