# Aprende Web - Agent Instructions

## 1. Project

This repository contains the corporate website for:

**Aprende Centro Multidisciplinar**

Location:

**Priego de Cordoba, Cordoba, Spain**

Official slogan:

**"Aprende, recupera y prospera."**

This is a real organization.

Never invent information about the organization.

---

## 2. Mandatory Context

Before implementing any task that affects the website, read the relevant project documentation.

Primary sources of truth:

- `docs/PROJECT.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`
- `docs/SEO.md`

Their responsibilities are:

### PROJECT.md

Defines:

- what Aprende is;
- project objectives;
- audiences;
- general product requirements;
- architectural principles.

### DESIGN.md

Defines:

- visual principles;
- brand usage;
- UI philosophy;
- responsive requirements;
- accessibility principles.

### CONTENT.md

Defines:

- information architecture;
- pages;
- sections;
- content hierarchy;
- CTA priorities.

### SEO.md

Defines:

- SEO strategy;
- URL principles;
- local SEO;
- metadata principles;
- migration considerations.

Do not ignore these documents in favor of assumptions.

---

## 3. Missing Information

Several project decisions are intentionally marked:

`TBD`

TBD means:

**the decision has not been made yet.**

Never replace a `TBD` with invented information.

If a requested implementation depends on unresolved information:

1. identify the missing decision;
2. use a clearly temporary neutral implementation only if the task explicitly allows it;
3. otherwise report the dependency.

Do not silently make product decisions.

---

## 4. Scope Discipline

Implement only what the current task requests.

Do not perform unrelated:

- refactors;
- redesigns;
- dependency changes;
- architecture changes;
- content rewrites;
- SEO changes;
- file reorganizations.

A task asking to modify one component does not authorize changes throughout the application.

Keep diffs focused.

---

## 5. Simplicity

Prefer the simplest implementation that correctly satisfies the requirement.

Apply:

- KISS;
- YAGNI;
- separation of concerns where useful;
- reuse where it actually reduces duplication.

Avoid speculative abstractions.

Do not build infrastructure for hypothetical future requirements.

---

## 6. Architecture

Current stack:

- Next.js;
- TypeScript;
- Tailwind CSS;
- App Router.

The website is primarily static.

Do not introduce without an explicit requirement:

- databases;
- authentication;
- user accounts;
- custom backend;
- global state managers;
- complex APIs;
- repositories;
- service layers;
- event systems;
- CMS;
- external SaaS dependencies.

If a requirement can be solved statically, prefer the static solution.

---

## 7. Dependencies

Do not install a dependency automatically just because it simplifies a small task.

Before adding a dependency, evaluate whether:

- native browser APIs;
- React;
- Next.js;
- CSS;
- Tailwind;

already solve the problem adequately.

Dependencies must have a clear benefit.

Do not install libraries for trivial functionality.

Examples:

Do not install an animation library for simple hover transitions.

Do not install a state manager for navigation state.

Do not install a utility library for a function that can reasonably be implemented locally.

If a new dependency is genuinely necessary and was not explicitly requested, explain the reason before introducing it.

---

## 8. React and Next.js

Prefer Server Components by default.

Use `"use client"` only when client-side behavior is genuinely required.

Do not turn entire pages into Client Components because one small child component requires interactivity.

Keep client boundaries as small as practical.

Use Next.js capabilities where appropriate rather than recreating them unnecessarily.

---

## 9. TypeScript

Use TypeScript strictly.

Avoid:

`any`

unless there is a documented technical reason.

Prefer explicit domain types where they improve clarity.

Do not create unnecessary types for trivial local structures.

Keep types understandable.

---

## 10. Content Architecture

Separate reusable content from presentation when appropriate.

Reusable business information such as:

- contact details;
- professionals;
- services;
- site configuration;

should not be duplicated across multiple components.

Use the project's `src/content/` structure where appropriate.

Avoid hardcoding the same information in multiple places.

---

## 11. Real Information Only

Never invent:

- professionals;
- qualifications;
- degrees;
- certifications;
- professional registration numbers;
- services;
- diagnoses;
- treatments;
- prices;
- opening hours;
- testimonials;
- reviews;
- statistics;
- years of experience;
- patient numbers;
- success rates;
- awards;
- addresses;
- social profiles;
- email addresses;
- legal information.

If information is missing, use existing confirmed project information or flag it as unresolved.

---

## 12. Health and Educational Claims

Aprende operates in areas related to education, psychology and personal development.

Do not introduce unsupported claims.

Never write statements such as:

- guaranteed results;
- we solve every problem;
- proven results;

unless explicitly provided and appropriate.

Do not diagnose visitors through website copy.

Use professional and accurate language.

---

## 13. Design Principles

Follow `docs/DESIGN.md`.

Core visual direction:

- predominantly light backgrounds;
- predominantly dark text;
- corporate cyan, purple and pink accents;
- clean layouts;
- generous whitespace;
- moderate rounded corners;
- restrained visual effects;
- real photography where available.

The website must not feel excessively childish.

---

## 14. Avoid Generic AI Aesthetics

Do not default to common AI-generated landing-page patterns.

Avoid unless explicitly justified:

- large blue-purple gradients;
- glowing blobs;
- glassmorphism;
- excessive blur;
- floating cards;
- oversized marketing headlines;
- excessive pills;
- excessive badges;
- icon-in-circle repeated everywhere;
- decorative dashboards;
- fake metrics;
- fake testimonials;
- excessive entrance animations.

The design must feel specific to Aprende.

---

## 15. Corporate Colors

The corporate colors are:

- cyan;
- purple;
- pink.

Exact values may currently be marked `TBD`.

Never invent official HEX values.

When the official palette is provided, centralize it in the design system.

Do not scatter raw color values throughout components.

---

## 16. Typography

Follow the typography decision in `docs/DESIGN.md`.

If the definitive font remains `TBD`, do not arbitrarily introduce multiple external fonts.

Use a sensible temporary system font stack when necessary until a final decision is made.

---

## 17. Responsive Development

All UI must be developed mobile-first.

Every implementation must consider at minimum:

- small mobile;
- standard mobile;
- large mobile;
- tablet;
- laptop;
- desktop.

Do not build a desktop-only layout and defer mobile behavior.

---

## 18. Accessibility

Target:

**WCAG 2.2 AA**

when applicable.

Always consider:

- semantic HTML;
- keyboard navigation;
- visible focus;
- contrast;
- accessible names;
- alt text;
- touch target size;
- reduced motion.

Do not use color as the only means of communicating information.

Prefer native semantic elements before adding ARIA.

---

## 19. HTML Semantics

Use semantic HTML whenever appropriate:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- headings
- lists

Do not build the entire website from generic `div` elements.

Heading hierarchy must reflect document structure.

Do not choose heading levels for visual sizing.

---

## 20. Images

Prefer Next.js image optimization where appropriate.

Always consider:

- dimensions;
- responsive sizing;
- loading behavior;
- CLS;
- descriptive alt text.

Decorative images should use appropriate empty alternative text.

Never invent image descriptions that do not match the actual image.

Do not use unauthorized images of minors.

---

## 21. Performance

Performance is a project requirement.

Prefer:

- minimal JavaScript;
- Server Components;
- optimized images;
- efficient fonts;
- static rendering;
- small client components.

Avoid unnecessary runtime work.

Do not sacrifice maintainability for micro-optimizations without evidence.

---

## 22. SEO

Follow `docs/SEO.md`.

Do not:

- stuff keywords;
- create doorway pages;
- duplicate pages for nearby towns;
- invent structured data;
- invent reviews;
- invent ratings;
- invent business information.

Each indexable page should serve a real user intent.

---

## 23. Local SEO

Primary location:

**Priego de Cordoba, Cordoba, Spain**

Do not create location pages for nearby towns unless explicitly requested and supported by a real strategy.

Keep business information consistent.

---

## 24. Contact

The website does NOT use a contact form.

Do not implement one unless requirements explicitly change.

Primary contact channels:

1. WhatsApp
2. Email
3. Instagram

WhatsApp is the primary direct conversion channel.

Instagram is primarily a discovery/trust channel rather than the main conversion mechanism.

Do not introduce:

- contact databases;
- lead storage;
- contact APIs;
- form services.

---

## 25. Navigation

Keep navigation simple.

Current primary architecture:

- Inicio
- Servicios
- Equipo
- El centro

Contact should be available through clear CTAs.

Do not add navigation items without a content requirement.

---

## 26. Components

Create reusable components when:

- they are genuinely reused;
- they represent a consistent UI primitive;
- reuse improves maintainability.

Do not prematurely abstract one-off markup.

Avoid giant components.

Also avoid excessive fragmentation into components containing only a few meaningless lines.

Use judgment.

---

## 27. Styling

Use Tailwind consistently.

Avoid mixing styling approaches without a reason.

Do not introduce:

- CSS-in-JS;
- styled-components;
- another CSS framework;

unless explicitly required.

Global CSS should be reserved for genuinely global concerns.

---

## 28. Naming

Use clear English naming for:

- files;
- components;
- variables;
- types;
- functions.

User-facing website content remains Spanish unless requirements state otherwise.

Examples:

`ServiceCard.tsx`

not:

`TarjetaServicio.tsx`

Prefer descriptive names over abbreviations.

---

## 29. File Organization

Respect the existing project structure.

Current conceptual organization:

`src/app`
Routes and page composition.

`src/components`
Reusable UI.

`src/content`
Business/content data.

`src/lib`
Utilities and shared technical logic.

`src/types`
Shared domain types.

`public`
Static assets.

`docs`
Project documentation.

Do not reorganize this structure without a concrete reason.

---

## 30. Comments

Do not add comments that merely repeat what the code already says.

Use comments for:

- non-obvious decisions;
- technical constraints;
- reasons behind unusual implementations.

Prefer self-explanatory code.

---

## 31. Error Handling

Do not silently swallow errors.

Handle realistic failure cases when relevant.

Do not create elaborate error infrastructure for static functionality that cannot meaningfully fail.

---

## 32. Security and Privacy

Do not expose:

- secrets;
- API keys;
- private credentials;
- sensitive information.

Never commit secrets.

Do not collect personal or clinical information unless project requirements explicitly change and an appropriate architecture has been designed.

---

## 33. Legal Content

Legal pages exist in the architecture.

Do not invent final legal text.

Legal content must be provided or validated separately.

Placeholder legal text must never be presented as final production-ready legal advice.

---

## 34. Testing and Validation

For implementation tasks, perform the checks appropriate to the change.

At minimum, when applicable:

```bash
npm run lint
npm run build
```

If the project defines additional relevant tests, run them when appropriate.

Do not claim a command passed unless it was actually executed.

If a command cannot be executed, state that explicitly.

---

## 35. Visual Validation

For UI tasks, do not assume that successful compilation means the result is correct.

When the environment permits, verify:

- desktop rendering;
- mobile rendering;
- overflow;
- spacing;
- navigation;
- interactive states;
- obvious accessibility issues.

Do not claim visual verification if it was not performed.

---

## 36. Existing Code

Before implementing a feature:

1. inspect the relevant existing files;
2. understand current patterns;
3. reuse existing components when appropriate;
4. avoid duplicating functionality.

Do not rewrite working code merely because another implementation is possible.

---

## 37. Refactoring

Refactor only when:

- necessary for the requested task;
- it fixes a concrete issue;
- it materially simplifies the implementation.

Do not combine feature work with unrelated large refactors.

If a significant refactor is advisable but not necessary, report it separately rather than performing it automatically.

---

## 38. Git Discipline

Keep changes focused and reviewable.

Do not modify unrelated files.

Do not commit generated artifacts that should be ignored.

Do not rewrite Git history.

Do not force push.

Do not perform destructive Git operations unless explicitly requested.

Do not create commits unless the task explicitly asks for a commit.

---

## 39. Existing Website

Current website:

`https://www.neuroaprende.net/`

Treat it as a reference source, not as the design specification for the new website.

Do not automatically copy:

- structure;
- visual design;
- wording;
- service taxonomy.

When information from the old website is needed, verify whether it is still valid before using it.

---

## 40. SEO Migration

Do not remove, rename or redirect existing production URLs without considering the migration strategy defined in `docs/SEO.md`.

Before replacing the existing production website, an explicit redirect/migration plan must exist.

---

## 41. Decision Hierarchy

When implementing a task, use this priority:

1. Explicit instructions in the current task.
2. `AGENTS.md`.
3. Relevant project documentation in `docs/`.
4. Existing established project patterns.
5. Framework best practices.

If two sources conflict, identify the conflict rather than silently choosing an interpretation when the difference is material.

---

## 42. Implementation Workflow

For development tasks:

### Step 1 - Understand

Read the request and relevant documentation.

### Step 2 - Inspect

Inspect only the parts of the repository relevant to the task.

Do not scan the entire repository unnecessarily for small localized changes.

### Step 3 - Plan

For non-trivial tasks, establish a short implementation plan.

Do not create extensive planning documents for trivial changes.

### Step 4 - Implement

Make the smallest coherent change that satisfies the requirement.

### Step 5 - Validate

Run relevant checks.

### Step 6 - Review

Review the diff for:

- accidental changes;
- duplicated code;
- invented content;
- responsive issues;
- accessibility issues;
- unnecessary complexity.

### Step 7 - Report

Summarize:

- what changed;
- files changed;
- validation performed;
- unresolved issues or decisions.

---

## 43. Context Efficiency

Do not inspect unrelated parts of the repository without reason.

For localized tasks:

- read `AGENTS.md`;
- read only relevant project documentation;
- inspect relevant files;
- implement the task.

Do not repeatedly analyze the entire codebase for every small change.

This repository is intentionally organized to provide persistent context through documentation.

---

## 44. Agent Behavior

Do not interpret autonomy as permission to expand scope.

Be proactive in solving implementation details that are clearly within the task.

Be conservative about:

- product decisions;
- business information;
- architecture changes;
- new dependencies;
- content;
- branding.

When a decision has business implications and is not documented, do not invent it.

---

## 45. Definition of Done

A development task is complete when:

- requested functionality is implemented;
- scope has been respected;
- relevant documentation has been followed;
- no known obvious regression has been introduced;
- responsive behavior has been considered;
- accessibility has been considered;
- relevant validation passes;
- no business information has been invented;
- the final report accurately describes what was done.

Successful compilation alone is not sufficient for UI work.

---

## 46. Final Reporting

After completing an implementation task, report concisely:

### Changed

What was implemented.

### Files

Relevant files modified.

### Validation

Commands/tests actually executed and their result.

### Pending

Only genuine unresolved items.

Do not produce long explanations of routine implementation details unless requested.

---

## 47. Core Principle

When choosing between:

- clever and simple;
- generic and specific;
- decorative and functional;
- speculative and necessary;

prefer:

**simple, specific, functional and necessary.**

The goal is not to demonstrate technical complexity.

The goal is to build a fast, accessible, maintainable and professional website for Aprende Centro Multidisciplinar.
