# Masaar & Co. — Design System & Bilingual Guidelines

> **This is the single source of truth for all development on the Masaar & Co. website.**
> Read this file before making any code change. Consult it after every change.

---

## 1. Unified Design Tokens

All colors, typography, spacing, motion, and layout values are centralized in:

| File | Purpose |
|------|---------|
| [`styles/tokens.css`](./styles/tokens.css) | CSS custom properties (colors, borders, motion, layout) |
| [`app/globals.css`](./app/globals.css) | Tailwind theme extensions, typography classes, base resets |
| [`lib/i18n/dictionaries/en.ts`](./lib/i18n/dictionaries/en.ts) | English content dictionary |
| [`lib/i18n/dictionaries/ar.ts`](./lib/i18n/dictionaries/ar.ts) | Arabic content dictionary |
| [`lib/i18n/types.ts`](./lib/i18n/types.ts) | TypeScript interfaces for the translation dictionaries |
| [`lib/i18n/LanguageContext.tsx`](./lib/i18n/LanguageContext.tsx) | Language context, toggle, `useTranslation()` hook |

### Core Token Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#092948` | Brand navy — headings, buttons, borders |
| `--secondary` | `#316A7E` | Teal — accents, italic highlights, hover states |
| `--accent` | `#619AAA` | Muted steel — labels, secondary accents |
| `--natural` | `#F9F1E7` | Warm cream — section backgrounds, light surfaces |
| `--surface` | `#FFFFFF` | White — page backgrounds |
| `--error` | `#B3261E` | Form validation errors |
| `--success` | `#1E6B4F` | Positive confirmation states |
| `--ease-pathway` | `cubic-bezier(0.22, 1, 0.36, 1)` | All motion curves |
| `--duration-feedback` | `200ms` | Hover / micro-interactions |
| `--duration-reveal` | `500ms` | Scroll reveal animations |
| `--duration-hero` | `900ms` | Hero entrance animations |

**Rule:** Never introduce raw hex codes or hard-coded numbers that are not in the token set. Always reference tokens.

---

## 2. Language System — Architecture

The site is **fully bilingual (English <-> Arabic)**. Both languages share one codebase, one component tree, and one design system.

### How it works

```
LanguageProvider (app/layout.tsx)
  └── useTranslation() → { t, isArabic, language, dir, toggleLanguage }
        ├── t.home.hero.headlineLine1  → renders in active language
        ├── isArabic                  → guards typography/direction differences
        └── dir                       → "ltr" | "rtl" applied to <html>
```

The anti-FOUC script in `app/layout.tsx` reads `localStorage('masaar_locale')` and applies `dir` + `class="rtl"` synchronously before the first render.

### Language switching rules

- **Never duplicate a component** to create an Arabic version. Use `useTranslation()` within the shared component.
- **Never hardcode English or Arabic strings** in JSX. Every user-visible string must come from the `t.*` dictionary.
- The only exception is BiDi isolation: email/phone numbers must carry `dir="ltr"` or `<bdi>` to prevent cursor scrambling.

---

## 3. RTL — Rules and Tools

### Always use CSS Logical Properties

| Physical (direction-specific) | Logical (direction-aware) |
|-------------------------------|---------------------------|
| `pl-`, `pr-`, `ml-`, `mr-` | `ps-`, `pe-`, `ms-`, `me-` |
| `border-l`, `border-r` | `border-s`, `border-e` |
| `text-left`, `text-right` | `text-start`, `text-end` |
| `inset-left-0` | `inset-inline-start-0` |

### RTL-only Tailwind Prefix

Use `rtl:` variants **only** when a physical value is unavoidable (e.g. absolute positioning, transform-origin, icon flipping):

```tsx
// Correct: icon mirror for RTL
<ArrowRight className="rtl:-scale-x-100" />

// Correct: drawer side in mobile menu
className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0"
```

### Arabic Typography Rules

1. **No CSS `italic`** on Arabic text — it distorts Arabic calligraphy. Replace italic highlights with color and weight:

   ```tsx
   <span className={isArabic
     ? "text-[#316A7E] font-medium inline-block"
     : "italic font-normal font-serif text-[#316A7E]"
   }>
     {italicWord}
   </span>
   ```

2. **Line-height for Arabic headings** — `.font-h1`, `.font-h2` in `globals.css` override `letter-spacing: 0` and `line-height: 1.28` when `html[dir="rtl"]` is active.

3. **Font stacks** — set at the `html` level:
   - LTR: `Outfit` (sans) + `Newsreader` (serif)
   - RTL: `IBM Plex Sans Arabic` (sans) + `Amiri` (editorial serif)
   - Do not override font families at the component level.

4. **Arabic `.font-caps-label`** — `text-transform: uppercase` and high letter-spacing are disabled for Arabic (see `globals.css`).

---

## 4. Component Architecture — Rules

### Shared Components

All components in `components/` are language-agnostic. They receive text as props from the parent, which sources from `useTranslation()`.

```tsx
// Correct: parent injects translations, component is reusable
export default function ServicesPreview() {
  const { t, isArabic } = useTranslation();
  return <ServiceRow name={t.servicesPage.servicesList[0].name} />;
}

// Wrong: hardcoded string in component
export default function SomeCard() {
  return <h3>Our Services</h3>; // breaks Arabic
}
```

### Component Rules

| Rule | Rationale |
|------|-----------|
| Use `text-start` / `text-end` not `text-left` / `text-right` | Respects RTL text alignment automatically |
| `space-x-reverse` when using `space-x-*` on a flex row | Reverses flex gap direction in RTL |
| `divide-x-reverse` on divided flex rows | Correct separator direction in RTL |
| `ms-*` / `me-*` instead of `ml-*` / `mr-*` | Logical margin respects writing direction |
| Stat numbers: always `dir="ltr"` | Numerals read LTR universally |
| Phone/email values: always `dir="ltr"` or `<bdi>` | Prevents BiDi scrambling of special characters |

### `isArabic` Guard — When to Use

**Use for:**
- Switching italic to color accent highlight
- Flipping icon orientation that cannot use `rtl:-scale-x-100`
- A CSS value that has no logical property equivalent
- Rare custom Arabic phrasing embedded in JSX (prefer `t.*`)

**Do not use for:**
- Choosing which string to display — use `t.*` dictionary
- Applying padding / margin — use logical properties
- Hiding/showing UI that should appear in both languages

---

## 5. Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | `< 640px` | Single column, compressed spacing |
| Tablet sm | `640px+` | Expanded spacing, 2-col grids begin |
| Tablet md | `768px+` | Header layout shifts, hero image appears |
| Desktop lg | `1024px+` | Full navigation, 12-col grid active |
| Wide xl | `1280px+` | Max content width: `1440px` |

Responsive changes must apply equally to both languages. Use Tailwind responsive prefixes on shared class names — do not branch by language for spacing or layout.

---

## 6. Section Spacing System

All page sections use this consistent spacing scale:

| Breakpoint | Vertical Padding |
|-----------|-----------------|
| Mobile | `py-10` |
| Tablet sm | `py-16` |
| Desktop md | `py-32` |

The container uses:
```
max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16
```

Never introduce custom spacing that breaks this rhythm without updating all sections to match.

---

## 7. Typography Scale

| Class | Font | Usage |
|-------|------|-------|
| `.font-display-hero` | Serif, clamp 3rem→9rem | Hero headline |
| `.font-h1` | Serif, clamp 1.875rem→4.5rem | Page headings |
| `.font-h2` | Serif, clamp 2rem→3.5rem | Section headings |
| `.font-caps-label` | Sans, 0.75rem, tracking-[0.2em] | Section labels, pill badges |
| `.font-nav-btn` | Sans, 0.9375rem | Navigation, CTA buttons |
| Body (`text-base`) | Sans, 1rem | Body copy |
| Caption / small | `text-xs` / `text-[0.6875rem]` | Metadata, small labels |

In Arabic (`html[dir="rtl"]`): `.font-h1` and `.font-h2` apply `letter-spacing: 0` and `line-height: 1.28` automatically.

---

## 8. Color Usage Guidelines

| Context | Color |
|---------|-------|
| Page background (light) | `#FFFFFF` (surface) |
| Section background (warm) | `#F9F1E7` (natural) |
| Section background (dark) | `#092948` (primary) |
| Primary headings (light bg) | `#092948` |
| Primary headings (dark bg) | `#F9F1E7` |
| Italic / accent word highlight | `#316A7E` (secondary) |
| Labels / secondary accents | `#619AAA` (accent) |
| Body text on light bg | `#000000` or `#092948` at 75–85% opacity |
| Body text on dark bg | `#F9F1E7` at 75–85% opacity |

---

## 9. Motion and Animation

All motion uses `--ease-pathway: cubic-bezier(0.22, 1, 0.36, 1)`.

- Hover micro-interactions: `duration-200`
- Scroll reveal: `duration-500` via `Reveal` wrapper
- Hero entrance: `duration-900` (hero line, leader scene)
- `prefers-reduced-motion` zeroes all durations (in `globals.css`)

Do not use directional transforms (`translateX`, `skewX`) without mirroring them for RTL.

---

## 10. Translation and Content Rules

### Dictionary Structure

Both dictionaries must stay structurally identical:

```
lib/i18n/dictionaries/en.ts → export const enDictionary
lib/i18n/dictionaries/ar.ts → export const arDictionary
```

The `TranslationDictionary` interface in `lib/i18n/types.ts` is the contract. Any new content addition must:
1. Add the key to `types.ts`
2. Add the English string to `en.ts`
3. Add the Arabic string to `ar.ts`
4. Use the key via `t.*` in the component

### Arabic Writing Quality

Arabic content must be written in formal Saudi corporate Arabic (al-fusha al-mu'assasiyya):
- No colloquial dialect
- No literal word-for-word translations from English
- Use culturally appropriate corporate phrasing
- No machine-translation paste without native review

---

## 11. Mandatory Development Workflow

### Before making any change:
1. Read this file (`DESIGN_GUIDELINES.md`).
2. Inspect the existing component and its shared usage in both languages.
3. Confirm which token, logical property, or dictionary key is the right abstraction.

### While implementing:
4. Use tokens, not raw values.
5. Use logical CSS properties (`ps-`, `ms-`, `border-s`, `text-start`).
6. Source all user-visible text from `t.*` — never hardcode strings.
7. Use `isArabic` only for unavoidable rendering differences (italic to color).

### After implementing:
8. Visually verify the page in **English (LTR)** at mobile (390px), tablet (768px), and desktop (1280px).
9. Toggle to **Arabic (RTL)** and verify at the same three widths.
10. Run `npm run lint` — must exit 0.
11. Run `npm run build` — must exit 0 with no TypeScript errors.

---

## 12. File Ownership Map

| Area | Files |
|------|-------|
| Design tokens | `styles/tokens.css`, `app/globals.css` |
| Font loading | `app/layout.tsx` |
| Language system | `lib/i18n/` |
| UI primitives | `components/ui/` |
| Page layout | `components/layout/` |
| Home sections | `components/home/` |
| Work gallery | `components/work/` |
| Contact form | `components/contact/`, `components/ui/ContactForm.tsx` |
| Pages | `app/*/page.tsx` |
| API | `app/api/contact/route.ts` |
| Validation | `lib/validation.ts` |
| Company data | `content/company.ts`, `content/services.ts` |

---

## 13. Prohibited Patterns

```tsx
// Hardcoded text in JSX
<p>Contact our team</p>

// Physical margin/padding
<div className="pl-4 mr-2 text-left border-r">

// Italic on Arabic text
<em className={isArabic ? "italic" : ""}>كلمة</em>

// Duplicate component for Arabic
// components/ui/CardEN.tsx + components/ui/CardAR.tsx

// Skipping lint/build verification after changes
```

---

*Last updated: October 2026. Update this file when the design system or project requirements genuinely change.*
