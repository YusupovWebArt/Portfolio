# Project Context and Architecture Rules

Permanent context for AI coding agents operating in the Artur Yusupov Portfolio repository.

---

## 1. Technical Stack Overview

- **Core Framework:** React 19 (SPA Architecture)
- **Runtime Environment:** Node.js 24 LTS
- **Package Manager:** pnpm 11.x (NTFS global content-addressable store at `D:\.pnpm-store`)
- **Language:** TypeScript 6.x (Strict zero-`any` mode)
- **Bundler & Build Tool:** Vite 8.x (Rolldown bundler for optimized code-splitting)
- **Styling:** Tailwind CSS v4 with CSS variables and dark/light glassmorphism tokens
- **Internationalization:** Custom type-safe 3-language engine (`en`, `ua`, `es`)
- **PWA & Offline:** Service Worker (`public/sw.js`) with Stale-While-Revalidate caching
- **Hosting & CI/CD:** GitHub Pages automated via GitHub Actions on push to `master`

---

## 2. Directory Layout & Boundaries

```text
Portfolio/
├── .specify/
│   └── memory/
│       └── constitution.md     # Permanent non-negotiable principles
├── .agents/
│   ├── rules/                  # Always-active context and style constraints
│   └── skills/                 # Modular on-demand procedures (SKILL.md)
├── specs/                      # Feature-specific lifecycle specs (SDD)
├── public/                     # Static media, icons, manifest, service worker
│   ├── images/portfolio/       # 69 localized project assets (thumbs, sliders)
│   └── sw.js                   # Service Worker implementation
├── src/
│   ├── components/             # React UI components (Hero, About, Projects, etc.)
│   │   └── projects/           # 69 Detailed Project Case Studies
│   ├── contexts/               # Theme and Language context providers
│   ├── data/                   # AI chatbot FAQ data (chatFaq.ts)
│   ├── locales/                # Dictionaries: en.ts, ua.ts, es.ts, types.ts
│   ├── App.tsx                 # Root application component
│   └── main.tsx                # Client entrypoint and Service Worker registration
├── ARCHITECTURE.md             # High-level architecture documentation
├── DESIGN_SYSTEM.md            # UI/UX, typography scale, color tokens
├── SECURITY.md                 # Security policy, Base64 decryption, DevSecOps
├── ROADMAP.md                  # Strategic evolutionary roadmap
└── package.json                # Dependencies and build scripts
```

---

## 3. Protected Zones and Conventions

- **Case Studies (`src/components/projects/`):** All 69 projects follow the unified schema defined in `project-types.ts`. Preserve all trilingual copy, technical highlights, and image references.
- **Obfuscated Data:** Never replace Base64 strings in `Contact.tsx` or `Footer.tsx` with raw email or phone numbers.
- **Search Filtering:** Respect `.ignore` to avoid noise from `pnpm-lock.yaml`, lockfiles, and media files during ripgrep and fd queries.
