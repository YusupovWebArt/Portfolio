import { Project } from '../project-types'

const kidzely: Project = {
  id: 6700,
  title: 'Kidzely',
  description: 'USA-based online store for baby products.',
  fullDescription:
    'Kidzely is a US-based Shopify store specializing in baby and kids products. The store was built with a warm, family-friendly custom Liquid theme, a full product catalogue with size and colour variants, and app integrations for marketing and customer engagement.',
  detailHeroLine: 'SHOPIFY · BABY & KIDS STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STORE ENGINE',
        steps: [
          { label: 'Shopify Liquid' },
          { label: 'Theme Customization', highlight: true },
          { label: 'App Integration' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Shopify CDN' },
          { label: 'SSL/TLS', highlight: true },
          { label: 'Customer Checkout' },
        ],
      },
    ],
    description:
      'Kidzely operates on Shopify\'s managed platform with a custom Liquid theme tailored for a baby and kids retail audience. Products with size and colour variants are handled through the Shopify Admin, while integrated apps power email marketing and reviews. Assets are delivered via Shopify\'s CDN with fully encrypted checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/kidzely_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/kidzely_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/kidzely_thumb.webp',
      caption: 'Kidzely homepage featuring baby and kids product collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide2.webp',
      caption: 'Product collection page with category filters and product cards',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide3.webp',
      caption: 'Individual product page with size variants and add-to-cart button',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide4.webp',
      caption: 'Mobile-optimized view of the Kidzely store storefront',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating used to build a warm, family-friendly storefront for Kidzely' },
      { short: 'CSS3', full: 'Custom CSS3 for responsive, child-friendly visual design and colour palette' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for product galleries, cart interactions, and UI features' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing all products, collections, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor customization to create a family-friendly brand experience' },
      { short: 'App Integration', full: 'Apps integrated for email marketing, customer reviews, and shipping notifications' },
      { short: 'Product Management', full: 'Baby and kids products set up with size/colour variants, pricing, and inventory' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring reliable performance for US-market traffic' },
      { short: 'SSL/TLS', full: 'Full SSL/TLS encryption on all pages and checkout to protect customer data' },
      { short: 'CDN', full: 'Shopify CDN for fast delivery of product images and assets to US customers' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics dashboard for monitoring sales, traffic, and conversion rates' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting US baby product search terms' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions across all store pages for search visibility' },
    ],
  },
  features: [
    {
      title: 'Family-Friendly Theme Design',
      description: 'A warm, welcoming Shopify Liquid theme was customized with soft colours, playful typography, and a layout designed to appeal to parents shopping for baby and kids products.',
    },
    {
      title: 'Product Variants & Inventory',
      description: 'All baby products were set up with multiple size and colour variants, inventory tracking, and clear pricing to simplify the shopping experience for parents.',
    },
    {
      title: 'Marketing App Integrations',
      description: 'Email marketing automation, customer review apps, and shipping notification tools were integrated from the Shopify App Store to drive repeat purchases and build customer trust.',
    },
    {
      title: 'SEO-Optimized Product Pages',
      description: 'Each product and collection page was optimized with targeted meta titles, descriptions, and alt text to improve visibility in US baby product search queries.',
    },
    {
      title: 'Secure US Checkout',
      description: 'Shopify Payments with full SSL encryption provides a safe, familiar checkout experience for US customers, supporting major credit cards and digital wallets.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.kidzely.com/',
  githubUrl: '#',
  category: ['shopify'],
}

export default kidzely
