import { Project } from '../project-types'

const portageDental: Project = {
  id: 8750,
  title: 'Portage',
  description: 'US-based Dental Clinic',
  fullDescription:
    'A professional website for a US-based dental clinic, built on Joomla CMS with a fully custom template. The project delivered a clean, patient-friendly digital presence with service pages, doctor information, appointment contact points, Google Maps integration, and on-page SEO optimization.',
  detailHeroLine: 'JOOMLA · CUSTOM TEMPLATE · DENTAL CLINIC',
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
      'The dental clinic site runs on Joomla CMS with a custom PHP template built from scratch. Joomla modules handle contact forms, navigation, and the Google Maps location widget. MySQL stores all content, served through PHP on a cPanel hosting environment with SSL.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/portagedental_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/other-cms/portagedental_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/portagedental_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/portagedental/portagedental_slide2.webp',
      caption: 'Dental services page listing available treatments and procedures',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring service pages, doctor profiles, and contact sections' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a professional, trustworthy medical aesthetic with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript powering navigation behaviour and interactive UI components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP driving Joomla CMS server-side rendering and page generation' },
      { short: 'MySQL', full: 'MySQL database storing all site content, service descriptions, and contact data' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing all site content, menus, and extension configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to reflect the dental clinic brand' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel web hosting environment managing the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption building patient trust and securing form submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking patient-journey metrics and appointment inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and semantic structure configured for local search visibility' },
      { short: 'Google Maps API', full: 'Google Maps embedded for clinic location display and patient navigation' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template',
      description:
        'A fully custom PHP template was designed and developed to give the dental clinic a professional, brand-consistent web presence with complete layout control.',
    },
    {
      title: 'Service Pages',
      description:
        'Dedicated pages for each dental service provide patients with clear treatment information, helping them make informed decisions before booking.',
    },
    {
      title: 'Google Maps Integration',
      description:
        'An interactive Google Maps widget displays the clinic\'s location, making it easy for patients to find directions directly from the website.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Joomla SEO settings were configured with clean URLs, optimized meta tags, and semantic HTML to improve local search engine visibility for the dental practice.',
    },
    {
      title: 'Responsive Design',
      description:
        'The custom template adapts to all device sizes, ensuring patients browsing on mobile phones receive the same professional experience as desktop visitors.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: '#',
  githubUrl: '#',
  category: ['other-cms'],
}

export default portageDental
