# AI Search & Context Optimization Specification

This document details the search filtering architecture, token conservation strategies, and AI agent performance optimizations implemented across the Artur Yusupov Portfolio workspace.

---

## 🎯 1. Overview & Purpose

AI coding assistants (such as Antigravity, Claude Code, and Cursor) rely heavily on fast command-line search engines (`ripgrep`, `fd`, `grep_search`, `find_by_name`) to explore codebases, inspect references, and retrieve context.

Unfiltered searches can flood context windows with tens of thousands of irrelevant lines from:
- Multi-thousand-line package lockfiles (`pnpm-lock.yaml`).
- Static binary files, SVG coordinate paths, and web fonts.
- Ephemeral test reports and tooling artifacts.

To eliminate context pollution, the repository implements a dedicated **`.ignore`** filter file.

---

## ⚖️ 2. Key Differences: `.gitignore` vs `.ignore`

| Feature | `.gitignore` | `.ignore` |
| :--- | :--- | :--- |
| **Primary Engine** | Git Version Control System | `ripgrep` (`rg`), `fd`, AI search tools |
| **Purpose** | Prevents files from being tracked or committed to Git | Excludes files from search indexes while preserving Git tracking |
| **CI/CD Impact** | Affects repository state and deployment artifacts | **Zero impact** on Git history, CI/CD, or production builds |
| **Typical Targets** | `node_modules/`, `dist/`, `.env`, build caches | `pnpm-lock.yaml`, `public/images/`, `*.svg`, `*.webp`, fonts |

---

## 📋 3. Excluded Categories in `.ignore`

```ignore
# 1. Package manager lockfiles (critical for CI, excluded from code search)
pnpm-lock.yaml
package-lock.json
yarn.lock

# 2. Media, vector graphics, icons, and web fonts
public/images/
public/flags/
public/*.png
public/*.jpg
public/*.jpeg
public/*.webp
public/*.svg
public/*.ico
public/*.woff
public/*.woff2
public/*.ttf

# 3. Test artifacts and tool caches
.husky/
test-results/
playwright-report/
.playwright/
coverage/

# 4. Build artifacts and dependencies
dist/
dist-ssr/
build/
.next/
node_modules/
.pnpm-store/
```

### Categorical Rationale:
1. **Lockfiles (`pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`):**
   - Must be committed to Git for deterministic `--frozen-lockfile` builds in CI/CD.
   - Searching for imports or symbols inside massive YAML/JSON lockfiles consumes excessive LLM context tokens and generates false positives.
2. **Static Media & Fonts (`public/images/`, `public/*.webp`, `*.svg`, `*.woff2`):**
   - Binary data and large SVG path coordinates produce noise during text search.
   - Excluding them keeps search results strictly focused on TypeScript, React components, CSS, and Markdown specifications.
3. **Test Reports & Artifacts (`test-results/`, `playwright-report/`, `coverage/`):**
   - Generated dynamically during test execution; searching them produces duplicate code references.

---

## 🚀 4. Benefits for Spec-Driven Development (SDD)

- **⚡ Sub-Second Search Speed:** `ripgrep` queries complete in milliseconds by skipping binary assets and multi-megabyte lockfiles.
- **🎯 Higher AI Precision:** Search results returned to AI agents contain only relevant application code and markdown specifications.
- **💰 Token Economics:** Conserves AI context window capacity for deep reasoning and code synthesis.
