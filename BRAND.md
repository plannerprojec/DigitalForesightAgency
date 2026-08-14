# Digital Foresight Agency, Brand Reference

This is the durable source of truth for the brand system. Every future page, image, and line of copy should conform to this document so the site stays consistent across Claude Code sessions and phases. No em dashes anywhere in generated copy (see Voice and Tone).

---

## 1. Brand Story and Positioning

Digital Foresight Agency is a results-driven web design, app development, and SEO agency. We build websites and apps that rank on Google, convert visitors into customers, and drive measurable revenue, not just products that look good in a portfolio. Our work spans custom web design and development, web and mobile app development, WordPress, Shopify, Wix, technical and content SEO, graphic design and branding, and website redesign with conversion rate optimization.

We are built around three promises: SEO is engineered in from day one rather than bolted on later, reporting is transparent with clear monthly dashboards instead of black-box metrics, and delivery is fast, most projects launch in 7 to 14 days. We work with businesses anywhere that want a site working as hard as they do.

The tone is confident and specific. We lead with numbers and outcomes, we avoid filler adjectives, and we describe what we do for clients rather than explaining what a website is in the abstract.

---

## 2. Color Tokens

All colors trace back to this list plus pure white (`#ffffff`) and the footer near-black (`#080808`). Do not invent new colors.

| Token | Hex | Name | Usage |
|---|---|---|---|
| `--accent` | `#E8431A` | Brand orange-red | Primary CTAs, links, active states, section-tag eyebrow, key numbers |
| `--accent-light` | `#fff1ed` | Accent tint | Hero badge background, soft icon backgrounds |
| `--accent2` | `#F5A623` | Amber | Secondary accent, star ratings, dot accents, metric suffixes |
| `--accent3` | `#00B87A` | Teal-green | Secondary accent, positive/growth indicators, dot accents |
| `--black` | `#0c0c0c` | Near-black | Dark sections, dark cards, dark buttons |
| `--ink` | `#141414` | Body ink | Body and heading text on white |
| `--gray-bg` | `#f7f7f5` | Light section bg | Alternating light section backgrounds, cards |
| `--gray-border` | `#e5e5e1` | Hairline border | Card borders, dividers |
| `--muted` | `#6a6a6a` | Muted text | Secondary paragraph text, labels |
| (raw) | `#ffffff` | White | Page background, card hover background, text on dark |
| (raw) | `#080808` | Footer black | Footer background only |

Accent usage rule: `--accent` is the single primary action color. `--accent2` (amber) and `--accent3` (teal) are supporting accents used for variety in dots, ratings, and data viz, never as a primary button color. On dark sections, text is white at reduced opacity (0.75 body, 0.45 muted, 0.35 labels).

---

## 3. Typography

Two families, kept exactly as the original build.

- **Plus Jakarta Sans**, display and UI. Weights 500 to 800. Used for all headings, buttons, labels, nav, eyebrows, numbers.
- **DM Sans**, body. Weights 300 to 600. Used for paragraph and descriptive copy.

Font stacks:
```
--font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body:    'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

Heading scale (clamp values carried over from source):
- Hero `<h1>`: `clamp(2.6rem, 4.5vw, 3.9rem)`, line-height `1.08`, letter-spacing `-1.8px`.
- Section `<h2>` (`.section-title`): `clamp(1.9rem, 3vw, 2.65rem)`, letter-spacing `-1px`, weight 800.
- Card `<h3>`: `~1.04rem`, weight 700.
- Body: `0.95rem` base, hero lead `1.04rem`, line-height `1.7` to `1.78`.
- Never below 14px for body copy on mobile. `font-display: swap` is set to avoid reflow.

---

## 4. Logo Usage

- Use `public/logo.png` as-is. Do not redraw, recolor, stretch, or regenerate it. It is a faceted geometric mark (blue square, gold/amber shape, teal shape, pink/magenta "F") beside the black wordmark reading "FORESIGHT."
- Header render height: 38px. Footer render height: 34px.
- On dark backgrounds (footer, dark cards) apply `filter: brightness(0) invert(1); opacity: 0.9;` to render it white.
- Clear space: keep at least the height of the mark clear on all sides.
- Minimum size: do not render below 24px tall.
- Do not place the logo on a busy background without sufficient contrast. Do not add drop shadows or outlines to the logo.
- Favicon set is cropped from the geometric mark only (no wordmark) at 512, 192, 32, 16px, pixel-identical to the real logo mark.

---

## 5. Component Library

Reuse these real CSS class names so future pages stay consistent. Full definitions live in `css/style.css`.

- `.btn-primary`, pill, accent background, white text, orange glow shadow `0 4px 22px rgba(232,67,26,0.32)`, lifts 2px on hover.
- `.btn-dark`, pill, near-black background, white text, turns accent orange on hover.
- `.btn-outline`, pill, transparent with white border, dark sections only.
- `.section-tag`, uppercase accent eyebrow with a short horizontal accent bar before it.
- `.section-title`, bold `<h2>`, clamp sizing, `-1px` letter-spacing.
- `.section-desc`, muted paragraph, `0.95rem`.
- `.svc-card`, light gray card that rounds to white with a lift and shadow `0 24px 60px rgba(0,0,0,0.09)` on hover.
- `.reveal` / `.reveal.in`, fade-up on scroll with stagger classes `.d1` to `.d4`.
- `.nav-link`, underline-grow hover effect.
- Radii: 18px to 32px on cards and containers, full pill `9999px` on buttons and badges.
- Section padding: `110px` vertical desktop (about `64px` mobile), `6%` horizontal at every breakpoint.
- Shadows are soft and colored, reuse the exact values above rather than inventing new ones.

---

## 6. Voice and Tone

- Direct, confident, specific, numbers-driven. Lead with outcomes (rank, convert, revenue, leads).
- **Never use an em dash (the long dash) anywhere**, in copy, headings, meta descriptions, alt text, or content comments. Use a period, comma, colon, or the word "and" instead. Audit every string before shipping.
- No filler adjectives standing in for evidence ("passionate," "cutting-edge," "innovative" with nothing behind them). Every claim should be concrete.
- No generic filler, no Lorem Ipsum, no templated boilerplate, no keyword-stuffed copy written for search engines instead of humans.
- Consistent point of view. Use first person plural ("we build websites") throughout. Do not mix in third person ("Digital Foresight Agency builds websites") inside the same block of body copy. The company name is fine in headings, meta, and structured data.
- Describe what we do for clients, not what a website is in the abstract.
- Stick to what the agency is known for (WordPress, Shopify, Wix, WooCommerce, web design, SEO, branding, redesign). Do not pad with unrelated tech.
- No prohibited-industry references anywhere (adult, gambling, crypto/NFT trading, pharma/controlled substances, weapons). No fabricated certifications or trust badges.

These rules keep all future copy safe for the Hostinger Agency Directory by default.

---

## 7. Image Style Guide

Shared style prefix for every generated image (use verbatim as the prompt prefix):

> Flat, modern vector-style illustration. Clean geometric shapes with soft rounded edges, echoing the Digital Foresight Agency logo's faceted geometric mark (a small blue square, a gold/amber angled shape, a teal shape, and overlapping pink/magenta accents forming an "F"). Color palette strictly limited to: orange-red #E8431A, amber #F5A623, teal-green #00B87A, near-black #0c0c0c, off-white #f7f7f5, and pure white. Generous negative space, no photorealism, no visible text or letters inside the image, no watermarks, no borders. Subtle soft shadows or glows only where noted. Style should feel premium, technical, and confident, appropriate for a B2B web design and SEO agency, not playful or cartoonish.

Ready-to-run prompts (append to the prefix). Use these the moment the openai-images MCP is connected. Phase 1 ships with brand-matched inline SVG in these spots; swap to raster when generated.

1. **`og-image.jpg` (1200x630)**: "wide-format hero composition featuring abstract geometric shapes suggesting growth and connectivity, layout should leave clear negative space on the left third for the logo and headline to be overlaid separately."
2. **Featured Work card 1, SEO (`seo-case-study-growth-chart.jpg`, 4:3)**: "abstract representation of an SEO growth chart trending upward, generic and non-branded, must not resemble any real company's actual product or logo."
3. **Featured Work card 2, Shopify (`ecommerce-store-conversion.jpg`, 4:3)**: "abstract representation of an e-commerce storefront and checkout flow, generic and non-branded."
4. **Featured Work card 3, Redesign (`website-redesign-transformation.jpg`, 4:3)**: "abstract representation of a website redesign transformation, before and after geometric forms, generic and non-branded."
5. **Hero background texture (optional, transparent)**: "extremely subtle abstract geometric pattern at low opacity, intended as a background texture behind dark UI cards, must not distract from foreground text."

Do NOT generate: team headshots, client photos, real client logos, or certification/trust badges the agency does not hold. Favicon art is cropped from the real logo, not generated.

File handling: save to `public/images/` with descriptive hyphenated names. Export WebP with a JPEG fallback where possible. Every image gets explicit `width`/`height` in HTML, and `loading="lazy"` below the fold.
