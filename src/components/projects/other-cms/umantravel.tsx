import { Project } from '../project-types'

const umanTravel: Project = {
  id: 8800,
  title: 'Uman travel',
  description:
    'Historical and cultural tourism information center based in Uman, Ukraine.',
  fullDescription:
    'A tourism information website for Uman Travel, a cultural and historical tourism center based in Uman, Ukraine. Built on Joomla CMS with a fully custom template, the site presents travel destinations, tour packages, and cultural points of interest, supported by Google Maps integration and SEO optimization for local and regional search visibility.',
  detailHeroLine: 'JOOMLA · CUSTOM TEMPLATE · TRAVEL & TOURISM',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'green' },
    { value: 'Google Maps', label: 'Location', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'Joomla Core' },
          { label: 'Custom Template', highlight: true },
          { label: 'Modules & Extensions' },
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
      'The travel site is built on Joomla CMS with a custom PHP template developed to capture the cultural character of Uman tourism. Joomla modules manage tour listings, contact forms, and the Google Maps widget. All content and tour data are stored in MySQL, served through PHP on a cPanel-managed server.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/umantravel_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/umantravel_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/umantravel_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/umantravel/umantravel_slide2.webp',
      caption: 'Tour packages and cultural destinations listing page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/umantravel/umantravel_slide3.webp',
      caption: 'Destination detail page with description and location map',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring all tour listing and destination pages accessibly' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a culturally inspired visual design with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing navigation, interactive maps, and gallery components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and content delivery' },
      { short: 'MySQL', full: 'MySQL storing all tour content, destination data, and contact information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing tour listings, articles, menus, and site configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to represent the Uman tourism brand' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application and MySQL database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing user data and contact form submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor traffic, popular destination pages, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Joomla SEO settings configured with clean URLs, meta tags, and structured content' },
      { short: 'Google Maps API', full: 'Google Maps embedded to display tour locations and help visitors plan their trips' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template',
      description:
        'A fully custom PHP template was built to reflect the cultural and historical character of Uman, giving the tourism center a unique and professional online identity.',
    },
    {
      title: 'Tour & Destination Listings',
      description:
        'Tour packages and cultural destinations are organized into browsable categories with detailed descriptions, photos, and inquiry contact options.',
    },
    {
      title: 'Google Maps Integration',
      description:
        'An embedded Google Maps widget displays tour locations and points of interest, helping visitors plan their journeys before arrival.',
    },
    {
      title: 'SEO for Local Tourism',
      description:
        'On-page SEO was configured with clean URLs, optimized meta tags, and semantic HTML to improve visibility in local and regional travel search queries.',
    },
    {
      title: 'Responsive Design',
      description:
        'The template is fully responsive, ensuring travellers browsing on mobile devices get the same quality experience as desktop users.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://umantravel.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default umanTravel
