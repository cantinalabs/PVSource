# Site Selection & Land

Land and siting decisions set the economic ceiling on a utility-scale project. A site with strong solar resource but no nearby transmission, poor soils, or an endangered-species conflict can be unbuildable regardless of how good the array would be. This page covers the technical and commercial criteria developers screen, how land is controlled, acreage rules of thumb, and the environmental and permitting constraints that most often kill or delay projects. It pairs with the [Utility-Scale Solar Overview](util-overview.md) and [Substations & Transmission Interconnection](util-substation.md).

## Site Criteria

A viable utility-scale site is evaluated against several largely independent screens; failing any one can be fatal.

| Criterion | What to look for | Why it matters |
|---|---|---|
| **Solar resource** | High global horizontal / direct normal irradiance (GHI/DNI); low cloud cover | Drives capacity factor and revenue |
| **Slope / topography** | Generally **< 5–10%** for trackers; flatter is cheaper | Grading cost, tracker terrain limits |
| **Soils & geotech** | Pile-drivable soils, no heavy rock/refusal, low corrosivity | Foundation cost (pre-drilling, ballast) |
| **Flood / wetlands** | Outside the 100-yr floodplain; minimal jurisdictional wetlands | Permitting and design risk |
| **Proximity to substation / transmission** | Near adequate-capacity lines/substations | **Gen-tie** length and upgrade cost |
| **Land cost & assembly** | Affordable $/acre; few parcels, clean title | Project economics and schedule |
| **Contiguity & shape** | Large, regular, unfragmented parcels | Layout efficiency, fewer setbacks lost |

> **Key point:** Interconnection proximity and cost now drive site selection as much as solar resource. A modestly sunnier site 30 miles from adequate transmission is usually worse than a slightly cloudier one adjacent to a substation with headroom.

## Land Control

Developers rarely buy land outright early. Control is staged to limit capital at risk while a project is de-risked through permitting and interconnection.

- **Option / option-to-lease agreement.** A small annual payment for the *right* to lease (or buy) later, locking the land during development. Typical for the multi-year development window.
- **Lease.** The dominant structure. The developer pays a long-term ground lease, commonly escalating, for the operating life (often **25–40 years** plus extensions). Keeps the landowner on the deed and reduces upfront capital.
- **Purchase.** Used where lease isn't available or where the developer wants full control; ties up more capital.

| Structure | Typical economics (U.S., varies widely) | When used |
|---|---|---|
| Option payment | low $/acre/yr | Development / pre-NTP |
| Operating lease | roughly **$500–$2,000+/acre/yr**, escalating | Construction & operation |
| Purchase | market $/acre lump sum | Where lease unavailable |

> Lease rates vary enormously by region, land quality, and competition; treat the figures above as order-of-magnitude only and confirm against comparable local deals.

## Acreage Rules of Thumb

Land requirements scale with technology, module efficiency, **ground-coverage ratio (GCR)** and terrain. Empirical U.S. data (LBNL) gives useful planning densities:

| Configuration | Power density | Acres per MW(DC) |
|---|---|---|
| Fixed-tilt (median) | ~0.35 MW(DC)/acre | **~2.8** |
| Single-axis tracking (median) | ~0.24 MW(DC)/acre | **~4.2** |
| Common planning range (incl. setbacks, roads, substation) | — | **~5–10** |

```
Worked example — gross land for a 100 MW(DC) tracker plant
  Direct array footprint  ≈ 100 / 0.24  ≈ 417 acres
  Add ~15–25% for roads, setbacks, substation, laydown
  Gross site control       ≈ 480–520 acres
```

The wide range exists because three variables dominate: **module efficiency**, **row spacing / GCR** (see [Trackers & Fixed-Tilt Mounting](util-trackers.md)), and **terrain** (grading and undevelopable areas). Higher GCR packs more MW per acre but raises self-shading and backtracking losses.

## Environmental & Permitting Constraints

These are the screens that most often delay or stop projects. On federal land they are formalized through **NEPA**; on private land, analogous state/local review and federal resource laws still apply.

- **NEPA (National Environmental Policy Act).** Triggered by a federal nexus — e.g., projects on **BLM** land or requiring federal permits. Large solar projects outside designated leasing areas commonly require a full **Environmental Impact Statement (EIS)**, a multi-year process; smaller or pre-screened sites may use an Environmental Assessment (EA).
- **Endangered Species Act (ESA).** A **Section 7** consultation with the U.S. Fish & Wildlife Service is required where listed species or critical habitat may be affected; compensatory mitigation is common.
- **Wetlands (Clean Water Act §404).** Jurisdictional wetlands and waters require Army Corps permitting; avoidance and minimization are strongly preferred over mitigation.
- **Cultural / historic resources.** Section 106 (National Historic Preservation Act) review and tribal consultation for archaeological and cultural sites.
- **Prime farmland & ag conversion.** Conversion of prime/important farmland draws community and policy scrutiny and may trigger Farmland Protection Policy Act review or local ordinances; agrivoltaics is sometimes used to mitigate.

> **Key point:** Environmental review timelines — especially a full NEPA EIS — can rival or exceed interconnection as the gating schedule item. Early biological, wetland and cultural surveys are cheap insurance against late-stage redesign.

## GIS Screening

Before any boots-on-the-ground work, developers run **GIS desktop screens** to rank candidate parcels quickly:

```
GIS screening layers (typical stack)
  ├── Solar resource (GHI/DNI rasters)
  ├── Slope/terrain (DEM-derived)
  ├── Transmission lines & substations (proximity)
  ├── FEMA floodplains & NWI wetlands
  ├── Habitat / critical-habitat & conservation areas
  ├── Parcels & ownership (assembly difficulty)
  └── Zoning / land-use & setbacks
```

The output is a constrained "buildable area" polygon used for preliminary layout and acreage/MW estimates.

## Community & Zoning

- **Zoning / conditional-use permit (CUP).** Most jurisdictions require a CUP or rezoning, with public hearings, setbacks, height limits, fencing, screening (vegetative buffers), glare, and decommissioning-bond requirements.
- **Community engagement.** Early outreach, tax-revenue and jobs messaging, and visual screening reduce opposition; local moratoria and ordinances are a growing risk.
- **Decommissioning.** Many ordinances and leases require a bonded decommissioning plan to restore the land at end of life.

## Sources & Further Reading

- [LBNL — Land Requirements for Utility-Scale PV](https://emp.lbl.gov/sites/default/files/emp-files/land_requirements_for_utility-scale_pv.pdf)
- [NREL — Land-Use Requirements for Solar Power Plants](https://docs.nrel.gov/docs/fy13osti/56290.pdf)
- [BLM Solar — NEPA Evaluation Process](https://blmsolar.anl.gov/non-competitive/blm-evaluates/nepa/)
- [SEIA — Land Use & Solar Development](https://seia.org/initiatives/land-use-solar-development/)
- [SEIA — Solar Siting and Wildlife](https://seia.org/solar-siting-and-wildlife/)

---
*Reference content for educational use; site, lease, and permitting requirements are jurisdiction-specific — confirm with local authorities and qualified counsel before relying on them.*
