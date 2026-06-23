import { Project } from '../project-types'

const vikaMaster: Project = {
  id: 10860,
  title: 'Vikamaster',
  description:
    'Handcrafted jewelry brand based in Ukraine, offering an array of beautifully artisan-made accessories.',
  fullDescription:
    'Vikamaster is a Ukrainian artisan jewelry online store built on a fully custom WordPress theme with WooCommerce integration. The project included setting up a complete product catalogue with handcrafted jewelry items, custom CSS3 and JavaScript styling for a premium boutique aesthetic, and SEO optimization to drive organic traffic for unique jewelry searches in Ukraine.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARTISAN JEWELRY STORE',
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
      'A custom WordPress theme designed for boutique jewelry presentation hosts WooCommerce for complete store functionality. Custom CSS3 ensures a premium visual aesthetic for product galleries, while JavaScript enhances interactive shopping elements. Cloudflare CDN and Nginx deliver fast, secure pages to Ukrainian customers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
      caption: 'Home page with artisan jewelry hero banner and featured handcrafted collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vikamaster/vikamaster_slide2.webp',
      caption: 'Product catalogue with WooCommerce jewelry listings and category filters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vikamaster/vikamaster_slide3.webp',
      caption: 'Individual jewelry product detail page with photos, description, and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized jewelry store pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a premium boutique aesthetic for product galleries and layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart enhancements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side store logic' },
      { short: 'MySQL', full: 'MySQL database for jewelry product data, orders, and customer records' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the e-commerce and content management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce providing product catalogue, cart, checkout, and payment processing' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the artisan jewelry boutique aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection in the Ukrainian market' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce store performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the brand\'s physical studio location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking product views, add-to-cart events, and sales conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian jewelry SEO targeting artisan and handcrafted accessory search queries' },
      { short: 'Schema.org Markup', full: 'Product JSON-LD structured data for rich search results with pricing details' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals across all store pages' },
      { short: 'WebP Images', full: 'WebP format for high-quality jewelry product photography with fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for jewelry promotions and customer retention' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A bespoke WordPress theme was developed from scratch to capture the boutique aesthetic of a handcrafted jewelry brand, ensuring every design element supports premium product presentation.',
    },
    {
      title: 'WooCommerce Integration',
      description:
        'WooCommerce was fully integrated to power the online store with product catalogue management, shopping cart, secure checkout, and payment gateway support for Ukrainian customers.',
    },
    {
      title: 'Full Product Catalogue Setup',
      description:
        'All artisan jewelry items were added with detailed descriptions, high-quality photography, material specifications, and categorization to maximize customer engagement and conversions.',
    },
    {
      title: 'Responsive Design',
      description:
        'The store is fully responsive across desktops, tablets, and smartphones, giving shoppers a seamless jewelry browsing and purchase experience from any device.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Ukrainian jewelry SEO with Schema.org product markup and optimized meta tags drives organic visibility for handcrafted and artisan accessory search queries.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://vikamaster.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default vikaMaster
