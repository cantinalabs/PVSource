# PVSource — The One-Stop Solar Reference

A comprehensive, searchable, **offline-capable** reference for solar energy — spanning residential, commercial, and utility-scale systems, plus DIY builds, codes, calculations, tools, and incentives. Built as a fast static website with no backend.

> **Reference and education only.** Nothing here is engineering, tax, legal, or code-compliance advice. Codes are adopted and amended locally, and incentive programs change frequently — always verify with your AHJ, utility, [DSIRE](https://www.dsireusa.org/), and a licensed professional.

---

## What's inside

- **100+ in-depth guides** across nine areas: Fundamentals, Grid & Interconnection, Build It Yourself (DIY), Residential, Commercial, Utility-Scale Solar, Operations & Maintenance, Commercial Incentives, and Tools.
- **Natural-language search** — a custom, fully offline BM25 engine with a stemmer, domain synonyms, and question/intent handling. Ask things like *"what are inverters?"* or *"how do I calculate conduit fill?"* (press <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>). Includes scope filters (Residential, Commercial, Utility, etc.).
- **Interactive calculators** — 11 live tools: system & string sizing, voltage drop, conduit fill, ampacity, inter-row spacing/GCR, DC/AC ratio, demand-charge savings, specific yield, battery backup, and payback.
- **Interactive U.S. state map** — a real SVG map; click any state for its net-metering posture, SREC-market status, and program links.
- **Downloads** — export any article, a whole section, or the entire reference as PDFs (bundled into a ZIP), generated entirely in your browser.
- **Engineering glossary** with 140+ terms, surfaced as hover tooltips throughout the site.
- **Quality-of-life:** dark/light mode, collapsible navigation, per-page "related pages," a sticky "on this page" outline, print/PDF stylesheet, and prev/next article chevrons.

The only online dependency is Google Fonts; everything else works fully offline (open `site/index.html` directly).

---

## View locally

No build step or server is required — it's plain static files.

```bash
# simplest: just open the entry page in a browser
open site/index.html          # macOS
# or: xdg-open site/index.html # Linux  /  start site/index.html # Windows
```

Optionally serve it over http (nicer for some browsers):

```bash
cd site && python3 -m http.server 8080
# then visit http://localhost:8080
```
---

## Project structure

```
.
├─ site/                     # ← the built website (this is what gets served)
│  ├─ index.html             #   overview / landing page
│  ├─ *.html                 #   one file per guide + the tool pages
│  ├─ .nojekyll              #   tells GitHub Pages to skip Jekyll processing
│  └─ assets/
│     ├─ styles.css          #   design system (light + dark themes)
│     ├─ app.js              #   UI: nav, search palette, tooltips, related, print
│     ├─ search-engine.js    #   custom offline BM25 search engine
│     ├─ search-index.js     #   generated inverted index
│     ├─ glossary-data.js    #   generated glossary tooltip dictionary
│     ├─ downloads-data.js   #   generated article text for PDF export
│     ├─ map-paths.js        #   generated U.S. state SVG geometry
│     ├─ jspdf.min.js        #   PDF generation (downloads page)
│     └─ jszip.min.js        #   ZIP bundling (downloads page)
├─ content/                  # source Markdown for the guides
├─ *.md                      # source Markdown for the commercial-incentive guides
├─ .github/workflows/        # GitHub Pages deployment workflow
└─ .gitignore
```

## How it's built

The HTML in `site/` is generated from the Markdown in `content/` (and the incentive `*.md` files at the repo root) by a Python build script. Because the site is fully self-contained, the generated `site/` folder is committed so it can be served or hosted directly without any build environment. If you edit the Markdown sources, regenerate `site/` with the build tooling before deploying.

---

## License & attribution

No license is applied by default — add one (e.g., `LICENSE`) if you plan to share or reuse it. Third-party libraries bundled under `site/assets/` retain their own licenses: [jsPDF](https://github.com/parallax/jsPDF) (MIT) and [JSZip](https://github.com/Stuk/jszip) (MIT/GPL). U.S. state geometry is derived from [us-atlas](https://github.com/topojson/us-atlas) (public-domain U.S. Census data).
