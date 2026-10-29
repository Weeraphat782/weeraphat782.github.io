# AI Systems Portfolio

Personal portfolio site for **Weeraphat** — AI systems builder / applied AI in export and cargo operations. Static React app; no connection to production cargo systems or customer data.

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`. Deploy to any static host (Vercel, Netlify, S3 + CloudFront, GitHub Pages with SPA fallback).

### SPA routing

Client-side routes:

- `/`
- `/projects`
- `/projects/ai-native-cargo-operations`
- `/about`
- `/contact`

Configure your host to serve `index.html` for unknown paths so refreshes on deep links work.

## Edit copy and links

All public text and placeholders live in [`src/content.ts`](src/content.ts):

- `site.linkedin` — published
- `site.email` / `site.github` — set to `null` until you add real values (buttons stay hidden)
- `impactPlaceholders` — replace `"Not measured"` when you have data
- `caseStudyScreenshots` — redacted UI captures (see below)

## Redacted screenshots

1. Save reviewed PNG/WebP under [`public/case-study/`](public/case-study/) (checklist in that folder’s README).
2. Register each file in `caseStudyScreenshots` in [`src/content.ts`](src/content.ts).
3. The case study shows an **Inside the system** section only when the list is non-empty.

## Case study credibility

Claims on the site are split between **verified in the cargo app repo** (MCP tools, webhooks, AWB/delivered email behavior) and **owner-described** items (LINE, mailbox polling, 07:47 AWB routine, named assistant personas). See the “What is verified” callout on the case study page.

## Missing evidence checklist

Strengthen the case study when you can provide:

- [ ] Full legal name for the site header (if different from “Weeraphat”)
- [ ] Public email for Contact
- [ ] Public GitHub profile URL (only if you want a GitHub button)
- [ ] Measured impact: document prep time, shipments/month, steps removed, discrepancies caught, monitoring time
- [ ] Confirmation whether Thai form draft/translate (`pt-forms`) is deployed on production `master`
- [ ] Confirmation of external schedules: LINE groups, 30-minute mailbox checks, 07:47 AWB routine
- [ ] Optional: sanitized architecture screenshot or redacted workflow diagram from operations (no customer data)

## Tech

- Vite + React + TypeScript
- No UI framework; one global CSS file
- Tiny history-based router in `src/router.tsx` (no react-router dependency)
