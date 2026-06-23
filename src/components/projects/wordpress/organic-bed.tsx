import { Project } from '../project-types'

const organicBed: Project = {
  id: 16000,
  title: 'Organic Bed',
  description:
    'RTL Israeli website offering a range of eco-friendly, organic bedding products.',
  fullDescription:
    'Organic Bed is an Israeli e-commerce store built on a custom WordPress theme from scratch with full Right-to-Left (RTL) Hebrew language support. WooCommerce powers the product catalogue and checkout, while Advanced Custom Fields enable flexible content management. The site features responsive design, SEO optimization, and WebP images for high performance in the Israeli market.',
  detailHeroLine: 'CUSTOM WORDPRESS · RTL WOOCOMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'RTL', label: 'Hebrew Support', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'IL Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STORE LAYER',
        steps: [
          { label: 'Custom RTL WP Theme' },
          { label: 'WooCommerce + ACF', highlight: true },
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
      'A custom WordPress theme with full RTL CSS support was built from scratch to serve Hebrew-speaking customers. WooCommerce manages the organic bedding product catalogue and checkout flows, with Advanced Custom Fields providing the client with flexible content editing. Nginx and Cloudflare ensure fast, secure delivery across Israel.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/organicbed_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/organicbed_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/organicbed_thumb.webp',
      caption: 'Home page with RTL Hebrew layout and organic bedding hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/organicbed/organicbed_slide2.webp',
      caption: 'WooCommerce product catalogue with organic bedding categories and filters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/organicbed/organicbed_slide3.webp',
      caption: 'Product detail page with Hebrew content, pricing, and add-to-cart button',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 with RTL dir attribute support for Hebrew content' },
      { short: 'CSS3', full: 'Custom CSS3 with RTL-specific rules, Flexbox, and Grid for responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive shopping components and UI enhancements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme functions and WooCommerce server-side logic' },
      { short: 'MySQL', full: 'MySQL database for product catalogue, orders, and customer records' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS providing the publishing and e-commerce foundation' },
      { short: 'WooCommerce', full: 'WooCommerce for complete online store functionality including cart and checkout' },
      { short: 'Advanced Custom Fields', full: 'ACF plugin enabling flexible, non-technical content editing for the client' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN providing fast delivery and security for Israeli visitors' },
      { short: 'SSL/TLS', full: 'HTTPS encryption protecting customer data and payment sessions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WordPress and WooCommerce performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking product views, add-to-cart events, and conversion rates' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Hebrew-language SEO with optimized meta tags and product page structure' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search results with pricing in ILS' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals scores across all store pages' },
      { short: 'WebP Images', full: 'WebP format for all product images ensuring fast loading without quality loss' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations supporting promotions and customer engagement campaigns' },
    ],
  },
  features: [
    {
      title: 'Full RTL (Right-to-Left) Support',
      description:
        'The theme was developed with complete RTL CSS support for the Hebrew language, ensuring correct text direction, layout mirroring, and navigation flow for Israeli users.',
    },
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A unique WordPress theme was designed and built from scratch, tailored specifically to the Organic Bed brand identity and Hebrew-market functional requirements.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was fully integrated to power the online store, including organic product listings, shopping cart, and a secure checkout process in Hebrew.',
    },
    {
      title: 'Advanced Custom Fields',
      description:
        'ACF was implemented to give the client flexible, user-friendly content editing capabilities without requiring developer involvement for routine updates.',
    },
    {
      title: 'Responsive Design & SEO',
      description:
        'The store is fully responsive across all devices and optimized for Hebrew-language search queries with Schema.org product markup and technical SEO best practices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://organicbed.co.il/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default organicBed
