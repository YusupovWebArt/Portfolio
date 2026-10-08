# Feature Specification: AI Harness Compliance (SDD + SDLC + TDD)

## 1. Context and Problem Statement
- **Background**: The Artur Yusupov Portfolio codebase requires end-to-end alignment with the 2026 AI-Harness engineering standards (Spec-Driven Development, deterministic SDLC quality gates, and strict Test-Driven Development).
- **Problem Statement**:
  - The previous setup had document descriptions without automated enforcement mechanisms.
  - Direct execution of Google Analytics 4 violated EU RGPD/LSSI-CE and Constitution Principle 2 prior to explicit consent.
  - Raw contact telephone was exposed in `index.html` JSON-LD schema, violating Principle 2.
  - Unverified performance claims existed in documentation while initial bundle size (433 KB eager project data) caused high Total Blocking Time (TBT ~1.4s).
  - Hardcoded user-facing strings existed in multiple components (`Skills.tsx`, `About.tsx`, `Footer.tsx`, `App.tsx`, `AiWorkflow.tsx`).
- **Scope**:
  - In-scope: SDD templates and workflow skill, baseline metrics recording, contact scanner test and JSON-LD cleanup, GA4 Consent Mode v2 Basic implementation with accessible banner, i18n dictionary completion, project data code-splitting for sub-second performance, quality stop-gates and hook automation.
  - Out-of-scope: Redesigning portfolio visual branding or altering external live hosting environments.

## 2. User Stories and Functional Requirements
- **User Stories**:
  - US-1 (Visitor Privacy): As a site visitor from the EU, I want all analytics tracking blocked until I give explicit opt-in consent, and I want an easy way to revoke consent at any time from the footer.
  - US-2 (Visitor Performance): As a mobile or desktop visitor, I want fast page load without blocking threads caused by eager loading of 69 project case studies.
  - US-3 (Multilingual Visitor): As a Ukrainian or Spanish speaker, I want all UI text, workflows, and skills translated into my chosen language.
  - US-4 (AI Agent & Contributor): As an AI pair programmer, I want automated quality stop-gates and strict TDD verification so that no regressions or type errors can be introduced.
- **Functional Requirements (FR)**:
  - FR-1 (Security): Zero raw email, phone number, or credentials in static assets or source code outside Base64 obfuscation.
  - FR-2 (Consent Management): Google Analytics 4 script (`gtag.js`) must not load or transmit data until explicit user opt-in via Consent Banner.
  - FR-3 (Consent Revocation): Cookie settings link in footer allows instant revocation and purge of analytics cookies.
  - FR-4 (i18n Parity): All strings in `Skills`, `About`, `Footer`, `App`, and `AiWorkflow` mapped to `en`, `ua`, and `es` dictionaries.
  - FR-5 (Performance): Project case studies data code-split or deferred to keep initial JS bundle under 200 KB (< 60 KB gzip) and reduce TBT below 200ms.
  - FR-6 (Harness Automation): Stop hook blocks agent completion if type errors, lint issues, or failing tests exist in modified files.

## 3. Non-Functional Requirements (NFR)
- **NFR-1 (Type Safety)**: Strict TypeScript verification with zero `any` types (`tsc --noEmit`).
- **NFR-2 (Security & Privacy)**: Full compliance with EU RGPD, LSSI-CE, and LOPDGDD.
- **NFR-3 (Performance)**: Core Web Vitals target: desktop Performance score >= 0.90, LCP <= 1.2s, TBT <= 200ms, CLS = 0.00.
- **NFR-4 (i18n)**: 100% key parity across `en`, `ua`, and `es`.
- **NFR-5 (Accessibility)**: Full keyboard operability and WCAG 2.2 AA / EAA 2026 conformance with zero axe errors on banner and views.
- **NFR-6 (Style Rules)**: Zero em dashes (use standard hyphens `-` only), zero emojis in project/technical data.

## 4. Architectural Boundaries and Decisions
- **Decision 1 (Consent Mode)**: Adopt Google Consent Mode v2 Basic mode. Script tag removed from `index.html`; loaded dynamically only upon user opt-in.
- **Decision 2 (Project Data Splitting)**: Migrate from eager `import.meta.glob(..., { eager: true })` to lazy dynamic imports for detailed project data.
- **Decision 3 (TDD Proofs)**: Every behavioral code modification must be preceded by a failing test with captured failure log in `tasks.md`.

## 5. Verification and Acceptance Criteria
- [ ] Automated scanner test asserts zero raw telephone/email in `index.html` and `src/`.
- [ ] Unit and E2E tests verify GA4 does not make network requests prior to consent.
- [ ] E2E axe scan passes with 0 critical/serious/moderate accessibility violations.
- [ ] All i18n keys synchronized and verified by automated parity test.
- [ ] Production build succeeds and bundle budgets are enforced.
