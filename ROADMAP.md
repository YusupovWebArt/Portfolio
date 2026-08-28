# Project Roadmap & Future Enhancements

This document maintains the technical and business roadmap for the Artur Yusupov Portfolio Application. It serves as a persistent guide for upcoming sprints, optimizations, architectural upgrades, and outreach strategies.

---

## 🎯 Status Summary

| Item | Priority | Category | Status |
| :--- | :--- | :--- | :--- |
| **Code-Splitting & Bundle Optimization** | 🔴 High | Performance | 🟢 **Completed (196 KB main bundle)** |
| **Floating WhatsApp Direct Button** | 🔴 High | Conversion & B2B | 🟡 Next Up |
| **Public Repository Switch (Unlimited Actions)** | 🔴 High | DevOps & Cost | 🟡 Pending User Action |
| **Serverless Hybrid RAG AI Chatbot** | 🟡 Medium | AI Architecture | 📝 Fully Specified |
| **Free 2-Minute Loom Video Audit Modal** | 🟡 Medium | Lead Generation | 📋 Planned |
| **B2B Cold Outreach Email Templates (ES)** | 🟢 Low | Marketing & Sales | 📋 Planned |

---

## 🚀 1. Performance & Core Web Vitals (Completed ✅)

### 📦 Code-Splitting & Dynamic Imports
- **Achievement:** Separated ProjectDetail.tsx (28.79 KB) via React.lazy + Suspense and extracted 69 case study definitions into a dedicated projects-data.js (426 KB) chunk.
- **Metric:** Main index.js reduced from **647.25 KB** (149 KB gzip) down to **196.16 KB** (53.20 KB gzip).
- **Build Speed:** Production build accelerated from ~1m 57s to **~5.26 seconds**.

---

## 💬 2. Conversion & Direct Lead Generation

### 🟢 Floating WhatsApp Direct Button (https://wa.me/...)
- **Objective:** Enable instant, low-friction mobile messaging for small businesses and agency owners in Spain/EU.
- **Specification:**
  - Floating pill/circle button in the bottom-right corner with a pulse micro-animation.
  - Base64 obfuscated phone number to adhere to SECURITY.md.
  - Pre-filled multilingual greeting template:
    - *ES:* "Hola Artur, me gustaría consultar la disponibilidad para un proyecto web."
    - *EN:* "Hi Artur, I'd like to inquire about availability for a web project."
    - *UA:* "Привіт Артуре, хочу обговорити розробку веб-проєкту."

### 🎥 Free 2-Minute Loom Video Audit Modal
- **Objective:** High-converting lead magnet offering potential clients a free, recorded architectural & speed audit of their existing website.
- **Specification:**
  - Interactive CTA banner inside B2bServices.tsx and Contact.tsx.
  - Simple form requesting: Website URL + Contact Email/WhatsApp.
  - Generates actionable value before any commercial pitch.

---

## 🤖 3. AI Architecture & Chatbot Evolution

### 🧠 Serverless Hybrid RAG AI Chatbot
- **Objective:** Upgrade the client-side FAQ bot into an intelligent, knowledge-retrieving AI assistant capable of streaming contextual answers from full project histories.
- **Technical Specs:**
  - **Edge Worker:** Cloudflare Worker / Vercel Serverless Function running on Node 24.
  - **LLM Engine:** GPT-4o-mini or Gemini 1.5 Flash with strict system prompt grounding.
  - **Vector Storage:** Cloudflare Vectorize / Pinecone with chunked project case studies and architectural patterns.
  - **6 Security Defense Tiers:** Fully documented in SECURITY.md.
  - **0ms Instant FAQ:** Standard button queries continue responding locally via chatFaq.ts with zero server latency.

---

## 🔓 4. DevOps & Cloud Infrastructure

### ⚡ Public Repository Switch (Free Unlimited GitHub Actions)
- **Objective:** Eliminate monthly 2,000-minute CI/CD budget caps.
- **Action:** In GitHub Settings (Settings ➔ General ➔ Danger Zone ➔ Change visibility ➔ Make public), convert the repository to **Public**.
- **Result:** 100% Free, Unlimited GitHub Actions build & deployment minutes forever.

---

## 📧 5. Spanish Agency Outreach (Marca Blanca Strategy)

### 🇪🇸 Cold Outreach Email Sequences
- **Objective:** Partner with Spanish marketing, design, and SEO agencies who need senior technical execution under white-label (Marca Blanca).
- **Deliverables:**
  - Sequence 1: White-label React & WordPress development for agencies with capacity overflow.
  - Sequence 2: Legacy code modernization, Core Web Vitals remediation, and speed optimization.
  - Sequence 3: Custom AI agent integration & workflow automation for enterprise clients.
