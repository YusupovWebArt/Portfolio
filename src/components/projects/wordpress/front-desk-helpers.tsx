import { Project } from '../project-types'

const frontDeskHelpers: Project = {
  id: 19000,
  title: 'Front Desk Helpers',
  description:
    'FDH provides skilled remote employees and advanced IT solutions to help businesses grow and thrive.',
  fullDescription:
    'Development of a corporate outsourcing and IT consulting portal for Front Desk Helpers. Built with a custom WordPress theme integrated with Elementor Pro, bespoke PHP structures, and Advanced Custom Fields (ACF). The portal localized services for US and ES markets with dynamic application/feedback forms. Implemented structured Schema.org JSON-LD definitions and technical SEO speed optimizations for maximum search visibility.',
  detailHeroLine: 'CUSTOM WORDPRESS · ENTERPRISE OUTSOURCING PORTAL',
  detailMetrics: [
    { value: '94+', label: 'PageSpeed', accent: 'green' },
    { value: '<1.5s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / Elementor', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'US / ES Ready', label: 'Multi-language', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom Theme + Elementor Pro', highlight: true },
          { label: 'ACF Pro' },
        ],
      },
      {
        rowLabel: 'DELIVERY FLOW',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Apache/Nginx' },
          { label: 'Cloudflare CDN', highlight: true },
        ],
      },
    ],
    description:
      'A customized enterprise portal built using a custom WordPress theme combined with Elementor Pro for responsive layouts. Serves dynamic registration and feedback forms with Cloudflare caching for optimal performance.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/frontdeskhelpers_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wordpress/frontdeskhelpers.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/frontdeskhelpers_thumb.webp',
      caption: 'Home page showcasing business solutions and remote staffing channels',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/frontdeskhelpers/frontdeskhelpers_slide4.webp',
      caption: 'Custom design grids presenting service packages and core advantages',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/frontdeskhelpers/frontdeskhelpers_slide6.webp',
      caption: 'Corporate footer layout with integrated contact forms and site navigation',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox/Grid)',
      'JavaScript (ES6)',
      'Elementor Pro',
    ],
    backend: ['PHP 8+', 'MySQL'],
    contentManagement: ['WordPress Core', 'Advanced Custom Fields (ACF)'],
    devopsSecurity: [
      'Cloudflare Edge DNS',
      'SSL/TLS Security',
      'Apache/Nginx Hosting',
    ],
    analytics: ['Google Analytics (GA4)', 'Google Maps API'],
    seo: [
      'Technical SEO',
      'Schema.org JSON-LD Structured Data',
      'Meta Tags Optimization',
    ],
    performanceOptimization: [
      'Core Web Vitals tuning',
      'Nginx Caching',
      'Browser caching',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      description:
        'Built a completely custom theme tailored specifically for Front Desk Helpers, ensuring complete design flexibility and high performance.',
    },
    {
      title: 'AI-generated Graphic Visuals',
      description:
        'Created unique corporate illustrations and branding visuals using creative AI tools, integrating them seamlessly into the layout.',
    },
    {
      title: 'Multi-language US/ES Architecture',
      description:
        'Designed localized paths for US and ES markets to serve regional marketing and client funnels.',
    },
    {
      title: 'Client & Candidate Feedback Funnels',
      description:
        'Custom-engineered intake forms and candidate application systems to connect clients with remote staffing channels.',
    },
  ],
  challenges: [
    'Maintaining fast page load speeds and high Core Web Vitals metrics on a WordPress site utilizing the Elementor page builder.',
    'Implementing search engine optimization and regional SEO indexing rules for both US (English) and Spain (Spanish) domains.',
  ],
  solutions: [
    'Minified assets, deferred render-blocking CSS/JS files, and converted heavy media elements to next-gen WebP formats to achieve sub-second content rendering.',
    'Configured proper Hreflang attributes, optimized sitemaps, and injected localized Schema.org structured data to separate regional indexes.',
  ],
  liveUrl: 'https://frontdeskhelpers.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default frontDeskHelpers
