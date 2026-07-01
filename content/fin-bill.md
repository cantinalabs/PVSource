# Utility Bills, Rates & Savings Analysis

Solar savings do not come from the panels — they come from the **utility bill** the panels offset. Before you can size a system, price a [PPA](fin-ppa.md), or model an [LCOE](fin-lcoe.md), you have to read the bill correctly and understand exactly which charges a solar system can and cannot reduce. This article walks through the anatomy of a utility bill, the mechanics of net metering versus net billing, and two fully worked savings analyses — one residential, one commercial with demand charges.

## Why the Bill Matters More Than the System

A common beginner mistake is to divide annual electricity spend by annual usage to get a single "blended rate" (say, $0.15/kWh), then multiply that rate by expected solar production to estimate savings. This almost always overstates savings, because:

- Not every dollar on the bill is a per-kWh **energy charge** that solar can offset.
- **Fixed charges** and many **demand charges** remain even after solar is installed.
- Exported energy is often credited at a **lower rate** than imported energy is charged.
- **Time-of-use (TOU)** pricing means the value of a kWh depends on the hour it is produced or consumed.

The correct approach is to decompose the bill into its components and offset each one according to its own rules.

## Anatomy of a Utility Bill

Most bills separate into three buckets. Understanding which buckets solar touches is the entire game.

| Charge type | Unit | What it pays for | Does solar reduce it? |
|---|---|---|---|
| **Fixed / customer charge** | $/month | Metering, billing, basic grid connection | No (rarely) |
| **Energy charge** | $/kWh | Actual energy consumed | Yes — primary savings lever |
| **Demand charge** | $/kW | The single highest instantaneous draw in the period | Partially, and unreliably |
| **Riders / surcharges** | mixed | Fuel adjustment, public benefit, taxes | Varies; often per-kWh |

> **Key point:** Solar reduces energy (kWh) charges directly and demand (kW) charges only sometimes. Fixed charges survive solar almost entirely. A bill that is mostly fixed and demand charges offers far less solar savings than a bill of the same total that is mostly energy charges.

### Fixed Charges

A **fixed charge** (also called a customer charge, basic service charge, or connection fee) is a flat monthly amount — commonly $10–$30 for residential and $50–$500+ for commercial — that you pay regardless of usage. Solar does not offset it. Even a net-zero solar home still pays the fixed charge each month. See [Utility Rate Design & Tariffs](grid-rate-design.md) for why utilities are shifting more revenue into fixed charges.

### Energy Charges and Rate Tiers

The **energy charge** is the per-kWh price for consumption and is where solar delivers most of its value. Energy charges come in several structures:

- **Flat rate:** one price per kWh at all times (e.g., $0.14/kWh).
- **Tiered (inclining block):** price rises as monthly usage climbs past thresholds. For example, $0.12/kWh for the first 500 kWh, $0.18/kWh for the next 500 kWh, and $0.28/kWh above 1,000 kWh.
- **Time-of-use (TOU):** price varies by hour, with expensive **peak** windows (often late afternoon/evening) and cheap **off-peak** windows (overnight).

> **Tiered rates favor solar** because production shaves off the *most expensive* top tiers first. A customer whose usage pushes into a $0.28/kWh tier saves at that top-tier rate on every kWh solar removes — not at the blended average.

### Time-of-Use and the Timing Problem

Under TOU, solar production peaks around midday, but many peak-price windows now fall in the early evening (e.g., 4–9 p.m.), *after* the solar peak. This mismatch means a solar-only system may produce heavily during moderately priced hours and produce little during the highest-priced hours. Two responses:

1. **Battery storage** shifts midday production into the evening peak, capturing the high TOU price.
2. **Load shifting** moves flexible consumption (EV charging, pool pumps, laundry) into midday to self-consume solar.

### Demand Charges

A **demand charge** bills the single highest average power draw (kW) over a short interval (typically 15 minutes) during the billing period. It is common on commercial and industrial tariffs and can represent 30–70% of a commercial bill. Demand charges are the hardest for solar to offset because:

- The demand peak may occur on a cloudy moment, at night, or during a startup surge when solar is not producing.
- Reducing your *peak* even once requires solar (or storage) to be producing at exactly that instant.

Solar without storage provides **unreliable** demand reduction. Solar *with* storage can reliably shave demand peaks and is often justified largely on demand-charge savings. This is central to [C&I financing](commercial-financing.md) decisions.

## Net Metering vs. Net Billing: The Value of an Exported kWh

The single biggest driver of solar savings — after the underlying rate — is how the utility credits energy you **export** to the grid.

### Net Energy Metering (NEM)

Under classic **net metering**, exported kWh are credited at the **full retail rate** — the same price you pay to import. Your meter effectively runs backward. One exported kWh cancels one imported kWh. This is the most favorable structure and is why legacy NEM markets produced dramatic solar savings.

### Net Billing (e.g., California NEM 3.0)

Under **net billing**, exports are credited at an **avoided-cost / export rate** that is typically far below retail. In California's Net Billing Tariff (often called NEM 3.0), export credits are set by an Avoided Cost Calculator and vary by hour and season.

> Under net billing, midday export credits commonly fall to roughly **$0.05–$0.08/kWh** even while the retail import price is $0.30–$0.40+/kWh. Export credits can spike much higher (well over $1/kWh) during scarce summer-evening peaks, but production is minimal then without storage. ([Aurora Solar](https://aurorasolar.com/blog/explaining-and-modeling-californias-net-billing-tariff-nem-3-0/), [Tesla](https://www.tesla.com/support/energy/solar-panels/learn/net-billing))

The practical consequences of net billing:

- **Self-consumption becomes king.** Every kWh you use on-site avoids the full retail rate; every kWh you export earns only the low export rate. The value gap can be 5–8x.
- **Storage economics improve.** A battery lets you store cheap midday overproduction and discharge it during expensive evening hours, converting a $0.06 export into a $0.40 avoided import.
- **System sizing changes.** Under NEM, oversizing to bank excess was fine. Under net billing, oversizing beyond on-site load has sharply diminishing returns.

### Escalation

Utility rates rise over time. A savings analysis must apply a **rate escalation** assumption — the annual percentage by which retail rates grow. Historically many U.S. utilities have escalated in the 2–4%/year range, though this varies widely by region and is not guaranteed. Escalation matters because a solar system's savings in year 20 are measured against a much higher utility rate than in year 1.

> **Modeling caution:** Aggressive escalation assumptions (5%+) are a common way to inflate a solar proposal's lifetime savings. Use conservative, locally supported figures and always show a sensitivity case. This is the same lever that makes PPA [escalators](fin-ppa.md) attractive or dangerous.

## Worked Example 1: Residential Savings Analysis

**Setup.** A California-style household on a net-billing TOU tariff.

```
Annual consumption:        12,000 kWh
Annual solar production:   10,000 kWh (well-sized to load)
Fixed charge:              $15/month = $180/year
Retail energy (blended):   $0.32/kWh
Midday export credit:      $0.06/kWh
Rate escalation:           3%/year
```

**Step 1 — Split production into self-consumed vs. exported.**
Without a battery, assume 55% of production is consumed on-site in real time and 45% is exported:

```
Self-consumed: 10,000 x 0.55 = 5,500 kWh
Exported:      10,000 x 0.45 = 4,500 kWh
```

**Step 2 — Value each bucket at its correct rate.**

```
Self-consumption savings: 5,500 kWh x $0.32 = $1,760
Export credit value:      4,500 kWh x $0.06 = $270
Year-1 bill savings:                          $2,030
```

**Step 3 — Note what solar does NOT remove.**
The $180/year fixed charge remains. The household's post-solar bill is not zero.

**Step 4 — Add a battery (illustrative).**
Suppose a battery shifts 3,000 kWh of would-be exports into evening self-consumption at $0.40/kWh peak:

```
Shifted energy new value:  3,000 kWh x $0.40 = $1,200
Lost export credit:        3,000 kWh x $0.06 = $180
Net gain from battery:                          $1,020/year
New year-1 savings:        $2,030 + $1,020    = $3,050
```

The battery nearly doubles year-1 savings under net billing — a direct consequence of the retail-to-export value gap. Over 25 years with 3% escalation, the cumulative savings difference compounds substantially.

> **Takeaway:** Under net billing, the naive "10,000 kWh x $0.32 = $3,200" estimate overstates solar-only savings by ~58%. The correct figure is $2,030 because exports are credited far below retail.

## Worked Example 2: Commercial Savings Analysis (With Demand Charges)

**Setup.** A small warehouse on a commercial TOU tariff with demand charges.

```
Annual consumption:        400,000 kWh
Annual solar production:   300,000 kWh
Energy charge:             $0.14/kWh
Demand charge:             $18/kW-month
Monthly peak demand:       200 kW (before solar)
Fixed charge:              $200/month = $2,400/year
```

**Step 1 — Energy (kWh) savings.**
Assume 90% of production is self-consumed during business hours (commercial daytime load aligns well with solar), 10% exported at a $0.04 avoided-cost rate:

```
Self-consumed: 300,000 x 0.90 = 270,000 kWh x $0.14 = $37,800
Exported:      300,000 x 0.10 =  30,000 kWh x $0.04 = $1,200
Annual energy savings:                                 $39,000
```

**Step 2 — Demand (kW) savings — the hard part.**
The building's peak demand is 200 kW. Whether solar reduces it depends on whether solar is producing *at the moment* the peak occurs. Two scenarios:

- **Peak occurs midday (solar producing):** solar reliably shaves demand. Suppose it reduces peak from 200 kW to 150 kW.
- **Peak occurs at 6 p.m. (solar fading) or on a cloudy day:** solar shaves little or nothing.

Model conservatively. Assume solar-only reliably shaves just **20 kW** of demand across the year:

```
Demand savings: 20 kW x $18 x 12 months = $4,320/year
```

**Step 3 — Total solar-only savings.**

```
Energy savings:   $39,000
Demand savings:    $4,320
Total:            $43,320/year
Fixed charge:     $2,400/year still owed
```

**Step 4 — Add storage to attack demand charges.**
A battery dispatched to cap demand can reliably shave, say, 100 kW rather than 20 kW:

```
Demand savings with storage: 100 kW x $18 x 12 = $21,600/year
Incremental demand savings vs. solar-only:      $17,280/year
```

For this warehouse, storage roughly quadruples the demand-charge savings — often the single largest line item in the storage business case. This is why C&I storage projects are frequently justified on demand management, not energy arbitrage.

> **Commercial takeaway:** Always decompose a commercial bill into energy, demand, and fixed. Solar reliably attacks energy; demand savings require production to coincide with peaks and are best captured with storage. Ignoring the demand-charge structure produces wildly optimistic proposals.

## A Checklist for Any Savings Analysis

1. Pull **12 months** of billing data (usage and dollars), not a single month.
2. Identify the exact **tariff schedule** and confirm energy, demand, and fixed components.
3. Determine the **export regime**: full-retail net metering vs. avoided-cost net billing.
4. Split production into **self-consumed** vs. **exported** and value each correctly.
5. Model **demand savings conservatively** unless storage is included.
6. Apply a **defensible escalation** rate and show a low-escalation sensitivity case.
7. Remember the **fixed charge** never disappears.

For how these savings translate into a financing decision, see [Homeowner Financing 101](residential-financing.md) and [C&I Financing](commercial-financing.md). For the underlying cost-per-kWh comparison, see [LCOE & Levelized Cost Metrics](fin-lcoe.md). For the broader context, start at the [Solar Finance & Economics Overview](fin-overview.md).

## Sources & Further Reading

- [Explaining and modeling California's Net Billing Tariff (NEM 3.0) — Aurora Solar](https://aurorasolar.com/blog/explaining-and-modeling-californias-net-billing-tariff-nem-3-0/)
- [Net Billing Tariff (NEM 3.0) — Tesla Support](https://www.tesla.com/support/energy/solar-panels/learn/net-billing)
- [Solar Billing Plan — PG&E](https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html)
- [NEM 3.0 Explained — SmartEnergyUSA](https://www.smartenergyusa.com/blog/california-nem-3-net-billing-tariff-explained/)
- [Understanding NEM 3.0 — Enphase](https://enphase.com/blog/homeowners/understanding-nem-30-and-future-net-energy-metering)

> **Disclaimer:** This article is for educational purposes only and does not constitute financial, tax, legal, or investment advice. Utility rate structures, tariffs, and export-credit rules vary widely by utility and change frequently. Consult your utility's current tariff and a qualified professional before making decisions.
