# Specification: Social Promotion Technical Readiness & Confidentiality Governance

## 1. Scope & Purpose

This specification defines the **technical platform standards** and **repository confidentiality boundaries** for sharing portfolio routes across external social channels. It intentionally contains **zero operational marketing plans, zero campaign calendars, zero target group lists, and zero plaintext contact credentials**.

---

## 2. Non-Disclosure & Git Isolation Requirements (EARS)

1. **Zero-Commit Promotional Artifacts:**
   - WHILE operating in this repository, THE developer or AI agent SHALL NOT stage, commit, or push social media promotion plans, editorial schedules, outreach scripts, marketing spreadsheets, or promotional banners containing plaintext contact information.
2. **Local Workspace Boundary:**
   - WHEN generating private promotional materials (such as local spreadsheets, draft social copy, or contact-bearing visual graphics), THE agent SHALL store them strictly inside gitignored paths (`docs/marketing/`) or external local artifact directories outside Git tracking.
3. **Zero-Secret Spec Discipline:**
   - THE repository specifications under `specs/` SHALL document only technical architecture, metadata compliance, and privacy boundaries - never private promotion strategies, target communities, or raw personal contact details.
4. **Contact Obfuscation Boundary:**
   - All public web routes and committed source code SHALL continue to enforce Base64 runtime contact obfuscation in `src/lib/contacts.ts` in alignment with `SECURITY.md`.

---

## 3. Technical Social Sharing Standards (Public Platform)

To ensure clean previews and reliable attribution whenever public portfolio pages or engineering articles are shared externally:

1. **Open Graph & Twitter Card Hygiene (`app/[locale]/layout.tsx` & `index.html`):**
   - Maintain `1200x630` Open Graph preview assets with safe-zone padding and versioned cache-busting query strings (`?v=N`) so external crawlers refresh updated previews cleanly.
   - Maintain 100% 4-locale metadata parity (`en`, `ua`, `es`, `de`) with `authors`, `og:title`, `og:description`, `og:image`, and `twitter:card="summary_large_image"`.
2. **Deep-Link Entry Points (`ChatModal.tsx`):**
   - Preserve deterministic URL query parameters (`?chat=open`, `?chat=estimator`, `?chat=comparison`, `?chat=<project-slug>`) without breaking static SSG routes or canonical URLs.
3. **Consent-Compliant Attribution:**
   - Standard UTM query parameters (`utm_source`, `utm_medium`, `utm_campaign`) SHALL remain compatible with GA4 Consent Mode v2 Basic without storing unconsented tracking cookies or altering canonical link tags.
4. **Typography & Data Hygiene:**
   - Enforce zero em dashes (`-` only) and zero emojis in technical metadata across all committed files.
