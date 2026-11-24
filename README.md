# Rifaaq website

Marketing site for the Rifaaq Android app (rifaaq.com): landing page, About,
Support, and the Google Play-required Privacy Policy and Account deletion pages.

Stack: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4.
Brand tokens in `src/styles/globals.css` mirror the mobile app
(`mobile/tailwind.config.js`); logos in `public/brand` are copied verbatim
from `mobile/assets/brand`.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Configuration

| Variable | Default | Used for |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | `https://api.rifaaq.com` | Web account deletion form (`POST /account-deletion-requests`) |

Placeholders that must be filled before launch (contact email, legal entity,
registered address, governing law) live in `src/lib/site.ts`.

## Routes

`/`, `/about`, `/support`, `/privacy`, `/terms`, `/account-deletion`, and the
legacy `/unsubscribe` (linked from previously sent newsletter emails).
