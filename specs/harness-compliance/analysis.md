# Baseline & Impact Analysis: AI Harness Compliance

## 1. Executive Summary & Objective
- **Feature Scope**: Baseline measurement prior to executing the 7-phase AI Harness compliance plan (`specs/harness-compliance`).
- **Baseline Date**: 2026-10-08
- **Environment**: Node.js v24+, Windows 10, Vite 8.2, Vitest 5.0, Playwright 1.63, Chromium.

## 2. Test Coverage Metrics
*Measured via Vitest coverage reporter with @vitest/coverage-v8.*

| Metric | Baseline | Target | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Statements | 25.30% | >= 30.00% | 30.47% | PASSED (Ratcheted) |
| Branches | 13.42% | >= 15.00% | 16.66% | PASSED (Ratcheted) |
| Functions | 10.86% | >= 14.00% | 15.29% | PASSED (Ratcheted) |
| Lines | 26.09% | >= 30.00% | 31.50% | PASSED (Ratcheted) |

## 3. Bundle Size Analysis
*Measured from production build output (`dist/`) via `scripts/check-bundle-budget.mjs`.*

| Asset / Chunk | Baseline Size (Raw) | Baseline Size (Gzip) | Budget Limit | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Main Entry (`index-*.js`) | 199.04 KB | 53.91 KB | < 200 KB (< 60 KB gz) | 116.18 KB (27.26 KB gz) | PASSED |
| Vendor Chunk (`vendor-*.js`) | 189.59 KB | 59.61 KB | - | 185.15 KB (57.57 KB gz) | PASSED |
| Locales Chunk (`locales-*.js`) | Included in Main | Included in Main | - | 96.76 KB (31.28 KB gz) | PASSED (Split) |
| Projects Data (`projects-data-*.js`) | 433.70 KB (Eager) | 95.53 KB | Deferred / Split | 423.55 KB (92.73 KB gz) | PASSED (Deferred) |
| Vendor Icons (`vendor-icons-*.js`) | 19.91 KB | 8.08 KB | - | 19.75 KB (7.90 KB gz) | PASSED |
| Total Initial JS (Eager) | 842.95 KB | 217.55 KB | < 450 KB (< 130 KB gz) | 418.54 KB (124.43 KB gz) | PASSED (-50.3%) |

## 4. Lighthouse & Core Web Vitals
*Targeted via eliminating 433 KB critical blocking JS execution on boot.*

| Metric | Baseline | Budget / Constitution Threshold | Post-Implementation Status |
| :--- | :--- | :--- | :--- |
| Initial JS Parse Overhead | 842.95 KB (217.55 KB gz) | < 450 KB (< 130 KB gz) | 418.54 KB (124.43 KB gz) - Slashed by 50.3% |
| Projects Data Blocking | Eager in boot path | Deferred / Lazy loaded | Completely removed from boot modulepreloads |
| Cumulative Layout Shift (CLS) | 0.00 | 0.00 | Maintained 0.00 with fixed fallback skeleton |
| Accessibility Score | 0.96 - 1.00 | >= 0.95 | Maintained 1.00 with WCAG 2.2 AA banner |
| Best Practices Score | 1.00 | >= 0.95 | Maintained 1.00 |
| SEO Score | 1.00 | 1.00 | Maintained 1.00 |

## 5. Automated Accessibility Audit (axe-core)
*Measured via Playwright axe-core scan on desktop and mobile across 11 test suites.*

| Violation Severity | Baseline Count | Target Count | Post-Implementation Count | Status |
| :--- | :--- | :--- | :--- | :--- |
| Critical | 0 | 0 | 0 | PASSED |
| Serious | 0 | 0 | 0 | PASSED |
| Moderate | 0 | 0 | 0 | PASSED |
| Minor | 0 | 0 | 0 | PASSED |

## 6. Security & Privacy Audit
- **Exposed Contact Credentials**: Eliminated raw phone from `index.html` JSON-LD schema & noscript. Runtime decryption verified by automated unit scanner `contacts.test.ts`.
- **Third-Party Script Execution**: Google Analytics 4 transitioned to Consent Mode v2 Basic mode (`analytics-consent.spec.ts` verifies zero network calls before consent).
- **Documentation Verification**: Removed inaccurate "sub-second CWV" and "cookie-free" claims from `README.md` and project cards. Replaced with accurate, verifiable descriptions.

## 7. Conclusions and Key Findings
- **TBT Bottleneck Resolved**: Deferring the 423.55 KB `projects-data` chunk and splitting `locales` into its own chunk dropped initial eager JS by over 50%, reducing main thread parsing overhead.
- **Full Harness Enforcement**: With strict TDD red-green cycles, Stop hooks, and coverage ratchets, all code changes now strictly follow Constitution Principles 1 through 7.
