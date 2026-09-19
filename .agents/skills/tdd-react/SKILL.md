---
name: tdd-react
description: Test-Driven Development (TDD) rules, Red-Green-Refactor cycle, and React Testing Library conventions for React 19 components.
---

# TDD React Skill: Executable Specification Discipline

This skill governs Test-Driven Development for all new features and bug fixes in the Artur Yusupov Portfolio.

---

## 1. The Red-Green-Refactor Cycle

1. **RED (Failing Test First):**
   - Write tests BEFORE implementation code.
   - Run the test suite and confirm failure for the exact expected reason (not due to syntax or import errors).
2. **GREEN (Minimal Code to Pass):**
   - Implement the minimum necessary code to satisfy the test contract.
   - Run the test suite and confirm all tests pass.
3. **REFACTOR (Clean and Optimize):**
   - Clean up code, optimize performance, extract shared helpers.
   - Ensure `pnpm exec tsc --noEmit` and `pnpm lint` remain green.
   - Re-run tests to guarantee zero regressions.

---

## 2. React Testing Library Query Hierarchy

Always query DOM elements the way real users and screen readers experience them:

| Priority | Method | Recommended Use |
| :--- | :--- | :--- |
| **1 (Highest)** | `getByRole('button', { name: /view details/i })` | Buttons, links, headings, navigation landmarks |
| **2** | `getByLabelText(/filter projects/i)` | Form controls, inputs, selects |
| **3** | `getByText(/specific title/i)` | Static text blocks, headings |
| **4** | `getByTestId('custom-id')` | Only as a last resort when semantic roles are unavailable |

### Anti-Patterns to Avoid:
- NEVER query by CSS classes (`container.querySelector('.flex.items-center')`).
- NEVER query by DOM tag names (`container.querySelector('div > span')`).
- NEVER test internal component state directly; test user-observable outputs.
