import { Project } from '../project-types'

const eximProperty: Project = {
  id: 10990,
  title: 'Exim Property',
  description:
    'Real estate services company based in Thailand, with a focus on helping foreign buyers-especially clients-discover, evaluate, and acquire property in Thailand.',
  fullDescription:
    'A custom Gutenberg blocks-based WordPress theme for a Thailand real estate agency serving international buyers. The project included multi-language support, a BookingPress appointment scheduling system, bespoke service pages, PDF export functionality for property listings, and comprehensive SEO — delivering a feature-rich platform tailored for cross-border property acquisition.',
  detailHeroLine: 'CUSTOM WORDPRESS · REAL ESTATE · THAILAND',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Gutenberg Blocks', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'Multi-language', label: 'International Ready', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom Gutenberg Theme + BookingPress', highlight: true },
          { label: 'MySQL Database' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Nginx Server' },
          { label: 'Cloudflare CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'A custom Gutenberg block-based WordPress theme provides precise editorial control over property listing and service pages. BookingPress handles appointment scheduling for property viewings. Multi-language support enables the agency to serve international buyers, and a PDF export feature allows clients to download property details. Cloudflare CDN ensures fast delivery across Asia and beyond.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
      caption: 'Home page presenting Thailand property services for international buyers',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide2.webp',
      caption: 'Property listing pages with multi-language support and search filters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide3.webp',
      caption: 'BookingPress appointment scheduling system for property viewing reservations',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide4.webp',
      caption: 'PDF export feature allowing clients to download property listing details',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible property listing and service pages' },
      { short: 'CSS3', full: 'Custom CSS3 providing tailored styling for the real estate brand aesthetic' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive property filters, booking UI, and PDF generation' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ powering Gutenberg block theme logic and PDF export functionality' },
      { short: 'MySQL', full: 'MySQL database for property listings, booking data, and multilingual content' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all property pages, services, and media content' },
      { short: 'Custom Gutenberg Blocks', full: 'Bespoke Gutenberg blocks for flexible and structured property listing layouts' },
      { short: 'BookingPress Plugin', full: 'BookingPress for appointment scheduling and property viewing reservations' },
      { short: 'Multi-language Support', full: 'Multi-language configuration enabling content delivery in multiple languages for international buyers' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery to international buyers across Asia and globally' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing client data and booking transactions' },
      { short: 'Nginx', full: 'Nginx server optimized for multi-language WordPress performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for international visitor behavior and booking conversion analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for property location display on listing pages' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'International and local SEO targeting property-buying keywords for the Thailand market' },
      { short: 'Schema.org Markup', full: 'JSON-LD RealEstateListing schema for property rich results in search engines' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals across property and booking pages' },
      { short: 'WebP Images', full: 'WebP format for property photography ensuring fast loading for international visitors' },
    ],
    digitalMarketing: [
      { short: 'PDF Export', full: 'Custom WordPress-to-PDF export allowing clients to download and share property listings offline' },
    ],
  },
  features: [
    {
      title: 'Custom Gutenberg Block Theme',
      description:
        'A bespoke Gutenberg block-based WordPress theme provides full editorial control over property listing templates and service pages without relying on a traditional page builder.',
    },
    {
      title: 'BookingPress Appointment Scheduling',
      description:
        'Integrated BookingPress plugin enables clients to schedule property viewing appointments directly on the site, streamlining the buyer journey for international customers.',
    },
    {
      title: 'Multi-language Support',
      description:
        'Multi-language configuration allows the agency to serve property listings and service content in multiple languages, reaching foreign buyers across different markets.',
    },
    {
      title: 'PDF Property Listing Export',
      description:
        'A custom PHP-powered feature allows visitors to export any property listing as a PDF document for offline review, sharing, and client presentations.',
    },
    {
      title: 'SEO & Real Estate Schema',
      description:
        'Technical SEO with RealEstateListing Schema.org markup and Google Maps integration drives visibility for Thailand property search terms among international buyers.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.eximproperty.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default eximProperty
