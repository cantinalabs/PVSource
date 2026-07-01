# Residential Battery & Whole-Home Backup

Adding a battery to a home solar system changes it from a daytime offset machine into something that can keep the lights on during an outage, shift energy into expensive evening hours, and capture solar that the grid no longer pays much for. This page covers why homeowners add storage, the difference between partial and whole-home backup, how to size a battery, AC- vs DC-coupling, the policy drivers in California, generator integration, and the safety codes that govern where a battery can go. For sizing the PV array itself see [Residential Sizing & Calculations](residential-sizing.md); for the storage technology in depth see [Battery Energy Storage](battery-storage.md); for rebates see [Residential Incentives](residential-incentives.md); and for the overall system see [Residential System Design](residential-design.md).

## Why add a battery?

Homeowners install storage for three overlapping reasons, and the reason drives almost every downstream design choice.

- **Backup / resilience.** Keep critical or all loads running when the grid is down. A grid-tied PV system *without* a battery shuts off during an outage (anti-islanding under UL 1741 / NEC 705.40), so solar alone does **not** provide backup.
- **Self-consumption / bill management.** Store midday solar and use it after sunset instead of buying retail power. This matters most where export compensation is low (see NEM 3.0 below).
- **Time-of-use (TOU) arbitrage.** Charge the battery from solar (or cheap off-peak grid power) and discharge during the expensive peak window, lowering the bill regardless of outages.

> **Key point:** A standard grid-tied solar system goes dark in a blackout. If outage protection is the goal, a battery (or a backup-capable inverter) is required — panels by themselves cannot back up a home.

## Partial (critical-loads) vs whole-home backup

The single biggest cost and sizing decision is *how much* of the house you want to keep alive during an outage.

| Approach | What it backs up | Battery/inverter need | Typical cost | Best for |
|---|---|---|---|---|
| **Critical-loads (partial)** | A curated subset: fridge, some lights, internet, furnace fan, well pump, a few outlets | Smaller (often 1 battery, 5 kW inverter) | Lower | Most homes; short, frequent outages |
| **Whole-home** | The entire main panel, including large 240 V loads | Larger inverter + more kWh; sometimes load management | Higher | Long outages, all-electric homes, comfort priority |
| **Managed whole-home** | Whole panel, but smart panel/relays shed big loads as needed | Mid (whole-home feel, fewer batteries) | Mid | Homes wanting whole-home feel on a budget |

**Critical-loads** backup is the traditional, economical path: a subpanel is created and only the chosen circuits move to it. **Whole-home** backup keeps everything energized but the inverter must be able to start and run the worst-case surge (well pumps, AC compressors, EV chargers) and the battery bank must carry the energy. Many modern systems split the difference with **load management** — a smart electrical panel or controllable relays that drop the air conditioner or EV charger during an outage so a modest battery can still "feel" whole-home.

> **Warning:** Motor-starting surge, not steady-state watts, is what trips an undersized backup system. A 1.5 hp well pump or a central AC compressor can demand 3-6x its running current for a fraction of a second. Size the inverter (and battery power rating) for surge, not just average load.

## Critical-loads subpanel, backup gateway & automatic transfer

When the grid fails, the system must instantly disconnect from the utility (to protect line workers and to stop trying to power the whole neighborhood) and then re-energize only the backed-up loads. The hardware that does this:

- **Backup gateway / automatic transfer switch (ATS).** Senses the outage, opens the grid connection, and forms its own "island" grid from the battery/inverter. Transfer is typically seamless (sub-second, no flicker) for battery systems, unlike a generator ATS that has a brief gap.
- **Critical-loads subpanel (backup panel).** A second load center fed by the inverter. During normal operation it's powered through the gateway from the grid + solar; during an outage it's powered by the battery. Only circuits in this panel stay alive.
- **Smart panel option.** Products that replace the main panel with individually controllable circuits, allowing whole-home backup with software-based load shedding instead of a separate subpanel.

```
Normal operation:
Grid --> Backup Gateway --> Main Panel
                |--> Critical Loads Subpanel (also fed by battery/inverter)
Solar + Battery --> Inverter --> Gateway

Outage:
Grid X (disconnected by gateway)
Battery/Inverter --> Gateway --> Critical Loads Subpanel only
```

## Sizing: backup vs self-consumption vs TOU

The target capacity depends entirely on the goal.

- **For backup:** size to *energy over the expected outage duration* for the critical loads. Multiply backed-up load (kWh/day) by the number of outage days you want to ride through (and add solar recharge if the outage is sunny).
- **For self-consumption:** size to *capture the evening load* — roughly the kWh you use between sunset and the next morning's solar. Oversizing past one night's use yields little benefit on a daily basis.
- **For TOU arbitrage:** size to *the energy you can shift out of the peak window* — peak-hour kWh, capped by the price spread that makes cycling worthwhile.

| Goal | Sizing driver | Rule of thumb |
|---|---|---|
| Backup | Critical-load energy x outage days | 1-3 days of critical loads |
| Self-consumption | Evening/overnight load | One night of use (~one battery) |
| TOU arbitrage | Peak-window energy | Enough to cover the peak hours |

> **Key point:** A battery sized for self-consumption (one night) and one sized for multi-day backup can differ by 3x or more. Decide the priority before quoting capacity.

## AC-coupling vs DC-coupling at home

How the battery connects to the solar determines efficiency, retrofit ease, and behavior during an outage. This is covered in depth in [Battery Energy Storage](battery-storage.md); the residential summary:

| | **AC-coupled** | **DC-coupled** |
|---|---|---|
| Battery has its own inverter | Yes | No — shares a hybrid inverter with PV |
| Solar charges battery via | PV inverter (AC) -> battery inverter (DC) | Directly (DC), one conversion |
| Round-trip efficiency | Slightly lower (extra conversions) | Slightly higher |
| Retrofit to existing solar | Easy — bolt on alongside the existing inverter | Usually requires replacing the inverter |
| Charging during a grid outage | Works well | Works well |
| Typical use | Adding storage to an existing array | New build, single hybrid inverter |

**Bottom line:** retrofits usually go **AC-coupled** (leave the existing PV inverter, add a battery with its own inverter). New all-in-one installs often go **DC-coupled** with a hybrid inverter for slightly better efficiency and a cleaner single-box design.

## Why NEM 3.0 makes batteries attractive in California

California's **Net Billing Tariff (NBT)**, commonly called **NEM 3.0**, took effect April 15, 2023 for the major investor-owned utilities (PG&E, SCE, SDG&E). It pays exported solar at the utility's **avoided cost** rather than the retail rate.

- Under the prior **NEM 2.0**, exports earned roughly retail value (often **$0.30-$0.40/kWh**).
- Under **NEM 3.0**, exports are paid on the **Avoided Cost Calculator (ACC)** — typically only about **$0.05-$0.08/kWh** in most hours, with much higher values reserved for scarce summer-evening peak hours. That is roughly a 75% cut in the value of midday exports.
- Export rates are locked to your **PTO "vintage" year** for **9 years**, based on that year's ACC schedule.

The practical effect: exporting cheap midday solar to the grid and re-buying expensive evening power is a losing trade under NEM 3.0. A battery lets the homeowner **store midday solar and self-consume it during the high-value evening peak**, which is where the economics now live. This is why attachment rates for storage on new California residential solar jumped dramatically after NBT. Pairing storage can also stack with the **Self-Generation Incentive Program (SGIP)** rebate — see [Residential Incentives](residential-incentives.md).

> **Key point:** Under NEM 3.0, the question shifted from "how much solar?" to "how much solar *plus storage*?" Self-consumption, not export, is the goal.

## Generator integration

Batteries and standby generators are complementary, not mutually exclusive. A battery gives instant, silent, fuel-free backup for short outages; a generator provides effectively unlimited runtime for multi-day events. Common configurations:

- **Battery + manual/portable generator.** Simple, cheap. The generator can sometimes be connected through an inlet to recharge the battery during a long, cloudy outage.
- **Battery + automatic standby generator.** Some backup gateways/inverters support a **generator input**: the battery handles instant transfer and short outages, and the generator auto-starts to recharge the battery and carry larger loads during extended outages.
- **Compatibility caution.** Not every inverter accepts a generator, and inverter-style ("clean power") generators pair better with battery chargers than older non-inverter units. Check listed compatibility and the required transfer equipment.

> **Warning:** Never backfeed a generator into a panel through a regular outlet ("suicide cord"). All generator connections require a proper transfer switch or interlock per NEC, both for safety and to prevent backfeeding the utility.

## Permitting, UL 9540, NFPA 855 & siting

Residential storage is regulated for fire safety. The governing documents:

- **UL 9540** — the product safety/listing standard for the complete energy storage system. Listed residential batteries are evaluated to UL 9540 (cells/modules typically to **UL 1973**, and fire-propagation behavior to **UL 9540A** large-scale fire testing).
- **NFPA 855 / International Fire Code (IFC)** — the *installation* standard: capacity limits per location, separation distances, and fire protection of surrounding construction.

Residential NFPA 855 highlights (always verify with your **Authority Having Jurisdiction**, since adoption and local amendments vary):

| Item | Typical residential requirement |
|---|---|
| Max stored energy per **individual unit** | **20 kWh** |
| Aggregate limit, **inside** living/utility space | **40 kWh** |
| Aggregate limit, **attached/detached garage, outdoors, or exterior wall** | **80 kWh** |
| Unit-to-unit / unit-to-opening separation | commonly **3 ft** (can be reduced only with a UL 9540A test report accepted by the AHJ) |
| Unfinished walls/ceilings near unit | protect with **5/8 in. Type X gypsum board** |
| Smoke/heat detection | interconnected detection in the room/garage housing the ESS |

**Siting practicalities:** garages, exterior walls, and outdoor pads are the most common locations; bedrooms and their closets are generally prohibited. Mind the manufacturer's temperature range (extreme heat/cold cuts capacity and life), provide working clearance, and keep the unit away from exits and means of egress. A permit and inspection are required, and most jurisdictions want the UL 9540 listing documentation on the plan set.

> **Warning:** Capacity limits and separation rules vary by AHJ and by which code edition (e.g., NFPA 855 2023 vs 2026) your jurisdiction has adopted. The numbers above are common values, not universal law — confirm locally before designing.

## Worked example: critical-loads backup sizing

```
GOAL: Back up critical loads for a 2-day grid outage (winter storm, limited sun).

Step 1 - List critical loads and estimate daily energy:
  Refrigerator                    ~1.5 kWh/day
  Furnace blower (gas heat)       ~1.0 kWh/day
  Well pump (intermittent)        ~1.0 kWh/day
  Lighting (LED, evening)         ~0.5 kWh/day
  Internet/router + phones        ~0.3 kWh/day
  Misc outlets (small loads)      ~0.7 kWh/day
  --------------------------------------------
  Daily critical-load energy   =  5.0 kWh/day

Step 2 - Energy for the outage duration:
  5.0 kWh/day x 2 days        =  10.0 kWh

Step 3 - Account for usable depth and round-trip losses:
  Assume usable capacity ~ 90% of nameplate and ~90% round-trip.
  Required nameplate = 10.0 / (0.90 x 0.90) = ~12.3 kWh

Step 4 - Battery count (using ~13.5 kWh nameplate units):
  12.3 / 13.5 = 0.9  ->  ROUND UP to 1 battery

Step 5 - Check POWER, not just energy:
  Worst-case simultaneous surge = well pump start (~3 kW surge)
  + fridge compressor (~1 kW surge) + base load (~1 kW)
  Continuous ~2 kW, surge peak ~5-6 kW.
  Confirm the inverter's continuous (e.g., 5 kW) AND surge
  (e.g., 7 kW for a few seconds) ratings cover this. OK.

RESULT: 1 battery (~13.5 kWh) on a 5 kW backup inverter,
feeding a critical-loads subpanel, covers a 2-day outage.
Daytime solar recharge would extend runtime further if sunny.
```

If the goal were whole-home backup of an all-electric home (heat pump, EV, electric range), the energy and especially the *power* requirements rise sharply, often pushing the design to 2-3 batteries plus load management — illustrating why the partial-vs-whole-home decision dominates the quote.

## Sources & Further Reading

- [California Net Billing Tariff (NBT) / NEM 3.0 overview — FranklinWH](https://www.franklinwh.com/knowledge-center/california-net-billing-tariff-nbt)
- [Net Billing Tariff (NEM 3.0) — Tesla Support](https://www.tesla.com/support/energy/solar-panels/learn/net-billing)
- [Installation Codes and Requirements for Energy Storage Systems (ESS) FAQs — UL Solutions](https://www.ul.com/resources/installation-codes-and-requirements-energy-storage-systems-ess-faqs)
- [NFPA 855 Standard Development — NFPA](https://www.nfpa.org/codes-and-standards/nfpa-855-standard-development/855)
- [NFPA 855 ESS Unit Spacing Limitations — Mayfield Renewables](https://www.mayfield.energy/technical-articles/code-corner-nfpa-855-ess-unit-spacing-limitations/)
- [New Residential Energy Storage Code Requirements — Sustainable Energy Action Committee](https://sustainableenergyaction.org/resources/new-code-requirements-for-residential-energy-storage-systems/)
- [SGIP Battery Rebate + NEM 3.0 stacking guide — ElecGuys](https://www.elecguys.net/post/sgip-battery-rebate-nem-30-california-2026)

---

*This page is educational and not tax or electrical advice. Energy storage and backup installations require permits, a licensed electrician, and compliance with your local code (NEC, NFPA 855/IFC) and Authority Having Jurisdiction.*
