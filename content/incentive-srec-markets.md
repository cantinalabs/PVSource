# SREC Markets Deep-Dive

Solar Renewable Energy Certificates (**SRECs**) are one of the most powerful — and most misunderstood — commercial-solar revenue streams. This guide explains where SREC value comes from, how certificates are minted and sold, why prices swing, and how a commercial project actually monetizes them. It also surveys the major U.S. markets and contrasts SRECs with fixed performance-based incentives.

For state-specific program mechanics, see [More State Programs](incentive-more-states.md). For how SRECs interact with tax credits and depreciation, see [State Tax Credits & Incentives](state-tax-credits.md). For authoritative, continuously-updated program detail, start with **[DSIRE](https://www.dsireusa.org/)**.

## What Creates SREC Demand

SREC value is manufactured by policy, not by the electricity itself.

Many states adopt a **Renewable Portfolio Standard (RPS)** requiring load-serving entities (utilities and competitive suppliers) to procure a rising percentage of their electricity from renewables. Some states go further and add a **solar carve-out** — a portion of the RPS that *must* be met specifically with solar. That carve-out is what creates a dedicated market for **solar** certificates.

- **`1 SREC = 1 MWh`** of solar electricity generated (metered, not nameplate).
- Compliance entities must retire enough SRECs each year to meet the carve-out percentage.
- If they fall short, they owe the **Solar Alternative Compliance Payment (SACP)** — a per-MWh penalty.

Because a supplier will buy an SREC rather than pay the SACP, **the SACP functions as a price ceiling**: rational buyers never pay more than the SACP to satisfy their obligation. The floor, by contrast, is set by supply and demand — and can approach zero when the market is oversupplied.

## Minting, Registering, and Selling Certificates

An SREC's life cycle has three stages.

### 1. Minting

Every megawatt-hour a certified system produces mints one SREC. Systems typically need production **metering** and must be **certified** as RPS-eligible in the target state (some states require the system to be in-state or in-region; others accept out-of-state solar for a lower-value tier).

### 2. Registration and tracking

SRECs are recorded in a regional **generation attribute tracking system** that prevents double-counting:

- **PJM-GATS** — the tracking registry for the PJM region (NJ, MD, DC, PA, OH, DE, VA, IL and others).
- **NEPOOL-GIS** — the tracking system for New England (MA, CT, RI, etc.).

The registry issues serialized certificates tied to metered output, and retires them when a buyer uses them for compliance.

### 3. Selling

A commercial owner has several monetization paths:

| Path | How it works | Trade-off |
|------|--------------|-----------|
| **Spot sale** | Sell certificates as minted at the current market price | Maximum upside, maximum volatility |
| **Long-term contract / SREC forward** | Lock a fixed `$/SREC` for a term (often via the installer, an off-taker, or a financier) | Predictable cash flow; may sell below peak spot |
| **Aggregator / broker** | A third party (e.g., an SREC aggregator) registers, tracks, and sells on the owner's behalf for a fee or spread | Simplicity; gives up part of the value |

> For financeable commercial projects, a **multi-year SREC contract** is common because lenders and investors prefer predictable revenue over spot exposure.

## Price Volatility and Oversupply

SREC prices are notoriously volatile because supply responds slowly and demand is a fixed statutory schedule:

- When installations **outpace** the carve-out schedule, certificates flood the market and prices **collapse** — sometimes to a few dollars.
- When installations **lag** the schedule, prices climb **toward the SACP ceiling**.
- Legislative changes (raising the carve-out, extending the schedule, or replacing the market outright) can reset prices overnight.

This is why several states have **retired open SREC markets** in favor of administratively set incentives (see the market survey below).

## Major SREC Markets and Their Status

Values below are **approximate and change constantly — verify** before modeling. Always cross-check with [DSIRE](https://www.dsireusa.org/) and the relevant state registry.

| Market | Mechanism / status | Approximate recent value (verify) |
|--------|--------------------|-----------------------------------|
| **Washington, D.C.** | Active, high-value SREC-I market; strong carve-out, high SACP | ~`$350–$415`/SREC *(approx — verify)* |
| **New Jersey (SuSI)** | Legacy SREC market **closed**; replaced by **Successor Solar Incentive (SuSI)** — fixed 15-yr payments via ADI/SREC-II. Legacy Transition (TREC) certificates still settle | ADI ~`$85`/MWh residential net-metered, EY2025–26 *(approx — verify)*; legacy SREC/TREC in the `$150s–$190s` |
| **Maryland** | Active SREC market + RPS carve-out; **Certified SREC multiplier (up to 1.5×)** since Jan 2025 | Standard ~low `$50s`; Certified higher *(approx — verify)*; SACP ~`$55` |
| **Massachusetts** | SREC-I/SREC-II **closed to new systems** (legacy certificates run out through ~2027); successor is the **SMART tariff** (SMART 3.0 launched 2025) — a fixed tariff, not a spot certificate | Legacy SREC-II only; new projects use SMART tariff |
| **Pennsylvania** | Active but low-value SREC market (in-state carve-out) | Low single-to-double digits *(approx — verify)* |
| **Ohio** | Active but very low-value SREC market | Often under `$5`/SREC *(approx — verify)* |
| **Delaware** | Active SREC market with utility procurement (SREC Delaware) | Varies by procurement *(approx — verify)* |
| **Virginia** | Newer SREC market tied to the Virginia Clean Economy Act RPS | Emerging; verify current bids |
| **Illinois (ABP / Shines)** | **Not a spot market** — the **Adjustable Block Program / Illinois Shines** buys RECs at **fixed, block-based prices** via 15-yr contracts | Administratively set block prices *(verify current block)* |

> Note the pattern: **D.C., Maryland, PA, OH, DE, and VA** run genuine tradable SREC markets; **NJ, MA, and IL** have moved to **administratively set** payments (SuSI, SMART, ABP). Treat those three as fixed-incentive programs, not spot markets.

## How a Commercial Project Monetizes SRECs

For a commercial host in an SREC state, the practical steps are:

1. **Confirm eligibility** — verify the system qualifies for the target state's RPS tier (in-state vs. out-of-state pricing differs sharply).
2. **Meter production** — install revenue-grade or program-approved metering so generation is verifiable.
3. **Register** in the applicable tracking system (**PJM-GATS** or **NEPOOL-GIS**).
4. **Choose a sales channel** — spot, forward contract, or aggregator — balancing upside against the certainty lenders want.
5. **Retire/deliver** certificates to buyers; receive payment per MWh generated over the SREC's eligible life (term varies by state).

SREC revenue is generally **taxable income** and is **separate** from the federal Investment Tax Credit and MACRS depreciation, which apply to the equipment. See [State Tax Credits & Incentives](state-tax-credits.md) for how these stack.

## SRECs vs. Performance-Based Incentives

It helps to distinguish two revenue models that both pay for generation:

| Feature | SREC market | Performance-based incentive (PBI) / fixed tariff |
|---------|-------------|--------------------------------------------------|
| Price | Market-set, volatile, capped by SACP | Administratively set, fixed for the contract term |
| Certainty | Low (unless contracted) | High |
| Examples | D.C., MD, PA, OH, DE, VA | NJ SuSI/ADI, MA SMART, IL ABP, CT NRES |
| Financing | Harder without a forward contract | Lender-friendly |
| Upside | Can be large in undersupplied markets | Capped by the set rate |

> Bottom line: An open SREC market offers upside and risk; a fixed PBI/tariff offers bankable certainty. Many states have migrated from the former to the latter precisely to tame price volatility and control ratepayer cost.

## Sources & Further Reading

- [DSIRE — Database of State Incentives for Renewables & Efficiency](https://www.dsireusa.org/)
- [PJM-GATS — Generation Attribute Tracking System](https://gats.pjm-eis.com/)
- [NEPOOL-GIS — New England Power Pool Generation Information System](https://www.nepoolgis.com/)
- [DSIRE — New Jersey Successor Solar Incentive (SuSI)](https://programs.dsireusa.org/system/program/detail/22418)
- [Mass.gov — SMART Program Summaries](https://www.mass.gov/info-details/program-summaries)
- [DSIRE — Maryland Solar Programs](https://programs.dsireusa.org/system/program/md/solar)
- [Illinois Shines / Adjustable Block Program](https://illinoisshines.com/)
- Related site pages: [More State Programs](incentive-more-states.md) · [State Tax Credits & Incentives](state-tax-credits.md)

> **Disclaimer:** This material is educational only and is not tax, legal, or financial advice. SREC prices are volatile and program rules change frequently — every figure here is approximate and may be out of date. Verify the current status of any market, rate, or program with the administering agency, the applicable tracking registry, and a qualified professional before making investment decisions.
