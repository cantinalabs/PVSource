# Energy Storage Overview & Use Cases

Energy storage turns a solar array — or a bare grid connection — from something that only *makes or draws* power into something that can *hold* power and release it on command. That single capability, **dispatchability**, is what unlocks backup, bill management, and grid revenue. This page frames *why* storage is added, the full **value stack** it can serve, the distinction between **behind-the-meter** and **front-of-meter** deployment, the difference between **power (kW)** and **energy (kWh)**, and — just as important — when storage does *not* pay. Concepts span **residential**, **commercial**, and **utility-scale** segments; details are covered in the sibling pages [Battery Chemistries Deep-Dive](stor-chemistries.md), [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md), and [Storage Sizing & Design](stor-sizing.md).

## Why Storage Exists

Solar generation and load rarely line up in time. A rooftop array peaks at midday; a household peaks in the evening. A commercial site's demand spikes may last minutes but set a monthly charge. The grid needs resources that respond in seconds. Storage resolves all of these **time-and-power mismatches** by decoupling *when energy is produced or bought* from *when it is used or sold*.

> **Core idea:** Storage does not create energy — it moves energy in **time** and reshapes the **power** profile a site presents to the grid. Every dollar of value comes from one of those two levers.

Three structural trends have made storage mainstream by 2025–2026:

- **Falling cell cost.** LFP cells reached roughly $80/kWh in 2025 (BloombergNEF), making storage economics workable in far more situations than a decade ago.
- **Eroding net metering.** As many utilities move from full retail export credit to lower "avoided-cost" or net-billing rates, storing surplus solar for on-site evening use often beats exporting it.
- **Standalone storage incentives.** Under the Inflation Reduction Act's §48E Investment Tax Credit, **standalone** storage (≥5 kWh, no solar required) became ITC-eligible — a base credit that reaches 30% when prevailing-wage/apprenticeship or small-project (<1 MW) conditions are met. See [Battery Energy Storage](battery-storage.md) and the tax notes below.

## The Value Stack

The economic case for storage is rarely a single benefit. It is a **stack** of value streams the same asset can serve — sometimes simultaneously, sometimes in conflict. Understanding the stack is the heart of storage economics.

| Value stream | What it does | Measured in | Primary segment |
|---|---|---|---|
| **Backup / resilience** | Powers critical (or whole-home) loads through outages | kW held, kWh of runtime | Residential, commercial |
| **Self-consumption** | Stores midday solar surplus for evening use instead of exporting cheaply | kWh shifted | Residential (weak-export tariffs) |
| **TOU arbitrage** | Charges at cheap/off-peak hours, discharges at expensive peak hours | $/kWh spread | Residential, commercial |
| **Demand-charge management** | Shaves the monthly peak **kW** to cut demand charges | $/kW peak reduced | Commercial (dominant driver) |
| **Grid services / VPP** | Frequency regulation, capacity, aggregated dispatch via a Virtual Power Plant | $/kW-service, event payments | All segments, growing residential VPP |
| **PV / renewable firming** | Smooths solar/wind output; captures otherwise-clipped energy | kW ramp, kWh recaptured | Commercial, utility |
| **Capacity** | Firm capacity to meet peak-demand or resource-adequacy obligations | $/kW-year | Utility, front-of-meter |

> **Key takeaway:** The *dominant* stream differs by segment. Residential is usually **backup + self-consumption**; commercial is usually **demand-charge management + TOU arbitrage**; utility is **capacity + grid services + firming**. A good design maximizes the *combined* stack without letting streams cannibalize each other.

### Stacking and its conflicts

Value streams compete for the same stored energy. A battery held near full for **backup** cannot also be cycled hard for **arbitrage**; energy dispatched for a **VPP** event may not be available for the evening **self-consumption** window. Controls (see [Battery Management Systems & Controls](stor-bms.md)) arbitrate these priorities — for example, reserving a "backup floor" of state-of-charge while trading the rest.

```
Value-stack priority (typical residential logic)
  100% SoC ┌───────────────────────────────┐
           │  Arbitrage / VPP-dispatchable  │  ← traded freely
           │                                │
   ~30% SoC├───────────────────────────────┤
           │  Backup reserve (do not touch) │  ← held for outages
     0% SoC└───────────────────────────────┘
```

## Behind-the-Meter vs Front-of-Meter

*Where* the battery sits relative to the utility revenue meter defines what value it can capture, who owns it, and which rules apply.

| | Behind-the-Meter (BTM) | Front-of-Meter (FTM) |
|---|---|---|
| **Location** | On the customer's side of the meter | On the grid side (substation / plant) |
| **Typical scale** | 5 kWh–few MWh (homes, C&I sites) | Tens of MW / hundreds of MWh (utility) |
| **Primary value** | Bill reduction, backup, self-consumption | Wholesale market, capacity, T&D deferral |
| **Who benefits** | The site host | The grid / market participants |
| **Metering** | Reduces what the customer imports/exports | Meters energy into the wholesale market |
| **Interconnection** | Utility interconnection rules for DER | Transmission/ISO interconnection queue |

A single asset can straddle both: a BTM commercial battery may also earn FTM-style revenue by joining a **VPP** or wholesale program. Interconnection requirements for either side are covered in [Energy-Storage Interconnection](grid-storage-interconnection.md).

## Power (kW) vs Energy (kWh)

The most common storage design error is confusing **power** with **energy**. They are independent ratings, and both must fit the job.

- **Power (kW)** — how *fast* the battery can charge or discharge. It sets the largest load you can carry and how sharply you can shave a demand peak. Expressed relative to capacity as the **C-rate** (a 20 kWh battery at 0.5C = 10 kW).
- **Energy (kWh)** — how *much* total energy is stored. It sets *how long* you can sustain a load, i.e. **duration**.

```
Power vs energy — same energy, different jobs
  Battery A: 100 kWh / 100 kW  (1C, "1-hour")  → short, hard demand-shave
  Battery B: 100 kWh /  25 kW  (0.25C, "4-hr") → long, gentle load-shift

  A can shave a 100 kW spike for ~1 h.
  B can only supply 25 kW — but for ~4 h.
  Neither is "better"; they fit different use cases.
```

> **Rule of thumb:** Size **power** to the peak load or the depth of the demand-shave; size **energy** to the *duration* you must cover. Backup and short peak-shaving are power-limited; arbitrage and long-duration firming are energy-limited. See [Storage Sizing & Design](stor-sizing.md) for worked cases.

## When Storage Does — and Doesn't — Pay

Storage is not universally economic. It pays when the value stack it can serve exceeds its levelized cost. It disappoints when the stack is thin.

**Storage tends to pay when:**

- Demand charges are a large share of a commercial bill (often $10–$30+/kW-month).
- TOU price spreads are wide (peak-to-off-peak ratios of 2–3× or more).
- Net metering is weak, so exported solar earns far less than it offsets.
- Outages are frequent or costly (spoiled inventory, lost production, medical loads).
- Incentives (ITC, state storage rebates, VPP payments) offset upfront cost.

**Storage tends *not* to pay when:**

- Full retail net metering is intact and outages are rare — solar alone captures most value.
- Demand charges and TOU spreads are minimal (flat tariffs).
- The site is grid-reliable and has no resilience need to monetize.
- Round-trip losses (~5–15% at the AC level) and cycle degradation outweigh a thin arbitrage spread.

> **Reality check:** Every stored kWh is bought/generated, held, and released at a **round-trip efficiency** below 100%. A battery only "wins" an arbitrage trade if the price spread exceeds those losses *plus* the amortized cost of the cycle. A 90% RTE system needs the sell price to beat roughly 1.11× the buy price just to break even before hardware cost.

### Use-Case Value by Segment

| Use case | Residential | Commercial | Utility / FTM |
|---|---|---|---|
| **Backup / resilience** | Primary driver | Common (critical loads) | Black-start, microgrid |
| **Self-consumption** | Primary where export is weak | Secondary | N/A |
| **TOU arbitrage** | Moderate | Strong | Wholesale energy arbitrage |
| **Demand-charge mgmt** | Rare (few residential demand charges) | **Dominant driver** | N/A |
| **Grid services / VPP** | Growing (aggregated) | Strong | Core revenue |
| **PV firming / clipping recapture** | Minor | Moderate | Strong |
| **Capacity / resource adequacy** | Via VPP only | Some programs | **Core revenue** |

## Related Pages

- [Battery Energy Storage](battery-storage.md) — the storage hub page
- [Battery Chemistries Deep-Dive](stor-chemistries.md) — LFP, NMC, flow, and more
- [Battery Management Systems & Controls](stor-bms.md) — how the value stack is arbitrated
- [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md) — architecture choices
- [Storage Sizing & Design](stor-sizing.md) — turning use cases into kW and kWh
- [Storage Safety, Codes & Standards](stor-safety.md) — UL 9540 / NFPA 855
- [BESS / Battery O&M & Augmentation](om-bess-augmentation.md) — keeping capacity over the life
- [Energy-Storage Interconnection](grid-storage-interconnection.md) — BTM and FTM connection rules

## Sources & Further Reading

- [UL Solutions — Installation Codes & Requirements for ESS (FAQs)](https://www.ul.com/resources/installation-codes-and-requirements-energy-storage-systems-ess-faqs)
- [EPA — Summary of Inflation Reduction Act Renewable-Energy Provisions](https://www.epa.gov/green-power-markets/summary-inflation-reduction-act-provisions-related-renewable-energy)
- [Morgan Lewis — The State of Play for Energy Storage Tax Credits](https://www.morganlewis.com/pubs/2025/03/the-state-of-play-for-energy-storage-for-tax-credits)
- [Utility Dive — IRA Sets the Stage for US Energy Storage](https://www.utilitydive.com/spons/ira-sets-the-stage-for-us-energy-storage-to-thrive/635665/)
- [Stem — Battle of the BESS: AC- vs. DC-Coupling](https://www.stem.com/battle-of-the-bess-ac-vs-dc-coupling/)

*This page is general educational information, not engineering, legal, tax, or financial advice; tariffs, codes (UL 9540 / NFPA 855), incentive rules, and interconnection requirements vary by jurisdiction and change — verify current requirements with your utility, AHJ, and licensed professionals.*
