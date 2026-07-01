# Valuing Incentives: ITC, Depreciation & Cash Value

Solar incentives are quoted as percentages and tax deductions, but what a developer or business actually cares about is **dollars** — how much cash each incentive puts back in the project, and *when*. This article translates the major commercial solar incentives into cash: the **Investment Tax Credit (ITC)** and its adders, **MACRS/bonus depreciation**, the often-missed **ITC basis-reduction rule**, the mechanisms that convert non-refundable credits into actual cash ([transferability](incentive-transferability.md) and direct pay), and market-revenue incentives like **SRECs** and **performance-based incentives (PBIs)**. It closes with a full worked "gross cost → net cost" example.

> **Timing note (2026):** Federal solar tax credits under the Inflation Reduction Act framework are being wound down following the One Big Beautiful Bill Act (OBBBA) and subsequent Treasury guidance. Solar projects generally must **begin construction before July 4, 2026** (or complete construction by end of 2027 if they began earlier) to qualify for the ITC. The values below describe how the incentives work for qualifying projects; always confirm current eligibility and deadlines, which are changing rapidly. ([Transect](https://www.transect.com/insights/solar-itc-extension), [Commercial Energy Advisors](https://commercialenergyadvisors.com/resources/commercial-solar-tax-credit-2026-guide/))

## The Investment Tax Credit: Base + Adders

The commercial **ITC** (under the technology-neutral §48E, successor to §48) is a credit against federal income tax equal to a percentage of a project's eligible cost basis.

### Base Rate

- The base credit is **30%** of eligible basis for projects that satisfy **prevailing wage and apprenticeship (PWA)** labor requirements (or that fall under the small-project exemption, generally under 1 MW).
- Projects that *fail* PWA drop to a **6%** base — an 80% haircut. Meeting PWA is therefore essential to the economics of any project above 1 MW.

### Adders (Bonus Credits)

On top of the base, qualifying projects can stack **adders**:

| Adder | Value | Rough requirement |
|---|---|---|
| **Domestic content** | +10% | Meet U.S.-made thresholds for steel/iron and manufactured components |
| **Energy community** | +10% | Sited in a qualifying fossil-transition area, brownfield, or high-fossil-employment census tract |
| **Low-income / environmental justice** | +10% or +20% | Allocation-based program for qualifying low-income or Tribal projects |

> With base plus stacked adders, the ITC can reach **40%, 50%, or in select low-income cases up to 70%** of eligible basis. The domestic content threshold for the manufactured-products test rises over time (roughly 45% in 2026, increasing in later years), so qualification gets harder. ([SolarEdge](https://www.solaredge.com/us/solaredge-blog/solar-energy-tax-credit-itc-homes-and-businesses), [Novogradac](https://www.novoco.com/resource-centers/renewable-energy-tax-credits/about-renewable-energy-tax-credits))

### What "30%" Is Worth in Cash

The ITC is a **dollar-for-dollar reduction in federal income tax** — not a deduction. A $1,000,000 project with a 30% ITC generates a **$300,000** credit that offsets $300,000 of tax owed. But the ITC is (with limited exceptions) **non-refundable** to ordinary taxable entities — it only helps if you owe tax. That constraint is exactly why transferability and direct pay exist (below).

## MACRS and Bonus Depreciation

Beyond the credit, solar equipment can be **depreciated**, generating additional tax deductions that translate into cash savings.

### MACRS (Modified Accelerated Cost Recovery System)

Solar energy property has historically been eligible for **5-year MACRS** — an accelerated schedule that front-loads depreciation deductions into the early years of the project, boosting the present value of the tax shield. See [MACRS & Bonus Depreciation](incentive-macrs-depreciation.md) for the year-by-year percentages.

> **2026 caveat:** OBBBA changed the cost-recovery treatment for certain energy property. Whether a specific solar project retains the favorable 5-year classification depends on its placed-in-service date and the final rules; some projects may face a longer recovery period. Confirm the current classification for your project before modeling. ([SEIA](https://seia.org/depreciation-solar-energy-property-macrs/))

### Bonus Depreciation

**Bonus depreciation** lets a business deduct a large share of an asset's cost *immediately* in year one instead of spreading it over the MACRS schedule.

> Under OBBBA, **100% bonus depreciation** was restored for qualifying property acquired after January 19, 2025 — allowing full first-year expensing of eligible basis. ([Instead](https://www.instead.com/resources/blog/how-bonus-depreciation-works-in-2026-under-the-obbba), [8MSolar](https://8msolar.com/what-is-bonus-depreciation-commercial-solar/))

The **cash value** of depreciation is the deduction multiplied by the taxpayer's marginal tax rate. A $1,000,000 depreciable basis deducted at a 21% federal corporate rate yields **$210,000** in reduced federal tax — before any state benefit.

## The ITC Basis-Reduction Rule (Don't Forget This)

Here is the rule that trips up most first-time modelers. When you claim the ITC, you must **reduce the depreciable basis by 50% of the ITC value**.

> **Basis reduction:** You depreciate the project's cost basis **minus half the ITC**. For a 30% ITC, half of 30% is 15%, so you depreciate only **85%** of the original basis. ([SEIA](https://seia.org/depreciation-solar-energy-property-macrs/))

Worked in isolation on a $1,000,000 basis with a 30% ITC:

```
ITC:                 30% x $1,000,000        = $300,000
Basis reduction:     50% x $300,000          = $150,000
Depreciable basis:   $1,000,000 - $150,000   = $850,000
Depreciation cash (21% rate): $850,000 x 0.21 = $178,500
```

If you forget the basis reduction, you overstate the depreciation shield by 15% of basis worth of deductions — a common and material modeling error.

## Converting Non-Refundable Credits to Cash

The ITC is worthless to an entity that cannot use it. Three mechanisms bridge that gap:

### 1. Tax-Equity Partnerships

A developer without enough tax appetite brings in a **tax-equity investor** (typically a bank or large corporation) who contributes capital in exchange for most of the ITC and depreciation. This is the traditional route and is covered in [Tax-Equity Structures](incentive-tax-equity.md).

### 2. Transferability (§6418)

Since the Inflation Reduction Act, a project owner can **sell** the ITC to an unrelated taxable buyer for **cash** under **§6418**, without a partnership. The credit is sold at a **discount** to face value.

> Transferable ITCs typically sell for roughly **$0.90–$0.95 per $1.00** of credit, with market averages around **$0.925** in 2026 and typical discounts of **5–15%**. The seller gets immediate cash; the buyer gets a credit worth more than they paid. ([Crux](https://www.cruxclimate.com/insights/transferable-tax-credits), [Fallbrook](https://fallbrookfinancialservices.com/understanding-transferability-selling-your-renewable-energy-tax-credits/))

So a $300,000 ITC sold at $0.92 yields **$276,000 in cash**. See [Transferability of Credits (§6418)](incentive-transferability.md) for mechanics, indemnities, and buyer diligence.

### 3. Direct Pay / Elective Pay (§6417)

**Direct pay** treats the credit as a cash payment from the Treasury. It is available primarily to **tax-exempt entities** — governments, schools, nonprofits, tribes, co-ops — that owe no tax and therefore could never use a non-refundable credit. For these entities, direct pay converts the ITC to roughly **$1.00 on the dollar** (subject to program rules). Taxable businesses generally use transferability instead.

| Mechanism | Who uses it | Cash value per $1 of ITC |
|---|---|---|
| Tax-equity partnership | Developers with a tax-equity investor | Varies; embedded in deal economics |
| **Transferability (§6418)** | Taxable entities | ~$0.90–$0.95 |
| **Direct pay (§6417)** | Tax-exempt entities | ~$1.00 (subject to rules) |

## Market-Revenue Incentives: SRECs and PBIs

Not all incentives are federal tax items. Some pay ongoing cash based on production.

- **SRECs (Solar Renewable Energy Certificates):** In states with renewable portfolio standards, each **1 MWh** of solar generation creates one tradable certificate that utilities buy to meet compliance obligations. SREC prices vary enormously by state and over time — from a few dollars to a few hundred dollars per certificate — and can be a significant revenue stream in strong markets. Because prices fluctuate, model them conservatively.
- **PBIs (Performance-Based Incentives):** A utility or program pays a fixed $/kWh for actual generation over a set period. Unlike an upfront rebate, a PBI rewards real output and is paid over time.

These revenues are **recurring cash flows**, not upfront reductions, so in a model they belong in the operating-revenue line, valued at their expected price and appropriately risk-discounted. They interact with [utility rate design](grid-rate-design.md) and program availability.

## Worked Example: Gross Cost → Net Cost (Commercial Project)

**Setup.** A qualifying commercial solar project, taxable owner, using transferability to monetize the credit.

```
Gross installed cost (eligible basis):   $1,000,000
ITC rate (30% base + 10% domestic
  content + 10% energy community):       50%
Federal tax rate:                        21%
Bonus depreciation:                      100% (first year)
Transferability sale price:              $0.92 per $1 of ITC
```

**Step 1 — ITC value and cash from selling it.**

```
ITC = 50% x $1,000,000                    = $500,000
Cash from transfer at $0.92               = $500,000 x 0.92 = $460,000
```

**Step 2 — Apply the basis-reduction rule.**

```
Basis reduction = 50% x $500,000          = $250,000
Depreciable basis = $1,000,000 - $250,000 = $750,000
```

**Step 3 — Depreciation cash value (100% bonus, year one).**

```
Depreciation deduction                    = $750,000
Cash value at 21% = $750,000 x 0.21       = $157,500
```

**Step 4 — Roll up to net cost.**

```
Gross cost                                = $1,000,000
Less ITC cash (transfer)                  -  $460,000
Less depreciation tax savings             -  $157,500
---------------------------------------------------------
Net cost after incentives                 =  $382,500
```

```
Effective incentive value:  $617,500 of $1,000,000 = ~62% of gross cost
Net cost as share of gross:                          ~38%
```

**What the example teaches:**

- The headline "50% ITC" is not the whole story — **depreciation adds another ~16%** of gross cost in tax savings here.
- The **basis-reduction rule** quietly shaved the depreciable basis from $1,000,000 to $750,000; skipping it would overstate the depreciation benefit.
- **Transferability** turned a non-refundable credit into $460,000 of real cash at a ~8% discount — the price of liquidity.
- Any **SREC/PBI** revenue would further improve returns but arrives as ongoing cash flow, not an upfront cost reduction, and is not included in the net-cost figure above.

For how these net-cost inputs feed a cost-per-kWh comparison, see [LCOE & Levelized Cost Metrics](fin-lcoe.md). For how the same incentives are shared among investors in a large deal, see [Project Finance & the Capital Stack](fin-project.md) and [Tax-Equity Structures](incentive-tax-equity.md). For the overview, start at [Solar Finance & Economics Overview](fin-overview.md).

## Sources & Further Reading

- [About Renewable Energy Tax Credits — Novogradac](https://www.novoco.com/resource-centers/renewable-energy-tax-credits/about-renewable-energy-tax-credits)
- [Depreciation of Solar Energy Property in MACRS — SEIA](https://seia.org/depreciation-solar-energy-property-macrs/)
- [An Ultimate Guide to Transferable Tax Credits (2026) — Crux](https://www.cruxclimate.com/insights/transferable-tax-credits)
- [IRC Section 6418 FAQ: Transferring Energy Tax Credits — Cherry Bekaert](https://www.cbh.com/insights/articles/irc-section-6418-faq-transferring-energy-tax-credits/)
- [How Bonus Depreciation Works in 2026 Under the OBBBA — Instead](https://www.instead.com/resources/blog/how-bonus-depreciation-works-in-2026-under-the-obbba)
- [Commercial Solar Tax Credit 2026 Guide — Commercial Energy Advisors](https://commercialenergyadvisors.com/resources/commercial-solar-tax-credit-2026-guide/)

> **Disclaimer:** This article is for educational purposes only and does not constitute financial, tax, legal, or investment advice. Tax law, credit rates, adders, deadlines, and monetization rules are complex and changing rapidly in 2026. Confirm current eligibility and consult a qualified tax professional before relying on any figure here.
