import { Project } from '../project-types'

const causetume: Project = {
  id: 11500,
  title: 'Causetume',
  description: 'Knitwear Brand. Cloth store',
  fullDescription:
    'A WooCommerce online store built on a premium WordPress theme, customized with CSS3 and JavaScript to match the Causetume knitwear brand identity. Full product catalog setup including product content, images, categories, and variant configuration was completed, giving the brand a polished e-commerce presence for their knitwear collections.',
  detailHeroLine: 'PREMIUM WORDPRESS · KNITWEAR · E-COMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'Premium Theme', label: 'Customized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'WooCommerce + Premium Theme', highlight: true },
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
      'WordPress with WooCommerce manages the complete e-commerce layer including product listings, cart, checkout, and payment gateways. A premium WordPress theme was customized with CSS3 and JavaScript to reflect the Causetume knitwear brand. Cloudflare CDN ensures fast delivery of product photography to global shoppers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
      caption: 'Home page showcasing the Causetume knitwear brand and featured collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/causetume/causetume_slide2.webp',
      caption: 'WooCommerce product catalog displaying knitwear collections by category',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/causetume/causetume_slide3.webp',
      caption: 'Individual product detail page with size variants, description, and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible product and category pages' },
      { short: 'CSS3', full: 'Custom CSS3 tailoring the premium theme to match the Causetume knitwear brand identity' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product gallery and cart functionality' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce store logic' },
      { short: 'MySQL', full: 'MySQL database for product catalog, orders, customer data, and settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation for the store' },
      { short: 'WooCommerce', full: 'WooCommerce for product management, checkout flow, and payment processing' },
      { short: 'Premium Theme', full: 'Premium WordPress theme customized with CSS3/JS for the Causetume brand' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast global delivery of knitwear product photography' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer checkout and payment transactions' },
      { short: 'Nginx', full: 'Nginx server configured for WooCommerce performance and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 e-commerce tracking for product views, cart events, and purchases' },
      { short: 'Google Maps API', full: 'Google Maps API for brand showroom or pickup location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category SEO targeting knitwear and fashion store search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD Product schema for rich price and availability snippets in search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Store performance tuned for green Core Web Vitals to support conversions' },
      { short: 'WebP Images', full: 'WebP format for all knitwear product photography ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'WooCommerce Store Setup',
      description:
        'Full WooCommerce configuration including product catalog, category structure, size variants, checkout flow, and payment gateway integration for the Causetume knitwear brand.',
    },
    {
      title: 'Premium Theme Customization',
      description:
        'A premium WordPress theme was selected and customized using CSS3 and JavaScript to precisely reflect the brand\'s aesthetic, delivering a professional knitwear store without a custom build from scratch.',
    },
    {
      title: 'Product Content & Catalog Setup',
      description:
        'Complete product content was created and uploaded, including product descriptions, high-quality images, categories, and variant configurations ready for the store launch.',
    },
    {
      title: 'SEO & Schema.org for Products',
      description:
        'Product pages include JSON-LD Schema markup and optimized metadata, driving rich search snippets with pricing and availability to attract fashion shoppers organically.',
    },
    {
      title: 'Responsive Shopping Experience',
      description:
        'Fully responsive layout ensures customers can browse collections and complete purchases seamlessly across desktop, tablet, and mobile devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://causetume.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default causetume
