# Artur Yusupov - Professional Portfolio Website

[![CI/CD & Deploy to GitHub Pages](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml)
[![TDD Vitest](https://img.shields.io/badge/Vitest%20TDD-29%20Passing%20(7%20Suites)-brightgreen.svg)](https://vitest.dev/)
[![E2E Playwright](https://img.shields.io/badge/Playwright%20E2E-11%20Passing-blue.svg)](https://playwright.dev/)
[![A11y WCAG 2.2 AA](https://img.shields.io/badge/A11y-WCAG%202.2%20AA%20%7C%20EAA%202026-blue.svg)](https://www.w3.org/TR/WCAG22/)
[![Bundle Budget](https://img.shields.io/badge/Bundle%20Budget-Passed%20(-50.3%25)-brightgreen.svg)](scripts/check-bundle-budget.mjs)
[![Lighthouse CI](https://img.shields.io/badge/Lighthouse%20CI-CWV%20Budgets-orange.svg)](https://github.com/GoogleChrome/lighthouse-ci)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-Strict%20Zero--Any-blue.svg)](https://www.typescriptlang.org/)
[![DevSecOps Clean](https://img.shields.io/badge/DevSecOps-0%20Vulnerabilities-brightgreen.svg)](https://github.com/YusupovWebArt/Portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, enterprise-grade Single Page Application (SPA) and Progressive Web App (PWA) built with **React 19**, **TypeScript 6.x**, and **Tailwind CSS v4**, engineered using the **2026 AI-Harness methodology (SDD + SDLC + TDD)**. Fully internationalized across 3 languages (**English**, **Ukrainian**, and **Spanish**), audited for European Accessibility Act (**EAA 2026 / WCAG 2.2 Level AA**) compliance, aligned with strict **Core Web Vitals budgets**, and hardened with a **9-step CI/CD DevSecOps** deployment pipeline.

🔗 **Live Website:** [https://yusupovwebart.github.io/Portfolio/](https://yusupovwebart.github.io/Portfolio/)

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 (SPA Architecture with modern hooks)
- **Runtime Environment:** Node.js 24 LTS
- **Programming Language:** TypeScript 6.x (Strict Type Safety, Zero-`any` Policy)
- **Styling & Design System:** Tailwind CSS v4 (CSS variables, native dark/light variants, glassmorphism)
- **Build Tool & Bundler:** Vite 8.x (Rolldown engine for optimized code-splitting and sub-second HMR)
- **Progressive Web App:** Web App Manifest & Service Worker with Stale-While-Revalidate caching
- **Native Animation:** W3C View Transitions API for 120 FPS hardware-accelerated card morphing
- **Unit & Component Testing (TDD):** Vitest 5.x & React Testing Library 16.x (JSDOM environment, 29 specs)
- **Browser E2E & Accessibility:** Playwright 1.63.x & `@axe-core/playwright` (11 specs, WCAG 2.2 Level AA audits)
- **Performance Budget Engine:** Lighthouse CI (`@lhci/cli`) & custom bundle budget checker (`scripts/check-bundle-budget.mjs`)
- **Package Manager:** pnpm 11.x (Fast, disk space-efficient with global NTFS content-addressable store)
- **Internationalization (i18n):** Custom type-safe 3-language engine (`en`, `ua`, `es`) with browser auto-detection
- **Icons:** React Icons & Lucide Icons (with `aria-hidden` wrappers and compliant SVG contrast)
- **DevSecOps & CI/CD:** GitHub Actions automated quality and deployment pipeline

---

## ⚡ Core Technical Pillars

```mermaid
flowchart TD
    subgraph L1["Layer 1: Architectural Framework & Skills"]
        Const[".specify/memory/constitution.md\n7 Immutable Core Principles"]
        Rules[".agents/rules/\nproject-context.md | code-style.md"]
        Skills[".agents/skills/\nsdd-workflow | tdd-react | a11y-wcag22 | perf-cwv | i18n-locales | seo-pseo"]
    end

    subgraph L2["Layer 2: TDD & Unit Test Suite"]
        Vitest["Vitest 5 + RTL 16\n29 Automated Specs (7 Suites)\nCoverage Ratchets Enforced"]
    end

    subgraph L3["Layer 3: A11y & E2E Browser Verification"]
        Playwright["Playwright 1.63 + axe-core\n11 Browser Specs (EAA 2026 / WCAG 2.2 AA / Consent Mode)"]
    end

    subgraph L4["Layer 4: CI/CD Hardening & Performance Budgets"]
        Budget["check-bundle-budget.mjs\nInitial JS < 450 KB (-50.3%)"]
        LHCI["Lighthouse CI (.lighthouserc.json)\nCore Web Vitals Assertions"]
        Pipeline["GitHub Actions Pipeline\npnpm verify Gate"]
    end

    L1 --> L2 --> L3 --> L4
```

### 🤖 1. 2026 AI-Harness Architecture (SDD + SDLC + TDD)
- **Immutable Constitution:** Governed by [`.specify/memory/constitution.md`](.specify/memory/constitution.md) enforcing strict zero-`any` typing, DevSecOps obfuscation, trilingual parity, and WCAG 2.2 AA accessibility.
- **Antigravity Custom Agent Skills:** Specialized agent skills inside [`.agents/skills/`](.agents/skills/):
  - `sdd-workflow`: Spec-Driven Development (SDD) 7-stage lifecycle and stop-gates.
  - `tdd-react`: Red-Green-Refactor test cycle and semantic RTL queries.
  - `a11y-wcag22`: European Accessibility Act (EAA 2026 / EN 301 549) and WCAG 2.2 Level AA guidelines.
  - `perf-cwv`: Core Web Vitals budgets (LCP <= 1.2s, CLS 0.00, FCP <= 0.8s), WebP media pipeline.
  - `i18n-locales`: 3-language synchronization and dictionary key parity enforcement.
  - `seo-pseo`: Schema.org structured data, JSON-LD microdata, and Open Graph standards.
- **Spec-Driven Lifecycle:** Feature requirements are authored under `specs/<feature-slug>/` before implementation, eliminating hallucinations and context drift.

### 🧪 2. Automated TDD & Unit Testing Layer (Vitest)
- **Framework:** Vitest 5 with isolated JSDOM testing environments.
- **Test Suite:** 29 automated unit and component specifications across 7 test suites covering:
  - Theme toggling, document root class mutation, and localStorage state persistence (`ThemeContext.test.tsx`).
  - Trilingual dictionary synchronization, key parity, and translation scanner (`i18n.test.ts`, `i18n-scanner.test.ts`).
  - Project showcase category filtering and modal selection triggers (`Projects.test.tsx`).
  - Security contact credential obfuscation and zero-raw-secret detection (`contacts.test.ts`).
  - Opt-in Cookie Consent Mode v2 Basic state management, modal lifecycle, and GA4 tag loader (`ConsentContext.test.tsx`).
- **Coverage Ratchets:** Strict thresholds enforced via `@vitest/coverage-v8` in `vitest.config.ts`:
  - Statements: `>= 30.00%` (actual: 30.47%)
  - Branches: `>= 15.00%` (actual: 16.66%)
  - Functions: `>= 14.00%` (actual: 15.29%)
  - Lines: `>= 30.00%` (actual: 31.50%)

### ♿ 3. European Accessibility Act (EAA 2026) & WCAG 2.2 Level AA
- **Automated Scanning:** Integrated Playwright with `@axe-core/playwright` to test the full DOM tree across all viewports and color themes.
- **Accessibility Benchmarks:**
  - 0 critical or serious violations under `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, and `wcag22aa`.
  - Contrast ratio of >= 4.5:1 for normal text and >= 3:1 for large text across dark and light themes.
  - Target Size Minimum (SC 2.5.8): All interactive buttons and stepper controls meet >= 24x24px.
  - Decorative SVGs isolated with `aria-hidden="true"` to prevent screen reader clutter.

### 🚀 4. Core Web Vitals, Code-Splitting & Performance Budgets
- **Automated Bundle Budget Gate:** `scripts/check-bundle-budget.mjs` strictly asserts bundle sizes on every production build:
  - **Main Entry (`index-*.js`):** 116.18 KB raw / 27.26 KB gzip (budget limit: `< 200 KB`).
  - **Total Initial Eager JS:** 418.54 KB raw / 124.43 KB gzip (budget limit: `< 450 KB` / `< 130 KB` gz). Slashed by **50.3%** from the 842.95 KB baseline.
  - **Projects Data Chunk:** Deferred / lazy-loaded (423.55 KB) on demand, removing 423 KB of blocking parse overhead from initial page boot.
  - **Locales Chunk:** Split into standalone chunk (96.76 KB raw / 31.28 KB gzip).
- **Lighthouse CI Thresholds:** [`.lighthouserc.json`](.lighthouserc.json) asserts quality on every build:
  - Accessibility: `>= 0.95`
  - SEO: `>= 0.95`
  - Best Practices: `>= 0.90`
  - Performance: `>= 0.85`
- **PWA & Offline Pipeline:** Custom Service Worker (`public/sw.js`) with **Stale-While-Revalidate** caching for instant subsequent loads and offline availability.
- **Native View Transitions API:** W3C View Transitions API standard for smooth GPU-accelerated card expansion without heavy external animation libraries.

### 🌐 5. Trilingual Internationalization Engine (i18n)
- **Supported Languages:** English (`en`), Ukrainian (`ua`), and Spanish (`es`).
- **Smart Locale Handling:** Custom React `LanguageContext` detecting browser preferences with persistent `localStorage` storage and dynamic `<html lang="...">` DOM attribute updates.
- **69 Localized Case Studies:** Complete parity across all 69 project case studies with technical architecture diagrams.

### 🛡️ 6. DevSecOps & Security Hardening
- **Zero Secrets Policy:** Zero API keys, tokens, or personal contact credentials in raw text. Verified by automated scanner `src/security/contacts.test.ts`.
- **Anti-Scraping Obfuscation:** Personal contact channels (email, phone, Telegram, WhatsApp) are stored in Base64 format and decrypted only on client interaction.
- **Security Headers:** Strict Content Security Policy (CSP), Permissions-Policy (`camera=(), microphone=(), geolocation=()`), and Referrer-Policy (`strict-origin-when-cross-origin`).
- **Consent-Based Telemetry:** Google Analytics 4 operates strictly under **Consent Mode v2 Basic mode** (`src/lib/analytics.ts` and `src/contexts/ConsentContext.tsx`). Zero network requests to Google Analytics servers until the user explicitly clicks "Accept All". Includes instant revocation via the footer "Cookie Settings" trigger.
- **AI Harness Stop Hook:** `.agents/hooks/quality-gate.mjs` automatically validates that no em dashes exist in touched files and TypeScript compiles with zero errors before completion.
- **SCA Clean:** Zero known vulnerabilities via `pnpm audit --prod --audit-level=high`.

---

## 📁 Repository Structure

```text
Portfolio/
├── .agents/
│   ├── hooks/
│   │   └── quality-gate.mjs      # Stop hook verifying zero em dashes and zero TypeScript errors
│   ├── hooks.json                # Harness hook configuration
│   ├── rules/
│   │   ├── code-style.md         # Coding style constraints and rules
│   │   └── project-context.md    # Active architectural context and tools
│   ├── skills/                   # Antigravity specialized agent skills
│   │   ├── a11y-wcag22/          # WCAG 2.2 AA & EAA 2026 procedures
│   │   ├── i18n-locales/         # Trilingual synchronization rules
│   │   ├── perf-cwv/             # Core Web Vitals budgets and pipeline
│   │   ├── sdd-workflow/         # SDD lifecycle procedures and quality gates
│   │   ├── seo-pseo/             # Schema.org JSON-LD structured data
│   │   └── tdd-react/            # TDD Red-Green-Refactor test standards
│   └── AGENTS.md                 # Root AI harness guidelines & rules
├── .github/
│   ├── dependabot.yml            # Automated weekly dependency governance
│   └── workflows/
│       └── deploy.yml            # Automated CI/CD deploy pipeline
├── .specify/
│   ├── memory/
│   │   └── constitution.md       # 7 Non-negotiable immutable project principles
│   └── templates/                # SDD spec, plan, tasks, and analysis templates
├── e2e/
│   ├── accessibility.spec.ts     # Playwright + axe-core WCAG 2.2 AA audit suite
│   ├── analytics-consent.spec.ts # Consent Mode v2 Basic E2E verification
│   └── critical-flows.spec.ts    # Playwright browser E2E flows (i18n, themes, nav)
├── scripts/
│   └── check-bundle-budget.mjs   # Automated production bundle size budget verifier
├── specs/
│   └── harness-compliance/       # Full SDD feature specs (spec, plan, tasks, analysis)
├── src/
│   ├── components/               # React UI components (Hero, About, Skills, etc.)
│   │   └── projects/             # 69 Detailed Project Case Studies
│   ├── contexts/                 # ThemeContext, LanguageContext, ConsentContext providers
│   ├── data/                     # Localized AI chatbot FAQ knowledge base
│   ├── lib/
│   │   └── analytics.ts          # GA4 Consent Mode v2 dynamic loader & cookie purger
│   ├── locales/                  # Trilingual dictionaries (en.ts, ua.ts, es.ts)
│   ├── security/                 # Automated contact credential security scanner
│   ├── test/                     # Vitest test setup and matchers
│   ├── App.tsx                   # Main layout component with lazy project loading
│   └── main.tsx                  # Application entrypoint
├── .lighthouserc.json            # Lighthouse CI performance & quality assertions
├── playwright.config.ts          # Playwright test configuration
├── vitest.config.ts              # Vitest test configuration with coverage ratchets
├── ARCHITECTURE.md               # Architecture and system documentation
├── DESIGN_SYSTEM.md              # UI/UX design tokens and constraints
├── SECURITY.md                   # DevSecOps policy and security specs
└── package.json                  # Dependencies, scripts, and build tasks
```

---

## 💻 Local Development & Quality Gates

```bash
# 1. Clone the repository
git clone https://github.com/YusupovWebArt/Portfolio.git

# 2. Install dependencies
pnpm install

# 3. Start local development server
pnpm dev

# 4. Run automated TDD unit & component specs
pnpm test

# 5. Run test coverage with ratchet verification
pnpm test:coverage

# 6. Run Playwright E2E, Consent Mode & WCAG 2.2 AA accessibility audits
pnpm test:e2e

# 7. Check bundle size budgets
pnpm check:budget

# 8. Run Lighthouse CI performance audit
pnpm audit:lhci

# 9. Run unified complete quality gate (SAST + TDD + E2E + SCA + Build + Budget)
pnpm verify

# 10. Build production bundle
pnpm build
```

---

## 🚦 GitHub Actions CI/CD Pipeline

Every push to `master` triggers an automated quality and deployment pipeline:

1. **SAST Type Verification:** `pnpm exec tsc --noEmit`
2. **SAST ESLint Guardrails:** `pnpm lint`
3. **TDD Automated Tests:** `pnpm test` (29 Vitest specs)
4. **SCA Vulnerability Audit:** `pnpm audit --prod --audit-level=high`
5. **Build Production Bundle:** `pnpm build`
6. **Bundle Budget Verification:** `pnpm check:budget` (Main < 200 KB, Initial < 450 KB)
7. **Install Playwright Chromium:** `pnpm exec playwright install --with-deps chromium`
8. **A11y & E2E Audits:** `pnpm test:e2e` (11 Playwright & axe-core specs)
9. **Lighthouse CI Audit:** `pnpm audit:lhci` (CWV budgets)
10. **Deploy to GitHub Pages:** Automated deploy of verified `dist/` to `gh-pages`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
