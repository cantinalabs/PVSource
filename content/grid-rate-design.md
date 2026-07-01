# Utility Rate Design & Tariffs

How a utility structures its rates — the **tariff** — determines exactly what a kilowatt-hour of solar production is worth, when it is worth the most, and whether an on-site system pays back in seven years or seventeen. Two homes with identical arrays and identical usage can see wildly different savings simply because they sit on different rate schedules. Understanding rate design is therefore not an accounting footnote; it is the single most important input to solar and storage economics.

This page explains the components of an electric bill, the major rate structures (flat, tiered, time-of-use, real-time), demand charges and ratchets in depth, the difference between residential and commercial rate classes, how to read a tariff sheet, standby charges for distributed generation, and the reform trends reshaping compensation for exported solar. For how *exported* energy specifically is credited, see [Net Metering, Net Billing & Rate Structures](grid-net-metering.md).

## Why Rate Design Drives Solar Economics

A solar array reduces a customer's bill in two ways: by offsetting energy the customer would otherwise **import** (avoided consumption) and by **exporting** surplus energy for a credit. The value of avoided consumption is set by the *retail* rate structure covered here; the value of exports is set by the *compensation* mechanism covered in [Net Metering, Net Billing & Rate Structures](grid-net-metering.md).

Because most of a solar system's value comes from offsetting the customer's own load, the shape of the retail rate matters enormously:

- A **high volumetric ($/kWh) rate** makes every offset kilowatt-hour valuable — good for solar.
- A **high fixed charge** cannot be offset by production at all — bad for solar payback.
- A **time-of-use rate** rewards production that lines up with expensive hours, and makes storage that shifts energy into those hours especially valuable.
- A **demand charge** cannot be reduced by solar alone in any reliable way, but *can* be shaved by batteries — which is why commercial storage economics hinge on it.

> **Key idea:** Solar offsets energy charges cleanly. It does *not* reliably offset fixed charges or demand charges. The larger the non-energy portion of a bill, the smaller the fraction a solar array can erase.

## Anatomy of an Electric Bill: Rate Components

Almost every tariff is assembled from a handful of standard building blocks. A given rate schedule may use one, several, or all of them.

| Component | Unit | What it recovers | Can solar reduce it? |
|---|---|---|---|
| **Energy (volumetric) charge** | $/kWh | Fuel, generation, and per-kWh delivery | Yes — directly |
| **Fixed / customer charge** | $/month | Metering, billing, basic service | No |
| **Demand charge** | $/kW | Capacity to serve the customer's peak draw | Only with storage / load control |
| **Minimum bill** | $/month floor | Guarantees minimum revenue per account | Sets a floor solar cannot go below |
| **Riders / adjustments** | $/kWh or % | Fuel cost, purchased power, programs, taxes | Partly (the per-kWh portion) |

### Energy (Volumetric) Charge

The **energy charge**, billed in dollars per kilowatt-hour, is the part most customers think of as "the price of electricity." It scales directly with consumption and is the component solar offsets most cleanly. On many bills the energy charge is itself split into **generation** (the cost of producing power) and **delivery / distribution** (the cost of the wires that carry it) line items that add together.

### Fixed / Customer Charge

The **fixed charge** (also "customer charge," "basic service charge," or "connection charge") is a flat monthly amount billed regardless of usage. It nominally recovers the cost of the meter, billing, and a share of the local distribution connection. Residential fixed charges in the U.S. commonly range from roughly $5 to $25 per month, though some utilities have proposed far higher figures. Because no amount of on-site generation reduces it, a rising fixed charge erodes solar savings and is a central battleground in rate-reform proceedings (see below).

### Demand Charge

A **demand charge**, billed in dollars per kilowatt, is based not on *how much* energy a customer uses but on the *highest rate* at which they used it — their peak power draw over a short interval (typically 15 minutes) during the billing month. Demand charges are near-universal for commercial and industrial (C&I) customers and are covered in depth in their own section below.

### Minimum Bill

A **minimum bill** sets a floor on the total monthly charge. If a customer's usage-based charges fall below the floor — as they can for a well-sized solar home in a sunny month — the customer is billed up to the minimum anyway. It functions as a softer, usage-linked alternative to a large fixed charge and similarly caps how low solar can push a bill.

### Riders and Adjustments

**Riders** (also "adjustments," "surcharges," or "clauses") are add-on charges layered on top of the base rate. Common examples include a **fuel/energy cost adjustment** that passes through volatile fuel prices, a **purchased-power adjustment**, charges that fund efficiency or low-income programs, franchise fees, and taxes. Riders billed per kWh *are* offset by solar; flat riders are not. They can add 10–30% or more to the base rate and are easy to overlook when estimating savings.

## Rate Structures: Flat, Tiered, TOU, and Real-Time

The *structure* of the energy charge — how the per-kWh price varies — defines the four major families of rate design.

### Flat (Fixed) Rate

Every kilowatt-hour costs the same, any time of day, any month, at any consumption level. Simple and still common for smaller customers. Solar value is straightforward: each offset kWh is worth the flat rate.

### Tiered (Inclining Block) Rate

The per-kWh price rises as monthly consumption crosses **tier** thresholds (blocks). The first block of usage is cheap; heavy users pay a higher rate on their top blocks.

```
Tiered residential example
Tier 1   0–500 kWh      $0.14/kWh
Tier 2   501–1,000 kWh  $0.20/kWh
Tier 3   1,001+ kWh     $0.30/kWh
```

Tiered rates favor solar for **high consumers**: production shaves off the most expensive top-tier kilowatt-hours first, so the effective value of solar can exceed the average rate.

### Time-of-Use (TOU) Rate

The price changes by **time of day, day of week, and season**. A typical TOU schedule defines **peak**, **off-peak**, and sometimes **partial-peak** periods.

```
Summer TOU example (weekdays)
Off-peak   12 a.m.–4 p.m.   $0.18/kWh
Peak       4 p.m.–9 p.m.    $0.45/kWh
Off-peak   9 p.m.–12 a.m.   $0.18/kWh
```

TOU is now the default residential structure in several states and is standard for solar customers in California and elsewhere. Its interaction with solar is nuanced:

- Historically, midday solar coincided with the peak price — very valuable.
- As solar penetration grew, many utilities **shifted the peak later** (commonly 4–9 p.m.), when solar output has fallen. This "duck curve" mismatch means a west-facing array or, better, a **battery** that discharges into the evening peak captures far more value than a plain south-facing array.

> **Practical consequence:** Under a late-afternoon TOU peak, pairing solar with storage often changes from a nice-to-have into the central economic driver, because the goal shifts from "make the most kWh" to "deliver kWh during the 4–9 p.m. window."

### Real-Time Pricing (RTP)

The per-kWh price tracks the **wholesale market**, updating hourly or even every five minutes. RTP passes maximum price signal — and maximum volatility — to the customer. It is common in C&I settings and offered to some residential customers. It rewards automated, flexible load and storage that can respond to price spikes, and it makes solar-plus-storage economics essentially a real-time arbitrage problem.

| Structure | Price varies by | Best-fit customer | Solar/storage implication |
|---|---|---|---|
| Flat | Nothing | Small, simple loads | Simple 1:1 offset |
| Tiered | Monthly volume | High-usage homes | Shaves costly top tiers |
| TOU | Time / season | Shiftable loads | Storage shifts to peak |
| Real-time | Wholesale market | Flexible C&I, automated homes | Arbitrage / automation |

## Demand Charges and Ratchets in Depth

For most commercial and industrial customers, the **demand charge** is the largest and least intuitive part of the bill. Per the National Renewable Energy Laboratory (NREL), demand charges commonly make up **30–70%** of a C&I electricity bill.

### How Demand Is Measured

The utility records power draw in short **demand intervals** — usually 15 minutes. The single highest interval in the billing period sets the **billing demand** in kilowatts, which is multiplied by the demand rate ($/kW).

```
Demand-charge mechanics
Half-hour of running every machine at once  = 320 kW peak (15-min interval)
Rest of the month never exceeds             = 180 kW
Billing demand for the month                 = 320 kW
Demand charge at $15/kW                       = $4,800
```

Two facilities can consume the *same total energy* yet pay very different demand charges: the one that spreads its load smoothly pays less; the one with brief, sharp spikes pays more. This is why **peak shaving** with batteries — discharging to cover short spikes — is a core commercial storage use case, and why plain solar is unreliable against demand charges (a passing cloud at the wrong moment can leave the peak untouched).

### Demand Charge Types

| Type | Basis |
|---|---|
| **Non-coincident (facility) demand** | Customer's own monthly peak, whenever it occurs |
| **Coincident demand** | Customer's draw at the time of the *system-wide* peak |
| **Time-of-use demand** | Peak measured only during defined on-peak hours |

### Ratchet Clauses

A **ratchet clause** is a provision that sets the billing demand for a given month to at least a fixed *percentage of the highest peak* recorded over a look-back window — typically the prior **11 or 12 months**. Common floors are **60% to 80%** of the historic peak, though some tariffs set them higher.

```
Ratchet example (80% of highest peak in prior 11 months)
August peak (heat wave)        = 800 kW
Ratchet floor for the year     = 0.80 × 800 = 640 kW
Actual January demand          = 300 kW
Billed January demand          = 640 kW  ← the ratchet, not actual usage
```

The consequence is severe: a **single** high-demand event — a heat wave, a startup surge, a failed control that let equipment run simultaneously — can inflate the demand portion of every bill for up to a year afterward, long after actual usage has dropped. Facilities often discover a ratchet only when they notice their billed demand never falls even though their metered demand does.

> **Watch for it:** Ratchets make demand management continuous, not seasonal. Avoiding one bad spike protects a full year of bills. This dramatically raises the value of storage and automated load control at ratcheted sites.

## Residential vs. Commercial (C&I) Rate Classes

Utilities sort customers into **rate classes** with different tariffs. The dividing lines are usually load size and connection voltage.

| Feature | Residential | Small commercial | Large C&I |
|---|---|---|---|
| Typical structure | Flat / tiered / TOU | TOU, sometimes demand | TOU energy + demand + ratchet |
| Demand charges | Rare | Sometimes | Almost always |
| Fixed charge | Modest | Higher | Substantial |
| Metering | Simple or TOU meter | Interval meter | Interval meter, sometimes RTP |
| Solar value driver | Energy offset + exports | Energy + some demand | Demand shaving is often dominant |

The practical takeaway for solar: on residential and small commercial accounts, **energy offset** dominates the value stack, so array size and rate/kWh matter most. On large C&I accounts, **demand charges** frequently dominate, which is why commercial proposals almost always model storage and why a battery's ability to shave a coincident or ratcheted peak can outweigh the value of the solar energy itself.

## How to Read a Tariff Sheet

A utility's tariff is a public document (usually posted on the utility's or regulator's website). Reading it is the only reliable way to know what a customer actually pays. Work through it in order:

1. **Applicability / eligibility** — Which customers may take this rate? (Load size, voltage, class.)
2. **Fixed / customer charge** — The unavoidable monthly amount.
3. **Energy charges** — Flat, tiered, or TOU? Note the exact period definitions and seasonal boundaries.
4. **Demand charges** — Rate per kW, how the interval is measured, and whether TOU-based.
5. **Ratchet language** — Search the sheet for "ratchet," "minimum billing demand," or a percentage of prior peak.
6. **Riders and adjustments** — Add every applicable rider; the base rate alone understates the bill.
7. **Minimum bill** — The floor that caps how low solar can push the total.
8. **DG / standby provisions** — Special charges for customers with on-site generation (below).

> **Tip:** The stated base energy rate is rarely the "all-in" rate. Sum the base energy charge plus all per-kWh riders and taxes to get the true value of an offset kilowatt-hour.

## Standby, Backup, and Departing-Load Charges for Distributed Generation

Customers with on-site generation may be placed on — or offered — special provisions:

- **Standby (backup) charges** compensate the utility for standing ready to serve the customer's full load whenever the on-site system is not producing (at night, during maintenance, on cloudy days). They are often structured as a reservation demand charge based on the customer's connected load.
- **Departing-load or exit charges** recover the customer's share of past utility investments or program costs that other ratepayers would otherwise absorb.
- **Grid-participation / grid-access charges** are fixed monthly charges specifically applied to distributed-generation customers.

These charges can materially affect commercial solar economics and are frequently contested in rate cases because they can offset much of a system's savings. Always confirm whether a standby rate applies before modeling a C&I project.

## Reform Trends: Fixed Charges and Net-Metering Change

Rate design is in active flux across the U.S., driven by utility concerns about revenue recovery as distributed solar grows. Two intertwined trends stand out:

1. **Higher and income-graduated fixed charges.** Utilities in several states have proposed larger fixed charges, and some (notably in California) have advanced **income-graduated fixed charges** that scale with household income. Higher fixed charges shift bills away from the volumetric portion solar can offset, lengthening payback.

2. **Net metering to net billing.** The clearest example is California's **Net Billing Tariff (NEM 3.0)**, effective April 15, 2023, which replaced retail-rate export credit with time-differentiated **avoided-cost** export values — cutting typical export compensation by roughly 75% and adding a modest monthly grid-participation charge. Customers on the prior NEM 1.0/2.0 tariffs are generally grandfathered for about 20 years. As of 2025–2026, the underlying CPUC decision remained the subject of ongoing litigation, with the California Supreme Court in August 2025 directing the appeals court to revisit its earlier ruling. Full detail lives in [Net Metering, Net Billing & Rate Structures](grid-net-metering.md).

Together these trends push solar economics toward **self-consumption and storage**: when exports are worth less and fixed charges are unavoidable, keeping and time-shifting your own production becomes the higher-value strategy.

## Worked Bill Breakdown: A Home

A residential customer on a summer TOU rate with a modest fixed charge and a per-kWh rider. Illustrative rates only.

```
Residential TOU bill (summer month)
Usage:  600 kWh off-peak @ $0.18   = $108.00
        200 kWh peak     @ $0.45   =  $90.00
Fixed customer charge               =  $12.00
Rider (all kWh, 800 @ $0.03)        =  $24.00
------------------------------------------------
Total                               = $234.00

With a solar + storage system that offsets all 200 peak kWh
and 400 of the off-peak kWh:
Remaining off-peak (200 kWh @ $0.18) = $36.00
Peak (fully offset)                  =  $0.00
Fixed customer charge (unavoidable)  = $12.00
Rider (200 kWh @ $0.03)              =  $6.00
------------------------------------------------
Total                               =  $54.00
```

The peak-hour offset does the heaviest lifting, but the **$12 fixed charge survives** no matter how much the system produces — the reason fixed-charge levels matter so much to payback.

## Worked Bill Breakdown: A Business

A small commercial customer on a TOU-energy-plus-demand rate with an 80% ratchet. Illustrative rates only.

```
C&I bill (summer month)
Energy: 30,000 kWh @ $0.16          = $4,800.00
Demand: 320 kW peak @ $15/kW        = $4,800.00
Fixed / customer charge             =   $250.00
Riders (30,000 kWh @ $0.02)         =   $600.00
------------------------------------------------
Total                               = $10,450.00

Note: demand is ~46% of this bill. Solar reduces the ENERGY
portion but, on its own, does little for the 320 kW peak if the
peak occurs on a cloudy afternoon. A battery sized to shave the
peak to 240 kW saves 80 kW × $15 = $1,200/month — and, because of
the 80% ratchet, protects the demand floor for the following year
as well.
```

This is the central lesson of commercial rate design: **the demand charge is where storage earns its keep**, and a ratchet turns a single month's peak-shaving into a year of protection.

## Sources & Further Reading

- [NREL — An Overview of Behind-the-Meter Solar-Plus-Storage Program Design (demand charges)](https://www.nrel.gov/)
- [U.S. Energy Information Administration — Electricity rate and tariff data](https://www.eia.gov/electricity/)
- [Lawrence Berkeley National Laboratory (LBNL) — Tracking the Sun / rate design research](https://emp.lbl.gov/)
- [DemandQ — Decoding Your Electric Utility Bill](https://www.demandq.ai/demandlab/decoding-your-utility-bill/)
- [CPUC — Net Billing Tariff (NEM 3.0)](https://www.cpuc.ca.gov/)
- Related: [Net Metering, Net Billing & Rate Structures](grid-net-metering.md) · [Grid Services, VPPs & Demand Response](grid-services-vpp.md) · [Microgrids & Islanding](grid-microgrids.md) · [How the Electrical Grid Works](fundamentals-grid.md)

> This page is educational and general in nature; verify all rates, riders, ratchet terms, and tariff provisions against your utility's current filed tariff sheet before making financial decisions.
