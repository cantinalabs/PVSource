# AC vs DC Coupling & Hybrid Inverters

When you add a battery to a solar system, the single biggest architectural decision is *where the battery joins the PV* — on the **AC** side (after PV has already been inverted to grid-frequency AC) or on the **DC** side (sharing the solar DC bus before inversion). That choice sets your round-trip efficiency, your ability to recapture clipped solar, how easy the retrofit is, and how backup wiring is arranged. This page explains **AC coupling**, **DC coupling**, and the **hybrid/multimode inverters** that make DC coupling practical, with one-line diagrams of each. It builds on the specs in [Battery Energy Storage](battery-storage.md) and [Storage Sizing & Design](stor-sizing.md), and the control logic in [Battery Management Systems & Controls](stor-bms.md).

## The Core Difference

Solar panels produce **DC**. Loads and the grid use **AC**. A battery stores **DC**. Every conversion between DC and AC costs a few percent. Coupling is really a question of *how many conversions* sit between the sun and the stored electron.

- **AC coupling** — PV has its own inverter (DC→AC). The battery has its own separate inverter/charger. To store solar, energy goes **DC→AC** (PV inverter) then **AC→DC** (battery charger) — two extra conversions.
- **DC coupling** — PV and battery share a single **hybrid inverter** on a common DC bus. To store solar, energy goes **DC→DC** (via a charge controller) — fewer conversions.

> **Key takeaway:** DC coupling stores solar with fewer conversions (higher efficiency and clipping recapture) and suits **new builds**; AC coupling adds a battery at the AC side and suits **retrofits** onto existing PV.

## AC-Coupled Architecture

```
AC-coupled one-line
   PV array ─DC→ [PV Inverter] ─AC─┐
                                   ├─ AC bus ─→ Main panel / Loads / Grid
   Battery ─DC→ [Battery Inverter/Charger] ─AC─┘
     (to store solar: PV DC→AC, then AC→DC into battery)
```

The PV inverter and the battery inverter operate independently and meet on the AC bus. Storing solar surplus requires converting it to AC and back to DC — the two-conversion penalty. But because the battery attaches at the AC side, it can be **added to almost any existing PV system** without touching the PV strings or inverter.

**Strengths:** easy retrofit; PV and battery can be different brands; PV keeps producing if the battery is offline; simple to expand.
**Trade-offs:** lower efficiency for stored solar; cannot recapture DC-side clipping; more equipment (two inverters).

## DC-Coupled Architecture

```
DC-coupled one-line
   PV array ─DC→ [MPPT charge controller] ─DC bus─┬─→ [Hybrid Inverter] ─AC→ Loads / Grid
                                                  └─→ Battery (DC)
     (to store solar: PV DC→battery DC — no AC round-trip)
```

PV and battery share a DC bus behind one **hybrid inverter**. Solar can charge the battery directly (DC→DC), avoiding the AC round-trip and gaining a few points of round-trip efficiency. It also enables **clipping recapture** (below). The cost is a more integrated, less mix-and-match design that is harder to retrofit onto existing PV.

**Strengths:** higher round-trip efficiency for stored solar; clipping recapture; often one inverter (lower cost, simpler); efficient DC-native path.
**Trade-offs:** harder retrofit (usually needs replacing the existing inverter with a hybrid); tighter brand/compatibility constraints; hybrid inverter power is shared between PV and battery paths.

## Hybrid / Multimode Inverters

A **hybrid inverter** combines a PV inverter, a battery charger/inverter, and (in **multimode** units) grid-forming backup capability in one box. It is what makes DC coupling practical and is the heart of most modern residential and small-commercial storage systems.

Typical capabilities:

- **PV MPPT + battery DC-DC** on a shared DC bus (DC coupling).
- **Grid-tie export/import** and TOU/backup dispatch within [BMS](stor-bms.md) limits (closed-loop).
- **Grid-forming / islanding** — forms its own AC waveform to run the home during an outage (a *multimode* inverter; a plain grid-following inverter cannot island).
- **AC coupling of additional PV**, so many hybrids can *also* accept an existing AC-coupled array — enabling mixed architectures on retrofits.

> **Rule of thumb:** For a **new** PV-plus-storage build, a **DC-coupled hybrid (multimode) inverter** is usually the efficient, lower-cost default. For **adding storage to an existing** array, **AC-couple** a battery inverter (or a hybrid running in AC-couple mode) to avoid replacing working PV equipment.

## Clipping Recapture (a DC-Coupling Advantage)

When a PV array is oversized relative to its inverter (a high **DC-to-AC / ILR ratio**), the inverter **clips** production that exceeds its AC rating — that energy is simply lost. In a **DC-coupled** system, the excess can be steered on the DC side into the battery *before* it reaches the inverter's AC limit, so clipped energy is **stored instead of wasted**.

```
Clipping recapture (oversized array)
  Midday PV DC power ▲ exceeds inverter AC limit ─ ─ ─ ─ ─ (clip line)
                     │   ████ excess ████
        AC limit ────┼──────────────────────
                     │ inverter output (to loads/grid)
   DC-coupled: the ████ excess charges the battery on the DC bus.
   AC-coupled: the ████ excess is clipped and lost (battery can't
               see DC-side energy the inverter never passed).
```

AC-coupled systems cannot recapture DC-side clipping, because the battery only sees energy that already passed through the PV inverter's AC limit. For high-ILR designs, this is a meaningful DC-coupling advantage.

## Round-Trip Efficiency Comparison

Fewer conversions mean higher round-trip efficiency (RTE) for stored solar. Representative ranges (2025–2026):

| Path | Typical RTE for stored solar | Why |
|---|---|---|
| **DC-coupled** | ~92–96% | PV DC → battery DC → AC (one inversion out) |
| **AC-coupled** | ~85–92% | PV DC→AC→DC to store, then DC→AC to use (extra round-trip) |

*Ranges vary by equipment and operating point; treat vendor "up to" figures cautiously and design on measured/derated values (see [Storage Sizing & Design](stor-sizing.md)).*

> **Nuance:** For energy that is **charged from the grid** (not from solar), the AC-coupling penalty largely disappears — both architectures must convert AC→DC to store it. DC coupling's efficiency edge is specifically about storing **PV** energy without the AC round-trip.

## Retrofit vs New Build

| Situation | Best fit | Reason |
|---|---|---|
| **Existing PV, add a battery** | **AC-coupled** | No need to replace working PV inverter/strings |
| **New PV + storage together** | **DC-coupled hybrid** | Higher RTE, clipping recapture, one inverter |
| **Existing PV + want DC benefits** | Mixed (hybrid that AC-couples old PV) | Keep old array on AC, add new DC-coupled PV/battery |
| **Oversized array (high ILR)** | **DC-coupled** | Recaptures clipping that AC coupling loses |

## Backup / Islanding Wiring

Backup requires a **grid-forming (multimode)** inverter and a way to isolate the home from the grid during an outage (anti-islanding is mandatory — the system must not back-feed a de-energized grid).

```
Backup wiring (partial-home, protected loads panel)
   Grid ─→ [Meter] ─→ [Main panel] ─→ [Transfer/Isolation] ─→ Hybrid
                                                                Inverter
                                          Protected-loads ◄──────┘
                                          subpanel (critical circuits)
   On outage: isolation opens; hybrid forms AC and powers the
   protected subpanel from PV + battery. Grid stays isolated.
```

Common approaches:

- **Protected-loads subpanel** — a subpanel of critical circuits backed up during outages; simple and cost-effective. Sized to the inverter's backup power and the battery's energy.
- **Whole-home backup** — the inverter (often via a smart panel or automatic transfer switch) backs the entire main panel; may require load management to stay within the inverter's power limit.
- **Anti-islanding + isolation** — an automatic transfer switch or the inverter's internal isolation disconnects from the utility before islanding, protecting line workers and equipment. Interconnection and anti-islanding requirements are covered in [Energy-Storage Interconnection](grid-storage-interconnection.md).

> **Reminder:** Backup **power (kW)** limits which loads can run at once; backup **energy (kWh)** limits how long. A big battery behind a small inverter still can't start a large motor load. Size both — see [Storage Sizing & Design](stor-sizing.md).

## Related Pages

- [Battery Energy Storage](battery-storage.md) · [Energy Storage Overview & Use Cases](stor-overview.md)
- [Battery Chemistries Deep-Dive](stor-chemistries.md) · [Battery Management Systems & Controls](stor-bms.md)
- [Storage Sizing & Design](stor-sizing.md) — sizing power and energy for each architecture
- [Storage Safety, Codes & Standards](stor-safety.md) · [Energy-Storage Interconnection](grid-storage-interconnection.md)

## Sources & Further Reading

- [EnergySage — AC vs DC Solar Battery Coupling](https://www.energysage.com/energy-storage/ac-vs-dc-coupled-solar-storage-what-you-need-to-know/)
- [Stem — Battle of the BESS: AC- vs. DC-Coupling](https://www.stem.com/battle-of-the-bess-ac-vs-dc-coupling/)
- [SolarTech Online — DC-Coupled Solar-Plus-Storage Guide](https://solartechonline.com/blog/dc-coupled-solar-plus-storage-guide/)
- [FranklinWH — AC vs DC Solar Battery Coupling](https://www.franklinwh.com/blog/ac-vs-dc-solar-battery-coupling-which-is-right-for-you)

*This page is general educational information, not engineering, legal, tax, or financial advice; inverter capabilities, coupling efficiencies, backup wiring, and interconnection/anti-islanding rules vary by product and jurisdiction and change — verify current documentation and codes with the manufacturer, your utility, your AHJ, and licensed professionals.*
