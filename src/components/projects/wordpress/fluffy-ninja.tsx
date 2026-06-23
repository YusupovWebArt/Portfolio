import { Project } from '../project-types'

const fluffyNinja: Project = {
  id: 10910,
  title: 'Fluffy Ninja',
  description: 'Creative cloth store. France',
  fullDescription:
    'A custom WooCommerce store built on a hand-coded WordPress theme for a French creative clothing brand. Custom CSS3, JavaScript, and PHP deliver a playful and unique visual identity, while WooCommerce provides the full e-commerce infrastructure — product catalog, cart, and checkout. Full SEO optimization and Schema.org markup support organic search visibility in the French fashion market.',
  detailHeroLine: 'CUSTOM WORDPRESS · CREATIVE FASHION · E-COMMERCE · FRANCE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'Schema.org', label: 'Structured Data', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'WooCommerce + Custom PHP Theme', highlight: true },
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
      'A custom PHP WordPress theme powers the Fluffy Ninja store with WooCommerce managing the complete e-commerce layer. MySQL stores all product data, order records, and customer information. Cloudflare CDN delivers product photography fast to French shoppers globally, while Nginx handles server-side performance.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
      caption: 'Home page showcasing the Fluffy Ninja creative clothing brand identity',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/fluffy-ninja/fluffy-ninja_slide2.webp',
      caption: 'WooCommerce product catalog with creative clothing collections by category',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/fluffy-ninja/fluffy-ninja_slide3.webp',
      caption: 'Individual product page with variant selection, imagery, and purchase flow',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for structured and accessible store pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the playful, creative visual identity of the Fluffy Ninja brand' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product gallery, filters, and cart behaviors' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme handling WooCommerce and store-specific logic' },
      { short: 'MySQL', full: 'MySQL database for product catalog, orders, customer data, and settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation for the clothing store' },
      { short: 'WooCommerce', full: 'WooCommerce powering product management, cart, checkout, and payment gateways' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of product images to French and global shoppers' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer checkout and payment data' },
      { short: 'Nginx', full: 'Nginx server configured for optimal WooCommerce store performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 e-commerce tracking for product views, cart events, and purchase funnels' },
      { short: 'Google Maps API', full: 'Google Maps API for brand location or showroom display on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category SEO targeting French fashion and creative clothing keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD Product schema for rich price and availability snippets in French search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Store performance tuned for green Core Web Vitals to reduce bounce rate' },
      { short: 'WebP Images', full: 'WebP format for all clothing photography ensuring fast page loads for shoppers' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'The store theme was hand-coded in PHP, giving Fluffy Ninja a completely unique and creative visual identity that stands out in the French fashion market.',
    },
    {
      title: 'WooCommerce E-Commerce Integration',
      description:
        'Full WooCommerce setup provides product management, variant configuration, secure checkout, and payment gateway support for the clothing store.',
    },
    {
      title: 'Creative Brand Aesthetic',
      description:
        'Custom CSS3 and JavaScript implement the Fluffy Ninja brand\'s playful personality through unique animations, color schemes, and interactive product browsing experiences.',
    },
    {
      title: 'SEO & Schema.org for Products',
      description:
        'JSON-LD Product schema and optimized meta tags drive rich search snippets with pricing and availability, improving visibility for French fashion shoppers searching online.',
    },
    {
      title: 'Responsive & Fast Shopping Experience',
      description:
        'Fully responsive design with WebP product images and Cloudflare CDN ensures a fast, visually engaging shopping experience across all devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://fluffy-ninja.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default fluffyNinja
