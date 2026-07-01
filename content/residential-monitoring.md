# Residential Monitoring & Troubleshooting

A solar system is a 25-30 year power plant on the roof, and the only way to know it's actually earning its keep is to watch the data. Monitoring catches a dead inverter, a shaded string, or a soiled array *before* months of lost production turn into a surprise on the electric bill. This page covers the kinds of monitoring available, how to read the numbers, the common failure modes, what a homeowner can safely check, when to escalate to the installer or warranty, a maintenance schedule, and snow/cleaning. See also [Residential System Design](residential-design.md), [Residential Sizing & Calculations](residential-sizing.md), [Battery Energy Storage](battery-storage.md), and [Residential Incentives](residential-incentives.md).

## Monitoring platforms

Most residential systems include a manufacturer monitoring app/portal tied to the inverter or optimizers/microinverters. Capabilities vary:

| Type | What it measures | Granularity | Notes |
|---|---|---|---|
| **Production monitoring** | Energy the system *makes* (kWh, kW) | Whole-system, or per-string | Standard; comes with most inverters |
| **Consumption monitoring** | Energy the *home* uses | Whole-home (needs a CT meter) | Optional add-on; shows net import/export and self-consumption |
| **Panel-level (module-level)** | Production of each module | Per-panel | Comes with microinverters or DC optimizers; pinpoints a single bad/shaded panel |

- **String-inverter** systems report at the string level by default; a single underperforming panel can hide inside a string unless module-level hardware is added.
- **Microinverters / optimizers** give **panel-level** data natively, making troubleshooting far easier (you can see exactly which module dropped).
- **Consumption monitoring** (a CT clamp on the main feed) is what turns "we made X kWh" into "we used Y, exported Z, and self-consumed the rest" — essential for evaluating self-consumption, TOU, and battery behavior.

> **Key point:** Production monitoring tells you the system is alive; consumption monitoring tells you whether it's actually lowering your bill. Panel-level monitoring tells you *which* module to look at when something's wrong.

## Reading the data: expected vs actual

The core diagnostic is comparing **actual** production to **expected** production.

- **Expected** comes from your design estimate: system size (kW DC) x local sun-hours x derate, adjusted for season. Your installer's proposal and tools like **PVWatts** give an expected monthly/annual figure. (See [Residential Sizing & Calculations](residential-sizing.md).)
- **Actual** is what the monitoring portal reports.

```
QUICK EXPECTED-PRODUCTION SANITY CHECK

System: 7.0 kW DC
Local average: 4.5 peak sun-hours/day
System derate: 0.80

Daily expected = 7.0 kW x 4.5 h x 0.80 = 25.2 kWh/day
Monthly expected (June) ~ 25.2 x 30 = ~756 kWh

If June actual = ~740 kWh  -> within a few %, normal.
If June actual = ~500 kWh  -> ~34% low -> INVESTIGATE.
```

What's "normal" variance:
- **Day to day**: huge swings (clouds) — judge over weeks, not single days.
- **Season**: winter production is a fraction of summer; compare to the *seasonal* expectation, not the annual average.
- **Year over year**: panels degrade slowly (~0.3-0.5%/yr). A sudden double-digit drop is a fault, not aging.

> **Key point:** A single cloudy day means nothing. A persistent gap of ~15%+ versus the seasonal expectation, or a sudden step-down, is the signal to troubleshoot.

## Common issues

| Symptom in the data | Likely cause | Where it shows |
|---|---|---|
| Production zero across whole system | Inverter offline, tripped AC breaker, utility outage, comms portal stale | Whole-system flatline |
| One string/panel reads low or zero | Shading, soiling, failed module, bad optimizer/microinverter, loose connector | String- or panel-level |
| Gradual seasonal-looking decline that's too steep | Soiling buildup, new shading (tree growth), degradation | Trend over weeks/months |
| Midday "clipping" plateau | Inverter at its AC limit (often by design with high DC:AC ratio) | Flat top on the daily curve |
| Data gaps but production resumes | Comms/Wi-Fi dropout (router, gateway) — *production may be fine* | Portal shows "no data," not "no power" |
| Repeated inverter faults / restarts | Grid voltage/frequency excursions, ground fault, arc fault, overheating | Inverter fault log |
| Lower bill savings, normal production | Consumption changed, or NEM/billing/TOU issue | Consumption data + utility bill |

- **Shading** — new tree growth, a new neighboring structure, or a vent. Module-level systems isolate it to specific panels and times of day.
- **Soiling** — dust, pollen, bird droppings, ash. Usually a few-percent loss; worse in dry, dusty, or pollen-heavy areas.
- **Inverter faults** — the most common hardware failure point; faults are logged with codes. String inverters typically last 10-15 years (often less than the panels), so a mid-life inverter failure is expected at least once.
- **Comms dropouts** — extremely common and usually harmless: the system keeps producing, but the portal stops updating because the gateway lost Wi-Fi/internet. Distinguish "no data" from "no production."
- **Underperformance** — the catch-all gap between expected and actual; trace it through the above.
- **Tripped breakers / disconnects** — an open AC breaker or pulled disconnect kills production entirely.

## Homeowner troubleshooting steps

A homeowner can safely do the following *without opening any electrical equipment*:

1. **Confirm it's real.** Check whether the portal says "no data" (comms) vs "0 W" (production). Compare to a sunny vs cloudy day.
2. **Reboot the monitoring/comms.** Power-cycle the home router and the monitoring gateway; check Wi-Fi credentials if recently changed. Fixes most "system offline" alerts.
3. **Look at the inverter's status light/display.** Green/normal vs a fault code. Note the code — don't open the unit.
4. **Check the breakers/disconnects you can see.** A clearly tripped AC PV breaker in the main panel can be reset *once*; if it trips again, stop and call the installer.
5. **Look up at the array.** Visible soiling, a fallen branch, new shading, or bird nesting. Note it; don't climb the roof.
6. **Compare to neighbors / weather.** A regional grid outage or a smoke/overcast event affects everyone.
7. **Log the timeline.** When did production drop? Gradual or sudden? Which panels (if panel-level)? This is exactly what the installer will ask.

> **Warning:** Never open the inverter, DC disconnect, combiner, or rooftop wiring, and don't climb the roof to clean or inspect. PV arrays carry high-voltage DC that is live whenever the sun is up and cannot simply be "switched off." Cleaning and internal diagnostics are for qualified personnel.

## When to call the installer / invoke warranty

Escalate when:
- The system is fully offline and a comms reboot + single breaker reset didn't fix it.
- An inverter shows a persistent **fault code** or repeated restarts.
- A breaker trips again after one reset (possible ground/arc fault — a safety issue).
- One or more panels read zero/very low with no obvious shading or soiling (possible module/optimizer/microinverter failure).
- Measured production is persistently well below the seasonal expectation with no explanation.

**Warranties to know** (verify your specific paperwork):
- **Panels:** ~25 year product + ~25-30 year performance (production) warranty.
- **Microinverters:** often ~25 years; **string inverters:** typically ~10-12 years (extendable).
- **Battery:** commonly ~10 years (see [Battery Energy Storage](battery-storage.md)).
- **Workmanship / roof-penetration:** installer-specific, often ~10-25 years — this covers leaks.

> **Key point:** Keep your proposal, monitoring login, and warranty documents together. Most performance and hardware claims require you to show measured underperformance or a fault, which is exactly what the monitoring portal records.

## Maintenance schedule

Residential PV is low-maintenance, but not no-maintenance.

| Interval | Task |
|---|---|
| **Monthly** | Glance at the monitoring app; confirm production is roughly on track and the system is online |
| **Seasonally** | Compare production to the seasonal expectation; note new shading (leaf-out, tree growth) |
| **After major weather** | Check production and look (from the ground) for damage, debris, or shifted panels after storms/hail/high wind |
| **Annually** | Visual check for soiling, vegetation growth, and obvious physical damage; review year-over-year production |
| **Every few years** | Professional inspection of wiring, connectors, racking torque, and roof penetrations; clean if soiling is material |
| **As needed** | Cleaning in dusty/pollen/ash conditions; inverter replacement when it reaches end of life |

## Snow & cleaning

**Snow:**
- Panels produce little to nothing when snow-covered, but a clean array often **sheds snow faster than the roof** because the dark glass warms and the tilt helps it slide.
- **Do not** climb up to clear snow, and avoid metal tools/rakes that scratch glass or damage the surface — the risk and potential damage usually outweigh a day or two of lost winter production (already a low-output season). Soft roof rakes from the ground may help on low roofs, used carefully.

**Cleaning:**
- For most homes, **rain handles routine cleaning** and soiling losses are small (a few percent). Cleaning pays off mainly in **dry, dusty, high-pollen, agricultural, or wildfire-ash** environments, or after bird droppings concentrate on specific panels.
- Use water and a soft brush/squeegee; avoid harsh chemicals, pressure washers, and walking on modules. **Cleaning a roof array is best left to professionals** for safety.
- Watch the monitoring data: if production recovers after rain, soiling was the cause and a periodic clean may be worthwhile.

> **Warning:** Roof work is a fall hazard and PV glass is easily scratched or cracked. Ground-based methods or professional cleaning are strongly preferred over climbing onto the array.

## Sources & Further Reading

- [PVWatts Calculator — NREL](https://pvwatts.nrel.gov/)
- [Maintaining and Operating Your Residential Solar Panels — U.S. DOE](https://www.energy.gov/energysaver/articles/solar-energy-maintenance)
- [Homeowner's Guide to Going Solar — U.S. DOE / SETO](https://www.energy.gov/eere/solar/homeowners-guide-going-solar)
- [Solar Panel Maintenance & Cleaning — EnergySage](https://www.energysage.com/solar/solar-energy-maintenance/)

---

*This page is educational and not electrical advice. Diagnosing, opening, or servicing solar equipment carries shock and fall hazards; faults beyond a single comms reboot or breaker reset require a qualified, licensed solar professional and may involve warranty claims and permits.*
