# Thermal & Long-Duration Storage

Lithium-ion batteries are excellent at shifting energy across a few hours — the classic 4-hour evening peak. But as grids add more wind and solar, they face gaps that last far longer than a battery's afternoon-to-evening window: multi-day lulls, seasonal mismatches, and week-long weather events. Filling those gaps is the domain of **long-duration energy storage (LDES)** — technologies that store energy for roughly 10 hours to multiple days (and, for some, seasons) at a cost per stored kWh that lithium-ion cannot economically reach.

This article surveys the LDES landscape — flow batteries, iron-air, thermal storage, mechanical storage, and hydrogen — comparing duration, **round-trip efficiency (RTE)**, technical maturity, and where each realistically fits. It complements the lithium-focused [Battery Chemistries Deep-Dive](stor-chemistries.md) and the grid context in [Grid-Scale & Utility Storage](stor-grid-scale.md).

> **The LDES trade-off in one sentence:** Most long-duration technologies accept *lower round-trip efficiency* in exchange for *dramatically cheaper energy capacity* — because when you only cycle a few dozen times a year to cover rare, long gaps, cheap kWh matters far more than efficient kWh.

## Why Duration Changes the Economics

A battery's cost has two parts: **power capacity** (kW — the inverter/PCS and interconnection) and **energy capacity** (kWh — the storage medium itself). For short-duration lithium, energy is the expensive part, so stretching duration gets pricey fast. LDES technologies decouple the two: they use cheap, abundant storage media (iron, water, salt, air, rock) so adding hours is inexpensive.

```
Short duration (Li-ion):  high $/kWh, high RTE, cycles daily
Long duration (LDES):     low  $/kWh, lower RTE, cycles rarely/deeply

Cost of a stored MWh dominates when you rarely cycle.
So LDES trades efficiency for cheap energy capacity.
```

This is why a 40% round-trip efficiency can be perfectly rational for a resource that discharges for 100 hours during a rare grid emergency but would be absurd for a battery cycling twice a day.

## Electrochemical LDES

### Flow batteries

**Flow batteries** store energy in liquid electrolytes held in external tanks, pumped through a central power stack. The defining feature: **power and energy are decoupled** — the stack sets power (kW), the tank size sets energy (kWh). Want more hours? Add more electrolyte and bigger tanks, no new stacks. This makes flow batteries naturally suited to longer durations (typically ~6–12+ hours).

- **Vanadium redox flow (VRFB)** is the most mature chemistry. The electrolyte doesn't degrade the way solid battery electrodes do, enabling very long cycle life and deep daily cycling with minimal fade. RTE is typically in the ~65–80% range. Downsides: lower energy density (large footprint), and historically the cost of vanadium.
- Other chemistries (iron, zinc-bromine, organic) target lower-cost electrolytes.

**Best fit:** Daily deep-cycling in the ~6–12 hour range where footprint is available and long calendar/cycle life is valued.

### Iron-air batteries

**Iron-air** batteries store energy through **reversible rusting** — iron reacts with oxygen from ambient air to discharge, and the reaction is reversed to charge. The materials (iron, water, air) are among the cheapest and most abundant on Earth, which is the entire point.

Form Energy, the leading developer, targets systems that discharge for **up to ~100 hours**. The trade-off is efficiency: iron-air **round-trip efficiency is low — roughly in the ~40% range or below** — far below lithium's ~85–90%. That is acceptable for a resource designed to cover rare, multi-day grid gaps rather than daily cycling. Form Energy's first commercial deployment (with Great River Energy) broke ground in 2024, with commissioning and multi-year performance evaluation following — so the technology is early-commercial, not yet broadly proven at scale.

**Best fit:** Multi-day (100-hour) backup and reliability, infrequent deep discharges where ultra-low cost per kWh dominates and efficiency is secondary.

## Thermal Energy Storage

Thermal storage stores energy as heat (or cold) and either uses that heat directly or converts it back to electricity.

### Molten salt (sensible heat, power-coupled)

**Molten-salt** thermal storage is the most commercially proven grid thermal technology, long paired with **concentrating solar power (CSP)**. Solar heat (or, in newer concepts, electric resistance heating) warms molten salt held in insulated tanks; the stored heat later drives a steam turbine. It provides many hours of dispatchable output and is well understood at utility scale, though it is capital-intensive and tied to a thermal power cycle.

### Sensible vs. latent heat

- **Sensible heat** storage raises the temperature of a medium (molten salt, rock, water, concrete, or bricks). Simple, cheap media; energy scales with mass and temperature swing. Emerging "heat batteries" store energy in firebricks or crushed rock heated by cheap renewable electricity for later industrial heat or power.
- **Latent heat** storage uses a **phase change material (PCM)** that absorbs/releases large amounts of energy at a constant temperature as it melts and solidifies. Higher energy density in a narrow temperature band, but more complex and costly media.

**Best fit:** Delivering stored *heat* (industrial process heat, buildings) is often more efficient than round-tripping to electricity. Thermal-to-power (molten salt) fits utility dispatch where a thermal cycle already exists.

## Mechanical Storage

Mechanical systems store energy as potential or pressure energy — old ideas, very long life, low energy density.

### Pumped hydro storage (PHS)

**Pumped hydro** is by far the largest form of grid storage in the world today. Water is pumped uphill to an upper reservoir when energy is cheap and released through turbines when needed. It offers large capacity, long life (many decades), and solid RTE (typically ~70–85%). Constraints are geographic (needs elevation and water) and permitting-heavy, with long lead times — but it remains the mature backbone of long-duration storage.

### Compressed air energy storage (CAES)

**CAES** compresses air into an underground cavern (or vessels) and later expands it through a turbine to generate power. Durations can be long and capacities large. Traditional CAES burns some gas on expansion (lowering efficiency and adding emissions); newer **adiabatic** and advanced designs capture and reuse the compression heat to improve RTE and eliminate combustion. Like PHS, it depends on suitable geology.

### Gravity storage

**Gravity** systems raise a heavy mass (blocks, weights, or water in shafts) to store energy and lower it to recover it — mechanically similar to pumped hydro without the water/elevation requirement. Several designs are in demonstration/early-commercial stages; the concept is simple and durable but energy density and cost-competitiveness at scale are still being proven.

## Hydrogen and Power-to-Gas

**Hydrogen** offers something unique among storage options: the potential for **seasonal** storage. Surplus renewable electricity runs an **electrolyzer** to split water into hydrogen; the hydrogen is stored (tanks, or potentially geologic caverns for very large volumes) and later reconverted to electricity in a **fuel cell or turbine** — or used directly as an industrial feedstock or fuel.

The catch is efficiency. The full **power → hydrogen → power** round trip is lossy — commonly cited RTE in the ~30–40% range — because both electrolysis and reconversion lose energy. That makes hydrogen poorly suited to daily cycling but potentially valuable for the hardest problem in decarbonization: storing energy across weeks and seasons, and for hard-to-electrify end uses where hydrogen itself is the product.

**Best fit:** Seasonal storage and industrial/fuel end uses; a complement to, not a competitor with, daily batteries.

## Comparison at a Glance

Values below are broad, typical ranges for orientation, not design figures — real performance varies widely by vendor and configuration.

| Technology | Typical duration | Round-trip efficiency (approx.) | Maturity | Best fit |
|---|---|---|---|---|
| Lithium-ion (reference) | ~1–8 hr | ~85–90% | Mature | Daily cycling, fast response |
| Flow (vanadium) | ~6–12+ hr | ~65–80% | Commercial, scaling | Daily deep cycling, long life |
| Iron-air | up to ~100 hr | ~40% or below | Early commercial | Multi-day backup/reliability |
| Molten salt (thermal) | hours–~10+ hr | thermal cycle dependent | Commercial (with CSP) | Dispatchable heat/power |
| Sensible/latent heat | hours–days | high for heat delivery; lower to power | Emerging–commercial | Industrial process heat |
| Pumped hydro | hours–days | ~70–85% | Mature (largest today) | Bulk, long-duration, decades of life |
| Compressed air | hours–days | ~40–70% (design dependent) | Commercial/emerging | Bulk, geology-dependent |
| Gravity | hours | mechanical, moderate–high | Demonstration/early | Emerging bulk storage |
| Hydrogen (power-to-power) | days–**seasonal** | ~30–40% | Emerging | Seasonal storage, industrial fuel |

## Where Each Fits: A Mental Model

```
Response speed & daily cycling  ->  Lithium-ion, flow
Multi-hour to ~12 hr daily      ->  Flow, longer-duration Li-ion, pumped hydro
Multi-day gaps (10-100+ hr)     ->  Iron-air, CAES, pumped hydro
Industrial heat                 ->  Thermal (sensible/latent, molten salt)
Weeks to seasonal               ->  Hydrogen (and large geologic storage)
```

No single technology wins everywhere. Lithium-ion owns the short-duration, fast-response space (see [Battery Chemistries Deep-Dive](stor-chemistries.md) and [Grid-Scale & Utility Storage](stor-grid-scale.md)); LDES technologies compete for the longer-duration and seasonal niches that lithium cannot serve economically. As renewable penetration rises, the value of the deep, cheap, long-duration end of this spectrum grows — which is why so many of these technologies are moving from lab to first commercial deployments now.

## Key Takeaways

- **LDES** covers ~10 hours to multiple days (and seasons), trading lower round-trip efficiency for far cheaper energy capacity.
- **Flow batteries** decouple power and energy, suiting long, deep daily cycling; **iron-air** targets ~100-hour multi-day backup at very low cost but ~40% RTE.
- **Thermal storage** (molten salt, sensible/latent heat) is often most efficient when delivering *heat* rather than round-tripping to electricity.
- **Mechanical storage** — pumped hydro (the mature global leader), CAES, and gravity — offers bulk, long-life, geography-dependent capacity.
- **Hydrogen** is uniquely capable of *seasonal* storage but is efficiency-limited (~30–40% power-to-power).
- The grid will use a portfolio: lithium for hours, LDES for days and seasons.

## Sources & Further Reading

- [Battery Technology — Form Energy](https://formenergy.com/technology/battery-technology/)
- [100-hour LDES battery technologies from Form, Noon and Ore: how do they compare? — Energy-Storage.news](https://www.energy-storage.news/100-hour-ldes-battery-technologies-from-form-noon-and-ore-how-do-they-compare/)
- [Google bets big on 30GWh of Form Energy's iron-air storage despite efficiency trade-offs — Energy-Storage.news](https://www.energy-storage.news/google-bets-big-on-30gwh-of-form-energys-iron-air-battery-storage-despite-efficiency-trade-offs/)
- [Long Duration Storage Shot — U.S. Department of Energy](https://www.energy.gov/eere/long-duration-storage-shot)
- [Cost Projections for Utility-Scale Battery Storage — NREL](https://docs.nrel.gov/docs/fy25osti/93281.pdf)

> **Disclaimer:** This article is provided for educational purposes only and is not engineering or investment advice. Duration, efficiency, cost, and maturity figures are broad, rapidly changing ranges that vary by technology developer and project; many LDES technologies are early-stage. Consult current primary sources and qualified professionals before making technology or investment decisions.
