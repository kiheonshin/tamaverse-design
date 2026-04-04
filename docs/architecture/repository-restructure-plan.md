# Repository Restructure Plan

## Why the current repository needs to change

The current repository is a flat static archive:

- `index.html`
- design system documents
- motion demo entry points
- supporting assets

That structure works for direct publishing, but it does not scale to the next product stage where:

- the root experience becomes `Tama Templates`
- the current pages move into an archive
- layout templates become a first-class source
- export bundles become part of the site flow

## Current file roles

| Current file | Current role | Future role |
| --- | --- | --- |
| `index.html` | archive hub | move to archive entry or replace with new product home |
| `tamaverse-basic-design-system.html` | static design system | `design concept / static` |
| `tamaverse-plat-design-system-v2.html` | static design system | `design concept / static` |
| `tamaverse-kawaii-cyberpop.html` | motion-heavy reference | `design concept / motion` |
| `tamaverse-basic-proof.html` | mirror wrapper | `motion proof entry` |
| `Interactive Skin.html` | live transition demo | `interactive proof engine` |
| `interactive-basic-endpoint-patches.js` | basic skin patch data | `interactive proof dependency` |

## Target repository shape

```text
tamaverse-design/
  docs/
    architecture/
    product/
  legacy/
    raw-html/
  public/
    assets/
  src/
    components/
    content/
      design-concepts/
      layout-templates/
      motion-proofs/
    data/
    layouts/
    pages/
      index.astro
      archive/index.astro
      archive/design-systems/[slug].astro
      archive/motion/[slug].astro
      archive/labs/[slug].astro
      templates/index.astro
      templates/designs/[slug].astro
      templates/layouts/[slug].astro
      compose/index.astro
      export-guide/index.astro
```

## Route strategy

### Recommended public routes

- `/` -> `Tama Templates`
- `/archive` -> archive overview
- `/archive/design-systems/basic`
- `/archive/design-systems/plat`
- `/archive/motion/kawaii-cyberpop`
- `/archive/motion/basic-proof`
- `/archive/labs/interactive-skin`
- `/templates/designs`
- `/templates/layouts`
- `/compose`
- `/export-guide`

## Recommended taxonomy

### Bucket 1. Design systems

Static visual systems intended for general webpage styling.

- Basic
- PLAT

### Bucket 2. Motion references

Design references where interaction and transition logic are part of the value.

- Kawaii Cyber-Pop
- Basic Motion Proof

### Bucket 3. Labs

Experimental or implementation-oriented surfaces.

- Interactive Skin

## Migration phases

### Phase 1. Preserve the original HTML sources

Move the current raw sources into `legacy/raw-html/` without changing their content.

Purpose:

- maintain a trusted fallback
- avoid breaking reference behavior during the rebuild

### Phase 2. Introduce a framework shell

Adopt a static-site-friendly framework such as Astro.

Why Astro is the preferred choice:

- static-first
- easy route control
- Vercel-friendly
- content collections fit design and layout metadata well

### Phase 3. Convert archive pages into content-driven routes

Each current HTML page gets:

- metadata entry
- archive route
- compact card summary

### Phase 4. Promote `Tama Templates` to the root experience

The current hub stops being the main surface.

Instead:

- `/` becomes the product launcher
- `/archive` preserves the historical design docs

### Phase 5. Add layout template ingestion

Use the approved subset of `tms-slide-template-lab.html` as the source for layout browsing.

### Phase 6. Add compose and export

Enable the `design concept x layout template` handoff flow.

## PR breakdown

### PR 1. Documentation and taxonomy lock

- product blueprint
- repository plan
- source ingestion scope

### PR 2. Framework bootstrap

- add Astro or equivalent
- create route skeleton
- keep current static site untouched while bootstrapping

### PR 3. Archive migration

- convert current hub into `/archive`
- convert static design docs into archive content entries

### PR 4. Motion proof separation

- separate `basic-proof` and `Interactive Skin` from regular design-system listings
- add clear motion labeling

### PR 5. Layout template MVP

- adapt the approved `tms-slide-template-lab` subset
- create layout picker UI

### PR 6. Compose and export MVP

- composition state
- export bundle generation

## Risks and guardrails

### Risk 1. Users confuse proof pages with reusable templates

Guardrail:

- render motion references in a separate group with distinct labels

### Risk 2. Existing links break during migration

Guardrail:

- keep compatibility redirects or mirror routes for current `.html` entry points

### Risk 3. The new product inherits too much of the old archive IA

Guardrail:

- design the root experience around choosing and composing, not reading documentation

### Risk 4. `tms-slide-template-lab.html` scope expands uncontrollably

Guardrail:

- only implement the modules visible in the reference screenshot

## Implementation notes

### `tamaverse-basic-proof.html`

This file is currently an iframe wrapper over `Interactive Skin.html`.

That means the future product should treat it as:

- an entry surface
- a proof alias

not as the primary source of the interaction engine

### `interactive-basic-endpoint-patches.js`

This is not archive fluff. It is part of the logic that turns the motion demo into a `Basic`-styled version of the same layout.

It should stay coupled to the motion-proof system during the migration.

