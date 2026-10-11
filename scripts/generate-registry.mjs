import fs from 'node:fs'
import path from 'node:path'

const projectsDir = path.resolve(process.cwd(), 'src/components/projects')
const categories = fs.readdirSync(projectsDir).filter((d) => {
  const stat = fs.statSync(path.join(projectsDir, d))
  return stat.isDirectory()
})

const items = []
for (const cat of categories) {
  const catDir = path.join(projectsDir, cat)
  const files = fs.readdirSync(catDir).filter((f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx'))
  for (const file of files) {
    const rawName = file.replace(/\.tsx$/, '')
    const slug = rawName.trim().toLowerCase()
    items.push({
      category: cat,
      fileName: file,
      rawName,
      slug,
      importPath: `../components/projects/${cat}/${file}`,
    })
  }
}

items.sort((a, b) => a.slug.localeCompare(b.slug))

let importStatements = ''
let arrayEntries = ''

items.forEach((item, index) => {
  const varName = `proj_${index + 1}`
  importStatements += `import ${varName} from '${item.importPath.replace(/\.tsx$/, '')}'\n`
  arrayEntries += `  { slug: '${item.slug}', project: ${varName} },\n`
})

const content = `import type { Project } from '../components/projects/project-types'

// Static registry of all projects for seamless compatibility across Vite, Next.js, and Vitest
${importStatements}
export interface ProjectRegistryItem {
  slug: string
  project: Project
}

export const projectRegistry: ProjectRegistryItem[] = [
${arrayEntries}]

export const allProjects: Project[] = projectRegistry
  .map((item) => item.project)
  .sort((a, b) => b.id - a.id)
`

const outPath = path.resolve(process.cwd(), 'src/lib/projectRegistry.ts')
fs.writeFileSync(outPath, content, 'utf8')
console.log(`Generated projectRegistry with ${items.length} projects at ${outPath}`)
