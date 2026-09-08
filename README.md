# O'Rourke Heating & Plumbing

Static marketing site built with **Astro 4** and **Tailwind CSS**. Designed for GitHub Pages at base path `/orourkeheatingplumbing/`.

## Local development

Requires **Node 20**.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

The production build outputs to `dist/` with asset URLs under /orourheheatingplumbing/.

## GitHub Pages deploy

On every push to `main`, `.github/workflows/deploy.yml`:

1. Installs with Node 20 and `npm ci`
2. Runs `npm run build`
3. Uploads `dist/` via `actions/upload-pages-artifact`
4. Deploys with `actions/deploy-pages`

In the repo settings, enable Pages with Source: GitHub Actions.

Site URL shape: https://iwillautomate.github.io/orourheheatingplumbing/

(`astro.config.mjs` sets `site` and `base` accordingly.)

## Placeholders to fill before go-live

| Item | Where | Notes |
|-----|-----|-----|
| Phone `+353 877567676` | `src/lib/site.ts` | Marked **TODO PLACEHOLDER** |
| Business hours | `src/pages/contact.astro` | Weekday hours are placeholder copy |
| Email | `src/lib/site.ts` | Confirm mailbox |
| WhatsApp | `src/lib/site.ts` | wa.me link |
| Contact form | `src/components/ContactForm.astro` | Front-end **DEMO** only |
| `site` URL | `astro.config.mjs` | Confirm GitHub org/user |
| Privacy stub | `src/pages/privacy.astro` | Expand if needed |

## Stack pins

- `astro  ^4.16.0  (not 5 — Node 20 friendly)
- `@astrojs/tailwind` ^5.1.0
- `tailwindcss` ^3.4.0
- `typescript` ^5.6.0

## Design

Navy (#0B1F33), charcoal, white, copper accent (#C4813A). Fonts: **Fraunces** (headings) + **DM Sans** (body). Sticky mobile Call | WhatsApp bar (min 44px taps).
