# Anti-Islanding & Grid Protection

When a solar plant feeds power into the grid, the grid and its operators rely on the plant to **stop energizing** the lines under the right conditions and to **stay connected** under others. Getting this balance right is the job of **anti-islanding** and **grid protection** — the relays, inverter functions, grounding schemes, and communications that keep equipment, line workers, and the grid itself safe.

This page explains the islanding hazard and the methods used to detect it, the protective relays applied at larger interconnections, the modern shift from "trip on any disturbance" to **ride-through**, grounding requirements for larger systems, relay coordination, and the SCADA and **direct transfer trip** schemes used at utility-scale plants.

> **Key point:** Anti-islanding protects the *outside world* from the plant (no energizing a dead grid). Ride-through protects the *grid* from the plant disconnecting all at once. These two goals pull in opposite directions and must be carefully coordinated.

See also: [Grid & Interconnection Overview](grid-overview.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Interconnection Studies & Queues](grid-studies-queues.md), [Three-Phase Power & Service Connections](grid-three-phase.md).

## The Islanding Hazard

An **island** forms when a portion of the grid becomes electrically isolated from the utility source — for example a feeder section opened by a recloser or a downed line — yet a distributed generator keeps energizing that section. An **unintentional island** is dangerous because:

- **Line-worker safety:** Crews expect a de-energized line to stay de-energized. A back-feeding inverter can keep a "dead" line live.
- **Equipment damage:** The islanded generator's voltage and frequency are no longer locked to the grid; out-of-spec conditions can damage customer equipment.
- **Out-of-phase reclosing:** When the utility recloser snaps the island back onto the grid, the island and grid may be out of phase, producing a large transient torque/current that can damage generators and transformers.

```
        Utility                Open recloser              Customers + PV
   ~~~grid source~~~ ───X────────[ R ]────────●──────────●──────────●
                                              │          │          │
                          ISLAND ─────────────┴── PV inverter keeps
                                                   energizing this dead
                                                   section = HAZARD
```

The defense is **anti-islanding**: the DER must detect that the utility source is gone and **cease to energize** within a defined time.

## Anti-Islanding Detection Methods

Inverters detect islands using **passive** methods (watching the grid) and **active** methods (gently probing the grid). Most modern inverters combine both.

### Passive Methods

Passive schemes monitor electrical quantities and trip when they leave normal bounds — abnormal values imply the stiff utility source is no longer present.

| Passive method | What it watches |
|---|---|
| **Over/Under Voltage (OUV)** | RMS voltage outside limits |
| **Over/Under Frequency (OUF)** | Frequency outside limits |
| **Rate of Change of Frequency (ROCOF)** | `df/dt` — how fast frequency is moving |
| **Phase Jump Detection (PJD)** | Sudden shift in voltage phase angle |
| **Harmonic Detection (HD)** | Rise in voltage/current harmonics when the grid drops |

Passive methods are simple and add no disturbance, but they have a **non-detection zone (NDZ)** — if local generation and load happen to be nearly balanced, voltage and frequency may not deviate enough to trip.

### Active Methods

Active schemes inject a small, deliberate disturbance and watch the response. A **stiff grid** absorbs the probe with little change; an **island** lets the probe push voltage or frequency away from nominal, revealing the island and shrinking the NDZ.

- **Slip-Mode Frequency Shift (SMS):** the inverter biases its phase/reactive output to nudge frequency; a strong grid holds frequency, an island runs away.
- **Active Frequency Drift (AFD) / Sandia Frequency Shift (SFS):** the inverter slightly distorts current to drift frequency; positive feedback in an island drives it past the trip limit.
- **Reactive power / impedance perturbation:** periodically vary reactive power and measure the voltage response to estimate grid impedance.

> **Key point:** Per **IEEE 1547-2018**, a DER must detect an unintentional island and **cease to energize within 2 seconds** of island formation. Anti-islanding settings must be coordinated with ride-through (below) so the inverter does not trip on a normal grid disturbance.

## Protective Relaying

Beyond inverter-internal functions, interconnections — especially larger ones — apply discrete **protective relays** identified by ANSI/IEEE device numbers:

| Device | Function | Role |
|---|---|---|
| **27** | Undervoltage | Trip on collapsed/low voltage |
| **59** | Overvoltage | Trip on excessive voltage |
| **81U / 81O** | Under/over frequency | Trip outside the frequency band |
| **81R** | Rate of change of frequency (ROCOF) | Fast islanding/disturbance detection |
| **32** | Directional power | Detect reverse/abnormal power flow |
| **67** | Directional overcurrent | Fault current flowing the wrong way |
| **50/51** | Instantaneous / time overcurrent | Fault protection |
| **25** | Synchronism check | Permit closing only when in phase |
| **DTT** | Direct Transfer Trip (communications) | Utility commands the plant to trip |

Voltage and frequency elements (**27/59/81**) provide the baseline disconnection. **ROCOF (81R)** gives faster island detection than a fixed frequency window. **Directional** elements (**32/67**) distinguish a fault or island on the utility side from normal operation. For large plants, a **transfer trip** circuit lets the utility's protection directly command the plant offline — the most reliable anti-islanding method because it does not rely on the inverter inferring the grid's state.

## Ride-Through vs. Trip

Early interconnection rules told inverters to **trip** on almost any voltage or frequency excursion. With high penetrations of solar, this became a reliability problem: a single transmission fault could momentarily depress voltage across a wide area and cause **thousands of MW of solar to disconnect simultaneously**, turning a small event into a large one.

Modern standards therefore require **ride-through**: the DER must *stay connected and keep supporting the grid* through defined voltage and frequency disturbances, and only trip if the disturbance is severe or sustained beyond the ride-through envelope.

```
  Voltage
   1.0 ──┬─────── normal operation ───────────
         │
   0.88 ─┤··· mandatory ride-through region ···      stay connected,
         │                                            keep injecting
   0.5  ─┤   momentary cessation / trip region
         └──────────────────────────────────────► time
            short dip → ride through      long/deep dip → trip
```

> **Key point:** Ride-through and anti-islanding are in tension. Ride-through says "do not trip on a brief disturbance"; anti-islanding says "trip when the grid is gone." The passive trip settings (voltage, frequency, ROCOF) must sit *outside* the ride-through envelope so the inverter rides through normal grid events but still catches a true island. IEEE 1547-2018 defines the ride-through profiles and abnormal-condition categories that make this coordination possible.

For details on the inverter functions that implement ride-through and grid support, see [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## Grounding for Larger Systems

How the generator and its interconnection transformer are **grounded** affects fault behavior and is a frequent point in interconnection studies.

- An **effectively grounded** source limits the temporary overvoltage on un-faulted phases during a line-to-ground fault to roughly 1.25–1.4× nominal, protecting arresters and equipment.
- An **ungrounded or ineffectively grounded** generator can drive **ground-fault overvoltage** on healthy phases when the utility's own ground reference is lost during an islanding event.
- A **grounding transformer** (often a zig-zag or grounded-wye/delta unit) is frequently required to provide a ground source on the generator side so the system stays effectively grounded as seen from the utility, while still allowing the right fault current for **ground overcurrent relaying** to operate.

The choice of interconnection transformer winding configuration (e.g., grounded-wye/delta) and any added grounding transformer is determined in the interconnection study to satisfy the utility's grounding and protection criteria.

## Relay Coordination

**Coordination** ensures that for any fault, the *closest* protective device operates first and only the faulted section is isolated — selectivity. Adding a generator complicates this because:

- The generator contributes **additional fault current**, which can change pickup levels and desensitize or mis-coordinate existing utility relays.
- Fault current can now flow in **both directions**, so non-directional overcurrent relays may trip incorrectly — driving the use of **directional (67)** elements.
- **Fuse-recloser** coordination on distribution feeders can be upset by the back-fed fault current.

The interconnection study verifies that, with the plant connected, the utility's reclosers, fuses, and relays still coordinate, and specifies any required relay setting changes or added devices.

## SCADA, Telemetry & Direct Transfer Trip for Large Plants

Utility-scale plants are integrated into the utility/RTO control room through **SCADA** (Supervisory Control and Data Acquisition) and **telemetry**:

- **Telemetry** streams real-time MW, MVAr, voltage, and breaker status to the operator so the plant is visible and dispatchable.
- **Remote control / curtailment** lets operators raise or lower output, set reactive power or voltage targets, and curtail the plant during congestion.
- **Direct Transfer Trip (DTT)** is a dedicated, high-reliability communications channel that lets the utility's protection **directly open the plant's interconnection breaker** when an upstream device opens — guaranteeing the plant cannot island. DTT is the gold-standard anti-islanding measure for large interconnections precisely because it does not depend on the inverter detecting the island on its own.

```
  Utility / RTO control room
        │  SCADA telemetry (MW, MVAr, V, status)
        │  setpoints / curtailment commands
        ▼
   ┌─────────────────────────────┐      DTT (dedicated comms)
   │  Plant controller + relays  │◄──────────────────────────── utility
   │  POI breaker  ──────────────┼──► trip on local OR transfer-trip
   └─────────────────────────────┘
```

> **Key point:** At the residential scale, anti-islanding lives entirely inside the inverter (IEEE 1547). At the utility scale, it is reinforced by dedicated protective relays, SCADA visibility, and a **direct transfer trip** circuit — defense in depth, because the consequences of an undetected island are far larger.

## Sources & Further Reading

- [Kite Compliance — IEEE 1547 Explained: DER Interconnection Guide](https://www.kitecompliance.ai/navigating-compliance/ieee-1547)
- [Kite Compliance — Anti-Islanding Protection: Guide to Inverters & Compliance](https://www.kitecompliance.ai/navigating-compliance/anti-islanding-protection)
- [AESO — DER Anti-Islanding Screening and Study Guideline](https://www.aeso.ca/assets/DER-Anti-Islanding-Screening-and-Study-Guide-December-2023.pdf)
- [FranklinWH — Anti-Islanding Technical Brief](https://www.franklinwh.com/document/anti-islanding-tech-brief)
- [IEEE Standards — IEEE 1547 (Standard for Interconnection of DER)](https://standards.ieee.org/ieee/1547/5915/)

---
*This page is educational reference material, not a substitute for utility interconnection requirements or a licensed protection engineer; relay settings and grounding schemes must be designed and approved for the specific installation.*
