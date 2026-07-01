# Energy-Yield Modeling (P50/P90)

A bankable energy-yield estimate is the financial foundation of a utility-scale solar project: lenders size debt to a conservative production number, the offtaker prices the PPA against the expected number, and the sponsor's equity return depends on the spread between them. This page explains how an annual energy estimate is built from irradiance through the **loss chain** to a **performance ratio (PR)**, the tools that do it, how weather data and inter-annual variability feed the **P50/P75/P90/P99** exceedance probabilities, where the uncertainty comes from, and how an **independent engineer (IE)** reviews the model for bankability. It pairs with [Site Selection & Land](util-site-land.md), [Trackers & Fixed-Tilt Mounting](util-trackers.md), and the [Utility-Scale Solar Overview](util-overview.md).

## The Modeling Chain

Yield modeling marches from the resource at the site down to delivered AC energy, subtracting a stack of physical losses at each step.

```
Solar resource (GHI/DNI/DHI, TMY or multi-year)
        │  transposition to plane-of-array (POA)
        ▼
POA irradiance ── shading & near-/far-horizon losses
        ▼
Effective irradiance ── soiling, IAM (reflection), spectral
        ▼
DC array output ── temperature, low-light, module quality, mismatch, LID/degradation
        ▼
DC at inverter ── DC wiring (ohmic) loss
        ▼
AC output ── inverter efficiency & clipping
        ▼
At meter ── AC wiring, MV transformer, parasitics, availability, curtailment
        ▼
Net delivered energy  →  Performance Ratio (PR)
```

## The Loss Chain

Each loss is a multiplicative derate applied to the ideal output. Typical ranges below are **planning order-of-magnitude only** — every value is site- and design-specific and must be justified from data, not assumed.

| Loss | Typical annual range | Notes |
|---|---|---|
| **Soiling** | ~1–5% (much higher in arid/dusty/no-rain sites) | Highly site-specific; cleaning schedule dependent |
| **Temperature** | ~2–8% | Hot climates worse; tracker/airflow helps |
| **Shading (near + horizon)** | ~0.5–3% | Row-to-row + terrain; tracker backtracking limits it |
| **IAM / reflection** | ~1–3% | Angle-of-incidence reflection losses |
| **Spectral** | ~±1% | Deviation from STC spectrum |
| **Module quality / mismatch** | ~1–3% | Manufacturing tolerance + array mismatch |
| **DC wiring (ohmic)** | ~1–2% | Conductor sizing tradeoff |
| **Inverter (efficiency + clipping)** | ~1–4% | Clipping driven by DC/AC ratio |
| **AC wiring + MV transformer** | ~1–3% | Collection system + step-up |
| **Availability** | ~1–3% | Forced/planned outages; ~97–99% uptime |
| **Snow** | ~0–5%+ | Latitude/climate dependent; near zero in deserts |
| **Curtailment** | site-specific | Grid/economic; modeled separately |
| **Degradation (year 1 + annual)** | ~1–2% LID yr-1, then ~0.4–0.75%/yr | Compounds over the project life |

> **Key point:** Soiling, temperature, availability, and degradation drive most of the variance between a generous and a conservative estimate. Lenders scrutinize these four hardest because they are the most assumption-driven.

## Performance Ratio

**Performance ratio (PR)** is the ratio of actual delivered energy to the energy the array would produce at its nameplate efficiency under the measured in-plane irradiance — it bundles the whole loss chain into one number.

```
        Actual AC energy delivered (kWh)
PR = ───────────────────────────────────────────────
       POA irradiance (kWh/m²) × array area (m²) × STC efficiency
```

Modern utility-scale fixed-tilt/tracker plants commonly model **PR ≈ 0.78–0.84** at year 1 in temperate climates (lower in hot/dusty sites, declining over time with degradation). **Specific yield** (kWh/kWp/yr) is the companion metric used to compare sites.

```
Worked loss-stack example (illustrative derates → PR)

Start: ideal POA energy at nameplate efficiency = 100.0%
  × (1 − 0.02)  soiling        → 98.0%
  × (1 − 0.05)  temperature    → 93.1%
  × (1 − 0.015) shading        → 91.7%
  × (1 − 0.015) IAM/reflection → 90.3%
  × (1 − 0.02)  mismatch/qual. → 88.5%
  × (1 − 0.015) DC wiring      → 87.2%
  × (1 − 0.02)  inverter+clip  → 85.5%
  × (1 − 0.02)  AC + MV xfmr   → 83.8%
  × (1 − 0.02)  availability   → 82.1%
  ───────────────────────────────────────
  Year-1 PR ≈ 0.82

Specific yield ≈ POA (kWh/m²/yr) × module eff × PR / module eff
  e.g. 2,000 kWh/m²/yr resource → ~1,600–1,700 kWh/kWp/yr (site-dependent)
```

> The derates above are illustrative placeholders chosen to show the arithmetic. Use site-measured soiling, modeled shading, manufacturer module data, and a real availability assumption — never copy these numbers into a model.

## Tools

| Tool | Role | Notes |
|---|---|---|
| **PVsyst** | Industry-standard bankable PV simulation | Reference tool lenders/IEs expect; detailed loss tree, P50/P90 module |
| **SAM (System Advisor Model)** | Free NREL tool; strong financial + P50/P90 | LCOE, PPA, tax-equity, hybrid modeling |
| **PlantPredict** | Cloud, utility-scale focused | Originated for large-plant energy estimates |
| **Solargis / Meteonorm** | Weather data + some yield | Resource data and uncertainty inputs |

**PVsyst** remains the de facto reference for bankable energy reports; **SAM** is widely used for financial structuring and as an independent cross-check; **PlantPredict** is purpose-built for utility scale. Lenders frequently require a **PVsyst-based** report plus IE review.

## Weather Data & Inter-Annual Variability

The single biggest input — and a major uncertainty source — is the solar resource itself.

- **TMY (Typical Meteorological Year):** a synthetic "typical" year stitched from a long record. Convenient for a single deterministic run, but a TMY does **not** by itself convey year-to-year spread.
- **Multi-year time series (15+ years recommended):** required to characterize **inter-annual variability (IAV)** — the natural year-to-year swing in irradiance driven by weather and large-scale patterns (e.g., ENSO). Annual GHI commonly varies a few percent (often ~2–4% standard deviation, site-dependent).
- **Ground vs satellite data:** on-site pyranometer/met-station data (ideally ≥1 year, longer is better) reduces resource uncertainty when correlated to a long satellite record.

> **Key point:** A P50 is only as credible as the resource dataset behind it. Lenders weight the *length and quality* of the weather record heavily because IAV and long-term bias dominate the P90 spread.

## P50, P75, P90, P99 — Exceedance Probabilities

The model output is not a single number but a **probability distribution** of annual energy. A **PXX** value is the production level that has an XX% probability of being **met or exceeded** in a given year.

| Metric | Meaning | Typical use |
|---|---|---|
| **P50** | Median; 50% chance of exceeding | Central / expected case; sponsor base case |
| **P75** | 75% chance of exceeding | Intermediate downside |
| **P90** | 90% chance of exceeding (1-year) | Common debt-sizing case |
| **P99** | 99% chance of exceeding | Deep stress / downside covenant |

```
P50 → P90 note (Gaussian approximation)

  P90 ≈ P50 × (1 − 1.282 × σ_total)

  where σ_total = combined relative uncertainty (one standard deviation),
  built by root-sum-square of independent sources:

  σ_total = sqrt( σ_resource² + σ_model² + σ_IAV(1yr)² + σ_data² + ... )

  Example: if σ_total ≈ 7%
    P90 ≈ P50 × (1 − 1.282 × 0.07) ≈ P50 × 0.910  →  ~9% below P50

  The 1.282 factor is the standard-normal z-score at the 10th percentile.
  Multi-year exceedance (e.g., P90 over the debt tenor) uses a smaller IAV
  term because year-to-year variation averages out over many years.
```

> **Caution:** P90 over **one year** and P90 over the **loan life** are different numbers — IAV averages down over many years, so a multi-year P90 sits closer to P50 than a single-year P90. Confirm which definition a lender's term sheet uses.

## Sources of Uncertainty

The P50→P90 gap is driven by the combined (root-sum-square) uncertainty of several largely independent contributors:

- **Resource / irradiance data** — long-term bias and measurement uncertainty (often the largest single term).
- **Inter-annual variability** — natural year-to-year resource swing.
- **Transposition / modeling** — POA conversion, soiling/shading/temperature model error (PVsyst-class uncertainty often ~±3–5%).
- **Module/inverter performance** vs datasheet, degradation rate uncertainty.
- **Availability and operational** assumptions.

These combine, not add: `σ_total = sqrt(Σ σ_i²)`. Reducing the *resource* uncertainty (longer record, on-site met data) usually moves the P90 more than refining any single loss term.

## Independent Engineer Review & Bankability

Before financial close, lenders engage an **independent engineer (IE)** to audit the yield model. The IE typically:

- Re-runs or reviews the **PVsyst/SAM** model and inputs (weather source, losses, degradation, availability).
- Validates the **P50 and P90** and may issue an independent IE P50/P90, sometimes more conservative than the sponsor's.
- Checks the loss assumptions against measured data and industry norms, flags optimistic derates, and reviews equipment warranties.
- Produces a report the lender uses to **size debt** (often to a P90 or P99 debt-service test) and the offtaker uses to validate the PPA shape.

> **Bankability** is less about a single number and more about a defensible, well-documented chain from a credible long-term weather record through justified losses to a transparent P-curve. A clean IE review is the practical definition of "bankable."

## Sources & Further Reading

- [PVsyst — P50 / P90 evaluations](https://www.pvsyst.com/help/)
- [NREL System Advisor Model (SAM)](https://sam.nrel.gov/)
- [Solargis — P50, P90 and other scenarios](https://kb.solargis.com/docs/p50-p90-and-other-scenarios)
- [Solargis — Uncertainty estimates](https://kb.solargis.com/docs/uncertainty-estimates)
- [IEA PVPS — Assessment of Performance Loss Rate of PV Power Systems](https://iea-pvps.org/wp-content/uploads/2021/04/IEA-PVPS-T13-22_2021-Assessment-of-Performance-Loss-Rate-of-PV-Power-Systems-report.pdf)
- [NREL — Perspective: Performance Loss Rate in Photovoltaic Systems](https://docs.nrel.gov/docs/fy23osti/85463.pdf)

---
*Reference content for educational use; yield assumptions, uncertainty values, and exceedance definitions are project-specific — confirm with qualified resource assessors and the project's independent engineer before relying on them.*
