# Reading Your Electric Bill & Rate Plans

Your electric bill is the single most important document for planning a home solar system. It tells you how much energy you use, when you use it, what you pay for it, and which **rate schedule** governs your account. Before you can size a system (see [Residential Sizing & Calculations](residential-sizing.md)) or estimate savings, you need to be able to read this bill line by line.

This page explains how a typical U.S. residential electric bill is structured, how rate plans work, and how the bill changes after you install solar and enroll in a compensation program (see [Net Metering, Net Billing & Rate Structures](grid-net-metering.md)).

## The anatomy of a residential bill

Most residential bills separate charges into two broad categories, even when a single utility handles both.

### Supply vs. delivery

- **Supply (generation)** — the cost of the actual electricity (the electrons). In deregulated markets you may buy supply from a competitive third-party supplier while the utility still delivers it.
- **Delivery (distribution/transmission)** — the cost of moving electricity over poles and wires to your home, maintained by your local utility.

> Why this matters for solar: net-metering and net-billing rules often treat the supply and delivery portions differently. Some charges (called **non-bypassable charges**) apply to every kilowatt-hour you pull from the grid regardless of how much solar you export.

### Common line items

| Line item | What it is | Typical unit |
|---|---|---|
| **Fixed / customer / basic charge** | A flat monthly fee just for being connected | $/month |
| **Energy charge** | Cost per unit of energy consumed | $/kWh |
| **Tiered (inclining-block) rates** | Higher per-kWh price as usage climbs into higher tiers | $/kWh by tier |
| **Time-of-use (TOU) rates** | Price varies by time of day/season | $/kWh by period |
| **Demand charge** | Charge based on your highest instantaneous power draw | $/kW |
| **Non-bypassable charges** | Public-purpose, wildfire, nuclear-decommissioning, etc., fees per kWh delivered | $/kWh |
| **Minimum bill / minimum delivery charge** | A floor you pay even if net usage is near zero | $/month or $/day |
| **Taxes & franchise fees** | State/local utility taxes | varies |

## Reading your usage (kWh)

Electricity is billed in **kilowatt-hours (kWh)** — one kilowatt of power used for one hour. Your bill shows:

- **Beginning and ending meter reads** (or a total for the period)
- **Billing days** in the cycle (usually 28–33)
- **Total kWh used** for the period
- Often a **13-month usage graph** comparing this month to prior months

To estimate annual consumption, add up 12 months of kWh. A rough shortcut if you only have one bill:

```
Annual kWh (rough) = monthly kWh x 12
```

This is only a starting point — usage swings seasonally with heating and cooling. Always use a full 12 months when sizing.

## Rate plan types

### Flat (single-rate) plans

One price per kWh at all times. Simplest to model. Solar savings equal the retail rate times self-consumed and (under retail net metering) exported kWh.

### Tiered / inclining-block plans

Price rises as you cross usage thresholds (baseline allowances). Solar shaves off your most expensive top-tier kWh first, so early production is worth the most.

```
Example tiers:
  Tier 1 (0-500 kWh):    $0.14/kWh
  Tier 2 (501-1000 kWh): $0.19/kWh
  Tier 3 (1000+ kWh):    $0.26/kWh
```

### Time-of-use (TOU) plans

Prices vary by **period** (peak, off-peak, sometimes a "super off-peak" or "partial-peak") and by **season**. Under modern net-billing rules, TOU dramatically affects solar value: energy you export at a $0.55 peak evening rate is worth far more than midday export at $0.06.

| Period | Typical hours (summer) | Illustrative price |
|---|---|---|
| Peak | 4 p.m.–9 p.m. | $0.55/kWh |
| Off-peak | 9 p.m.–4 p.m. | $0.30/kWh |

> On many TOU plans, solar production peaks midday but the highest prices are in the evening — a mismatch that makes batteries attractive (see [Residential Battery & Whole-Home Backup](residential-battery-backup.md)).

### Demand charges (residential)

Traditionally commercial, but a growing number of utilities offer or require **residential demand charges** on some TOU or EV plans. A demand charge bills your single highest **kW** draw in the period (often measured over a 15- or 60-minute interval), independent of total kWh.

```
Demand charge = highest measured kW in billing period x $/kW rate
```

Solar rarely reduces a demand charge much, because your peak draw often occurs after sunset. Batteries can shave demand peaks. If your plan has a demand charge, model it separately — solar-only savings will be overstated if you ignore it.

### Minimum bills

Many utilities impose a **minimum bill** (e.g., a fixed dollar amount or a per-day charge) so that even a customer who exports nearly all their energy still pays something for grid access. This sets a floor on how low solar can drive your bill.

## Finding your rate schedule

Your **rate schedule** (also called a tariff or rate code) is a short identifier such as `E-1`, `TOU-D-4-9`, `RS`, or `R-1`. Find it by:

1. Looking on the bill itself — often near the account summary or in fine print ("Rate Schedule," "Rate," or "Service Plan").
2. Logging into your online account.
3. Searching your utility's website for its **tariff book** and matching the code.

The full tariff document lists every charge, tier boundary, TOU window, and eligibility rule. This is the authoritative source — marketing summaries often omit non-bypassable charges and minimum bills.

## Interval data and smart meters

Most homes now have a **smart meter (AMI)** that records usage in short intervals (typically hourly or every 15 minutes). Utilities usually let you download this **interval data** (often called Green Button data) as a CSV.

Interval data is far more useful than monthly totals because it shows:

- Exactly **when** you use energy (critical for TOU modeling)
- Your **load shape** — how much runs midday vs. evening
- Your **peak kW** if you have a demand charge

> Tip: Download 12 months of interval data before requesting solar quotes. It lets an installer model TOU savings and battery value accurately instead of guessing.

## How your bill changes after solar

Once your system is interconnected and you enroll in a compensation program, new lines appear. The exact mechanics depend on whether you have **retail net metering**, a **net-billing tariff (e.g., NEM 3.0)**, or another structure — covered in depth in [Net Metering, Net Billing & Rate Structures](grid-net-metering.md).

Common post-solar bill features:

- **Net usage** — grid imports minus exports (under net metering) or valued separately (under net billing).
- **Export credits** — dollars or kWh credited for energy you send to the grid. Under retail net metering these offset imports 1:1; under net billing they are valued at lower **avoided-cost** rates that vary hourly.
- **Non-bypassable charges** — you still pay these per kWh you import even if your net bill is otherwise zero.
- **Minimum bill / fixed charge** — still applies.
- **True-up** (annual settlement) — on many solar tariffs the utility tracks credits and charges monthly but **settles the balance once a year** at the **true-up**. You may see small monthly bills (non-bypassable charges, fixed fees) plus one larger annual true-up statement reconciling net energy for the year.

> Watch for banked credits expiring or being cashed out at a low wholesale rate at true-up. Oversizing a system beyond your annual usage often yields little because excess credits are compensated poorly.

## Worked example: before and after solar

Assume a home on a flat rate: **$0.20/kWh** energy, **$10/month** fixed charge, plus **$0.02/kWh** non-bypassable charges bundled into the energy rate. Annual usage: **10,000 kWh**.

### Before solar

```
Energy:  10,000 kWh x $0.20 = $2,000
Fixed:   $10 x 12           = $120
Annual bill                 = $2,120
```

### After solar (retail net metering)

A 7 kW system produces **10,000 kWh/year**, offsetting all consumption on an annual net basis. But non-bypassable charges still apply to gross imports (assume 6,000 kWh imported over the year, with 6,000 kWh exported offsetting them 1:1 for energy but not for the non-bypassable portion).

```
Net energy (imports offset by exports):     $0 net energy charge
Non-bypassable charges: 6,000 kWh x $0.02 =  $120
Fixed:                  $10 x 12          =  $120
Annual bill (approx.)                     =  $240
```

Savings: about **$2,120 - $240 = $1,880/year**, not the full $2,120 — because fixed and non-bypassable charges survive.

### After solar (net-billing tariff, illustrative)

Under a net-billing tariff, exports are credited at hourly avoided-cost rates (often around $0.05–$0.10/kWh) rather than the $0.20 retail rate. The same physical system self-consumes 4,000 kWh (worth $0.20 each) and exports 6,000 kWh (worth, say, $0.07 each on average), while still importing 6,000 kWh in evenings at $0.20.

```
Self-consumption saved: 4,000 kWh x $0.20 = $800 avoided
Export credits:         6,000 kWh x $0.07 = $420 credit
Evening imports:        6,000 kWh x $0.20 = $1,200 charge
Fixed + non-bypassable                    ~ $240
Approx. annual bill = $1,200 - $420 + $240 = $1,020
Approx. savings     = $2,120 - $1,020      = $1,100/year
```

> Same panels, very different savings. Under net billing, **adding a battery** to store midday solar for evening use can recover much of the lost value.

## Reading the bill to size a system

The bill drives sizing:

1. **Sum 12 months of kWh** to get annual consumption.
2. **Identify the rate plan** (flat/tiered/TOU, plus demand charges and minimum bill).
3. **Pull interval data** to see your load shape and self-consumption potential.
4. **Note non-bypassable and fixed charges** — these set the floor solar cannot eliminate.
5. **Model under your actual compensation program**, not a generic assumption.

See [Residential Sizing & Calculations](residential-sizing.md) for turning these numbers into a system size, and [Residential Incentives](residential-incentives.md) for how credits and rebates affect the economics.

## Sources & Further Reading

- [EnergySage — Understanding your electricity bill](https://www.energysage.com/electricity/)
- [Aurora Solar — Explaining and modeling California's Net Billing Tariff (NEM 3.0)](https://aurorasolar.com/blog/explaining-and-modeling-californias-net-billing-tariff-nem-3-0/)
- [U.S. Department of Energy — Green Button interval data](https://www.energy.gov/data/green-button)
- [Solar.com — What is NEM 3.0](https://www.solar.com/learn/nem-3-0-proposal-and-impacts-for-california-homeowners/)
- Your utility's published **tariff book / rate schedules** (authoritative source)

---

*This page is educational only and is not tax, financial, or legal advice. Rate structures, tariff codes, and non-bypassable charges vary widely by utility and change over time. Verify all details against your current bill and your utility's official tariff before making decisions.*
