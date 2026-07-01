# Commercial Storage & Demand-Charge Management

For most commercial and industrial (C&I) electricity customers, the single biggest lever a battery can pull isn't backup power — it's the **demand charge**. C&I bills are built from more than the kilowatt-hours consumed; a large slice comes from how *hard* the facility pulls power at its worst moment of the month. Battery energy storage systems (BESS) attack that cost directly by **shaving peaks** and **shifting load**, turning a facility's load profile from something the utility penalizes into something it tolerates.

This guide explains demand charges, the difference between peak shaving and load shifting, how to size storage for demand reduction, time-of-use (TOU) arbitrage, solar-plus-storage, dispatch and controls, the standalone-storage ITC (referenced — not duplicated), and UL 9540 / NFPA 855 siting and fire safety. It closes with a worked demand-charge-savings example. For the broader storage fundamentals, see [Battery Energy Storage](battery-storage.md); for canopy-hosted storage, see [Carports & Solar Canopies](commercial-carports.md); and for sizing the PV that pairs with it, see [Commercial Sizing & Calculations](commercial-sizing.md).

> **Key idea:** A C&I battery earns its keep mostly by lowering the *peak* (kW) the utility records, not by lowering total *energy* (kWh) consumed.

## Demand charges explained (kW vs kWh, ratchets)

Commercial tariffs typically bill two different things:

- **Energy charge ($/kWh):** how much electricity you used over the month — total volume.
- **Demand charge ($/kW):** your **highest instantaneous demand**, usually the single highest **15-minute average** during the billing period.

The distinction matters enormously. You can use modest total energy but still pay a large demand charge if you ever spike hard — for example, when several large machines, HVAC compressors, or DC fast chargers start at once.

> **Why it hurts:** Demand charges commonly make up **30%–70% of a C&I customer's bill** ([Exro](https://www.exro.com/industry-insights/demystifying-demand-charges)). A single brief spike sets the charge for the entire month.

### kW vs kWh, at a glance

| | Energy charge | Demand charge |
|---|---------------|----------------|
| **Units** | $/kWh | $/kW |
| **What it measures** | Total energy used | Peak rate of use (e.g., highest 15-min average) |
| **Reduced by** | Using less overall | Flattening peaks |
| **Battery lever** | TOU arbitrage | Peak shaving |

### Ratchets

A **demand ratchet** sets your billed demand to a percentage of the **highest peak recorded over a prior window** (often the past 11–12 months), even if your current month's peak is lower. One bad summer spike can "ratchet" your minimum billed demand upward for a year.

> **Warning:** Ratchets make peak control a *year-round* discipline. A battery that fails to shave one extreme event can lock in elevated demand charges for many subsequent months.

## Peak shaving vs load shifting

These two strategies use the same battery but target different costs.

- **Peak shaving** — discharging the battery during short, sharp demand peaks to cap the facility's **kW** draw from the grid. The goal is to lower the **demand charge**. The battery only needs enough energy to cover the *duration* of the peak.
- **Load shifting** — charging the battery when energy is cheap (off-peak) and discharging during expensive periods to reduce **kWh** cost. The goal is **energy (TOU) arbitrage**. This generally requires more energy capacity (longer duration).

```
Facility load (kW)
  ▲
  │        ╭─╮  ← uncontrolled peak (sets demand charge)
  │      ╭─╯ ╰─╮
  │ ─────┤     ├──── demand "target" (battery holds load below this line)
  │      ╰─────╯       battery discharges to fill the gap above target
  └──────────────────► time
        peak shaving caps the kW spike
```

| Strategy | Targets | Bill component | Energy needed |
|----------|---------|----------------|---------------|
| **Peak shaving** | Short demand spikes | Demand charge ($/kW) | Lower (cover peak duration) |
| **Load shifting** | Daily price spread | Energy charge ($/kWh) | Higher (longer discharge) |

Many C&I systems do **both** — shaving demand peaks and arbitraging TOU energy — with controls choosing the most valuable action at each moment.

## Sizing storage for demand reduction

Sizing a battery for demand management means choosing both **power (kW)** and **energy (kWh / duration)**:

1. **Profile the load.** Pull interval (15-minute) meter data for at least a year to find the magnitude, frequency, and **duration** of peaks.
2. **Set a demand target.** Choose the kW level you want to hold the facility below. The reduction (existing peak − target) is the demand savings you're buying.
3. **Size power (kW):** the battery's discharge power must at least equal the peak you intend to shave (the gap between actual peak and target).
4. **Size energy (kWh):** the battery must store enough energy to *sustain* that discharge for the **full duration** of the peak event — `energy ≈ shaved_kW × peak_duration_hours` (with margin for round-trip and depth-of-discharge limits).
5. **Account for back-to-back events** and recharge time so the battery is ready for the next peak.

> **Common pitfall:** Sizing only the power and forgetting duration. A 200 kW battery that can sustain that output for 30 minutes can't shave a 2-hour peak — it runs out and the demand charge resets to the un-shaved peak.

## TOU energy arbitrage

Under **time-of-use** tariffs, energy prices vary by time of day. A battery can **charge during cheap off-peak hours** and **discharge during expensive on-peak hours**, capturing the price spread on every cycle.

- Value depends on the **on-peak/off-peak spread** and the battery's **round-trip efficiency** (losses eat into the spread).
- Many TOU tariffs *also* carry demand charges with peak windows, so arbitrage and peak shaving often must be co-optimized rather than run independently.
- Arbitrage typically wants **longer-duration** storage than pure peak shaving.

## Solar-plus-storage

Pairing PV with storage is the dominant C&I configuration:

- **Self-consumption & export management:** store midday solar surplus and discharge it into evening peaks.
- **Peak coverage when the sun isn't aligned:** solar peaks at midday, but facility demand peaks (and TOU on-peak windows) often land in late afternoon/evening — storage bridges that gap.
- **Resilience:** with the right inverter/architecture, solar-plus-storage can provide backup during outages.
- **Incentives:** charging storage from on-site solar can affect how federal incentives apply to the battery — see the standalone-storage ITC note below and the site's incentive guides.

See [Battery Energy Storage](battery-storage.md) for chemistry, architecture, and round-trip-efficiency fundamentals.

## Dispatch & controls

The intelligence layer is what makes a C&I battery profitable:

- **Energy management system (EMS):** forecasts load (and solar), watches real-time demand against the target, and dispatches charge/discharge to shave peaks and arbitrage energy without overshooting.
- **Demand-target logic:** holds grid draw below the chosen kW target, discharging exactly enough to fill peaks — and avoiding wasteful early discharge that leaves the battery empty before the real peak.
- **Co-optimization:** balances competing objectives (demand reduction vs TOU arbitrage vs preserving reserve for resilience).
- **Utility signals / demand response:** some systems also respond to utility programs for additional revenue.

> **Controls are the product.** Two identical battery hardware sets can deliver very different savings depending on forecasting accuracy and dispatch logic.

## The ITC for standalone storage

A major policy shift made **standalone energy storage** (storage not charged from co-located solar) eligible for the federal **Investment Tax Credit** in its own right (generally for systems of at least 5 kWh), where previously a battery had to be charged largely by solar to qualify. The credit has a **base rate with a substantially higher "bonus" rate** available when prevailing-wage and apprenticeship requirements are met, plus possible adders (e.g., domestic content, energy community).

> **Reference, don't duplicate:** Tax-credit rates, eligibility windows, adders, and phase-out timing live in the site's incentive guides — see [Illinois Shines & Commercial Solar](illinois-shines.md) and the federal incentive guides. Rules change; confirm current terms before relying on them ([Fallbrook Financial](https://fallbrookfinancialservices.com/energy-storage-gets-its-own-credit-what-developers-need-to-know/)).

## UL 9540 / NFPA 855 commercial siting & fire

Two standards govern the safe certification and installation of commercial BESS in North America:

- **UL 9540** — the **system-level safety certification** for energy storage systems and equipment (the listing an installed BESS is expected to carry).
- **UL 9540A** — a **fire-test method** that characterizes thermal-runaway behavior; its results inform siting and separation decisions. (The 6th edition was published in March 2026, aligning large-scale fire testing with NFPA 855.)
- **NFPA 855** — the **installation standard** (*Standard for the Installation of Stationary Energy Storage Systems*) that fire marshals and inspectors enforce. It dictates the practical **how and where**: separation/spacing between units, **stored-energy caps per area** (especially in occupied buildings), fire suppression and gas detection, ventilation, signage, and a required **Hazard Mitigation Analysis (HMA)** to prevent thermal-runaway cascades.

Key siting consequences:

- **Separation distances** between racks/enclosures and to exposures; outdoor containerized units may earn **reduced distances** when UL 9540A test data shows limited thermal-runaway propagation.
- **Stored-energy limits** restrict how much energy can sit inside or near occupied spaces without additional protections.
- **Detection & suppression:** early-acting fire suppression and gas detection; newer editions address **thermal-runaway propagation prevention (TRPP)** systems.
- **Documentation:** HMA, emergency response plans, and commissioning records.

> **Warning:** NFPA 855 and UL 9540 requirements are **evolving** (notably the 2026 NFPA 855 edition and UL 9540A 6th edition emphasizing large-scale fire testing). Always design to the edition your **local AHJ** has adopted, and engage the fire marshal early. ([UL Solutions](https://www.ul.com/resources/installation-codes-and-requirements-energy-storage-systems-ess-faqs), [Telgian — NFPA 855 2026](https://www.telgian.com/nfpa-855-changes-in-2026/))

## Worked demand-charge-savings example

A simplified illustration of peak shaving for demand-charge reduction. **Figures are illustrative — use your own tariff and interval data.**

```
GIVEN
  Demand charge rate ............ $20 /kW-month
  Measured monthly peak demand .. 500 kW
  Recurring afternoon peak ...... ~100 kW above the next-highest plateau
  Peak event duration ........... ~1.5 hours (worst case)

BATTERY SIZING (for ~100 kW shave)
  Power needed .................. 100 kW (≥ the shave)
  Energy needed ................. 100 kW x 1.5 h = 150 kWh (usable)
                                  add margin for round-trip & DoD limits
                                  → size ~165-180 kWh nameplate

RESULT (if battery holds the facility to a 400 kW target)
  New billed demand ............. 400 kW
  Demand reduction .............. 500 - 400 = 100 kW
  Monthly demand savings ........ 100 kW x $20/kW = $2,000 / month
  Annual demand savings ......... $2,000 x 12 ≈ $24,000 / year
                                  (before any TOU arbitrage or incentives)
```

Layering **TOU arbitrage** and applicable **incentives** (referenced above) on top of the demand savings improves the economics further. The example ignores ratchets — in a ratcheted tariff, *consistently* hitting the 400 kW target every month is what protects the savings.

> **Reminder:** Real projects must validate the shave against **every** peak in a year of interval data — including rare extreme events — because a single missed peak (or a ratchet) can erase a month's (or a year's) savings.

## Sources & Further Reading

- [Exro — Demystifying Demand Charges](https://www.exro.com/industry-insights/demystifying-demand-charges)
- [WATTMORE — Peak Shaving with Battery Storage](https://www.wattmore.com/blog/peak-shaving-battery-storage-how-it-works)
- [Seplos — Peak Shaving vs Load Shifting (C&I BESS)](https://www.seplos.com/peak-shaving-vs-load-shifting-commercial-bess.html)
- [Fallbrook Financial — Energy Storage Gets Its Own Credit](https://fallbrookfinancialservices.com/energy-storage-gets-its-own-credit-what-developers-need-to-know/)
- [UL Solutions — Installation Codes & Requirements for ESS (FAQs)](https://www.ul.com/resources/installation-codes-and-requirements-energy-storage-systems-ess-faqs)
- [UL Solutions — UL 9540A Test Method](https://www.ul.com/services/ul-9540a-test-method)
- [Telgian — NFPA 855 Changes in the 2026 Edition](https://www.telgian.com/nfpa-855-changes-in-2026/)
- [Battery Energy Storage](battery-storage.md) · [Illinois Shines & Commercial Solar](illinois-shines.md)

*This page is general educational information, not engineering, legal, tax, or financial advice; tariffs, codes (UL 9540 / NFPA 855), and incentive rules vary by jurisdiction and change — verify current requirements with your utility, AHJ, and licensed professionals.*
