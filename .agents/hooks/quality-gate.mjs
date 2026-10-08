import { execSync } from 'child_process'
import fs from 'fs'

// AI-Harness Quality Gate Stop Hook
// Verifies Constitution Principle 1 (Strict TypeScript) and Principle 5 (No Em Dashes)
const errors = []

// Check 1: Scan tracked TS/TSX files for em dashes (Constitution Principle 5)
try {
  const statusOutput = execSync('git diff --name-only HEAD', { encoding: 'utf8' })
  const changedFiles = statusOutput
    .split('\n')
    .map((f) => f.trim())
    .filter((f) => f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.md'))

  for (const file of changedFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8')
      if (content.includes('—')) {
        errors.push(`Em dash (—) detected in ${file}. Use standard hyphen (-) per Constitution Principle 5.`)
      }
    }
  }
} catch (err) {
  // Ignore git diff errors in clean worktree
}

// Check 2: TypeScript strict check (Constitution Principle 1)
try {
  execSync('pnpm exec tsc --noEmit', { stdio: 'pipe' })
} catch (err) {
  errors.push('TypeScript compilation failed. Strict zero-any check must pass.')
}

if (errors.length > 0) {
  const result = {
    decision: 'continue',
    reason: `Stop blocked by AI-Harness Quality Gate:\n${errors.join('\n')}`,
  }
  process.stdout.write(JSON.stringify(result))
  process.exit(0)
}

// All checks passed
process.stdout.write(JSON.stringify({ decision: 'approve' }))
process.exit(0)
