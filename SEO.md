# Digital Foresight Agency, SEO Reference

Durable SEO source of truth across phases. Keyword hypotheses below should be validated against real search volume and difficulty before Phase 2 finalizes service pages. No em dashes in any meta copy.

---

## 1. Keyword Map

| Page | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| Homepage `/` | web design agency | website design company, SEO agency USA, digital agency for small business | Commercial / brand |
| `/services/web-design/` | website design services | custom web design, conversion-focused web design, small business website design | Commercial |
| `/services/wordpress/` | WordPress development agency | custom WordPress development, WordPress website design, WooCommerce development | Commercial |
| `/services/shopify/` | Shopify development agency | Shopify store design, ecommerce web design, Shopify SEO | Commercial |
| `/services/wix/` | Wix website development | custom Wix design, Wix SEO, Wix Velo developer | Commercial |
| `/services/seo/` | SEO agency | SEO company for small business, local SEO services, technical SEO | Commercial |
| `/services/graphic-design/` | branding agency | logo design services, brand identity design, graphic design agency | Commercial |
| `/services/website-redesign/` | website redesign services | website redesign company, CRO agency, conversion rate optimization | Commercial |
| `/about/` | web design and SEO agency (brand) | Digital Foresight Agency, about our agency, our process | Brand / trust |
| `/work/` | web design portfolio | case studies, SEO case studies, ecommerce case studies | Consideration |
| `/blog/` | web design and SEO blog | SEO tips, website conversion tips, small business marketing | Informational |
| `/contact/` | free website audit | web design quote, hire a web design agency, free SEO audit | Transactional |
| City pages (Phase 3) | web design [city] | SEO [city], website design [city], [city] web design agency | Local commercial |

---

## 2. Meta Templates

- **Title**: 50 to 60 characters, unique per page, primary service plus "Digital Foresight Agency."
  - Homepage: `Web Design, Apps & SEO Agency | Digital Foresight Agency`.
  - Service page: `[Service] Services | Digital Foresight Agency`.
- **Meta description**: 150 to 160 characters, action-oriented, includes primary keyword and a CTA, no em dash.
  - Homepage: "We build custom websites, web and mobile apps, and online stores that rank on Google and convert visitors into customers. Get a free website audit."
- **Canonical**: absolute URL to the production page, e.g. `https://www.digitalforesightagency.com/`.
- **Open Graph + Twitter**: title, description, `og:image` = `/public/images/og-image.jpg` (1200x630), `og:type=website`, `twitter:card=summary_large_image`.

---

## 3. Header Tag Hierarchy

- Exactly one `<h1>` per page. On the homepage it is the hero value proposition, not the company name alone.
- Each major section opens with an `<h2>`. Card titles and differentiator titles are `<h3>`. Sub-labels inside cards are `<h4>` where needed.
- No skipped levels. Footer uses a visually hidden `<h2>` plus per-column `<h3>`.

---

## 4. Structured Data Plan

**Phase 1 (homepage):**
- `Organization`: name, url, logo, description. Omit `sameAs` until real social URLs exist (do not fabricate).
- `ProfessionalService`: agency entity with `hasOfferCatalog` referencing the 7 services and `areaServed` = Worldwide.
- `WebSite`: name and url (SearchAction added if/when on-site search exists).
- `FAQPage`: question/answer pairs matching the visible FAQ text exactly.

**Phase 2+:**
- `Service` on each service page.
- `BreadcrumbList` once inner pages exist.
- `Review` and `AggregateRating` once real testimonials are supplied (not on placeholders).
- `Article` on blog posts.

---

## 5. Internal Linking Strategy

- Homepage links to all 7 service pages (descriptive anchors, not "click here"), plus `/work/`, `/about/`, `/blog/`, `/contact/`.
- Every service page links to 2 to 3 related services and back to `/contact/`.
- `/work/` case studies link to the relevant service page.
- Blog posts link to the most relevant service and to `/contact/`.
- Anchor text uses the target's primary keyword where natural (e.g. "Shopify development", not "here").

---

## 6. Image Alt Text and Filename Conventions

- Filenames: descriptive, hyphenated, keyword-relevant. Example `seo-case-study-growth-chart.jpg`, never `image1.png`.
- Alt text: describe the content and, where natural, the keyword context. Example "SEO keyword ranking tracker showing 18 keywords on page one."
- Decorative background glows and gradients: `alt=""` and `aria-hidden="true"`.
- Every meaningful image has explicit `width`/`height` and `loading="lazy"` below the fold. The LCP hero element is never lazy-loaded.

---

## 7. Sitemap and robots.txt Plan

- Phase 1: `sitemap.xml` lists the homepage only. `robots.txt` allows all and points to the sitemap.
- Phase 2: add `/about/`, all 7 `/services/[slug]/`, `/work/` and case studies, `/blog/` and posts, `/contact/`.
- Phase 3: add `/privacy-policy/`, `/terms/`, and any city landing pages.
- Keep `lastmod` current on changed pages. Submit the sitemap in Google Search Console once the domain is live.

---

## 8. Core Web Vitals Targets (live checklist)

- **LCP** under 2.5s. Hero heading/card is the likely LCP element, do not lazy-load it, preload critical font weights.
- **CLS** under 0.1. Explicit dimensions on all images, `font-display: swap` with a matched fallback stack.
- **INP** under 200ms. Keep JS small and dependency-free, throttle the sticky-header scroll handler, avoid layout thrashing.
- Total homepage weight under 1.5MB fully loaded.
- Serve images as WebP, compressed, sized to their largest rendered dimension.
- Minify CSS and JS for production, keep readable source. Defer all non-critical JS.

---

## 9. Blog Content Calendar Skeleton (Phase 3, themes only)

Tied to the keyword map in section 1. Each theme supports a service cluster.

1. "How much does a website cost in [year]" (supports web-design, pricing).
2. "WordPress vs Shopify vs Wix, which platform is right for your business" (supports wordpress, shopify, wix).
3. "Local SEO checklist for small businesses" (supports seo, future local pages).
4. "Signs your website needs a redesign" (supports website-redesign).
5. "What is Core Web Vitals and why it affects your Google ranking" (supports web-design, seo).
6. "How long does SEO take to work" (supports seo).
7. "Ecommerce conversion rate optimization tactics that actually work" (supports shopify).
8. "Branding basics, what a small business needs before launch" (supports graphic-design).
