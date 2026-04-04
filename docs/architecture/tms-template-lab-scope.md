# TMS Template Lab Scope

## Source inputs

- HTML source: `/Users/artifact/Desktop/tms-slide-template-lab.html`
- visual scope reference: `/Users/artifact/Desktop/스크린샷 2026-04-04 오후 11.17.18.png`

## Goal

Use only the visible, approved subset of the source lab and adapt it into the future `Tama Templates` layout-selection experience.

This document defines what is in scope and what must be excluded.

## Approved visual modules

Based on the screenshot, the following modules are approved for adaptation:

### 1. Family selection panel

Visible in the screenshot as the top selection area.

Adaptation in `Tama Templates`:

- rename `family` to `layout family` or `layout set`
- keep quick switching behavior
- keep small summary data per card

### 2. 16:9 preview stage

Visible in the screenshot as the main preview block.

Adaptation in `Tama Templates`:

- keep the large 16:9 preview
- keep basic stage metadata
- keep previous / play / next controls if they help compare layout variants
- keep speed control only if autoplay remains part of the layout browsing experience

### 3. Stage metadata block

Visible below the main preview.

Adaptation in `Tama Templates`:

- convert slide metadata into layout metadata
- keep only fields that help layout understanding

Recommended fields:

- layout family
- layout index or variant
- structure type
- density
- source slug

### 4. Collection board

Visible on the right side of the screenshot.

Adaptation in `Tama Templates`:

- use as a candidate or compare board
- allow users to collect preferred layouts before final selection
- keep JSON export or evolve it into composition export later

### 5. Action bar

Visible in the screenshot under the preview section.

Adaptation in `Tama Templates`:

- current layout collect
- current layout info copy
- open source reference

## Explicitly excluded modules

The following modules exist in the source HTML but are not visible in the approved screenshot and should not be carried into the first implementation:

### Exclude

- hero card
- rule card
- summary strip
- global notice as a primary UI block
- thumbnail panel
- full thumbnail grid browsing
- any extra source-lab chrome outside the screenshot subset

## Source HTML mapping

### Keep

From `/Users/artifact/Desktop/tms-slide-template-lab.html`:

- `.family-panel`
- `.stage-panel`
- `.collection-panel`
- `.stage-meta`
- `.controls`
- speed control block, if still useful after adaptation

### Remove or ignore

- `.hero-card`
- `.rule-card`
- `.summary-strip`
- `.thumbnail-panel`

## Behavioral guidance

### Keep behavior if it supports selection clarity

- previous / next
- autoplay or scan, if it speeds up browsing
- copy selected item metadata
- export collected selection

### Remove behavior if it overcomplicates the product

- anything that turns the interface into a source-lab inspector rather than a template picker
- interactions that require reading raw asset URLs as a primary task

## Tama Templates adaptation model

The source lab is slide-centric. `Tama Templates` must become layout-centric.

### Translation layer

- `template family` -> `layout family`
- `slide` -> `layout variant`
- `slide collection` -> `layout candidate board`
- `JSON export` -> later becomes `composition export`

## Future composition logic

Once the user chooses:

1. one design concept
2. one layout template

the final system should export a bundle that another LLM can implement.

Recommended output bundle:

- `composition.json`
- `design-template.json`
- `layout-template.json`
- `implementation-brief.md`

## Guardrails for implementation

### Guardrail 1. Screenshot wins over source completeness

If the HTML contains more modules than the screenshot shows, the screenshot is the source of truth for MVP scope.

### Guardrail 2. Layout browsing comes before asset inspection

The adapted UI should help users pick layouts quickly, not inspect a dataset exhaustively.

### Guardrail 3. The UI must stay compatible with later design concept pairing

The layout picker should not assume a single built-in visual language. It must remain ready to pair with:

- Basic
- PLAT
- Kawaii Cyber-Pop
- Basic Motion Proof

