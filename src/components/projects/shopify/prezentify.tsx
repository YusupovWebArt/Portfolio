import { Project } from '../project-types'

const prezentify: Project = {
  id: 6900,
  title: 'Prezentify',
  description: 'Polish online store specializing in personalized gifts.',
  fullDescription:
    'Prezentify is a Polish Shopify store offering a wide range of personalized gift products. The store was built with a fully customized Liquid theme reflecting a warm gifting aesthetic, complete product catalogue with personalization options, and app integrations for marketing and customer engagement in the Polish market.',
  detailHeroLine: 'SHOPIFY · PERSONALIZED GIFTS STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'PLN Currency', label: 'Polish Market', accent: 'neutral' },
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
      'Prezentify is built on Shopify\'s managed platform with a custom Liquid theme tailored for the personalized gifts market in Poland. Products with customization options are managed via the Shopify Admin, and apps handle email marketing and order management. Content is delivered globally via Shopify\'s CDN with fully encrypted checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/prezentify_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/shopify/prezentify_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/prezentify_thumb.webp',
      caption: 'Prezentify homepage showcasing personalized gift categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide2.webp',
      caption: 'Gift collection page with product cards and category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide3.webp',
      caption: 'Individual gift product page with personalization options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide4.webp',
      caption: 'Seasonal gift collection and promotional banner section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide5.webp',
      caption: 'Mobile-optimized store view with responsive gift browsing layout',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating engine used to build the warm, gift-focused Prezentify storefront' },
      { short: 'CSS3', full: 'Custom CSS3 styling for a festive, gift-shop aesthetic with responsive layouts' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for personalization input fields, galleries, and cart behaviour' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing personalized gift products, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor customization to create a warm, festive Polish gifting brand feel' },
      { short: 'App Integration', full: 'Apps integrated for product personalization, email marketing, and customer reviews' },
      { short: 'Product Management', full: 'Gift products configured with personalization options, variants, and pricing in PLN' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring reliable performance for the Polish market' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption on all store pages and checkout flows to protect customer data' },
      { short: 'CDN', full: 'Shopify CDN for fast global delivery of product images and store assets' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics used to track sales, traffic sources, and conversion performance' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting Polish personalized gift keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions in Polish for improved local search visibility' },
    ],
  },
  features: [
    {
      title: 'Personalized Gift Theme',
      description: 'A warm, festive Shopify Liquid theme was customized to evoke the feeling of gift-giving, using rich colours, decorative elements, and a layout that highlights personalization options.',
    },
    {
      title: 'Product Personalization Options',
      description: 'Gift products were configured with custom text input fields and variant selectors so customers can personalize items with names, messages, or dates before adding to cart.',
    },
    {
      title: 'Polish Market Configuration',
      description: 'The store was configured for the Polish market with PLN currency, Polish-language content pages, and locally relevant shipping and payment options for customers in Poland.',
    },
    {
      title: 'Marketing & Email Integrations',
      description: 'Email marketing apps and customer review tools were integrated to run seasonal gift campaigns, capture subscribers, and build social proof through post-purchase review requests.',
    },
    {
      title: 'SEO & Content Strategy',
      description: 'Product and collection pages were optimized with Polish-language meta tags and SEO-friendly URLs to improve organic visibility for gift-related search queries in Poland.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://prezentify.pl/',
  githubUrl: '#',
  category: ['shopify'],
}

export default prezentify
