# Multifamily & Virtual Net Metering (VNEM)

Solar on **apartments, condos, and multifamily housing** looks simple from the roof but complicated at the meter. A single rooftop array may sit above dozens of separately billed tenants, common areas billed to the owner, and — in condos — an association that owns the roof but not the individual units. The core challenge is the **split incentive**: whoever pays for the solar is often not the person whose bill it reduces. **Virtual net metering (VNEM)** and **aggregated net metering** are the tariff tools that solve this by allocating one system's bill credits across multiple accounts.

This page covers the split-incentive problem, how VNEM allocation works, metering configurations, state programs, and affordable-housing carve-outs. For an alternative when on-site solar does not fit, see [Community Solar](commercial-community-solar.md). For financing the array itself, see [C&I Financing: PPAs, Leases, C-PACE & On-Bill](commercial-financing.md). For system-level design, see [Commercial System Design](commercial-design.md).

## The Split-Incentive Problem

In a typical multifamily building:

- **Tenants pay their own electric bills** on individually metered units.
- **The owner pays only the common-area bill** (hallways, elevators, pumps, parking, amenities).

If the owner installs solar sized to the whole roof, standard net metering only credits **the meter the system is connected to** — usually the small common-area account. The solar over-produces relative to that one meter, and the tenants (who consume most of the building's energy) see no benefit. Conversely, tenants have no authority to put solar on a roof they do not own. This misalignment is why plain net metering rarely works for multifamily, and why VNEM exists.

> **Split incentive:** the party who invests in an efficiency or generation measure is not the party who reaps the savings. It is the central obstacle in rental and multi-tenant real estate.

## What VNEM / Aggregated Net Metering Does

**Virtual net metering (VNEM)** — also called **virtual net energy metering**, **NEM aggregation**, or **aggregated net metering** depending on the state — lets a single generation system's output be **credited across multiple utility accounts** at the same property (or, in some programs, nearby properties), even though the panels physically connect at one point.

The mechanics:

1. One solar system interconnects at the property.
2. The utility measures the energy it exports.
3. Those kilowatt-hours (or their monetary value) are **allocated to designated benefiting accounts** — tenant meters, common-area meters, or both — according to a **pre-arranged allocation schedule**.
4. Each benefiting account sees **bill credits** for its assigned share.

The property owner or manager typically sets **what percentage** of the solar goes to each account. This is what makes multifamily solar viable: the owner can direct credits to tenants, to common areas, or split them, without running separate arrays for every meter.

### How credits are allocated

- Allocation is usually expressed as a **percentage per benefiting account** and filed with the utility.
- Some programs allow the allocation to be **updated periodically** (e.g., annually) as tenants change.
- Credits may be **volumetric** (kWh) or **monetary** (dollar value), depending on the state and tariff — this affects how much a credit is actually worth.
- The **compensation rate** for exported energy follows the state's current successor tariff (full retail net metering is increasingly rare; many states now use net-billing or value-based credits).

## Master-Metered vs. Individually Metered Buildings

The building's metering configuration drives the design:

| Configuration | Description | Solar approach |
|---|---|---|
| **Master-metered** | One utility meter for the whole building; owner bills tenants (or bundles into rent) | Simplest: solar offsets the single master account under standard net metering; no VNEM needed |
| **Individually metered** | Each unit has its own utility meter and bill; owner has a separate common-area meter | **VNEM/aggregation required** to spread one array's credits across many tenant meters |
| **Individually metered + submetering** | Utility serves a master meter; owner submeters units privately | Solar offsets master meter; savings passed through per submetering/allocation rules (state-regulated) |

Master-metered buildings are the easiest solar targets but are less common in newer construction, where individual metering is standard — which is exactly the case VNEM was designed for.

## Who Benefits: Models

| Model | Who gets the credits | Owner's economics | Tenant's economics |
|---|---|---|---|
| **Common-area only** | Owner (common-area meter) | Owner captures savings; simplest | No direct tenant benefit |
| **Tenant-only VNEM** | Tenants (allocated shares) | Owner funds system; benefit is amenity/marketing/mandate | Lower tenant bills |
| **Split VNEM** | Owner + tenants by percentage | Owner recovers some savings | Partial tenant savings |
| **Owner-funded, rent-recovered** | Owner (via common area) + rent adjustment | Owner monetizes through lease terms | Depends on lease |
| **Third-party PPA to building** | Allocated per contract | No capital; developer owns | Depends on structure |
| **Community solar subscription** | Tenants subscribe off-site | No on-site system needed | Bill credits from remote array |

The choice depends on who is paying, whether an affordable-housing program mandates a tenant share, and local tariff rules.

## State Programs Enabling VNEM

VNEM and aggregation are **state- and utility-specific** — there is no uniform national rule, and successor tariffs have changed the value of credits in many states. Verify current terms with the utility or state commission before modeling.

### California — VNEM and NEM-Aggregation (NEM-A)

California's investor-owned utilities offer **Virtual Net Energy Metering (VNEM)**, which lets an owner of a **multi-tenant property** allocate one or more generation facilities' benefits to **multiple benefiting accounts**, splitting credits between common areas and tenants. A related **NEM Aggregation (NEM-A)** tariff serves multi-meter properties across contiguous or adjacent parcels (often used in agricultural and campus settings). California's overall net-metering regime moved to a net-billing successor tariff, so credit values differ from legacy full-retail net metering — confirm the current tariff and any updates with the utility and the [CPUC VNEM page](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/virtual-net-metering).

### New York — VDER Value Stack and CDG

New York credits distributed solar under the **Value of Distributed Energy Resources (VDER)**, or **"Value Stack,"** which compensates exported energy based on **when and where** it is delivered (locational, temporal, and environmental components) rather than a flat retail rate. **Community Distributed Generation (CDG)** allows a project's Value Stack credits to be shared among subscribers — a mechanism used to serve multifamily and community participants. Crediting can be **volumetric or monetary** depending on project vintage and customer class. See [NYSERDA — Value of Distributed Energy Resources](https://www.nyserda.ny.gov/All-Programs/NY-Sun/Contractors/Value-of-Distributed-Energy-Resources).

### Other states

Several other states offer **aggregated net metering, meter aggregation, or community/shared solar** frameworks (for example, various New England and Mid-Atlantic programs), each with its own eligibility, geographic, and credit-value rules. Because these change frequently, check the current program via the state utility commission or the [DSIRE database](https://www.dsireusa.org/) rather than relying on general descriptions.

## Affordable-Housing Programs and Carve-Outs

Because low-income tenants benefit most from bill savings, several states run programs that **require a tenant share** of solar credits:

- **California — SOMAH (Solar on Multifamily Affordable Housing):** provides incentives for solar on qualifying affordable multifamily properties and **requires that at least 51% of the solar bill credits go to tenants**, using VNEM to deliver them. See the [CPUC SOMAH page](https://www.cpuc.ca.gov/somah) and [CALSOMAH VNEM overview](https://calsomah.org/resources/vnem-overview).
- Other states pair affordable-housing incentives, adders, or low-income community-solar carve-outs with aggregation rules so that renters — not just building owners — capture savings.

> Affordable-housing solar programs typically layer **allocation mandates** on top of VNEM to guarantee tenants a defined benefit. Always confirm current program rules, funding availability, and tenant-allocation minimums.

## Community Solar as an Alternative

When a roof is too small, too shaded, structurally unsuitable, or the ownership structure (e.g., a condo association) blocks on-site solar, **community solar** offers a path: tenants or the association **subscribe** to an off-site array and receive **bill credits** without hosting anything. This sidesteps roof access and split-incentive issues entirely, at the cost of on-site control and (sometimes) resilience benefits. See [Community Solar](commercial-community-solar.md) for how subscriptions, savings guarantees, and portability work.

## Design and Metering Considerations

- **Interconnection point:** VNEM systems still interconnect at a single point; confirm the utility's VNEM interconnection process and any capacity limits.
- **System sizing:** size to the **aggregate** load of all benefiting accounts, not just the common-area meter, since credits spread across many meters.
- **Allocation administration:** allocation percentages must be filed and maintained; tenant turnover means the plan needs an update process. Third-party **solar billing platforms** are commonly used to administer allocations and tenant statements.
- **Credit value:** under successor tariffs (net-billing, value-stack), exported energy is often worth **less than retail**, so **self-consumption timing** and, where allowed, **storage** improve economics — see [Commercial Storage & Demand-Charge Management](commercial-storage.md).
- **Lease and disclosure terms:** if credits flow to tenants, leases and disclosures should state how the benefit is delivered and what happens at move-out.
- **Condominium governance:** condo arrays usually require association approval and a governance decision on how credits are shared among unit owners.

## Sources & Further Reading

- [CPUC — Virtual Net Energy Metering](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/virtual-net-metering)
- [CPUC — Solar on Multifamily Affordable Housing (SOMAH)](https://www.cpuc.ca.gov/somah)
- [CALSOMAH — VNEM Overview](https://calsomah.org/resources/vnem-overview)
- [NYSERDA — Value of Distributed Energy Resources (Value Stack)](https://www.nyserda.ny.gov/All-Programs/NY-Sun/Contractors/Value-of-Distributed-Energy-Resources)
- [DSIRE — Database of State Incentives for Renewables & Efficiency](https://www.dsireusa.org/)
- Related site pages: [Community Solar](commercial-community-solar.md), [Commercial System Design](commercial-design.md), [C&I Financing: PPAs, Leases, C-PACE & On-Bill](commercial-financing.md), [Commercial Storage & Demand-Charge Management](commercial-storage.md)

---

> **Disclaimer:** This page is educational only and does not constitute tax, financial, or legal advice. Net-metering, VNEM, aggregation, and affordable-housing program rules vary by state and utility and change frequently. Verify current tariffs, eligibility, and tenant-allocation requirements with the relevant utility, state commission, and qualified professionals before making decisions.
