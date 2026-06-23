import { Project } from '../project-types'

const orozcoTrucking: Project = {
  id: 10960,
  title: 'Orozco Trucking',
  description:
    'Freight transportation company based in Elk Grove Village, Illinois.',
  fullDescription:
    'Orozco Trucking is a professional WordPress website for a US-based freight transportation company, built on a premium theme with extensive CSS3 and JavaScript customization. The project focused on communicating reliability and service capability, with local SEO, Google Maps integration, and Schema.org markup to drive regional business inquiries.',
  detailHeroLine: 'CUSTOM WORDPRESS · FREIGHT & LOGISTICS',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Premium Theme', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
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
      'A premium WordPress theme was extensively customized with CSS3 and JavaScript to match the trucking company\'s professional branding. PHP handles contact form submissions and dynamic content, while Cloudflare CDN and Nginx ensure fast, secure delivery across the US.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/orozcotrucking_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/orozcotrucking_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/orozcotrucking_thumb.webp',
      caption: 'Home page with services overview and freight transportation hero banner',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/orozcotrucking/orozcotrucking_slide2.webp',
      caption: 'Services section detailing freight and transportation capabilities',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/orozcotrucking/orozcotrucking_slide3.webp',
      caption: 'Contact page with Google Maps showing Elk Grove Village, Illinois location',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for clean, accessible page markup' },
      { short: 'CSS3', full: 'Custom CSS3 with Grid layouts and responsive styling for all breakpoints' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive components and smooth user experience' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic and contact form processing' },
      { short: 'MySQL', full: 'MySQL database for storing site content and form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS for content management and page publishing' },
      { short: 'Premium WP Theme', full: 'Premium WordPress theme customized to the trucking company\'s professional brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast US delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption for secure visitor connections and form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for high-performance WordPress hosting' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the company\'s Elk Grove Village location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking contact form submissions, sessions, and traffic sources' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local business SEO targeting freight and transportation searches in Illinois' },
      { short: 'Schema.org Markup', full: 'Local business structured data for enhanced search result appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green scores across all Core Web Vitals' },
      { short: 'WebP Images', full: 'WebP image format for faster page loading across all gallery assets' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for lead capture and business inquiry tracking' },
    ],
  },
  features: [
    {
      title: 'Premium WordPress Theme Customization',
      description:
        'A premium WordPress theme was customized using CSS3 and JavaScript to reflect the professional image of a freight transportation company and meet specific client design preferences.',
    },
    {
      title: 'Custom CSS3/JS & PHP',
      description:
        'Bespoke CSS3 and JavaScript enhancements deliver unique styling and dynamic functionality, while PHP handles server-side form processing and content logic.',
    },
    {
      title: 'Responsive Design',
      description:
        'The website is fully optimized for desktops, tablets, and smartphones, ensuring potential clients can easily access service information from any device.',
    },
    {
      title: 'Local SEO & Google Maps',
      description:
        'Local business SEO with Schema.org markup and Google Maps integration drives regional visibility for freight transportation searches around Elk Grove Village, Illinois.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.orozcotrucking.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default orozcoTrucking
