# Digital Foresight Agency, Static Site (Phase 1)

Hand-authored static site (HTML, one CSS file, vanilla JS, no build step) for Hostinger shared hosting. This is a rebuild of the original Next.js project, ported to plain files so it can be uploaded straight to `public_html`. See `DIGITAL-FORESIGHT-REBUILD-INSTRUCTIONS.md` in the parent folder for the full brief, and `BRAND.md` / `SEO.md` for the durable design and SEO references.

## What ships in Phase 1

- `index.html`, the full homepage (13 sections).
- `css/style.css`, the complete token system and component library. No framework.
- `js/nav.js`, `js/reveal.js`, `js/faq.js`, `js/tracker.js`, `js/form.js` (form is a Phase 2 stub). All loaded with `defer`.
- `partials/header.html` and `partials/footer.html`, copy-paste sources for Phase 2 pages (see "Adding pages" below).
- `public/logo.png` and a full favicon set in `public/images/` plus `favicon.ico`.
- `public/images/og-image.jpg` (1200x630) social share card.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, `.htaccess`.
- `BRAND.md`, `SEO.md`.

## Folder structure

```
site/
  index.html
  favicon.ico
  robots.txt
  sitemap.xml
  site.webmanifest
  .htaccess
  BRAND.md
  SEO.md
  README.md
  css/style.css
  js/{nav,reveal,faq,tracker,form}.js
  partials/{header,footer}.html
  public/
    logo.png
    fonts/            (empty; for optional self-hosted woff2 in a later pass)
    images/           (favicons + og-image)
```

## Local preview

No build step. Preview with any static server, for example:

```
# From the site/ folder
python -m http.server 8080
# then open http://localhost:8080
```

Opening `index.html` directly via `file://` mostly works, but the root-absolute paths (`/css/style.css`, `/public/logo.png`) and the `/services/...` links are written for a web root, so a local server is recommended.

## Deploying to Hostinger

Two supported paths (pick one).

### Option A, File Manager or FTP (simplest)
1. In hPanel, open File Manager (or connect over FTP/SFTP).
2. Upload the entire contents of `site/` into `public_html/` so that `index.html` sits at `public_html/index.html`.
3. Confirm `.htaccess` uploaded (it is a hidden file; enable "show hidden files" in File Manager).
4. Visit the domain over HTTPS.

### Option B, Git deploy
1. Put the contents of `site/` at the repository root and push to GitHub.
2. In hPanel, use Git to connect the repo and set the deploy path to `public_html`.
3. Deploy. Re-deploy on each push.

### Canonical domain
`.htaccess` forces HTTPS and the `www` host. If you prefer non-www, comment out the www block in `.htaccess` and update the canonical URLs in `index.html`, `sitemap.xml`, and the JSON-LD.

## Fonts

Phase 1 uses the Google Fonts CDN with `preconnect` and a `preload`. For a faster first paint you can self-host: drop the Plus Jakarta Sans and DM Sans `.woff2` files into `public/fonts/`, add `@font-face` rules at the top of `css/style.css`, and remove the Google `<link>` tags from `index.html`. See `SEO.md` section 8 (Core Web Vitals).

## Images

Brand illustrations are generated with the `openai-images` MCP and saved in `public/images/` as WebP (all following the BRAND.md section 7 style):
- `work-seo-growth.webp`, `work-shopify-store.webp`, `work-redesign-transformation.webp`, the three Featured Work card graphics.
- `hero-growth-emblem.webp`, the hero visual shown on mobile/tablet (blends on the off-white hero background).
- `cta-launch.webp`, the rocket illustration in the CTA panel (near-black background blends into the panel).

The social card `og-image.jpg` and the favicon set are real raster files. The SEO tracker widget in the Why section is still inline SVG/JS (an intentional live-data UI mock, not a static image). To regenerate or add illustrations, use the prompts in `BRAND.md` section 7 with the MCP, save to `public/images/`, and reference with explicit `width`/`height` plus `loading="lazy"` (except above-the-fold art).

## Adding pages (Phase 2)

This stack has no templating by design. To add a page (for example `/about/`):
1. Create `about/index.html`.
2. Paste `partials/header.html` right after `<body>` and `partials/footer.html` right before `</body>`.
3. Reuse the classes in `css/style.css`. Do not add a second CSS framework.
4. Give the page its own `<title>`, meta description, canonical, and OG tags.
5. Add the new URL to `sitemap.xml`.

If the header or footer changes later, update `partials/` and re-paste into every page. Do not introduce a static site generator just to avoid the copy-paste; at this scale plain files are the correct trade-off.

## Phase 1 to Phase 2 handoff

Every placeholder is wrapped in an HTML comment of the form `<!-- TODO Phase 2: ... -->`. See `TODO-PHASE-2.md` for the complete extracted list.
