import { Project } from '../project-types'

const kolosochok: Project = {
  id: 10820,
  title: 'Kolosochok',
  description:
    'Ukrainian private ethno-kindergarten in Kyiv offering culturally immersive preschool education.',
  fullDescription:
    'A custom WordPress theme built from scratch for a Ukrainian ethno-kindergarten in Kyiv, using Elementor extended with custom CSS3 and JavaScript. The site presents the kindergarten\'s philosophy, curriculum, teachers, and facilities in a warm and culturally rich design that reflects the Ukrainian ethno aesthetic, attracting Kyiv families seeking culturally immersive preschool education.',
  detailHeroLine: 'CUSTOM WORDPRESS · ETHNO-KINDERGARTEN · KYIV, UKRAINE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Elementor', label: 'Page Builder', accent: 'darkGreen' },
    { value: 'Schema.org', label: 'Structured Data', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Elementor + Custom CSS/JS', highlight: true },
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
      'WordPress with Elementor manages the page layout and content, extended with custom CSS3 and JavaScript for a warm, ethno-themed visual design. MySQL stores all kindergarten content including teacher profiles, program pages, and gallery images. Cloudflare CDN delivers content quickly to Kyiv-area parents browsing on mobile.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/kolosochok_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/kolosochok_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/kolosochok_thumb.webp',
      caption: 'Home page presenting the ethno-kindergarten with Ukrainian cultural design elements',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/kolosochok/kolosochok_slide2.webp',
      caption: 'Educational programs and curriculum section for preschool parents',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/kolosochok/kolosochok_slide3.webp',
      caption: 'Teachers and staff profiles showcasing the educational team',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/kolosochok/kolosochok_slide4.webp',
      caption: 'Facilities gallery and contact page with Google Maps for Kyiv location',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible kindergarten program and event content' },
      { short: 'CSS3', full: 'Custom CSS3 implementing the warm, ethno-Ukrainian aesthetic for the kindergarten brand' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive galleries and smooth page animations' },
      { short: 'Elementor', full: 'Elementor page builder enabling staff to independently update program and event content' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with kindergarten-specific functionality' },
      { short: 'MySQL', full: 'MySQL database storing teacher profiles, programs, gallery images, and events' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all kindergarten content, pages, and media' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery to Kyiv parents and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and parent inquiry forms' },
      { short: 'Nginx', full: 'Nginx web server for efficient caching and response times' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for parent visitor behavior, popular program pages, and inquiry conversions' },
      { short: 'Google Maps API', full: 'Google Maps API for displaying the kindergarten\'s Kyiv location on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local SEO targeting Kyiv kindergarten and preschool search terms for Ukrainian parents' },
      { short: 'Schema.org Markup', full: 'JSON-LD ChildCare schema for rich results in local Kyiv search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals across all pages' },
      { short: 'WebP Images', full: 'WebP format for all facility and event photography ensuring fast mobile loading' },
    ],
  },
  features: [
    {
      title: 'Ukrainian Ethno-Themed Design',
      description:
        'Custom CSS3 and Elementor layouts create a warm, culturally immersive aesthetic rooted in Ukrainian folk art traditions, reflecting the kindergarten\'s unique educational philosophy.',
    },
    {
      title: 'Educational Program Pages',
      description:
        'Dedicated pages present the kindergarten\'s curriculum, cultural activities, language programs, and daily schedule to help parents understand the ethno-immersive preschool experience.',
    },
    {
      title: 'Teacher Profile Section',
      description:
        'Individual teacher profiles build trust with parents by showcasing qualifications, experience, and the team\'s dedication to Ukrainian cultural education.',
    },
    {
      title: 'Local SEO & Google Maps',
      description:
        'Local SEO strategy with ChildCare Schema.org markup and Google Maps integration drives visibility in Kyiv search results, helping families find the kindergarten easily.',
    },
    {
      title: 'Responsive & Mobile-Optimized',
      description:
        'Fully responsive design ensures parents in Kyiv can explore programs and contact the kindergarten seamlessly from smartphones during busy daily routines.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://kolosochok.kiev.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default kolosochok
