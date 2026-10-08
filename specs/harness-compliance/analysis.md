# Baseline & Impact Analysis: AI Harness Compliance

## 1. Executive Summary & Objective
- **Feature Scope**: Baseline measurement prior to executing the 7-phase AI Harness compliance plan (`specs/harness-compliance`).
- **Baseline Date**: 2026-10-08
- **Environment**: Node.js v24+, Windows 10, Vite 8.2, Vitest 5.0, Playwright 1.63, Chromium.

## 2. Test Coverage Metrics
*Measured via Vitest coverage reporter with @vitest/coverage-v8.*

| Metric | Baseline | Target | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Statements | 25.30% | >= 50.00% | Pending | In Progress |
| Branches | 13.42% | >= 40.00% | Pending | In Progress |
| Functions | 10.86% | >= 40.00% | Pending | In Progress |
| Lines | 26.09% | >= 50.00% | Pending | In Progress |

## 3. Bundle Size Analysis
*Measured from production build output (`dist/`).*

| Asset / Chunk | Baseline Size (Raw) | Baseline Size (Gzip) | Budget Limit | Actual Post-Implementation |
| :--- | :--- | :--- | :--- | :--- |
| Main Entry (`index-*.js`) | 199.04 KB | 53.91 KB | < 200 KB (< 60 KB gz) | Pending |
| Vendor Chunk (`vendor-*.js`) | 189.59 KB | 59.61 KB | - | Pending |
| Projects Data (`projects-data-*.js`) | 433.70 KB | 95.53 KB | Deferred / Split | Pending |
| Project Detail (`ProjectDetail-*.js`) | 28.84 KB | 6.23 KB | Lazy chunk | Pending |
| Vendor Icons (`vendor-icons-*.js`) | 19.91 KB | 8.08 KB | - | Pending |
| CSS Bundle (`index-*.css`) | 122.35 KB | 15.74 KB | - | Pending |
| Total Initial JS (Eager) | 842.95 KB | 217.55 KB | < 450 KB (< 130 KB gz) | Pending |

## 4. Lighthouse & Core Web Vitals
*Measured via Lighthouse CI / Chrome DevTools.*

| Metric | Baseline | Budget / Constitution Threshold | Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Performance Score | 0.55 - 0.61 | >= 0.90 | Pending | In Progress |
| Largest Contentful Paint (LCP) | ~1.5s | <= 1.2s | Pending | In Progress |
| Total Blocking Time (TBT) | ~1,400ms | <= 200ms | Pending | In Progress |
| Cumulative Layout Shift (CLS) | 0.00 | 0.00 | Pending | In Progress |
| First Contentful Paint (FCP) | ~0.5s | <= 0.8s | Pending | In Progress |
| Accessibility Score | 0.96 - 1.00 | >= 0.95 | Pending | In Progress |
| Best Practices Score | 1.00 | >= 0.95 | Pending | In Progress |
| SEO Score | 1.00 | 1.00 | Pending | In Progress |

## 5. Automated Accessibility Audit (axe-core)
*Measured via Playwright axe-core scan on desktop and mobile.*

| Violation Severity | Baseline Count | Target Count | Post-Implementation Count |
| :--- | :--- | :--- | :--- |
| Critical | 0 | 0 | Pending |
| Serious | 0 | 0 | Pending |
| Moderate | 0 | 0 | Pending |
| Minor | 0 | 0 | Pending |

## 6. Security & Privacy Audit
- **Exposed Contact Credentials**: Raw telephone `+34642413967` exposed in `index.html:87` JSON-LD schema (violates Constitution Principle 2).
- **Third-Party Script Execution**: Google Analytics (`gtag.js`) loads and executes unconditionally on page load in `index.html:128-146`, setting cookies and transmitting data without visitor consent (violates RGPD/LSSI-CE and Principle 2).
- **Documentation Verification**: Claims of "sub-second Core Web Vitals" and "cookie-free architecture" are factually inaccurate given the baseline findings above and require immediate adjustment.

## 7. Conclusions and Key Findings
- The critical bottleneck for Lighthouse Performance (0.55-0.61) is Total Blocking Time (1,400ms), caused by parsing and executing 433 KB of project data during initial boot.
- Fixing privacy requires two synchronized actions: stripping raw contact data from JSON-LD schema, and transitioning GA4 to an opt-in Consent Mode v2 Basic loader with accessible UI banner.
