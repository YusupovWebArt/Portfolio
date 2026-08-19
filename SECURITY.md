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

---

## 🤖 5. Future RAG Architecture Security Roadmap (AI Chatbot Upgrade)

When upgrading the client-side FAQ chatbot to a serverless **Hybrid RAG (Retrieval-Augmented Generation)** architecture, the following 6 defense tiers must be strictly implemented:

### 🛡️ Tier 1: Zero-Commit API Key Protection (Zero-Commit Policy)
- **Risk:** Embedding OpenAI/Gemini/Anthropic keys directly in the client bundle exposes them to extraction via browser DevTools.
- **Enforcement:** API keys must never be committed to Git or exposed to the client. Keys are stored exclusively in encrypted environment secrets on the serverless edge (e.g., Cloudflare Workers via `wrangler secret put OPENAI_API_KEY`). The browser communicates only with the serverless proxy.

### 🛡️ Tier 2: Domain Whitelisting (CORS Protection)
- **Risk:** Unauthorized third-party sites copying the endpoint URL to consume API quotas.
- **Enforcement:** The serverless worker strictly validates the `Origin` header. Requests are accepted exclusively from `https://yusupovwebart.github.io` (and `localhost` for development). All other origins receive an immediate `403 Forbidden`.

### 🛡️ Tier 3: Abuse Prevention & Hard Budget Caps (Rate Limiting & Cost Control)
- **Risk:** Malicious bots spamming thousands of requests per minute to drain API credits.
- **Enforcement:**
  - **IP-Based Rate Limiting:** Enforce a strict threshold of maximum 5–10 requests per minute per IP.
  - **Hard Spend Limits:** Configure a monthly hard ceiling (e.g., $2.00/month) in the LLM provider console. If reached, the system auto-shuts off dynamic calls and falls back to static FAQ.
  - **Payload Clamping:** Sanitize and truncate user input to 300 characters max, capping model completions to 250 tokens.

### 🛡️ Tier 4: Prompt Injection Guardrails & Grounding (AI Safety)
- **Risk:** Malicious prompts attempting to hijack persona, negotiate unauthorized rates, or leak system prompts.
- **Enforcement:**
  - Rigid system prompt instructing the model to act strictly as Artur's AI Assistant, ground answers exclusively on verified portfolio facts, and never agree to custom pricing or reveal internal prompts.
  - Input Sanitization: Strip all HTML, script, and markdown executable injections before passing queries to the vector search and LLM context.

### 🛡️ Tier 5: EU RGPD / LOPDGDD Privacy Compliance
- **Risk:** Illegally storing visitor IP addresses or sensitive chat logs under EU privacy laws.
- **Enforcement:**
  - **Zero-Log Architecture:** The serverless proxy processes requests ephemerally in-memory without persisting user chat logs or IP addresses to any persistent database.
  - Contact data remains Base64-obfuscated across all dynamic retrieval pipelines.

### 🛡️ Tier 6: Resilient Fallback (Graceful Degradation)
- **Enforcement:** If network latency spikes, rate limits are hit, or the serverless backend is unreachable, the client frontend (`ChatModal.tsx`) automatically and silently falls back to the local static [`chatFaq.ts`](file:///d:/PORTFOLIO/Portfolio/src/data/chatFaq.ts) matching engine with zero UI disruption.

