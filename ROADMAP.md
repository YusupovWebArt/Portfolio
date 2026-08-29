# Project Roadmap & Future Enhancements

This document maintains the technical and business roadmap for the Artur Yusupov Portfolio Application. It serves as a persistent guide for upcoming sprints, optimizations, architectural upgrades, and outreach strategies.

---

## 🎯 Status Summary

| Item | Priority | Category | Status |
| :--- | :--- | :--- | :--- |
| **Code-Splitting & Bundle Optimization** | 🔴 High | Performance | 🟢 **Completed (196 KB main bundle)** |
| **Native View Transitions API (Card Morphing)** | 🔴 High | UI/UX & Motion | 💬 **In Discussion** |
| **Floating WhatsApp Direct Button** | 🔴 High | Conversion & B2B | 🟡 Queued |
| **Interactive Project Cost & Timeline Estimator** | 🔴 High | Lead Generation | 📋 Planned |
| **Public Repository Switch (Unlimited Actions)** | 🔴 High | DevOps & Cost | 🟡 Pending User Action |
| **Interactive Spec-Driven SDLC Pipeline Visualizer** | 🟡 Medium | AI & Architecture | 📋 Planned |
| **Interactive "Before & After" Speed Slider** | 🟡 Medium | Conversion & Proof | 📋 Planned |
| **Live "Developer Mode" HUD (Inspector for CTOs)** | 🟡 Medium | Technical Proof | 📋 Planned |
| **Serverless Hybrid RAG AI Chatbot (with Project Matchmaker)** | 🟡 Medium | AI Architecture | 📝 Fully Specified |
| **Free 2-Minute Loom Video Audit Modal** | 🟡 Medium | Lead Generation | 📋 Planned |
| **Live CI/CD Pipeline & Health Status in Footer** | 🟡 Medium | DevOps & Trust | 📋 Planned |
| **Progressive Web App (PWA) + Offline Portfolio** | 🟢 Low | Web Standards 2026 | 📋 Planned |
| **Dynamic Client-Side CV/Resume PDF Generator** | 🟢 Low | Utility | 📋 Planned |
| **B2B Cold Outreach Email Templates (ES)** | 🟢 Low | Marketing & Sales | 📋 Planned |

---

## 🚀 1. Performance & Core Web Vitals (Completed ✅)

### 📦 Code-Splitting & Dynamic Imports
- **Achievement:** Separated ProjectDetail.tsx (28.79 KB) via React.lazy + Suspense and extracted 69 case study definitions into a dedicated projects-data.js (428 KB) chunk.
- **Metric:** Main index.js reduced from **647.25 KB** (149 KB gzip) down to **196.16 KB** (53.19 KB gzip).
- **Build Speed:** Production build accelerated from ~1m 57s to **~5.26 seconds**.

---

## 🎨 2. Next-Gen UI/UX & Visual Interactions

### 🎬 Native View Transitions API (Card Morphing to Detail View)
- **Objective:** Cinematic, seamless transition when opening and closing project case studies.
- **Technical Specs:**
  - Leverage native browser `document.startViewTransition()` in React 19.
  - Bind CSS `view-transition-name` between the grid thumbnail and the full project banner.
  - Zero third-party library overhead (0 KB bundle addition).
  - Graceful fallback for non-supporting browsers.

### ⚡ Interactive Spec-Driven SDLC Pipeline Visualizer (AiWorkflow 2.0)
- **Objective:** Transform static cards into an interactive node graph visualizer.
- **Specification:**
  - Visual node chain: Requirements Audit -> Strict Spec -> AI Harnessing -> SAST/SCA Verification.
  - Clicking any node displays live markdown snippets, prompt templates, and automated validation gates.

### 💡 Mouse-Tracking Ambient Glow (GPU-Mesh)
- **Objective:** Delicate cursor-following radial gradient glow on glassmorphism card borders in dark mode via CSS variables (`--mouse-x`, `--mouse-y`) with zero JavaScript RAF loop overhead.

---

## 💬 3. Conversion & Direct Lead Generation

### 🟢 Floating WhatsApp Direct Button (https://wa.me/...)
- **Objective:** Enable instant, low-friction mobile messaging for small businesses and agency owners in Spain/EU.
- **Specification:**
  - Floating pill/circle button in the bottom-right corner with a pulse micro-animation.
  - Base64 obfuscated phone number to adhere to SECURITY.md.
  - Pre-filled multilingual greeting template:
    - *ES:* "Hola Artur, me gustaría consultar la disponibilidad para un proyecto web."
    - *EN:* "Hi Artur, I'd like to inquire about availability for a web project."
    - *UA:* "Привіт Артуре, хочу обговорити розробку веб-проєкту."

### 💶 Interactive Project Cost & Timeline Estimator
- **Objective:** Interactive 4-step wizard calculating price ranges and delivery timeframes for custom WordPress, Next.js, and speed optimization projects.
- **Specification:** Generates a pre-formatted technical scope string sent directly to WhatsApp or Email in 1 click.

### 🔍 Interactive "Before & After" Performance Slider
- **Objective:** Interactive comparison slider demonstrating typical bloated page scores (PageSpeed 28, LCP 4.8s) vs Artur's engineered architecture (PageSpeed 98, LCP 0.6s).

### 🎥 Free 2-Minute Loom Video Audit Modal
- **Objective:** High-converting lead magnet offering potential clients a free, recorded architectural & speed audit of their existing website.

---

## 🤖 4. AI Architecture & Developer Showcases

### 🧠 Serverless Hybrid RAG AI Chatbot with Project Matchmaker
- **Objective:** Upgrade the client-side FAQ bot into an intelligent, knowledge-retrieving AI assistant capable of streaming contextual answers and dynamically rendering relevant project case study cards.
- **Technical Specs:**
  - **Edge Worker:** Cloudflare Worker / Vercel Serverless Function running on Node 24.
  - **LLM Engine:** GPT-4o-mini or Gemini 1.5 Flash with strict system prompt grounding.
  - **Vector Storage:** Cloudflare Vectorize / Pinecone with chunked project case studies and architectural patterns.
  - **6 Security Defense Tiers:** Fully documented in SECURITY.md.
  - **Speech-to-Text:** Optional Web Speech API microphone input.

### 🛠️ Live "Developer Mode" HUD (Inspector for CTOs)
- **Objective:** Interactive toggle revealing component bundle sizes, render metrics, and architecture info on hover for technical evaluators.

---

## ⚡ 5. Web Standards 2026 & DevOps

### 🟢 Live CI/CD Pipeline & Health Status in Footer
- **Objective:** Dynamic status indicator displaying live GitHub Actions deployment health, current commit, build duration, and Node.js 24 runtime status.

### 📱 Progressive Web App (PWA) + Offline Mode
- **Objective:** Web App Manifest and Service Worker providing offline access to top case studies and 1-click mobile home screen installation.

### 📄 Dynamic Client-Side CV/Resume PDF Generator
- **Objective:** In-browser client-side compilation of a clean, print-styled A4 PDF resume tailored to the active language and tech stack.

### ⚡ Public Repository Switch (Free Unlimited GitHub Actions)
- **Objective:** Eliminate monthly 2,000-minute CI/CD budget caps by setting repo visibility to Public.

---

## 📧 6. Spanish Agency Outreach (Marca Blanca Strategy)

### 🇪🇸 Cold Outreach Email Sequences
- **Objective:** Partner with Spanish marketing, design, and SEO agencies who need senior technical execution under white-label (Marca Blanca).
- **Deliverables:**
  - Sequence 1: White-label React & WordPress development for agencies with capacity overflow.
  - Sequence 2: Legacy code modernization, Core Web Vitals remediation, and speed optimization.
  - Sequence 3: Custom AI agent integration & workflow automation for enterprise clients.
