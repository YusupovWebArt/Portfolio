import { Project } from '../project-types'

const lunaMebel: Project = {
  id: 10880,
  title: 'Lunamebel',
  description: 'Ukrainian online furniture store.',
  fullDescription:
    'Lunamebel is a Ukrainian online furniture store built on WordPress with WooCommerce, featuring a fully customized premium theme, a complete product catalogue, and secure checkout. The project included adding all product data and content, with SEO optimization and Google Maps integration to drive local traffic.',
  detailHeroLine: 'CUSTOM WORDPRESS · WOOCOMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
    { value: 'Full Catalogue', label: 'Product Setup', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STORE LAYER',
        steps: [
          { label: 'Premium WP Theme' },
          { label: 'WooCommerce', highlight: true },
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
      'The store runs on WordPress with WooCommerce handling the complete e-commerce layer including product management, cart, and payment gateways. A premium theme was customized with CSS3 and JavaScript for brand-specific styling, while Cloudflare CDN ensures fast delivery to Ukrainian customers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
      caption: 'Home page with featured furniture collections and hero banner',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/lunamebel/lunamebel_slide2.webp',
      caption: 'Product catalogue page with WooCommerce category listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/lunamebel/lunamebel_slide3.webp',
      caption: 'Individual product detail page with description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and SEO-friendly store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with Grid and Flexbox for responsive product layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product carousels and UI elements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side logic' },
      { short: 'MySQL', full: 'MySQL database storing product data, orders, and customer information' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the foundation for store management and content' },
      { short: 'WooCommerce', full: 'WooCommerce e-commerce plugin for product listings, cart, and checkout' },
      { short: 'Premium WP Theme', full: 'Premium WordPress theme customized to match the furniture brand aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast content delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and transactions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show the store\'s physical location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking e-commerce events, sessions, and conversion funnels' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'On-page SEO with optimized product meta tags and category structure' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search results and price display' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP product images for faster page loads and better user experience' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for promotions and customer retention' },
    ],
  },
  features: [
    {
      title: 'Premium WordPress Theme Customization',
      description:
        'A premium WordPress theme was customized using CSS3 and JavaScript to reflect the Lunamebel brand aesthetic and provide an engaging shopping experience.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was fully integrated to power the online store, including product catalogue management, shopping cart, secure checkout, and payment gateway support.',
    },
    {
      title: 'Full Product Catalogue Setup',
      description:
        'All furniture products were added to the store with detailed descriptions, categorization, pricing, and high-quality images to maximize conversion rates.',
    },
    {
      title: 'Responsive Design',
      description:
        'The store is fully optimized for all screen sizes, ensuring a seamless shopping experience on desktops, tablets, and mobile devices.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Implemented technical SEO with product-specific Schema.org markup, optimized meta tags, and fast load times to improve search visibility in the Ukrainian market.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://lunamebel.com.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default lunaMebel
