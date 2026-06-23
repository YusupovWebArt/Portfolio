import { Project } from '../project-types'

const cartooniko: Project = {
  id: 6750,
  title: 'Cartooniko',
  description: 'Custom portraits in cartoon style.',
  fullDescription:
    'Cartooniko is a creative Shopify store offering custom cartoon-style portrait commissions. The store was fully set up with a branded Liquid theme, a product catalogue for portrait packages, and integrated apps to handle orders and customer communication.',
  detailHeroLine: 'SHOPIFY · CUSTOM ART STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'Secure Checkout', label: 'Payments', accent: 'neutral' },
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
      'Cartooniko is powered by Shopify\'s managed platform with a bespoke Liquid theme driving the storefront visuals. Commission products are managed via the Shopify Admin, and apps handle order notifications and marketing. Assets are served through the Shopify CDN with full SSL encryption at checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/cartooniko_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/cartooniko_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/cartooniko_thumb.webp',
      caption: 'Cartooniko homepage showcasing custom cartoon portrait offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/cartooniko/cartooniko_slide2.webp',
      caption: 'Product page for a cartoon portrait package with ordering options',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating engine used to build the customized Cartooniko storefront' },
      { short: 'CSS3', full: 'Custom CSS3 for brand-specific styling, colours, and responsive design' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for interactive cart, product galleries, and UI behaviour' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin used to manage commission products, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor and Liquid customization to reflect the playful brand identity' },
      { short: 'App Integration', full: 'Apps integrated for order confirmation emails, reviews, and upselling' },
      { short: 'Product Management', full: 'Portrait commission packages configured with pricing, descriptions, and images' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting providing reliable uptime and performance' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption ensuring secure transactions and customer data protection' },
      { short: 'CDN', full: 'Shopify CDN delivering store assets quickly to global customers' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics tracking sales, conversion rates, and store traffic' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO configuration for product and collection pages to improve organic reach' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions set for all key store pages' },
    ],
  },
  features: [
    {
      title: 'Creative Brand Theme',
      description: 'A playful, visually engaging Shopify Liquid theme was customized to match the Cartooniko brand, featuring bold colours, custom fonts, and an art-focused layout.',
    },
    {
      title: 'Commission Product Setup',
      description: 'Portrait commission packages were created as Shopify products with clear package tiers, example artwork galleries, delivery timelines, and pricing variants.',
    },
    {
      title: 'App & Order Management',
      description: 'Third-party Shopify apps were integrated to automate order notification emails, collect customer reviews, and manage post-purchase upsell offers.',
    },
    {
      title: 'Content & Policy Pages',
      description: 'Custom pages including How It Works, FAQ, and Refund Policy were created to guide customers through the commission process and reduce support queries.',
    },
    {
      title: 'Secure Payment Processing',
      description: 'Shopify Payments with SSL-secured checkout enables customers to safely purchase portrait commissions using major credit cards and digital payment methods.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://cartooniko.myshopify.com/',
  githubUrl: '#',
  category: ['shopify'],
}

export default cartooniko
