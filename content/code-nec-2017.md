# NEC 2017 & Solar

The 2017 edition of the **National Electrical Code (NFPA 70)** is one of the most consequential releases for the solar photovoltaic (PV) industry. It reorganized **Article 690** into a cleaner structure, tightened **rapid shutdown** into a de-facto module-level requirement, and carried forward the load-side interconnection rules of **Article 705**. Even years after its publication, many jurisdictions across the United States still enforce the 2017 NEC, making it essential reference material for designers, installers, and inspectors.

For orientation on how model codes are written, adopted, and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For the fire-service and rooftop-access rules that pair with the NEC, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The NEC is a model code with no legal force until a state or local government adopts it, often with amendments. As of this writing, many jurisdictions remain on the 2017 or 2020 NEC. Always confirm the adopted edition and any local amendments with your AHJ before design.

## Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV system circuits, equipment, disconnecting means, wiring methods, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs how a PV (or other) power source is connected in parallel with the utility or another source, including the busbar and overcurrent rules that determine where and how large an interconnection may be.

In the 2017 edition, Article 690 was substantially reorganized from the 2014 layout. Several requirements that had lived inside Article 690 were relocated to more general articles, and the grounding provisions were streamlined to lean on **Article 250** rather than duplicating it.

## Article 690 Highlights (2017)

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

## Rapid Shutdown Under the 2017 NEC (690.12)

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

## Article 705 Interconnection and the Busbar 120% Rule

In the 2017 NEC, the load-side interconnection rules lived in **705.12(D)** ("Point of Connection — Load Side"). The most-cited provision is the **busbar 120% rule**, which limits how much backfed PV current a panelboard busbar can accept.

The general options in 705.12(D)(2) for busbar protection include:

1. **Sum rule:** The sum of the ampere ratings of all overcurrent devices supplying the busbar does not exceed the ampacity of the busbar.
2. **120% rule:** Where the PV backfed breaker is located at the **opposite end** of the busbar from the main breaker, the sum of the main OCPD rating plus 125% of the PV output-circuit current shall not exceed **120% of the busbar ampacity**.
3. **Sum of all breakers ≤ ampacity** (center-fed and other configurations), plus additional listed options.

> **Worked example (120% rule):** A 200 A busbar fed by a 200 A main allows `200 A x 120% = 240 A` total. Subtracting the 200 A main leaves `240 - 200 = 40 A` of backfed capacity, which corresponds to a **40 A** PV breaker at the opposite end of the bus.

When the 120% rule is used, a permanent warning label is required near the backfed breaker reading, in effect: *"WARNING: POWER SOURCE OUTPUT CONNECTION — DO NOT RELOCATE THIS OVERCURRENT DEVICE."*

## Conductor and Overcurrent Device Sizing (690.8, 690.9)

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

## DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** PV DC circuits operating at **80 V DC or greater** and installed on or penetrating a building must include a listed **PV arc-fault circuit interrupter** or equivalent protection. (DC arc-fault requirements first appeared in the 2011 NEC and were retained through 2017.)
- **690.13 / 690.15 (disconnects):** The 2017 NEC requires a means to disconnect the PV system and to isolate equipment such as inverters. Rooftop DC disconnects must be load-break rated where they may be opened under load.
- **Marking and labeling:** The 2017 NEC requires PV system directory and identification labeling, plus the **rapid shutdown labeling** at 690.56(C), including a placard for buildings with rapid shutdown and, where module-level shutdown is used, an appropriate marking indicating the type of rapid shutdown provided.

## What Changed vs. the 2014 NEC

| Area | 2014 NEC | 2017 NEC |
|---|---|---|
| Article 690 structure | Older layout; more self-contained | Reorganized; grounding leans on Article 250 |
| Rapid shutdown (690.12) | 30 V / 240 VA within 10 s; 5 ft inside / 10 ft from array | Array-boundary model; 30 V outside / 80 V inside within 30 s; inside rule effective Jan 1, 2019 (module-level) |
| Interconnection numbering | 705.12(D) load-side rules | Retained as 705.12(D) |
| DC arc-fault (690.11) | Required at >= 80 V DC | Retained at >= 80 V DC |
| Conductor sizing (690.8) | `125% x 125% = 156%` | Retained, with refined calculation structure |

The headline change is **rapid shutdown**: the shift from the 2014 array-run limits to the 2017 array-boundary model, with the inside-boundary 80 V requirement effective January 1, 2019, is what pushed the market toward module-level electronics.

For conductor, connector, and wiring-method fundamentals that these rules depend on, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare this edition with the [NEC 2020 & Solar](code-nec-2020.md) and [NEC 2023 & Solar](code-nec-2023.md) articles.

> **Disclaimer:** This article is an educational summary, not a substitute for the adopted code text. Section numbers, effective dates, and requirements can be modified by state and local amendments, and the AHJ is the final authority. Always work from the specific NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance decisions.

## Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [2017 NEC 690.12 Rapid Shutdown — Important Changes (PurePower)](https://www.purepower.com/blog/2017-nec-690.12-rapid-shutdown-important-changes)
- [NEC 2017: Module-Level Rapid Shutdown (Greentech Renewables)](https://www.greentechrenewables.com/article/nec-2017-module-level-rapid-shutdown)
- [Point of Connection Rules for PV Systems, NEC 705.12 (ExpertCE)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)
- [NEC 690.8 Solar Conductor Sizing Guide (GreenLancer)](https://www.greenlancer.com/post/nec-690-8-solar-conductor-sizing)
- [A Guide to NEC Article 690: Solar PV Systems (ExpertCE)](https://expertce.com/learn-articles/guide-to-nec-article-690-solar/)
