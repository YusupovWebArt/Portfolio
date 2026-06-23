import { Project } from '../project-types'

const healthLinesPro: Project = {
  id: 8850,
  title: 'Health Linespro',
  description: 'US-based Wellness Hub',
  fullDescription:
    'A custom Joomla-powered wellness hub website for a US-based health brand. The project included full custom template development, eCommerce integration for health products, SEO optimization, and ongoing content management — delivering a professional, conversion-focused wellness platform.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · WELLNESS HUB',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'eCommerce', label: 'Shop Ready', accent: 'green' },
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
          { label: 'eCommerce Extension' },
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
      'Built on Joomla CMS with a custom PHP template developed from scratch. An eCommerce extension handles the product catalog and checkout workflow. MySQL stores all content and product data, served through PHP on a cPanel hosting environment.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/healthlinespro_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/healthlinespro_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/healthlinespro_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/healthlinespro/healthlinespro_slide2.webp',
      caption: 'Wellness products catalog page with category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/healthlinespro/healthlinespro_slide3.webp',
      caption: 'Content page with health articles and product information',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all Joomla template views' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the wellness brand visual design and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements across the site' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and content delivery' },
      { short: 'MySQL', full: 'MySQL database storing all site content, product listings, and user data' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing site content, modules, menus, and eCommerce data' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template developed to match the wellness brand identity' },
      { short: 'eCommerce Integration', full: 'Joomla eCommerce extension providing product management, cart, and secure checkout' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed web server hosting the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and online transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking user behaviour, traffic sources, and conversion goals' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and semantic markup configured for search engine visibility' },
      { short: 'Schema.org Markup', full: 'Structured data improving product and content indexing in search results' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      description:
        'A brand-aligned Joomla PHP template was built from the ground up, offering complete control over layout, module zones, and visual styling tailored to the wellness niche.',
    },
    {
      title: 'eCommerce Product Shop',
      description:
        'Full eCommerce capabilities were integrated, including a product catalog, category browsing, shopping cart, and secure payment checkout for health and wellness products.',
    },
    {
      title: 'Content & Product Management',
      description:
        'Health articles, product descriptions, and media assets were populated and organized through the Joomla admin panel, keeping the hub fresh and informative.',
    },
    {
      title: 'SEO & Performance Optimization',
      description:
        'Joomla SEO tools were configured with clean URLs, meta descriptions, and optimized image loading to support organic search traffic growth.',
    },
    {
      title: 'Responsive Design',
      description:
        'The custom template is fully responsive, delivering a consistent and usable experience across desktops, tablets, and mobile devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: '#',
  githubUrl: '#',
  category: ['other-cms'],
}

export default healthLinesPro
