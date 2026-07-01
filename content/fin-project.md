# Project Finance & the Capital Stack

Large solar projects — utility-scale farms, big C&I portfolios — are not paid for out of a single checkbook. They are financed through a **capital stack**: a layered combination of **sponsor equity**, **tax equity**, and **debt**, each with different rights, returns, and risk tolerance. Understanding the stack is the key to understanding how a project actually gets built and how the [tax incentives](fin-incentive-value.md) get monetized. This article covers the layers of the stack, construction versus term debt, debt sizing and DSCR, partnership-flip mechanics, development-stage financing, and the merchant-versus-contracted risk that underpins the whole structure.

## The Capital Stack, Top to Bottom

A **capital stack** ranks the sources of a project's funding by their claim on cash flows and their risk. The lowest-risk capital gets paid first and earns the least; the highest-risk capital gets paid last and demands the most.

| Layer | Gets paid | Risk | Return | Role |
|---|---|---|---|---|
| **Senior debt** | First | Lowest | Lowest (interest) | Bulk of low-cost capital |
| **Tax equity** | Priority claim on tax benefits + some cash | Moderate | Target flip yield | Monetizes ITC & depreciation |
| **Sponsor equity** | Last (residual) | Highest | Highest | Developer's own capital and upside |

> **Core idea:** Each layer exists because it can absorb something the others can't. Debt provides cheap capital but demands predictable cash flow. **Tax equity** provides capital in exchange for tax benefits the developer can't use. **Sponsor equity** takes the residual risk and the upside. Assembling the cheapest viable mix is the art of project finance.

### Sponsor Equity

The **sponsor** (developer/owner) contributes its own capital and holds the residual interest — it is paid last, after debt service and tax-equity priority returns, and keeps whatever value remains. The sponsor bears the most risk and targets the highest return. Sponsor equity also funds the risky early development work (see below) before other capital will commit.

### Tax Equity

Because the ITC and depreciation are worthless to a party without tax appetite, developers bring in a **tax-equity investor** — typically a large bank or profitable corporation — that contributes capital in exchange for the lion's share of the tax benefits plus a slice of cash. Tax equity is covered in depth in [Tax-Equity Structures](incentive-tax-equity.md); the alternative or complement of simply **selling** the credit is [Transferability of Credits (§6418)](incentive-transferability.md), which has reshaped how many projects monetize the ITC.

### Debt

**Debt** is the cheapest layer and usually the largest. Lenders take the least risk and are repaid first, so they insist on predictable, contracted cash flows and impose covenants. Debt is sized against the project's ability to service it — the subject of DSCR below.

## Construction Debt vs. Term Debt

Solar projects use **two different loans across two phases**.

### Construction Debt

- Short-term, drawn down as construction milestones are met.
- Higher interest rate, reflecting **construction risk** (delays, cost overruns, interconnection problems).
- Repaid at commercial operation, when the project is "taken out" by permanent capital.

### Term Debt (Permanent / Take-Out)

- Long-term loan that **refinances** the construction loan once the project is operational and generating cash.
- Lower rate, because construction risk is gone and the project has a track record and contracted revenue.
- Amortizes over the project life, sized against operating cash flows.

> **The take-out:** Construction debt is expensive because the asset isn't producing yet; term debt is cheaper because it lends against a completed, cash-generating plant. The transition — construction loan repaid by term debt and tax-equity funding at commercial operation — is one of the riskiest moments in a project's life.

## Debt Sizing and DSCR

Lenders do not size a loan off the project's cost — they size it off the project's **cash flow**. The central metric is the **Debt Service Coverage Ratio (DSCR)**.

```
DSCR = Cash Available for Debt Service (CFADS)
       ---------------------------------------
       Debt Service (principal + interest)
```

- A **DSCR of 1.0** means cash flow exactly equals the debt payment — no cushion, and unacceptable to lenders.
- Lenders require a **minimum DSCR** cushion so that even if generation or revenue disappoints, the loan still gets paid.

> Contracted solar projects with a strong long-term [PPA](fin-ppa.md) commonly support minimum DSCRs in the range of roughly **1.2x–1.4x**; **merchant** (uncontracted) projects require higher coverage (often 1.5x+) because their revenue is riskier. Exact thresholds depend on the offtaker's credit, contract tenor, and market. (Illustrative industry ranges; confirm with current lender term sheets.)

### How DSCR Sizes the Loan

The lender works backward: it takes the project's expected cash flow, divides by the required DSCR to get the maximum affordable debt service, then solves for the loan amount that fits.

```
Example:
Annual CFADS (contracted)        = $1,200,000
Required minimum DSCR            = 1.30x
Max annual debt service         = $1,200,000 / 1.30 = $923,077
-> the loan is sized so that its annual payment
   does not exceed $923,077.
```

The stronger and more contracted the cash flow, the more debt the project can carry — and cheap debt lowers the blended cost of capital and improves returns. This is the direct financial reason a signed [PPA](fin-ppa.md) is so valuable: it converts uncertain revenue into bankable cash flow.

## Partnership-Flip Mechanics (High Level)

The **partnership flip** is the classic structure for combining sponsor and tax equity, designed to route tax benefits to the party that can use them.

How it works, at a high level:

1. The sponsor and the tax-equity investor form a **partnership** that owns the project.
2. In the early years (**pre-flip**), the tax-equity investor is allocated the large majority of tax benefits — commonly around **99%** of the ITC, depreciation, and taxable income/loss — because those benefits are what it paid for.
3. The investor keeps receiving those allocations until it hits its agreed **target return** (its "flip yield").
4. At that point the allocations **flip**: the sponsor's share jumps to the large majority (e.g., **95%**) of cash and tax items, and the tax-equity investor steps down to a small residual.

> The flip typically occurs after the tax-equity investor reaches its target yield — often in the **5–8 year** range, aligned with the fact that the ITC has a **5-year recapture period**. After the flip, the sponsor owns most of the long-term upside. ([SolarInfoPath](https://solarinfopath.com/solar-tax-equity-partnership-works/))

The flip lets the developer effectively "sell" tax benefits for upfront capital while retaining most of the project's long-run economics. See [Tax-Equity Structures](incentive-tax-equity.md) for the full treatment, and note that [transferability (§6418)](incentive-transferability.md) now offers a simpler — though often less capital-efficient — alternative for monetizing the credit without a partnership.

## Development-Stage Financing

Before a project is bankable, someone has to fund the risky, capital-intensive **development** phase: site control, permitting, interconnection studies, resource assessment, and offtake negotiation. This early money is the highest-risk capital in the entire lifecycle because a project can die at any milestone.

- **Sponsor / developer equity** usually funds the earliest work at risk.
- **Development loans or venture-style capital** may bridge later development stages, priced for the high failure risk.
- Only once the project reaches **"notice to proceed" / financial close** — with permits, interconnection, and a signed offtake in hand — do cheaper construction debt, term debt, and tax equity commit.

> Development capital is expensive because most projects that enter a development pipeline never get built. The reward for surviving to financial close is access to the far cheaper capital stack above.

## Merchant vs. Contracted Risk

Everything above hinges on one question: **is the revenue contracted or merchant?**

| | **Contracted** | **Merchant** |
|---|---|---|
| Revenue source | Long-term [PPA](fin-ppa.md) with a creditworthy offtaker | Sales into the wholesale market at fluctuating prices |
| Revenue certainty | High | Low / volatile |
| Debt capacity | High (lower DSCR acceptable) | Lower (higher DSCR required) |
| Cost of capital | Lower | Higher |
| Who bears price risk | The offtaker | The project |

- A **contracted** project sells its output under a fixed-price PPA. Predictable revenue means lenders extend more, cheaper debt, and the whole stack is easier to assemble.
- A **merchant** project sells into the wholesale market and lives or dies by power prices. Lenders demand more equity, higher DSCR cushions, and pricier debt to compensate for volatility. Many projects are **partially contracted** (a PPA for part of output, merchant for the rest) to balance certainty and upside.

> **Bottom line:** The degree of contracted revenue is the master variable of project finance. It sets how much debt the project can carry, how much equity is required, and ultimately whether the project pencils. A creditworthy offtaker on a long-term PPA is the single most valuable thing a solar project can have.

For the incentives that tax equity monetizes, see [Valuing Incentives: ITC, Depreciation & Cash Value](fin-incentive-value.md), [MACRS & Bonus Depreciation](incentive-macrs-depreciation.md), and [Tax-Equity Structures](incentive-tax-equity.md). For how contracted revenue is priced, see [PPAs & Third-Party Ownership Economics](fin-ppa.md), and for the cost metric these deals are judged against, [LCOE & Levelized Cost Metrics](fin-lcoe.md). Start at the [Solar Finance & Economics Overview](fin-overview.md) for the big picture.

## Sources & Further Reading

- [Tax Equity: How Investors and Developers Finance Renewable Projects — Daeryun Law](https://www.daeryunlaw.com/us/practices/detail/tax-equity)
- [How Solar Tax Equity Partnership Works — SolarInfoPath](https://solarinfopath.com/solar-tax-equity-partnership-works/)
- [An Ultimate Guide to Transferable Tax Credits (2026) — Crux](https://www.cruxclimate.com/insights/transferable-tax-credits)
- [Transferable Energy Credits Remain Key Strategy After OBBBA — CLA](https://www.claconnect.com/en/resources/articles/25/transferable-energy-credits-remain-a-key-strategy-after-obbba)
- [About Renewable Energy Tax Credits — Novogradac](https://www.novoco.com/resource-centers/renewable-energy-tax-credits/about-renewable-energy-tax-credits)

> **Disclaimer:** This article is for educational purposes only and does not constitute financial, tax, legal, or investment advice. Project finance structures, DSCR thresholds, tax-equity terms, and credit monetization rules vary by deal and are changing rapidly in 2026. Consult qualified finance, tax, and legal professionals before relying on any figure or structure described here.
