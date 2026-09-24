# Orbit Docs

> Developer documentation for Orbit: non-custodial pull payments and atomic batch payroll on Stellar Soroban.

[![Fumadocs](https://img.shields.io/badge/built%20with-Fumadocs-000000?style=flat-square)](https://fumadocs.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)](package.json)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![Stellar](https://img.shields.io/badge/Stellar-Soroban-7B68EE?style=flat-square&logo=stellar)](https://stellar.org)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white)](public/openapi.yaml)

This repo holds the documentation site. The protocol code lives in [Orbit-xyz/Orbit](https://github.com/Orbit-xyz/Orbit).

---

## Structure

```
content/docs/             # all pages (MDX)
  index.mdx               # introduction (served at /)
  quickstart.mdx, testnet.mdx, roadmap.mdx
  concepts/               # allowance vaults, trust model
  checkout/               # hosted checkout, widget
  subscriptions/          # plans, billing cycles
  payroll/                # batch payroll
  contracts/              # OrbitContract entrypoint reference
  api-reference/          # Merchant API endpoints, errors, webhooks
  meta.json               # sidebar order and section headers
components/mdx.tsx        # Note, Warning, Steps, Tabs, Cards, ParamField, Endpoint...
components/mermaid.tsx    # client-side Mermaid diagrams (theme-aware)
lib/                      # source loader, nav config
public/openapi.yaml       # Merchant API spec
```

Pages use Mintlify-style components (`<Note>`, `<AccordionGroup>`, `<Steps>`, `<Tabs>`, `<Columns>`, `<ParamField>`), mapped onto Fumadocs in `components/mdx.tsx`.

## Develop

```bash
npm install
npm run dev           # http://localhost:3000
npm run build         # production build, type-checks every page
```

Search (`Ctrl K`), `llms.txt`, `llms-full.txt` and per-page Markdown (`/<page>.md`) are built in.

## Deploy

Deployed on Vercel as its own project. Every push to `main` redeploys.

## Writing rules

- Token amounts are raw integer units (USDC has 7 decimals, `290000000` = 29 USDC).
- Every code sample must run against testnet contract `CAZBZBUWBSQYK2RZ6WHMXVDLIQHSU5WD7ANZYL6HLNSCRUOTNYCDYQNG`.
- Mark anything not yet live as **preview** or **planned**.
- Monochrome brand: `#000000`, `#FFFFFF`, `#2C2C2C`.

---

MIT. Orbit Contributors.
