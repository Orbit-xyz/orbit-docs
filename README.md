# Orbit Docs

> Developer documentation for Orbit: non-custodial pull payments and atomic batch payroll on Stellar Soroban.

[![Mintlify](https://img.shields.io/badge/built%20with-Mintlify-0D9373?style=flat-square)](https://mintlify.com)
[![Stellar](https://img.shields.io/badge/Stellar-Soroban-7B68EE?style=flat-square&logo=stellar)](https://stellar.org)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white)](api-reference/openapi.yaml)

This repo holds the documentation site. The protocol code lives in [Orbit-xyz/Orbit](https://github.com/Orbit-xyz/Orbit).

---

## Structure

```
docs.json                 # site config: theme, colors, navigation
introduction.mdx          # landing page
quickstart.mdx            # CLI walkthrough on testnet
concepts/                 # allowance vaults, trust model
guides/                   # testnet, checkout, subscriptions, payroll
contracts/                # OrbitContract entrypoint reference
api-reference/            # Merchant API overview, errors, webhooks
  openapi.yaml            # generates the endpoint pages
roadmap.mdx
logo/, favicon.svg        # brand assets
```

## Navigation

| Tab | Contents |
|---|---|
| Documentation | Introduction, quickstart, concepts, guides |
| Smart contract | `create_vault`, `pull_funds`, `batch_disburse`, errors |
| API reference | Generated from `api-reference/openapi.yaml` |

## Local preview

```bash
npm i -g mint
mint dev              # http://localhost:3000
mint broken-links     # check internal links
```

## Deploy

Connect this repository in the [Mintlify dashboard](https://dashboard.mintlify.com). Every push to `main` deploys.

## Writing rules

- Token amounts are raw integer units (USDC has 7 decimals, `290000000` = 29 USDC).
- Every code sample must run against testnet contract `CAZBZBUWBSQYK2RZ6WHMXVDLIQHSU5WD7ANZYL6HLNSCRUOTNYCDYQNG`.
- Mark anything not yet live as **preview** or **planned**.
- Monochrome brand: `#000000`, `#FFFFFF`, `#2C2C2C`.

---

MIT. Orbit Contributors.
