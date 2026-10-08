# Implementation Plan: [Feature Name]

## 1. Executive Summary
- **Target Feature**: [Feature Slug / Name]
- **Primary Objectives**: [Key outcomes to achieve]
- **Guiding Principles**: Constitution compliance, Red-first TDD, zero em dashes.

## 2. Architectural Blueprint and Component Structure
- **New Modules / Components**:
  - `[path/to/component.tsx]`: [Purpose and role]
- **Modified Modules / Components**:
  - `[path/to/existing.tsx]`: [Changes planned]
- **State and Data Flow**: [How state transitions or data movements happen]

## 3. Phased Execution Roadmap
- **Phase 1: [Phase Title]**
  - Scope: [Detailed scope]
  - Prerequisites: [Dependencies]
  - Deliverables: [Output artifacts]
- **Phase 2: [Phase Title]**
  - Scope: [Detailed scope]
  - Prerequisites: [Dependencies]
  - Deliverables: [Output artifacts]

## 4. Risk Matrix and Mitigations
| Risk | Probability | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| [Risk 1] | Low / Med / High | Low / Med / High | [Concrete mitigation] |
| [Risk 2] | Low / Med / High | Low / Med / High | [Concrete mitigation] |

## 5. Verification Pipeline and Quality Gates
- **Gate 1 (Red Stage)**: Author failing unit/e2e tests asserting expected behavior.
- **Gate 2 (Green Stage)**: Implement minimum viable solution passing tests.
- **Gate 3 (Quality Gate)**: `pnpm verify` (tsc --noEmit, ESLint, test:all, audit, build).
- **Gate 4 (User Review)**: Phase sign-off before proceeding to subsequent phase.
