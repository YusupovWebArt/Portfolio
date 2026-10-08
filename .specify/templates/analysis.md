# Baseline & Impact Analysis: [Feature Name]

## 1. Executive Summary & Objective
- **Feature Scope**: [Summary of feature or changes being analyzed]
- **Baseline Date**: [ISO Date]
- **Environment**: [Node version, OS, browser engines]

## 2. Test Coverage Metrics
*Measured via Vitest coverage reporter.*

| Metric | Baseline | Target | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Statements | % | % | % | [Pending/Met] |
| Branches | % | % | % | [Pending/Met] |
| Functions | % | % | % | [Pending/Met] |
| Lines | % | % | % | [Pending/Met] |

## 3. Bundle Size Analysis
*Measured from production build output (`dist/`).*

| Asset / Chunk | Baseline Size (Raw) | Baseline Size (Gzip) | Budget Limit | Actual Post-Implementation |
| :--- | :--- | :--- | :--- | :--- |
| Main Entry (`index-*.js`) | KB | KB | < 200 KB (< 60 KB gz) | KB |
| Vendor Chunk | KB | KB | - | KB |
| CSS Bundle (`index-*.css`) | KB | KB | - | KB |
| Total Initial JS | KB | KB | - | KB |

## 4. Lighthouse & Core Web Vitals
*Measured via Lighthouse CI / Chrome DevTools.*

| Metric | Baseline | Budget / Constitution Threshold | Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Performance Score | 0.00 | >= 0.90 | 0.00 | [Pending/Met] |
| Largest Contentful Paint (LCP) | s | <= 1.2s | s | [Pending/Met] |
| Total Blocking Time (TBT) | ms | <= 200ms | ms | [Pending/Met] |
| Cumulative Layout Shift (CLS) | 0.00 | 0.00 | 0.00 | [Pending/Met] |
| First Contentful Paint (FCP) | s | <= 0.8s | s | [Pending/Met] |
| Accessibility Score | 0.00 | >= 0.95 | 0.00 | [Pending/Met] |
| Best Practices Score | 0.00 | >= 0.95 | 0.00 | [Pending/Met] |
| SEO Score | 0.00 | 1.00 | 0.00 | [Pending/Met] |

## 5. Automated Accessibility Audit (axe-core)
*Measured via Playwright axe-core scan on desktop and mobile.*

| Violation Severity | Baseline Count | Target Count | Post-Implementation Count |
| :--- | :--- | :--- | :--- |
| Critical | 0 | 0 | 0 |
| Serious | 0 | 0 | 0 |
| Moderate | 0 | 0 | 0 |
| Minor | 0 | 0 | 0 |

## 6. Security & Privacy Audit
- **Exposed Contact Credentials**: [Raw email/phone instances in static files]
- **Third-Party Script Execution**: [Unconditional tracking scripts status]
- **Dependency Vulnerabilities**: [pnpm audit status]

## 7. Conclusions and Key Findings
- [Document insights, architectural bottlenecks, and trade-offs]
