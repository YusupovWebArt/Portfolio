# Implementation Plan: AI Harness Compliance (SDD + SDLC + TDD)

## 1. Executive Summary
- **Target Feature**: AI Harness Full Lifecycle Compliance (`specs/harness-compliance`)
- **Primary Objectives**:
  - Scaffold deterministic SDD templates, workflow procedures, and stop-gates.
  - Fix privacy violations: remove raw telephone from JSON-LD schema, enforce contact obfuscation with automated scanner test.
  - Implement Google Analytics 4 Consent Mode v2 Basic mode with trilingual opt-in consent banner and revocation link.
  - Eliminate hardcoded UI strings across all components, synchronizing `en`, `ua`, and `es` dictionaries.
  - Code-split project case studies data to eliminate main thread blocking and meet Core Web Vitals budgets.
  - Automate quality gates with `.agents/hooks.json` Stop hook, git hooks, and coverage ratcheting.
- **Guiding Principles**: Zero-`any` TypeScript, zero em dashes, zero emojis in project metadata, Red-first TDD.

## 2. Architectural Blueprint and Component Structure
- **New Modules / Components**:
  - `.specify/templates/`: `spec.md`, `plan.md`, `tasks.md`, `analysis.md`.
  - `.agents/skills/sdd-workflow/SKILL.md`: procedure for SDD phases and stop-gates.
  - `src/security/contacts.test.ts`: automated scanner verifying zero exposed plaintext contacts.
  - `src/contexts/ConsentContext.tsx`: cookie consent provider handling status, versioning, expiry, and storage.
  - `src/components/ConsentBanner.tsx`: trilingual, accessible cookie consent dialog conforming to WCAG 2.2 AA.
  - `src/lib/analytics.ts`: lazy loader for `gtag.js` triggering only after consent grant.
  - `src/components/CookiePolicyModal.tsx`: accessible cookie policy details modal.
  - `scripts/check-bundle-budget.mjs`: bundle analyzer enforcing Constitution limits on build artifacts.
  - `.agents/hooks.json` & `.agents/hooks/quality-gate.mjs`: agent termination guard blocking exit on quality errors.
- **Modified Modules / Components**:
  - `.specify/memory/constitution.md`: update Principles 2, 4, and 7.
  - `index.html`: remove exposed telephone in JSON-LD schema, remove unconditional gtag scripts.
  - `src/components/Footer.tsx`: add cookie settings button and link.
  - `src/components/Skills.tsx`, `About.tsx`, `App.tsx`, `AiWorkflow.tsx`: extract strings to locales.
  - `src/locales/types.ts`, `en.ts`, `ua.ts`, `es.ts`: expand with new translation keys.
  - `src/components/Projects.tsx`: lazy load or split full case study data from initial render.

## 3. Phased Execution Roadmap
- **Phase 0: SDD Scaffolding, Constitution Amendments & Baseline**
  - Templates created, `sdd-workflow` skill authored, Constitution updated.
  - Baseline metrics captured: test coverage, bundle chunks, Lighthouse CWV, axe violations.
- **Phase 1: Security & Documentation Honesty (TDD)**
  - Red test: `src/security/contacts.test.ts` scanning `index.html` and `src/`.
  - Green fix: strip raw telephone from JSON-LD schema.
  - Documentation audit: remove unverified sub-second and cookie-free claims from `README.md` and portfolio card.
- **Phase 2: Cookie Consent Management for GA4 (TDD)**
  - Red tests: unit tests for `ConsentContext`, E2E test verifying zero analytics network calls before consent.
  - Green implementation: `ConsentContext`, `ConsentBanner`, `src/lib/analytics.ts`, footer settings trigger.
  - A11y and keyboard verification.
- **Phase 3: Trilingual Localization Parity (i18n)**
  - Red test: automated scanner for hardcoded strings in components.
  - Green implementation: complete dictionary keys in `types.ts`, `en.ts`, `ua.ts`, `es.ts`.
- **Phase 4: Performance & Project Code-Splitting**
  - Red test: bundle budget check script failing if eager project data exceeds budget.
  - Green implementation: split project case studies data from card metadata.
- **Phase 5: Quality Gate Automation**
  - Implement `.agents/hooks.json` Stop hook, git hooks, coverage threshold ratchets.
- **Phase 6: Final Verification & Honest Documentation**
  - Final runs of `pnpm verify`, LHCI, comparison metrics in `analysis.md`, updated README.

## 4. Risk Matrix and Mitigations
| Risk | Probability | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| GA4 tracking lost if banner is confusing | Medium | Low | Clear trilingual copy, non-intrusive bottom banner, simple Accept/Decline. |
| Lazy loading project data breaks ProjectDetail modal | Medium | High | Maintain unified type contract, preload on card hover/click, test with Vitest and Playwright. |
| Bundle size regression | Low | High | Automated bundle budget script in build pipeline. |

## 5. Verification Pipeline and Quality Gates
- **Gate 1**: Red test failure captured in `tasks.md` prior to code generation.
- **Gate 2**: Green test verification captured in `tasks.md`.
- **Gate 3**: Strict type checking with zero `any` (`pnpm exec tsc --noEmit`).
- **Gate 4**: Zero em dashes verified across all touched files.
- **Gate 5**: Full validation suite passes (`pnpm verify`).
