# Inspection & Testing

Where [monitoring](om-monitoring.md) tells you *that* a plant is underperforming, inspection and testing tell you *what* is wrong and *where*. This page covers the field toolkit: visual inspection, the electrical tests defined by **IEC 62446-1** (continuity, polarity, open-circuit voltage, insulation resistance, IV-curve tracing), infrared thermography, electroluminescence imaging, drone-based aerial inspection, torque checks, recommended intervals, and the documentation that keeps warranties and guarantees enforceable. It applies across [residential, C&I, and utility scales](om-overview.md), with notes on where scale changes the method.

## Commissioning vs. O&M Inspections

Two distinct contexts use the same tools:

- **Commissioning inspection** happens once, at handover, to prove the system was built to design and code. **IEC 62446-1** is the governing standard for grid-connected PV system documentation, commissioning tests, and inspection. It produces the baseline record everything is later compared against.
- **O&M inspection** is recurring, to catch degradation and faults over the plant's life. It reuses the commissioning tests as periodic re-tests, comparing results against the commissioning baseline to detect drift.

> **Key point:** The commissioning test record is the **baseline of record**. An insulation-resistance or IV-curve result is far more useful when compared against the as-built value than read in isolation — a string that has dropped from its commissioned figure is the signal, not the absolute number alone.

## Visual Inspection

The cheapest and often most productive inspection. A trained inspector looks for:

- **Modules** — cracked or shattered glass, **snail trails**, discoloration/browning of encapsulant, delamination, hot-spot scorching, backsheet cracking, burn marks at junction boxes.
- **Wiring & connectors** — UV-degraded or chafed cable insulation, strained or unsupported conductors, mismatched or improperly mated connectors (a top cause of arc faults and fires), water ingress.
- **Mounting & structure** — corrosion, loose or missing fasteners, racking movement, roof penetration/flashing integrity.
- **Combiners, disconnects, inverters** — corrosion, water ingress, pest damage, signs of overheating, labeling and signage.
- **Site** — shading from new vegetation or construction, soiling, erosion, drainage.

## Electrical Tests per IEC 62446-1

IEC 62446-1 groups tests into **Category 1** (basic commissioning tests, always required) and **Category 2** (advanced diagnostics — IV-curve tracing, IR imaging — applied to larger or higher-risk systems).

| Test | What it checks | Pass criterion (typical) |
|---|---|---|
| **Continuity / protective earth bonding** | Equipment grounding and bonding are intact | Low resistance, continuous |
| **Polarity** | DC conductors correctly identified before connection | Correct +/− on every string |
| **String open-circuit voltage (Voc)** | Each string built correctly; module count correct | Within tolerance of expected Voc |
| **String short-circuit / operational current (Isc / Imp)** | Strings carrying expected current, no gross mismatch | Strings agree within tolerance |
| **Insulation resistance (Riso)** | No insulation breakdown to ground (shock/fire risk) | See thresholds below |
| **Functional tests** | Switches, inverters, disconnects, AGD operate | All operate correctly |

### Insulation resistance (megohmmeter / "megger")

Insulation resistance verifies that array conductors are not leaking to ground. IEC 62446-1 specifies the **test voltage by system voltage** and a **minimum acceptable Riso**:

| Array maximum system voltage | Test voltage | Minimum Riso |
|---|---|---|
| < 120 V | 250 V | 0.5 MΩ |
| 120 – 500 V | 500 V | 1 MΩ |
| > 500 V | 1000 V | 1 MΩ |

A failing or declining Riso points to moisture ingress, damaged cable insulation, or a faulty junction box — and is a genuine shock and fire hazard.

> **Warning:** Insulation-resistance testing applies a DC test voltage to the array. It must be performed only by qualified personnel following the test procedure, with the inverter and loads isolated; thin-film and some module types require special handling.

### IV-curve tracing (Category 2)

An **IV-curve tracer** sweeps a string from open-circuit to short-circuit, capturing the full current-voltage characteristic. The shape of the curve — compared against the module model and the commissioning baseline — diagnoses problems no single-point measurement can:

```
Curve feature                  Likely cause
-----------------------------  ---------------------------------
Low Isc (curve shifted down)   Uniform soiling or low irradiance
Low Voc (curve shifted left)   Wrong module count / wiring error
Steps / notches in the curve   Shading, bypass-diode activation,
                               cell mismatch
Rounded "knee" / low fill      Series resistance: corroded
factor                         connectors, degraded solder bonds
Shallow slope near Voc         Shunt/parallel resistance faults
```

IV tracing turns "this string makes 8% less than its neighbors" into a specific root cause and is the workhorse of advanced string-level diagnosis.

## Infrared (IR) Thermography

A thermal camera images temperature differences across the array and electrical balance-of-system. Anomalies show as hot spots:

- **Modules** — single hot cells (cracks, shading), hot-spot patterns, hot bypass diodes, "patchwork" heating of failed substrings.
- **Connections** — hot terminations, lugs, and connectors reveal loose or corroded joints (rising resistance) *before* they fail or arc.
- **Combiners & fuses** — hot fuses or busbars flag overloaded or failing strings.

IR is fast, non-contact, and best performed under **clear-sky, high-irradiance** conditions (the array must be carrying current to develop thermal contrast). It is the standard tool for finding the loose connection that monitoring can't see.

## Electroluminescence (EL) Imaging

EL forward-biases modules with current in the dark and images the near-infrared light they emit. Dead or cracked cell regions emit no light and appear black, revealing damage invisible to both the eye and IR:

- **Micro-cracks** (from transport, installation, hail, walking on modules)
- **Cell breakage and disconnected fingers/busbars**
- **PID (potential-induced degradation)** patterns
- **Manufacturing defects**

EL traditionally required darkness and a lab-grade setup; modern field and drone-mounted EL allows on-site imaging at night. It is the definitive method for proving microcrack damage in warranty disputes.

## Drone / Aerial Thermal Inspection

At C&I and especially utility scale, climbing or hand-scanning every module is impractical. **Drones** carrying thermal (and sometimes EL) cameras scan megawatts per day, with software stitching imagery to a plant map and flagging anomalies by GPS location:

- Orders-of-magnitude faster than manual IR for large arrays
- Localizes faulty modules/strings to a row-and-position for targeted truck rolls
- Repeatable, geo-referenced records for trend analysis

Drone inspection has become the default first-pass diagnostic on utility plants; ground crews then verify and repair only the flagged locations.

## Torque Checks

Electrical and mechanical connections loosen over time from thermal cycling. **Torque verification** (and torque-striping connections so loosening is visible) is standard preventive maintenance on lugs, combiner terminals, inverter terminals, and structural fasteners. A loose electrical connection raises resistance, heats up (flagged by IR), and can ultimately arc — torque checks and IR thermography are complementary lines of defense.

## Test Intervals and Documentation

| Activity | Commissioning | Typical O&M interval |
|---|---|---|
| Visual inspection | Required | Every preventive visit (annual–quarterly) |
| Continuity / polarity / Voc / Isc | Required | Re-test as needed / after repairs |
| Insulation resistance | Required | Periodic (e.g., annual at utility scale) and after faults |
| IV-curve tracing | Larger systems | On suspected underperformance; periodic at utility scale |
| IR thermography | Recommended | Annual (more for large/critical sites) |
| EL imaging | Optional baseline | On damage suspicion / warranty claims |
| Drone thermal scan | Optional | Annual at utility scale |
| Torque checks | Required | Periodic per manufacturer schedule |

> **Key point:** Intervals are risk- and contract-driven, not one-size-fits-all. The non-negotiable is **documentation** — every test result, dated and compared to baseline. Undocumented inspection has little value for warranty claims, performance-guarantee disputes, or trend analysis. IEC 62446-1 specifies the required documentation package.

## Common Findings

| Finding | Detected by | Typical cause | Action |
|---|---|---|---|
| Hot connector / lug | IR | Loose or corroded connection | Re-terminate, re-torque |
| Single dead string | Monitoring + IV | Blown fuse, broken conductor | Replace fuse / repair |
| Rounded IV knee (high Rs) | IV-curve trace | Corroded connectors, solder fatigue | Locate & repair joint |
| Module hot spot | IR / EL | Cell crack, shading, failed bypass diode | Replace module |
| Microcracks | EL | Transport/install/hail stress | Document; replace if degraded |
| Low insulation resistance | Megohmmeter | Moisture, damaged cable, bad J-box | Isolate & repair — safety issue |
| PID pattern | EL / IV | Potential-induced degradation | Anti-PID box / module swap |
| Browning / delamination | Visual | Encapsulant degradation | Monitor; warranty claim |

For the failure modes behind these findings, see [PV Modules](fundamentals-pv-modules.md) and the [Inverters Deep-Dive](fundamentals-inverters.md). Where soiling rather than a fault is the cause, see [Module Cleaning & Soiling Management](om-cleaning-soiling.md).

## Sources & Further Reading

- IEC 62446-1:2016 — Photovoltaic (PV) systems: Requirements for testing, documentation and maintenance — Part 1: Grid connected systems
- [Photovoltaic System Commissioning and Testing guide — Seaward](http://www.renewpowers.com/datasheets/SEAWARD/4097%20Solar%20PV%20Com%20&%20Test%20Guide%20book_WEB(1).pdf)
- [IEC 62446-1 overview — Fluke](https://www.pv-magazine.com/wp-content/uploads/2024/04/Fluke_FINAL_May-2024.pdf)
- [Best Practices for Operation and Maintenance of PV and Energy Storage Systems, 3rd ed. — NREL/SunSpec](https://sunspec.org/wp-content/uploads/2025/01/BestPracticesforOperationandMaintenanceofPhotovoltaicandEnergyStorageSystems3rdEdition.pdf)

---

*This page is educational and not engineering or electrical advice. PV testing involves energized DC circuits and applied test voltages; all electrical testing must be performed by qualified, licensed personnel using appropriate procedures and PPE.*
