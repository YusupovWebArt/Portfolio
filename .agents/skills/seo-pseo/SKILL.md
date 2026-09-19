---
name: seo-pseo
description: Search Engine Optimization (SEO), programmatic metadata, JSON-LD Schema.org structured data, and Open Graph standards.
---

# SEO and Programmatic Metadata Skill

This skill governs metadata, search crawler discovery, and structured data generation for the portfolio.

---

## 1. Single H1 and Semantic Document Hierarchy

- `index.html` and the SPA root MUST present exactly ONE primary `<h1>` tag at all times.
- Sub-sections must follow strict descending hierarchy (`<h2>` for major sections like Projects, About, Services; `<h3>` for individual cards and case study headlines).

---

## 2. Structured Data (JSON-LD)

The portfolio embeds Schema.org structured data in `index.html`:
- **`Person` Schema:** Defines Artur Yusupov as the author, including job titles (Full-Stack Engineer, AI Solutions Architect), social URLs, and skill proficiencies.
- **`WebSite` Schema:** Declares the site name, URL, inLanguage (`["en", "uk", "es"]`), and search capability.
- **`CollectionPage` Schema:** Highlights the portfolio collection and case studies.

When updating personal data or architecture, ensure structured data blocks in `index.html` reflect the changes.

---

## 3. Social Graph & Crawler Fallbacks

- **Open Graph Meta Tags:** `og:title`, `og:description`, `og:image` (1200x630 WebP/PNG preview), `og:url`, and `og:type` must be present.
- **Twitter Card:** `twitter:card` set to `summary_large_image`.
- **Canonical URL:** Self-referencing canonical URL (`https://yusupovwebart.github.io/Portfolio/`).
- **Crawler Noscript Fallback:** `index.html` contains an accessible semantic fallback inside `<noscript>` so search engine crawlers without JavaScript execution can index portfolio highlights, services, and trilingual contact information.
