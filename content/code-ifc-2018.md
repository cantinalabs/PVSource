# IFC 2018 & Solar

The **2018 International Fire Code (IFC)** is the edition where the solar photovoltaic (PV) access rules **moved and were rewritten**. In the 2018 IFC, rooftop PV provisions relocated out of the old Chapter 6 "Building Services and Systems" and into a brand-new **Chapter 12, Energy Systems**, under **Section 1204, Solar Photovoltaic Power Systems**. This edition also introduced the concept that later editions still use: **ridge setbacks that scale with how much of the roof the array covers**, plus a **reduced-setback exception for sprinklered dwellings**.

This page explains the 2018 IFC solar provisions. It is a companion to the [Building Codes & Standards Explained](codes-standards-overview.md) overview and to the sibling edition articles [IFC 2015 & Solar](code-ifc-2015.md), [IFC 2021 & Solar](code-ifc-2021.md), and [IFC 2024 & Solar](code-ifc-2024.md). For project-level context see [Residential Solar Codes & Fire Requirements](residential-codes.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md).

> **Read this first:** Model codes are not law until a jurisdiction adopts them, usually with amendments. Section numbers, dimensions, and thresholds cited here are the *model* 2018 IFC text. Your **Authority Having Jurisdiction (AHJ)** — building official or fire marshal — is authoritative. Confirm the adopted edition and any local amendments before relying on anything below.

## Scope and Applicability

Section 1204 applies to the **installation, modification, or alteration of solar PV power systems** on and around buildings. As in 2015, the code recognizes solar as an evolving technology and preserves the **alternative materials and methods** path for designs that achieve equivalent firefighter access without matching the prescriptive text.

The access and pathway requirements do **not** apply to:

- **Detached, non-habitable Group U structures** — parking shade structures, carports, solar trellises, and similar.
- Roofs where the **fire code official has determined that rooftop operations will not be employed**.

As before, the requirements branch between **Group R-3 buildings** (houses and residential-tactics occupancies) and **buildings other than Group R-3** (commercial and larger), with buildings built under the **International Residential Code (IRC)** picking up the IRC's parallel PV provisions (Section R324).

## Roof Access and Fire-Service Pathways — Residential (Group R-3)

The 2018 IFC keeps the residential **eave-to-ridge pathway** philosophy of 2015 but reorganizes the ridge rule around **array coverage**.

**Pathways.** As in 2015, a **3-foot-wide clear access pathway** from eave to ridge is provided based on roof geometry (hip and single-ridge layouts), and arrays remain limited in size with **3-foot clear separations** between array sections. These pathways sit over structure capable of supporting firefighters.

**Ridge setbacks — the new sliding scale (Section 1204.2.1.2).** This is the headline 2018 change. The ridge setback now depends on the **plan-view percentage of the total roof area** the array occupies:

| Array coverage of total roof (plan view) | Required clear setback at a horizontal ridge |
|---|---|
| **33% or less** | **Not less than 18 inches** on both sides of the ridge |
| **More than 33%** | **Not less than 36 inches** on both sides of the ridge |

> **Key exception (sprinklered dwellings):** Where an **automatic sprinkler system** is installed in the dwelling (e.g., to **NFPA 13D** or IRC **Section P2904**), the thresholds relax: an **18-inch** setback is allowed for arrays covering **66% or less** of the roof, and **36 inches** is required only where coverage **exceeds 66%**. This lets a sprinklered home place more panels near the ridge than a non-sprinklered one.

```
   RIDGE SETBACK LOGIC (2018 IFC 1204.2.1.2) — section through ridge

   Non-sprinklered:   <=33% coverage -> 18 in    | >33% coverage -> 36 in
   Sprinklered (13D/P2904): <=66% coverage -> 18 in | >66% coverage -> 36 in

   RIDGE  ================================================
          |  setback (18 in or 36 in, per coverage)      |
          +----------------------------------------------+
          |                   PV ARRAY                    |
```

> **Key residential rule (2018):** The **fixed 18-inch ridge setback of 2015 becomes a two-step 18-in / 36-in setback keyed to 33% array coverage**, and a **new automatic-sprinkler exception** raises that break point to **66%**. Pathways remain the familiar **3-foot** eave-to-ridge design.

## Roof Access and Fire-Service Pathways — Commercial (Other Than Group R-3)

For commercial and other non-R-3 buildings, the 2018 IFC carries forward the 2015 structure — perimeter, pathways, and smoke ventilation — now under Chapter 12.

**Perimeter access.** A **minimum 6-foot-wide clear perimeter** around the roof edges.

> **Exception:** Where **either axis** of the building is **250 feet or less**, the clear perimeter may be reduced to a **minimum 4 feet wide**.

**Interior pathways.** Pathways must be provided over supporting structure, in a **straight line not less than 4 feet clear** to roof standpipes or ventilation hatches, and **not less than 4 feet clear** around roof access hatches with at least one 4-ft pathway reaching a parapet or roof edge.

```
   COMMERCIAL LOW-SLOPE ROOF (2018 IFC 1204.3) — plan view

   +==================================================+
   |  6 ft clear perimeter (4 ft if axis <= 250 ft)   |
   |   +------------------------------------------+   |
   |   | ARRAY | 4 ft |  ARRAY  | 4 ft |  ARRAY    |   |
   |   |       | path |         | path |          |   |
   |   +------------------------------------------+   |
   +==================================================+
```

## Smoke Ventilation — Commercial

The 2018 IFC keeps the 2015 **smoke-ventilation** menu for non-R-3 roofs. Spacing between array sections must use one of:

| Option | 2018 IFC smoke-ventilation configuration |
|---|---|
| 1 | A pathway **8 feet or greater** in width |
| 2 | A **4-foot-or-greater** pathway bordering skylights or **gravity-operated** dropout smoke/heat vents on **at least one side** |
| 3 | A **4-foot-or-greater** pathway bordering **all sides** of **non-gravity-operated** dropout vents |
| 4 | A **4-foot-or-greater** pathway bordering **4-ft by 8-ft "venting cutouts"** every **20 feet** on **alternating sides** of the pathway |

## Marking, Labeling, and Rapid Shutdown

The 2018 IFC formalizes **rapid-shutdown labeling** for buildings that carry PV rapid-shutdown systems, requiring permanent labels that identify the type of shutdown and its switch location, and cross-referencing the electrical requirements of the **National Electrical Code**. In practice a 2018-era system is usually paired with the **2017 NEC** or **2020 NEC**:

- **NEC 690.12** in the **2017 NEC** introduced the **array-boundary** (module-level shutdown) concept that the 2020 NEC carried forward.
- The IFC label wording, character heights (header vs body text), and color conventions align with the NEC and ANSI Z535 practice.

> Because the exact label graphics depend on **which NEC edition** was adopted with your 2018 IFC, treat specific label wording as **"verify against the adopted NEC and edition."** See [Residential Solar Codes & Fire Requirements](residential-codes.md) for the rapid-shutdown timeline.

## Ground-Mounted Arrays

As in 2015, **setback requirements do not apply** to ground-mounted, free-standing PV arrays under the 2018 IFC, but a **clear, brush-free area of 10 feet** is required around them.

## What Changed vs the Previous Edition

Compared with the **2015 IFC** ([IFC 2015 & Solar](code-ifc-2015.md)), the 2018 IFC made three consequential changes:

1. **Renumbering / relocation.** Solar PV moved from **Chapter 6, Section 605.11** to the new **Chapter 12 (Energy Systems), Section 1204**. This is the single biggest source of confusion when comparing plan sets across editions — the *same* requirement now lives under a different number.
2. **Percentage-based ridge setback.** The **fixed 18-inch** ridge setback of 2015 became a **two-tier 18-in / 36-in setback** tied to whether the array covers **33% or less** of the roof (Section 1204.2.1.2).
3. **Automatic-sprinkler exception.** A **new exception for sprinklered dwellings** raised the setback break point to **66%**, rewarding homes with fire sprinklers with more usable near-ridge roof area.

The commercial perimeter, pathway, and smoke-ventilation provisions carried over from 2015 largely intact — the same 6-ft/4-ft perimeter, 4-ft interior pathways, and the four-option smoke-ventilation menu — just relocated into Chapter 12.

## Sources & Further Reading

- [ICC Digital Codes — 2018 IFC Chapter 12, Energy Systems](https://codes.iccsafe.org/content/IFC2018/CHAPTER-12-ENERGY-SYSTEMS)
- [ICC Digital Codes — 2018 IFC Section 1204, Solar Photovoltaic Power Systems](https://codes.iccsafe.org/s/IFC2018/chapter-12-energy-systems/IFC2018-Pt03-Ch12-Sec1204)
- [ICC Digital Codes — 2018 IFC 1204.2.1.2, Setbacks at ridges](https://codes.iccsafe.org/s/IFC2018/chapter-12-energy-systems/IFC2018-Pt03-Ch12-Sec1204.2.1.2)
- [CALSSA — 2018 Modified Roof Setbacks for Residential Solar PV (PDF)](https://www.solarelectricsupply.com/media/sparsh/product_attachment/CALSSA_Modified_Setbacks_and_Pathways_06-20-2018.pdf)
- [International Code Council — I-Codes](https://www.iccsafe.org/products-and-services/i-codes/)

---

*Educational and reference material only. This page is not code-compliance, engineering, or legal advice. The 2018 IFC is a model code; editions, amendments, and section numbers vary by jurisdiction and change between cycles. Always confirm the exact edition and local amendments in force with your AHJ, and retain a licensed professional for project-specific compliance.*
