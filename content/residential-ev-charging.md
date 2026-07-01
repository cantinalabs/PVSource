# EV Charging + Solar at Home

Pairing an electric vehicle with rooftop solar is one of the highest-value moves a homeowner can make: sunlight that would otherwise export to the grid for pennies can instead displace gasoline. But a home EV charger is also one of the largest continuous loads a house will ever add, so it interacts directly with panel capacity, service size, and the National Electrical Code. This page covers charging levels, EVSE selection, sizing solar to cover driving, the load-calculation rules (including the 125% continuous-load rule), panel limits and load management (EVEMS), smart charging on solar, V2H/V2G, and incentives. See also [Residential System Design](residential-design.md), [Residential Sizing & Calculations](residential-sizing.md), [Battery Energy Storage](battery-storage.md), and [Residential Incentives](residential-incentives.md).

## EV charging levels (1 / 2 / 3)

| Level | Voltage / circuit | Typical power | Range added per hour | Where used |
|---|---|---|---|---|
| **Level 1** | 120 V, standard outlet | ~1.4-1.9 kW | ~3-5 miles | Any home outlet; trickle charging |
| **Level 2** | 240 V dedicated circuit | ~7-19 kW (commonly 7-11 kW) | ~20-40 miles | Home/workplace; the home standard |
| **Level 3 (DCFC)** | 400-1000 V DC, commercial | 50-350+ kW | ~150-1000 miles | Public fast-charging stations |

**Level 2 is the practical home standard.** Level 1 works for low-mileage drivers and plug-in hybrids but often can't fully recharge a battery EV overnight. Level 3 DC fast charging requires three-phase commercial service and is essentially never installed at a single-family home.

> **Key point:** For solar pairing, Level 2 is ideal because it can charge during daylight hours fast enough to absorb the array's midday production; Level 1 is too slow to soak up much solar.

## Home EVSE selection

The home unit is the **EVSE** (Electric Vehicle Supply Equipment) — commonly called "the charger," though the actual charger is inside the car. Selection factors:

- **Amperage / circuit size.** Common Level 2 units are 32 A, 40 A, 48 A, or up to 80 A. The EVSE's continuous output must fit the breaker and wire (see the 125% rule below). A 48 A unit needs a 60 A circuit.
- **Hardwired vs plug-in.** Plug-in (NEMA 14-50) is flexible and movable; hardwired is required above 50 A and is often more robust. Units installed outdoors need a NEMA 3R / 4 rating.
- **Smart features.** Wi-Fi scheduling, app control, utility/TOU integration, and **load management** are valuable for solar-aware charging. Look for **ENERGY STAR** and UL listing.
- **Connector.** The U.S. market is transitioning toward the **NACS (J3400)** connector; many new EVSE ship NACS or include adapters. Confirm compatibility with the vehicle.
- **Future-proofing.** Many owners wire a larger circuit (e.g., 60 A) even with a smaller EVSE today, leaving headroom for a faster unit or second vehicle.

## Sizing solar to cover driving

You can size the array to cover both the house and the car. The chain is **miles -> kWh -> panels**.

```
WORKED EXAMPLE: Solar to cover EV driving

Step 1 - Annual (or daily) driving:
  12,000 miles/year  ->  ~33 miles/day average

Step 2 - Miles to kWh (vehicle efficiency):
  Assume 3.5 miles/kWh (typical mid-size EV, real-world).
  33 miles/day / 3.5 mi/kWh = 9.4 kWh/day at the battery

Step 3 - Add charging/AC losses (~10%):
  9.4 / 0.90 = ~10.5 kWh/day from the wall

Step 4 - kWh/day to array size (kW DC):
  Need a location-specific "sun-hours" figure (production ratio).
  Assume 4.5 peak sun-hours/day and 0.80 system derate.
  Daily kWh per kW of array = 4.5 x 0.80 = 3.6 kWh/day per kW DC

Step 5 - Required array for the EV:
  10.5 kWh/day / 3.6 kWh/day per kW = ~2.9 kW DC

Step 6 - Convert to panel count (450 W modules):
  2,900 W / 450 W = 6.4  ->  ROUND UP to 7 panels

RESULT: ~2.9 kW (about 7 x 450 W panels) added to the array
covers ~12,000 miles/year of EV driving in this climate.
This is ADDITIONAL to the panels sizing the home's other loads.
```

Sun-hours and derate are location-specific — see [Residential Sizing & Calculations](residential-sizing.md) for how to find them. The same approach scales to two EVs or to high-mileage drivers (just multiply the daily miles).

## Service & load calculations and the 125% continuous rule

An EVSE is a **continuous load** (operates at maximum current for 3+ hours), so NEC requires the branch circuit and overcurrent device to be rated at **125%** of the EVSE's continuous output (equivalently, the EVSE may load a circuit to no more than **80%** of its rating).

```
125% CONTINUOUS-LOAD SIZING

Example A - 48 A EVSE:
  Circuit/breaker = 48 A x 1.25 = 60 A
  -> 60 A breaker, conductors rated for 60 A continuous duty.

Example B - working backward from an existing 40 A circuit:
  Max continuous EVSE output = 40 A x 0.80 = 32 A
  -> Set the EVSE to no more than 32 A.
```

The bigger question is whether the **service (main panel)** can accept the new load. A dwelling **service/load calculation** (NEC Article 220) adds the EV charger to the home's other loads to confirm the existing service amperage (e.g., 100 A or 200 A) is not exceeded. EV charging at 125% can easily "use up" the remaining capacity on paper — which is where load management comes in.

> **Warning:** Adding a 48 A EVSE to a fully loaded 100 A or 200 A service can force an expensive service upgrade — *unless* a load-management system is used to cap the combined draw. Always run the Article 220 calculation before committing to an EVSE size.

## Panel-capacity limits, load management & EVEMS (NEC 625 / 705)

Two NEC articles govern the EV-plus-house interaction:

- **NEC Article 625** — Electric Vehicle Power Transfer Systems. **625.42** lets the *overall rating* of the installation be limited by an **Energy Management System (EVEMS)** instead of the raw 125% number, when controls are listed and configured per **625.42(A)/(B)** (referencing energy-management provisions, e.g., **750.30 / 625.48**).
- **NEC Article 705** — Interconnection of power-production sources. Relevant because solar (and any EVSE with **power-export/V2H** capability) backfeeds the panel; the **120% busbar rule** (705.12) limits how much combined solar + battery + export can land on a panel's busbar, and **load management** can keep a panel compliant without a busbar/service upgrade.

**EVEMS / load management** is the key enabler. Instead of reserving full 125% capacity for the EVSE at all times, an energy-management system monitors the home's real-time draw and **throttles or pauses EV charging** when other loads spike, so the service is never overloaded. Per the evolving code, when a listed EVEMS actively manages the EV load, the full 125% continuous multiplier need not be reserved against the service — letting many homes add EV charging **without a service upgrade**.

> **Key point:** Load management / EVEMS is often the difference between a simple EVSE install and a multi-thousand-dollar panel or service upgrade. Ask whether the EVSE (or a separate device) can throttle charging to fit the existing service.

Forms load management can take:
- **Smart EVSE with built-in load monitoring** (a CT clamp on the main feed).
- **Circuit-sharing devices** that split one circuit between two EVSEs.
- **Whole-home energy management / smart panels** that prioritize and shed loads.

## Charging on solar: timing, smart/scheduled charging & TOU

To actually charge *from sunlight* (not just "offset" on an annual basis), timing matters:

- **Solar-following / "green" charging.** Some EVSE and inverter ecosystems can modulate charging current to match real-time surplus solar, charging the car only with otherwise-exported energy. This is the most literal "charge on solar."
- **Scheduled charging to midday.** Where the homeowner is home or the car is parked during the day, simply scheduling charging for solar hours captures cheap/free production — especially valuable under **NEM 3.0**, where midday exports are paid only avoided cost (see [Residential Battery & Whole-Home Backup](residential-battery-backup.md)).
- **TOU optimization.** On time-of-use rates, schedule charging for the **off-peak/super-off-peak** window (often overnight) when grid power is cheapest, and **avoid the peak** evening window. If the home also has a battery, it can fill in.
- **Daytime vs overnight reality.** Most cars sit at work or are driven during peak sun. For those owners, a **battery** that stores midday solar and charges the car at night is what truly closes the loop — otherwise overnight charging draws from the grid.

> **Key point:** "Charging on solar" only happens if the car is plugged in *and* charging during daylight, or if a battery shifts midday solar into the charging window. Otherwise the panels just offset on the annual bill, not in real time.

## V2H / V2G (emerging)

Bidirectional charging lets the car's large battery power the home (**V2H, vehicle-to-home**) or export to the grid (**V2G, vehicle-to-grid**). As of 2026 this is real and shipping, but still hardware-specific:

- **V2H-capable vehicles** include the Ford F-150 Lightning and Mustang Mach-E, GM Ultium models (Silverado EV, Sierra EV, Blazer/Equinox EV, Lyriq, Hummer EV), Tesla Cybertruck, Kia EV9, Volvo EX90, and certain Polestar 3.
- **Hardware + integration required.** V2H needs a **bidirectional charger** plus a home-integration/transfer system, and installed costs commonly run **$5,000-$11,000+**. Note that some early integration products have been discontinued, so confirm a currently supported path before buying.
- **Backup runtime is large.** A truck-sized EV battery can run a home for days — far more energy than a typical stationary home battery — making V2H attractive for resilience, though stationary batteries still offer seamless, daily, warranty-clean cycling.
- **V2G programs** exist but are limited to a handful of utility pilots/programs (e.g., select CA, TX, VT, MA, CT, NY programs as of 2026).
- **Warranty.** Major automakers honor the EV battery warranty when used with their certified bidirectional hardware.

> **Warning:** V2H is evolving fast and is vehicle/hardware-locked. Verify the *current* supported equipment and that it is listed for interactive use (NEC 625/705) before relying on a car for home backup.

## Charger incentives

- **Federal.** The §30D / §25E EV purchase credits and the **§30C Alternative Fuel Vehicle Refueling Property Credit** (covering home EVSE in eligible census tracts) were affected by 2025 legislation — verify current status, eligibility, and any sunset dates before relying on them, as several clean-energy credits were curtailed. Note the residential clean energy credit (§25D) for solar/storage itself **ended for systems placed in service after Dec 31, 2025** (see [Residential Incentives](residential-incentives.md)).
- **State / utility.** Many utilities offer **EVSE rebates**, **discounted EV TOU rates**, and **managed-charging** bill credits. These are often the most reliable savings — check your utility and state energy office.

> **Key point:** Incentives for EV charging are volatile right now. Treat any federal credit as "verify before you buy," and lean on utility rebates and EV TOU rates, which tend to be more stable.

## Sources & Further Reading

- [NEC 625 + EVEMS: How Load Management Helps Home EV Charging — NeoCharge](https://getneocharge.com/a/blog/nec-625-evems-energy-management-system-home-ev-charging)
- [NEC 2026 EV Charger Changes — 625.42, 625.48 EVEMS — SparkShift](https://sparkshift.app/learn/nec-2026/ev-charger-changes)
- [NEC Requirements for EV Equipment — EC&M](https://www.ecmweb.com/national-electrical-code/code-basics/article/21276414/nec-requirements-for-ev-equipment)
- [NEC Article 625 (PDF)](https://cdn.lsicloud.net/warshauers/EV%20Chargers/Article-625.pdf)
- [V2H & V2G Guide 2026 — Bidirectional EVs & Chargers — TheChargePort](https://thechargeport.com/v2h-v2g)
- [EV as Home Battery Backup: 2026 Guide to V2H — Recharged](https://recharged.com/articles/ev-as-home-battery-backup/)
- [Residential Clean Energy Credit — IRS](https://www.irs.gov/credits-deductions/residential-clean-energy-credit)

---

*This page is educational and not tax or electrical advice. EV charging installations require permits, a licensed electrician, NEC Article 220/625/705 load calculations, and compliance with your Authority Having Jurisdiction.*
