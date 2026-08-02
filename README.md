# Webros — Marketing Site

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Three.js.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. This was written without a live build check (no
network access in the environment it was built in) — if `npm install` or
`npm run build` surfaces anything, it's most likely a version-range mismatch
in `package.json`, not a logic error. Bump the offending package and re-run.

## What's here (Phase 1 + 2)

- **Nav** — glass-on-scroll header, mobile menu, WhatsApp CTA
- **Hero** — title-block layout, signature 3D gem (wireframe → solid brass
  on load, tracks cursor), rotating word subheading
- **Trust strip**, **Services** (8 flagship cards with custom SVG preview
  art + "more services" CTA), **Work board** (3D sliding concept-work
  carousel over an ambient particle-network background), **Footer**,
  **floating WhatsApp button**, **scroll-progress rail**

Design system: near-black ink + antique brass + muted jade, a CAD
"title-block" motif (hairline corner marks, blueprint grid, mono spec
labels) because Webros' pitch is "we engineer growth," made literal.
Every 3D/WebGL layer is skipped below 768px for performance; all
animation respects `prefers-reduced-motion`.

## Placeholders to replace before launch

- `components/Footer.tsx` — email (`hello@webros.in`) and social links
  (Instagram / YouTube / LinkedIn are currently `#`)
- `lib/constants.ts` → `WORK_SAMPLES` — these are labelled **concept**
  projects, not real client work. Replace with real case studies (with
  client permission) as projects ship. Don't relabel these as real without
  swapping the content — the "Concept" tag is doing real work for trust.

## Structure

```
app/            layout, page, global styles + Tailwind v4 theme tokens
components/     one component per file, client components marked "use client"
lib/constants.ts  nav links, service data, work samples, the WhatsApp helper
```

Server vs. client components is deliberate: anything static (Footer,
TrustStrip, ServicePreview, FloatingWhatsApp) stays a server component to
keep the client bundle small; only the genuinely interactive pieces (Nav,
the two Three.js scenes, WorkBoard, RotatingWord, Reveal) hydrate.

## Coming next

Cinematic scroll story, "why choose us" timeline, interactive calculators,
testimonials, full portfolio, contact form.
