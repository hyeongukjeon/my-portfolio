# DESIGN.md — Hyeonguk Jeon Portfolio

> **Read this before writing or editing any UI.** This file is the single source
> of truth for the site's look. Do not introduce generic Tailwind defaults
> (arbitrary greys like `text-gray-500`, random `#817a70` hex values, default
> shadows, rounded corners, gradients). Every visual decision must trace back to
> a token or rule below. When in doubt: less, flatter, tighter, more aligned.

## Direction: International Typographic Style (Swiss)

An architecture & urban-design portfolio. The work is the content; the interface
is a **quiet grid** that gets out of the way. Reference lineage: Müller-Brockmann,
Akkurat/Helvetica specimen sheets, Herzog & de Meuron / Lars Müller publications.

**Feel:** objective, rigorous, confident, silent. NOT: playful, glossy, "SaaS",
gradient-y, animated-on-everything, developer-portfolio.

### Non-negotiables
- Grotesque type only. **No serif anywhere.**
- Black on white plus **exactly one** accent color, used sparingly.
- Flush-left, ragged-right text. No centered body copy.
- A visible, consistent grid. Alignment over decoration.
- No rounded corners (`rounded-none`), no drop shadows, no gradients.
- Motion is the exception, not the rule (see Motion).
- Generous negative space. When a section feels empty, it's probably right.

## Color tokens

Defined in `tailwind.config.js` under `theme.extend.colors`. Use the token names,
never raw hex in components.

| Token          | Value     | Use                                             |
| -------------- | --------- | ----------------------------------------------- |
| `paper`        | `#FFFFFF` | Page background                                  |
| `ink`          | `#0D0D0D` | Primary text, hairlines at full strength        |
| `ink-70`       | `#4A4A4A` | Secondary text (meta, captions, org lines)      |
| `ink-40`       | `#8A8A8A` | Tertiary / muted labels                         |
| `line`         | `#E4E4E4` | Rules, borders, dividers                        |
| `accent`       | `#E4002B` | ONE accent — active states, index numbers, tiny |
|                |           | marks only. Never fill large areas.             |

Rule of thumb: 90% ink-on-paper, 9% greys, ≤1% accent.

## Typography

**One family: Inter** (grotesque). Serifs are removed from the project.
Load stays in `src/index.css`. Optionally upgradeable to a wide grotesque for
display later — if so, swap only the `display` family, keep everything else Inter.

Swiss type = few sizes, strong size contrast, tight tracking on large sizes,
generous line-height on body.

| Role      | Class intent                              | Notes                          |
| --------- | ----------------------------------------- | ------------------------------ |
| Display   | ~clamp 40–88px, `font-medium`, `tracking-tight`, `leading-[0.95]` | Hero / page titles. Tight.     |
| H2        | ~24–32px, `font-medium`, `tracking-tight` | Section / project titles       |
| Label     | 11–12px, `font-medium`, `uppercase`, `tracking-[0.14em]` | Eyebrows, nav, meta headers    |
| Body      | 15–16px, `font-normal`, `leading-7`       | Paragraphs, flush-left         |
| Meta      | 13–14px, `font-normal`, `text-ink-70`     | Captions, org, dates           |

- Weights used: **400 (normal), 500 (medium)** only. Avoid `font-light` for large
  text — it reads thin/generic. Avoid bold except where a spec says so.
- Numerals for index/labels (`01`, `02`) are a signature element — keep them.

## Layout & grid

- Global max width: `max-w-[1600px]`, centered.
- Gutters: `px-6` mobile · `md:px-10` · `lg:px-16`.
- Baseline spacing unit is 4px (Tailwind default scale). Prefer 8/12/16/24/40/64.
- Prefer **asymmetric** layouts: a label column + a wide content column
  (e.g. `grid-cols-[160px_minmax(0,1fr)]`) rather than everything centered.
- Hairline rules (`border-line`) separate sections instead of cards/boxes.
- Images: `object-cover`, no radius, no shadow. A thin `border-line` is allowed.
  Architectural renders show in full color; supporting/index imagery may be
  grayscale to keep hierarchy — decide per section, be consistent within one.

## Motion (Framer Motion — restrained)

- One idea per section. Allowed: a single fade/rise on section enter
  (`opacity 0→1`, `y 12→0`, ~0.5s ease-out), subtle image scale on hover
  (`1 → 1.02`), nav/link color transitions.
- Durations 0.2–0.6s, `easeOut`. No spring bounce, no stagger storms,
  no parallax, no typewriter, no meteors/gradient-shift/3D.
- Respect `prefers-reduced-motion`.

## Components checklist (apply the rules above)

- **Header**: flush-left wordmark + right-aligned nav, hairline bottom border,
  no blur/glass beyond a plain `bg-paper`. Active route gets `accent` or underline.
- **Hero**: label → display headline → featured project → single outlined CTA.
- **Selected works / Projects**: numbered index grid, hairline dividers, meta
  under each. Hover = image scale 1.02 + arrow nudge. No card shadows.
- **CTA/buttons**: outlined (`border-ink`), square, `hover:bg-ink hover:text-paper`.
  No filled pill buttons, no rounded.

## Definition of done for any screen
1. No raw hex / no `gray-*` utilities — only tokens.
2. No serif, no `font-light` on large text.
3. Everything aligns to the grid; text is flush-left.
4. At most one motion idea; reduced-motion respected.
5. Accent appears ≤ once per viewport, small.
