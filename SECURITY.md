# Portfolio Security Policy & Guidelines

This document details the security constraints, obfuscation standards, and header configurations implemented in the project. Any future updates by developers or AI agents must strictly follow these rules to maintain project integrity.

---

## 🔒 1. Zero-Commit Credentials Policy

- **No Secrets in Code:** Under no circumstances should API keys, private domains, database passwords, or personal credentials be written directly into the source code.
- **Environment Variables:** All environment-specific variables must be placed in a `.env` file (which is ignored by Git in `.gitignore`) and loaded via Vite's `import.meta.env.*` parameters.
- **Git History Auditing:** If a secret is accidentally committed, it must be removed by rewinding/rewriting git history (e.g. via `git filter-repo` or `git filter-branch`), as a simple deletion commit still keeps the secret searchable in past git history.

---

## 🛡️ 2. HTTP Security Headers (index.html Meta Tags)

The project enforces sandboxed client-side policies directly via `<meta>` headers in `index.html`:

1. **Content Security Policy (CSP):**
   - Restricts executable scripts and styles to the host origin (`'self'`) and allowed external services (e.g., Google Tag Manager, Google Fonts).
   - Blocks inline script execution where possible to prevent Cross-Site Scripting (XSS) injections.
2. **Referrer Policy:**
   - Set to `strict-origin-when-cross-origin` to ensure that full referrer URLs are not leaked to external websites during outbound transitions.
3. **Permissions Policy:**
   - Explicitly disables hardware APIs (microphone, camera, geolocation, gyroscope) to secure client sandbox security.

---

## 🕵️ 3. Anti-Scraping Obfuscation (Contacts Security)

To protect email addresses, phone numbers, and chat handles from automated data-mining scrapers, all contact details on the landing page are protected using the following mechanism:

- **Encoding:** Contact URLs and identifiers are stored in the code base as base64-encoded strings (e.g., `YWJjQGV4YW1wbGUuY29t` instead of `abc@example.com`).
- **Dynamic Decryption:** The React components decode the strings dynamically at runtime:
  - Base64 decryption occurs only when the component mounts or upon user interaction (mouse hover or click).
  - Obfuscated values are injected directly into the DOM tree at the moment of click, preventing static scanners from reading the contact details in the initial HTML document payload.
- **Crawler Fallback:** A `<noscript>` wrapper inside `#seo-fallback` presents descriptive textual content for SEO indexability, but strictly avoids rendering clickable, scrapable links.

---

## 📦 4. Dependency Auditing & Guardrails

- **Vulnerability Checks:** Run `npm audit` regularly to check for package security flaws.
- **Dependabot Settings:** Major updates of core compilers (like TypeScript `7.x`) and layout dependencies (like `lucide-react` version `1.x` which removes brand icons) are ignored to maintain build safety and compatibility.
