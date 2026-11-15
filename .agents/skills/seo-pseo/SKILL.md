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

---

## 4. Generative Engine Optimization (GEO) & AI Overview Standards

Empirical data from Google Search Console demonstrates that Google AI Overviews actively cites the portfolio across multiple languages (`en`, `es`, `ua`) on desktop. To maximize citation rates by search LLMs (Google AI Overviews, Perplexity, Claude):

1. **Title Architecture:** Avoid generic titles. Use the proven formula:
   `[Core Architectural Problem/Solution] + [Quantified Metric / Scale] + [Trade-Off / Standard] | Artur Yusupov`
   Example: `WooCommerce HPOS & Redis Caching at 10,000+ SKUs: Sub-100ms Architecture | Artur Yusupov`.
2. **5-Second Early Retention Anchor (Decision Matrix):**
   Every technical article must include a clean Markdown comparison table within the first 150 words (`Evaluation Dimension | Option A | Option B`). This eliminates early bounce and gives search engines immediately extractable structured rows.
3. **Structured Code & Benchmarks:** Include copy-pasteable production code recipes (PHP hooks, Next.js route handlers, TypeScript schemas) and exact quantitative metrics (`< 100ms TTFB`, `10,000+ SKUs`, `90s build time`).
4. **4-Language Synchronization:** Maintain 100% content parity across `en`, `ua`, `es`, and `de`. Google AI Overviews indexes all localized routes.
5. **Strict Hyphenation:** Zero em dashes (`—` or `–`); standard hyphens `-` only across all files. Zero emojis in technical data.

