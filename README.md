# Pool Builder Web Design — poolbuilderwebdesign.com

Marketing site for **Pool Builder Web Design**, a cantandoDigital company offering website design, SEO and digital marketing for pool builders.

- Next.js (App Router) static export → `out/`
- Pages: Home, About, Services, Pricing, Contact
- Contact form posts to a Cloudflare Pages Function at `functions/api/contact.js` (emails via Resend)

## Develop

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages, Git-connected)

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Build output directory | `out` |
| Node version | 22 (`NODE_VERSION=22`) |

Every push to `main` deploys automatically.

### Environment variables (Pages → Settings → Variables and Secrets)

| Name | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | yes (secret) | Shared Resend key used across client sites |
| `LEAD_TO` | no | Recipient(s), comma-separated. Default `stevenJohn@cantandoDigital.com` |
| `LEAD_FROM` | no | Verified Resend sender. Default `Pool Builder Web Design <leads@cantandodigital.com>` |
| `CRM_ENDPOINT` | no | If set, each lead is also POSTed here as JSON |

## Placeholders to replace

- **Pricing** — every `[$ TBD]` / `Setup fee: [TBD]` in `components/Plans.tsx`
- ~~Founder headshot~~ — done: `public/brand/steven-cantando-founder.webp`
- ~~Logo icon~~ — done: official cantandoDigital mark traced from the animated icon (`components/BrandIcon.tsx`, `public/brand/`)
- **Stock photos** — free-license Unsplash images in `lib/site.ts`; swap for real project photos when available
