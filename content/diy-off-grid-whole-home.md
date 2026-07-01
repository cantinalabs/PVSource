# Off-Grid Whole-Home Design

Powering an entire home off-grid is a serious engineering project, not a scaled-up RV system. You are building the only source of electricity your household will have—through the darkest, coldest week of the year. This page walks the full design process: load analysis, autonomy, **worst-month (December) sizing**, 48&nbsp;V architecture, component sizing, big-load strategy, backup generation, monitoring, and code—ending with a complete worked example.

Read [Building Your Own System](diy-overview.md) first, and pair this with [DIY Electrical Calculations](diy-electrical-calcs.md), [DIY Battery Builds](diy-battery-builds.md), and [Battery Energy Storage](battery-storage.md).

> SAFETY FIRST. An off-grid home system combines high-voltage DC arrays, high-current battery banks, AC inverter output, and often a fuel-burning generator. **Every one of these can kill.** This page is a design framework, not a wiring permit. All work must meet NEC and local code and, in most jurisdictions, be permitted and inspected even when off-grid.

## Design Philosophy: Size for the Worst Day, Not the Average

The cardinal rule of off-grid design:

> RULE: **Size the array and battery for your worst production month—almost always December** (in the Northern Hemisphere)—not for an annual average and not for summer. A system that's perfect in July will leave you cold and dark in January.

Three buffers stack on top of worst-month numbers:

1. **Loss/derate buffer** — wiring, charge-controller, battery round-trip, soiling, and temperature losses.
2. **Autonomy buffer** — days of storage to ride through consecutive cloudy days.
3. **Growth buffer** — you *will* add loads. Plan ~20–25% headroom.

## Step 1 — Detailed Load Analysis

You cannot size anything until you know your daily energy use in **watt-hours (Wh)** or **kilowatt-hours (kWh)**. Build a load table for every device.

```
Device load energy = Power (W) x Hours/day x Quantity
Daily total (Wh)    = sum of all device loads
```

| Load | Watts | Hrs/day | Qty | Wh/day |
|------|------:|--------:|----:|-------:|
| LED lighting | 10 | 5 | 12 | 600 |
| Refrigerator (efficient) | 120 | 8 (cycling) | 1 | 960 |
| Chest freezer | 100 | 7 (cycling) | 1 | 700 |
| Well pump (1&nbsp;HP) | 2,000 | 0.75 | 1 | 1,500 |
| Laptops / electronics | 60 | 6 | 2 | 720 |
| TV / entertainment | 120 | 4 | 1 | 480 |
| Washing machine | 500 | 0.5 | 1 | 250 |
| Microwave | 1,200 | 0.25 | 1 | 300 |
| Misc / phantom | 50 | 24 | 1 | 1,200 |
| **Subtotal** | | | | **6,710 Wh/day** |

> TIP: Measure real loads with a plug-in energy meter where you can. Estimated load tables are almost always wrong—usually low.

Add **system losses** (inverter standby, conversion, wiring, battery round-trip). A common practical approach is to divide the load total by an overall system efficiency factor:

```
Adjusted daily energy = Daily load (Wh) / system efficiency
Example: 6,710 Wh / 0.80 = 8,388 Wh/day  (~8.4 kWh/day)
```

## Step 2 — Autonomy Days

**Autonomy** = how many days the battery alone can carry the home with zero solar input.

| Autonomy target | Use case |
|-----------------|----------|
| 1 day | Generator-backed, fair climate, cost-sensitive |
| **2–3 days** | Typical off-grid home design target |
| 4–5+ days | Cloudy climates, no/limited generator, critical reliability |

> RULE: More autonomy = bigger (and pricier) battery. Most off-grid homes target **2–3 days** and lean on a generator for the rare extended overcast stretch.

## Step 3 — Battery Bank Sizing

```
Required usable energy = Adjusted daily energy x Autonomy days
Nominal battery energy = Required usable / Depth-of-Discharge (DoD)
Cold derate            = divide by cold-capacity factor (e.g., 0.85-0.90)
Battery Ah at bank V   = Nominal Wh / Bank voltage
```

For LiFePO4 use a usable DoD around **0.80–0.90** (don't plan to use 100% routinely; leave BMS margin). See [DIY Battery Builds](diy-battery-builds.md) for the pack itself.

## Step 4 — Worst-Month (December) Array Sizing

You need **peak sun hours (PSH)** for your site **in December**—not the annual average. Get this from NREL/PVWatts for your latitude and tilt.

```
Array DC watts = Adjusted daily energy (Wh) / (December PSH x derate)
```

A `derate` around **0.75–0.80** accounts for soiling, temperature, wiring, controller, and battery round-trip losses.

> RULE: **Tilt the array steeply for winter** (roughly latitude + 10–15°) to catch the low December sun. A summer-optimized tilt cripples winter production exactly when you need it most.

> TIP: It is often cheaper to **over-panel** (add more PV) than to over-battery. Extra panels help most on marginal winter days and cost less per kWh delivered than extra storage.

## Step 5 — 48&nbsp;V System Architecture

> RECOMMENDATION: Build whole-home off-grid at **48&nbsp;V nominal.** For the same power, 48&nbsp;V draws one-quarter the current of 12&nbsp;V—smaller cables, far less heat and voltage drop, and the entire serious inverter/charger market is built around it.

```
        PV Array (strings, high-voltage DC)
              |
        [ MPPT Charge Controller(s) ]
              |
   48V DC battery bus  <----> [ 48V LiFePO4 bank + BMS ]
              |
        [ Inverter/Charger (split-phase 120/240V) ]
              |
        Main AC panel (critical + general loads)
              |          \
        Household loads   [ Backup Generator -> AC input of inverter/charger ]
```

## Step 6 — Inverter/Charger Sizing

The inverter must handle two numbers: **continuous power** (your largest simultaneous running load) and **surge power** (motor startups—well pump, AC compressor, deep-well submersibles can surge 3–6× their running watts for a second or two).

```
Continuous rating >= sum of largest simultaneous running loads x 1.25
Surge rating      >= largest motor surge + other running loads
```

> WORKED: A 1&nbsp;HP well pump draws ~2,000&nbsp;W running but can surge ~6,000&nbsp;W for 1–2 seconds. If it might run alongside ~2,000&nbsp;W of other loads, you want roughly an **8&nbsp;kW peak, so ≈8&nbsp;kW × 1.25 ≈ 10&nbsp;kW continuous** inverter with **~20&nbsp;kW surge** capability. A 10&nbsp;kW split-phase inverter/charger fits.

> RULE: For a whole home you almost always want **120/240&nbsp;V split-phase** output (or two stacked inverters) to run 240&nbsp;V loads (well pump, dryer, some HVAC). A single 120&nbsp;V inverter can't.

## Step 7 — Charge Controller Sizing

Size the MPPT controller(s) to the array and bank voltage.

```
Controller output current (A) = Array DC watts / Battery bank voltage
```

> RULE: Choose a controller whose **max input voltage (Voc, cold-corrected)** comfortably exceeds your string's worst-case cold Voc, and whose **output current rating** exceeds the array-watts ÷ bank-voltage figure with margin. Cold raises Voc—size for the coldest expected morning. See [DIY Electrical Calculations](diy-electrical-calcs.md) for cold-Voc correction.

> TIP: For large arrays, split into **multiple MPPT controllers** (per orientation or per string group). This improves redundancy and lets you mix tilts/azimuths.

## Step 8 — Generator and AC-Coupling Backup

Even a well-sized off-grid system needs backup for the worst week.

- **AC-coupled / generator input** — most inverter/chargers accept generator AC input, pass it through to loads, *and* use it to charge the battery. The inverter manages transfer automatically.
- **Generator sizing** — size to cover loads **plus** battery charging current. Undersized generators "hunt" and charge slowly.
- **AC coupling of extra PV** — you can AC-couple a grid-tie inverter onto an off-grid inverter's output, but you must have a way to **shed/throttle that PV** when the battery is full (frequency-shifting). Get this right or you'll over-charge the bank.

> WARNING: **Never back-feed a generator into household wiring without a proper transfer mechanism.** Improper generator connection can backfeed lines and kill utility workers or you. Use the inverter/charger's AC input or a listed transfer switch.

> SAFETY: Generators emit **carbon monoxide.** Site them outdoors, away from windows/intakes, never in a garage or enclosed space, and install CO alarms in the home.

## Step 9 — Big-Load Strategy

The loads that wreck off-grid budgets: **well pumps, HVAC, and electric resistance heat.**

| Load | Why it's hard | Strategy |
|------|---------------|----------|
| **Well pump** | High surge, 240&nbsp;V, runs on demand | Split-phase inverter; consider a soft-start; pump to a **cistern/pressure tank** so the pump runs midday on solar, not on battery at night. |
| **HVAC / AC** | Large continuous + surge load | **Mini-split (inverter) heat pumps** with soft-start; size carefully; run on solar surplus. Consider zoning. |
| **Electric resistance heat** | Enormous continuous draw | **Avoid running primary heat off batteries.** Use propane/wood/diesel for space and water heat; reserve electricity for the heat *pump*, not resistance elements. |
| **Electric range/oven/dryer** | High power, often 240&nbsp;V | Prefer propane range; use **opportunity loads**—run the dryer midday when the sun is up and batteries are full. |

> RULE: **Heating with off-grid electricity is the most expensive thing you can do.** Every kWh of resistance heat is a kWh of battery and panel you have to buy. Heat with fuel; cool and pump with efficient inverter-driven motors run on solar surplus.

> TIP: Design for **opportunity/diversion loads**—water heating, EV charging, extra well pumping—that automatically soak up midday solar surplus instead of dumping it.

## Step 10 — Monitoring

Off-grid means you *are* the utility. Monitoring is not optional.

- **Battery monitor / shunt** — true SoC via coulomb counting, not just voltage.
- **BMS telemetry** — per-cell voltages, temperatures, balance status.
- **Inverter/controller data** — production, consumption, generator runtime, faults.
- **Remote/alerting** — get notified before you run the bank flat or before a cell drifts.

> RECOMMENDATION: Pick components that share a common monitoring ecosystem so you see PV, battery, and loads on one screen. Blind off-grid operation leads to dead banks and damaged cells.

## Code for Permanent Off-Grid Dwellings

Off-grid does **not** mean code-exempt. A permanent dwelling almost always requires permits and inspection.

> CRITICAL — relevant NEC articles:
> - **Article&nbsp;690** — Solar Photovoltaic Systems: array wiring, rapid shutdown where required, grounding (690.47), disconnects (690.13), overcurrent (690.9).
> - **Article&nbsp;706** — Energy Storage Systems: battery disconnects, working space, labeling, and (recent cycles) BMS documentation and SCCR labeling. Article&nbsp;480 covers storage batteries.
> - **Article&nbsp;710** — Stand-Alone Systems: in recent NEC cycles the stand-alone requirements that used to live in 690.10 now sit in **710.15**. Covers system capacity, supplying multiple voltages, and the unique requirements of systems with no utility source.

> RULE: Confirm which **NEC edition your AHJ has adopted**—jurisdictions lag the national cycle by years, and requirements (rapid shutdown, ESS listing, labeling) differ between editions. Battery rooms may also fall under **NFPA&nbsp;855**. See [DIY Battery Builds](diy-battery-builds.md) for the UL-listing realities of DIY storage.

## Full Worked Whole-Home Example

```
GIVEN
  Measured/estimated loads ......... 6,710 Wh/day
  System efficiency ................ 0.80
  Autonomy ......................... 2 days
  Usable DoD (LiFePO4) ............. 0.80
  Cold capacity factor ............. 0.90
  Bank voltage ..................... 48 V
  December PSH (site, winter tilt) . 3.2 sun-hours
  Array derate ..................... 0.78

1) ADJUSTED DAILY ENERGY
   6,710 / 0.80 = 8,388 Wh/day  (~8.4 kWh/day)

2) BATTERY BANK
   Usable needed   = 8,388 x 2 days        = 16,776 Wh
   Nominal (DoD)   = 16,776 / 0.80         = 20,970 Wh
   Cold-derated    = 20,970 / 0.90         = 23,300 Wh (~23.3 kWh)
   Bank Ah @ 48V   = 23,300 / 48           = ~486 Ah
   -> Build/buy ~25 kWh of 48V LiFePO4 (e.g., 2x 280Ah 48V packs ~= 28.7 kWh,
      giving comfortable margin). See DIY Battery Builds.

3) ARRAY (December-sized)
   Array DC W = 8,388 / (3.2 x 0.78) = 8,388 / 2.496 = ~3,360 W
   -> Round UP and over-panel for marginal days: install ~4.0-4.5 kW DC.
      (Worst-month sizing + growth buffer.)

4) CHARGE CONTROLLER(S)
   Output A = 4,200 W / 48 V = ~87 A
   -> One 100A MPPT, or split across two controllers for redundancy.
      Verify cold Voc against controller max input (see DIY Electrical Calcs).

5) INVERTER/CHARGER
   Largest simultaneous: well pump 2,000 W running (surge ~6,000 W)
     + ~2,000 W other = ~4 kW running, ~8 kW peak.
   Continuous >= 4,000 x 1.25 = 5,000 W; choose headroom for surge.
   -> 6-10 kW split-phase 120/240V inverter/charger, ~2x surge rating.

6) GENERATOR BACKUP
   Cover loads + battery charging. ~7-12 kW propane/diesel generator
   feeding the inverter/charger AC input for extended-overcast weeks.
```

> RESULT: ~4–4.5&nbsp;kW December-sized PV, ~25–28&nbsp;kWh of 48&nbsp;V LiFePO4, a 6–10&nbsp;kW split-phase inverter/charger, ~100&nbsp;A of MPPT, and a propane/diesel generator. This carries a modest, efficient home through a Northern-Hemisphere winter with 2 days of autonomy and generator backstop. Scale storage and PV up for higher loads, colder climates, or longer autonomy.

## Sources & Further Reading

- NREL — [PVWatts Calculator (monthly production & peak sun hours)](https://pvwatts.nrel.gov/)
- NFPA — [NEC (NFPA 70), Articles 690, 706, 710, 480](https://www.nfpa.org/)
- NFPA — [NFPA 855: Stationary Energy Storage Systems](https://www.nfpa.org/)
- IAEI — [2023 NEC and Photovoltaic Power Systems](https://iaeimagazine.org/columns/photovoltaic/2023-national-electrical-code-and-photovoltaic-power-systems/)
- Related pages: [Building Your Own System](diy-overview.md) · [DIY Electrical Calculations](diy-electrical-calcs.md) · [DIY Structural Calculations](diy-structural-calcs.md) · [Sourcing Materials & Kits](diy-sourcing.md) · [DIY Battery Builds](diy-battery-builds.md) · [Battery Energy Storage](battery-storage.md) · [DIY Tools, Testing & Commissioning](diy-tools-testing.md)

---

*Disclaimer: This page is educational only. Off-grid power systems involve lethal DC/AC electrical, fire, and carbon-monoxide hazards; verify all sizing and wiring against current NEC/NFPA codes, manufacturer specifications, and your AHJ, and use licensed professionals for permitted dwelling installations.*
