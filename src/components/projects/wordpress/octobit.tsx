import { Project } from '../project-types'

const octobit: Project = {
  id: 18000,
  title: 'Octobit',
  description:
    'Octobit is a Ukrainian informational portal focused on cryptocurrency and blockchain topics. It’s aimed both at beginners and more experienced users.',
  fullDescription:
    'Development of a custom cryptocurrency and blockchain news portal for Octobit. Designed and developed a bespoke WordPress theme from scratch utilizing Advanced Custom Fields (ACF Pro) for article structures and dynamic sections. Integrates live exchange API endpoints to display real-time coin values, market indexes, and interactive tables. Fully optimized for high-volume content loading, implementing server-side transients, technical SEO, and multilingual UA/RU support.',
  detailHeroLine: 'CUSTOM WORDPRESS · CRYPTO & BLOCKCHAIN MEDIA PORTAL',
  detailMetrics: [
    { value: '95+', label: 'PageSpeed', accent: 'green' },
    { value: '<1.1s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / ACF Pro', label: 'Custom Engine', accent: 'darkGreen' },
    { value: 'API Sync', label: 'Live Crypto Feed', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
          { label: 'ACF Pro Fields' },
        ],
      },
      {
        rowLabel: 'DATA SYNC',
        steps: [
          { label: 'Crypto Exchange APIs' },
          { label: 'WP Transients Cache', highlight: true },
          { label: 'Nginx FastCGI' },
        ],
      },
    ],
    description:
      'An information portal optimized for blockchain content, syncing real-time prices using exchange REST APIs and displaying content via custom PHP loops. Utilizes transient database caching to prevent server overload.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/octobit_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wordpress/octobit.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/octobit_thumb.webp',
      caption: 'Home page displaying live coin price tickers and featured crypto articles',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/octobit/octobit_slide2.webp',
      caption: 'Blockchain informational guides and news grid presentation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/octobit/octobit_slide3.webp',
      caption: 'Detailed article template layout with responsive text styling and banners',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox/Grid)',
      'JavaScript (ES6)',
      'Responsive Layouts',
    ],
    backend: ['PHP 8+', 'MySQL', 'REST API Integration'],
    contentManagement: [
      'WordPress Core',
      'Advanced Custom Fields (ACF Pro)',
      'Custom Fields & Loops',
    ],
    devopsSecurity: ['Cloudflare Edge Caching', 'SSL encryption'],
    analytics: ['Google Analytics (GA4)', 'Google Search Console'],
    seo: ['Semantic HTML5', 'JSON-LD Crypto Schema', 'Meta Tags'],
    performanceOptimization: [
      'Next-gen WebP assets',
      'Object Caching',
      'Browser cache headers',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      description:
        'Developed from scratch to provide maximum performance for high-traffic media portals.',
    },
    {
      title: 'Real-time Crypto API Sync',
      description:
        'Integrated API endpoints from major exchanges to retrieve and display live cryptocurrency prices and market indexes.',
    },
    {
      title: 'Modular ACF templates',
      description:
        'Configured bespoke templates using ACF Pro, enabling content creators to build complex articles without code.',
    },
    {
      title: 'Bilingual UA/RU structure',
      description:
        'Implemented localized database views and language routing to serve regional audiences.',
    },
  ],
  challenges: [
    'Real-time API polling causing server load and performance degradation on high-traffic pages.',
    'Maintaining high PageSpeed scores with dynamic script widgets.',
  ],
  solutions: [
    'Implemented server-side API caching with transient data storage to reduce external requests to once every 5 minutes.',
    'Deferred non-critical JavaScript widgets and optimized database queries using custom MySQL indexes.',
  ],
  liveUrl: 'https://octobit.com.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default octobit
