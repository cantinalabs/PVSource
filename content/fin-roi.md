# Payback, ROI, NPV & IRR

If [LCOE](fin-lcoe.md) answers "what does each unit of energy cost to produce?", this article answers the investor's question: **"is this a good place to put my money?"** Four metrics dominate that conversation — **payback**, **ROI**, **net present value (NPV)**, and **internal rate of return (IRR)**. Each looks at the same cash flows through a different lens, and each is right for a different audience.

This piece defines all four, gives their formulas, and works a **residential** and a **commercial** cash-flow example end to end. For where these metrics sit in the bigger picture, see the [Solar Finance & Economics Overview](fin-overview.md).

## The Cash Flows Behind Every Metric

Every return metric is computed from the same object: a **stream of annual net cash flows**, starting with a negative outlay and followed by positive savings or revenue.

```
Year 0:   - Net installed cost (after any upfront incentives)
Year 1:   + Bill savings / revenue - O&M   (+ tax benefits if applicable)
Year 2:   + Bill savings (grown by utility escalation)
  ...      ... energy declines by degradation each year ...
Year N:   + Final-year net cash flow
```

Two forces pull in opposite directions over time: **utility-rate escalation** tends to grow the savings, while **panel degradation** slowly shrinks the energy produced. A realistic model applies both. See [Financial Modeling & Bankability (P50/P90)](fin-modeling.md) for building the full stream.

## Payback Period

**Payback** is the time it takes for cumulative positive cash flows to repay the initial outlay. It is the metric homeowners understand instantly.

### Simple payback

```
Simple payback (years) = Net installed cost / Annual net savings (year 1)
```

Simple, but it **ignores** the time value of money, escalation, and degradation. It is a screening tool, not a decision tool.

### Discounted payback

**Discounted payback** counts how long until the *discounted* cumulative cash flows repay the outlay. It is always **longer** than simple payback because future dollars are worth less today.

```
Find the smallest N such that:
  Σ (from t=1 to N) [ CashFlow_t / (1 + r)^t ]  >=  Net installed cost
```

> **Reading the number.** Residential payback in favorable markets commonly lands in the high-single-digit to low-teens of years; discounted payback runs a few years longer. A shorter payback means less exposure to policy and equipment risk.

## Return on Investment (ROI)

**ROI** expresses total lifetime net gain as a percentage of the amount invested.

```
Simple ROI = (Total lifetime net savings - Net cost) / Net cost × 100%
```

A 25-year solar ROI can look impressive (often several hundred percent) precisely because it sums decades of savings without discounting. That makes ROI good for **marketing** and rough comparison, but it flatters long-lived assets by treating a dollar in year 25 the same as a dollar today. For decisions, prefer NPV and IRR.

## Net Present Value (NPV)

**NPV** is the most theoretically sound go/no-go metric: it is the **total value created today**, in dollars, after discounting every future cash flow back to the present at the required rate of return `r`.

```
NPV = Σ (from t=0 to N) [ CashFlow_t / (1 + r)^t ]

  (CashFlow_0 is negative — the initial cost)
```

- **NPV > 0** → the project earns more than the discount rate; it creates value.
- **NPV = 0** → it exactly earns the discount rate.
- **NPV < 0** → it destroys value at that hurdle rate.

The chosen discount rate embeds the investor's opportunity cost and risk. Change `r` and NPV changes — which is exactly what IRR pins down.

## Internal Rate of Return (IRR)

**IRR** is the discount rate at which **NPV equals zero** — the project's own effective compound annual return.

```
Solve for IRR such that:
  0 = Σ (from t=0 to N) [ CashFlow_t / (1 + IRR)^t ]
```

There is no closed-form solution; IRR is found iteratively (a spreadsheet's `IRR`/`XIRR` does this). Compare IRR to a **hurdle rate** (the minimum acceptable return): if IRR > hurdle, the project clears the bar. IRR is the lingua franca of commercial and utility investors because it is a single, capital-structure-aware percentage.

> **IRR cautions.** IRR assumes interim cash flows are reinvested at the IRR itself, can be misleading for unconventional cash-flow signs (multiple sign changes can yield multiple IRRs), and does not convey scale. A tiny project can post a huge IRR yet create little NPV. Always read IRR **alongside** NPV.

## Metric Comparison

| Metric | Output | Time value? | Strength | Weakness |
|---|---|---|---|---|
| Simple payback | Years | No | Intuitive | Ignores discounting, later years |
| Discounted payback | Years | Yes | More honest | Still ignores post-payback value |
| ROI | % | No (simple) | Easy headline | Flatters long assets |
| NPV | $ | Yes | Correct decision rule | Needs a discount rate; not a % |
| IRR | % | Yes | Comparable, scale-free | Reinvestment/multiple-IRR pitfalls |

## Worked Example A — Residential (Cash Purchase)

```
Assumptions (illustrative homeowner, cash)
  System ..................... 8 kW
  Gross cost ................. $24,000  ($3.00 / W)
  Federal ITC (verify law) ... 30% -> $7,200
  Net cost (year 0) .......... -$16,800
  Year-1 bill savings ........ $1,900
  Utility escalation ......... 3% / year
  Degradation ................ 0.5% / year
  Net savings growth ......... ~ +2.5% / year (escalation minus degradation)
  Discount rate (r) .......... 5%
  Horizon .................... 25 years

Simple payback
  = 16,800 / 1,900
  ~ 8.8 years

Discounted payback
  Discount each year's growing savings at 5%; accumulate.
  Cumulative discounted savings cross $16,800 at roughly year ~11.

Lifetime (undiscounted) savings, 25 yrs, ~2.5% growth
  ~ $1,900 × [ (1.025^25 - 1) / 0.025 ]
  ~ $1,900 × 34.2
  ~ $65,000

Simple ROI
  = (65,000 - 16,800) / 16,800 × 100%
  ~ 287%

NPV at 5%
  PV of 25 yrs of savings growing ~2.5%, discounted 5%
    ~ $1,900 × ~17.6 (growing-annuity PV factor)
    ~ $33,400
  NPV = 33,400 - 16,800
      ~ +$16,600   (positive -> worthwhile at a 5% hurdle)

IRR
  The rate that sets NPV = 0 for these flows
  ~ 10%-12%  (comfortably above a 5% hurdle)
```

Homeowners usually lead with **payback**; the positive NPV and double-digit IRR confirm the decision is sound at a reasonable hurdle. Financing changes the picture — a loan reduces year-0 outlay but adds interest; see [Homeowner Financing 101](residential-financing.md).

## Worked Example B — Commercial (Direct-Owned, With Tax Benefits)

Commercial economics turn on **tax benefits** — the ITC plus **5-year MACRS** depreciation — which a taxpaying business can actually use. These front-load the returns dramatically.

```
Assumptions (illustrative C&I host, direct ownership)
  System ..................... 500 kW
  Gross cost ................. $750,000  ($1.50 / W)
  Federal ITC (verify law) ... 30% -> $225,000 (year ~1)
  Depreciable basis .......... gross - 50% of ITC = $637,500
  MACRS (5-yr) tax shield .... $637,500 × 25% tax rate ~ $159,000
                               spread over ~6 tax years
  Year-1 energy value ........ $95,000 (bill savings + demand-charge cuts)
  Escalation ................. 3% / yr ; degradation 0.5% / yr
  O&M ........................ $8,000 / yr, growing ~2%
  Discount rate (r) .......... 8%
  Horizon .................... 25 years

Combined tax benefits (ITC + MACRS)
  ~ $225,000 + ~$159,000 = ~$384,000
  ~ 51% of gross cost recovered via tax  (in line with the
     commonly cited ~45%-55% range for C&I)

Year-0 / early cash view
  Year 0 ..................... -$750,000
  Year 1 ..................... +$95,000 energy - $8,000 O&M
                               + $225,000 ITC + first MACRS shield
  Years 2-6 .................. energy net of O&M + remaining MACRS
  Years 7-25 ................. energy net of O&M (grows then degrades)

Simple payback (with tax benefits counted)
  Tax benefits + first ~2 yrs of net energy repay a large share
  of cost quickly -> payback often ~4-7 years for C&I direct-owned.

NPV at 8%
  Front-loaded ITC/MACRS + 25 yrs of energy, discounted at 8%,
  net of the $750k outlay -> solidly positive (illustrative
  low-to-mid six figures).

IRR
  With ITC + MACRS, well-sited C&I direct-ownership deals
  commonly target after-tax IRRs in the low-to-mid teens.
```

Without tax appetite to *use* the ITC and MACRS, the business would instead take a **PPA or lease** and let a third party capture those benefits — see [C&I Financing: PPAs, Leases, C-PACE & On-Bill](commercial-financing.md) and [Tax-Equity Structures](incentive-tax-equity.md).

## What a "Good" Return Looks Like by Segment

These are **rough orientation ranges**, not guarantees; actual results depend on resource, tariff, cost of capital, and incentives current at the time.

| Segment | Headline metric | Typical "good" range (illustrative) |
|---|---|---|
| Residential (cash) | Simple payback / IRR | ~6–12 yr payback; high-single-digit to low-double-digit IRR |
| Residential (loan) | Monthly cash flow | Loan payment below prior utility bill |
| C&I (direct-owned) | After-tax IRR | Roughly low-to-mid teens |
| Utility-scale | Levered equity IRR / hurdle | Meets developer hurdle; contracted revenue |

> **Segment logic.** Residential returns are gentler but low-risk and personal. C&I returns are supercharged by depreciation. Utility returns are thinner per unit but scaled massively and de-risked by long-term contracts and P90-based [debt sizing](fin-modeling.md).

## Where to Go Next

- [LCOE & Levelized Cost Metrics](fin-lcoe.md) — the cost-side companion to these return metrics.
- [System Cost Breakdown & Benchmarks](fin-costs.md) — the year-0 cost that drives every metric.
- [Financial Modeling & Bankability (P50/P90)](fin-modeling.md) — assembling the cash-flow stream.

## Sources & Further Reading

- [NREL — Solar Installed System Cost Analysis](https://www.nrel.gov/solar/market-research-analysis/solar-installed-system-cost)
- [EnergySage — Federal Solar Tax Credit Explained](https://www.energysage.com/solar/solar-tax-credit-explained/)
- [Lazard — Levelized Cost of Energy+ (2025)](https://www.lazard.com/research-insights/levelized-cost-of-energyplus-lcoeplus/)
- [U.S. DOE — Solar Photovoltaic System Cost Benchmarks](https://www.energy.gov/cmei/systems/solar-photovoltaic-system-cost-benchmarks)

> **Disclaimer.** This article is for **educational purposes only** and is not financial, tax, or investment advice. All figures are illustrative and rounded to teach method. Tax rules and returns vary by taxpayer and change over time; consult a qualified professional before making any decision.
