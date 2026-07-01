# Construction & Commissioning

Once a utility-scale project reaches **Notice to Proceed (NTP)**, the **EPC (Engineering, Procurement, Construction)** contractor takes the field. Building a hundreds-of-megawatt plant is a logistics exercise at industrial scale — millions of components, hundreds of workers, and a sequence that must flow from raw graded land to an energized, grid-compliant generator. This page covers the construction sequence, QA/QC, labor and logistics, the path from mechanical completion to final completion, the commissioning test program (including IEC 62446), and a representative schedule.

See also: [Utility-Scale Solar Overview](util-overview.md), [Civil & Structural Engineering](util-civil-structural.md), [SCADA, Plant Controls & Grid Compliance](util-scada-controls.md), [Substations & Transmission Interconnection](util-substation.md), and [Project Development & Finance](util-development-finance.md).

> **Key point:** A utility-scale solar build is **sequential and crew-paced** — civil enables piles, piles enable racking, racking enables modules, and modules plus MV enable energization. The schedule is governed by **crew productivity rates** (piles/day, modules/day) and by the long-pole items: the **substation, main power transformer, and utility energization (PTO).**

## EPC Construction Sequence

Construction proceeds in overlapping phases, typically rolling **block by block** across the site so commissioning can begin on early blocks while later blocks are still under construction.

```
 1 MOBILIZATION ─► 2 CIVIL/EARTHWORK ─► 3 PILE DRIVING ─► 4 RACKING/TRACKERS
                                                                   │
 8 SUBSTATION/MV ◄─ 7 ELECTRICAL/DC&MV ◄─ 6 MODULE INSTALL ◄───────┘
        │
        ▼
 9 MECHANICAL COMPLETION ─► 10 COMMISSIONING ─► 11 ENERGIZATION ─► 12 SUBSTANTIAL/FINAL COMPLETION
```

| # | Phase | Key Activities |
|---|---|---|
| 1 | **Mobilization** | Lay-down yards, site office/trailers, temporary power, security, erosion controls, survey staking |
| 2 | **Civil / earthwork** | Access roads, grading to tracker tolerance, drainage, equipment pads, trenching |
| 3 | **Pile driving** | Survey, drive (or predrill+drive) steel piles; QA load tests on a sample |
| 4 | **Racking / trackers** | Erect torque tubes, bearings, motors, dampers; install tables |
| 5 | **Mechanical / electrical fit-out** | Tracker controllers, grounding, cable management |
| 6 | **Module install** | Mount and clamp modules to tables (the labor-peak activity) |
| 7 | **DC & MV electrical** | String/harness wiring, combiners, inverter skids, MV collection cable, trenching, terminations |
| 8 | **Substation / MV** | Step-up transformer, switchgear, protection, collector substation, gen-tie to POI |
| 9 | **Mechanical completion (MC)** | All construction physically complete and inspected |
| 10 | **Commissioning** | Energize and test from low voltage up; verify performance |
| 11 | **Energization (PTO)** | Utility grants Permission to Operate; plant backfeeds and exports |
| 12 | **Substantial / final completion** | Handover, punch list closure, O&M turnover |

> **Field tip:** Activities **overlap heavily.** While modules are being installed on Block A, piles are still being driven on Block D and the substation is under construction throughout. The substation is usually on the **critical path** because of long-lead transformer delivery and utility coordination for energization.

## QA/QC & Quality Plans

Quality is governed by a **Project Quality Plan (PQP)** and discipline-specific **Inspection & Test Plans (ITPs)**:

- **ITPs** define hold points, witness points, and acceptance criteria for each activity (pile embedment/plumbness, torque verification, module install torque, electrical terminations, megger/IR tests).
- **Hold points** require sign-off (often by the **Owner's Engineer**) before work proceeds.
- **NCRs (Non-Conformance Reports)** document and disposition defects.
- **Torque verification** (bolted connections), **thermographic scans**, and **IV-curve sampling** catch installation defects before commissioning.

> **Key point:** Quality discipline early is cheaper than rework later. A combiner mis-wired or a cross-mated connector found during commissioning can mean walking thousands of feet of array to find one fault. ITP hold points and as-you-go testing keep defects small and local.

## Labor & Logistics at Scale

A large project is a **temporary industrial operation**:

- **Workforce** can peak at several hundred craft workers during module install.
- **Lay-down and logistics** — module deliveries arrive continuously; a 200 MW plant needs the equivalent of thousands of pallets staged, sequenced, and protected.
- **Equipment fleet** — pile drivers, telehandlers, trenchers, cranes for the substation, and water trucks for dust control.
- **Module handling damage**, theft, and weather delays are leading risk items; robust receiving inspection and inventory control are essential.
- **Domestic-content / sourcing** documentation must be tracked through procurement to support tax-credit qualification (see [Project Development & Finance](util-development-finance.md)).

## Mechanical Completion to Final Completion

The handover ladder is contractually defined and tied to payment milestones:

```
 MECHANICAL ──► COMMISSIONING ──► ENERGIZATION ──► SUBSTANTIAL ──► FINAL
 COMPLETION       (testing)         (PTO)          COMPLETION     COMPLETION
   (MC)                                              (SC)
    │                                                 │              │
 construction                                   plant operating   punch list
 physically done                                + perf. proven    fully closed,
                                                 + tests passed    retention released
```

| Milestone | Meaning |
|---|---|
| **Mechanical Completion (MC)** | All systems installed and inspected; ready to energize/test |
| **Commissioning** | Energize and run test program from LV through full plant |
| **Energization / PTO** | Utility **Permission to Operate**; plant connects and exports |
| **Substantial Completion (SC)** | Plant operating and meeting performance criteria; owner can take beneficial use; often **= COD** |
| **Final Completion** | All punch items closed; retention released; full O&M turnover |

## Commissioning Tests

Commissioning verifies the plant is **safe, complete, and performs as guaranteed.** It proceeds from device level to whole-plant performance.

### Documentation & Safety (IEC 62446)

**IEC 62446-1** is the reference standard for grid-connected PV **commissioning tests, inspection, and documentation.** It covers:

- **Visual inspection** and as-built documentation.
- **Continuity / protective earthing** tests.
- **Polarity, open-circuit voltage (Voc), and string short-circuit current (Isc)** checks.
- **Insulation resistance (megger)** of the DC array.
- **IV-curve testing** (often required as a Category 2 / enhanced test on larger systems).

> **Note:** IEC 62446's scope reaches up to the **LV side / MV transformer interface**; it does **not** cover the medium-voltage equipment, substation, or grid-compliance testing — those follow utility, ISO/RTO, and NERC requirements. A complete utility-scale commissioning program layers MV/substation and grid-compliance tests on top of the IEC 62446 DC/LV tests. An updated **IEC 62446-1:2025** edition has been in finalization.

### Plant-Level Performance Tests

| Test | Purpose | Typical Basis |
|---|---|---|
| **Capacity test** | Verify the plant produces the guaranteed power output at reference conditions, corrected for irradiance/temperature | EPC contract; ASTM E2848-type method |
| **Performance Ratio (PR) test** | Verify PR (actual vs. theoretical energy) over a measured window meets the guaranteed value | IEC 61724 PR methodology |
| **Availability test** | Verify the plant/equipment is available a guaranteed % of time | EPC contract |
| **Reliability run / trial operation** | Sustained run (often days) proving stable, fault-free operation before acceptance | EPC contract |
| **Grid-compliance / PPC tests** | Verify reactive power, voltage, PF, ramp rate, ride-through at the POI | Interconnection agreement, IEEE 2800, NERC |

**Capacity test** corrects measured output to reference conditions (irradiance, module/ambient temperature) and compares it to the guaranteed value; falling short can trigger **liquidated damages** or a remediation/retest. **Performance Ratio** (per IEC 61724) compares actual energy yield to the theoretical yield from measured plane-of-array irradiance — modern, well-built utility plants commonly target PR in the **~80–86%** range depending on climate, technology, and losses. Confirm guaranteed values against the specific EPC contract.

> **Key point:** The **capacity and PR tests are where money changes hands.** They convert "the plant looks built" into "the plant performs as warranted." Owner's Engineers and lenders' Independent Engineers witness these tests; passing them is typically a condition of substantial completion and final payment.

## Punch List & Handover to O&M

- A **punch list** captures incomplete or deficient items found during walkdowns at substantial completion.
- The EPC closes punch items to reach **final completion**; **retention** (a withheld percentage of contract value) is released as items close.
- **Handover to O&M** transfers as-builts, warranties, spare parts, the SCADA/CMMS configuration, and operating procedures to the operations team. Warranty clocks (module, inverter, workmanship) and the O&M agreement begin.

## Schedule & Milestones

A representative **construction window for a ~100–250 MW plant is roughly 12–18 months** from NTP to COD, weather- and substation-dependent. ASCII timeline (illustrative):

```
 MONTH:   0    2    4    6    8    10   12   14   16   18
          |----|----|----|----|----|----|----|----|----|
 Mobilize [==]
 Civil/earth   [======]
 Pile driving      [========]
 Racking/trackers      [========]
 Module install            [=========]
 DC & MV electrical            [==========]
 Substation     [=========================]   (long-lead xfmr)
 Mech. completion                          [MC]
 Commissioning                               [=====]
 Energization (PTO)                               [PTO]
 Capacity/PR tests                                  [===]
 Substantial completion (≈COD)                         [SC]
 Punch / final completion                                 [==>Final]
```

> **Key point:** The **main power transformer and utility energization (PTO)** are the dominant long-poles. Transformer lead times have been extended in recent years, and utility energization depends on the utility's own schedule — both must be driven from day one, not left to the end.

## Sources & Further Reading

- [SolarTech — Solar Commissioning Guide: Complete PV System Testing & Verification (2025)](https://solartechonline.com/blog/solar-commissioning-guide/)
- [ANERN — Commissioning Blueprint: IEC 62446-1 Test Records](https://www.anernstore.com/blogs/diy-solar-guides/iec-62446-1-commissioning-test-records)
- [GlobalSpec — IEC 62446-1 Photovoltaic Systems: Documentation, Commissioning Tests and Inspection](https://standards.globalspec.com/std/13054778/iec-62446-1)
- [UL — UL 62446-1 Standard](https://www.shopulstandards.com/ProductDetail.aspx?UniqueKey=43519)
- IEC 61724 — Photovoltaic System Performance (Performance Ratio methodology)
- ASTM E2848 — Standard Test Method for Reporting Photovoltaic Non-Concentrator System Performance
- [SurgePV — NTP, PTO, and COD in Solar Projects Explained](https://www.surgepv.com/blog/ntp-pto-cod-solar-project-milestones)

---
*Disclaimer: This material is for general educational reference only; commissioning standards, contractual milestones, and performance-test criteria are project-specific and must follow the applicable EPC contract, codes, and utility requirements.*
