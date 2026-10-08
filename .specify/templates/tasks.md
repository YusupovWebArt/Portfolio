# Task Breakdown: [Feature Name]

## Execution Rules
1. Every implementation task with behavioral logic must have a corresponding Red test.
2. The failing test must be executed and its failure output captured in the "Red Failure Proof" field before writing production code.
3. Once green, perform refactoring if necessary while maintaining all tests passing.
4. Keep commit history clean and structured: `test(...)` -> `feat/fix(...)` -> `refactor(...)`.

---

## Tasks

### Task 1: [Task Title]
- **Status**: [TODO | IN_PROGRESS | DONE]
- **Dependencies**: [None | Task ID]
- **Red Test File**: `[src/.../example.test.ts]`
- **Red Test Case**: `it('should ...', () => { ... })`
- **Red Failure Proof**:
  ```text
  [Insert terminal failure log showing test failing before code changes]
  ```
- **Green Implementation**:
  - Files modified: `[src/.../example.ts]`
  - Implementation summary: [Brief summary of change]
- **Green Verification Proof**:
  ```text
  [Insert terminal success log showing test passing]
  ```
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

---

### Task 2: [Task Title]
- **Status**: [TODO | IN_PROGRESS | DONE]
- **Dependencies**: [Task 1]
- **Red Test File**: `[src/.../example.test.ts]`
- **Red Test Case**: `it('should ...', () => { ... })`
- **Red Failure Proof**:
  ```text
  [Insert terminal failure log showing test failing before code changes]
  ```
- **Green Implementation**:
  - Files modified: `[...]`
  - Implementation summary: [...]
- **Green Verification Proof**:
  ```text
  [Insert terminal success log showing test passing]
  ```
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.
