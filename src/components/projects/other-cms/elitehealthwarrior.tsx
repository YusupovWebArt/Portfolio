import { Project } from '../project-types'

const eliteHealthWarrior: Project = {
  id: 8950,
  title: 'Elite Health Warrior',
  description: 'US-based Health and Wellness',
  fullDescription:
    'A custom Joomla-powered health and wellness website for a US-based brand, featuring a fully custom-built template, VirtueMart eCommerce integration, product catalog management, and SEO optimization. The project involved complete template development, CSS/JS customization, and ongoing content population.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · HEALTH & WELLNESS',
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
      'The site is built on Joomla CMS with a fully custom PHP template developed from scratch. VirtueMart powers the eCommerce layer with product catalog, cart, and checkout. MySQL stores all content and product data, served through PHP on a cPanel hosting environment with Cloudflare CDN protection.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/elitehealthwarrior_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/elitehealthwarrior_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/elitehealthwarrior_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/elitehealthwarrior/elitehealthwarrior_slide2.webp',
      caption: 'Product catalog page with health supplement listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/elitehealthwarrior/elitehealthwarrior_slide3.webp',
      caption: 'Inner content page with wellness articles and product details',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all template layouts' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the brand-aligned visual design and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements and animations' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and business logic' },
      { short: 'MySQL', full: 'MySQL database storing all site content, product data, and user information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing all site content, modules, and eCommerce data' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built from scratch to match brand identity' },
      { short: 'VirtueMart', full: 'VirtueMart eCommerce extension handling product catalog, cart, and checkout' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking user sessions, traffic sources, and conversion events' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Joomla SEO settings with clean URLs, meta tags, and semantic HTML structure' },
      { short: 'Schema.org Markup', full: 'Structured data markup improving product and business visibility in search results' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      description:
        'A fully custom Joomla PHP template was designed and built from scratch to match the brand\'s health and wellness identity, providing complete control over layout, typography, and module placement.',
    },
    {
      title: 'VirtueMart eCommerce Integration',
      description:
        'VirtueMart was integrated to deliver a complete eCommerce solution including product catalog management, shopping cart, secure checkout, and multiple payment gateway support.',
    },
    {
      title: 'Product & Content Management',
      description:
        'Health supplement products were added with descriptions, pricing, and imagery, alongside wellness articles and informational content managed through the Joomla admin panel.',
    },
    {
      title: 'SEO & Technical Optimization',
      description:
        'Implemented Joomla\'s native SEO tools with clean URLs, optimized meta tags, fast loading times, and semantic HTML to improve organic search visibility.',
    },
    {
      title: 'Responsive Design',
      description:
        'The custom template was optimized for seamless performance across desktops, tablets, and mobile devices, ensuring accessibility for all visitors.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://elitehealthwarrior.com/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default eliteHealthWarrior
