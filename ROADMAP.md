# Project Roadmap & Future Enhancements

This document maintains the technical and business roadmap for the Artur Yusupov Portfolio Application. It serves as a persistent guide for upcoming sprints, optimizations, architectural upgrades, and outreach strategies.

---

## Status Summary

| Item | Priority | Category | Status |
| :--- | :--- | :--- | :--- |
| **Code-Splitting & Bundle Optimization** | High | Performance | **Completed (196 KB main bundle)** |
| **Native View Transitions API (Card Morphing)** | High | UI/UX & Motion | **Completed (120 FPS GPU)** |
| **Progressive Web App (PWA) + Offline Mode** | Low | Web Standards 2026 | **Completed (Manifest & SW)** |
| **1-Click WhatsApp Direct Integration (Zero-Scrape)** | High | Conversion & B2B | **Completed** |
| **Stage 1 Technical SEO & Entity Disambiguation** | High | SEO & GEO | **Completed** |
| **Legal Architecture: Privacy & Cookies Pages** | High | Legal & AEPD | **Completed** |
| **Commercial B2B Services Matrix (5 Core Services)** | High | B2B & Revenue | **Completed** |
| **Header Navigation & Semantic Crawlable Links** | High | UX & SEO | **Completed** |
| **Schema.org FAQPage & Seville LocalBusiness Rich Snippets** | High | SEO & GEO | **Completed** |
| **Interactive Google Ads ROI / CPC Savings Calculator** | High | CRO & Sales | **Completed** |
| **Schema.org BreadcrumbList Navigation** | Medium | SEO & SERP | **Completed** |
| **Portfolio Social Proof in B2B Services** | High | CRO & Trust | **Completed** |
| **Generative UI Service Card in RAG Chatbot** | High | AI & Sales | **Completed** |
| **B2B Cold Outreach Email Templates (ES Agencies)** | High | Marketing & Sales | **Completed** |
| **Interactive "Before & After" Speed Slider** | Medium | Conversion & Proof | Planned in Roadmap |
| **Fiscal & Legal Autónomo Architecture (Aviso Legal & IVA/IRPF)** | High | Legal & B2B Trust | Planned (Post-Autónomo Registration) |
| **Commercial Hero CTA & Pre-sale RAG Funnel Overhaul (/es Locale)** | High | CRO & Funnel B2B | Planned in Roadmap |
| **Verified Domain Mailbox (Custom Domain Routing) & Seville Ecosystem** | Medium | Branding & GEO | **Completed** |
| **Interactive Project Cost & Timeline Estimator** | High | Lead Generation | Planned |
| **Public Repository Switch (Unlimited Actions)** | High | DevOps & Cost | Pending User Action |
| **Interactive Spec-Driven SDLC Pipeline Visualizer** | Medium | AI & Architecture | Planned |
| **Live "Developer Mode" HUD (Inspector for CTOs)** | Medium | Technical Proof | Planned |
| **Serverless Hybrid RAG AI Chatbot (with Project Matchmaker)** | Medium | AI Architecture | Fully Specified |
| **Free 2-Minute Loom Video Audit Modal** | Medium | Lead Generation | Planned |
| **Live CI/CD Pipeline & Health Status in Footer** | Medium | DevOps & Trust | Planned |
| **Dynamic Client-Side CV/Resume PDF Generator** | Low | Utility | Planned |
| **DACH Market Expansion (German Locale / de)** | Medium | Internationalization | Phase 2 Planned |

---

## 1. Performance & Core Web Vitals (Completed)

### Code-Splitting & Dynamic Imports
- **Achievement:** Separated ProjectDetail.tsx (28.79 KB) via React.lazy + Suspense and extracted 69 case study definitions into a dedicated projects-data.js (428 KB) chunk.
- **Metric:** Main index.js reduced from **647.25 KB** (149 KB gzip) down to **196.16 KB** (53.19 KB gzip).
- **Build Speed:** Production build accelerated from ~1m 57s to **~5.26 seconds**.

---

## 2. Next-Gen UI/UX & Visual Interactions

### Native View Transitions API (Card Morphing to Detail View)
- **Objective:** Cinematic, seamless transition when opening and closing project case studies.
- **Technical Specs:**
  - Leverage native browser `document.startViewTransition()` in React 19.
  - Bind CSS `view-transition-name` between the grid thumbnail and the full project banner.
  - Zero third-party library overhead (0 KB bundle addition).
  - Graceful fallback for non-supporting browsers.

### Interactive Spec-Driven SDLC Pipeline Visualizer (AiWorkflow 2.0)
- **Objective:** Transform static cards into an interactive node graph visualizer.
- **Specification:**
  - Visual node chain: Requirements Audit -> Strict Spec -> AI Harnessing -> SAST/SCA Verification.
  - Clicking any node displays live markdown snippets, prompt templates, and automated validation gates.

### Mouse-Tracking Ambient Glow (GPU-Mesh)
- **Objective:** Delicate cursor-following radial gradient glow on glassmorphism card borders in dark mode via CSS variables (`--mouse-x`, `--mouse-y`) with zero JavaScript RAF loop overhead.

---

## 3. Conversion & Direct Lead Generation

### 1-Click WhatsApp Direct Integration (Zero-Scrape CRO - Completed)
- **Objective:** Enable instant, zero-friction mobile messaging for small businesses and agency owners in Spain/EU while eliminating scraper leakage.
- **Technical Implementation:**
  - Runtime Base64 on-demand decoding in `src/lib/contacts.ts` (`openWhatsAppDirect`).
  - Pre-filled multilingual greeting template:
    - *ES:* "Hola Artur, me gustaría consultar la disponibilidad para un proyecto web."
    - *EN:* "Hi Artur, I would like to inquire about availability for a web project."
    - *UA:* "Привіт Артуре, хочу обговорити розробку веб-проєкту."
  - Direct 1-click CTA button in `Contact.tsx` and `ContactActionCard.tsx` with zero raw phone numbers in the HTML bundle.

### Interactive Project Cost & Timeline Estimator
- **Objective:** Interactive 4-step wizard calculating price ranges and delivery timeframes for custom WordPress, Next.js, and speed optimization projects.
- **Specification:** Generates a pre-formatted technical scope string sent directly to WhatsApp or Email in 1 click.

### Interactive "Before & After" Performance Slider (Roadmap Item)
- **Objective:** Interactive comparison slider demonstrating typical bloated page scores (PageSpeed 28, LCP 4.8s) vs Artur's engineered architecture (PageSpeed 98, LCP 0.6s).
- **Placement:** Targeted for `/services/web-performance-core-web-vitals` and the homepage performance block.
- **Specification:**
  - Dual visual panels with a draggable center divider (accessible via keyboard left/right arrow keys).
  - Metrics breakdown: LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift).
  - Business impact indicator: Shows bounce rate reduction from 42% down to 9% and Google Ads CPC discount.
  - Zero heavy external dependencies: Pure CSS clip-path or canvas with standard touch/pointer events.

### Free 2-Minute Loom Video Audit Modal
- **Objective:** High-converting lead magnet offering potential clients a free, recorded architectural & speed audit of their existing website.

---

## 4. AI Architecture & Developer Showcases

### Serverless Hybrid RAG AI Chatbot with Project Matchmaker
- **Objective:** Upgrade the client-side FAQ bot into an intelligent, knowledge-retrieving AI assistant capable of streaming contextual answers and dynamically rendering relevant project case study cards.
- **Technical Specs:**
  - **Edge Worker:** Cloudflare Worker / Vercel Serverless Function running on Node 24.
  - **LLM Engine:** GPT-4o-mini or Gemini 1.5 Flash with strict system prompt grounding.
  - **Vector Storage:** Cloudflare Vectorize / Pinecone with chunked project case studies and architectural patterns.
  - **6 Security Defense Tiers:** Fully documented in SECURITY.md.
  - **Speech-to-Text:** Optional Web Speech API microphone input.

### Live "Developer Mode" HUD (Inspector for CTOs)
- **Objective:** Interactive toggle revealing component bundle sizes, render metrics, and architecture info on hover for technical evaluators.

---

## 5. Web Standards 2026 & DevOps

### Live CI/CD Pipeline & Health Status in Footer
- **Objective:** Dynamic status indicator displaying live GitHub Actions deployment health, current commit, build duration, and Node.js 24 runtime status.

### Progressive Web App (PWA) + Offline Mode
- **Objective:** Web App Manifest and Service Worker providing offline access to top case studies and 1-click mobile home screen installation.

### Dynamic Client-Side CV/Resume PDF Generator
- **Objective:** In-browser client-side compilation of a clean, print-styled A4 PDF resume tailored to the active language and tech stack.

### Public Repository Switch (Free Unlimited GitHub Actions)
- **Objective:** Eliminate monthly 2,000-minute CI/CD budget caps by setting repo visibility to Public.

---

## 6. Spanish Agency Outreach (Marca Blanca Strategy)

### Cold Outreach Email Sequences
- **Objective:** Partner with Spanish marketing, design, and SEO agencies who need senior technical execution under white-label (Marca Blanca).
- **Deliverables:**
  - Sequence 1: White-label React & WordPress development for agencies with capacity overflow.
  - Sequence 2: Legacy code modernization, Core Web Vitals remediation, and speed optimization.
  - Sequence 3: Custom AI agent integration & workflow automation for enterprise clients.

---

## 7. Internationalization: Phase 2 German (DE) Expansion

### DACH Market Entry (Germany, Austria, Switzerland)
- **Objective:** Unlock high-budget European enterprise contracts by introducing German (`de`) as the sole 4th locale, targeting DACH clients seeking Senior Fullstack / Headless WordPress / Next.js engineering talent.
- **Key Commercial Drivers:**
  - **German Regulatory Enforcement (BFSG / EAA 2026):** European Accessibility Act (EN 301 549) carries fines up to 100,000 EUR in Germany. High demand for WCAG 2.2 AA audit and remediation.
  - **Proven Production Portfolio Anchors:** Leverage existing live German enterprise projects:
    - *Buhl WISO* (buhl.de - Germany's leading tax software platform).
    - *Telefontrainingskoffer* (callcenter-akademie.de - German professional B2B training portal).
  - **Target Architecture:** Add `de` to Next.js localized route params (`app/[locale]/...`), generate localized case study routes and engineering articles in German, and maintain strict key parity in `src/locales/de.ts`.

---

## 8. Spanish Market Expansion & Autónomo Lifecycle Roadmap

### 8.1. Fiscal & Legal Autónomo Architecture (Aviso Legal & Invoicing Transparency)
- **Context:** Following the Gemini Deep Research audit, statutory compliance under Spanish Law 34/2002 (LSSI-CE Art. 10) requires exposing fiscal NIF/NIE and registered business notifications once commercial operations under *Autónomo* status begin.
- **Action Plan upon Autónomo Activation:**
  - Activate `/es/aviso-legal` with verified NIF/NIE and Seville professional business address / coworking seat.
  - Expose B2B invoicing badges across the `/es` footer and service pages: official Spanish invoicing (+21% IVA, IRPF withholding retention for Spanish S.L. clients via Modelo 111, and VIES intra-EU reverse charge).
  - Add localized FAQ clarifying deductibility of web engineering and AI development expenses for Spanish businesses.

### 8.2. Commercial Hero CTA & Pre-sale RAG Funnel Overhaul (/es Locale)
- **Context:** Shift `/es` Hero positioning away from HR/recruiter framing ("Descargar CV") toward commercial B2B buyer actions:
  - Primary CTA: "Solicitar Presupuesto / Auditoría Web Gratuita" triggering project scope qualification.
  - Secondary CTA: "Probar Asistente IA en Vivo" showcasing the in-browser RAG assistant as a sellable turn-key product capability for client sites.
  - Move "Descargar CV" to the About section (`About.tsx`) for evaluators arriving from professional platforms.
  - Tune RAG chat prompt (`src/lib/ai/prompts.ts`) for presale lead qualification and instant WhatsApp referral.

### 8.3. Verified Domain Mailbox & Seville Local Ecosystem
- **Context:** Decouple personal communication channels from business client acquisition.
- **Action Plan:**
  - Setup verified domain email via Cloudflare Email Routing and activate Base64 credentials in `src/lib/contacts.ts` (Completed).
  - Claim and verify Google Business Profile in Seville ("Desarrollador Web y Consultor IA en Sevilla") for Local SEO MAP pack visibility.
  - Complete Spanish profile on Malt España (`malt.es/profile/arturyusupov`) and Shakers (`shakersworks.com`), linking them to Schema.org `sameAs` array.
