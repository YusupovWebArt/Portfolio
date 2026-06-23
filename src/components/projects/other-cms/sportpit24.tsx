import { Project } from '../project-types'

const sportpit24: Project = {
  id: 8900,
  title: 'Sportpit24',
  description:
    'Ukrainian online store specializing in high-quality sports nutrition and fitness supplements.',
  fullDescription:
    'A fully custom OpenCart-powered online store for Sportpit24, a Ukrainian sports nutrition retailer. The project involved custom theme development tailored to the brand, complete eCommerce configuration including product catalog management, multi-language support, payment gateway integration, and SEO optimization for improved organic search visibility.',
  detailHeroLine: 'OPENCART · ECOMMERCE · SPORTS NUTRITION',
  detailMetrics: [
    { value: 'OpenCart', label: 'CMS Platform', accent: 'green' },
    { value: 'eCommerce', label: 'Full Shop', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'OpenCart Core' },
          { label: 'Custom Theme', highlight: true },
          { label: 'Extensions' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'PHP Engine', highlight: true },
          { label: 'Web Server' },
        ],
      },
    ],
    description:
      'The store is built on OpenCart with a fully custom PHP theme providing brand-aligned UI and shopping experience. OpenCart\'s core eCommerce engine handles catalog, cart, and checkout, with MySQL storing all product and order data served through PHP on a cPanel hosting environment.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/sportpit24_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/sportpit24_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/sportpit24_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/sportpit24/sportpit24_slide2.webp',
      caption: 'Sports nutrition product catalog with category filters and pricing',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/sportpit24/sportpit24_slide3.webp',
      caption: 'Product detail page with supplement description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all store page templates' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the sports nutrition brand aesthetic and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript powering interactive UI elements, filters, and cart updates' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP driving OpenCart CMS server-side rendering, routing, and eCommerce logic' },
      { short: 'MySQL', full: 'MySQL storing all product catalog, order, customer, and configuration data' },
    ],
    contentManagement: [
      { short: 'OpenCart', full: 'OpenCart eCommerce platform managing the full product catalog and shop configuration' },
      { short: 'Custom Template Development', full: 'Fully custom OpenCart PHP theme tailored to the Sportpit24 brand identity' },
      { short: 'Product Management', full: 'Complete product catalog populated with sports nutrition items, pricing, and images' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed hosting environment running the OpenCart application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and payment transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking eCommerce events, product views, and conversion funnels' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'SEO-friendly URLs, metadata, and clean HTML structure configured for search visibility' },
      { short: 'Schema.org Markup', full: 'Product structured data enabling rich results in Google Shopping and search' },
    ],
  },
  features: [
    {
      title: 'Custom OpenCart Theme Development',
      description:
        'A fully custom OpenCart PHP theme was developed to reflect the Sportpit24 brand, providing a distinctive shopping experience with tailored layouts and UI components.',
    },
    {
      title: 'Full eCommerce Product Catalog',
      description:
        'The complete sports nutrition product range was configured with categories, descriptions, pricing, images, and inventory management through the OpenCart admin panel.',
    },
    {
      title: 'Multi-language & Payment Integration',
      description:
        'OpenCart\'s native multi-language support was configured for Ukrainian and Russian markets, paired with secure payment gateway integrations for seamless checkout.',
    },
    {
      title: 'SEO Optimization',
      description:
        'SEO-friendly URL structures, meta tag configuration, clean HTML, and fast loading speeds were implemented to improve organic search rankings for supplement keywords.',
    },
    {
      title: 'Responsive Design',
      description:
        'The custom theme delivers a fully responsive shopping experience, ensuring product browsing and checkout work smoothly on mobile, tablet, and desktop devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://sportpit24.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default sportpit24
