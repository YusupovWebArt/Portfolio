# Artur Yusupov — Professional Portfolio Website

[![CI/CD & Deploy to GitHub Pages](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://github.com/YusupovWebArt/Portfolio/security/dependabot)
[![DevSecOps Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0%20(SCA%20Clean)-brightgreen.svg)](https://github.com/YusupovWebArt/Portfolio)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-Strict%20Zero--Any-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, enterprise-grade Single Page Application (SPA) portfolio website built with **React 19**, **TypeScript 6.x**, and **Tailwind CSS v4**, engineered using a strict **Spec-Driven AI Harness Architecture (SDD)**. Fully internationalized across 3 languages (**English**, **Ukrainian**, and **Spanish**), optimized for sub-second Core Web Vitals, and hardened with multi-tier **DevSecOps** pipelines.

🔗 **Live Website:** [https://yusupovwebart.github.io/Portfolio/](https://yusupovwebart.github.io/Portfolio/)

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 (SPA Architecture)
- **Runtime:** Node.js 24 LTS
- **Programming Language:** TypeScript 6.x (Strict Type Safety, Zero-`any` Policy)
- **Styling & Design System:** Tailwind CSS v4 (Modern CSS variables, native variants, dark/light glassmorphism)
- **Build Tool & Bundler:** Vite 8.x (Rolldown bundler for optimized code-splitting and sub-second HMR)
- **Package Manager:** pnpm 11.x (Fast, disk space-efficient with global NTFS content-addressable store)
- **Internationalization (i18n):** Custom type-safe 3-language engine (`en`, `ua`, `es`) with browser auto-detection
- **Icons:** React Icons & Lucide Icons
- **DevSecOps & CI/CD:** GitHub Actions on Node 24 & pnpm (Automated SAST/SCA security gates, minutes-optimized path filtering)
- **Dependency Governance:** Dependabot (Automated weekly CVE patching with breaking-version guardrails)

---

## ⚡ Core Technical Pillars & Features

### 🌐 1. Trilingual Internationalization Engine (i18n)
- **Supported Languages:** 🇬🇧 **English (en)**, 🇺🇦 **Ukrainian (ua)**, and 🇪🇸 **Spanish (es)**.
- **Interactive Flag Switcher:** Custom SVG flag dropdown menu with outside-click dismissal in the sticky header.
- **Smart Auto-Detection:** Automatically detects visitor browser locale (`navigator.language`) and persists choice in `localStorage`.
- **69 Localized Case Studies:** All 69 projects feature full trilingual descriptions, technical highlights, and architecture diagrams.

### 🤖 2. Spec-Driven AI Harness Architecture (SDD)
- Built following an **AI-first engineering philosophy governed by strict specification contracts**:
  - [**`DESIGN_SYSTEM.md`**](DESIGN_SYSTEM.md) — Visual constraints, spacing, color tokens, and stepper logic.
  - [**`SECURITY.md`**](SECURITY.md) — DevSecOps architecture, CSP sandbox, Base64 anti-scraping, and RAG security roadmap.
  - [**`ARCHITECTURE.md`**](ARCHITECTURE.md) — System directory structure, runtime logic, and deployment workflows.
  - [**`.agents/AGENTS.md`**](.agents/AGENTS.md) — AI agent workspace harness enforcing zero-`any` rules and static validation before commit.
  - [**`docs/OPTIMIZATION.md`**](docs/OPTIMIZATION.md) — Search indexing optimization, `.ignore` engine rules, and token economics.
- Delivers **3x faster engineering velocity** while guaranteeing zero architectural drift or regressions.

### 💼 3. B2B Services & Strategic Alliances (`B2bServices.tsx`)
- **Dual-Tab Audience Segmentation:**
  - **🏬 Para Pymes y Autónomos:** High-ROI solutions for local businesses, clinics, and trades (High-performance redesign, sub-second speed optimization, AI chatbots, Local SEO/GEO, RGPD compliance).
  - **🏢 Para Agencias Digitales (Marca Blanca):** Seamless White-Label engineering under strict NDA (custom React/WordPress development, legacy code modernization, overflow capacity, flexible collaboration models).

### 💬 4. Interactive AI Console & Chatbot (`ChatModal.tsx`)
- Client-side AI assistant answering visitor questions in real time in 3 languages.
- **Hybrid RAG Evolution Roadmap:** Pre-architected to seamlessly transition to a serverless **Hybrid RAG (Retrieval-Augmented Generation)** backend on Cloudflare Workers without touching the frontend UI.

### 🛡️ 5. DevSecOps & Hardened Web Security
- **SCA Clean:** 0 known vulnerabilities verified via `pnpm audit` on every build.
- **SAST Gating:** Strict static analysis via `pnpm exec tsc --noEmit` and `pnpm lint` enforced in CI.
- **HTTP Security Headers:** Sandboxed Content Security Policy (CSP), Permissions-Policy (`camera=(), microphone=(), geolocation=()`), and Referrer-Policy (`strict-origin-when-cross-origin`).
- **Anti-Scraping Obfuscation:** Dynamic Base64 runtime decryption for email and phone numbers, preventing automated spam harvesting.
- **RGPD / LOPDGDD Compliance:** Cookie-free, privacy-first architecture with legal EU invoicing transparency.

### 🚀 6. Optimized CI/CD Pipeline (GitHub Actions)
- **Path-Filtering (`paths-ignore`):** Documentation (`*.md`) and rule edits consume **0 Actions minutes**.
- **Fast-Fail Pipeline:** Quick SAST/SCA tests run in <5 seconds before production compilation.
- **Concurrency Control:** `cancel-in-progress` eliminates race conditions and cancels redundant runs.
- **Automated Deploy:** Self-deploying to GitHub Pages on every push to `master`.

---

## 📁 Repository Structure

```text
Portfolio/
├── .agents/
│   └── AGENTS.md           # AI Agent Workspace Harness & Rules
├── .github/
│   ├── dependabot.yml      # Automated Dependency Governance
│   └── workflows/
│       └── deploy.yml      # CI/CD Automated Security & Deploy Pipeline
├── src/
│   ├── components/         # React Components (Hero, About, B2bServices, Skills, etc.)
│   │   └── projects/       # 69 Detailed Project Case Studies
│   ├── contexts/           # Theme (Dark/Light) & Language (i18n) Providers
│   ├── locales/            # Trilingual Dictionaries (en.ts, ua.ts, es.ts, types.ts)
│   ├── data/               # chatFaq.ts Trilingual AI Chatbot Database
│   ├── App.tsx             # Root Application Layout
│   └── main.tsx            # DOM Mount Entrypoint
├── ARCHITECTURE.md         # System Architecture & Component Mapping
├── DESIGN_SYSTEM.md        # UI/UX Specifications, Typography & Grid Rules
├── SECURITY.md             # Security Policy & DevSecOps Specification
└── package.json            # Dependencies & Build Scripts
```

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YusupovWebArt/Portfolio.git

# 2. Install dependencies
pnpm install

# 3. Start local development server
pnpm dev

# 4. Run static type checking
pnpm exec tsc --noEmit

# 5. Run ESLint code quality checks
pnpm lint

# 6. Build production bundle
pnpm build
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

