import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'Google-Extended',
          'Applebot-extended',
          'FacebookBot',
          'CohereBot',
          'PerplexityBot',
        ],
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://www.yusupovartur.com/sitemap.xml',
  }
}
