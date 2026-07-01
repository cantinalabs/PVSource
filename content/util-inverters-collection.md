# Inverters & Medium-Voltage Collection

Between the modules and the project substation sits the power-conversion and **medium-voltage (MV) collection** system: the inverters that turn DC into AC, the MV transformers that step that AC up to a collection voltage (commonly **34.5 kV**), and the feeders that gather every power block into the substation. This page covers central vs string inverters at scale, **1500 VDC** architecture, the MV collection one-line, **DC/AC ratio** and clipping, cabling, and reactive-power capability. It follows from [Trackers & Fixed-Tilt Mounting](util-trackers.md) and leads into [Substations & Transmission Interconnection](util-substation.md).

## Central vs String Inverters at Utility Scale

Two inverter classes compete at utility scale, both now built around 1500 VDC.

| Attribute | **Central inverter** | **String inverter** |
|---|---|---|
| Typical rating | **~1 – 5+ MW(AC)** per unit | **~100 – 350 kW(AC)** per unit |
| Architecture | Many DC combiner inputs into one large station | Many distributed units across the field |
| DC cabling | Long DC homeruns to central skid (more DC loss) | Short DC runs; MV gathered in AC |
| Redundancy | Large failure domain (one unit = big block) | Granular; one failure is a small loss |
| MPPT granularity | Coarse | Fine — better on uneven terrain/shading |
| O&M / serviceability | Heavy, crane/skilled service; fewer units | Lighter, swap-in-field; many more units |
| Best fit | Large, flat, uniform sites; lowest $/W blocks | Complex terrain, modular phasing, decentralized layout |

> **Key point:** There is no universal winner. Central inverters historically minimize $/W on large, uniform sites; string inverters trade a bit of cost for granular MPPT, easier serviceability, and layout flexibility on irregular terrain. Many large plants now mix or choose based on terrain and O&M strategy.

## Inverter Skids / Stations

- **Central inverters** are delivered as a factory-integrated **skid** or **power station** — the inverter plus its **MV step-up transformer** and MV switchgear on a single pad or platform, sometimes called an inverter station or power block.
- **String inverters** mount distributed on tracker rows or racks; their AC outputs are gathered to a separate **MV transformer station** serving a block.

## 1500 VDC Architecture

The industry moved from 1000 VDC to **1500 VDC** maximum system voltage for utility-scale plants. The benefits are structural:

- **Longer strings** (more modules in series before hitting the voltage limit) → fewer parallel combiners and less DC cabling per watt.
- **Lower current for a given power** → reduced I²R losses and smaller conductors.
- **Higher block power** per inverter and transformer.

> All MV-collection design — string sizing, combiner counts, conductor gauge — flows from the 1500 V ceiling and the worst-case cold-temperature open-circuit voltage (Voc), which must stay below 1500 V.

## Medium-Voltage Collection System

The collection system aggregates AC power from every power block to the substation:

```
DC field → Inverter → LV/MV step-up transformer → 34.5 kV feeder → Substation
```

- Each inverter's low-voltage AC output (e.g., ~600 V) is stepped up by a **pad-mounted MV transformer** to the **collection voltage**, almost always **34.5 kV** in North America (with 13.8 kV used on smaller plants).
- Multiple transformer stations are daisy-chained or radially fed onto **34.5 kV collection feeders** that run to the project substation.
- The substation steps 34.5 kV up to transmission voltage — see [Substations & Transmission Interconnection](util-substation.md).

### ASCII Collection One-Line

```
 ┌─ Block 1 ─────────────┐   ┌─ Block 2 ─────────────┐
 │ PV→INV→0.6kV→[xfmr]→  │   │ PV→INV→0.6kV→[xfmr]→  │
 │            34.5 kV ───┼───┤            34.5 kV ───┼──┐
 └───────────────────────┘   └───────────────────────┘  │
                                                         │ 34.5 kV
 ┌─ Block 3 ─────────────┐   ┌─ Block 4 ─────────────┐  │ feeders
 │ PV→INV→0.6kV→[xfmr]→  │   │ PV→INV→0.6kV→[xfmr]→  │  │
 │            34.5 kV ───┼───┤            34.5 kV ───┼──┤
 └───────────────────────┘   └───────────────────────┘  │
                                                         ▼
                                          ┌──────────────────────┐
                                          │  Project Substation  │
                                          │ 34.5 kV → HV step-up  │
                                          │      → POI / Grid     │
                                          └──────────────────────┘
```

## Power Stations / Blocks

The plant is engineered as repeated **power blocks** (a.k.a. power stations) — a standardized unit of inverter(s) + MV transformer + associated array, sized to a round AC number (e.g., 3–5 MW). Blocks are the modular building unit for layout, procurement and commissioning, and they map cleanly onto collection feeders.

## DC/AC Ratio at Scale & Clipping

The **DC/AC ratio** (inverter loading ratio, ILR) is installed DC nameplate divided by inverter AC capacity. Utility plants are intentionally **oversized on DC**, commonly **~1.1 – 1.3** (and higher with storage co-location), so the inverter runs near its rated output for more hours.

```
DC/AC ratio = MW(DC) / MW(AC)
  Example: 130 MW(DC) / 100 MW(AC) = 1.30
```

When instantaneous DC exceeds inverter AC capacity, the inverter **clips** the excess — output is held flat at the AC limit:

```
 Power
  AC cap ─────█████████─────  ← clipped (energy lost above AC cap)
            ██         ██
          ██             ██
        ██                 ██
        ──────── time (day) ───────
```

> **Trade-off:** A higher DC/AC ratio captures more energy in mornings, evenings and cloudy hours (raising capacity factor and flattening output) at the cost of some midday clipping. The optimum balances extra module/BOS cost against clipped energy and any PPA shape requirements; real-world clipping is typically modest at 1.2–1.3 ratios.

## Cabling

| Segment | Conductor | Method |
|---|---|---|
| Module-to-combiner | **DC harnesses** / string cables (PV wire) | Above-ground on racking; trunk bus on trackers |
| Combiner-to-inverter | DC feeder cables (central) | Direct-buried or in conduit |
| Inverter-to-MV xfmr | LV AC cable | Short runs at the skid |
| MV collection feeders | **35 kV-rated MV cable** | **Trenched/direct-buried** (most common) or **overhead** on poles for long runs |

Trenched/direct-buried MV is the norm for aesthetics, lightning and reliability; **overhead** MV is used to cut cost on long feeder runs across large or rugged sites.

## Reactive Power Capability

Utility inverters are required to provide **reactive power (VAR)** support and operate across a defined **power factor** range (e.g., 0.95 leading to 0.95 lagging) to help regulate voltage. The plant controller coordinates the inverters to meet a **voltage or power-factor schedule** set by the utility/ISO at the point of interconnection — see [Substations & Transmission Interconnection](util-substation.md) and [Interconnection Studies & Queues](grid-studies-queues.md).

## Sources & Further Reading

- [Lighthief — Central vs String Inverters for Utility-Scale PV](https://lighthief.energy/choosing-inverters-for-utility-scale-solar-pv-plants-in-europe-central-vs-string/)
- [PurePower — Design Recommendations for 1500V String Inverters](https://www.purepower.com/blog/design-suggestions-to-take-advantage-of-1500v-inverters)
- [Tigo — Clipping & DC:AC Ratios](https://www.tigoenergy.com/post/microinverter-tax-7-clipping-showdown-dc-ac-ratios-arent-equal)
- [Aforenergy — Understanding Solar Inverter DC/AC Ratio](https://www.aforenergy.com/understanding-solar-inverter-dc-ac-ratio-a-complete-guide-for-pv-systems/)

---
*Reference content for educational use; inverter ratings, collection voltages, and reactive-power requirements vary by product and utility — confirm against datasheets and the interconnection agreement before design.*
