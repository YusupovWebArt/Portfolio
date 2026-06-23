import { Project } from '../project-types'

const tuBebeYTu: Project = {
  id: 10950,
  title: 'Tu bebe y tu',
  description:
    'Spanish online store specializing in products for babies and mothers.',
  fullDescription:
    'Tu bebe y tu is a Spanish WooCommerce online store for baby and mother products, built on a custom WordPress theme with a fully populated product catalogue. The project included adding all product listings with descriptions and images, responsive design, SEO optimization for the Spanish market, and Google Maps integration for store location visibility.',
  detailHeroLine: 'CUSTOM WORDPRESS · BABY & MOTHER STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'ES Market', label: 'Target Audience', accent: 'neutral' },
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
      'A custom WordPress theme hosts the WooCommerce store, managing the full product catalogue for baby and mother items with cart and checkout functionality. Custom CSS3 and JavaScript deliver a warm, brand-consistent shopping experience, while Nginx and Cloudflare ensure fast, secure delivery to Spanish shoppers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
      caption: 'Home page with featured baby and mother product categories and hero banner',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/tubebeytu/tubebeytu_slide2.webp',
      caption: 'Product catalogue page with WooCommerce listings for baby and maternity items',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and Spanish SEO-optimized store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and warm brand-consistent styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart behavior' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side store logic' },
      { short: 'MySQL', full: 'MySQL database for product catalogue, orders, and customer data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the e-commerce platform foundation' },
      { short: 'WooCommerce', full: 'WooCommerce providing complete product management, cart, and checkout functionality' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built to match the baby and mother brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection in the Spanish market' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer sessions and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the store\'s physical location for local shoppers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking e-commerce conversions, product views, and revenue metrics' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Spanish-language SEO targeting baby and maternity product searches in Spain' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search results with pricing and availability' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green Core Web Vitals scores across store pages' },
      { short: 'WebP Images', full: 'WebP product images for fast loading without sacrificing visual quality' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing tools for Spanish-market promotions and customer engagement campaigns' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A fully custom WordPress theme was developed to create a warm, welcoming brand environment tailored specifically to the baby and mother market in Spain.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was fully integrated to power the online store, including product catalogue management, shopping cart, secure checkout, and payment gateway support.',
    },
    {
      title: 'Full Product Catalogue Setup',
      description:
        'All baby and mother products were entered with detailed descriptions, categories, images, and pricing to provide shoppers with comprehensive product information.',
    },
    {
      title: 'Responsive Design',
      description:
        'The store is fully responsive across desktops, tablets, and smartphones, ensuring Spanish parents can browse and purchase products conveniently from any device.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Spanish-language SEO with Schema.org product markup and optimized meta tags drives organic search visibility for baby and maternity product queries in Spain.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.tubebeytu.es/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default tuBebeYTu
