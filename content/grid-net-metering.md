# Net Metering, Net Billing & Rate Structures

The technical work of interconnection determines whether a system *can* export power. The **rate structure** determines what that export is *worth* — and, more than any other single factor, it drives a behind-the-meter project's economics. This page explains net energy metering, net billing, and buy-all/sell-all; how credits and true-ups work; export and avoided-cost rates; California's NEM 1 → 2 → 3 evolution; demand charges, time-of-use, and value-of-solar tariffs; grandfathering; and the impact across residential and commercial projects, with a worked example.

For how compensation fits into the connection process, see [Grid & Interconnection Overview](grid-overview.md) and [Distribution Interconnection](grid-distribution.md). For grid fundamentals, see [How the Electrical Grid Works](fundamentals-grid.md).

## Three Compensation Models

| Model | How consumption is billed | How exports are valued | Net effect |
|---|---|---|---|
| **Net Energy Metering (NEM)** | Retail rate | **Full retail rate** (1-for-1) | The meter "spins backward"; an exported kWh offsets an imported kWh exactly |
| **Net Billing** | Retail rate (you buy all you consume at retail) | **Lower than retail** — avoided cost, wholesale, or a calculated export rate | Exports worth less than the retail price of consumption |
| **Buy-All / Sell-All** | Retail rate on **all** consumption | A separate **feed-in / sell rate** on **all** production | Production and consumption settled on entirely separate meters and rates |

### Net Energy Metering (NEM)

Under classic **net metering**, every exported kWh earns a credit equal to the **full retail rate**. Because the export credit and the retail purchase price are identical, the customer is economically indifferent to whether a given kWh is self-consumed or exported. This is the most generous model and historically the U.S. default; full retail NEM remains available in many states.

### Net Billing

Under **net billing**, you still buy all the power you consume at the retail rate, but exports are credited at a **lower, separately defined export rate** — typically the utility's **avoided cost** or a wholesale-linked value. This dramatically increases the value of **self-consumption** relative to export, which is why net billing pushes project design toward **batteries** and load-shifting: a kWh used on-site avoids the full retail rate, while a kWh exported earns only the (lower) export rate.

### Buy-All / Sell-All (Feed-In)

Under **buy-all/sell-all**, the customer buys 100% of consumption at retail and sells 100% of production at a separate **feed-in tariff** rate. The two flows never net against each other. This is common for some community and utility-procurement structures and in certain international markets.

## How Credits & True-Ups Work

Most billing arrangements track a running **credit balance** of exports against imports:

- **Netting interval** — exports may net against imports **instantaneously**, **monthly**, or **annually**. Shorter intervals (instantaneous netting, as in net billing) reduce the value of exports because surplus at noon can't offset consumption at night at the same rate.
- **Credit rollover** — excess credits typically carry forward month to month.
- **True-up** — most programs run an annual **true-up** roughly 12 months after activation. At true-up, any leftover credit is **paid out** (often at a low wholesale/avoided-cost rate, e.g., in CA and AZ) or **forfeited** (e.g., in some states like MA and NJ). True-up policy strongly affects whether oversizing an array pays off.

> Design tip: under net billing or short netting intervals, sizing a system to match **on-site consumption** (and adding storage) usually beats oversizing for export, because exported energy is worth far less than self-consumed energy and any annual surplus is paid out at a low rate.

## Export Rates & Avoided Cost

The export rate is the heart of net billing. The most common basis is **avoided cost** — what the utility would otherwise have paid to generate or buy that power.

- **Avoided-cost export rates** are typically far below retail. Search-verified ranges commonly cited: roughly **$0.04–$0.08/kWh** for avoided cost versus **$0.15–$0.30/kWh** retail.
- Sophisticated tariffs make the export rate **time- and date-varying** so it reflects the actual hourly value of energy — high during expensive peak hours, low during the midday solar glut.

## California: NEM 1 → NEM 2 → NEM 3 (Net Billing)

California's trajectory is the clearest illustration of the national shift from net metering to net billing.

| Program | Nature | Key features |
|---|---|---|
| **NEM 1.0** | Full net metering | Original 1-for-1 retail credit |
| **NEM 2.0** | Net metering with adders | Retail-rate export credits, but with **mandatory TOU rates**, **non-bypassable charges**, and interconnection fees |
| **NEM 3.0 (Net Billing Tariff)** | **Net billing** | Effective **April 15, 2023**. Exports credited at **avoided-cost** rates from California's **Avoided Cost Calculator (ACC)**, varying by **month, hour, and weekday/weekend** |

Under the **Net Billing Tariff (NEM 3.0)**:

- Export compensation comes from the **Avoided Cost Calculator (ACC)**, with a distinct value for each month/hour/day-type combination.
- The applicable ACC values are locked to a **"vintage year"** — the year of PTO — and held for **9 years**. Systems reaching PTO in **2023–2024** use 2022 ACC values; systems reaching PTO in **2025–2026** use the updated 2025 ACC values. The net-billing *structure* is unchanged across vintages.
- Because midday export values collapsed relative to NEM 2.0 retail credits, NEM 3.0 strongly favors **pairing solar with batteries** to shift exports into high-value evening hours and maximize self-consumption.

## Demand Charges & Time-of-Use

For **commercial** customers especially, the energy rate is only part of the bill.

- **Time-of-Use (TOU)** rates vary the **per-kWh** price by time of day. Solar's value depends on alignment with peak TOU windows; as peaks shift later into the evening (the "duck curve"), midday solar's value falls and storage's value rises.
- **Demand charges** bill the customer's **peak power draw (kW)** in a period — often $10–$30+/kW-month — independent of total energy. Solar reduces demand charges **only if it reliably shaves the kW peak**, which depends on whether the peak coincides with strong production. Because a single cloudy afternoon or a late-evening peak can blow the monthly demand number, solar alone is an unreliable demand-charge hedge; **storage** is usually required to manage demand charges predictably.

> For commercial projects, modeling demand-charge reduction is often more decisive than energy savings — and it is where solar-plus-storage earns its keep. See [Distribution Interconnection](grid-distribution.md) for the interconnection side of C&I projects.

## Value-of-Solar Tariffs

A **value-of-solar (VOS)** tariff replaces retail-rate netting with a calculated **per-kWh value** intended to reflect solar's full benefits and costs to the grid — energy, capacity, avoided transmission and distribution, line losses, and sometimes environmental value. Production is typically credited at the VOS rate while the customer pays retail for consumption (a buy-all/sell-all-like structure). VOS aims to be more "cost-reflective" than either retail NEM or simple avoided cost; the resulting value can land above or below retail depending on the methodology and inputs.

## Grandfathering

When a state changes its rules, existing customers are usually **grandfathered** onto the prior tariff for a defined period, protecting the economics they signed up for.

- **California:** NEM 2.0 customers are grandfathered for **20 years** from PTO. The deadline to secure NEM 2.0 grandfathering by reaching **PTO was April 15, 2026**; systems energized after that fall under NEM 3.0.
- Grandfathering terms (length, what triggers loss of status, e.g., system expansion or change of ownership) vary by state and are a key diligence item.

> Grandfathering is a moving target. A project's economics hinge on **which tariff vintage it locks in and for how long** — confirm the current rule and deadlines for the specific utility before modeling returns.

## Impact on Project Economics

| Factor | Net Metering | Net Billing |
|---|---|---|
| Value of an exported kWh | Full retail | Avoided cost (much lower) |
| Best system size | Can oversize toward annual offset | Size to **self-consumption** |
| Role of storage | Optional, mostly resilience | Often **essential** to economics |
| Payback sensitivity | Driven by retail rate | Driven by self-consumption %, TOU, and export-rate shape |

The shift from net metering to net billing typically **lengthens payback** and **shrinks export value**, while **raising the value of self-consumption and storage**. The same physical array can have very different economics depending solely on the prevailing tariff.

## Worked Credit Example

A simplified one-month comparison for a residential customer. Assume in one billing month the home **consumes 600 kWh** from the grid and **exports 300 kWh** of surplus solar (after self-consuming the rest on-site). Retail rate **$0.30/kWh**; net-billing export rate **$0.06/kWh**.

```
Common to both:
  Grid consumption charge = 600 kWh x $0.30   = $180.00

NET METERING (export credited at retail):
  Export credit          = 300 kWh x $0.30    = $90.00
  Net energy bill        = $180.00 - $90.00   = $90.00

NET BILLING (export credited at avoided cost):
  Export credit          = 300 kWh x $0.06    = $18.00
  Net energy bill        = $180.00 - $18.00   = $162.00

Difference for the same array, same month  =  $72.00
```

The identical system saves **$72 more per month** — about **$864/year** — under net metering than under net billing in this example. (Figures are illustrative; real bills include fixed charges, non-bypassable charges, TOU variation, and time-varying export rates.) This gap is exactly why tariff selection and grandfathering deadlines dominate behind-the-meter project decisions, and why net-billing markets pivot so hard toward storage.

## Sources & Further Reading

- [CPUC — Net Energy Metering and Net Billing](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing)
- [Aurora Solar — Explaining and Modeling California's Net Billing Tariff (NEM 3.0)](https://aurorasolar.com/blog/explaining-and-modeling-californias-net-billing-tariff-nem-3-0/)
- [EnergySage — NEM 3.0 in California: What You Need to Know](https://www.energysage.com/blog/net-metering-3-0/)
- [SolarReviews — Net Metering: What Is It and How Does It Work?](https://www.solarreviews.com/blog/what-is-net-metering-and-how-does-it-work)
- [Palmetto — Net Billing and Avoided Cost Rates for Home Solar](https://palmetto.com/solar/what-are-avoided-cost-rates-for-solar-power)

---
*This page is general reference information, not financial, tax, or regulatory advice. Rate structures, export rates, and grandfathering deadlines change frequently and vary by utility — verify current tariffs before relying on any figures.*
