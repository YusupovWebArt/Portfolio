import { Project } from '../project-types'

const leoLardy: Project = {
  id: 10940,
  title: 'Leo Lardy',
  description: 'French visually driven creative platform.',
  fullDescription:
    'Leo Lardy is a premium French creative platform built on WordPress with a fully customized theme, bespoke CSS3 animations, and JavaScript-driven interactions. The site reflects a high-end visual identity with fast load times, SEO best practices, and Google Maps integration for location-aware content.',
  detailHeroLine: 'CUSTOM WORDPRESS · CREATIVE PLATFORM',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'FR Market', label: 'Target Audience', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Premium WP Theme' },
          { label: 'Custom CSS3 & JS', highlight: true },
          { label: 'PHP 8+ Backend' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx + SSL', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'The site is powered by a premium WordPress theme heavily customized with CSS3 and ES6 JavaScript to match the client\'s visual requirements. PHP handles dynamic content and form processing, while Cloudflare CDN and Nginx caching ensure fast global delivery.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/leo-lardy_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/leo-lardy_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/leo-lardy_thumb.webp',
      caption: 'Home page showcasing the premium visual design and hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/leo-lardy/leo-lardy_slide2.webp',
      caption: 'Portfolio gallery section with custom CSS3 grid layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/leo-lardy/leo-lardy_slide3.webp',
      caption: 'About and services section with rich typography styling',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/leo-lardy/leo-lardy_slide4.webp',
      caption: 'Contact page with Google Maps integration and custom form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and SEO-friendly markup' },
      { short: 'CSS3', full: 'Custom CSS3 with animations and CSS Grid for precise visual layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth transitions' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Server-side PHP 8+ powering WordPress theme logic and form handling' },
      { short: 'MySQL', full: 'MySQL database storing all site content and configurations' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the foundation for content management and publishing' },
      { short: 'Premium WP Theme', full: 'Premium WordPress theme customized to match the client\'s creative brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global performance and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure communication across all pages' },
      { short: 'Nginx', full: 'Nginx web server with caching for optimized response times' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API integrated for interactive location display' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking user behaviour, sessions, and engagement metrics' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'On-page SEO with optimized meta tags, headings, and content structure' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data to enhance search engine rich results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning targeting green scores across all Core Web Vitals' },
      { short: 'WebP Images', full: 'Next-gen WebP image format for faster page loads without quality loss' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for lead generation and audience engagement' },
    ],
  },
  features: [
    {
      title: 'Premium WordPress Theme Customization',
      description:
        'A premium WordPress theme was extensively customized using CSS3 and JavaScript to precisely match the client\'s creative vision and brand identity requirements.',
    },
    {
      title: 'Custom CSS3 & JavaScript Interactions',
      description:
        'Bespoke CSS3 animations and ES6 JavaScript components deliver a unique, dynamic user experience with smooth transitions and personalized visual effects.',
    },
    {
      title: 'Responsive Design',
      description:
        'The layout is fully responsive across all device types, ensuring seamless navigation and consistent aesthetics on desktops, tablets, and smartphones.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Built with technical SEO best practices including optimized meta tags, Schema.org structured data, and fast load times to maximize search engine visibility.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://lardyleo.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default leoLardy
