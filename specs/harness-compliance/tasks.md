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
- **Status**: TODO
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
  [To be recorded]
  ```

### Task 2.2: Consent Banner Component & E2E Analytics Blocking (Red)
- **Status**: TODO
- **Dependencies**: Task 2.1
- **Red Test File**: `e2e/analytics-consent.spec.ts`
- **Green Implementation**:
  - `src/components/ConsentBanner.tsx`
  - `src/components/Footer.tsx` (settings trigger)
  - `index.html` (remove inline gtag.js)

---

## Phase 3: Trilingual Localization Parity (i18n)

### Task 3.1: Hardcoded Text Scanner & Dictionary Expansion
- **Status**: TODO
- **Dependencies**: Phase 2
- **Components to Localize**: `Skills.tsx`, `About.tsx`, `Footer.tsx`, `App.tsx`, `AiWorkflow.tsx`.

---

## Phase 4: Performance & Project Code-Splitting

### Task 4.1: Bundle Budget Analyzer & Project Data Code-Splitting
- **Status**: TODO
- **Dependencies**: Phase 3
- **Objective**: Defer 433 KB `projects-data` from initial load to slash TBT below 200ms.

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
