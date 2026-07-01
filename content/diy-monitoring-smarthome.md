# DIY Monitoring & Smart-Home Integration

A solar system you can't *see* is a system you can't trust. Monitoring turns a battery bank and an array from a black box into something you understand: how much you're producing, how full the battery really is, what your loads are doing, and whether anything is faulting. For an off-grid or DIY hybrid system this isn't a luxury — it's how you avoid waking up to a dead battery, a tripped inverter, or a slow-failing cell.

This guide covers the sensing hardware (**shunts and battery monitors**, **CTs**, inverter/controller data links), the platforms that display it (manufacturer apps, **Victron VRM**), the open-source path (**Home Assistant, MQTT, Node-RED, Grafana**), what to actually track and alert on, useful automations, and the privacy trade-offs.

Part of the DIY series — see [Building Your Own System](diy-overview.md), [DIY Electrical Calculations](diy-electrical-calcs.md), [Residential Permitting & Interconnection](residential-permitting.md), and [Sourcing Materials & Kits](diy-sourcing.md).

> **SAFETY CAUTION:** Monitoring involves wiring sensors into live DC and AC circuits. A **battery shunt** carries the full system current — a loose shunt connection is a fire risk. **Current transformers (CTs)** must never be left open-circuited on a live conductor (dangerous voltage can develop). De-energize, fuse sense leads, and follow torque specs. Low-voltage monitoring wiring does not exempt you from the high-current circuits it taps.

## How a System Gets Measured

There are three broad ways to get data out of a solar system, and most real installs use a mix:

1. **A dedicated battery monitor (shunt-based)** — the ground truth for current in and out of the battery.
2. **Reading the inverter/charge controller directly** — over Bluetooth, a serial link, **Modbus**, or **CAN**.
3. **Energy meters with CTs** — clamp-on sensors that measure AC loads or production without breaking the circuit.

### Shunts & Battery Monitors

A **shunt** is a precision low-resistance resistor placed in the **battery's negative (or main) path**. Every amp in or out of the battery flows through it, producing a tiny, precisely known voltage the monitor reads to compute current.

```
        BATTERY (−) ──────[ SHUNT ]────── to inverter / loads / charge sources (−)
                              │
                          sense leads
                              │
                       BATTERY MONITOR  ──► display / Bluetooth / VE.Direct / Modbus
                       (counts amp-hours
                        in and out)
```

- **Coulomb counting:** the monitor integrates current over time (amp-hours in minus amp-hours out) to estimate **State of Charge (SoC)** — the fuel gauge.
- Coulomb counting **drifts** over time because of efficiency losses and small measurement error, so good monitors **resync to 100%** when they detect a full, charged battery (voltage + low tail current held for a set time). Set the "charged" parameters correctly or your SoC will wander.
- Many monitors also report **time-to-go**, consumed Ah, and voltage/temperature.

> The shunt is the **single most valuable sensor** in an off-grid system. Charge-controller and inverter readings alone don't see *all* the current paths; only a battery shunt nets every source and load together.

### Inverter / Charge-Controller Data

Most modern equipment exposes its data over one or more interfaces:

| Interface | Character | Typical use |
|---|---|---|
| **Bluetooth** | Short range, phone app | Quick local checks (e.g., Victron VictronConnect) |
| **Serial (e.g., VE.Direct, RS-232/485)** | Simple wired link | Feeding a small computer/ESP device |
| **Modbus (RTU over RS-485 / TCP over Ethernet)** | Industrial register-based polling | Pulling structured data into Home Assistant, Grafana, SCADA |
| **CAN bus** | Real-time device-to-device | BMS ↔ inverter communication (closed-loop battery control) |
| **Proprietary cloud dongle** | WiFi/cellular to vendor cloud | Manufacturer app/portal |

> **Modbus** and **CAN** are the workhorses for open integration. A common Victron pattern: a **Cerbo GX / Venus OS** device gathers data from every connected component and republishes it over **Modbus/TCP and MQTT** on your LAN, where any tool can read it.

### Energy Meters & CTs

A **current transformer (CT)** is a clamp that goes **around** a conductor and measures its current without breaking it — ideal for retrofits and for measuring whole-home or per-circuit AC loads and production.

```
        ┌───── AC conductor ─────┐
        │     ( CT clamp )       │   ── CT output ──► energy meter / sensor
        └────────────────────────┘                    (W, kWh, A)
```

> **CT safety & placement:** A CT must always be loaded into its meter when on a live wire — **never leave a CT open on an energized conductor**. Clamp the **correct single conductor** (not the whole cable), respect the **arrow/orientation** for power-flow direction, and verify the CT's **amp rating** covers the circuit. Place production CTs on the PV/inverter feed and consumption CTs on the mains.

## Platforms

### Manufacturer Portals & Apps

- **Victron VRM:** links a Victron system (via a GX device) to a cloud **portal** for graphs, alarms, and remote access — plus the local **VictronConnect** Bluetooth app for nearby checks.
- Most inverter/optimizer brands (Enphase, SolarEdge, Growatt, EG4, etc.) provide their own app and cloud portal, usually requiring a WiFi/cellular dongle.

These are the easiest path: plug in, create an account, see graphs. The trade-offs are **vendor lock-in**, **cloud dependence** (no internet, no app), and **data leaving your premises**.

### Open-Source / Home Integration

For full control, owners pull everything into a self-hosted stack:

| Tool | Role |
|---|---|
| **Home Assistant (HA)** | The hub — ingests Modbus/MQTT/BLE data, dashboards, automations, the Energy dashboard |
| **MQTT** | Lightweight message bus; devices publish, HA/others subscribe (a Venus/Cerbo GX can publish all its data here) |
| **Node-RED** | Visual flow logic for complex automations and data shaping |
| **Grafana (+ InfluxDB/Prometheus)** | Long-term time-series storage and rich historical dashboards |

Common real-world recipes (all verified patterns from the DIY community):

- **ESP8266/ESP32 on a VE.Direct serial port** of a SmartShunt, publishing to an **MQTT broker** that Home Assistant subscribes to.
- **Venus OS on a Raspberry Pi** (or a Cerbo GX) talking to Victron gear, exposing **Modbus/TCP** that Home Assistant polls over WiFi, and/or pushing **MQTT**.
- Off-grid PV dashboards in HA's **Energy dashboard** fed by a mix of **MQTT and Modbus** from inverter + shunt.
- A turnkey appliance like **Solar Assistant** (a Pi image) that reads many inverter/shunt brands and republishes to MQTT/HA.

```
[Shunt]──VE.Direct──[ESP32]──┐
[Inverter]──Modbus/TCP───────┤──► [MQTT broker] ──► [Home Assistant] ──► [Grafana history]
[CTs/Meter]──Modbus──────────┤                          │
[Charge ctrl]──CAN/serial────┘                     dashboards + automations + alerts
```

## What to Track (and Alert On)

| Metric | Why it matters | Sensible alert |
|---|---|---|
| **PV production (W, kWh/day)** | Confirms the array is performing; flags shading/soiling/faults | Daily kWh far below expectation |
| **Battery SoC (%)** | The fuel gauge — the single most important off-grid number | SoC below a low threshold (e.g., 20%) |
| **Battery voltage & temperature** | Catches over/under-voltage and thermal problems | Out-of-range V or high temperature |
| **Charge/discharge current** | Shows load surges and charging health | Sustained discharge that will drain by morning |
| **Load consumption (W, kWh)** | Reveals phantom loads and bad habits | Load spikes / a load left on |
| **Per-cell or BMS data** | Detects a weak/drifting cell early | Cell imbalance / BMS fault flag |
| **Inverter/controller faults** | Tripped inverter = no power | **Any fault or offline state** |
| **Genset runtime/fuel (if present)** | Maintenance and cost tracking | Excessive runtime |

> Prioritize **fault and low-SoC alerts** — those are the ones that prevent a blackout or protect the battery. A push/email/notification on "inverter offline" or "SoC < 20%" is worth more than any pretty graph.

## Automations

Once data lives in Home Assistant or Node-RED, you can close the loop:

- **Load shedding:** when SoC drops below a threshold, automatically switch off non-essential loads (water heater, EV charger, secondary freezer) to protect the battery; restore them when SoC recovers.
- **Generator auto-start:** trigger a genset (via a relay/AGS) on **low SoC or low voltage**, and stop it on a target SoC or after a run window. (Implement with proper interlocks and a manual override.)
- **Opportunity loads:** run deferrable loads (pumps, charging, heating) when SoC is high and the sun is strong — soaking up surplus instead of clipping it.
- **Time-of-use / grid-aware:** for hybrids, charge from grid off-peak and discharge on-peak where allowed.
- **Notifications:** push/email on faults, full battery, or production anomalies.

> **Build in safe defaults.** Automations that switch real loads or start generators must **fail safe** (default to a safe state on sensor loss) and offer a clear manual override. Test thoroughly before trusting them unattended.

## Privacy & Local-Only

| Approach | Pros | Cons |
|---|---|---|
| **Cloud portal (vendor)** | Easy, remote access anywhere, no setup | Data leaves your site; breaks without internet; vendor lock-in |
| **Local-only (HA/MQTT/Grafana on a Pi)** | Data stays home; works offline; no vendor dependence | You maintain it; remote access needs a VPN |

For off-grid systems especially, a **local-first** stack is attractive: your monitoring should not depend on an internet connection that the site may not even have. If you want remote access, prefer a **VPN into your own network** over exposing services to the internet, and keep your hub patched.

## Wiring & CT Placement Notes

- **Shunt:** install in the **main negative path** so *all* charge sources and loads pass through it; connect the system loads/sources to the **load side**, battery to the **battery side**, per the maker's diagram. Torque the big lugs; fuse the small sense leads.
- **CT direction:** observe the **arrow/orientation** — reversed CTs read backward (production looks like consumption). Clamp the **correct single conductor**.
- **CT rating:** size the CT's amperage to the circuit it monitors; oversized CTs lose resolution, undersized CTs saturate.
- **Sense wiring:** keep low-voltage data/sense runs away from high-current/AC runs to reduce noise; use shielded cable for long RS-485/Modbus runs and terminate the bus properly.
- **Grounding/isolation:** follow the maker's grounding guidance for shunts and meters; isolation faults can corrupt readings or create hazards.

> CT and shunt installation taps into live, high-current circuits. Conductor and overcurrent details intersect with [DIY Electrical Calculations](diy-electrical-calcs.md); de-energize before wiring and never open a loaded CT.

## Sources & Further Reading

- [Victron SmartShunt + Home Assistant integration — DIY Solar Forum](https://diysolarforum.com/threads/victron-smartshunt-home-assistant-integration.51328/)
- [Cerbo GX Modbus/MQTT to Home Assistant — DIY Solar Forum](https://diysolarforum.com/threads/my-victron-cerbo-gx-home-assistant-integration.101852/)
- [Victron/Fronius off-grid PV dashboard via MQTT + Modbus — Home Assistant Community](https://community.home-assistant.io/t/victron-fronius-off-grid-pv-energy-dashboard-mqtt-and-modbus-integration/392450)
- [Installing and configuring a Victron battery monitor (coulomb counting) — Panbo](https://panbo.com/installing-and-configuring-a-victron-battery-monitor/)
- [Home Assistant — Solar Monitoring and Management thread — DIY Solar Forum](https://diysolarforum.com/threads/home-assistant-solar-monitoring-and-management.20728/)

---

*This article is for general education and safety awareness only. Working on live battery, DC, and AC circuits is hazardous; follow manufacturer instructions, local electrical code, and consult a licensed electrician when in doubt.*
