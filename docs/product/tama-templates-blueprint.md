# Tama Templates Blueprint

## Purpose

This document advances the repository planning from a simple archive refactor to a product strategy for `Tama Templates`.

The new product is not just a hub of design documents. It is a composition tool where a user picks:

1. a design concept
2. a layout template
3. an export bundle for downstream implementation in another LLM-assisted development environment

## Clarified Content Taxonomy

### 1. Static design concepts

These are closest to reusable visual templates for mostly static websites.

- `tamaverse-basic-design-system.html`
- `tamaverse-plat-design-system-v2.html`

Their role is:

- define the visual language
- define token behavior
- define component styling rules
- act as selectable `design templates`

Assumption:

- The user's mention of `tamaverse-basic-design-system-v2.html` refers to the existing file `tamaverse-plat-design-system-v2.html`, because no file with the former name exists in this repository.

### 2. Motion / interaction references

These are not just static themes. They demonstrate layout, interaction behavior, and transition language.

- `tamaverse-kawaii-cyberpop.html`
- `tamaverse-basic-proof.html`
- `Interactive Skin.html`

Important clarification:

- `tamaverse-basic-proof.html` is not a standalone static design system page.
- It is a mirror entry point for `Interactive Skin.html`.
- Its value is that it proves the same layout can switch between Kawaii Cyber-Pop and Basic styling through keyboard-driven live transitions.

Therefore `tamaverse-basic-proof.html` should be presented as:

- an `interaction proof`
- a `motion-enabled skin switching demo`
- a `reference for transition behavior`

not as a normal design template card alongside static design systems.

### 3. Layout template source

`/Users/artifact/Desktop/tms-slide-template-lab.html` is the source for the future `layout template` catalog.

In the future product model:

- design concept = styling layer
- layout template = structural layer
- exported result = `layout x design concept`

## Product Definition

### Product name

`Tama Templates`

### One-line product statement

Pick a layout, pick a design concept, and export a structured implementation handoff.

### Product position

`tamaverse-design.vercel.app` should evolve from a design archive into a two-layer product:

1. `Tama Templates` as the main working surface
2. `Tamaverse Design Archive` as the source library of themes, proofs, and motion references

## UX Principles

### 1. Selection over explanation

The site should reduce reading and increase confident picking.

- short labels
- visual comparison first
- concise trait summaries
- no long essays on listing pages

### 2. Layout and design are separate decisions

The IA should prevent users from confusing:

- visual concept
- page structure
- motion capability

### 3. Motion templates must be visibly differentiated

`basic-proof` and `kawaii-cyberpop` should be marked as motion-capable references, not plain static templates.

Recommended labels:

- `Static`
- `Motion`
- `Keyboard Demo`
- `Interactive Proof`

### 4. Export is the end goal

The product is successful only if the user can leave the site with an implementation-ready package.

## Information Architecture

### Primary navigation

- `Templates`
- `Archive`
- `Compose`
- `Export Guide`

### Templates section

This becomes the core product surface.

#### A. Design Concepts

- Basic
- PLAT
- Kawaii Cyber-Pop
- Basic Motion Proof

Recommended grouping:

- `Static Design Templates`
- `Motion Design References`

#### B. Layout Templates

Imported and adapted from `tms-slide-template-lab.html`.

The listing page should focus on:

- 16:9 preview
- short structural tags
- minimal layout summary
- quick compare behavior

### Archive section

This becomes the long-term source library.

- `/archive/design-systems/basic`
- `/archive/design-systems/plat`
- `/archive/motion/kawaii-cyberpop`
- `/archive/motion/basic-proof`
- `/archive/labs/interactive-skin`

### Compose section

The user combines:

- one design concept
- one layout template

Then the site generates an export bundle.

### Export Guide

Explains how to take the bundle into another development environment.

## Core User Scenarios

### Scenario 1. Quick static site selection

The user wants a calm, mostly static page.

Flow:

1. User opens `Templates`
2. User filters to `Static Design Templates`
3. User picks `Basic` or `PLAT`
4. User switches to `Layout Templates`
5. User selects a layout
6. User exports the bundle

### Scenario 2. Motion-first concept exploration

The user wants a more expressive, animated experience.

Flow:

1. User opens `Templates`
2. User filters to `Motion Design References`
3. User sees `Kawaii Cyber-Pop` and `Basic Motion Proof`
4. User understands that `Basic Motion Proof` is a live transition demo, not just a static skin
5. User pairs it with a layout
6. User exports a motion-capable handoff bundle

### Scenario 3. Comparing multiple layouts under one design concept

Flow:

1. User selects one design concept
2. User browses several layouts
3. User adds candidate layouts to a compare or collection board
4. User narrows to one layout
5. User exports the final combination

### Scenario 4. Archive-first discovery

Flow:

1. User enters the archive first
2. User studies the original design documents
3. User returns to `Compose`
4. User selects the matching design concept and a layout
5. User exports the handoff bundle

## PRD

### Problem

The current site archives design documents well, but it does not support the actual downstream workflow:

- choose a design direction
- choose a page layout
- produce an implementation-ready result

### Goals

- separate visual theme selection from layout selection
- preserve the archive value of current documents
- make motion-capable references clearly legible
- adapt selected parts of `tms-slide-template-lab.html` into a layout selection workflow
- export a bundle that another LLM or developer can directly use

### Non-goals for MVP

- in-browser full visual editor
- real-time WYSIWYG theme composer
- full reproduction of all `tms-slide-template-lab.html` features
- importing every visible element from the source lab

### Target users

- users selecting a layout for a presentation-like or landing-page-like structure
- users selecting a Tamaverse visual concept
- users preparing a structured handoff for another implementation environment

### MVP feature set

#### 1. Design concept picker

- static concepts and motion references separated
- each card shows name, type, and 2-3 core traits

#### 2. Layout template picker

- adapted from the approved subset of `tms-slide-template-lab.html`
- 16:9 previews
- family or layout set selection
- focused preview stage

#### 3. Compose flow

- chosen design concept summary
- chosen layout summary
- simple compatibility notes

#### 4. Export bundle

Recommended MVP export payload:

- `composition.json`
- `design-template.json`
- `layout-template.json`
- `implementation-brief.md`

Optional later export:

- starter HTML scaffold
- starter CSS token block
- prompt bundle for downstream LLM implementation

### Success metrics

- user can understand the difference between `Static` and `Motion` templates within 10 seconds
- user can narrow to one layout candidate in under 2 minutes
- user can export a complete handoff without reading archive documents end-to-end

## Content Model

### Design concept fields

- `id`
- `name`
- `type` (`static` or `motion`)
- `sourcePath`
- `summary`
- `traits`
- `recommendedUse`
- `tokenStrength`
- `motionNotes`

### Layout template fields

- `id`
- `name`
- `family`
- `previewImage`
- `ratio`
- `summary`
- `structureTags`
- `contentDensity`
- `recommendedUse`

### Composition fields

- `designConceptId`
- `layoutTemplateId`
- `interactionMode`
- `exportFormat`
- `createdAt`

## Naming Guidance

Recommended outward labels:

- `Basic` -> static design template
- `PLAT` -> static design template
- `Kawaii Cyber-Pop` -> motion design reference
- `Basic Motion Proof` -> motion proof / live switching demo

Recommended wording to avoid:

- do not label `basic-proof` as if it were a normal static design system page
- do not place `Interactive Skin` in the same visual bucket as archive design guides

