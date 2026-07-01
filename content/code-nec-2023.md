# NEC 2023 & Solar

The 2023 edition of the **National Electrical Code (NFPA 70)** delivered the most extensive restructuring of the interconnection rules in years. **Article 705** was reorganized so that disconnecting means and overcurrent protection moved to dedicated sections (705.20 and 705.30), supply-side connections were rewritten under **705.11**, and load-side/busbar rules consolidated under **705.12**. **Article 690** rapid-shutdown provisions were refined, including relocated marking rules and a new exception for detached, non-enclosed structures. Adoption is still rolling out state by state, so the 2023 NEC coexists with the widely enforced 2017 and 2020 editions.

For how these model codes are adopted and amended, see [Building Codes & Standards Explained](codes-standards-overview.md). For rooftop-access and fire-service requirements, see [Residential Solar Codes & Fire Requirements](residential-codes.md).

> **Authority having jurisdiction (AHJ) controls.** The 2023 NEC has legal force only where adopted, often with amendments, and adoption lags publication. Many jurisdictions remain on the 2017 or 2020 NEC. Always confirm the adopted edition and local amendments before design.

## Scope of Article 690 and Article 705

**Article 690 — Solar Photovoltaic (PV) Systems** covers PV circuits, equipment, disconnects, wiring, grounding, marking, and rapid shutdown. **Article 705 — Interconnected Electric Power Production Sources** governs parallel connection to the utility and other sources. The 2023 cycle reorganized Article 705 significantly, so section numbers frequently differ from the 2020 edition even where the underlying requirement is similar.

## Article 690 Highlights (2023)

| Section | Topic | 2023 Notes |
|---|---|---|
| 690.7 | Maximum voltage | Temperature-corrected `Voc` governs system max voltage |
| 690.8 | Circuit sizing and current | `125% x 125% = 156%` conductor sizing retained |
| 690.9 | Overcurrent protection | OCPD not less than 125% of maximum circuit current |
| 690.11 | DC arc-fault protection | Retained for PV DC circuits on/penetrating buildings at 80 V DC or greater |
| 690.12 | Rapid shutdown | Refined; new exceptions and relocated marking to 690.12(D) (see below) |
| 690.13 | PV system disconnecting means | Whole-system disconnect requirements |
| 690.15 | Disconnection of PV equipment | Isolating equipment such as inverters |

## Rapid Shutdown Under the 2023 NEC (690.12)

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

## Article 705 Interconnection and the Busbar Rule

The 2023 NEC **reorganized Article 705**. Rather than packing disconnects, overcurrent protection, and busbar rules under 705.12, the code split them out:

- **705.11 — Supply-Side Source Connections:** rewritten with new subsections; service-conductor requirements, relocated provisions, and a new bonding/grounding subsection were added.
- **705.12 — Load-Side Source Connections:** retains the **busbar / 120% rule** family of provisions (the previous 705.12(A) and portions of 705.12(B) were deleted because those topics now live elsewhere).
- **705.20 — Disconnecting means:** now the home for interconnection disconnect requirements previously embedded in 705.12.
- **705.30 — Overcurrent protection:** now the home for interconnection OCP requirements, including new 705.30(F) provisions for transformers used in interconnected systems.
- **705.5 — Parallel Operation (new):** adds output-compatibility and synchronous-generator requirements.

The busbar **120% rule** itself carries forward: where the primary source and the PV source are at **opposite ends** of a busbar containing loads, the sum of 125% of the power-source output current and the busbar's protective OCPD rating must not exceed **120% of the busbar ampacity**.

> **Worked example (120% rule):** A 200 A busbar with a 200 A main allows `200 A x 120% = 240 A` total; `240 - 200 = 40 A` remains for the opposite-end PV breaker — a **40 A** backfed breaker. The permanent "do not relocate this overcurrent device" warning label remains required.

## Conductor and Overcurrent Device Sizing (690.8, 690.9)

Conductor sizing is unchanged in principle:

```
Circuit current basis = Isc (module short-circuit current)
Step 1: 1.25 x Isc      (PV irradiance/continuous factor)
Step 2: 1.25 x (result) (continuous-duty conductor factor)
Combined: 1.25 x 1.25 = 1.5625  ->  "156%" of Isc
```

Conductors are sized to the larger of the 690.8(B) calculations before temperature and conduit-fill derating; OCPDs (690.9) are not less than 125% of maximum circuit current unless listed for 100% continuous operation.

## DC Arc-Fault, Disconnects, and Labeling

- **690.11 (DC arc-fault protection):** Retained for PV DC circuits at **80 V DC or greater** on or penetrating a building.
- **690.13 / 690.15 (disconnects):** PV system disconnect and equipment-isolation requirements retained; rooftop DC disconnects must be load-break rated where opened under load. Interconnection-side disconnects now reference **705.20**.
- **Marking and labeling:** Rapid-shutdown marking relocated to **690.12(D)**; the buildings-with-rapid-shutdown label eased (no reflective/color mandate, contrast required). Note that some AHJ-referenced rooftop-clearance and detail thresholds shifted in the 2023 cycle (for example, certain small-gap thresholds), so verify against the adopted text.

## What Changed vs. the 2020 NEC

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

For conductor and connector fundamentals underlying these rules, see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). Compare with the [NEC 2017 & Solar](code-nec-2017.md) and [NEC 2020 & Solar](code-nec-2020.md) articles.

> **Disclaimer:** This article is an educational summary, not the adopted code text. Section numbers, effective dates, and requirements may be modified by state and local amendments, and the AHJ is the final authority. Work from the NEC edition adopted in your jurisdiction and consult a licensed professional for design and compliance decisions.

## Sources & Further Reading

- [NFPA 70, National Electrical Code (official page)](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA — free access to codes and standards](https://www.nfpa.org/for-professionals/codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [NEC 2023 Changes to Sections 690, 691, 692, 694, 705, 710 and 790 (AltEnergyMag)](https://www.altenergymag.com/article/2021/06/nec-2023-changes-to-sections-690-691-692-694-705-710-and-790/35241)
- [2023 National Electrical Code and Photovoltaic Power Systems (IAEI Magazine)](https://iaeimagazine.org/columns/photovoltaic/2023-national-electrical-code-and-photovoltaic-power-systems/)
- [2023 NEC Updates to Rapid Shutdown Requirements (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/2023-nec-updates-to-rapid-shutdown-requirements/)
- [NEC 2023: Top 5 Code Changes for the Solar and Storage Industries (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/nec2023changes/)
- [2023 NEC Solar Code Guide for Installers (GreenLancer)](https://www.greenlancer.com/post/2023-nec-solar)
