---
name: a11y-wcag22
description: European Accessibility Act (EAA 2026 / EN 301 549) and WCAG 2.2 AA compliance standards, keyboard navigation, and semantic DOM rules.
---

# Accessibility Skill: WCAG 2.2 AA and European Accessibility Act (EAA 2026)

This skill governs web accessibility requirements for all UI components in the portfolio.

---

## 1. Regulatory Context (2026)

Under the **European Accessibility Act (EAA 2026 / EN 301 549)**, digital services and professional platforms targeting the EU must comply with WCAG 2.2 Level AA. Automated axe-core scans provide the primary CI audit trail.

---

## 2. Core Technical Standards

### A. Semantic Landmarks
Every page layout must structure content using native HTML5 landmark elements:
- `<header>`: Main navigation and trilingual language switcher.
- `<main>`: Primary content area with a single `<h1>`.
- `<section>`: Titled sections with accessible `aria-labelledby` or `aria-label`.
- `<footer>`: Copyright, contact decryption triggers, and legal disclaimers.

### B. Keyboard Operability
- **Tab Sequence:** Natural visual order. Interactive elements (`<a>`, `<button>`, `<input>`) must receive visible focus rings (`focus-visible:ring-2 focus-visible:ring-purple-500`).
- **Modal Dismissal:** Modals (such as `ProjectDetail` and `ChatModal`) MUST listen to the `Escape` key and close immediately.
- **Focus Trap:** When a modal is open, keyboard focus must stay trapped inside the modal until dismissed.
- **Background Scroll Lock:** Prevent background body scrolling when dialogs are active.

### C. Color Contrast & Theme Resiliency
- Normal text (< 18pt or < 14pt bold) must achieve a minimum contrast ratio of **4.5:1** against its background.
- Large text and graphical UI boundaries must achieve at least **3:1**.
- Must be validated in both Dark (`#0f172a` slate) and Light (`#f8fafc` white/slate) themes.

### D. Accessible Images & Icons
- Informational images must provide concise, descriptive `alt` text.
- Decorative icons (e.g., Lucide SVG icons alongside text labels) must have `aria-hidden="true"`.
- Standalone icon buttons must have `aria-label="Description of action"`.
