# LCOE & Levelized Cost Metrics

The **Levelized Cost of Energy (LCOE)** is the single most portable number in energy economics. It reduces an entire project — its upfront cost, decades of operating expense, financing, degradation, and total energy output — to one figure: the average cost of each unit of electricity the system produces over its life, expressed in **dollars per megawatt-hour** ($/MWh) or **cents per kilowatt-hour** (¢/kWh).

Because it is a cost-per-energy number, LCOE lets you compare a solar array to a gas plant, to a utility retail rate, or to a proposed **PPA price** on an apples-to-apples basis. This article defines LCOE precisely, walks through every input, works a full numerical example, and shows how LCOE relates to PPA pricing, grid parity, and sensitivity analysis. For the broader context, start at the [Solar Finance & Economics Overview](fin-overview.md).

## The LCOE Formula

LCOE is the ratio of the **present value of all lifetime costs** to the **present value of all lifetime energy** produced:

```
        Σ [ (CapEx_t + OpEx_t) / (1 + r)^t ]
LCOE = --------------------------------------
        Σ [ E_t / (1 + r)^t ]
```

Where, for each year `t` from 0 (or 1) to the system life `N`:

- `CapEx_t` = capital cost incurred in year `t` (usually all in year 0)
- `OpEx_t` = operating cost in year `t` (O&M, insurance, inverter replacement, land lease)
- `E_t` = energy produced in year `t` (kWh or MWh), which **declines** with degradation
- `r` = the **discount rate** (the project's cost of capital)
- `N` = the economic life in years

> **The crucial subtlety.** The **energy** in the denominator is discounted too, not just the costs. This is not because a kWh loses physical value over time — it is a financial convention that keeps the numerator and denominator on the same present-value basis so the ratio is internally consistent. Discounting energy makes later-year (degraded) production count for less, which raises LCOE relative to a naive undiscounted average.

A common expanded form separates the one-time CapEx from recurring costs:

```
        CapEx + Σ [ OpEx_t / (1 + r)^t ]
LCOE = ----------------------------------
          Σ [ E_1 · (1 - d)^(t-1) / (1 + r)^t ]
```

Here `E_1` is first-year energy and `d` is the annual **degradation rate**.

## The Inputs, One by One

Every LCOE argument reduces to five levers. Small changes in the discount rate or degradation can move the result more than large changes in headline hardware price.

| Input | What it captures | Typical direction |
|---|---|---|
| **CapEx** | Total installed cost ($/W × watts) | Dominant for solar (no fuel) |
| **OpEx** | O&M, insurance, inverter swaps, land lease | Small but not zero |
| **Degradation (`d`)** | Annual output decline | Erodes the denominator |
| **Discount rate (`r`)** | Cost of capital / WACC | Very high leverage on result |
| **Life (`N`)** | Economic life for the analysis | Longer life lowers LCOE |

### CapEx

For solar, with **no fuel cost**, CapEx dominates LCOE — often 70–90% of the levelized number. This is why LCOE tracks installed $/W so closely across segments. See [System Cost Breakdown & Benchmarks](fin-costs.md) for current $/W by segment.

### OpEx

Solar OpEx is modest but real: fixed O&M is often quoted per kW-year (utility scale can run in the low tens of $/kW-year), plus insurance, monitoring, and — importantly — an **inverter replacement** reserve around year 10–15. Utility projects add a **land lease**.

### Degradation

Modern crystalline-silicon modules degrade on the order of **~0.3% to ~0.7% per year** after a slightly larger first-year drop, with manufacturers commonly warranting performance for 25–30 years. Verify the specific module's warranty curve; degradation assumptions materially affect lifetime energy.

### Discount rate

The discount rate is usually the project's **weighted average cost of capital (WACC)**. It has enormous leverage: a project financed with cheap utility debt might discount at a mid-single-digit rate, while a homeowner's implicit rate could be higher. As a public reference point, Lazard's unsubsidized utility-scale analyses have historically assumed a capital structure implying an after-tax WACC in the high-single digits (e.g., roughly ~8%). Always match the discount rate to **whose** money is at stake.

### Life

Utility and C&I LCOE studies commonly assume **25–35 year** economic lives; residential analyses often use **25–30 years**. A longer life spreads CapEx over more energy and lowers LCOE — but only credibly if the equipment and warranties support it.

## Worked LCOE Example

The example below is **illustrative** and rounded to teach the mechanics. Do not treat the inputs as market quotes.

```
Assumptions (illustrative utility-scale-style case)
  System size ................ 1,000 kW (1 MW-DC)
  Installed CapEx ............ $1.10 / W  -> $1,100,000
  Year-1 energy .............. 1,900,000 kWh (1,900 MWh)
  Degradation (d) ............ 0.5% / year
  Fixed O&M .................. $16 / kW-yr -> $16,000 / yr
  Discount rate (r) .......... 7%
  Economic life (N) .......... 25 years
  (Simplified: no ITC/MACRS; unsubsidized "real" LCOE view)

Step 1 — Present value of costs
  CapEx (year 0) ............. $1,100,000
  PV of O&M over 25 yrs at 7%:
    Annuity factor (7%, 25) ~ 11.65
    PV(O&M) = $16,000 × 11.65 ~ $186,400
  Total PV(costs) ............ ~$1,286,400

Step 2 — Present value of energy (discounted, degraded)
  Each year: E_t = 1,900,000 × (1 - 0.005)^(t-1)
  Discount each year at 7%, then sum.
  Because degradation (~0.5%) is small vs the 7% discount,
  the discounted-energy sum ~ 1,900,000 × (a factor a bit
  below the pure 7% annuity factor of 11.65).
  Approximate PV(energy) ..... ~21,000,000 kWh (present-value kWh)

Step 3 — Divide
  LCOE = $1,286,400 / 21,000,000 kWh
       ~ $0.0613 / kWh
       ~ $61 / MWh
```

An unsubsidized ~$61/MWh sits inside the range published for U.S. utility-scale solar. **Adding the ITC and MACRS would lower the effective LCOE substantially** — one reason "subsidized" LCOE figures run well below unsubsidized ones. See [Tax-Equity Structures](incentive-tax-equity.md).

> **Benchmark check.** Lazard's 2025 analysis placed U.S. **utility-scale** solar LCOE roughly in the **~$38–$78/MWh** band (mean around the high-$50s/MWh). **Residential** LCOE is far higher — several times utility scale — because residential $/W is much higher and the array is smaller. Confirm current figures before quoting.

## LCOE vs. PPA Price

LCOE and a **PPA price** are cousins but not twins.

- **LCOE** is the *break-even* price: the $/MWh at which lifetime discounted revenue exactly equals lifetime discounted cost (NPV = 0 at the discount rate).
- A **PPA price** is what a buyer actually agrees to pay per MWh, often with an annual **escalator**.

For a developer, a PPA price **above** LCOE implies a positive-NPV project (margin for equity); a PPA **at** LCOE is break-even at the assumed return. Buyers use LCOE as a reality check: if an offered PPA is below any plausible LCOE, either the developer has cheaper capital and incentives than you assumed, or the offer is not durable.

| Concept | LCOE | PPA price |
|---|---|---|
| Nature | Computed break-even cost | Negotiated contract price |
| Includes desired profit? | No (return is in the discount rate) | Yes (embeds developer margin) |
| Escalator | Not inherent | Common (e.g., annual %) |
| Used by | Analysts, comparisons | Off-takers, developers |

## Grid Parity

**Grid parity** is the point at which solar LCOE meets or falls below the price of the alternative — the local retail rate (for behind-the-meter customers) or the wholesale/marginal cost (for utility supply). It is inherently **local**: a sunny region with expensive retail power reaches parity long before a cloudy region with cheap power.

> Grid parity is not a single global moment. Utility-scale solar reached wholesale parity in many U.S. markets years ago; residential parity depends on the retail tariff and net-metering rules described in [Utility Rate Design & Tariffs](grid-rate-design.md).

## Sensitivity Analysis

Because LCOE is a ratio driven by a few high-leverage inputs, always test how it moves. The **discount rate and CapEx** typically dominate; degradation and life matter more over long horizons.

```
Illustrative one-way sensitivity around the base case (~$61/MWh)

Input moved            Effect on LCOE
--------------------   ----------------------------------
Discount rate 7% -> 5%  falls (cheaper capital = lower LCOE)
Discount rate 7% -> 9%  rises materially
CapEx $1.10 -> $0.90/W  falls roughly proportionally
CapEx $1.10 -> $1.40/W  rises roughly proportionally
Degradation 0.5% -> 0.8% rises slightly
Life 25 -> 35 yrs       falls (CapEx spread over more energy)
```

A **tornado diagram** — bars ranking each input by its swing on LCOE — is the standard way to present this. The financing inputs almost always sit at the top. Full pro-forma sensitivity, including P50/P90 energy scenarios, is covered in [Financial Modeling & Bankability (P50/P90)](fin-modeling.md).

## Where to Go Next

- [Payback, ROI, NPV & IRR](fin-roi.md) — the investor-return metrics that complement LCOE.
- [System Cost Breakdown & Benchmarks](fin-costs.md) — the CapEx that drives LCOE.
- [Financial Modeling & Bankability (P50/P90)](fin-modeling.md) — energy uncertainty and financing.

## Sources & Further Reading

- [Lazard — Levelized Cost of Energy+ (June 2025, PDF)](https://www.lazard.com/media/eijnqja3/lazards-lcoeplus-june-2025.pdf)
- [PV-Tech — U.S. utility-scale solar LCOE, 2025 Lazard](https://www.pv-tech.org/us-utility-scale-solar-pv-lcoe-tightens-to-us38-78-mwh-in-2025-lazard/)
- [NREL — Solar Installed System Cost Analysis](https://www.nrel.gov/solar/market-research-analysis/solar-installed-system-cost)
- [Penn State EME 810 — Solar Resource Assessment and Economics](https://courses.ems.psu.edu/eme810/node/630)

> **Disclaimer.** This article is for **educational purposes only** and is not financial, tax, investment, or engineering advice. LCOE results depend heavily on assumptions that vary by project and change over time. Verify current benchmarks and consult a qualified professional before relying on any figure.
