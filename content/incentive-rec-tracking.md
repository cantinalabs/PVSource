# REC/SREC Registration & Tracking

A **Renewable Energy Certificate (REC)** — and its solar-specific cousin, the **Solar Renewable Energy Certificate (SREC)** — is the tradable, accountable unit that carries the **environmental attributes** of renewable generation. The electricity flows onto the grid indistinguishably; the **certificate** is what a buyer actually owns and retires to make a "renewable" claim. To keep those claims honest, RECs are **minted, tracked, transferred, and retired** inside regional **energy-attribute tracking systems**.

This page explains what a REC/SREC is, the regional registries and their territories, how a project registers and gets metered, the mint-transfer-retire life cycle, the difference between **compliance** and **voluntary** markets, **Green-e** certification, how a commercial project gets its RECs to market, and the ownership and **double-counting** pitfalls to avoid. For SREC market economics and pricing, see [SREC Markets Deep-Dive](incentive-srec-markets.md). For state program mechanics, see [State Tax Credits & Incentives](state-tax-credits.md) and **[DSIRE](https://www.dsireusa.org/)**.

> **`1 REC = 1 MWh`** of renewable electricity, **metered** (not nameplate). An **SREC** is simply a REC minted specifically from **solar** generation, valuable where a state's Renewable Portfolio Standard has a **solar carve-out**.

## What a REC Actually Represents

A REC bundles the **non-power attributes** of one megawatt-hour: the renewable "greenness," and in most systems the associated environmental characteristics. Sold separately from the electricity, it is what lets a buyer claim to have used renewable power.

- **Unbundled REC** — the certificate is sold **separately** from the underlying energy.
- **Bundled REC** — sold **together** with the electricity (e.g., in a green PPA).
- Once a party **retires** a REC to make a claim, that MWh's attributes are **used up** and cannot be sold again.

## Regional Tracking Systems by Territory

Every REC lives in exactly one **generation-attribute tracking system**, which issues serialized certificates and records their creation, transfer, and retirement. Multi-state systems cover broad regions; several single-state systems exist for RPS administration.

| Tracking system | Territory / scope |
|---|---|
| **PJM-GATS** | PJM Interconnection region — NJ, MD, DC, PA, OH, DE, VA, WV, IL, IN, KY, NC and others; heavy SREC use |
| **NEPOOL-GIS** | New England ISO — MA, CT, RI, NH, VT, ME |
| **NYGATS** | New York State (single-state; NYISO) |
| **M-RETS** | Upper Midwest and beyond — MN, WI, ND, SD, IA, and much of MISO; **registers generators anywhere in the U.S./Canada** |
| **MIRECS** | Michigan (single-state) |
| **NC-RETS** | North Carolina (single-state RPS/REPS administration) |
| **WREGIS** | Western Interconnection — CA, WA, OR, NV, AZ, CO, UT, ID, MT, NM, WY and Western Canada |
| **ERCOT** | Texas (the ERCOT grid; runs the Texas REC program) |
| **NAR (APX North American Renewables Registry)** | Regions **not covered** by another registry (e.g., the Southeast); **registers generators across the U.S./Canada** |

> **Territory matters for eligibility.** A state's RPS usually recognizes RECs from **specific regions** and may pay **less** (or nothing) for out-of-region certificates. Confirm which registry your state accepts and at what tier before assuming an SREC has value there. See [SREC Markets Deep-Dive](incentive-srec-markets.md).

## Project Registration, Metering & Verification

Before a system can mint certificates, it must be **registered** in the applicable tracking system and its output **verified**.

1. **Facility registration.** Register the generator in the regional system (or through an aggregator on your behalf), with capacity, technology, location, and in-service date.
2. **RPS/state certification.** For **compliance-market** SRECs, obtain the state's **RPS eligibility certification** (some states require in-state or in-region siting; others accept out-of-state solar at a lower-value tier).
3. **Metering.** Install **revenue-grade or program-approved production metering** so generation is independently verifiable — this is what converts kWh into mintable MWh.
4. **Data reporting.** Metered output is reported (often automatically via the utility, an estimation methodology for small systems, or a meter-data provider) to the registry.

## The Life Cycle: Mint → Transfer → Retire

| Stage | What happens |
|---|---|
| **Mint (issue)** | For each **verified MWh**, the registry **issues one serialized REC** tied to the generator, fuel type, vintage (generation month/year), and location. |
| **Transfer** | The REC can be **sold/moved** between account holders within the registry (and, via **inter-registry import/export**, sometimes across systems). Ownership moves; the serial number persists. |
| **Retire** | To make a claim (RPS compliance **or** a voluntary green claim), the owner **retires** the REC. Retirement is **final** — the certificate can never be transferred or claimed again. |

> Retirement is the anti-fraud keystone: a serialized certificate can be **retired once**, which is what prevents two parties from claiming the same MWh.

## Compliance vs. Voluntary Markets

RECs serve two distinct demand sources:

- **Compliance market.** Load-serving entities must retire enough RECs (and, where there is a carve-out, enough **SRECs**) to meet a state **Renewable Portfolio Standard (RPS)**. Shortfalls trigger an **Alternative Compliance Payment (ACP/SACP)**, which acts as a price ceiling. Compliance RECs must meet the state's eligibility rules.
- **Voluntary market.** Corporations, universities, and individuals buy RECs to back **clean-energy claims** (e.g., "100% renewable") with no legal mandate. Voluntary buyers typically want **Green-e** certification for assurance.

## Green-e Certification

**Green-e® Energy** (run by the Center for Resource Solutions) is the leading **voluntary-market** certification. Green-e verifies the **entire chain of custody** — from generation through retirement — so a buyer knows the RECs are real, correctly tracked, and **retired without double-counting**.

- Green-e sets **eligibility, vintage, and delivery-year** standards for certified RECs.
- It requires **retirement** of the certificates being claimed and **third-party audit** of sellers.
- It is a **voluntary-market** mark; it does **not** by itself confer **RPS compliance** eligibility (which is set by each state).

## How a Commercial Project Gets Its RECs to Market

A commercial host generally uses one or more of the following channels:

| Channel | Role |
|---|---|
| **Aggregator** | Registers the system, handles metering/reporting, mints and sells RECs on the owner's behalf for a fee or spread — the simplest path for smaller systems. |
| **Broker** | Matches sellers and buyers and executes trades; useful for spot sales. |
| **Trading platform / exchange** | Standardized listing and settlement of certificates. |
| **Direct off-take** | A **long-term REC/SREC contract** (often via the installer, a utility procurement, or a financier) that fixes `$/REC` for a term — the **lender-preferred** route. |

> For financeable projects, a **multi-year forward contract** is common: lenders value predictable REC revenue over volatile spot exposure. See [SREC Markets Deep-Dive](incentive-srec-markets.md).

## Double-Counting & Ownership Pitfalls

The certificate system exists to enforce **exclusive ownership** of each MWh's attributes. The common traps:

- **Selling the REC *and* claiming green.** If you **sell** (or let a program **keep**) your RECs, you **cannot** also claim to use renewable energy — the buyer owns that claim. Selling after making the claim is textbook **double-counting**.
- **Who owns the RECs in a PPA/lease?** Read the contract: many third-party ownership, community-solar, and utility programs **assign the RECs to the provider or utility**. If they own the RECs, the host **cannot** market them or claim "we run on solar."
- **Incentive stacking that transfers attributes.** Some state incentives **require surrender** of RECs in exchange for payment (an SREC *is* the incentive) — you can't be paid for the SREC and also sell it separately.
- **Cross-registry double issuance.** Attributes must live in **one** registry; **inter-registry imports/exports** are designed to prevent a MWh from being minted twice. Use the proper import/export process, never parallel registrations.
- **Vintage/delivery mismatch.** Compliance and Green-e claims have **vintage** and **delivery-year** rules; a REC of the wrong vintage may be ineligible.

## Sources & Further Reading

- [EPA — Green Power Markets: Double Counting](https://www.epa.gov/green-power-markets/double-counting)
- [EPA — Status and Trends Report on U.S. Energy Attribute Tracking Systems (2025)](https://www.epa.gov/system/files/documents/2025-01/status_and_trends_report_us_energy_attribute_tracking_systems.pdf)
- [PJM-GATS — Generation Attribute Tracking System](https://gats.pjm-eis.com/)
- [NEPOOL-GIS](https://www.nepoolgis.com/)
- [M-RETS](https://www.mrets.org/)
- [WREGIS (Western Renewable Energy Generation Information System)](https://www.wecc.org/program-areas/wregis)
- [Green-e — Renewable Electricity Certification](https://www.green-e.org/what-we-do/certification-programs/green-e-energy)
- [DSIRE — Database of State Incentives for Renewables & Efficiency](https://www.dsireusa.org/)
- Related pages: [SREC Markets Deep-Dive](incentive-srec-markets.md) · [State Tax Credits & Incentives](state-tax-credits.md)

---

*This page is educational only and is **not tax, legal, or financial advice**. REC/SREC registry rules, RPS eligibility, and Green-e standards vary by state and change over time. Verify current requirements with the applicable tracking system, your state RPS administrator, and [DSIRE](https://www.dsireusa.org/), and read your PPA/lease to confirm who owns the certificates before making any renewable claim or sale.*
