import { Project } from '../project-types'

const secondChanceDecor: Project = {
  id: 6850,
  title: 'Second Chance Decor',
  description:
    'Canadian sustainable home décor retailer giving discontinued items a second life.',
  fullDescription:
    'Second Chance Decor is a Canadian Shopify store built around a sustainable retail mission — offering discontinued, overstock, and pre-loved home décor items a second life. The store features a fully customized Liquid theme with an eco-conscious aesthetic, a curated product catalogue, and app integrations to support the brand\'s sustainability story.',
  detailHeroLine: 'SHOPIFY · SUSTAINABLE HOME DÉCOR',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'CAD Market', label: 'Target Region', accent: 'neutral' },
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
      'Second Chance Decor runs on Shopify\'s managed platform with a custom Liquid theme built around an eco-friendly aesthetic. The curated product catalogue is managed via Shopify Admin, while apps extend store functionality for marketing and reviews. Assets are served via the Shopify CDN with fully encrypted checkout for Canadian customers.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/shopify/secondchancedecor_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/secondchancedecor_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/secondchancedecor_thumb.webp',
      caption: 'Second Chance Decor homepage highlighting the sustainable décor mission',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/secondchancedecor/secondchancedecor_slide2.webp',
      caption: 'Home décor product collection with curated overstock and discontinued items',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/secondchancedecor/secondchancedecor_slide3.webp',
      caption: 'Individual product page with sustainability story and product details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/secondchancedecor/secondchancedecor_slide4.webp',
      caption: 'Mobile-optimized store view with eco-conscious branding elements',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating used to build the eco-conscious Second Chance Decor storefront' },
      { short: 'CSS3', full: 'Custom CSS3 for a natural, sustainable aesthetic with earthy tones and clean layouts' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for product galleries, cart interactions, and interactive UI elements' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing curated décor products, orders, and store content' },
      { short: 'Theme Customization', full: 'Theme editor customization to communicate the sustainability brand identity' },
      { short: 'App Integration', full: 'Apps integrated for customer reviews, email marketing, and sustainability badges' },
      { short: 'Product Management', full: 'Home décor products configured with descriptions, CAD pricing, and inventory management' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting providing reliable performance for Canadian customers' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption securing all store pages and checkout transactions' },
      { short: 'CDN', full: 'Shopify CDN for fast delivery of product imagery and store assets across Canada' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics for tracking sales, customer behaviour, and conversion rates' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting Canadian home décor keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions to improve search visibility in Canada' },
    ],
  },
  features: [
    {
      title: 'Eco-Conscious Brand Theme',
      description: 'A custom Shopify Liquid theme with earthy tones, natural textures, and clean typography communicates the sustainability mission of Second Chance Decor from the first page visit.',
    },
    {
      title: 'Curated Sustainable Product Catalogue',
      description: 'Discontinued, overstock, and pre-loved home décor items were individually catalogued with compelling sustainability-focused descriptions, high-quality imagery, and CAD pricing.',
    },
    {
      title: 'Brand Story & Content Pages',
      description: 'Custom pages including the brand\'s mission statement, sustainability commitment, and FAQ were created to connect with eco-conscious Canadian shoppers and build brand loyalty.',
    },
    {
      title: 'Marketing & Review Integrations',
      description: 'Email marketing tools and customer review apps were integrated to run promotional campaigns, gather post-purchase feedback, and build social proof for the sustainable décor brand.',
    },
    {
      title: 'Secure Canadian Checkout',
      description: 'Shopify Payments configured for the Canadian market with CAD currency and SSL-secured checkout enables safe, familiar transactions for Canadian home décor shoppers.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.secondchancedecor.ca/',
  githubUrl: '#',
  category: ['shopify'],
}

export default secondChanceDecor
