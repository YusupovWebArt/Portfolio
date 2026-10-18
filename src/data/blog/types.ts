export type BlogLocale = 'en' | 'ua' | 'es'

export interface BlogPost {
  slug: string
  title: Record<BlogLocale, string>
  description: Record<BlogLocale, string>
  date: string // YYYY-MM-DD
  readTime: Record<BlogLocale, string>
  category: string
  categoryLabel: Record<BlogLocale, string>
  tags: string[]
  author: {
    name: string
    role: Record<BlogLocale, string>
  }
  coverImage: string
  tldr: Record<BlogLocale, string[]>
  content: Record<BlogLocale, string>
}
