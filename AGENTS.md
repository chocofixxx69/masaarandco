<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:masaar-design-rules -->

# Masaar & Co. — Mandatory Design Guidelines

**Before making any change to this repository, you MUST read [`DESIGN_GUIDELINES.md`](./DESIGN_GUIDELINES.md).**

This file is the single source of truth for all design and development decisions on this project. It governs:

- **Unified bilingual design system** — English (LTR) and Arabic (RTL) share one component tree, one token set, one codebase. Never duplicate components or maintain separate designs per language.
- **CSS logical properties** — Use `ps-`, `pe-`, `ms-`, `me-`, `border-s`, `border-e`, `text-start`, `text-end` instead of physical direction-specific equivalents.
- **Translation system** — All user-visible strings come from `t.*` via `useTranslation()`. Never hardcode English or Arabic text in JSX.
- **Arabic typography** — Never apply CSS `italic` to Arabic text. Replace with `text-[#316A7E] font-medium`. Font overrides are set at the `html` level in `globals.css` only.
- **RTL `rtl:` prefix** — Only for absolute positioning, transform-origin, and icon mirroring where no logical property equivalent exists.
- **Design tokens** — Never use raw hex values or hardcoded numbers that are not in `styles/tokens.css` or `app/globals.css`.
- **After every change** — Run `npm run lint` (must exit 0) and `npm run build` (must exit 0). Verify both English and Arabic at mobile (390px), tablet (768px), and desktop (1280px).

**Goal: One unified design system, two fully synchronized language experiences, zero visual inconsistencies.**

<!-- END:masaar-design-rules -->

