# NEC 2020 & Solar

The 2020 edition of the **National Electrical Code (NFPA 70)** refined the solar photovoltaic (PV) framework introduced in prior cycles rather than overhauling it. Its most important contributions for solar are the **reorganization of Article 705** interconnection rules (renumbering the busbar provisions from 705.12(D) to 705.12(B)), and the addition of the **PV Hazard Control System (PVHCS)** as a listed alternative compliance path for rapid shutdown under **690.12**. Many jurisdictions currently enforce the 2020 NEC, so it remains a working reference for designers and inspectors.

For background on how these model codes are adopted and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For rooftop-access and fire-service pairing rules, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The NEC has no legal force until adopted, frequently with amendments. States and localities are staggered across editions, and many remain on the 2017 or 2020 NEC even now. Confirm the adopted edition and local amendments before design.

## Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV circuits, equipment, disconnects, wiring methods, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs parallel connection to the utility or other sources, including the busbar and overcurrent rules that constrain interconnections.

The 2020 cycle carried forward the 2017 structure of Article 690 with clarifications, and it meaningfully reworked Article 705 to make the interconnection rules easier to apply.

## Article 690 Highlights (2020)

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

## Rapid Shutdown Under the 2020 NEC (690.12)

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

## Article 705 Interconnection and the Busbar 120% Rule

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

## Conductor and Overcurrent Device Sizing (690.8, 690.9)

Conductor sizing continues to use the two stacked 125% factors:

```
Circuit current basis = Isc (module short-circuit current)
Step 1: 1.25 x Isc      (PV irradiance/continuous factor)
Step 2: 1.25 x (result) (continuous-duty conductor factor)
Combined: 1.25 x 1.25 = 1.5625  ->  "156%" of Isc
```

Conductors are sized to the larger of the calculations in 690.8(B) before temperature and conduit-fill derating. Overcurrent devices (690.9(B)) are not less than 125% of the maximum circuit current unless listed for 100% continuous operation.

## DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** Retained — required for PV DC circuits at **80 V DC or greater** on or penetrating a building, using a listed PV arc-fault circuit interrupter or equivalent.
- **690.13 / 690.15 (disconnects):** PV system disconnect and equipment-isolation requirements retained; rooftop DC disconnects must be load-break rated where opened under load.
- **Marking and labeling:** The 2020 NEC updated several PV labels for clarity, including the rapid-shutdown placards. The "buildings with rapid shutdown" label and the type-of-shutdown marking remain required so that first responders can identify the shutdown method at the service point.

## What Changed vs. the 2017 NEC

| Area | 2017 NEC | 2020 NEC |
|---|---|---|
| Rapid shutdown (690.12) | Array boundary; 80 V inside / 30 V outside; inside rule effective Jan 1, 2019 | Same voltage limits, **plus** PVHCS option referencing UL 3741 |
| Interconnection numbering | Load-side rules in **705.12(D)** | Renumbered to **705.12(B)**; busbar rules reworded for clarity in 705.12(B)(3) |
| Busbar 120% rule | 705.12(D)(2) | 705.12(B)(3)(2), clarified |
| DC arc-fault (690.11) | Required at >= 80 V DC | Retained |
| Conductor sizing (690.8) | `125% x 125% = 156%` | Retained |
| Labeling | 690.56 rapid-shutdown placards | Label wording/clarity updates |

The two changes that matter most in practice are the **705.12(D) → 705.12(B) renumbering** (which trips up anyone moving between editions) and the **PVHCS / UL 3741** compliance path, which opened an alternative to module-level electronics for rooftop rapid shutdown.

For the conductor and connector fundamentals underlying these rules, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare with the [NEC 2017 & Solar](code-nec-2017.md) and [NEC 2023 & Solar](code-nec-2023.md) articles.

> **Disclaimer:** This article is an educational summary, not the code text. Section numbers, effective dates, and requirements may be altered by state and local amendments, and the AHJ is the final authority. Work from the NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance.

## Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [NEC 2020 Rapid Shutdown Requirements (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/nec-2020-rapid-shutdown-requirements/)
- [NEC Rapid Shutdown Requirements and UL 3741 (IAEI Magazine)](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/)
- [Code Corner: 2020 NEC 705.12(B)(3)(1) and (2) (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/code-corner-2020-nec-705-12b31-and-2/)
- [The 2020 National Electrical Code and PV Systems (IAEI Magazine)](https://iaeimagazine.org/columns/photovoltaic/the-2020-national-electrical-code-and-pv-systems/)
- [Point of Connection Rules for PV Systems, NEC 705.12 (ExpertCE)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)
