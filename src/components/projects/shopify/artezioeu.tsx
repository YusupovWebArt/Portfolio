import { Project } from '../project-types'

const artezioeu: Project = {
  id: 6950,
  title: 'Artezioeu',
  description: 'Spain-based painting by numbers store.',
  fullDescription:
    'Artezioeu is a Spain-based Shopify e-commerce store specializing in painting-by-numbers kits. The store was built with a fully customized Shopify theme using Liquid templating, with all products, content pages, and app integrations configured for a smooth customer experience.',
  detailHeroLine: 'SHOPIFY · E-COMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'Multi-currency', label: 'Payments', accent: 'neutral' },
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
      'The store runs on Shopify\'s fully managed infrastructure, with a customized Liquid theme driving the storefront. Products and collections are managed through the Shopify Admin, while third-party apps extend functionality. Content is delivered globally via Shopify\'s built-in CDN with SSL-secured checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/artezioeu_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/artezioeu_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/artezioeu_thumb.webp',
      caption: 'Homepage of the Artezioeu painting-by-numbers Shopify store',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/artezioeu/artezioeu_slide2.webp',
      caption: 'Product collection page showcasing painting kits',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/artezioeu/artezioeu_slide3.webp',
      caption: 'Individual product page with detailed description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating engine used to build and customize the Shopify storefront' },
      { short: 'CSS3', full: 'Custom CSS3 styling for brand-aligned visual design and responsive layouts' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for interactive UI elements and dynamic cart behaviour' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin dashboard for managing products, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor and Liquid code customization to match brand identity' },
      { short: 'App Integration', full: 'Shopify App Store integrations for email marketing, reviews, and upselling' },
      { short: 'Product Management', full: 'Full product catalogue setup with variants, pricing, and inventory tracking' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed cloud hosting with 99.99% uptime and global redundancy' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption on all store pages and checkout flows' },
      { short: 'CDN', full: 'Shopify CDN for fast global asset delivery and reduced page load times' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Built-in Shopify Analytics for tracking sales, traffic, and customer behaviour' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'On-page SEO configuration including meta titles, descriptions, and URL structure' },
      { short: 'Meta Tags Optimization', full: 'Optimized meta tags across all product and collection pages for search visibility' },
    ],
  },
  features: [
    {
      title: 'Custom Shopify Theme',
      description: 'The storefront was built using a fully customized Shopify Liquid theme, tailored to reflect the Artezioeu brand with cohesive colours, typography, and layout across all pages.',
    },
    {
      title: 'Product Catalogue & Management',
      description: 'All painting-by-numbers kits were set up with detailed titles, descriptions, high-quality images, variant options, pricing, and inventory tracking via the Shopify Admin dashboard.',
    },
    {
      title: 'App Integrations',
      description: 'Third-party Shopify apps were integrated to extend store functionality, including email marketing automation, customer review collection, and upsell/cross-sell prompts.',
    },
    {
      title: 'SEO & Content Pages',
      description: 'Custom static pages (About, FAQ, Shipping Policy) and SEO-optimized meta tags were configured to improve search engine visibility and reduce customer support inquiries.',
    },
    {
      title: 'Secure Checkout & Payments',
      description: 'Shopify\'s built-in payment gateway with SSL encryption ensures a secure and seamless checkout experience for customers across Spain and Europe.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.artezio.es/',
  githubUrl: '#',
  category: ['shopify'],
}

export default artezioeu
