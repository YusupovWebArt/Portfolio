import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { allBlogPosts } from '../data/blog'

describe('GEO llms.txt & IndexNow Synchronization Specification (TDD)', () => {
  const rootDir = process.cwd()

  it('should keep public/llms.txt synchronized with all blog articles and 4 locales without em dashes', () => {
    const llmsPath = path.resolve(rootDir, 'public/llms.txt')
    expect(fs.existsSync(llmsPath)).toBe(true)

    const content = fs.readFileSync(llmsPath, 'utf8')
    expect(content).not.toContain('\u2014')
    expect(content).not.toContain('\u2013')
    expect(content).toContain('https://www.yusupovartur.com/en')
    expect(content).toContain('https://www.yusupovartur.com/ua')
    expect(content).toContain('https://www.yusupovartur.com/es')
    expect(content).toContain('https://www.yusupovartur.com/de')
    expect(content).toContain('https://www.yusupovartur.com/feed.xml')

    for (const post of allBlogPosts) {
      expect(content).toContain(`/en/blog/${post.slug}`)
    }
  })

  it('should keep public/llms-full.txt synchronized with all blog articles and 71 projects', () => {
    const llmsFullPath = path.resolve(rootDir, 'public/llms-full.txt')
    expect(fs.existsSync(llmsFullPath)).toBe(true)

    const content = fs.readFileSync(llmsFullPath, 'utf8')
    expect(content).not.toContain('\u2014')
    expect(content).not.toContain('\u2013')
    expect(content).toContain(`(${allBlogPosts.length} Articles across EN / UA / ES / DE`)
    expect(content).toContain('Complete 71-Project Portfolio Index')

    for (const post of allBlogPosts) {
      expect(content).toContain(`/en/blog/${post.slug}`)
    }
  })

  it('should expose a valid IndexNow public verification file matching its filename', () => {
    const verificationId = 'yusupovartur-indexnow-2026-v1'
    const keyFilePath = path.resolve(rootDir, 'public', `${verificationId}.txt`)
    expect(fs.existsSync(keyFilePath)).toBe(true)

    const content = fs.readFileSync(keyFilePath, 'utf8').trim()
    expect(content).toBe(verificationId)
    expect(content).toMatch(/^[a-zA-Z0-9-]{8,128}$/)
  })
})
