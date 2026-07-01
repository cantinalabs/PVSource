# Financial Modeling & Bankability (P50/P90)

A **solar pro forma** is the spreadsheet that turns engineering into money. It projects, year by year for the life of a project, every dollar in and out — energy revenue, operating costs, taxes, and financing — and distills them into the [return metrics](fin-roi.md) investors and lenders need. This article shows how to build that model line by line, then explains the concept that separates a hopeful project from a **bankable** one: **exceedance probability (P50/P90)** and how it drives debt sizing, **DSCR**, and financeability.

Start from the [Solar Finance & Economics Overview](fin-overview.md) if you need the big picture first.

## Anatomy of a Solar Pro Forma

A pro forma is organized as rows of line items across columns of years (0 to N). The core blocks:

```
REVENUE
  Energy production (kWh)      ← degrades each year
  × Price ($/kWh or $/MWh)     ← PPA price or retail rate, escalated
  = Gross revenue / savings
  + Other value (SRECs, capacity, demand-charge cuts)

OPERATING COSTS
  - Fixed O&M ($/kW-yr)        ← inflates each year
  - Insurance, land lease, admin
  - Inverter replacement reserve (around yr 10-15)
  = Net operating income (NOI / EBITDA)

FINANCING
  - Debt service (principal + interest)
  = Cash flow after debt

TAX
  + ITC (early)                ← Investment Tax Credit
  + MACRS depreciation shield  ← 5-year accelerated
  - Income tax on profits
  = After-tax equity cash flow
```

From that final row you compute [NPV, IRR, and payback](fin-roi.md). Two escalators pull the revenue line in opposite directions over time, and both must be modeled explicitly.

## The Key Assumptions (Escalators, Degradation, Inflation)

| Assumption | Typical treatment | Effect |
|---|---|---|
| **Energy degradation** | ~0.5%/yr (verify module warranty) | Production line falls each year |
| **Price escalation** | PPA escalator (e.g., ~1.5–2.5%/yr) or utility-rate growth | Revenue per kWh rises |
| **O&M inflation** | ~2–3%/yr | Costs creep up |
| **Discount rate** | Project WACC | Sets NPV and present values |
| **Analysis life** | ~25–35 years | Longer life spreads CapEx |

> **Model both escalators.** A rookie mistake is to escalate price but forget degradation (too optimistic) or vice versa. Net revenue growth is roughly *price escalation minus degradation* — often a low positive number.

## Tax Effects: ITC and MACRS

For commercial and utility projects, **tax benefits are a first-class revenue line**, not an afterthought. Two federal mechanisms dominate:

- **Investment Tax Credit (ITC):** a credit against income tax equal to a percentage of eligible cost (30% base under current law, with adders and a policy-driven **begin-construction timeline** — as of mid-2026 the full commercial credit is tied to beginning construction by **July 4, 2026** under current statute; verify current IRS guidance).
- **MACRS depreciation:** solar qualifies for **5-year accelerated depreciation**. The depreciable basis is reduced by **half the ITC** (so ~85% of cost with a 30% ITC), and the resulting deductions shield income tax across roughly six tax years.

```
Illustrative combined tax value (C&I, $1,000,000 gross)
  ITC (30%) ............................ $300,000
  Depreciable basis = 1,000,000 - 150,000 = $850,000
  MACRS shield = 850,000 × 25% tax rate  ~ $212,500 (over ~6 yrs)
  Combined tax benefit ................. ~$512,500
  ≈ ~45%-55% of gross cost recovered via tax
```

Whoever owns the project must have the **tax appetite** to use these benefits. When the sponsor cannot, a **tax-equity investor** is brought in specifically to monetize the ITC and depreciation — the subject of [Tax-Equity Structures](incentive-tax-equity.md). Utility rate context that shapes the revenue line lives in [Utility Rate Design & Tariffs](grid-rate-design.md).

## Worked Pro-Forma Skeleton

```
Illustrative 5 MW project, first years only (rounded, teaching)
  CapEx ................. $6,000,000 ($1.20/W)
  Year-1 production ..... 9,500 MWh (degrades 0.5%/yr)
  PPA price ............. $60/MWh, 2% escalator
  Fixed O&M ............. $16/kW-yr = $80,000, 2.5% inflation
  Debt ................. 60% of CapEx = $3,600,000
  Interest .............. ~7%, 18-yr amortization

               Yr 1        Yr 2        Yr 3
Production MWh  9,500       9,453       9,405
Price $/MWh     60.00       61.20       62.42
Revenue         $570,000    $578,500    $587,100
O&M            -$80,000    -$82,000    -$84,050
NOI             $490,000    $496,500    $503,050
Debt service   -$355,000   -$355,000   -$355,000
DSCR            1.38x       1.40x       1.42x
+ ITC / MACRS   (front-loaded in early years)
```

Notice the **DSCR** row — that is the number the lender lives by, and it depends entirely on which *production scenario* you put in the top line.

## P50, P90 and Exceedance Probability

A solar project's future energy is **uncertain** — weather varies year to year, and the resource assessment itself has error bars. Rather than a single guess, analysts describe production as a **probability distribution** and quote **exceedance probabilities**:

- **P50** — the *median* estimate: production is equally likely to come in above or below it. This is the "expected" or "best-estimate" annual energy.
- **P90** — the level that actual production is **90% likely to exceed**. It is a conservative figure lower than P50.
- **P75, P95, P99** — intermediate and more conservative points on the same curve.

```
       Probability of exceeding a given energy level
  100% |*.
       |  *.
   90% |----*----------------  ← P90 (90% chance of doing better)
       |      *.
   50% |----------*----------  ← P50 (median / best estimate)
       |            *.
   10% |--------------*------  ← P10 (only 10% chance of exceeding)
    0% |________________*_____
        low        energy       high
```

The **gap between P50 and P90** reflects uncertainty: better resource data and more site history narrow it. A tight distribution (small P50–P90 spread) signals a well-characterized, lower-risk project.

> **Why lenders love P90.** Equity may underwrite to the optimistic P50, but a lender wants to be repaid even in a poor resource year. **P90 is the industry gold standard for debt sizing** — it stress-tests the project against a bad-luck production scenario.

## How P50/P90 Drives Debt Sizing and DSCR

The **Debt Service Coverage Ratio (DSCR)** ties production risk directly to how much debt a project can carry:

```
DSCR = Net Operating Income (NOI) / Debt Service (principal + interest)
```

- A DSCR of **1.30x** means NOI is 30% larger than the debt payment — a 30% cushion.
- Lenders set a **minimum DSCR covenant** and size the loan so the project meets it **using conservative production**.

The mechanism:

1. Compute **NOI at P90** production (the conservative case).
2. Divide by the lender's **minimum DSCR** to get the maximum affordable debt service.
3. Back into the **loan amount** from that debt service, given the interest rate and tenor.

```
Illustrative debt sizing from P90
  P90 NOI ................ $450,000/yr (conservative)
  Min DSCR (lender) ...... 1.30x
  Max debt service ....... 450,000 / 1.30 = $346,150/yr
  → Loan sized so annual P&I ≤ $346,150
```

Lenders commonly require **DSCR in the ~1.20x–1.35x** range measured on **P90** production. Sizing debt on P90 rather than P50 means less leverage — but a loan that survives a bad year, which is exactly what makes the deal financeable.

| Scenario used | Who uses it | Effect on leverage |
|---|---|---|
| **P50** | Equity/sponsor base case | Higher (optimistic) |
| **P90** | Lender debt sizing | Lower, safer debt |
| **P99** | Very conservative stress test | Lowest |

## Bankability

A project is **bankable** when a lender or investor is willing to finance it on reasonable terms. Bankability is the sum of many de-risking factors, of which the P50/P90 assessment is central:

- **Independent energy yield assessment** (a credible P50 and P90 from a reputable firm).
- **Proven, warrantied equipment** with acceptable degradation and a bankable manufacturer.
- **Creditworthy off-taker** and a durable **PPA** (see [C&I Financing: PPAs, Leases, C-PACE & On-Bill](commercial-financing.md)).
- **DSCR comfortably above covenant** at P90.
- **Secure site control**, permits, and interconnection.
- **Robust O&M** and monitoring plan.

> **Bankability in one line.** The lender is not asking "how good is this project in a great year?" but "**will it still pay me back in a bad one?**" P90 and DSCR are how that question is answered numerically.

## Sensitivity and Scenario Analysis

Because the pro forma rests on assumptions, a credible model **stresses** each one and presents the swing — typically as a **tornado diagram** ranking inputs by their impact on NPV, IRR, or DSCR.

```
Illustrative sensitivity on equity IRR (widest bars = biggest risk)

Production (P50 vs P90)   [=================]
CapEx / $/W               [=============]
PPA price / escalator     [===========]
Interest rate             [========]
O&M and inflation         [====]
Degradation rate          [===]
```

The financing and production inputs almost always dominate. Pair this with the [LCOE sensitivity](fin-lcoe.md) view and the [cost benchmarks](fin-costs.md) that set the CapEx bar.

## Where to Go Next

- [Payback, ROI, NPV & IRR](fin-roi.md) — the metrics the pro forma outputs.
- [LCOE & Levelized Cost Metrics](fin-lcoe.md) — the levelized-cost companion.
- [System Cost Breakdown & Benchmarks](fin-costs.md) — the CapEx assumptions.
- [Tax-Equity Structures](incentive-tax-equity.md) — monetizing ITC and MACRS.

## Sources & Further Reading

- [PVcase — Solar Energy Yield Assessment: Bankability Guide](https://pvcase.com/blog/energy-yield)
- [SurgePV — P50 vs P90 Energy Yield Explained](https://www.surgepv.com/blog/p50-p90-energy-yield-explained)
- [Penn State EME 810 — Exceedance Probabilities: P50, P75, P90](https://courses.ems.psu.edu/eme810/node/630)
- [Lazard — Levelized Cost of Energy+ (2025)](https://www.lazard.com/research-insights/levelized-cost-of-energyplus-lcoeplus/)
- [EnergySage — Federal Solar Tax Credit Explained](https://www.energysage.com/solar/solar-tax-credit-explained/)

> **Disclaimer.** This article is for **educational purposes only** and is not financial, tax, investment, or legal advice. Pro-forma outputs depend entirely on assumptions that vary by project and change over time, and tax rules are subject to change. Consult qualified financial, tax, and engineering professionals before relying on any figure.
