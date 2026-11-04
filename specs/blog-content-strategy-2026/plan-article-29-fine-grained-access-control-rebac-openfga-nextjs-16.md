# Plan: Article 38 - Fine-Grained Authorization & Relationship-Based Access Control (ReBAC): Implementing Google Zanzibar with OpenFGA in Next.js 16

## 1. Overview & Context

- **Slug**: `fine-grained-access-control-rebac-openfga-nextjs-16`
- **Category**: Architecture & Cloud / Security / Next.js 16
- **Read Time**: 15 min / 15 хв / 15 min
- **Applied Projects**:
  - `yusupovartur-nextjs-portfolio` (Flagship Next.js 16 App Router platform)
  - `unitrition` (Decoupled HealthTech platform with strict medical data isolation)
- **Primary Technical Objectives**:
  1. Solve the "role explosion" and multi-tenant authorization complexity of traditional RBAC/ABAC by implementing Google Zanzibar-inspired Relationship-Based Access Control (ReBAC).
  2. Deploy an OpenFGA authorization engine integrated with Next.js 16 Edge Middleware and Server Actions for sub-15ms permission checks.
  3. Model hierarchical relationships (organizations, teams, folders, documents, sharing permissions) using declarative OpenFGA DSL schemas.
  4. Implement client-side UI permission gating with optimistic React 19 Server Components and server-authoritative verification.
  5. Provide production TypeScript SDK wrappers, contextual tuple evaluations, and benchmark analysis.

## 2. Article Structure & Content Sections

- **Section 1**: Beyond RBAC: Why Modern Multi-Tenant Platforms Break with Static Roles (The role explosion dilemma, recursive ownership, and multi-tenant sharing limits).
- **Section 2**: The Google Zanzibar Paradigm & OpenFGA (Directional graph tuples \`user:X is relation of object:Y\`, transitive resolution, and consistency tokens).
- **Section 3**: Modeling Complex Domains with OpenFGA DSL (Defining multi-tenant organizations, nested groups, inherited permissions, and document collaboration hierarchies).
- **Section 4**: Next.js 16 Edge Middleware & Server Actions Integration (Sub-15ms edge authorization checks, caching authorization decisions with Redis, and zero-trust verification).
- **Section 5**: End-to-End TypeScript Implementation (OpenFGA client setup, custom \`useAuthorization\` hook, Server Component gating, and mutation guards).
- **Section 6**: Production Benchmarks & Comparative Metrics (Check latency, graph traversal depth, memory overhead, and security auditability).

## 3. Mandatory Compliance & Verification Standards

- **Typography**: Exactly 0 em dashes (\u2014) across all markdown, code comments, and SVG text. Only standard hyphens `-`.
- **Typing**: Strict zero-`any` in all TypeScript code examples.
- **Template Literal Safety**: Escape any `${...}` inside markdown template strings as `\${...}`.
- **Parity**: Complete trilingual content parity across English (`en`), Ukrainian (`ua`), and Spanish (`es`).
- **Cover Image**: Dedicated high-resolution SVG diagram in `public/images/blog/cover-fine-grained-access-control-rebac.svg`.
- **Quality Gates**:
  - `pnpm exec tsc --noEmit` (0 errors)
  - `pnpm eslint` (0 errors)
  - `pnpm vitest run` (34/34 tests pass)
  - `pnpm build:next` (337 static pages: 334 + 3)
  - `pnpm build` (Vite SPA passes)
  - `pnpm check:budget` (Initial JS < 500 KB raw, < 150 KB gzip)
