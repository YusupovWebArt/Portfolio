# Artur Yusupov — Professional Portfolio Website

[![CI/CD & Deploy to GitHub Pages](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/YusupovWebArt/Portfolio/actions/workflows/deploy.yml)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://github.com/YusupovWebArt/Portfolio/security/dependabot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, premium single-page application (SPA) portfolio website showcasing my expertise as an AI-Augmented Full-Stack Web Engineer. Built using the latest modern frontend stack, fully optimized for sub-second loading, structured SEO metadata, and hardened web security.

🔗 **Live Website:** [https://yusupovwebart.github.io/Portfolio/](https://yusupovwebart.github.io/Portfolio/)

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 (SPA)
- **Programming Language:** TypeScript 6.x (Strict Type Safety)
- **Styling & Theme:** Tailwind CSS v4 (Utility-first, CSS variables, native selectors)
- **Build Tool:** Vite 8.x (Rolldown bundler for optimized production chunks)
- **Icons:** React Icons & Lucide Icons
- **CI/CD:** GitHub Actions (Automated build, lint, typecheck, and deploy pipeline)
- **Dependency Security:** GitHub Dependabot (Automated dependency scanning and patch upgrades)

---

## ⚡ Technical Highlights & Features

### 🚀 1. Automated CI/CD & Security Pipelines
- **Continuous Integration:** Every commit pushed to `master` triggers a GitHub Action runner that installs dependencies, scans for vulnerabilities, checks types (`tsc --noEmit`), and lints code (`eslint .`).
- **Continuous Deployment:** On successful checks, the runner compiles the static bundle and force-deploys it directly to the `gh-pages` branch.
- **Dependabot Guardrails:** Configured to automatically scan and suggest updates, grouped to avoid PR noise, and locked to exclude breaking major versions of compiler/type frameworks.

### 🛡️ 2. Hardened Web Security & Metadata
- **HTTP Security Headers:** Implemented client-side security boundaries via HTML meta tags:
  - **Content Security Policy (CSP):** Restricts script, style, connection, and image load sources to origin and trusted third-party trackers (Google Tag Manager, Google Fonts).
  - **Referrer Policy:** Configured to `strict-origin-when-cross-origin`.
  - **Permissions Policy:** Locks access to hardware APIs (camera, microphone, geolocation).
- **Anti-Scraping Contact Obfuscation:** Contact details (Email, Phone, WhatsApp, Telegram links) are Base64-encrypted within the source code. Decryption is performed dynamically on client-side mounting and hover/click interactions to prevent automated harvesting.

### 📈 3. Technical SEO & Performance
- **Optimized Assets:** Core assets (hero image, critical badges) are preloaded and compressed using next-generation WebP formats.
- **Lazy Loading:** Configured lazy loading for secondary project thumbnails and screenshot modal slides.
- **Microdata Integration:** Page metadata is rich-structured using JSON-LD schema (Person and WebSite specifications) to optimize search rankings and Google AI Overview citations.
- **noscript Fallback:** Built an styled HTML fallback section inside a `#seo-fallback` wrapper to ensure indexability of core project descriptions by web crawlers even when JavaScript is disabled.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
