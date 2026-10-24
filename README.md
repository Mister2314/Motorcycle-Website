# Motorcycle-Website

"Grand Prix" — a motorcycle store landing page rebuilt as an industrial catalogue: nine spec'd tiles, fluid display typography and a red machine-stamp accent on a white field.

**Live demo:** <https://motorcycle-website.vercel.app/>

<div align="center">

<img src="docs/demo.gif" alt="Motorcycle-Website — animated demo" width="700">

| Desktop | Mobile |
|---|---|
| <img src="docs/shot-desktop.png" alt="Desktop view" width="700"> | <img src="docs/shot-mobile.png" alt="Mobile view" width="290"> |

<details>
<summary>More screenshots</summary>

| Desktop | Mobile |
|---|---|
| <img src="docs/preview.png" alt="Desktop, alternate view" width="700"> | <img src="docs/preview-mobile.png" alt="Mobile, alternate view" width="290"> |

</details>

</div>

## What it does

A storefront landing page: hero title area, a nine-tile catalogue grid, brand imagery and a footer sharing one visual language. The revamp treats each tile like a catalogue entry — an index plate (01–09), a ruled image frame, letterspaced metadata and a hover choreography that zooms the image, blooms a red duotone stamp and slides up a spec strip. Typography carries the design: Rajdhani condensed caps for display, Heebo for letterspaced meta, Ubuntu for body — all on a fluid `clamp()` scale.

The grid is CSS Grid top to bottom and reflows to a single full-bleed column on mobile. Scroll reveals are once-only with a 70 ms row rhythm, driven by one IntersectionObserver. No animation library — every transition is CSS on `transform`/`opacity`.

## Tech stack

React 19 · TypeScript · Vite · zero runtime animation dependencies

## Features

- Nine-tile catalogue grid: index plates, ruled frames, spec strips on hover
- Tile choreography — image zoom (1.06), red duotone stamp (`mix-blend-mode: multiply`), title underline sweep, press feedback (0.98 scale)
- Fluid typographic scale via `clamp()`: hero 44→96 px, tile titles 20→26 px
- Sticky header that condenses to a 56 px bar past 100 px of scroll
- Once-only scroll reveals with per-row 70 ms stagger (IntersectionObserver)
- Scroll-to-top as a real `<button>` with `aria-label`, appears past 100 px
- Keyboard access throughout: skip link, `focus-visible` outlines, tiles as links
- Mobile-specific composition: full-bleed 4:5 tiles, folio caption rows, hover affordances replaced with tap feedback
- Reduced-motion honored: reveals render instantly, hover zoom falls back to opacity-only cues
- Lazy-loaded grid images (`loading="lazy"`, `decoding="async"`)

## Run locally

```bash
git clone https://github.com/Mister2314/Motorcycle-Website.git
cd Motorcycle-Website
npm install
npm run dev
```

## Notes

- Tiles render from a data array in `src/App.tsx`; tile images map to alt text in `src/components/BoxSection.tsx`.
- `git tag pre-revamp-motorcycle` holds the pre-revamp design for comparison.
