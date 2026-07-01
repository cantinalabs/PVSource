# Tiny Home & Off-Grid Cabin Solar

An off-grid tiny home or cabin is a small electrical utility you build and operate yourself. Unlike a grid-tied house — where the grid is an infinite battery that smooths over every cloudy week — an off-grid system must carry you through your **worst-month sun and your longest cloudy stretch** on stored energy alone, or send you out to the generator. That single fact drives every design decision: you size for the bad days, not the average ones, and you spend relentless effort shrinking loads so the array and battery bank stay affordable.

This page covers off-grid load budgeting, designing for autonomy and worst-month sun, 24 V/48 V architecture, all-in-one vs. split systems, generator backup and AC coupling, propane/efficiency trade-offs, battery bank sizing and DoD, grid-tie capability, and code differences between a cabin and a dwelling-on-wheels. Use it with [DIY Electrical Calculations](diy-electrical-calcs.md) for the math, [DIY Structural Calculations](diy-structural-calcs.md) for mounting, [Sourcing Materials & Kits](diy-sourcing.md) for parts, and [Building Your Own System](diy-overview.md) for the overview. For a mobile dwelling specifically, see [RV, Van & Mobile Solar](diy-rv-van.md).

> **Safety first:** Off-grid battery banks store enormous energy and can deliver thousands of amps into a short circuit. Use **AIC-rated overcurrent protection** at every battery, keep the **battery room ventilated** (and, for any flooded lead-acid, explosion-rated — hydrogen gas), and treat the system as the hazardous DC power source it is. A permanent cabin is a **dwelling** and its electrical system is governed by the **NEC** (Articles 690, 705, 706, 710, plus general wiring rules) and your local AHJ. Permit and inspect it.

## Off-Grid Load Budgeting

Everything starts with an honest, itemized **load budget** in watt-hours per day. Off-grid, every watt-hour you consume must be generated and stored, so this is where you save the most money — by *not* needing it.

| Load | Typical power | Hours/day | Notes |
|---|---|---|---|
| Efficient fridge (DC or high-eff AC) | 40–120 W (duty-cycled) | 24 (~⅓ duty) | Often the single biggest 24 h load |
| LED lighting | 5–15 W each | 4–6 | Cheap and easy to keep low |
| Laptops / electronics / Wi-Fi | 30–100 W | 3–8 | Router runs 24 h |
| Water/well pump | 250–1,500 W | 0.2–1 | High surge on start — sizes the inverter |
| Phone/tool charging | 10–60 W | varies | Small |
| Washing machine | 300–500 W | cycle | Run on sunny days |
| TV / entertainment | 30–150 W | 2–4 | |
| **Electric heat / resistance** | 1,000–5,000 W | — | **Avoid off-grid — use propane/wood** |
| **Electric water heater** | 3,000–4,500 W | — | **Avoid — use propane/solar thermal** |
| **AC / heat pump** | 500–1,500 W+ | seasonal | Big load; size carefully |

> **Rule of thumb:** The cheapest kWh off-grid is the one you never use. Pick a DC or high-efficiency fridge, all-LED lighting, and **move heat and hot water to propane or wood**. Resistance heating off solar is almost always uneconomic — it can double or triple your array and bank.

Sum every row to a realistic **daily Wh** (with margins for inverter idle and seasonal variation). Then everything below scales from that number.

## Designing for Autonomy & Worst-Month Sun

Two parameters convert your daily load into hardware:

1. **Worst-month peak sun hours (PSH).** Size the *array* against the month with the least usable sun — typically December/January in the northern hemisphere — not the annual average. NREL/PVWatts-style data gives your site's monthly PSH. Design to the worst month or you run the generator all winter.
2. **Days of autonomy.** How many cloudy days the *battery bank* carries the loads with no charging. This depends on climate and tolerance:

| Climate | Typical days of autonomy |
|---|---|
| Sunny (SW US deserts) | 2–3 |
| Moderate (Mountain West, Texas) | 3–5 |
| Cloudy (Pacific NW, New England) | 5–7+ (or plan on a generator) |

More autonomy = bigger, more expensive bank. Most full-time cabins land at **2–4 days plus a generator** rather than buying a giant bank to survive a week of clouds — batteries are usually more expensive per kWh of rare backup than a generator and fuel.

## 24 V vs. 48 V Off-Grid Architecture

Small/seasonal cabins (under ~2–3 kWh/day, small inverter) can run **24 V**. Most full-time off-grid dwellings should be **48 V**:

- **48 V halves the current** of 24 V (and quarters 12 V) for the same power — thinner, cheaper copper, lower losses on the longer runs in a building, and access to the best **all-in-one 48 V inverter/chargers**.
- 48 V is the practical standard for whole-cabin systems above roughly 5 kWh/day.
- The penalty is fewer native-48 V DC appliances — but in a cabin you mostly run AC loads through the inverter anyway, so this matters far less than in a van.

> **Rule of thumb:** Tiny/occasional cabin under ~2–3 kWh/day → **24 V** can be fine. Full-time dwelling or anything over ~5 kWh/day → **48 V**, almost always.

## All-in-One vs. Split Systems

**All-in-one (hybrid inverter/charger).** One unit integrates the inverter, MPPT solar charge controller(s), AC battery charger, and generator/grid input with a transfer switch. Clean install, one display, one vendor. Many 48 V hybrids also handle generator auto-start signaling and can be stacked for split-phase 120/240 V or more power. Trade-off: single point of failure and vendor lock-in.

**Split / component system.** Separate **charge controller(s) + inverter** (and a separate AC charger if needed). More wiring, but you can mix best-in-class parts, add MPPTs as you grow the array, and replace one failed component without losing the whole system. Favored where reliability and field repair matter.

Both work. All-in-ones dominate new cabin builds for simplicity; component systems appeal to those who want modular, repairable redundancy. Reputable makers in the off-grid hybrid space include Victron, Schneider, Outback, EG4, and Sol-Ark; verify current models and availability when you buy.

## Generator Backup & AC Coupling

A generator is the off-grid system's insurance against a long cloudy stretch and the reason you don't need a battery bank big enough to survive a week of rain.

- A **hybrid inverter/charger** accepts the generator on its AC input, runs loads, and **charges the battery bank** from the generator (battery charging is the efficient way to use a generator — it runs at load, then shuts off). Many can **auto-start** the generator on low battery.
- **AC coupling:** A grid-tie-style inverter can be coupled on the AC side of an off-grid inverter so excess solar charges the bank through the inverter; useful for adding solar to an existing setup, but requires a hybrid that supports it and proper frequency-shift control to throttle the grid-tie inverter when the bank is full. DC coupling (MPPT into the bank) is simpler for most new builds.
- Size the generator to the **charger + load** draw, and feed it through the inverter's transfer switch — never back-feed an off-grid inverter's output with a generator.

> **Caution:** Generator and inverter AC sources must never be paralleled by hand-wiring — use the inverter's built-in or a listed transfer switch. Run generators outdoors only; carbon monoxide is lethal.

## Propane & Efficiency: Shrinking the Array

The fastest way to cut system cost is to move energy-hungry loads off electricity:

- **Heat:** wood stove or propane heater instead of resistance/heat-pump electric.
- **Cooking:** propane range instead of induction (or use induction sparingly on sunny days).
- **Water heating:** propane on-demand (tankless) or solar thermal instead of an electric tank.
- **Refrigeration:** propane absorption fridge in very small/remote cabins, or an efficient DC compressor fridge.
- **Clothes drying:** a line; gas dryer if needed.

Every kWh/day you remove from the electrical budget can cut hundreds of watts of panel and a meaningful slice of battery. A propane bill is almost always cheaper than the extra solar+storage to do the same job electrically off-grid.

## Battery Bank Sizing & Depth of Discharge

Size the bank from daily load, autonomy, and depth of discharge (DoD):

```
Usable_kWh_needed = Daily_kWh x Days_autonomy
Battery_kWh       = Usable_kWh_needed / DoD
Battery_Ah        = (Battery_kWh x 1000) / System_V

LiFePO4 DoD ~ 0.80 (use 0.80 for long cycle life)
Lead-acid (flooded/AGM) DoD ~ 0.50 (don't go deeper routinely)
```

LiFePO4 is now the default for off-grid: deeper usable DoD, thousands of cycles, no venting, low maintenance, and tolerant of partial charging. Flooded lead-acid is cheaper up front but heavier, shorter-lived, needs ventilation and watering, and you can only use ~half of it — making LFP usually cheaper per usable kWh over its life.

> **Rule of thumb:** For LiFePO4, plan ~**80% usable DoD**; for lead-acid, plan ~**50%**. Always keep a charge source margin — design so solar refills the bank in the worst usable month, not just summer.

### Worked Off-Grid Sizing Example

```
A small full-time off-grid cabin, 48 V LiFePO4, moderate-cloudy climate.

STEP 1 — DAILY LOAD
  Efficient fridge .................. 1.0 kWh
  Lighting (LED) .................... 0.3 kWh
  Electronics / Wi-Fi / laptops ..... 0.6 kWh
  Well pump ......................... 0.4 kWh
  Misc (TV, charging, small kitchen)  0.7 kWh
  Inverter idle/overhead ............ 0.5 kWh
                          DAILY TOTAL ~3.5 kWh
  Design for ........................ 4.0 kWh/day
  (Heat, hot water, cooking = PROPANE/WOOD, not in this budget.)

STEP 2 — BATTERY BANK (48 V, LiFePO4, 80% DoD)
  Days autonomy = 3 (moderate-cloudy, with generator backup)
  Usable_kWh = 4.0 x 3 = 12.0 kWh
  Battery_kWh = 12.0 / 0.80 = 15.0 kWh
  Battery_Ah  = (15.0 x 1000) / 48 = ~313 Ah at 48 V
  -> ~15 kWh / ~300 Ah of 48 V LiFePO4

STEP 3 — SOLAR ARRAY (worst-month sizing)
  Worst-month PSH ~3.5; system efficiency ~0.75
  Array_W = (Daily_Wh / PSH) / efficiency x design_margin
          = (4,000 / 3.5) / 0.75 x 1.25
          = 1,143 / 0.75 x 1.25
          ~ 1,905 W  ->  install ~2,000 W (2 kW) of panels
  (Summer will overproduce; the generator covers deep-winter gaps.)

STEP 4 — CHARGE CONTROLLER / HYBRID INVERTER
  MPPT/hybrid output amps >= Array_W / Battery_V
                            = 2,000 / 48 = ~42 A
  -> 50-60 A MPPT (or a 48 V hybrid sized to the array)
  Inverter sized to largest surge (well-pump start) + base load,
  commonly a 3-5 kW 48 V hybrid for this cabin.

STEP 5 — GENERATOR
  ~3-5 kW generator on the hybrid's AC input for winter/long cloudy
  spells, charging the bank and running loads through the transfer switch.
```

Run your own load budget, voltage drop, conductor sizing, and overcurrent protection on [DIY Electrical Calculations](diy-electrical-calcs.md), and array mounting loads on [DIY Structural Calculations](diy-structural-calcs.md). This example is a starting point, not a spec.

## Is It Grid-Tie-Capable?

- A pure **off-grid** inverter/charger has no grid connection and is not designed to export — it just makes its own AC island.
- A **hybrid inverter** can often be configured for **grid-tie + battery backup** if you later get a utility connection: it can use the grid as a charge source and (with the right model and utility permission) export. This requires a **listed grid-interactive inverter**, utility interconnection approval, and NEC compliance (Article 705 for interconnection, anti-islanding, rapid shutdown per 690.12, etc.).
- If grid power is a possibility down the road, buying a **grid-capable hybrid** now (even running it off-grid) preserves the option without re-buying the inverter.

> **Caution:** Never connect any inverter to utility wiring without a listed grid-interactive (anti-islanding) unit and utility interconnection approval. Back-feeding the grid with an off-grid inverter can kill line workers and is illegal.

## Code: Cabin (Dwelling) vs. Dwelling-on-Wheels

| | Permanent cabin / tiny home on foundation | Tiny home / dwelling on wheels (THOW) |
|---|---|---|
| **Governing rules** | NEC as a dwelling (Art. 690 PV, 705 interconnection, 706 storage, 710 stand-alone, plus general wiring); local building/electrical permits | If RVIA-built or treated as an RV: NFPA 1192 / NEC 551; otherwise a gray area — many AHJs want NEC dwelling rules |
| **Inspection** | Building + electrical permit and inspection expected | Varies wildly by jurisdiction; some treat as RV, some as dwelling, some as neither |
| **Battery / ESS** | NEC 706 energy storage rules, listing, location, ventilation | RV/marine practice (ABYC) often applied; smaller banks |
| **Grounding** | Grounding electrode system (ground rods) at the structure | Chassis/equipment bonding per RV practice; no earth ground while mobile |

A **permanent off-grid cabin** is a dwelling: expect to permit it and follow the NEC (and use **listed** components — inverters, batteries, disconnects, rapid-shutdown where required). A **tiny home on wheels** falls into a regulatory gray zone — some jurisdictions classify it as an RV (NFPA 1192 / NEC 551 — see [RV, Van & Mobile Solar](diy-rv-van.md)), others as a dwelling, others not at all. **Confirm with your local AHJ before you build**; it affects everything from grounding to inspection to insurance.

> **Warning:** Skipping permits and listed equipment on a permanent dwelling can void insurance, fail at resale, and — more importantly — kill someone or burn the cabin down. Energy storage and PV codes (NEC 690/706/710, rapid shutdown) exist for first-responder and occupant safety. Follow them.

## Sources & Further Reading

- [Off-Grid Cabin Battery Banks — LiFePO4 Sizing Guide — startOFFgrid](https://startoffgrid.com/cabin-battery-banks)
- [Solar Battery Bank Sizing — Unbound Solar](https://www.unboundsolar.com/solar-information/battery-bank-sizing)
- [How to Size an Off-Grid Solar System for Your Cabin — Off Grid Simplicity](https://offgridsimplicity.com/how-to-size-a-simple-off-grid-solar-system-for-a-cabin-or-tiny-home/)
- [Off-Grid Solar System Sizing Calculator + Guide — SurgePV](https://www.surgepv.com/blog/off-grid-solar-system-sizing-calculator)
- [Off-Grid Cabin Solar System: Complete Design & Build Guide — Off Grid Authority](https://offgridauthority.com/off-grid-cabin-solar-system-guide/)
- [AIC Ratings for LiFePO4 — Class T — MRBF (DIY Solar Forum)](https://diysolarforum.com/threads/aic-ratings-for-lifepo4-class-t-mrbf.96739/)
- NFPA 70 (NEC) Articles 690, 705, 706, 710, 712 — read the edition your AHJ enforces
- NFPA 1192 / NEC Article 551 (for dwellings on wheels treated as RVs)

*Educational/reference only. Follow manufacturer instructions, the NEC (and NFPA 1192/NEC 551 where applicable) and your local building/electrical codes and permits; batteries and DC systems are hazardous and off-grid AC/DC wiring can be fatal.*
