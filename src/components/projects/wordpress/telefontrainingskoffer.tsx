import { Project } from '../project-types'

const telefonTrainingskoffer: Project = {
  id: 17500,
  title: 'Telefontrainingskoffer',
  description: 'Callcenter Akademie',
  fullDescription:
    'Development of a custom WordPress portal for Telefontrainingskoffer, a professional German call center academy training service. Engineered a custom WordPress theme from scratch utilizing Advanced Custom Fields (ACF) and WPBakery Page Builder for dynamic layout block styling. Focused on strict German DACH market GDPR compliance for interactive contact forms and intake systems, coupled with server-side performance tuning.',
  detailHeroLine: 'CUSTOM WORDPRESS · CALL CENTER ACADEMY SYSTEM',
  detailMetrics: [
    { value: '96+', label: 'PageSpeed', accent: 'green' },
    { value: '<0.9s', label: 'Page load', accent: 'green' },
    { value: 'WPBakery / ACF', label: 'Layout Builder', accent: 'darkGreen' },
    { value: 'DACH (DE) Ready', label: 'Target Market', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
          { label: 'WPBakery Page Builder' },
        ],
      },
      {
        rowLabel: 'DELIVERY FLOW',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx FastCGI', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'A custom WordPress portal designed for professional call center training services in Germany, using WPBakery templates and custom PHP scripts. Optimised through Nginx caching layers.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/telefontrainingskoffer_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wordpress/telefontrainingskoffer.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/telefontrainingskoffer_thumb.webp',
      caption: 'Home page presenting call center training equipment and academy details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telefontrainingskoffer/telefontrainingskoffer_slide2.webp',
      caption: 'Visual course outline sheets and training materials catalog',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telefontrainingskoffer/telefontrainingskoffer_slide3.webp',
      caption: 'Bespoke contact and booking request forms for academy courses',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox)',
      'JavaScript (ES6)',
      'WPBakery Page Builder',
    ],
    backend: ['PHP 8+', 'MySQL'],
    contentManagement: ['WordPress Core', 'Advanced Custom Fields (ACF)'],
    devopsSecurity: [
      'Nginx Hosting',
      'SSL Encryption',
      'Secure server-side forms',
    ],
    analytics: ['Google Analytics', 'Conversion tracking'],
    seo: ['Google-friendly structured schema', 'German local SEO'],
    performanceOptimization: [
      'Gzip compression',
      'WebP image formats',
      'Deferred JS loading',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      description:
        'Built a completely bespoke theme matching the corporate identity of the Call Center Academy in Germany.',
    },
    {
      title: 'WPBakery Page Builder Integration',
      description:
        'Configured custom content elements in WPBakery, allowing editors to create visually engaging course layouts.',
    },
    {
      title: 'High-Performance CSS/JS',
      description:
        'Implemented custom stylesheets and interactive animations to ensure responsive usability.',
    },
    {
      title: 'Contact & Lead Capture Forms',
      description:
        'Customized contact forms and lead funnels to maximize course booking inquiries.',
    },
  ],
  challenges: [
    'Integrating WPBakery page builder without bloating page sizes and reducing load speed.',
    'Ensuring security and GDPR compliance for lead forms in the German DACH market.',
  ],
  solutions: [
    'Implemented aggressive file minification, deferred page builder CSS, and optimized media assets.',
    'Configured secure HTTPS forms, local storage options, and strict privacy controls matching GDPR regulations.',
  ],
  liveUrl: 'https://callcenter-akademie.de/telefontrainingskoffer/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default telefonTrainingskoffer
