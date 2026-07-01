# Grid-Forming Inverters & Storage at Scale

Most inverter-based resources (IBR) deployed to date, solar, wind, and batteries, are **grid-following (GFL)**: they measure the grid's existing voltage and frequency and inject current in sync with it. GFL works only as long as enough **synchronous generators** (coal, gas, hydro, nuclear) are online to establish that voltage/frequency reference and supply inertia and short-circuit strength. As synchronous plant retires and IBR penetration climbs, that assumption breaks down. **Grid-forming (GFM)** inverters are the response: they actively *form* a voltage waveform and behave, from the grid's perspective, more like a synchronous machine. This page explains what GFM does, the standards landscape, GFM control philosophies, and deployment status, oriented to developers of [solar-plus-storage](util-solar-storage-hybrid.md) and standalone battery plants.

See also [Inverters & Medium-Voltage Collection](util-inverters-collection.md), [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md), and [Trackers & Fixed-Tilt Mounting](util-trackers.md).

## What Grid-Forming Inverters Do

A GFM inverter controls its **internal voltage source** (magnitude and angle) and lets current follow, the inverse of GFL, which controls current and follows voltage. This enables capabilities GFL cannot provide on its own:

- **Forms voltage and frequency.** It establishes a stable AC reference rather than depending on one, so it can energize and stabilize a network.
- **Synthetic / synchronous inertia.** By responding near-instantaneously to frequency and phase changes (emulating a rotating machine's swing dynamics), it opposes rapid frequency excursions and reduces the rate of change of frequency (RoCoF).
- **Operates in weak grids and islands.** GFM maintains stability where short-circuit ratio is low and GFL would trip or oscillate; it can run a microgrid or islanded section on its own.
- **Black start.** With sufficient energy behind it (typically a battery), a GFM unit can re-energize a de-energized network from zero, seeding voltage/frequency for other resources to synchronize to.
- **Fast fault and voltage support.** It supplies a controlled voltage/current during disturbances, improving stability, within the current limits of the power electronics.

> A key practical constraint: an inverter has no large rotating mass, so its overcurrent capability is limited (often ~1.1-1.5x rated, hardware-dependent). GFM control must manage fault current within these limits, one reason GFM performance is validated at the system level, not assumed.

## Why It Matters Now

The grid was engineered around synchronous machines whose spinning mass provides inertia, short-circuit strength, and an inherent voltage/frequency reference. As those units retire and are replaced by IBR, system strength and inertia fall, RoCoF rises, and stability margins shrink, especially in regions with high renewable penetration or weak/remote grids. GFM IBR (chiefly **batteries**, which have dispatchable energy to back the service) can supply these attributes without a synchronous machine, making it a linchpin for high-renewable grids. System operators are increasingly requesting or requiring GFM capability in interconnection processes.

## GFL vs GFM: Comparison

| Attribute | Grid-Following (GFL) | Grid-Forming (GFM) |
|---|---|---|
| Control variable | Injected **current** (follows measured V/f) | Internal **voltage** source (V magnitude + angle) |
| Needs external V/f reference | Yes (relies on a PLL locking to grid) | No, forms its own reference |
| Behavior analogy | Current source | Voltage source behind an impedance (machine-like) |
| Inertia contribution | None inherent (fast-frequency response only) | Synthetic/synchronous inertia, low RoCoF |
| Weak-grid / low-SCR operation | Degrades, can become unstable | Stable; enables low-SCR and islanded operation |
| Black start | No | Yes (with sufficient stored energy) |
| Islanding / microgrid lead | No (needs a former present) | Yes |
| Typical use today | Most solar, wind, and legacy BESS | GFM BESS and PV-plus-storage; growing |

## Standards and Requirements

The regulatory framework is evolving quickly; confirm the current edition and jurisdictional adoption before relying on any clause.

- **UL 1741** — the dominant North American safety/performance standard for inverters and IBR equipment. **UL 1741 SB** (Supplement SB) aligns advanced-function ("smart inverter") testing with **IEEE 1547-2018** and **IEEE 1547.1**. Grid-forming test methods and supplements are an active area; verify which supplement/edition covers the specific GFM functions your project requires.
- **IEEE 1547-2018 / IEEE 1547.1** — interconnection and test requirements for distributed energy resources (distribution level).
- **IEEE 2800-2022** — interconnection and interoperability requirements for large IBR connected at transmission (bulk-power-system) level. Sets performance requirements relevant to IBR behavior during disturbances.
- **IEEE P2800.2** — a companion recommended practice for **testing and verification** of IEEE 2800 requirements (verify current status/publication).
- **NERC guidance** — reliability guidelines and functional-specification white papers (e.g., work on grid-forming functional specifications for bulk-power-system-connected BESS) shape North American practice.
- **AEMO / grid codes** — Australia (AEMO) has been an early mover, defining GFM specifications and connection requirements; European and other national grid codes are advancing parallel requirements.

> Standards status changes frequently. Treat the items above as a map, not a checklist, and confirm the exact edition, supplement, and regional adoption applicable to your interconnection before committing designs.

## GFM Battery Storage and PV-Plus-Storage

GFM's headline capabilities, inertia, black start, weak-grid support, require a resource that can **source and sink real power on demand**. Batteries are the natural pairing: they hold dispatchable energy to back synthetic inertia and ride through disturbances, whereas a PV array alone cannot supply energy at night or on demand. Consequently:

- **Standalone GFM BESS** is the most mature deployment vehicle.
- **PV-plus-storage** plants can present GFM behavior at the point of interconnection via the battery/inverter, with PV providing energy and the storage providing the forming capability and headroom. See [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md).

Studies (e.g., from ESIG) indicate that using GFM rather than GFL for transmission-connected BESS can improve the hosting capacity for additional solar and wind, an argument for GFM beyond individual project needs.

## Control Philosophies: Droop vs Virtual Synchronous Machine

Several GFM control architectures exist; two dominate the conceptual discussion. All aim to make the inverter behave as a controllable voltage source that shares load and stabilizes the network.

- **Droop control.** The inverter adjusts its output frequency in proportion to real power and its voltage in proportion to reactive power (P-f and Q-V droop), mimicking the steady-state behavior of a governed synchronous generator. Simple, robust, and well suited to load-sharing among parallel units. It provides a forming reference but limited inherent inertial dynamics unless augmented.
- **Virtual synchronous machine (VSM) / virtual synchronous generator.** The controller emulates the swing equation of a real machine, replicating both droop *and* inertial/damping dynamics, so the inverter provides synthetic inertia in a machine-like way. Tesla's "Virtual Machine Mode," used at large batteries, is a well-known implementation emulating exciter and swing-equation behavior.
- Other approaches include **power synchronization control**, **virtual oscillator control (VOC)**, and **matching control**; the field is still consolidating around best practice.

```
   GFL: measure grid V/f  --> control CURRENT to match --> (needs a reference)
   GFM: set internal V (mag, angle) --> current FOLLOWS --> (is the reference)

   Droop:  P up  -> lower frequency   (P-f)
           Q up  -> lower voltage     (Q-V)
   VSM:    emulate swing eq. -> synthetic inertia + damping + droop
```

## Deployment Status

GFM has moved from pilots to landmark grid-scale deployments, with **Australia an early leader**:

- The **Hornsdale Power Reserve** (South Australia, Tesla) has operated large transmission-connected battery capacity in grid-forming mode using virtual-machine-type controls, a widely cited reference deployment.
- The Australian Renewable Energy Agency (**ARENA**) co-funded a portfolio of large-scale GFM batteries (on the order of ~2 GW / ~4+ GWh across multiple projects), targeting operation in the mid-2020s.
- In North America and Europe, GFM BESS projects are being installed and planned, tracked by industry groups such as **ESIG**, and interconnection processes increasingly ask whether equipment can operate in grid-forming mode during contingencies.

> Verify project capacities, statuses, and dates against primary sources (project owners, ARENA, ESIG's GFM landscape) before citing, as this space is moving fast and figures change.

## Sources & Further Reading

- [Introduction to Grid-Forming Inverters — NREL (fy24osti/90256)](https://docs.nrel.gov/docs/fy24osti/90256.pdf)
- [GFM Landscape: Installed and Planned GFM Projects — ESIG](https://www.esig.energy/working-users-groups/reliability/grid-forming/gfm-landscape/projects/)
- [Megapack Grid-Forming — ESIG / Tesla](https://www.esig.energy/wp-content/uploads/2024/01/ESIG_GFM_Tesla_Rev0.pdf)
- [As reliability concerns with renewables rise, upgrading inverters is urgent — Utility Dive](https://www.utilitydive.com/news/grid-forming-inverters-vital-protect-the-grid-solar-wind-batteries/702892/)
- [IEEE Std 2800-2022 Compliance for Inverter-Based Resources — Keentel Engineering](https://keentelengineering.com/ieee-2800-compliance-inverter-based-resources)
- [Grid-Forming Inverters: IEEE 1547 & UL 1741 SB — Anern](https://www.anernstore.com/blogs/diy-solar-guides/grid-forming-inverters-ieee1547-updates)
- Related site pages: [Inverters & Medium-Voltage Collection](util-inverters-collection.md), [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md), [Trackers & Fixed-Tilt Mounting](util-trackers.md)

*Disclaimer: This page is educational reference material; standards editions, requirements, and project data evolve rapidly — verify against the current published standards and primary project sources before design, bidding, or interconnection decisions.*
