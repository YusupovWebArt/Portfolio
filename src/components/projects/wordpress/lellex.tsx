import { Project } from '../project-types'

const lellex: Project = {
  id: 12500,
  title: 'Lellex',
  description: 'Video Production.',
  fullDescription:
    'A unique custom WordPress theme built entirely from scratch based on a Figma design layout, using hand-coded HTML, CSS3, JavaScript, and PHP for a video production company. The site showcases the studio\'s portfolio, services, and reel in a visually bold format designed to attract creative clients seeking professional video production services.',
  detailHeroLine: 'CUSTOM WORDPRESS · VIDEO PRODUCTION · FIGMA-TO-CODE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Theme', label: 'Figma-to-Code', accent: 'darkGreen' },
    { value: 'Portfolio Focus', label: 'Showreel Ready', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme (Figma)', highlight: true },
          { label: 'MySQL Database' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Nginx Server' },
          { label: 'Cloudflare CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'The WordPress theme was built pixel-perfect from a Figma design file using hand-coded PHP, HTML5, CSS3, and JavaScript — with no page builder involved. MySQL stores all portfolio content, pages, and media. Cloudflare CDN ensures fast delivery of video thumbnails and production imagery globally.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/lellexvideoproduction_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/lellexvideoproduction_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/lellexvideoproduction_thumb.webp',
      caption: 'Home page presenting the Lellex video production studio with bold visual design',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/lellexvideoproduction/lellexvideoproduction_slide2.webp',
      caption: 'Portfolio and showreel section displaying video production projects and work',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 built pixel-perfect from the Figma design for the video production site' },
      { short: 'CSS3', full: 'Custom CSS3 implementing bold animations and visual effects from the Figma layout' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive portfolio showcase and video reel playback' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ WordPress theme with no page builder for full design fidelity' },
      { short: 'MySQL', full: 'MySQL database for WordPress portfolio content, project pages, and media' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all portfolio projects, services, and media assets' },
      { short: 'Custom Theme (Figma)', full: 'Fully hand-coded WordPress theme translated directly from the client\'s Figma design file' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast global delivery of video thumbnails and portfolio imagery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic' },
      { short: 'Nginx', full: 'Nginx web server for efficient caching and response performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for portfolio engagement, reel views, and contact inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting video production and creative studio search terms' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals across portfolio and project pages' },
      { short: 'WebP Images', full: 'WebP format for all portfolio thumbnails and production stills ensuring fast loads' },
    ],
  },
  features: [
    {
      title: 'Figma-to-Code Custom WordPress Theme',
      description:
        'The entire WordPress theme was hand-coded directly from a Figma design file, achieving pixel-perfect fidelity to the client\'s creative vision without any page builder constraints.',
    },
    {
      title: 'Video Portfolio Showcase',
      description:
        'A visually bold portfolio section displays the studio\'s video production projects, showreel, and client work in an engaging layout designed to impress creative buyers.',
    },
    {
      title: 'Custom CSS3 Animations',
      description:
        'CSS3 animations and transitions bring the design to life, reflecting the dynamic nature of a video production studio and creating a memorable first impression.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Technical SEO targets video production studio and creative agency keywords, helping potential clients discover Lellex through organic search.',
    },
    {
      title: 'Responsive Design',
      description:
        'Fully responsive layout ensures the studio\'s portfolio and services are presented beautifully across desktop, tablet, and mobile devices for all prospective clients.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://lellexvideoproduction.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default lellex
