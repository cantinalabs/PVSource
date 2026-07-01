# Fleet & EV Charging + Solar for Business

Electrifying a commercial vehicle fleet is, at its core, an **energy and load-management problem** — not just a vehicle-purchasing problem. The depot where vehicles return each night becomes a new, very large electrical load that hits the business with **demand charges** it has never seen before. On-site solar and storage are the most effective tools for taming that load. This page covers fleet electrification basics, Level 2 vs. DC fast charging at scale, how demand charges hit charging depots, sizing solar and storage for a depot (with a worked example), make-ready infrastructure and utility programs, managed/smart charging, microgrid resilience, and the incentive landscape including NEVI.

For the demand-charge math and battery dispatch logic in depth, see [Commercial Storage & Demand-Charge Management](commercial-storage.md). For sizing the PV array itself, see [Commercial System Design](commercial-design.md). For the utility service upgrades and approvals a depot triggers, see [Commercial Permitting & Interconnection](commercial-permitting.md).

## Fleet Electrification Basics

Most commercial fleets are **return-to-base**: vehicles (delivery vans, transit buses, school buses, yard trucks, last-mile fleets) run a daily route and come back to a central depot. This pattern is ideal for electrification because charging happens predictably overnight at one location you control, yielding the lowest per-kWh cost and maximum operational control.

The core planning sequence:

1. **Profile the duty cycle** — daily miles per vehicle, dwell time at the depot, route timing.
2. **Convert miles to energy** — `kWh/day = daily miles ÷ efficiency (mi/kWh)`.
3. **Determine charging window** — how many hours the vehicles sit available to charge.
4. **Size charging power** — energy needed ÷ available hours sets the charger fleet and the peak site load.
5. **Manage that peak** — with managed charging, solar, and storage, so the new load does not blow up the utility bill or require an oversized service upgrade.

> **Key point:** The cheapest kW of charging infrastructure is the one you never have to install. Sequencing chargers (managed charging) over a long overnight dwell window dramatically lowers the peak power — and therefore the service upgrade, the make-ready cost, and the demand charges.

## Level 2 vs. DC Fast Charging at Scale

| Attribute | Level 2 (AC) | DC Fast Charging (DCFC) |
|---|---|---|
| **Power per port** | ~7–19.2 kW | ~50–360+ kW |
| **Best for** | Long overnight dwell (vans, cars, buses) | Short dwell, high-utilization, in-route top-ups |
| **Cost per port** | Low | High (hardware + civil + service capacity) |
| **Demand-charge exposure** | Lower (spread load) | High (large instantaneous draw) |
| **Depot role** | Workhorse for return-to-base | Opportunity/fast-turn charging |

For a return-to-base depot with long overnight dwell, **Level 2 is usually the workhorse** — it is far cheaper and spreads load over many hours, naturally flattening demand. DC fast charging is reserved for vehicles with short dwell or in-route needs, but it concentrates a large draw into a short window, which is exactly what spikes demand charges. Many depots use a **hybrid**: mostly L2 for the overnight fleet, a few DCFC ports for fast turns.

## How Demand Charges Hit a Charging Depot

A commercial electricity bill has two main parts:

- **Energy charges** — `$/kWh` for total consumption.
- **Demand charges** — `$/kW` billed on the single highest power draw (often the peak 15-minute interval) in the billing period.

When dozens of chargers energize at once, the depot's **peak kW** can jump several-fold overnight, and the demand charge is set by that brief peak — even if it lasts minutes. In modeled C&I depot designs, **demand-charge savings made up 55–68% of total operating savings** from solar-plus-storage, versus 32–45% from energy-charge offset. Managing demand is therefore the dominant economic lever at a charging depot.

```
   Without management            With managed charging + storage
   peak ~ all chargers at once   peak flattened across the window

   kW |     ___                  kW |
      |    |   |                    |    _______________
      |    |   |                    |   |               |
      |____|   |____               |___|               |____
        time -->                       time -->
   (one tall spike sets the         (low, flat plateau sets a
    demand charge)                   much smaller demand charge)
```

### How solar + storage manage it

- **Solar** offsets daytime energy and, on fleets that charge during the day (e.g., school buses idle midday), shaves the daytime peak directly.
- **Storage** is the key tool for overnight-charging depots: the battery charges from PV surplus (or cheap off-peak grid power) during the day, then **discharges during the overnight charging peak** to cap grid import. NREL has found that a battery can reduce a depot's peak power demand by **up to ~67%**, slashing both demand charges and the size of the required service upgrade. As a rule of thumb, a 200 kWh battery can shave ~100 kW for ~2 hours off a managed peak.

> **Warning:** Solar alone does little for a depot that charges overnight in the dark. The demand-charge value comes overwhelmingly from **storage + managed charging**; PV mainly offsets energy and improves the incentive stack. Size the battery to the *peak-shaving* job, not just to PV self-consumption.

## Sizing Solar & Storage for a Depot — Worked Example

```
DEPOT: 30 delivery vans, return-to-base, charge overnight

Step 1 — Energy per vehicle per day
  Daily route        = 90 miles
  Van efficiency     = 1.5 mi/kWh
  Energy/van/day     = 90 / 1.5            = 60 kWh
  Add 15% buffer     = 60 × 1.15           ≈ 69 kWh/van
  Fleet energy/day   = 69 × 30             ≈ 2,070 kWh/day

Step 2 — Charging power (UNMANAGED, all at once)
  If all 30 vans charge simultaneously at 11.5 kW (L2):
  Naive peak         = 30 × 11.5           = 345 kW  <-- big demand charge

Step 3 — Charging power (MANAGED over the dwell window)
  Dwell window       = 10 hours (8 pm – 6 am)
  Power if spread    = 2,070 kWh / 10 h    = 207 kW (average)
  With smart sequencing, design peak       ≈ 230 kW
  (Managed charging cut the peak from 345 kW to ~230 kW)

Step 4 — Solar sizing (offset energy)
  Target: offset a meaningful share of 2,070 kWh/day
  Assume ~4.5 peak-sun-hours, PR ~0.80:
  PV needed for ~1,000 kWh/day:
  kWp = 1,000 / (4.5 × 0.80)               ≈ 280 kWp PV
  (Constrained in practice by available roof/canopy/land area)

Step 5 — Storage sizing (shave the overnight peak)
  Goal: cut the ~230 kW grid peak toward ~130 kW
  Shave depth        = 100 kW
  Over the peak block of ~3 hours:
  Energy needed      = 100 kW × 3 h        = 300 kWh battery
  Power rating       ≥ 100 kW

RESULT (illustrative): ~280 kWp PV + ~300 kWh / 100 kW battery,
  with managed charging holding the design peak near ~130 kW
  instead of an unmanaged 345 kW.
```

> **Key point:** The three levers compound. **Managed charging** flattens the spike, **storage** shaves what remains, and **solar** offsets energy and strengthens the incentive case. Skipping any one leaves money — and an oversized service upgrade — on the table.

## Make-Ready Infrastructure & Utility Programs

**"Make-ready"** is the electrical infrastructure between the utility and the charger stub: transformers, switchgear, conduit, panels, trenching, and service upgrades — everything *up to* but often not including the charger itself. Make-ready is frequently the largest and slowest line item in a depot project, and it is the focus of major utility incentive programs.

Many utilities run **make-ready programs** that fund a large share — sometimes **up to 100%** — of the utility-side and even customer-side infrastructure costs, specifically to accelerate fleet and commercial EV adoption. These programs can dramatically improve depot economics, but they have application windows, eligibility rules, and queue times, so engage the utility **early** — make-ready and the associated service upgrade often drive the project's critical path. (See [Commercial Permitting & Interconnection](commercial-permitting.md) for the service-upgrade process.)

## Managed / Smart Charging & Load Management

**Managed (smart) charging** is software that controls *when* and *how fast* each vehicle charges so total site draw never exceeds a set limit, while still meeting every vehicle's departure deadline.

- **Load management / sharing** — dynamically allocates available capacity across active sessions so the site stays under its power ceiling, avoiding a costly service upgrade.
- **Time-of-use optimization** — shifts charging into low-price / low-demand windows.
- **Active managed / utility-controlled charging** — the fleet cedes some control to the utility or a service provider, which adjusts load in real time for grid conditions, often in exchange for incentive payments.

Reported results: fleets using smart charging see **up to ~40% lower electricity costs** and meaningfully higher charger utilization. Managed charging is the **lowest-capital** demand-control tool — it is software, not steel — and should be the first lever pulled before sizing storage.

## Microgrid & Resilience

A depot with PV, storage, and controls is most of the way to a **microgrid**. Adding islanding capability lets the depot keep charging critical vehicles during a grid outage — important for transit, school transportation, emergency, and logistics fleets where downtime is unacceptable. The same battery that shaves demand charges day-to-day provides **backup resilience** during outages, improving the business case by stacking value: demand-charge management + energy arbitrage + resilience + (where available) grid-service revenue.

## Incentives (High Level)

| Program / mechanism | What it supports | Notes |
|---|---|---|
| **NEVI Formula Program** | Public-access EV charging (and make-ready) along corridors | $5B program through FY2026; covers up to 80% of eligible cost. Disrupted by a 2025 funding pause, restored by court order and FY2026 apportionment (~$885M) flowing in 2026. |
| **Utility make-ready programs** | Utility- and customer-side infrastructure | Often up to 100% of make-ready; varies widely by utility/state. |
| **Section 30C (charger credit)** | EV charging equipment | Credit for qualified charging property (eligibility/zoning rules apply). |
| **Section 48E ITC** | Solar + storage | Investment tax credit for the PV and battery assets. |
| **MACRS depreciation** | Solar + storage | Accelerated depreciation on eligible equipment. |

For solar-plus-storage at a depot, the combined **Section 48E ITC + Section 30C charger credit + MACRS** has been estimated to recover roughly **50–65% of project cost**, with modeled paybacks of about **6–9 years** depending on tariff, fleet size, and the incentive stack.

> **Warning:** Federal EV and clean-energy incentive rules — especially NEVI funding levels and tax-credit eligibility — have been volatile and are subject to legislative and court action. Verify current program status, deadlines, and eligibility for your jurisdiction before relying on any figure here. Treat all percentages as planning estimates, not guarantees.

## Depot Single-Line (ASCII)

```
                 UTILITY SERVICE
                       |
                  [ Utility Meter ]
                       |
                 [ Main Switchgear / Service Panel ]
                       |
        +--------------+--------------+----------------+
        |              |              |                |
   [ Solar PV ]   [ Battery     ]  [ EV Charging   ]  [ Facility
   [ inverter  ]  [ Storage     ]  [ Distribution  ]    loads ]
   [ (canopy/  ]  [ (BESS) +    ]  [ Panel         ]
   [  roof)    ]  [ inverter    ]        |
        |              |          +------+------+------+ ...
        |              |          |      |      |      |
        |              |        [L2]   [L2]   [L2]  [DCFC]
        |              |         van    van    van   fast
        +------ Energy Mgmt / Managed-Charging Controller ------+
              (caps site peak, dispatches battery, sequences chargers)
```

## Sources & Further Reading

- [Alternative Fuels Data Center — NEVI Formula Program](https://afdc.energy.gov/laws/12744)
- [NREL — EV Charging and the Impacts of Electricity Demand Charges (PDF)](https://docs.nrel.gov/docs/fy22osti/82738.pdf)
- [U.S. DOE FEMP — Managed EV Charging for Federal Fleets](https://www.energy.gov/femp/managed-ev-charging-federal-fleets)
- [Utility Dive — Utilities use managed charging to harness EV load flexibility](https://www.utilitydive.com/news/as-ev-load-grows-utilities-use-managed-charging-to-harness-flexibility-lo/816859/)
- [Sierra Club — State Progress on EV Charging (2026)](https://www.sierraclub.org/articles/2026/04/state-progress-ev-charging-momentum-building-job-far-done)
- [GreenCars — NEVI Charging Network Reboots in 2026](https://www.greencars.com/news/nevi-charging-network-reboots-in-2026)

*This page is general educational information, not engineering, financial, or legal advice; verify all incentive programs, utility tariffs, and sizing assumptions against current sources and qualified professionals for your specific project.*
