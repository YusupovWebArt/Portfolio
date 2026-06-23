import { Project } from '../project-types'

const artDemes: Project = {
  id: 10890,
  title: 'Artdemes',
  description: 'Artesania creativa. Spain store.',
  fullDescription:
    'A custom WooCommerce store built on a hand-coded WordPress theme using Elementor, extended with custom CSS3 and JavaScript for a creative artisan aesthetic. The project included full product catalog setup with crafted content and category management, serving the Spanish handmade goods market with a visually rich and SEO-optimized shopping experience.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARTISAN E-COMMERCE · SPAIN',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'Elementor', label: 'Page Builder', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'WooCommerce + Custom Theme', highlight: true },
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
      'WordPress with WooCommerce handles the full e-commerce layer including product management, cart, checkout, and payment gateways. Elementor provides the client-editable page structure, enriched with custom CSS3 and JavaScript for advanced styling and animations. Cloudflare CDN ensures fast delivery of product imagery across Spain.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
      caption: 'Home page showcasing the artisan store\'s creative brand and featured products',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide2.webp',
      caption: 'WooCommerce product catalog with artisan goods organized by category',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide3.webp',
      caption: 'Individual product detail page with description, images, and add-to-cart',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide4.webp',
      caption: 'Category browsing page with filtered artisan product listings',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and well-structured store pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the artisan aesthetic and advanced product grid animations' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product filtering and dynamic cart behavior' },
      { short: 'Elementor', full: 'Elementor page builder for flexible layout management per client requirement' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WooCommerce and WordPress with store-specific logic' },
      { short: 'MySQL', full: 'MySQL database for product catalog, orders, customer data, and categories' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content and e-commerce management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce powering product management, checkout, and payment processing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of product images and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure customer checkout and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce store performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 e-commerce tracking for product views, cart events, and purchases' },
      { short: 'Google Maps API', full: 'Google Maps API for studio and pickup location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category page SEO targeting Spanish artisan market search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD Product schema for rich price and availability snippets in Google' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Store performance tuned for green Core Web Vitals to reduce cart abandonment' },
      { short: 'WebP Images', full: 'WebP format for all product photography ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'WooCommerce E-Commerce Integration',
      description:
        'Full WooCommerce setup including product catalog, category management, secure checkout, and payment gateway integration — providing a complete online shopping experience for artisan goods.',
    },
    {
      title: 'Elementor Enhanced with Custom Code',
      description:
        'Elementor was used per the client\'s requirement and enriched with custom CSS3 and JavaScript, delivering advanced animations and precise styling unique to the Artdemes brand.',
    },
    {
      title: 'Product Catalog & Content Setup',
      description:
        'Complete product content was created and organized into logical categories, including descriptions, images, and pricing, ready for the Spanish artisan market launch.',
    },
    {
      title: 'SEO & Schema.org for Products',
      description:
        'Product pages feature JSON-LD Schema markup and optimized meta tags, driving rich search snippets with price and availability information in Spanish and international search results.',
    },
    {
      title: 'Responsive Shopping Experience',
      description:
        'The store is fully responsive across desktop, tablet, and mobile, ensuring artisan shoppers can browse and purchase from any device with a seamless checkout flow.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://artdemes.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default artDemes
