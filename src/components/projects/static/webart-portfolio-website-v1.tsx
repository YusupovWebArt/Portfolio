import { Project } from '../project-types'

const webartPortfolioWebsiteV1: Project = {
  id: 5900,
  title: 'My Portfolio Website v1',
  description: 'Personal portfolio site of Artur Yusupov.',
  fullDescription:
    'The first version of Artur Yusupov\'s personal portfolio, built from scratch using semantic HTML5, CSS3, and vanilla JavaScript. It presents professional skills, project showcases, and contact information in a clean, fully responsive single-page layout hosted on GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · PORTFOLIO V1',
  detailMetrics: [
    { value: 'HTML5', label: 'Semantic Markup', accent: 'green' },
    { value: 'CSS3', label: 'Responsive Styles', accent: 'green' },
    { value: 'Vanilla JS', label: 'Interactivity', accent: 'darkGreen' },
    { value: 'GitHub Pages', label: 'Hosting', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'BUILD',
        steps: [
          { label: 'HTML5' },
          { label: 'CSS3', highlight: true },
          { label: 'JavaScript' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'GitHub Repo' },
          { label: 'Pages CDN', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'The portfolio is a pure static site with no build step — semantic HTML5 structures the content, CSS3 handles layout and responsive breakpoints, and vanilla JavaScript adds scroll animations and interactive navigation. Files are served directly from GitHub Pages via CDN.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/html-css-js/webart_old-version_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
      caption: 'Hero and introduction section of the v1 portfolio homepage',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide2.webp',
      caption: 'Skills and expertise section listing frontend technologies',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide3.webp',
      caption: 'Portfolio projects section with project cards and links',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide4.webp',
      caption: 'About me section with professional background information',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide5.webp',
      caption: 'Contact section with email and social media links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 providing accessible, well-structured page content' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox for responsive layouts and smooth transitions' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla ES6+ JavaScript handling navigation interactions and scroll effects' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static portfolio files via CDN globally' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring a consistent layout across all device sizes' },
      { short: 'Cross-browser Compatibility', full: 'Tested across Chrome, Firefox, Safari, and Edge for consistent rendering' },
    ],
  },
  features: [
    {
      title: 'Single-Page Layout',
      description:
        'All portfolio sections — hero, about, skills, projects, and contact — are presented on a single scrollable page with smooth anchor navigation.',
    },
    {
      title: 'Responsive Design',
      description:
        'CSS3 media queries adapt the layout for mobile phones, tablets, and desktops, ensuring readability and usability at any screen width.',
    },
    {
      title: 'Vanilla JavaScript Interactions',
      description:
        'Lightweight ES6+ JavaScript handles mobile menu toggling, scroll-based animations, and dynamic active-state highlighting in the navigation bar.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: '#',
  githubUrl: '#',
  category: ['static'],
}

export default webartPortfolioWebsiteV1
