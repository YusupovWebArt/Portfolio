# Project Context and Architecture Rules

Permanent context for AI coding agents operating in the Artur Yusupov Portfolio repository.

---

## 1. Technical Stack Overview

- **Core Framework:** Next.js 16 (App Router SSG/SSR on Vercel) + React 19 (dual-runtime SPA export on GitHub Pages)
- **Runtime Environment:** Node.js 24 LTS
- **Package Manager:** pnpm 11.x (NTFS global content-addressable store at `D:\.pnpm-store`)
- **Language:** TypeScript 6.x (Strict zero-`any` mode)
- **Bundler & Build Tool:** Next.js 16 Turbopack (`pnpm build:next`) + Vite 8.x (`pnpm build`)
- **Styling:** Tailwind CSS v4 with CSS variables and dark/light glassmorphism tokens
- **Internationalization:** Custom type-safe 4-language engine (`en`, `ua`, `es`, `de`) across 512+ localized routes
- **GEO & Discovery:** Automated `public/llms.txt` & `public/llms-full.txt` (`pnpm generate:llms`), RSS 2.0 feed (`/feed.xml`), per-article 1200x630 PNG OG images (`pnpm generate:blog-og`), and IndexNow (`pnpm ping:indexnow`)
- **PWA & Offline:** Service Worker (`public/sw.js`) with Stale-While-Revalidate caching
- **Hosting & CI/CD:** Vercel production (`www.yusupovartur.com`) + GitHub Pages automated via GitHub Actions on push to `master`

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

- **Case Studies (`src/components/projects/`):** All 71 projects follow the unified schema defined in `project-types.ts`. Preserve all 4-language copy (`en`, `ua`, `es`, `de`), technical highlights, and image references.
- **Obfuscated Data:** Never replace Base64 strings in `Contact.tsx` or `Footer.tsx` with raw email or phone numbers.
- **New Blog Article Release Checklist (GEO & Local Content Sync):** Whenever a new article is added to `src/data/blog/posts/` and registered in `src/data/blog/index.ts`:
  1. Run `pnpm generate:blog-og` to render its 1200x630 PNG Open Graph image into `public/images/blog/og/`.
  2. Run `pnpm generate:llms` so `public/llms.txt` and `public/llms-full.txt` stay 100% synchronized with `allBlogPosts` and `/feed.xml`.
  3. On the same day, update the local private social content backlog inside gitignored `docs/marketing/` according to its local specification without committing any promotional artifacts to Git.
  4. After production deployment, optionally submit the new URLs via `pnpm ping:indexnow <url>`.
- **Private Social Promotion Isolation (`docs/marketing/`):** All social media promotion materials (content plans, spreadsheets, outreach templates, and promotional graphics with plaintext contact details) are strictly excluded from Git via `.gitignore` and must never be committed or disclosed in repository specs.
- **Search Filtering:** Respect `.ignore` to avoid noise from `pnpm-lock.yaml`, lockfiles, and media files during ripgrep and fd queries.
