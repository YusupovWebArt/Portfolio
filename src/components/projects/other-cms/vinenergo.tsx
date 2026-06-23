import { Project } from '../project-types'

const vinEnergo: Project = {
  id: 8700,
  title: 'VIN Energo',
  description:
    'Ukrainian company specializing in the production and sale of Pini Kay wood and charcoal briquettes, as well as the manufacture of equipment for briquette production.',
  fullDescription:
    'A Joomla-powered corporate website for VIN Energo, a Ukrainian manufacturer and seller of Pini Kay wood and charcoal briquettes. The project delivered a fully custom Joomla template, VirtueMart eCommerce integration for the product catalog, content population, and SEO optimization, enabling the company to present its products and services professionally online.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · MANUFACTURING',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'VirtueMart', label: 'eCommerce', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'Joomla Core' },
          { label: 'Custom Template', highlight: true },
          { label: 'VirtueMart' },
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
      'Built on Joomla CMS with a custom PHP template developed to match the industrial briquette manufacturing brand. VirtueMart provides the eCommerce catalog and order management layer. MySQL stores all product and content data, served through PHP on a cPanel-managed server.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/vinenergo_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/vinenergo_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/vinenergo_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/vinenergo/vinenergo_slide2.webp',
      caption: 'Products page displaying briquette types with specifications and pricing',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all Joomla template pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering an industrial-themed visual design with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements and product gallery components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and eCommerce logic' },
      { short: 'MySQL', full: 'MySQL database storing all product catalog, content, and order information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing site content, product listings, menus, and configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to reflect the VIN Energo brand identity' },
      { short: 'VirtueMart', full: 'VirtueMart eCommerce extension managing the briquette product catalog and orders' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and inquiry submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor traffic, product page views, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and structured content configured for search engine visibility' },
      { short: 'Schema.org Markup', full: 'Product structured data supporting rich search results for briquette product listings' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      description:
        'A fully custom PHP Joomla template was built from scratch to match the industrial character of the briquette manufacturing business, with complete layout and styling control.',
    },
    {
      title: 'VirtueMart Product Catalog',
      description:
        'VirtueMart eCommerce was configured to showcase the full product range of Pini Kay wood and charcoal briquettes with descriptions, specifications, and pricing.',
    },
    {
      title: 'Production Equipment Section',
      description:
        'A dedicated section presents the company\'s briquette production equipment range, helping B2B customers explore manufacturing solutions alongside retail products.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Joomla SEO tools were configured with clean URLs, optimized meta tags, and semantic HTML to improve visibility for Ukrainian industrial and fuel product search terms.',
    },
    {
      title: 'Responsive Design',
      description:
        'The custom template is fully responsive, ensuring the corporate site displays correctly on mobile phones, tablets, and desktop screens.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'http://vinenergo.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default vinEnergo
