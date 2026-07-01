# Grid & Interconnection Overview

Connecting a solar PV system to the electrical grid is rarely the hardest engineering problem in a project — but it is almost always the hardest *administrative* one. Interconnection is the formal process by which a utility agrees to let your generator operate in parallel with its network, and it governs whether a project is built in three months or three years, and at a cost the developer can absorb or one that kills the deal.

This page frames the **Grid & Interconnection** section: why interconnection matters, the structural distinctions that determine which rules apply (behind-the-meter vs front-of-meter, distribution vs transmission), the institutions involved, and the jurisdictional split between state and federal authority. For the underlying physics — voltage, frequency, power flow, AC fundamentals — start with [How the Electrical Grid Works](fundamentals-grid.md). This section goes deeper into the *rules and process* layered on top of that physics.

## Why Interconnection Matters

A PV system that exports power changes how the local grid behaves. The distribution network was historically designed for **one-way power flow**: bulk generation flows from transmission substations, "downhill" through feeders, to loads. Distributed generation reverses this assumption. It can:

- Raise local voltage above acceptable limits (overvoltage at the point of common coupling)
- Mask or interfere with protective relaying and reclosing
- Create the risk of an **unintentional island** — energizing a de-energized line during an outage, endangering line workers
- Overload conductors or transformers when many systems on one feeder export simultaneously

> Interconnection review exists to answer one question: *can this generator operate in parallel with the grid safely, reliably, and without degrading service to other customers?* Everything in this section — screens, studies, smart-inverter functions, upgrades — flows from that question.

Interconnection is also a **gatekeeper for revenue**. A system cannot legally export or earn bill credits until the utility grants **Permission to Operate (PTO)**. The compensation it then earns is set by the applicable rate structure — see [Net Metering, Net Billing & Rate Structures](grid-net-metering.md).

## Behind-the-Meter vs Front-of-Meter

The single most important classification for a project is which side of the customer's revenue meter it sits on.

| Attribute | Behind-the-Meter (BTM) | Front-of-Meter (FTM) |
|---|---|---|
| Location | On customer's side of the utility meter | On the utility (grid) side |
| Primary purpose | Offset on-site load; export surplus | Sell all output to grid / market |
| Typical scale | Residential & commercial rooftop, C&I | Utility-scale, community solar, merchant |
| Compensation | Bill offset + export credits (net metering / net billing) | Wholesale energy + capacity, PPA, or merchant prices |
| Interconnection track | Distribution interconnection (state rules) | Distribution or transmission (state or FERC) |

**Behind-the-meter** generation reduces the customer's purchases first; only the surplus interacts with the grid as an export. A rooftop array, a commercial carport, and most battery systems are BTM. **Front-of-meter** generation has no host load to serve — its entire output is delivered to the grid and settled at wholesale or contract prices. The line between the two drives everything downstream: the application form, the compensation mechanism, and often the regulator.

## Distribution vs Transmission Interconnection

The grid is built in layers. **Transmission** moves bulk power at high voltage (typically 69 kV and above) over long distances. **Distribution** steps that power down (typically below 69 kV, often 4–35 kV at the primary feeder, 120/240 V or 277/480 V at the service) and delivers it to end customers.

```
   BULK GENERATION
         |
   [ TRANSMISSION ]  >=69 kV  ── FERC-jurisdictional, ISO/RTO queues
         |
   Substation (step-down)
         |
   [ DISTRIBUTION ]  <69 kV   ── State PUC / utility tariff
         |
   ┌─────┴───────┐
 Primary feeder   Service transformer
   |                  |
 (large C&I,        (homes, small
  community         commercial,
  solar)            BTM rooftop)
```

- **Distribution interconnection** applies to nearly all rooftop, commercial, and small community projects. It is governed by **state-jurisdictional** rules — a state interconnection standard and the utility's tariff. See [Distribution Interconnection](grid-distribution.md).
- **Transmission interconnection** applies to large generators connecting at transmission voltage. It runs through the **FERC-jurisdictional** queue of an ISO/RTO or a utility's Open Access Transmission Tariff (OATT), governed by the **Large Generator Interconnection Procedures (LGIP)** or **Small Generator Interconnection Procedures (SGIP)**.

The voltage at the **point of interconnection** is the practical fault line: connect below the transmission threshold and you are usually in a state distribution process; connect at transmission voltage and you are usually in a FERC process.

## The Players

| Entity | Role |
|---|---|
| **Utility / DSO** | Owns the wires; reviews applications, runs studies, sets upgrade costs, issues PTO. The distribution system operator. |
| **ISO / RTO** | Independent System Operator / Regional Transmission Organization (e.g., CAISO, PJM, MISO, ISO-NE, NYISO, SPP, ERCOT). Operates the bulk grid and the transmission interconnection queue; runs wholesale markets. |
| **FERC** | Federal Energy Regulatory Commission. Regulates interstate transmission, wholesale markets, and the pro-forma interconnection procedures (LGIP/SGIP). |
| **State PUC / PSC** | State Public Utilities (or Service) Commission. Sets distribution interconnection rules, retail rates, and net-metering / net-billing policy. |
| **AHJ** | Authority Having Jurisdiction — the local building/electrical permitting office. Separate from interconnection but a parallel requirement. See [Commercial Permitting & Interconnection](commercial-permitting.md). |

These are distinct approvals. A project may need a **building permit** from the AHJ *and* an **interconnection agreement** from the utility; passing one does not grant the other.

## The Jurisdictional Split

A defining feature of U.S. electricity law is the division of authority created by the Federal Power Act:

> **FERC** has jurisdiction over **transmission** in interstate commerce and **wholesale** sales of electricity. **State PUCs** have jurisdiction over **distribution** facilities and **retail** sales.

In practice:

- A behind-the-meter rooftop array connecting to the distribution system, earning **retail** bill credits, is almost entirely **state-jurisdictional**.
- A merchant solar farm connecting to **transmission** and selling at **wholesale** is **FERC-jurisdictional**.
- The boundary blurs for distributed resources that participate in **wholesale markets**. **FERC Order No. 2222** (issued 2020) requires ISOs/RTOs to allow aggregations of distributed energy resources — including small BTM systems — to bid into wholesale markets, creating a coordination layer between distribution-level resources and FERC-jurisdictional markets. See [Distribution Interconnection](grid-distribution.md) for how DER aggregation interacts with hosting capacity.

Texas is the major exception: **ERCOT** is largely outside FERC jurisdiction because its grid is intrastate, so interconnection there follows ERCOT and PUCT rules rather than FERC's pro-forma procedures.

## A High-Level Interconnection Journey

Most distribution-scale projects follow a recognizable arc. Details vary by state and utility; see [Distribution Interconnection](grid-distribution.md) for the mechanics.

```
1. PRE-APPLICATION   Review hosting-capacity map; gauge feasibility
        |
2. APPLICATION       Submit forms, one-line diagram, equipment specs
        |
3. REVIEW / SCREENS  Fast Track screens (e.g., 15% of peak load) ──┐
        |                                                          | fail
4. SUPPLEMENTAL      Optional supplemental review (100% min load,  |
   REVIEW            power-quality, safety screens) ───────────────┘
        |
5. STUDY (if needed) Feasibility / system-impact / facilities study
        |
6. AGREEMENT         Interconnection agreement; cost allocation for upgrades
        |
7. CONSTRUCTION      Build; utility installs any required upgrades
        |
8. WITNESS TEST /    Inspection; verify smart-inverter settings
   COMMISSIONING
        |
9. PTO               Permission to Operate — system may energize & export
```

The earlier a project clears the screens, the faster and cheaper the path. Projects that trigger studies and grid upgrades face the longest timelines and the largest, least predictable costs.

## How This Section Is Organized

This section covers grid integration topics that apply across project scales — residential, commercial, and (where noted) utility:

- **[Distribution Interconnection](grid-distribution.md)** — the application, screens, studies, hosting capacity, upgrades, cost allocation, and timelines for connecting at distribution voltage.
- **[IEEE 1547 & Smart Inverters](grid-ieee1547.md)** — the technical interconnection standard, grid-support functions, UL 1741 SA vs SB, performance categories, and how states adopt it.
- **[Net Metering, Net Billing & Rate Structures](grid-net-metering.md)** — how exports are compensated, the shift from net metering to net billing, NEM 3.0, demand charges, TOU, and project economics.

For project-specific permitting workflows, see [Commercial Permitting & Interconnection](commercial-permitting.md). For the physical foundations, see [How the Electrical Grid Works](fundamentals-grid.md).

## Sources & Further Reading

- [FERC — Generator Interconnection](https://www.ferc.gov/electric-transmission/generator-interconnection)
- [FERC — pro forma Small Generator Interconnection Procedures (SGIP)](https://www.ferc.gov/sites/default/files/2020-04/sm-gen-procedures.pdf)
- [FERC Order No. 2222 Fact Sheet](https://ferc.gov/media/ferc-order-no-2222-fact-sheet)
- [DSIRE — Interconnection Standards for Small Generators](https://programs.dsireusa.org/system/program/detail/2774/interconnection-standards-for-small-generators)
- [NREL — Highlights of IEEE Standard 1547-2018](https://docs.nrel.gov/docs/fy20osti/75436.pdf)

---
*This page is general reference information, not engineering, legal, or regulatory advice. Verify all requirements with the applicable utility, ISO/RTO, and regulator for your project.*
