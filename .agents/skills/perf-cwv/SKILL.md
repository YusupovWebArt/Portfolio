---
name: perf-cwv
description: Core Web Vitals (CWV) budgets, sub-second performance standards, WebP image pipeline, and Vite Rolldown bundle optimization.
---

# Performance Skill: Core Web Vitals and Bundle Budget

This skill governs runtime performance and asset delivery for the Artur Yusupov Portfolio application.

---

## 1. Core Web Vitals (CWV) 2026 Budgets

All production builds must satisfy the following thresholds under mobile 4G throttled conditions:

| Metric | Target | Hard Ceiling | Description |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `<= 1.0s` | `<= 1.2s` | Render time of the hero headline or primary visual element |
| **INP (Interaction to Next Paint)** | `<= 50ms` | `<= 100ms` | Responsiveness to clicks, language changes, and modal opens |
| **CLS (Cumulative Layout Shift)** | `0.00` | `<= 0.05` | Zero unexpected shifts; reserved aspect ratio for all media |
| **FCP (First Contentful Paint)** | `<= 0.6s` | `<= 0.8s` | Time until the first DOM text or SVG is painted |

---

## 2. Asset Pipeline Rules

### A. Showcase Images
- Format: Next-gen `.webp` or `.avif` exclusively. Never serve raw uncompressed `.png` or `.jpg` in showcase grids.
- Dimensions: Always declare explicit `width` and `height` or CSS aspect-ratio classes (`aspect-video`, `h-48`) to prevent layout shifts.
- Loading: Use `loading="lazy"` and `decoding="async"` on all images below the fold.

### B. JavaScript Bundle Budget
- **Main App Bundle:** Must not exceed `200 KB` (`< 60 KB` gzip).
- **Vendor Splitting:** Third-party libraries (`lucide-react`, `react-icons`) are isolated into dedicated chunks via `vite.config.ts` manual chunks.
- **Dynamic Imports:** Modal details (`ProjectDetail.tsx`) and heavy sub-views must use `React.lazy()` for on-demand loading.

### C. Caching Strategy
- The production Service Worker (`public/sw.js`) caches static assets using a **Stale-While-Revalidate** strategy, serving instant cached responses while updating assets in the background.
