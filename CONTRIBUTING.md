# Contributing to Orbit Docs

Thanks for helping improve Orbit's developer documentation. This repository contains the Fumadocs/Next.js documentation site; the protocol implementation lives in [Orbit-xyz/Orbit](https://github.com/Orbit-xyz/Orbit).

## Local setup

Use Node.js 20 and npm. From the repository root, install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

## Where documentation lives

- `content/docs/` contains the documentation pages as MDX files.
- `content/docs/<section>/` contains pages grouped into a section, such as `contracts/` or `api-reference/`.
- `content/docs/meta.json` controls the top-level sidebar title, section headings, and page order.
- A section's own `meta.json` controls the order of pages within that section. The `...` entries in a parent metadata file include the pages from a nested section.
- `components/mdx.tsx` maps the documentation's Mintlify-style MDX components to Fumadocs components.

When adding a page, create its `.mdx` file in the appropriate directory and add its slug to that directory's `meta.json` when an explicit sidebar position is needed. Keep links between pages relative to the documentation routes (for example, `/contracts/overview`).

## MDX components

The shared component map in `components/mdx.tsx` includes:

- Callouts: `<Note>`, `<Info>`, `<Tip>`, `<Warning>`, and `<Check>`
- Navigation and layout: `<AccordionGroup>`, `<Accordion>`, `<Columns>`, and `<Card>`
- Guided content: `<Steps>`, `<Step>`, `<Tabs>`, and `<Tab>`
- API reference: `<ParamField>` and `<Endpoint>`
- Diagrams: `<Mermaid>`

Standard Fumadocs MDX components are also available. Prefer these shared components so pages remain visually consistent.

## Checks before opening a pull request

Run both checks from the repository root:

```bash
npm run types:check
npm run build
```

The type check generates the Next.js route types and runs TypeScript validation. The production build compiles the site and its MDX pages. The GitHub Actions workflow runs these checks for pull requests and pushes to `main`.

## Pull requests

- Keep changes focused and explain the documentation problem they solve.
- Update the relevant `meta.json` when adding or moving pages.
- Include screenshots when a change affects the rendered UI.
- Confirm that links, code samples, and API details match the current implementation.
