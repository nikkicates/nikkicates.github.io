# nikkicates.github.io — Consolidated Site

Built with **Astro 4** + **Tailwind CSS 3** · Static output for GitHub Pages.

---

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          ← Base HTML shell, meta tags, scroll observer
├── components/
│   ├── Nav.astro              ← Sticky nav — logo swaps per section
│   └── Footer.astro          ← Site-wide footer
├── pages/
│   ├── index.astro            ← Homepage
│   ├── 404.astro              ← Not found
│   ├── structural-burnout/
│   │   ├── index.astro        ← ST hub
│   │   ├── services.astro     ← Services & pricing
│   │   ├── briefing.astro     ← Executive Briefing vetting form
│   │   ├── pitch.astro        ← Investor Hub
│   │   └── nexus.astro        ← Nexus digital card
│   ├── uri/
│   │   └── index.astro        ← URI Formation full page
│   ├── books/
│   │   └── index.astro        ← UNMASK Blueprint Series
│   └── mogul-ops/
│       └── index.astro        ← Internal operations portal
└── styles/
    └── global.css             ← Fonts, resets, shared utilities
```

---

## Design Tokens

| Token | Value | Use |
|---|---|---|
| Background | `#0f172a` | Every page |
| Surface | `#1e293b` | Cards, panels |
| Border | `#334155` | All borders |
| Muted text | `#94a3b8` | Secondary copy |
| Light text | `#f8fafc` | Primary copy |
| ST Navy | `#0f4c7a` | ST primary |
| ST Teal | `#0d9488` | ST accent, CTAs |
| URI Plum | `#6b21a8` | URI primary |
| URI Gold | `#d97706` | URI accent, CTAs |

Fonts: **Lora** (headings) + **Urbanist** (body) — loaded via Google Fonts in `global.css`.

---

## Dev Setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to /dist
npm run preview    # preview the build
```

---

## Deployment: GitHub Pages

### Auto-deploy (recommended)
Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml`
builds and deploys automatically.

**First-time setup:**
1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main`

### Manual deploy
```bash
npm run build
# Then push the /dist folder contents to your gh-pages branch
```

---

## Key Customizations Required Before Launch

### 1. GHL Webhook URLs
In `briefing.astro` and `uri/index.astro`, replace the placeholder:
```js
const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_TRIGGER_ID';
```
with your actual GoHighLevel inbound webhook URLs.

### 2. Book Purchase Links
In `books/index.astro`, replace:
```
href="https://strategicunmasking.com/unmask-vol-1"
href="https://strategicunmasking.com/unmask-vol-2"
```
with your actual checkout/product URLs.

### 3. Nexus Card Photo
In `nexus.astro`, replace the placeholder avatar with your actual photo:
```html
<!-- Replace this div with: -->
<img src="/images/nikki-cates.jpg" alt="Nikki Cates" class="w-full h-full object-cover" />
```
Add your photo to `public/images/nikki-cates.jpg`.

### 4. OG Image
Add `public/og-default.jpg` (1200×630px) for social sharing previews.

### 5. LinkedIn URL
Confirm your LinkedIn profile URL is correct in `Footer.astro`:
```
href="https://www.linkedin.com/in/nikkicates"
```

### 6. Mogul Ops Portal
Replace the placeholder auth logic in `mogul-ops/index.astro` with
your actual portal URL (GHL membership area or custom backend).

---

## Section-Aware Logo & Accent System

Each page passes `section` and `accentColor` props to `Layout.astro`:

```astro
<Layout
  title="Page Title"
  section="st"          ← 'home' | 'st' | 'uri'
  accentColor="teal"    ← 'teal' | 'gold'
>
```

- `section="home"` → Nav shows "Nikki **Cates**"
- `section="st"` → Nav shows "Strategic **Transformations**"  
- `section="uri"` → Nav shows "**URI** Formation"

---

## Form Architecture

All vetting forms use JavaScript `fetch()` to POST JSON to GHL inbound webhooks
with `mode: 'no-cors'` (GHL webhooks don't return CORS headers on success).
Since no-cors responses are opaque, the forms assume success after fetch completes.

For a CORS-respecting alternative, consider routing through a Cloudflare Worker proxy.

---

## Adding the Speaker Catalog

When ready, add `src/pages/structural-burnout/speaker-catalog.astro` as a
protected post-vetting resource. Link to it only from the briefing confirmation
flow (not from public nav).
