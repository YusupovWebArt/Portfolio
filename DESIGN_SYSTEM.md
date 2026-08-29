# Portfolio Design System Specification

A comprehensive technical reference of the visual language, layout rules, typography, and interactive logic implemented on the Artur Yusupov Portfolio Landing Page.

---

## 🎨 1. Core Visual Concept

The website is designed with a **modern developer aesthetic**, utilizing a premium dark-mode-first glassmorphism style combined with vibrant color accents. The UI is built to feel responsive, tactile, and mathematically clean.

### Key Design Themes:
- **Glassmorphism:** Multi-layered transparent panels (`bg-white/60` and `bg-slate-900/60`) utilizing backdrop filters (`backdrop-blur-sm` / `backdrop-blur-xl`) to maintain deep, fluid layouts.
- **Specular Glows:** Soft background radial gradients (blur rings) highlighting active panels or hovering elements (purple, blue, and emerald accents).
- **Tactility:** Micro-animations and hover state scaling (`scale-[1.03]`) that make elements feel physically pressable.

---

## 🎨 2. Color Palette & Semantics

The palette uses curated neutrals with bright accent tokens to categorize content areas.

### Neutrals
- **Light Mode Background:** `bg-slate-50` (soft contrast) to `bg-white`.
- **Dark Mode Background:** `bg-slate-900` (deep space slate) to `bg-slate-800`.
- **Text (Light Mode):** `text-slate-900` (headings), `text-slate-600` (paragraphs).
- **Text (Dark Mode):** `text-white` (headings), `text-slate-350` / `text-slate-400` (paragraphs).

### Accents & Categorization
- **Primary / AI Tech Accent:** Purple / Violet (`from-violet-400 to-violet-600`, `text-purple-600`). Used for all AI-augmented workflows, chatbot indicators, and main CTA glows.
- **WordPress & Operations Accent:** Emerald / Green (`from-emerald-400 to-emerald-600`, `text-emerald-600`). Used for custom WordPress architectures, metrics counters, and database stats.
- **React & Frontend Accent:** Blue / Sky (`from-blue-400 to-blue-600`). Used for React/Next.js systems, components, and state management stats.
- **SEO & Marketing Accent:** Orange (`from-orange-400 to-orange-600`). Used for search engine optimization tracking and server-side tracking nodes.

---

## 🔠 3. Typography & Hierarchy

The site uses a clean, modern sans-serif typography system (configured to load `Inter` or `Outfit` fonts via styles).

### Scale & Hierarchy
- **Main Headings (H1/H2 Title):** `text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6`.
- **Sub-headings (Card Titles):** `text-lg sm:text-xl md:text-2xl font-bold tracking-tight`.
- **Technical Badges:** `text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500`.
- **Paragraphs:** `text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300`.
- **Monospaced Codeblocks:** `font-mono text-[11px] sm:text-xs leading-normal text-slate-800 dark:text-slate-300`.

---

## 📐 4. Layout & Grid Specifications

Layout structures are strictly managed to keep layout shifts (CLS) to a minimum.

### Global Container
- Wrapped in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. This ensures a maximum width boundary of `1280px` on desktop and centered alignments.

### Grid Systems
- **About/Hero Panels:** Standard 1-column layout on mobile, transitioning to a `grid lg:grid-cols-2 gap-16 items-center` on widescreen displays.
- **Card Breakdowns (Skills / AI Workflow):** Built using `grid grid-cols-1 md:grid-cols-2 gap-4` to handle multi-point data lists efficiently.
- **Mobile Navigation:** Utilizes horizontal scrolling scrollbars for tags and category filters: `flex overflow-x-auto gap-3 pb-3 scrollbar-none snap-x snap-mandatory` to ensure smooth swipes.

---

## ⚡ 5. Interactive Logic & State Rules

Interactive elements follow rigid behavior patterns to guarantee stability and prevent layout jumps:

### Hover States
- **Scale Transitions:** Class `transition-all duration-300 ease-out hover:scale-[1.03]` is applied to interactive cards.
- **Cursor Indicators:** Set to `cursor-pointer` globally for all `a`, `button`, and `[role="button"]` selectors inside `src/index.css`.
- **Dark Mode Transition:** Set to `transition-colors duration-300` on the root wrappers to ensure color shifts are smooth.

### Dynamic Pagination (AI Workflow)
- The slider supports dynamic lengths per category.
- State handlers check the `steps.length` of the active category to prevent out-of-bounds rendering:
  - **Next Button:** Disabled when `activeStep === currentCategory.steps.length - 1`.
  - **Prev Button:** Disabled when `activeStep === 0`.
  - **Progress Bar width:** Calculated dynamically as `((activeStep + 1) / currentCategory.steps.length) * 100`.

---

## 🏢 6. B2B Services & Tabbed Navigation Component (`B2bServices.tsx`)

The B2B services component provides dedicated audience switching between small businesses (**Pymes / Autónomos**) and digital agencies (**Marca Blanca**):

### Tab Segment Switcher
- **Container:** `inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-300/50 dark:border-white/10`.
- **Active State:** `bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-white/10`.
- **Inactive State:** `text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white`.

### Value-Proposition Cards
- **Glassmorphism Base:** `bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-6`.
- **Hover Micro-Interactions:** `hover:border-purple-500/40 dark:hover:border-lime-400/40 hover:shadow-2xl transition-all duration-300`.
- **Benefit Badges:** Colored pill tags categorizing each service ROI (`text-purple-600 dark:text-lime-400 bg-purple-50 dark:bg-lime-950/30`).

---

## 🗂️ 7. Project Card Grid Component (`Projects.tsx`)

The portfolio showcase utilizes a symmetrical, clean card layout:

### Image & Navigation
- **Thumbnail:** `w-full h-48 object-cover rounded-xl mb-4` with `viewTransitionName: 'project-thumb-${project.id}'` for native W3C View Transitions.
- **Title:** `text-xl font-bold text-slate-900 dark:text-white mb-2`.
- **Description:** `text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4.2rem]` for height symmetry across columns.

### Interactive Tags Subsystem
- **Visible Stack:** Shows top 4 technology badges (`text-[11px] font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60`).
- **Expandable Toggle:** When items exceed 4, an interactive `+{remainingCount}` button enables expanding all badges in-place, switching to `- less` for collapsing.

### Sticky Bottom CTA
- **Layout:** `mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3`.
- **Details Link:** `inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-lime-400`.
- **Live Demo Link:** `text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400`.

