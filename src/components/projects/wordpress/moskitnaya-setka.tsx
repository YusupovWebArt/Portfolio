import { Project } from '../project-types'

const moskitnayaSetka: Project = {
  id: 10930,
  title: 'Moskitnaya setka',
  description: 'Ukrainian Mosquito net store.',
  fullDescription:
    'Moskitnaya Setka is a Ukrainian WooCommerce-based online store built on a fully custom WordPress theme developed from scratch. The project included a complete product catalogue setup, responsive design, SEO optimization with Schema.org markup, and Google Maps integration to support local customer discovery.',
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
          { label: 'Custom WP Theme' },
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
      'A custom WordPress theme built from scratch hosts the WooCommerce store, handling product display, cart, and checkout. Custom CSS3 and JavaScript deliver a tailored shopping experience, while Nginx caching and Cloudflare CDN ensure fast load times for Ukrainian customers.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/moskitnaya-setka_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/moskitnaya-setka_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/moskitnaya-setka_thumb.webp',
      caption: 'Home page with hero banner and featured mosquito net product categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/moskitnaya-setka/moskitnaya-setka_slide2.webp',
      caption: 'Product catalogue page with WooCommerce category grid layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/moskitnaya-setka/moskitnaya-setka_slide3.webp',
      caption: 'Individual product page with specifications and add-to-cart functionality',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/moskitnaya-setka/moskitnaya-setka_slide4.webp',
      caption: 'Shopping cart and checkout flow with secure payment options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/moskitnaya-setka/moskitnaya-setka_slide5.webp',
      caption: 'About and services section with delivery and installation information',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/moskitnaya-setka/moskitnaya-setka_slide6.webp',
      caption: 'Contact page with Google Maps location and customer inquiry form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and indexable store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with Grid and Flexbox for responsive product layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive store elements and dynamic UI components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side operations' },
      { short: 'MySQL', full: 'MySQL database for storing product, order, and customer data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform foundation for the online store' },
      { short: 'WooCommerce', full: 'WooCommerce plugin providing the complete e-commerce layer including product management and checkout' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for a unique brand-specific shopping experience' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer sessions and payment flows' },
      { short: 'Nginx', full: 'Nginx web server with page caching for improved WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API integrated to display the store\'s physical location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking e-commerce conversions, traffic sources, and user behaviour' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category page SEO with optimized meta tags and URL structure' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search result snippets with pricing and availability' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP product images for faster loading without compromising visual quality' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for promotions, discounts, and customer engagement' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'The entire WordPress theme was built from scratch, giving full design control and ensuring optimal performance without the overhead of third-party theme bloat.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was integrated to deliver robust e-commerce functionality including product catalogue management, secure shopping cart, and payment gateway support.',
    },
    {
      title: 'Full Product Catalogue Setup',
      description:
        'All mosquito net products were entered with detailed descriptions, specifications, images, and categories to maximize customer comprehension and conversion rates.',
    },
    {
      title: 'Responsive Design',
      description:
        'The store is fully responsive across all device types, providing a seamless shopping experience from mobile browsing through to desktop checkout.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Technical SEO with Schema.org product markup, optimized meta tags, and a clean URL structure drives organic search visibility in the Ukrainian market.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://moskitnaya-setka.com.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default moskitnayaSetka
