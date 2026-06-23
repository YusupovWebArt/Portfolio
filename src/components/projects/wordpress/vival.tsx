import { Project } from '../project-types'

const vival: Project = {
  id: 10830,
  title: 'Vival',
  description:
    'Ukrainian online store specializing in premium construction materials, particularly for roofing and industrial flooring.',
  fullDescription:
    'Vival is a Ukrainian WooCommerce online store for premium construction materials including roofing and industrial flooring products. Built on a fully custom WordPress theme from scratch, the project included a complete product catalogue setup, responsive design, and SEO optimization with Schema.org markup to drive organic traffic for construction material searches across Ukraine.',
  detailHeroLine: 'CUSTOM WORDPRESS · CONSTRUCTION MATERIALS STORE',
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
      'A custom WordPress theme built from scratch hosts the WooCommerce store for construction and roofing materials. Custom CSS3 and JavaScript deliver a professional, industrial-grade visual experience while maintaining fast load times. MySQL stores the full product catalogue, and Cloudflare CDN ensures reliable delivery to Ukrainian business customers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
      caption: 'Home page with premium construction materials hero and featured product categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vival/vival_slide2.webp',
      caption: 'Product catalogue with roofing and industrial flooring WooCommerce listings',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized construction store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and professional industrial-style design' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart functionality' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side logic and form handling' },
      { short: 'MySQL', full: 'MySQL database for construction product catalogue, orders, and customer data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS providing the e-commerce and content management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce enabling product catalogue management, cart, and secure checkout' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for a professional construction brand presence' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and security across Ukraine' },
      { short: 'SSL/TLS', full: 'HTTPS encryption protecting customer data and business transaction security' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal WooCommerce store performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show warehouse and pickup location for customers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking product page views, add-to-cart events, and purchase conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian construction material SEO targeting roofing and flooring product searches' },
      { short: 'Schema.org Markup', full: 'Product JSON-LD structured data for rich search results with pricing and availability' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for construction product images ensuring fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations supporting Ukrainian B2B and B2C customer acquisition' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A fully custom WordPress theme was built from scratch to present construction materials in a professional, trustworthy manner appropriate for the Ukrainian B2B and B2C markets.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was fully integrated providing product catalogue management, shopping cart, and secure checkout for roofing and flooring material purchases.',
    },
    {
      title: 'Full Product Catalogue Setup',
      description:
        'All construction products including roofing materials and industrial flooring were entered with detailed technical specifications, images, and pricing for professional buyer decision-making.',
    },
    {
      title: 'Responsive Design',
      description:
        'The store is fully responsive across all devices, enabling contractors and buyers to browse and order construction materials from mobile, tablet, or desktop.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Ukrainian market SEO with Schema.org product markup and construction-specific meta tags drives organic search visibility for roofing and flooring material queries.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://vival.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default vival
