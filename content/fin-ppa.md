# PPAs & Third-Party Ownership Economics

A **Power Purchase Agreement (PPA)** and its close cousin the **solar lease** are the dominant forms of **third-party ownership (TPO)** — arrangements where a company owns the solar system on your roof and you pay for the output or the equipment rather than buying the system outright. TPO is not just a way to "go solar for $0 down"; it is a financing structure with specific economics around who captures the [tax incentives](fin-incentive-value.md), how payments escalate, and how savings compare to ownership. This article explains those mechanics across the residential, commercial/industrial (C&I), and utility-scale markets.

## PPA vs. Lease: The Core Distinction

Both a PPA and a lease keep the solar equipment owned by a **third party** (the developer, financier, or a fund). The difference is *what you pay for*.

| | **Solar PPA** | **Solar Lease** |
|---|---|---|
| What you pay for | Energy produced ($/kWh) | The equipment (fixed $/month) |
| Payment scales with | Actual production | Nothing — fixed regardless of output |
| Production risk borne by | The provider (you pay only for kWh delivered) | You (you pay even if output is low) |
| Typical unit | Cents per kWh | Dollars per month |
| Where common | Both residential and C&I | Mostly residential |

> **Key distinction:** Under a **PPA** you buy *electricity*. Under a **lease** you rent *hardware*. A PPA aligns your payment with actual production; a lease is a flat bill. Both are alternatives to buying, and in both the third party — not you — is the tax owner of the system.

## Payment Structures: $/kWh vs. Fixed, and the Escalator

### $/kWh PPA Pricing

A PPA sets a starting price per kWh that is designed to sit **below** your current utility rate, producing immediate savings. Because retail utility rates vary enormously (roughly $0.12–$0.40/kWh across U.S. markets), PPA prices are quoted relative to the local utility, not as a universal number.

> A well-priced residential PPA typically starts **10–30% below** the customer's current utility rate, producing day-one savings. ([Solar.com](https://www.solar.com/learn/solar-ppa-rates/))

For example, a customer paying $0.28/kWh retail might sign a PPA starting near $0.14–$0.22/kWh. The wider the gap, the larger the day-one savings — but the **escalator** determines whether that gap survives.

### The Escalator — The Most Important Term

A PPA or lease payment usually rises each year by a fixed **escalator** (also called an escalation rate). This is a percentage baked into the contract.

> Residential PPA/lease escalators commonly run **0% to about 3.5% per year**, most often in the **1–3%** range. Some contracts use escalators as high as ~2.9–3.9%. ([Solar.com](https://www.solar.com/learn/solar-ppa-rates/), [SolarInsure](https://www.solarinsure.com/ppas-and-solar-leases-by-the-numbers))

The escalator is where PPAs go right or wrong:

- If the PPA escalator is **below** the utility's rate escalation, your savings *grow* every year.
- If the PPA escalator is **above** utility rate escalation, your savings *shrink* — and can eventually flip to a loss.

> **Escalator trap:** A PPA that starts 20% below the utility rate but escalates at 3.9% while the utility escalates at only 2% will see its savings erode year by year. In a worst case, by late in a 20–25 year term the PPA payment can exceed what you would have paid the utility. Always compare the PPA escalator against a *conservative* utility escalation assumption. See [Utility Bills, Rates & Savings Analysis](fin-bill.md) for how to model utility escalation.

### Illustrative Escalator Math

```
Utility rate year 1:   $0.28/kWh, escalating 2%/yr
PPA rate year 1:       $0.20/kWh, escalating 3.5%/yr

Year 1:  utility $0.280 vs PPA $0.200  -> save $0.080 (29%)
Year 10: utility $0.334 vs PPA $0.272  -> save $0.062 (19%)
Year 20: utility $0.408 vs PPA $0.384  -> save $0.024 (6%)
Year 25: utility $0.450 vs PPA $0.456  -> LOSS of $0.006
```

The same contract that saved 29% in year 1 becomes a loss by year 25 purely because of the escalator differential. A **0% (flat) escalator**, by contrast, guarantees widening savings as utility rates climb — but usually carries a higher starting price.

## Who Claims the ITC and Depreciation?

This is the economic heart of third-party ownership and the reason TPO exists.

Under a PPA or lease, the **third-party owner** — not the host customer — owns the equipment and therefore claims the federal tax benefits: the **Investment Tax Credit (ITC)** and accelerated **depreciation**. See [Valuing Incentives: ITC, Depreciation & Cash Value](fin-incentive-value.md) and [MACRS & Bonus Depreciation](incentive-macrs-depreciation.md).

Why this matters:

- Many homeowners and nonprofits **cannot efficiently use** tax credits — they may have little tax liability, or (as with nonprofits, schools, municipalities) none at all.
- A TPO provider is a taxable entity (or partners with one via [tax equity](incentive-tax-equity.md)) that *can* absorb the ITC and depreciation.
- The provider monetizes those benefits and passes a portion back to the customer as a **below-market energy price**.

> **The TPO value proposition:** The customer trades away ownership (and the tax benefits they may not be able to use) in exchange for no upfront cost and a lower, predictable energy price. The provider captures the tax value that the customer could not.

Because the provider claims the ITC, the customer **cannot** also claim it — a critical point often glossed over in sales pitches. If you can fully use the tax credits yourself, ownership usually beats TPO on lifetime economics.

## Buyout Provisions

Most residential PPAs and leases include a **buyout option** — the right to purchase the system outright, usually starting after year 5, 6, or 7 (a timing driven partly by [tax-equity](incentive-tax-equity.md) recapture rules, since the ITC has a 5-year recapture period). The buyout price is typically set at the greater of a contractual schedule or the system's **fair market value (FMV)**.

Buyout considerations:

- Buying out converts the arrangement into ownership, ending escalating payments.
- FMV can be higher than customers expect, and disputes over FMV are common.
- A pending or completed buyout can complicate a **home sale**, because the buyer must either assume the PPA/lease or the seller must buy it out at closing. Unfavorable escalators are a frequent snag in real estate transactions.

## Savings vs. Ownership: The Trade-off

| Factor | **Third-Party (PPA/Lease)** | **Ownership (cash or [loan](residential-financing.md))** |
|---|---|---|
| Upfront cost | $0 (typical) | Full cost or financed |
| Who gets ITC & depreciation | Provider | You |
| Lifetime savings | Lower (provider keeps a margin) | Higher (you keep all value) |
| Maintenance/repairs | Provider's responsibility | Yours |
| Payment predictability | Set by escalator | Fixed if loan; $0 if cash |
| Best for | Those who can't use tax credits, want no O&M burden | Those with tax appetite and/or capital |

> **Rule of thumb:** Ownership generally delivers the highest lifetime value *if* you can use the tax credits and are comfortable with maintenance. TPO shines when you cannot monetize the tax benefits, want zero upfront cost, or prefer to offload O&M and production risk.

## Residential vs. C&I vs. Utility PPAs

The word "PPA" spans three very different markets.

### Residential PPA / Lease

- Standardized, consumer-facing contracts, 20–25 year terms.
- Priced against retail utility rates; savings pitched as a percentage discount.
- Provider bundles installation, monitoring, warranty, and O&M.
- Regulated in many states as a consumer product; heavy disclosure requirements around escalators and buyouts.

### Commercial & Industrial (C&I) PPA

- Negotiated, bespoke contracts for businesses, warehouses, schools, and nonprofits.
- Often the *only* practical route for tax-exempt hosts (schools, municipalities, nonprofits) to access solar economics, since the taxable provider claims the incentives the host cannot.
- Pricing reflects the host's blended commercial rate, including [demand charges](fin-bill.md).
- See [C&I Financing: PPAs, Leases, C-PACE & On-Bill](commercial-financing.md) for the broader menu of commercial options.

### Utility-Scale PPA

- A long-term (often 15–25 year) contract between a project developer and a **utility or corporate offtaker** to sell wholesale power at a fixed or escalating $/MWh.
- This is the **contracted revenue** backbone of [project finance](fin-project.md) — it is the cash-flow certainty that lets a project raise debt.
- Pricing is set by wholesale market competition, not retail rates, and is typically far lower in $/kWh than residential PPAs.
- **Corporate PPAs** (a corporation buying clean power to meet sustainability goals) are a major driver of utility-scale development.

> The residential, C&I, and utility PPA markets share a name but operate on completely different pricing logics: retail-rate discounting, blended-commercial-rate discounting, and wholesale competitive bidding, respectively.

## Pros and Cons Summary

**Pros of PPA / lease (TPO):**

- No or low upfront cost.
- Immediate savings versus the utility bill (if priced and escalated well).
- Provider absorbs the tax benefits you may not be able to use.
- O&M, monitoring, and production risk (for a $/kWh PPA) shift to the provider.
- The only viable structure for many tax-exempt commercial hosts.

**Cons of PPA / lease (TPO):**

- Lower lifetime savings than ownership — the provider keeps a margin.
- Escalators can erode or eliminate savings over the contract term.
- You do not receive the ITC or depreciation.
- Buyout and fair-market-value provisions can be costly and can complicate a home sale.
- Long contract terms (20–25 years) reduce flexibility.

For the ownership alternative, see [Homeowner Financing 101](residential-financing.md). For how the incentives that make TPO work are valued, see [Valuing Incentives: ITC, Depreciation & Cash Value](fin-incentive-value.md). For the big-picture framing, start at the [Solar Finance & Economics Overview](fin-overview.md).

## Sources & Further Reading

- [Solar PPA Rates in 2026: What's a Good Rate for Your Home? — Solar.com](https://www.solar.com/learn/solar-ppa-rates/)
- [Solar PPA: The Simple Guide to Power Purchase Agreements in 2026 — Solar.com](https://www.solar.com/learn/power-purchase-agreement/)
- [PPAs and Solar Leases by the Numbers — SolarInsure](https://www.solarinsure.com/ppas-and-solar-leases-by-the-numbers)
- [Understanding Solar PPA Pricing Trends and Fair Market Value — Novogradac](https://www.novoco.com/periodicals/articles/understanding-solar-ppa-pricing-trends-and-determining-fair-market-value)
- [Solar Power Purchase Agreement (PPA) Explained — Sunrun](https://www.sunrun.com/go-solar-center/solar-terms/definition/power-purchase-agreement)

> **Disclaimer:** This article is for educational purposes only and does not constitute financial, tax, legal, or investment advice. PPA and lease terms, pricing, escalators, and tax treatment vary by provider, state, and project, and change over time. Read every contract carefully and consult qualified professionals before signing.
