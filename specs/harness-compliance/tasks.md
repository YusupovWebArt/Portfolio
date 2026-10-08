# Task Breakdown: AI Harness Compliance (SDD + SDLC + TDD)

## Execution Rules
1. Every implementation task with behavioral logic must have a corresponding Red test.
2. The failing test must be executed and its failure output captured in the "Red Failure Proof" field before writing production code.
3. Once green, perform refactoring if necessary while maintaining all tests passing.
4. Keep commit history clean and structured: `test(...)` -> `feat/fix(...)` -> `refactor(...)`.
5. Zero em dashes in code, comments, or documentation; use standard hyphens `-` only.

---

## Phase 0: SDD Scaffolding & Baseline

### Task 0.1: Create SDD Templates and Workflow Skill
- **Status**: DONE
- **Dependencies**: None
- **Artifacts Created**:
  - `.specify/templates/spec.md`
  - `.specify/templates/plan.md`
  - `.specify/templates/tasks.md`
  - `.specify/templates/analysis.md`
  - `.agents/skills/sdd-workflow/SKILL.md`
- **Review Check**:
  - [x] Zero em dashes across all created templates and skill file.
  - [x] Includes Red-first TDD and failure proof requirements.

### Task 0.2: Constitution Amendments
- **Status**: DONE
- **Dependencies**: Task 0.1
- **File Modified**: `.specify/memory/constitution.md`
- **Amendments**:
  - Principle 2: Opt-in Consent Mode v2 Basic requirement for Google Analytics.
  - Principle 4: Technical brand names and acronyms allowed in English.
  - Principle 7: Strict TDD Red test proof requirement.
- **Review Check**:
  - [x] Zero em dashes in amended text.

### Task 0.3: Baseline Measurements & Feature Specification
- **Status**: DONE
- **Dependencies**: Task 0.2
- **Artifacts Created**:
  - `specs/harness-compliance/spec.md`
  - `specs/harness-compliance/plan.md`
  - `specs/harness-compliance/tasks.md`
  - `specs/harness-compliance/analysis.md`
- **Baseline Data Recorded**:
  - Vitest coverage: 25.30% Stmts / 13.42% Branch / 10.86% Funcs / 26.09% Lines.
  - Initial JS bundle: 842.95 KB raw (217.55 KB gzip) due to eager `projects-data` (433.70 KB).
  - Lighthouse performance: 0.55 - 0.61 with TBT ~1,400ms.
  - Exposed phone in `index.html:87`.

---

## Phase 1: Security & Documentation Honesty

### Task 1.1: Automated Contact Credential Scanner Test
- **Status**: DONE
- **Dependencies**: Phase 0
- **Red Test File**: `src/security/contacts.test.ts`
- **Red Test Case**: `it('should detect and fail if raw email or telephone exists in index.html outside Base64', ...)`
- **Red Failure Proof**:
  ```text
  FAIL src/security/contacts.test.ts > Security & Privacy: Contact Obfuscation Specification > should not expose raw telephone or personal email in index.html outside Base64
  AssertionError: Raw phone number found in index.html: +34642413967: expected [ '+34642413967', index: 4292, ... ] to be null
  - Expected: null
  + Received: ["+34642413967"]
  ```
- **Green Implementation**:
  - Files modified: `index.html` (removed raw telephone from JSON-LD schema and noscript section)
- **Green Verification Proof**:
  ```text
  ✓ src/security/contacts.test.ts (2 tests) 138ms
  Test Files  1 passed (1)
  Tests  2 passed (2)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm test`.

### Task 1.2: Documentation and Showcase Honesty Alignment
- **Status**: DONE
- **Dependencies**: Task 1.1
- **Files Modified**: `README.md`, `src/components/projects/react/webart-react-portfolio.tsx`, `SECURITY.md`
- **Scope**:
  - Removed unverified "sub-second Core Web Vitals" and "cookie-free" claims.
  - Replaced with accurate description of current architecture and opt-in Consent Mode v2 Basic mode.
- **Review Check**:
  - [x] Zero em dashes in updated markdown or TSX strings.
  - [x] Passes `pnpm exec tsc --noEmit` and `pnpm lint`.

---

## Phase 2: Cookie Consent Management for GA4 (TDD)

### Task 2.1: ConsentContext & Storage Unit Specification (Red)
- **Status**: DONE
- **Dependencies**: Phase 1
- **Red Test File**: `src/contexts/ConsentContext.test.tsx`
- **Red Failure Proof**:
  ```text
  FAIL src/contexts/ConsentContext.test.tsx [ src/contexts/ConsentContext.test.tsx ]
  Error: Failed to resolve import "./ConsentContext" from "src/contexts/ConsentContext.test.tsx". Does the file exist?
  ```
- **Green Implementation**:
  - `src/contexts/ConsentContext.tsx`
  - `src/lib/analytics.ts`
- **Green Verification Proof**:
  ```text
  ✓ src/contexts/ConsentContext.test.tsx (8 tests) 877ms
  Test Files  1 passed (1)
  Tests  8 passed (8)
  ```

### Task 2.2: Consent Banner Component & E2E Analytics Blocking (Red)
- **Status**: DONE
- **Dependencies**: Task 2.1
- **Red Test File**: `e2e/analytics-consent.spec.ts`
- **Red Failure Proof**:
  ```text
  1) [chromium] › e2e/analytics-consent.spec.ts:5:3 › should not make any network requests to Google Analytics before explicit user consent
     Error: Unexpected tracking requests before consent: https://www.googletagmanager.com/gtag/js?id=G-1Q3H7DDTSG, https://region1.google-analytics.com/g/collect?...
     Expected length: 0
     Received length: 2
  2) [chromium] › e2e/analytics-consent.spec.ts:35:3 › should pass axe-core accessibility audit on consent banner
     Error: No elements found for include in page Context: [data-testid="consent-banner"]
  ```
- **Green Implementation**:
  - `src/components/ConsentBanner.tsx`
  - `src/components/CookiePolicyModal.tsx`
  - `src/components/Footer.tsx` (settings trigger)
  - `src/App.tsx` (mount ConsentProvider and ConsentBanner)
  - `index.html` (removed inline gtag.js)
- **Green Verification Proof**:
  ```text
  ok 4 [chromium] › e2e/analytics-consent.spec.ts:5:3 › should not make any network requests before consent (986ms)
  ok 5 [chromium] › e2e/analytics-consent.spec.ts:35:3 › should pass axe-core accessibility audit on consent banner (2.6s)
  ok 6 [chromium] › e2e/analytics-consent.spec.ts:54:3 › should load Google Analytics when visitor clicks Accept (3.6s)
  ok 7 [chromium] › e2e/analytics-consent.spec.ts:89:3 › should not load Google Analytics when Decline and allow revoking (1.5s)
  4 passed (15.8s)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm test:all` (6 unit suites, 11 e2e tests).

---

## Phase 3: Trilingual Localization Parity (i18n)

### Task 3.1: Hardcoded Text Scanner & Dictionary Expansion
- **Status**: DONE
- **Dependencies**: Phase 2
- **Red Test File**: `src/locales/i18n-scanner.test.ts`
- **Red Failure Proof**:
  ```text
  FAIL src/locales/i18n-scanner.test.ts (5 failed)
  1) should define required UI keys in all 3 language dictionaries: Missing skills.chooseSpecialization in en
  2) should not contain hardcoded strings in Skills.tsx: found "Choose Specialization:" and "Swipe"
  3) should not contain hardcoded strings in About.tsx: found "Available for Projects" and "My Journey"
  4) should not contain hardcoded loading string in App.tsx: found "Loading project details..."
  5) should contain zero em dashes across all locale dictionary files: found 6 em dashes in locales/en.ts
  ```
- **Green Implementation**:
  - `src/locales/types.ts`: added `app.loadingDetails`, `about.availableForProjects`, `about.myJourney`, `skills.chooseSpecialization`, `skills.swipe`, `footer.techUsing`, `aiWorkflow.categories`.
  - `src/locales/en.ts`, `ua.ts`, `es.ts`: completed translations across all 3 languages, purged all em dashes.
  - `src/components/Skills.tsx`, `About.tsx`, `Footer.tsx`, `App.tsx`, `AiWorkflow.tsx`: wired localized keys dynamically.
- **Green Verification Proof**:
  ```text
  ✓ src/locales/i18n.test.ts (4 tests) 38ms
  ✓ src/locales/i18n-scanner.test.ts (5 tests) 20ms
  Test Files  2 passed (2)
  Tests  9 passed (9)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code, dictionaries, or comments.
  - [x] Passes `pnpm test`, `pnpm exec tsc --noEmit`, and `pnpm lint`.

---

## Phase 4: Performance & Project Code-Splitting

### Task 4.1: Bundle Budget Analyzer & Project Data Code-Splitting
- **Status**: DONE
- **Dependencies**: Phase 3
- **Objective**: Defer 433 KB `projects-data` from initial load to slash TBT below 200ms.
- **Red Test File**: `scripts/check-bundle-budget.mjs`
- **Red Failure Proof**:
  ```text
  --- Initial Eager JavaScript Chunks (Boot Path) ---
  - index-DbVpZcSh.js: 222.50 KB raw | 61.00 KB gz
  - rolldown-runtime-hePW80VL.js: 0.70 KB raw | 0.42 KB gz
  - vendor-CbYonmBs.js: 185.15 KB raw | 57.57 KB gz
  - vendor-icons-Bw4cq9JS.js: 19.75 KB raw | 7.90 KB gz
  - projects-data-BAlC_vWF.js: 423.55 KB raw | 92.73 KB gz
  ----------------------------------------------------
  Total Initial JS: 851.65 KB raw | 219.61 KB gzip
  Main Entry JS:    222.50 KB raw | 61.00 KB gzip
  ----------------------------------------------------

  ❌ BUNDLE BUDGET CHECKS FAILED:
    - Violation: projects-data chunk is eagerly preloaded in index.html boot path. Must be deferred/code-split.
    - Violation: Total initial JS raw size (851.65 KB) exceeds budget of 450.00 KB.
    - Violation: Total initial JS gzip size (219.61 KB) exceeds budget of 130.00 KB.
    - Violation: Main entry chunk raw size (222.50 KB) exceeds budget of 200.00 KB.
  ```
- **Green Implementation**:
  - `src/App.tsx`: lazily loaded `Projects.tsx` with Suspense spinner fallback.
  - `vite.config.ts`: added manual chunking for `src/locales/` (`locales` chunk, 96.76 KB raw / 31.28 KB gzip).
  - `scripts/check-bundle-budget.mjs`: added deterministic budget analyzer script.
  - `package.json`: added `"check:budget"` and integrated into `"verify"`.
- **Green Verification Proof**:
  ```text
  --- Initial Eager JavaScript Chunks (Boot Path) ---
  - index-CoBzjqT4.js: 116.18 KB raw | 27.26 KB gz
  - rolldown-runtime-hePW80VL.js: 0.70 KB raw | 0.42 KB gz
  - vendor-CbYonmBs.js: 185.15 KB raw | 57.57 KB gz
  - locales-B7_L73se.js: 96.76 KB raw | 31.28 KB gz
  - vendor-icons-Bw4cq9JS.js: 19.75 KB raw | 7.90 KB gz
  ----------------------------------------------------
  Total Initial JS: 418.54 KB raw | 124.43 KB gzip
  Main Entry JS:    116.18 KB raw | 27.26 KB gzip
  ----------------------------------------------------

  ✅ ALL BUNDLE BUDGET CHECKS PASSED!
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm test:all` (29 unit tests, 11 e2e tests).
  - [x] Passes `pnpm check:budget`.

---

## Phase 5: Quality Gate Automation

### Task 5.1: Agent Stop Hook & Git Hooks
- **Status**: TODO
- **Dependencies**: Phase 4
- **Objective**: Implement `.agents/hooks.json` Stop hook and coverage ratchets.

---

## Phase 6: Final Verification & Documentation

### Task 6.1: Full Verification & Walkthrough
- **Status**: TODO
- **Dependencies**: Phase 5
