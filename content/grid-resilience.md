# Grid Resilience & Reliability

When the lights stay on through an ordinary equipment fault, that is **reliability**. When they come back quickly — or never fully go out — through a hurricane, a wildfire, or a cascading regional failure, that is **resilience**. The two words are often used interchangeably, but they describe different properties of the power system, and the distinction matters enormously for anyone weighing solar and storage as backup.

This page defines reliability versus resilience, explains the standard reliability metrics (SAIDI, SAIFI, CAIDI), surveys the causes of outages, clarifies why grid-tied solar *alone* provides no backup while solar-plus-storage and microgrids do, and covers grid-hardening, the role of distributed energy resources (DERs), critical facilities, cascading failures, and climate stressors.

## Reliability vs. Resilience

| | Reliability | Resilience |
|---|---|---|
| **Question it answers** | How often, and how long, do customers lose power under *normal* conditions? | How well does the system withstand and recover from *rare, high-impact* events? |
| **Typical stressors** | Routine equipment failures, animals, ordinary weather | Hurricanes, wildfires, ice storms, floods, cyberattacks, cascading failures |
| **How it's measured** | Standardized indices (SAIDI, SAIFI, CAIDI) | Harder to quantify; measured by recovery time, avoided customer-hours lost, critical-load survival |
| **Design goal** | Minimize routine interruptions | Withstand shocks, degrade gracefully, recover fast |

> **Key distinction:** Reliability is about the *everyday*; resilience is about the *catastrophic*. A grid can be highly reliable (rarely fails on a normal day) yet not very resilient (collapses for a week after a major storm). Solar-plus-storage and microgrids primarily improve **resilience** — keeping critical loads alive when the wider grid is down.

## Reliability Metrics: SAIDI, SAIFI, CAIDI

Utilities quantify reliability with standardized indices defined by IEEE Standard 1366. Three are near-universal.

| Metric | Full name | Measures | Formula |
|---|---|---|---|
| **SAIDI** | System Average Interruption Duration Index | Total outage *time* per customer per year | (Σ customer-interruption minutes) ÷ (total customers) |
| **SAIFI** | System Average Interruption Frequency Index | Number of outages per customer per year | (total customer interruptions) ÷ (total customers) |
| **CAIDI** | Customer Average Interruption Duration Index | Average length of an outage *when one occurs* | SAIDI ÷ SAIFI |

- **SAIDI** answers "how many minutes without power did the average customer experience this year?" Lower is better.
- **SAIFI** answers "how many separate outages did the average customer experience?" Lower is better.
- **CAIDI** answers "once the power went out, how long did it stay out on average?" It is literally SAIDI divided by SAIFI, so it captures *restoration speed*.

```
Worked example
Total customers                       = 100,000
Total customer-interruption minutes   = 9,000,000
Total customer interruptions          = 120,000

SAIDI = 9,000,000 / 100,000  = 90 minutes/customer/year
SAIFI = 120,000   / 100,000  = 1.2 interruptions/customer/year
CAIDI = SAIDI / SAIFI = 90 / 1.2 = 75 minutes/interruption
```

A related index, **MAIFI** (Momentary Average Interruption Frequency Index), counts brief interruptions (typically under a minute) that the longer-duration indices ignore.

> **Reporting note:** In the U.S., most states require utilities to report SAIFI, and many require SAIDI; fewer require CAIDI. A crucial subtlety is **Major Event Days (MEDs)** — utilities often report these metrics both *with* and *without* the worst storm days excluded. Numbers "excluding major events" describe everyday reliability; numbers "including major events" reveal exposure to the very shocks that resilience is about.

## Causes of Outages

Outages have many causes; understanding them shows why some are addressed by reliability engineering and others demand resilience investment.

| Cause | Description | Reliability or resilience issue |
|---|---|---|
| **Weather (routine)** | Wind, rain, lightning, ordinary storms bringing down lines | Reliability (frequent, moderate) |
| **Weather (extreme)** | Hurricanes, ice storms, derechos, floods | Resilience (rare, severe) |
| **Vegetation** | Trees and branches contacting lines | Both — a leading everyday cause |
| **Equipment failure** | Aged transformers, conductors, switchgear failing | Reliability |
| **Animals** | Squirrels, birds bridging energized parts | Reliability (surprisingly common) |
| **Wildfire & PSPS** | Fire damage, or preemptive **Public Safety Power Shutoffs** to prevent ignition | Resilience / policy |
| **Human & vehicle** | Car-pole collisions, dig-ins, operator error | Reliability |
| **Cyber / physical attack** | Deliberate disruption of grid assets | Resilience |
| **Cascading failure** | Local fault propagating into wide-area collapse | Resilience (rare, catastrophic) |

### Wildfire and Public Safety Power Shutoffs (PSPS)

A **Public Safety Power Shutoff** is a *deliberate* de-energization of power lines during dry, high-wind conditions to prevent utility equipment from sparking a wildfire. PSPS originated in California (San Diego Gas & Electric requested authority in 2008; the CPUC affirmed utilities' authority to use it in 2012) and has since spread to utilities in Oregon, Idaho, Colorado, Hawaii, and beyond as wildfire risk broadens with a changing climate. Outage duration is driven by how long the dangerous weather persists plus the time to inspect and safely re-energize lines afterward. PSPS is unique among outage causes: the grid is working, but power is cut *on purpose* for safety — which makes on-site backup especially valuable in fire-prone regions.

## Why Solar Alone Doesn't Provide Backup

One of the most common and costly misconceptions in residential solar is that panels keep the house powered during a blackout. Standard **grid-tied** solar does the opposite: it shuts off.

The reason is **anti-islanding**, a safety requirement codified in **IEEE 1547** and **UL 1741**. An "island" is a section of grid that stays energized by local generation after the utility supply is lost. That is dangerous: a live island can electrocute line workers repairing the "dead" circuit and can damage equipment on reconnection. So certified grid-tied inverters are required to detect grid loss and **stop energizing the lines within about two seconds**. After the grid is restored and stable, they wait a mandatory period (typically 5 minutes per IEEE 1547) before resynchronizing.

```
Grid-tied solar during an outage
Grid goes down
      │
      ▼
Inverter detects loss  ──►  stops exporting within ~2 s (anti-islanding)
      │
      ▼
Solar array sits idle — HOUSE HAS NO POWER, even at high noon
```

> **Critical takeaway:** A plain grid-tied array with no battery provides **zero** backup during an outage — by design, for safety. Backup requires equipment that can safely disconnect from the grid and form its own isolated "island."

### What Does Provide Backup

- **Solar + storage (hybrid/backup-capable inverter):** a hybrid inverter with a battery can **intentionally island** — it disconnects from the grid at a transfer point, then energizes the home's loads on its own, with solar recharging the battery by day. This is the standard residential resilience solution. See [Microgrids & Islanding](grid-microgrids.md).
- **Microgrids:** a controlled local grid (one building or a whole campus) that can disconnect from the utility and run on its own generation and storage, then resynchronize when the grid returns.
- **Standby generators:** conventional backup, though without the emissions, fuel-logistics, and pairing benefits of solar-plus-storage.

The enabling capability in every case is the ability to form a **safe, deliberate island** — the exact thing anti-islanding *prevents* an ordinary grid-tied inverter from doing. Modern standards, including IEEE 1547-2018, accommodate these advanced, grid-supportive functions in properly designed and permitted systems.

## Grid-Hardening

**Grid-hardening** is physical and operational investment to make infrastructure withstand shocks:

- **Undergrounding** lines to remove exposure to wind, trees, and fire (effective but expensive).
- **Vegetation management** — the single most cost-effective everyday reliability measure.
- **Stronger poles and structures**, covered conductors, and fire-resistant equipment in high-risk zones.
- **Sectionalizing, reclosers, and automation** that isolate a fault to a small area and self-heal around it — improving both SAIFI and restoration times.
- **Flood-proofing** substations and elevating critical equipment.
- **Advanced sensing and situational awareness** — weather stations, cameras, and fault detection that speed response.

Hardening improves reliability *and* resilience, but it is capital-intensive and slow, which is part of why **distributed** resilience has grown in appeal.

## The DER / Distributed-Resilience Role

**Distributed energy resources (DERs)** — rooftop and community solar, batteries, EVs, and microgrids — shift some resilience from the centralized grid to the point of use. Their value proposition:

- **Local survival of critical loads.** Even when the bulk grid is down, a home or facility with solar-plus-storage can keep essential loads alive indefinitely (solar recharges the battery each day), which centralized hardening cannot guarantee.
- **Reduced strain that causes outages.** Aggregated DERs and demand response can shave peaks and relieve stressed feeders, lowering the odds of overload-driven failures — see [Grid Services, VPPs & Demand Response](grid-services-vpp.md).
- **Graceful degradation.** A grid rich in microgrids and local storage can fragment into surviving islands rather than failing all at once — the opposite of a cascading collapse.

DERs complement, rather than replace, grid-hardening: the most resilient systems combine a hardened backbone with distributed local resources.

## Critical Facilities

Some loads cannot tolerate any interruption. **Critical facilities** — hospitals, water and wastewater treatment, emergency services, communications, data centers, shelters, and fueling stations — are prime candidates for on-site solar-plus-storage and microgrids. During prolonged events, these become community anchors ("resilience hubs") where people can charge devices, refrigerate medications, and shelter. Because their outage cost is measured in lives and public safety rather than dollars, the economics of backup for critical facilities differ fundamentally from an ordinary building.

## Blackouts and Cascading Failures (Brief)

A **cascading failure** is a chain reaction in which the loss of one element overloads its neighbors, which then trip in turn, propagating a local problem into a wide-area **blackout**. Historic examples (such as the 2003 Northeast blackout and the 2021 Texas winter-storm crisis) show how a triggering fault, tight operating margins, and inadequate reserves can combine to darken entire regions. Defenses include **protective relaying**, **under-frequency load shedding** (deliberately dropping load to save the rest of the system), interconnection ties, and mandatory reserves. The bulk power system that these defenses protect is governed in North America by the **North American Electric Reliability Corporation (NERC)**, which sets and enforces reliability standards under oversight of the **Federal Energy Regulatory Commission (FERC)**. Distributed resources that can island help here too, by allowing local areas to ride through rather than contribute to a collapse.

## Climate Stressors

A changing climate is raising both the frequency and severity of the extreme events that resilience must address:

- **More intense storms and hurricanes** with higher winds and rainfall.
- **Expanding wildfire risk**, driving PSPS programs into new regions.
- **Extreme heat**, which raises peak demand while derating transmission lines and transformers exactly when they are most needed.
- **Extreme cold events** that spike heating demand and can freeze generation and fuel supplies.
- **Flooding and sea-level rise** threatening low-lying substations.

These stressors push utilities and customers toward both hardening and distributed resilience simultaneously — and they are a central reason interest in solar-plus-storage backup has grown well beyond bill savings into genuine risk management.

## Sources & Further Reading

- [IEEE Standard 1366 — Guide for Electric Power Distribution Reliability Indices](https://standards.ieee.org/)
- [IEEE Standard 1547 — Interconnection of Distributed Energy Resources (anti-islanding)](https://standards.ieee.org/)
- [North American Electric Reliability Corporation (NERC)](https://www.nerc.com/)
- [Federal Energy Regulatory Commission (FERC)](https://www.ferc.gov/)
- [PSE Healthy Energy — Public Safety Power Shutoffs Explained](https://www.psehealthyenergy.org/public-safety-power-shutoffs-explained/)
- [U.S. Energy Information Administration — Electricity reliability data](https://www.eia.gov/electricity/)
- Related: [Microgrids & Islanding](grid-microgrids.md) · [Grid Services, VPPs & Demand Response](grid-services-vpp.md) · [How the Electrical Grid Works](fundamentals-grid.md) · [Utility Rate Design & Tariffs](grid-rate-design.md)

> This page is educational and general in nature; reliability standards, metrics, and interconnection requirements vary by jurisdiction and evolve over time — verify current standards and utility-specific data before relying on them for design or investment decisions.
