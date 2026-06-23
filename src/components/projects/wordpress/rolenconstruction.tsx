import { Project } from '../project-types'

const rolenConstruction: Project = {
  id: 17000,
  title: 'Rolen Construction',
  description:
    'Partner in ADUs, New Construction, and transformative Remodeling.',
  fullDescription:
    'Rolen Construction is a US-based construction services website built on a fully custom WordPress theme using ACF (Advanced Custom Fields) for flexible content management. Inner service landing pages were built with Elementor at the client\'s request, while the main theme is powered by custom CSS3 and PHP. The site features project portfolio display, a contact form, SEO optimization, and Google Maps integration for local search visibility.',
  detailHeroLine: 'CUSTOM WORDPRESS · CONSTRUCTION SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme + ACF', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme + ACF' },
          { label: 'Elementor Landing Pages', highlight: true },
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
      'The site is built on a fully custom WordPress theme using ACF for structured custom post types and flexible content. Inner service landing pages are handled by Elementor for client self-editing capability. Custom CSS3 and PHP deliver unique styling and server-side logic, with Cloudflare CDN ensuring fast delivery across the US.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
      caption: 'Home page with construction services hero and project highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide2.webp',
      caption: 'Custom contact form with project inquiry fields and validation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide3.webp',
      caption: 'Services section using ACF custom post types for ADU and remodeling listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide4.webp',
      caption: 'Custom CSS3, JavaScript, and PHP code powering dynamic service interactions',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and indexable construction service pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and hover animations for portfolio items' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth page interactions' },
      { short: 'Elementor', full: 'Elementor page builder used for inner service landing pages for client self-editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering custom WordPress theme functions and form processing logic' },
      { short: 'MySQL', full: 'MySQL database storing project portfolio, services, and contact form data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform foundation for all content and page management' },
      { short: 'Advanced Custom Fields', full: 'ACF enabling structured custom post types for services and portfolio management' },
      { short: 'Custom WP Theme', full: 'Fully custom WordPress theme built from scratch for complete design control' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast US delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure visitor connections and form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for high-performance WordPress hosting' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the company\'s service area for local customers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking project inquiry submissions, traffic sources, and user behaviour' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local construction SEO targeting ADU, new construction, and remodeling searches' },
      { short: 'Schema.org Markup', full: 'LocalBusiness and Service JSON-LD structured data for rich search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green scores across all Core Web Vitals' },
      { short: 'WebP Images', full: 'WebP format for project portfolio images ensuring fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for lead capture and project inquiry tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with ACF',
      description:
        'A fully custom WordPress theme was developed from scratch using Advanced Custom Fields for structured service and portfolio content, giving the client full content management capability without developer involvement.',
    },
    {
      title: 'Elementor Inner Service Landing Pages',
      description:
        'Inner service pages for ADU, new construction, and remodeling were built with Elementor per the client\'s request, enabling intuitive drag-and-drop editing for future content updates.',
    },
    {
      title: 'Services Custom Post Types',
      description:
        'ACF-powered custom post types organize construction services into structured, editable entries that display dynamically across service listing and detail pages.',
    },
    {
      title: 'Custom Contact Form',
      description:
        'A project inquiry contact form with PHP-backed validation and email routing captures leads directly from the website with secure form submission handling.',
    },
    {
      title: 'Local SEO Optimization',
      description:
        'Local business SEO with Schema.org markup and Google Maps ensures strong visibility for construction service searches across the company\'s target service area.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://rolenconstruction.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default rolenConstruction
