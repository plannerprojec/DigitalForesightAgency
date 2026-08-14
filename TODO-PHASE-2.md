# Phase 1 to Phase 2 TODO List (Placeholder Audit)

Every item below is flagged in the code with an HTML comment `<!-- TODO Phase 2: ... -->` immediately before the element it applies to. This is the complete list to resolve before the site is Hostinger Agency Directory ready.

## Content to supply (from the project owner)

1. **Testimonials, replace all 3 placeholders** with real client reviews (with permission). Names, quotes, roles, AND the portrait photos are placeholders.
   - Marcus Johnson / Vertex Tech Solutions (photo `public/images/review-1.webp`)
   - Lauren Walsh / Ardor Home Co. (photo `public/images/review-2.webp`)
   - Ryan Carter / Summit Financial (photo `public/images/review-3.webp`)
   - The three `review-*.webp` portraits are AI-generated placeholder faces, not real clients. Replace with real client photos (with permission) before Directory submission, they are a misleading-content risk otherwise (instructions sections 7c and 11).
   - When real reviews exist, add `Review` / `AggregateRating` JSON-LD (see SEO.md section 4).

2. **Featured Work, replace all 3 placeholder case studies** with real projects (name, verified result stat, and a working `/work/[slug]/` case study URL).
   - SEO card, Shopify card, Redesign card (each flagged with a TODO comment).
   - The card artwork (`work-*.webp`) is real generated illustration and can stay; only the project name, result stat, and link are placeholders.
   - Build the `/work/` index and individual case study pages.

3. **Social URLs, replace the 4 `#` placeholders** with real profile links.
   - Header/CTA footer in `index.html` and `partials/footer.html` (LinkedIn, X, Facebook, Instagram).
   - Once live, add them to the `Organization` JSON-LD `sameAs` array in `index.html`.

4. **Google rating claims, verify before publishing.**
   - Hero "5.0 star Average Google Rating" and Why section "4.9 star Average Google Review Score".
   - Confirm the real aggregate rating, or soften/remove the claim. Unsubstantiated stats are a Hostinger Directory rejection risk (see instructions section 11).

5. **Pricing section is hidden for now.**
   - Full markup preserved in `partials/pricing-section.html`. To restore: paste it back into `index.html` before the Testimonials section and re-add the Pricing nav links in the header and mobile menu (both currently marked `<!-- Pricing hidden for now -->`).

Note: the fake "client logo wall" and the service ticker were removed in the redesign and replaced by the premium Technologies section, so the earlier fake-client-logo risk no longer applies.

## Pages to build in Phase 2 (currently linked but not yet created)

- `/about/` (and `/about/#process`)
- `/services/web-design/`, `/services/wordpress/`, `/services/shopify/`, `/services/wix/`, `/services/seo/`, `/services/graphic-design/`, `/services/website-redesign/`
- `/services/ai-chatbots/`, `/services/ai-automation/` (new AI services, add content in `data/services` when building)
- `/services/` (services index)
- `/work/` (and individual case studies)
- `/blog/`
- `/contact/` (with a working form wired to Formspree / Web3Forms / Hostinger native handling; build out `js/form.js`)
- `/privacy-policy/`, `/terms/` (Phase 3)

## Infrastructure before Directory submission

- Ensure `hello@digitalforesightagency.com` is a real, working inbox on the agency domain (required for Partner Program approval, instructions section 11).
- Set the production canonical domain (www vs non-www) consistently across `index.html`, `sitemap.xml`, JSON-LD, and `.htaccess`.
- Expand `sitemap.xml` as pages go live.
- Optionally self-host fonts and generate raster art via the openai-images MCP.

---

## Phase 2 build status (updated)

Built in this pass:
- Homepage restructured to a one-page site with **category** service cards (Website, Mobile App, Custom Web & App, CMS & eCommerce, SEO, GEO & AEO, Website Redesign, AI Chatbots & Automation, Graphic Design & Branding).
- **Learn more opens a popup** (accessible modal) with per-service detail, no separate service pages.
- **Get a Quote form** in the Contact section, posts to FormSubmit and emails hello@digitalforesightagency.com, with client-side validation (`js/form.js`) and a honeypot.
- New pages: `/about/`, `/work/` (case studies), `/privacy-policy/`, `/terms/`, and `/thank-you.html` (form redirect).
- Nav/footer repointed to the one-page anchors (`/#services`, `/#contact`) and the new pages. Blog and per-service pages removed.
- Sitemap expanded.

Still to do before launch:
1. **Activate the form:** the FIRST submission triggers a one-time FormSubmit activation email to hello@digitalforesightagency.com. Click the link in it once. To hide the email in the page source, switch the form `action` to a FormSubmit alias/hash or a Web3Forms access key.
2. **Real case studies:** replace the 6 placeholders on `/work/` and the 3 on the homepage Featured Work section (project names, verified stats, links). Artwork is real and can stay.
3. **Real team:** replace the 3 placeholder team cards on `/about/` with real names, roles, bios, and photos.
4. **Real testimonials + photos, real social URLs, verify the 5.0/4.9 rating claims** (carried over from Phase 1 list above).
5. **Legal pages** (`/privacy-policy/`, `/terms/`) are sensible starting templates, have them reviewed/tailored before launch.
6. Pricing is hidden; markup preserved in `partials/pricing-section.html` if you want it back.

### Update: real details added
- Founder **M. Bilal** (8 years experience) is now on `/about/` with a LinkedIn link. Only the photo is still a placeholder (initials avatar) — swap in a real headshot when ready.
- Phone **+92 343 0639199** added to the contact section and footer, with a **floating WhatsApp button** (wa.me/923430639199) on every page.
- Address **Blue Area, Islamabad** added to the contact section, footer, and schema.
- LinkedIn (https://www.linkedin.com/in/bilal-ateeq-x/) is live in the footer and Organization schema `sameAs` / `founder`.
- New **Refund & Cancellation Policy** page at `/refund-policy/` (review the terms before launch).
- The X, Facebook, and Instagram footer icons are still `#` placeholders — add or remove them.
