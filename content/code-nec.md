# The National Electrical Code (NEC) & Solar

The **National Electrical Code (NFPA 70 / NEC)** governs the electrical design of PV systems — Articles 690 and 705, rapid shutdown, conductor and overcurrent sizing, and interconnection. Its solar rules evolved substantially across editions.

## NEC 2017

The 2017 edition of the **National Electrical Code (NFPA 70)** is one of the most consequential releases for the solar photovoltaic (PV) industry. It reorganized **Article 690** into a cleaner structure, tightened **rapid shutdown** into a de-facto module-level requirement, and carried forward the load-side interconnection rules of **Article 705**. Even years after its publication, many jurisdictions across the United States still enforce the 2017 NEC, making it essential reference material for designers, installers, and inspectors.

For orientation on how model codes are written, adopted, and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For the fire-service and rooftop-access rules that pair with the NEC, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The NEC is a model code with no legal force until a state or local government adopts it, often with amendments. As of this writing, many jurisdictions remain on the 2017 or 2020 NEC. Always confirm the adopted edition and any local amendments with your AHJ before design.

### Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV system circuits, equipment, disconnecting means, wiring methods, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs how a PV (or other) power source is connected in parallel with the utility or another source, including the busbar and overcurrent rules that determine where and how large an interconnection may be.

In the 2017 edition, Article 690 was substantially reorganized from the 2014 layout. Several requirements that had lived inside Article 690 were relocated to more general articles, and the grounding provisions were streamlined to lean on **Article 250** rather than duplicating it.

### Article 690 Highlights (2017)

| Section | Topic | 2017 Notes |
|---|---|---|
| 690.7 | Maximum voltage | Voltage calculation methods retained; temperature-corrected `Voc` governs system max voltage |
| 690.8 | Circuit sizing and current | `125% x 125% = 156%` conductor sizing for PV source/output circuits (see below) |
| 690.9 | Overcurrent protection | OCPD sized at not less than 125% of maximum circuit current |
| 690.11 | DC arc-fault protection | Required for PV DC circuits on or penetrating a building operating at 80 V DC or greater |
| 690.12 | Rapid shutdown | Module-level "controlled conductors within the array" concept (see below) |
| 690.13 | PV system disconnecting means | Disconnect requirements for the PV system as a whole |
| 690.15 | Disconnection of PV equipment | Disconnect provisions for isolating equipment such as inverters |
| 690.31 | Wiring methods | Includes cable, conductor, and conduit provisions for PV |

### Rapid Shutdown Under the 2017 NEC (690.12)

Rapid shutdown was first introduced in the **2014 NEC**, where it limited controlled conductors more than 1.5 m (5 ft) inside a building or more than 3 m (10 ft) from the array to no more than **30 V and 240 VA within 10 seconds** of initiation. That was fundamentally an "array-boundary" concept applied to the conductor runs leaving the array.

The **2017 NEC** rewrote 690.12 around an explicit **array boundary** and split the requirements into inside-boundary and outside-boundary rules:

```
             ARRAY BOUNDARY (2017 NEC 690.12)
   +--------------------------------------------------+
   |   Inside boundary: <= 80 V within 30 s           |
   |   (690.12(B)(2) - effective Jan 1, 2019)         |
   |                                                  |
   |        [PV] [PV] [PV] [PV] [PV] [PV]             |
   |                                                  |
   +--------------------------------------------------+
       |  boundary = 1 ft (305 mm) from the array
       v  in all directions
   Outside boundary: <= 30 V within 30 s  (690.12(B)(1))
```

- **Array boundary** is defined as **305 mm (1 ft)** from the array in all directions.
- **Outside the boundary** (690.12(B)(1)): controlled conductors limited to **30 V within 30 seconds** of rapid shutdown initiation.
- **Inside the boundary** (690.12(B)(2)): controlled conductors limited to **80 V within 30 seconds** of initiation.

The critical detail is that **690.12(B)(2), the inside-the-array requirement, became effective January 1, 2019.** Because meeting the 80 V-inside-boundary limit generally requires module-level power electronics (MLPE) such as microinverters or DC optimizers with rapid shutdown, the 2017 NEC is commonly described as the edition that ushered in **module-level rapid shutdown**.

> **Effective-date nuance:** A system permitted under the 2017 NEC *before* January 1, 2019 could comply using only the outside-boundary (30 V) rule. On or after that date, systems under the 2017 NEC must also satisfy the inside-boundary (80 V) requirement. Confirm how your AHJ applied this transition.

### Article 705 Interconnection and the Busbar 120% Rule

In the 2017 NEC, the load-side interconnection rules lived in **705.12(D)** ("Point of Connection — Load Side"). The most-cited provision is the **busbar 120% rule**, which limits how much backfed PV current a panelboard busbar can accept.

The general options in 705.12(D)(2) for busbar protection include:

1. **Sum rule:** The sum of the ampere ratings of all overcurrent devices supplying the busbar does not exceed the ampacity of the busbar.
2. **120% rule:** Where the PV backfed breaker is located at the **opposite end** of the busbar from the main breaker, the sum of the main OCPD rating plus 125% of the PV output-circuit current shall not exceed **120% of the busbar ampacity**.
3. **Sum of all breakers ≤ ampacity** (center-fed and other configurations), plus additional listed options.

> **Worked example (120% rule):** A 200 A busbar fed by a 200 A main allows `200 A x 120% = 240 A` total. Subtracting the 200 A main leaves `240 - 200 = 40 A` of backfed capacity, which corresponds to a **40 A** PV breaker at the opposite end of the bus.

When the 120% rule is used, a permanent warning label is required near the backfed breaker reading, in effect: *"WARNING: POWER SOURCE OUTPUT CONNECTION — DO NOT RELOCATE THIS OVERCURRENT DEVICE."*

### Conductor and Overcurrent Device Sizing (690.8, 690.9)

PV source and output circuits are sized using two stacked 125% factors:

- The **first 125%** accounts for PV modules producing above nameplate short-circuit current under favorable irradiance and cold conditions (an irradiance/enhancement factor applied to `Isc`).
- The **second 125%** is the continuous-duty factor applied to the resulting continuous current.

```
Circuit current basis = Isc (module short-circuit current)
Step 1: 1.25 x Isc      (PV irradiance/continuous factor)
Step 2: 1.25 x (result) (continuous-duty conductor factor)
Combined: 1.25 x 1.25 = 1.5625  ->  "156%" of Isc
```

Conductors must be sized to the larger of the two calculation methods in 690.8(B), *before* applying temperature and conduit-fill derating. Overcurrent devices under 690.9(B) are sized at not less than 125% of the maximum circuit current unless the assembly is listed for 100% continuous operation.

### DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** PV DC circuits operating at **80 V DC or greater** and installed on or penetrating a building must include a listed **PV arc-fault circuit interrupter** or equivalent protection. (DC arc-fault requirements first appeared in the 2011 NEC and were retained through 2017.)
- **690.13 / 690.15 (disconnects):** The 2017 NEC requires a means to disconnect the PV system and to isolate equipment such as inverters. Rooftop DC disconnects must be load-break rated where they may be opened under load.
- **Marking and labeling:** The 2017 NEC requires PV system directory and identification labeling, plus the **rapid shutdown labeling** at 690.56(C), including a placard for buildings with rapid shutdown and, where module-level shutdown is used, an appropriate marking indicating the type of rapid shutdown provided.

### What Changed vs. the 2014 NEC

| Area | 2014 NEC | 2017 NEC |
|---|---|---|
| Article 690 structure | Older layout; more self-contained | Reorganized; grounding leans on Article 250 |
| Rapid shutdown (690.12) | 30 V / 240 VA within 10 s; 5 ft inside / 10 ft from array | Array-boundary model; 30 V outside / 80 V inside within 30 s; inside rule effective Jan 1, 2019 (module-level) |
| Interconnection numbering | 705.12(D) load-side rules | Retained as 705.12(D) |
| DC arc-fault (690.11) | Required at >= 80 V DC | Retained at >= 80 V DC |
| Conductor sizing (690.8) | `125% x 125% = 156%` | Retained, with refined calculation structure |

The headline change is **rapid shutdown**: the shift from the 2014 array-run limits to the 2017 array-boundary model, with the inside-boundary 80 V requirement effective January 1, 2019, is what pushed the market toward module-level electronics.

For conductor, connector, and wiring-method fundamentals that these rules depend on, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare this edition with the [NEC 2020 & Solar](code-nec.md) and [NEC 2023 & Solar](code-nec.md) articles.

> **Disclaimer:** This article is an educational summary, not a substitute for the adopted code text. Section numbers, effective dates, and requirements can be modified by state and local amendments, and the AHJ is the final authority. Always work from the specific NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance decisions.

### Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [2017 NEC 690.12 Rapid Shutdown — Important Changes (PurePower)](https://www.purepower.com/blog/2017-nec-690.12-rapid-shutdown-important-changes)
- [NEC 2017: Module-Level Rapid Shutdown (Greentech Renewables)](https://www.greentechrenewables.com/article/nec-2017-module-level-rapid-shutdown)
- [Point of Connection Rules for PV Systems, NEC 705.12 (ExpertCE)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)
- [NEC 690.8 Solar Conductor Sizing Guide (GreenLancer)](https://www.greenlancer.com/post/nec-690-8-solar-conductor-sizing)
- [A Guide to NEC Article 690: Solar PV Systems (ExpertCE)](https://expertce.com/learn-articles/guide-to-nec-article-690-solar/)

## NEC 2020

The 2020 edition of the **National Electrical Code (NFPA 70)** refined the solar photovoltaic (PV) framework introduced in prior cycles rather than overhauling it. Its most important contributions for solar are the **reorganization of Article 705** interconnection rules (renumbering the busbar provisions from 705.12(D) to 705.12(B)), and the addition of the **PV Hazard Control System (PVHCS)** as a listed alternative compliance path for rapid shutdown under **690.12**. Many jurisdictions currently enforce the 2020 NEC, so it remains a working reference for designers and inspectors.

For background on how these model codes are adopted and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For rooftop-access and fire-service pairing rules, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The NEC has no legal force until adopted, frequently with amendments. States and localities are staggered across editions, and many remain on the 2017 or 2020 NEC even now. Confirm the adopted edition and local amendments before design.

### Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV circuits, equipment, disconnects, wiring methods, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs parallel connection to the utility or other sources, including the busbar and overcurrent rules that constrain interconnections.

The 2020 cycle carried forward the 2017 structure of Article 690 with clarifications, and it meaningfully reworked Article 705 to make the interconnection rules easier to apply.

### Article 690 Highlights (2020)

| Section | Topic | 2020 Notes |
|---|---|---|
| 690.7 | Maximum voltage | Temperature-corrected `Voc` governs system max voltage |
| 690.8 | Circuit sizing and current | `125% x 125% = 156%` conductor sizing retained |
| 690.9 | Overcurrent protection | OCPD not less than 125% of maximum circuit current |
| 690.11 | DC arc-fault protection | Required for PV DC circuits on/penetrating buildings at 80 V DC or greater |
| 690.12 | Rapid shutdown | Adds PV Hazard Control System (PVHCS) option referencing UL 3741 (see below) |
| 690.13 | PV system disconnecting means | Whole-system disconnect requirements |
| 690.15 | Disconnection of PV equipment | Isolating equipment such as inverters |
| 690.31 | Wiring methods | PV wiring, cable, and conduit provisions |

### Rapid Shutdown Under the 2020 NEC (690.12)

The 2020 NEC retained the **array-boundary model** established in 2017:

```
             ARRAY BOUNDARY (2020 NEC 690.12)
   +--------------------------------------------------+
   |   Inside boundary: <= 80 V within 30 s           |
   |   OR use a listed PV Hazard Control System        |
   |   (PVHCS) per 690.12(B)(2), ref. UL 3741          |
   |                                                  |
   |        [PV] [PV] [PV] [PV] [PV] [PV]             |
   +--------------------------------------------------+
       |  boundary = 1 ft (305 mm) from the array
       v
   Outside boundary: <= 30 V within 30 s
```

- **Outside the boundary:** controlled conductors limited to **30 V within 30 seconds** of initiation.
- **Inside the boundary (690.12(B)):** two compliance options are now offered:
  1. **Controlled limits** — limit controlled conductors inside the boundary to **80 V within 30 seconds** (the MLPE-style approach carried over from 2017), **or**
  2. **PV Hazard Control System (PVHCS)** — install a system listed and identified to provide hazard control for firefighters, evaluated to **UL 3741**.

The **PVHCS / UL 3741** path is the headline 2020 addition. Rather than reducing conductor voltage at the module, a PVHCS certifies the entire in-boundary assembly (modules, wiring, racking, and associated electronics) as an integrated system that limits shock hazard for firefighters operating on or near the array.

> **UL 3741 scope caution:** A PVHCS evaluated to UL 3741 addresses only the portion of the system **inside the array boundary**. Conductors and equipment **outside** the boundary must still comply with the 30 V outside-boundary rule of 690.12. UL 3741 was published in late 2020 and is referenced by both the 2020 and 2023 NEC.

### Article 705 Interconnection and the Busbar 120% Rule

The 2020 NEC **renumbered the load-side interconnection rules from 705.12(D) to 705.12(B)**, and reworded the busbar provisions in **705.12(B)(3)** to clarify the notoriously confusing power-source connection rules.

The two most-used busbar provisions became:

- **705.12(B)(3)(1) — Sum rule:** The sum of 125% of the power-source output-circuit current and the rating of the OCPD protecting the busbar shall not exceed the **ampacity of the busbar**.
- **705.12(B)(3)(2) — 120% rule:** Where two sources (the primary/utility source and the PV source) are at **opposite ends** of a busbar that contains loads, the sum of 125% of the power-source output-circuit current and the rating of the busbar's protective OCPD shall not exceed **120% of the busbar ampacity**.

```
      +----------------------------------------------+
      | [Main OCPD]  ....loads....  [PV backfed OCPD] |
      |   opposite ends of the busbar (120% rule)     |
      +----------------------------------------------+
```

> **Worked example (120% rule):** A 200 A busbar with a 200 A main permits `200 A x 120% = 240 A`. The main consumes 200 A, leaving `240 - 200 = 40 A` for the opposite-end PV breaker — a **40 A** backfed breaker.

When the 120% rule is used, a permanent warning label is required near the backfed OCPD, in effect: *"WARNING: POWER SOURCE OUTPUT CONNECTION — DO NOT RELOCATE THIS OVERCURRENT DEVICE."*

### Conductor and Overcurrent Device Sizing (690.8, 690.9)

Conductor sizing continues to use the two stacked 125% factors:

```
Circuit current basis = Isc (module short-circuit current)
Step 1: 1.25 x Isc      (PV irradiance/continuous factor)
Step 2: 1.25 x (result) (continuous-duty conductor factor)
Combined: 1.25 x 1.25 = 1.5625  ->  "156%" of Isc
```

Conductors are sized to the larger of the calculations in 690.8(B) before temperature and conduit-fill derating. Overcurrent devices (690.9(B)) are not less than 125% of the maximum circuit current unless listed for 100% continuous operation.

### DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** Retained — required for PV DC circuits at **80 V DC or greater** on or penetrating a building, using a listed PV arc-fault circuit interrupter or equivalent.
- **690.13 / 690.15 (disconnects):** PV system disconnect and equipment-isolation requirements retained; rooftop DC disconnects must be load-break rated where opened under load.
- **Marking and labeling:** The 2020 NEC updated several PV labels for clarity, including the rapid-shutdown placards. The "buildings with rapid shutdown" label and the type-of-shutdown marking remain required so that first responders can identify the shutdown method at the service point.

### What Changed vs. the 2017 NEC

| Area | 2017 NEC | 2020 NEC |
|---|---|---|
| Rapid shutdown (690.12) | Array boundary; 80 V inside / 30 V outside; inside rule effective Jan 1, 2019 | Same voltage limits, **plus** PVHCS option referencing UL 3741 |
| Interconnection numbering | Load-side rules in **705.12(D)** | Renumbered to **705.12(B)**; busbar rules reworded for clarity in 705.12(B)(3) |
| Busbar 120% rule | 705.12(D)(2) | 705.12(B)(3)(2), clarified |
| DC arc-fault (690.11) | Required at >= 80 V DC | Retained |
| Conductor sizing (690.8) | `125% x 125% = 156%` | Retained |
| Labeling | 690.56 rapid-shutdown placards | Label wording/clarity updates |

The two changes that matter most in practice are the **705.12(D) → 705.12(B) renumbering** (which trips up anyone moving between editions) and the **PVHCS / UL 3741** compliance path, which opened an alternative to module-level electronics for rooftop rapid shutdown.

For the conductor and connector fundamentals underlying these rules, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare with the [NEC 2017 & Solar](code-nec.md) and [NEC 2023 & Solar](code-nec.md) articles.

> **Disclaimer:** This article is an educational summary, not the code text. Section numbers, effective dates, and requirements may be altered by state and local amendments, and the AHJ is the final authority. Work from the NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance.

### Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [NEC 2020 Rapid Shutdown Requirements (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/nec-2020-rapid-shutdown-requirements/)
- [NEC Rapid Shutdown Requirements and UL 3741 (IAEI Magazine)](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/)
- [Code Corner: 2020 NEC 705.12(B)(3)(1) and (2) (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/code-corner-2020-nec-705-12b31-and-2/)
- [The 2020 National Electrical Code and PV Systems (IAEI Magazine)](https://iaeimagazine.org/columns/photovoltaic/the-2020-national-electrical-code-and-pv-systems/)
- [Point of Connection Rules for PV Systems, NEC 705.12 (ExpertCE)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)

## NEC 2023

The 2023 edition of the **National Electrical Code (NFPA 70)** delivered the most extensive restructuring of the interconnection rules in years. **Article 705** was reorganized so that disconnecting means and overcurrent protection moved to dedicated sections (705.20 and 705.30), supply-side connections were rewritten under **705.11**, and load-side/busbar rules consolidated under **705.12**. **Article 690** rapid-shutdown provisions were refined, including relocated marking rules and a new exception for detached, non-enclosed structures. Adoption is still rolling out state by state, so the 2023 NEC coexists with the widely enforced 2017 and 2020 editions.

For how these model codes are adopted and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For rooftop-access and fire-service requirements, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The 2023 NEC has legal force only where adopted, often with amendments, and adoption lags publication. Many jurisdictions remain on the 2017 or 2020 NEC. Always confirm the adopted edition and local amendments before design.

### Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV circuits, equipment, disconnects, wiring, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs parallel connection to the utility and other sources. The 2023 cycle reorganized Article 705 significantly, so section numbers frequently differ from the 2020 edition even where the underlying requirement is similar.

### Article 690 Highlights (2023)

| Section | Topic | 2023 Notes |
|---|---|---|
| 690.7 | Maximum voltage | Temperature-corrected `Voc` governs system max voltage |
| 690.8 | Circuit sizing and current | `125% x 125% = 156%` conductor sizing retained |
| 690.9 | Overcurrent protection | OCPD not less than 125% of maximum circuit current |
| 690.11 | DC arc-fault protection | Retained for PV DC circuits on/penetrating buildings at 80 V DC or greater |
| 690.12 | Rapid shutdown | Refined; new exceptions and relocated marking to 690.12(D) (see below) |
| 690.13 | PV system disconnecting means | Whole-system disconnect requirements |
| 690.15 | Disconnection of PV equipment | Isolating equipment such as inverters |

### Rapid Shutdown Under the 2023 NEC (690.12)

The 2023 NEC retained the **array-boundary model** and its two inside-boundary compliance options (80 V controlled limit **or** a listed **PV Hazard Control System (PVHCS)** evaluated to **UL 3741**), while refining exceptions and marking:

```
             ARRAY BOUNDARY (2023 NEC 690.12)
   +--------------------------------------------------+
   |  Inside boundary: <= 80 V within 30 s            |
   |  OR listed PVHCS (ref. UL 3741)                  |
   +--------------------------------------------------+
       |  outside boundary: <= 30 V within 30 s
       v  boundary = 1 ft (305 mm) from the array
   NEW Exception: detached, non-enclosed structures
   (carports, canopies, trellises) may be exempt
```

Key 2023 refinements:

- **New exception for detached, non-enclosed structures.** PV installed on non-enclosed detached structures such as carports, parking canopies, or solar trellises is excepted from the rapid-shutdown requirement, reflecting that these are not buildings firefighters would enter.
- **Marking relocated to 690.12(D).** The rapid-shutdown marking requirements were moved to the more logical 690.12(D).
- **Label appearance eased.** The "buildings with rapid shutdown" label no longer must be **reflective** and no specific color is mandated — the printed text must simply **contrast** with the background.

> **Practical effect:** The 30 V-outside / 80 V-inside voltage limits and the PVHCS/UL 3741 alternative are unchanged from 2020. The substantive 2023 changes are the detached-structure exception and simplified labeling, not new voltage thresholds.

### Article 705 Interconnection and the Busbar Rule

The 2023 NEC **reorganized Article 705**. Rather than packing disconnects, overcurrent protection, and busbar rules under 705.12, the code split them out:

- **705.11 — Supply-Side Source Connections:** rewritten with new subsections; service-conductor requirements, relocated provisions, and a new bonding/grounding subsection were added.
- **705.12 — Load-Side Source Connections:** retains the **busbar / 120% rule** family of provisions (the previous 705.12(A) and portions of 705.12(B) were deleted because those topics now live elsewhere).
- **705.20 — Disconnecting means:** now the home for interconnection disconnect requirements previously embedded in 705.12.
- **705.30 — Overcurrent protection:** now the home for interconnection OCP requirements, including new 705.30(F) provisions for transformers used in interconnected systems.
- **705.5 — Parallel Operation (new):** adds output-compatibility and synchronous-generator requirements.

The busbar **120% rule** itself carries forward: where the primary source and the PV source are at **opposite ends** of a busbar containing loads, the sum of 125% of the power-source output current and the busbar's protective OCPD rating must not exceed **120% of the busbar ampacity**.

> **Worked example (120% rule):** A 200 A busbar with a 200 A main allows `200 A x 120% = 240 A` total; `240 - 200 = 40 A` remains for the opposite-end PV breaker — a **40 A** backfed breaker. The permanent "do not relocate this overcurrent device" warning label remains required.

### Conductor and Overcurrent Device Sizing (690.8, 690.9)

Conductor sizing is unchanged in principle:

```
Circuit current basis = Isc (module short-circuit current)
Step 1: 1.25 x Isc      (PV irradiance/continuous factor)
Step 2: 1.25 x (result) (continuous-duty conductor factor)
Combined: 1.25 x 1.25 = 1.5625  ->  "156%" of Isc
```

Conductors are sized to the larger of the 690.8(B) calculations before temperature and conduit-fill derating; OCPDs (690.9) are not less than 125% of maximum circuit current unless listed for 100% continuous operation.

### DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** Retained for PV DC circuits at **80 V DC or greater** on or penetrating a building.
- **690.13 / 690.15 (disconnects):** PV system disconnect and equipment-isolation requirements retained; rooftop DC disconnects must be load-break rated where opened under load. Interconnection-side disconnects now reference **705.20**.
- **Marking and labeling:** Rapid-shutdown marking relocated to **690.12(D)**; the buildings-with-rapid-shutdown label eased (no reflective/color mandate, contrast required). Note that some AHJ-referenced rooftop-clearance and detail thresholds shifted in the 2023 cycle (for example, certain small-gap thresholds), so verify against the adopted text.

### What Changed vs. the 2020 NEC

| Area | 2020 NEC | 2023 NEC |
|---|---|---|
| Article 705 structure | Interconnection rules concentrated in 705.11 / 705.12 | Restructured: disconnects to **705.20**, OCP to **705.30**, new **705.5** parallel operation |
| Supply-side connections | 705.11 | **705.11** rewritten with new subsections incl. bonding/grounding |
| Load-side / busbar | 705.12(B)(3) busbar rules | Consolidated under **705.12**; former 705.12(A) and parts of (B) deleted (moved to 705.20/705.30) |
| Transformers in interconnection | Not specifically addressed | New **705.30(F)** requirements |
| Rapid shutdown (690.12) | Array boundary + PVHCS/UL 3741 | Same limits, **new exception** for detached non-enclosed structures; marking to **690.12(D)** |
| Rapid-shutdown label | Reflective / specified appearance | No reflective/color mandate; **contrast** required |
| DC arc-fault, conductor sizing | 690.11 at >= 80 V; `156%` sizing | Retained |

The defining 2023 change is the **Article 705 reorganization** — anyone moving from a 2020-based design must re-map disconnect and overcurrent citations to 705.20 and 705.30, and note the new 705.5 and 705.30(F) provisions. On the Article 690 side, the detached-structure rapid-shutdown exception and eased labeling are the notable updates.

For conductor and connector fundamentals underlying these rules, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare with the [NEC 2017 & Solar](code-nec.md) and [NEC 2020 & Solar](code-nec.md) articles.

> **Disclaimer:** This article is an educational summary, not the adopted code text. Section numbers, effective dates, and requirements may be modified by state and local amendments, and the AHJ is the final authority. Work from the NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance decisions.

### Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [NEC 2023 Changes to Sections 690, 691, 692, 694, 705, 710 and 790 (AltEnergyMag)](https://www.altenergymag.com/article/2021/06/nec-2023-changes-to-sections-690-691-692-694-705-710-and-790/35241)
- [2023 National Electrical Code and Photovoltaic Power Systems (IAEI Magazine)](https://iaeimagazine.org/columns/photovoltaic/2023-national-electrical-code-and-photovoltaic-power-systems/)
- [2023 NEC Updates to Rapid Shutdown Requirements (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/2023-nec-updates-to-rapid-shutdown-requirements/)
- [NEC 2023: Top 5 Code Changes for the Solar and Storage Industries (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/nec2023changes/)
- [2023 NEC Solar Code Guide for Installers (GreenLancer)](https://www.greenlancer.com/post/2023-nec-solar)

---

*Reference and educational use only — not code-compliance advice. Model codes are adopted and amended locally; confirm the exact edition and any local amendments with your AHJ and a licensed professional.*
