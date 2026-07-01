# Troubleshooting & Fault Diagnosis

When a solar system under-produces or trips offline, the difference between a fast, safe repair and a dangerous, expensive guessing game is **method**. Good troubleshooting is not about knowing the answer in advance; it is about a disciplined sequence — observe, narrow, measure, isolate, confirm — applied with the right safety controls. This page lays out a systematic diagnostic approach, symptom-to-cause-to-test tables for the most common faults, the key field measurements (Voc, Isc, string voltage, isolation resistance), how to isolate a single faulted string, and when to stop and escalate to warranty or a specialist.

For the components behind these faults, see [Inverter & Electrical Maintenance](om-inverter-electrical.md). For the test equipment and intervals, see [Inspection & Testing](om-inspection-testing.md). For how inverters generate the fault codes referenced here, see [Inverters Deep-Dive](fundamentals-inverters.md). For the overall program, see [Operations & Maintenance Overview](om-overview.md).

## A Systematic Diagnostic Approach

Random poking at a live PV system is slow and dangerous. Work the problem top-down, from cheap information to invasive measurement.

1. **Gather data first.** Read the monitoring portal, inverter display, and event/fault logs before going to site. Note the exact fault code, time, weather, and whether the problem is whole-system, one inverter, one string, or one module.
2. **Define the symptom precisely.** "Zero production" and "underperformance" are different problems with different trees. Quantify against expected: what *should* this be producing now?
3. **Localize.** Narrow from plant → inverter → combiner/MPPT → string → module. Each step should roughly halve the suspect set.
4. **Hypothesize and test the cheapest cause first.** A tripped breaker or a comms outage is faster to rule out than a faulted module.
5. **Measure safely.** Use the right instrument, expect a value, and compare to it. Never open energized DC under load.
6. **Confirm the fix and the cause.** Restore production *and* explain why it failed; document for warranty and trend analysis.

> **Key point:** Two-thirds of "inverter faults" are not inside the inverter — they are array ground faults, grid disturbances, blown string fuses, or comms outages that the inverter merely *reported*. Confirm the cause before you reset, or you will be back next week with a worse version of the same fault.

### Diagnostic flow

```
                 ALARM / LOW PRODUCTION
                          |
              Is ANYTHING producing?
                /                    \
              NO                      YES (partial)
               |                        |
   Whole-site loss?                 Compare to expected
   - AC/utility outage              & to neighbor strings
   - main breaker/disconnect             |
   - inverter offline             Which level is low?
   - monitoring vs. real?           /     |        \
               |               1 inverter  1 string  many
        Restore AC,                |        |         |
        verify grid             MPPT/      fuse/     soiling,
        & inverter status       inverter   conn/    shading,
               |                 fault      module    weather,
        Still zero? ----------->  |         |         clipping
        de-energize safely,    read code  measure    (often NOT
        test per fault tree    & test     Voc/Isc     a fault)
                                           |
                                  Isolate faulted string,
                                  retest, repair, confirm
```

## Field Measurements

Four measurements answer most DC-side questions. Always know the *expected* value before you read.

- **Open-circuit voltage (Voc).** String positive-to-negative with no load. Compare to (module Voc x modules in series), temperature-corrected. **Low Voc** suggests fewer live modules (open cell/diode, bad connection); **zero** suggests an open circuit; **slightly high** can be cold-temperature normal.
- **Short-circuit current (Isc) / operating current.** Compare strings against each other under the same irradiance. A **low or zero string** points to that string; uniform low across all strings points to soiling, shading, or irradiance.
- **String / array voltage to ground.** Positive-to-ground and negative-to-ground readings locate ground faults (below).
- **Isolation / insulation resistance (Riso).** Megohmmeter test from conductors to ground with the array isolated. A **low Riso** is the signature of insulation damage or moisture — the usual cause of inverter "isolation fault" trips.

> **Warning:** Measure current with a **clamp meter** wherever possible — it is non-contact and does not break the circuit. Never open a DC connector, fuse, or disconnect while current is flowing: the resulting DC arc will not self-extinguish and can injure you and destroy equipment. Verify zero current *before* opening anything.

### Locating a ground fault by voltage ratio

A healthy ungrounded string reads full Voc positive-to-negative, and **≈0 V** from each conductor to ground. With a ground fault, one or both conductor-to-ground readings become non-zero. Dividing the conductor-to-ground voltage by a single module's Voc estimates how many modules lie between that conductor and the fault:

```
modules_to_fault ≈ (V_conductor-to-ground) / (V_oc per module)
```

Example: negative-to-ground reads 108 V on a string of 36 V (Voc) modules → 108 / 36 ≈ 3 → the fault is around the third module up from the negative end. (Real readings are approximate; use them to narrow the search, then confirm.)

## Symptom → Cause → Test Tables

### Zero production (whole site or one inverter)

| Likely cause | First test |
|---|---|
| Utility/grid outage | Confirm grid voltage at the AC service; check for area outage |
| AC breaker / disconnect open | Inspect main and inverter AC disconnects |
| Inverter offline / failed | Read inverter status & fault log; check DC input voltage present |
| Anti-islanding / grid-protection trip | Check grid V/Hz and grid-fault codes; verify grid-code settings |
| Monitoring artifact (system fine, comms down) | Verify real production at the meter before dispatching |

### Underperformance (producing, but low)

| Likely cause | First test |
|---|---|
| Soiling / snow | Visual; compare to soiling sensor or a clean reference |
| Shading (new growth, structures) | Site walk at the affected time of day; check vegetation height |
| One or more strings down | Compare per-string currents at combiner; find the low/zero string |
| Module degradation / hot spots | IR thermography, electroluminescence on suspect modules |
| Inverter clipping / derate | Check for overtemperature derate, DC/AC ratio, filter/fan status |
| Failing connections (resistive loss) | IR scan terminations and combiners under load |

### Ground fault (GFDI / isolation fault)

| Likely cause | First test |
|---|---|
| Damaged conductor insulation | Riso test; inspect chafe points, staples, pinch points |
| Moisture in combiner / J-box / connector | Inspect for water ingress; dry and retest Riso |
| Faulted module / backsheet | Conductor-to-ground voltage ratio to localize; IR/EL on suspect module |
| Double ground fault | Treat as hazardous (current may flow on faulted conductor); de-energize carefully |

### Arc fault (AFCI trip)

| Likely cause | First test |
|---|---|
| Loose or **cross-mated DC connector** | Inspect connectors; confirm same-brand mating; IR scan for hot joints |
| Damaged / pinched conductor | Visual and physical inspection along the run |
| Corroded or under-crimped termination | Inspect crimps and terminals; re-terminate to spec |
| Nuisance trip / firmware | Check inverter firmware and known-issue bulletins after ruling out real faults |

### String dropouts

| Likely cause | First test |
|---|---|
| Blown string fuse | Check combiner fuses; verify zero current, then inspect/replace |
| Open connector / broken conductor | Voc test along the string to find the open |
| Failed module / open bypass diode | Voc deficit equal to one or more modules; IR/EL |
| Tracker/racking damage to wiring | Post-event inspection; check harnesses at moving joints |

### Communications loss

| Likely cause | First test |
|---|---|
| Network / gateway / backhaul outage | Ping/verify the data path; check cellular/ISP |
| Comms card or RS-485/PLC fault | Check device LEDs, wiring, terminations |
| Power loss to monitoring | Confirm the system is actually still producing at the meter |

> **Key point:** Communications loss is usually a *data* problem, not a *power* problem. Confirm real production at the revenue meter before treating a comms alarm as an outage — and before dispatching a truck.

### Inverter trips

| Likely cause | First test |
|---|---|
| Overtemperature / derate | Filter, fan, vents, ambient, exhaust recirculation |
| Grid fault (V/Hz, anti-islanding) | Grid measurements; settings vs. local grid code |
| DC over/under voltage | String count/wiring; temperature-corrected Voc |
| Isolation/ground/arc fault | Run the matching tree above |
| Internal hardware fault | Read code; follow manufacturer service procedure |

### Rapid-shutdown faults

| Likely cause | First test |
|---|---|
| Module-level device (MLPE) not responding | Identify the offline device per the platform; check it and its wiring |
| Initiator / transmitter fault | Verify the rapid-shutdown signal path and power |
| Connector/comms to MLPE | Inspect connections to the affected device |
| Firmware/compatibility | Check manufacturer bulletins after physical checks |

## Isolating a Faulted String

When one string in a parallel group is suspect, isolate it methodically and safely:

1. **Verify zero current** in the string circuit with a clamp meter (open circuit it at the inverter/combiner if needed, with no current flowing).
2. **De-energize / disconnect** the string per procedure (pull the fuse or open the disconnect **only** with zero current confirmed).
3. **Measure Voc** end-to-end; a deficit of one module's worth points to an open cell/diode, full zero points to an open conductor/connector.
4. **Walk the string** measuring Voc at intermediate points to bracket the open or the ground fault location.
5. **Test Riso** on the isolated string if a ground/insulation fault is suspected.
6. **Repair, re-test, and reconnect**, then confirm the string's current matches its neighbors under load.

## When to Escalate, Warranty, or Stop

Not every fault is a field fix. Escalate when:

- **Safety exceeds the crew's qualification** — MV gear, double ground faults, suspected internal arc, energized work beyond LOTO scope. Stop and bring in qualified personnel.
- **The component is under warranty.** Document the fault (codes, photos, measurements, dates) and follow the manufacturer's RMA process before opening sealed assemblies — unauthorized teardown can void coverage.
- **Root cause is systemic.** Repeated same-model failures, firmware-linked nuisance trips, or a connector cross-mating problem across the array call for a manufacturer bulletin check and a fleet-level fix, not one-off resets.
- **You cannot make it safe.** If you cannot establish an electrically safe condition and confirm zero energy, do not proceed.

> **Warning:** Repeatedly resetting an inverter to clear a recurring ground or arc fault is not troubleshooting — it is disabling a safety function. A fault that keeps coming back is telling you something is still wrong and possibly hazardous. Find and fix the cause.

## Sources & Further Reading

- [How to Use Voltage Readings to Locate Ground Faults in Solar PV Arrays (Fluke)](https://www.fluke.com/en-us/learn/blog/renewable-energy/how-to-use-voltage-readings-to-locate-ground-faults)
- [How to find and repair ground faults in solar PV systems (Fluke)](https://www.fluke.com/en-gb/learn/blog/renewable-energy/how-to-find-ground-faults-in-pv-systems)
- [Earth Faults in PV Systems: Identification, Safety, and Repair Strategies (GSES)](https://www.gses.com.au/earth-faults-in-solar-pv-systems-identification-safety-and-repair-strategies/)
- [How to test solar PV panels — Voc, Isc, Riso & Rs guide (emazys)](https://emazys.com/solar-pv-testing-guide/)
- [Troubleshooting Ground Faults for Solar (Greentech Renewables)](https://www.greentechrenewables.com/article/troubleshooting-ground-faults-solar)

---
*This page is general reference information, not engineering or electrical-safety advice. Diagnostic and repair work on live PV systems must follow manufacturer instructions, applicable codes, and qualified-personnel and lockout/tagout requirements.*
