import { Project } from '../project-types'

const LueirisLashes: Project = {
  id: 6800,
  title: 'Lueiris lashes',
  description: 'US-based lashes beauty store.',
  fullDescription:
    'Lueiris Lashes is a US-based Shopify beauty store specializing in eyelash products and accessories. The store features a sleek, beauty-focused custom Liquid theme, a curated product catalogue with detailed variant options, and app integrations for customer engagement and marketing.',
  detailHeroLine: 'SHOPIFY · BEAUTY & LASHES STORE',
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
      'Lueiris Lashes runs on Shopify\'s managed platform with a custom Liquid theme designed for the beauty market. Products are managed through the Shopify Admin with detailed variant configurations, while integrated apps handle reviews and marketing. The Shopify CDN ensures fast asset delivery with SSL-secured checkout for US customers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/lueirislashes_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/lueirislashes_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/lueirislashes_thumb.webp',
      caption: 'Lueiris Lashes homepage showcasing the beauty brand and product range',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide2.webp',
      caption: 'Product collection page with lash product cards and category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide3.webp',
      caption: 'Individual lash product page with variant selection and add-to-cart',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide4.webp',
      caption: 'Mobile-optimized store view with beauty-focused visual design',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating used to build the sleek, beauty-focused Lueiris Lashes storefront' },
      { short: 'CSS3', full: 'Custom CSS3 for a premium beauty aesthetic with responsive design across all devices' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for product image galleries, cart interactions, and UI effects' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing lash products, collections, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor and Liquid code customization to create a premium beauty brand feel' },
      { short: 'App Integration', full: 'Apps integrated for customer reviews, email marketing, and loyalty programmes' },
      { short: 'Product Management', full: 'Lash products configured with style variants, pricing, inventory, and imagery' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring consistent uptime for the US beauty market' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption protecting customer data and payment information at checkout' },
      { short: 'CDN', full: 'Shopify CDN delivering high-quality product images and assets quickly to US shoppers' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics used to track sales performance, traffic sources, and conversion rates' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting US beauty and lash search terms' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all store pages for improved search rankings' },
    ],
  },
  features: [
    {
      title: 'Premium Beauty Theme',
      description: 'A sleek, feminine Shopify Liquid theme was customized with elegant typography, high-contrast imagery, and a layout designed to highlight beauty products and drive purchase decisions.',
    },
    {
      title: 'Lash Product Catalogue',
      description: 'All eyelash products and accessories were set up with detailed style variants, high-quality product imagery, clear descriptions, and pricing to support confident purchase decisions.',
    },
    {
      title: 'Customer Reviews & Trust Signals',
      description: 'A product review app was integrated to showcase customer testimonials and user-generated content, building social proof and increasing conversion rates for the lash store.',
    },
    {
      title: 'Email Marketing Integration',
      description: 'Email marketing tools were connected to capture subscribers at checkout and run targeted campaigns for new product launches, promotions, and customer retention.',
    },
    {
      title: 'Secure & Seamless Checkout',
      description: 'Shopify Payments with full SSL encryption delivers a secure, one-page checkout experience optimized for US customers using credit cards and digital payment methods.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://lueirislashes.com/',
  githubUrl: '#',
  category: ['shopify'],
}

export default LueirisLashes
