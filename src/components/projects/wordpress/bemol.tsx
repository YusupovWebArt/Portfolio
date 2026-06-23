import { Project } from '../project-types'

const bemol: Project = {
  id: 10980,
  title: 'Bemol',
  description: 'Czech plumbing and heating services provider.',
  fullDescription:
    'A custom WordPress theme built from scratch for a Czech plumbing and heating company, using Elementor enhanced with custom CSS3, JavaScript, and PHP. The site presents the company\'s services, product offerings, and contact options in a clean, professional layout designed for local Czech trades customers searching for reliable sanitary and heating solutions.',
  detailHeroLine: 'CUSTOM WORDPRESS · PLUMBING & HEATING SERVICES · CZECH',
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
          { label: 'Elementor + Custom PHP', highlight: true },
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
      'WordPress with Elementor provides the content management and page layout layer, with custom PHP, CSS3, and JavaScript extending the builder for unique interactions and styling. MySQL stores all service data and content. Cloudflare CDN ensures fast delivery for Czech market visitors, while Nginx handles server-side caching.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
      caption: 'Home page presenting plumbing and heating services with key service highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bemol/bemol_slide2.webp',
      caption: 'Products and services catalog page with category organization',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bemol/bemol_slide3.webp',
      caption: 'Contact and service request section with Google Maps location',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for structured service and product content' },
      { short: 'CSS3', full: 'Custom CSS3 providing unique animations and styling beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic service filters' },
      { short: 'Elementor', full: 'Elementor page builder for flexible and client-manageable page layouts' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with additional functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, service pages, and media' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all plumbing and heating service content' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection for Czech market visitors' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and contact form data' },
      { short: 'Nginx', full: 'Nginx server with caching for fast response times' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for service page engagement and lead generation analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for service area and office location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting Czech plumbing and heating search terms for local visibility' },
      { short: 'Schema.org Markup', full: 'JSON-LD LocalBusiness schema for rich results in Czech Google Search' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP image format for faster loading of service and product visuals' },
    ],
  },
  features: [
    {
      title: 'Elementor Enhanced with Custom Code',
      description:
        'Elementor provides the page layout foundation and was enriched with custom CSS3 and JavaScript for advanced animations and precise styling, resulting in a design that stands out from standard builder templates.',
    },
    {
      title: 'Service & Product Showcase',
      description:
        'Dedicated service and product pages present the company\'s plumbing and heating solutions in a structured, easy-to-navigate format designed for Czech trades customers.',
    },
    {
      title: 'Local SEO & Schema Markup',
      description:
        'LocalBusiness Schema.org markup combined with Czech-targeted SEO helps the company rank for local plumbing and heating searches and appear in Google Maps results.',
    },
    {
      title: 'Google Maps Integration',
      description:
        'An interactive Google Maps embed on the contact page shows the company\'s service area and office location, making it easy for local customers to find and reach the business.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive layout with WebP images ensures fast load times and a seamless experience for customers browsing on mobile devices at service job sites.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://bemol.cz/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default bemol
