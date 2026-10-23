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
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'Google-Extended',
          'GoogleOther',
          'Applebot',
          'Applebot-extended',
          'FacebookBot',
          'Meta-ExternalAgent',
          'CohereBot',
          'PerplexityBot',
          'DuckAssistBot',
          'YouBot',
          'Amazonbot',
        ],
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://www.yusupovartur.com/sitemap.xml',
  }
}
