# Grid Services, VPPs & Demand Response

Solar paired with **energy storage** can do far more than push energy onto the grid. It can stabilize frequency, support voltage, provide firm capacity at peak, and follow fast dispatch signals — the same **grid services** historically supplied by large rotating generators. When thousands of small resources are aggregated and coordinated, they form a **virtual power plant (VPP)** that behaves like a single, dispatchable plant.

This page covers the grid services solar-plus-storage can provide, **demand response** programs, VPPs and the **FERC Order No. 2222** rules that let aggregated distributed energy resources (DERs) into wholesale markets, ancillary-services markets, **vehicle-to-grid (V2G)**, and how **revenue stacking** turns these capabilities into multiple income streams.

> **Key point:** A battery's value is not just stored energy — it is *flexibility*. The same hardware can earn from energy arbitrage, capacity, frequency regulation, and demand response, often within the same week. Capturing several of these at once ("stacking") is what makes storage economics work.

See also: [Grid & Interconnection Overview](grid-overview.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Interconnection Studies & Queues](grid-studies-queues.md), [Utility-Scale Solar Overview](util-overview.md).

## Grid Services Solar + Storage Can Provide

| Service | What it does | Solar-plus-storage role |
|---|---|---|
| **Frequency regulation** | Second-to-second balancing of supply and demand to hold ~60 Hz | Batteries respond in milliseconds — ideal for fast regulation signals |
| **Voltage support / reactive power** | Inject or absorb VARs to hold voltage in range | Smart inverters supply/absorb reactive power, even at night |
| **Capacity (resource adequacy)** | Firm, available power at system peak | Storage discharges on peak; counts toward capacity if it meets duration rules |
| **Ramping / flexibility** | Follow steep net-load swings (e.g., the evening "duck curve" ramp) | Batteries charge midday, discharge into the evening ramp |
| **Energy arbitrage** | Buy/store cheap energy, sell when prices are high | Charge midday solar, discharge at peak price |
| **Operating reserves** | Standby capacity for contingencies (spinning/non-spinning) | Fast-responding storage qualifies for reserve products |
| **Black start / resilience** | Restart or island critical loads after an outage | Storage + PV can form a microgrid |

Reactive power and voltage support are delivered by the inverter itself; see [IEEE 1547 & Smart Inverters](grid-ieee1547.md) for the underlying smart-inverter functions.

## Demand Response Programs

**Demand response (DR)** pays customers to reduce or shift consumption when the grid is stressed. Rather than building peaker plants for a few stressful hours a year, the utility "dispatches" flexible load.

- **Reliability / emergency DR:** customers curtail load on call during scarcity events.
- **Economic DR:** customers reduce load when wholesale prices are high.
- **Behind-the-meter storage in DR:** a home or commercial battery discharges to cover the customer's load, achieving the same grid effect as curtailing — without the customer feeling it.
- **Bring-your-own-device (BYOD) / bring-your-own-battery:** utilities enroll customer-owned batteries, EVs, and thermostats, paying a credit for dispatch rights.

DR is the conceptual bridge to VPPs: a VPP is, in effect, a tightly coordinated, automated fleet of DR-capable and generation-capable resources.

## Virtual Power Plants (VPPs)

A **virtual power plant** aggregates many distributed resources — rooftop solar, home and commercial batteries, EV chargers, smart thermostats, and flexible loads — and dispatches them in concert so they provide utility-grade, dispatchable grid services like a conventional plant.

```
        ┌──────────────── VPP Operator / Aggregator ─────────────────┐
        │   forecasting · optimization · dispatch · market bidding   │
        └───┬─────────┬──────────┬──────────┬──────────┬─────────────┘
            │         │          │          │          │
       ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐
       │ Home   │ │ C&I    │ │ EV /   │ │ Smart  │ │ Roof   │
       │ battery│ │ storage│ │ V2G    │ │ therm. │ │ solar  │
       └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
        thousands of small DERs → behave as one dispatchable plant
```

Market context (per industry trackers):

- U.S. VPP capacity reached about **37.5 GW** of behind-the-meter flexible capacity in 2025, growing roughly **13.7%** year over year (Wood Mackenzie).
- Analyses suggest tripling VPP capacity to **80–160 GW by 2030** could serve **10–20% of peak load** and save on the order of **$10 billion** in annual grid costs.

> **Key point:** A VPP's strength is statistical. No single home battery is reliable, but ten thousand coordinated batteries are — the aggregate is forecastable and dispatchable, which is exactly what makes it sellable into capacity and ancillary-services markets.

## FERC Order No. 2222: DERs in Wholesale Markets

**FERC Order No. 2222** (issued 2020) directs the RTOs/ISOs to open their **wholesale markets** to **aggregations of distributed energy resources**, so a portfolio of small DERs can bid alongside large generators for energy, capacity, and ancillary services. It removed the historic barrier that individual DERs were too small to participate.

Implementation is **region-by-region** and still rolling out:

- Each RTO/ISO files its own compliance tariff defining minimum aggregation size, metering, telemetry, and how DERs in distribution coordinate with the wholesale market and the local utility.
- **PJM** set capacity-market implementation for **July 1, 2025** (the 2028/2029 Base Residual Auction), with energy and ancillary services proposed for a later date (around early 2028 per PJM's extension request).
- States (e.g., Indiana, Maryland, Virginia, Wisconsin) are running parallel proceedings on the **distribution-side** registration, study, and coordination rules that DER aggregations need.

> **Key point:** Order 2222 is the legal foundation that lets a VPP earn wholesale-market revenue, but the *practical* ability to participate depends on your specific RTO/ISO's compliance tariff and your state's distribution coordination rules — both of which are still maturing in 2026.

## Ancillary-Services Markets

**Ancillary services** are the products RTOs/ISOs buy to keep the grid reliable moment-to-moment, and they are where fast storage and VPPs are most competitive:

| Product | Speed | Storage fit |
|---|---|---|
| **Frequency regulation** | Seconds (follows AGC signal) | Excellent — fastest, highest-value for batteries |
| **Spinning reserve** | Minutes, must already be synchronized | Good — instant availability |
| **Non-spinning / supplemental reserve** | Minutes, startable | Good |
| **Voltage / reactive support** | Continuous | Good — inverter-based |
| **Ramping products** | Minutes | Good — manages net-load swings |

Because batteries respond in milliseconds, they are especially valuable for **frequency regulation**, where being fast and accurate is worth more than being big.

## Vehicle-to-Grid (V2G)

**Vehicle-to-grid (V2G)** lets a grid-connected EV discharge its battery back to the grid (or a building, "V2B"/"V2H"), turning a fleet of parked EVs into a distributed storage resource a VPP can dispatch.

- EVs spend most of their time parked and plugged in — large, idle storage capacity.
- **Managed charging** (V1G) shifts *when* an EV charges to soak up cheap/solar energy or relieve peaks; **V2G** adds bidirectional discharge for fuller grid services.
- Practical hurdles include bidirectional charger cost, battery-warranty/cycling concerns, standardized interconnection, and customer willingness — but with EVs at roughly 10% of new-vehicle sales in 2025, the aggregate potential is large and growing.

## Revenue Stacking

**Revenue stacking** means earning from several services with the same asset over time, instead of dedicating it to one. A battery that only did energy arbitrage would sit idle much of the day; stacking puts its flexibility to work continuously.

```
  One battery, layered revenue over a day:

   Midday   ── charge on cheap/abundant solar  (arbitrage, low cost)
   Afternoon── provide frequency regulation     (ancillary revenue)
   Evening  ── discharge into the peak / ramp    (arbitrage + capacity)
   Event days─ respond to demand-response calls   (DR payments)
   Year-round─ count toward capacity / resource adequacy
```

Example sketch (illustrative, not a guaranteed return): a commercial battery might earn a **capacity** payment for being available at peak, layer **frequency-regulation** income on non-peak hours, capture **energy arbitrage** on the daily price spread, and collect **demand-response** payments on event days — coordinated by a VPP operator bidding the aggregate into the market under Order 2222.

> **Key point:** Stacking requires careful rules-of-the-road: you cannot always sell the same megawatt-hour twice, and market and utility-program rules govern which services can be combined simultaneously. The art is sequencing non-conflicting services so the asset is rarely idle.

## Sources & Further Reading

- [FERC — Order No. 2222 Fact Sheet](https://ferc.gov/media/ferc-order-no-2222-fact-sheet)
- [SEPA — VPP and Supporting DER Policy Developments: Q3 2025](https://sepapower.org/knowledge/vpp-der-policy-q3-2025/)
- [Wood Mackenzie — Virtual power plant capacity expands to 37.5 GW](https://www.woodmac.com/press-releases/virtual-power-plant-capacity-expands-13.7-year-over-year-to-reach-37.5-gw)
- [RMI — Grid-Scale Virtual Power Plants Are Here](https://rmi.org/grid-scale-virtual-power-plants-are-here-have-utilities-noticed/)
- [SEIA — How Virtual Power Plants Are Making the Grid More Affordable, Reliable, and Secure](https://seia.org/blog/virtual-power-plants/)
- [U.S. DOE — Virtual Power Plants Projects](https://www.energy.gov/edf/virtual-power-plants-projects)

---
*This page is educational reference material, not financial or market-participation advice; available programs, market products, and Order 2222 implementation differ by RTO/ISO and state and change frequently — verify current rules for your region.*
