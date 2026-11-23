import { allBlogPosts, getBlogTitle, getBlogDescription } from '../../src/data/blog'
import { toAbsoluteOgImageUrl } from '../../src/lib/seo'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.yusupovartur.com'

function escapeXml(value: string): string {
  return value
    .replace(/[\u2014\u2013]/g, '-')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET(): Response {
  const sortedPosts = [...allBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const lastBuildDate = sortedPosts[0]
    ? new Date(`${sortedPosts[0].date}T00:00:00Z`).toUTCString()
    : new Date().toUTCString()

  const itemsXml = sortedPosts
    .map((post) => {
      const link = `${SITE_URL}/en/blog/${post.slug}`
      const title = escapeXml(getBlogTitle(post, 'en'))
      const description = escapeXml(getBlogDescription(post, 'en'))
      const pubDate = new Date(`${post.date}T00:00:00Z`).toUTCString()
      const imageUrl = escapeXml(toAbsoluteOgImageUrl(post.coverImage))
      const categoriesXml = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join('\n')

      return [
        '    <item>',
        `      <title>${title}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${description}</description>`,
        `      <enclosure url="${imageUrl}" type="image/png" length="0" />`,
        categoriesXml,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Artur Yusupov - Engineering Blog &amp; Architecture Deep-Dives</title>
    <link>${SITE_URL}/en/blog</link>
    <description>Production engineering guides on Next.js 16, React 19, Headless WordPress, Hybrid RAG AI, WooCommerce HPOS, Core Web Vitals, and WCAG 2.2 AA / EAA 2026 compliance.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`

  return new Response(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
