import { Project } from '../project-types'

const telecommunicationSolutions: Project = {
  id: 10920,
  title: 'Telecommunication Solutions for Business',
  description: 'USA (+ localization Spain).',
  fullDescription:
    'Telecommunication Solutions for Business is a bilingual landing page (US English and Spanish localization) built on a custom WordPress theme from scratch using the Bootstrap 5 CSS framework. The project targeted US businesses with virtual telecommunication services, featuring a modern responsive layout, SEO optimization, and a lead-generation contact form.',
  detailHeroLine: 'CUSTOM WORDPRESS · TELECOM LANDING PAGE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'Bootstrap 5', label: 'CSS Framework', accent: 'darkGreen' },
    { value: 'EN + ES', label: 'Localization', accent: 'neutral' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'Bootstrap 5 + CSS3/JS', highlight: true },
          { label: 'PHP 8+ Backend' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx + SSL', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'A custom WordPress theme built from scratch uses Bootstrap 5 as the layout foundation, ensuring consistent, modern responsive design patterns. Custom CSS3 and JavaScript extend Bootstrap for brand-specific styling. PHP handles form submissions and server-side logic, while Cloudflare CDN delivers the bilingual landing page to US and Spanish-speaking audiences.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
      caption: 'Home section with telecom services value proposition and primary CTA',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telecommunication-solutions/telecommunication-solutions_slide2.webp',
      caption: 'Services section detailing virtual telecommunication solutions for US businesses',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telecommunication-solutions/telecommunication-solutions_slide3.webp',
      caption: 'Spanish localization section with lead generation contact form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible, bilingual landing page structure' },
      { short: 'CSS3', full: 'Custom CSS3 extending Bootstrap with brand-specific styling and responsive overrides' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive components and form validation' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework for modern, consistent responsive layout structure' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic and lead capture form processing' },
      { short: 'MySQL', full: 'MySQL database storing page content and contact form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS for content management of the bilingual landing page' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch with Bootstrap integration' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN delivering the landing page fast to US and Spanish-speaking audiences' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and lead form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress landing page performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying business location for US service area clarity' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking lead form conversions and traffic across English and Spanish audiences' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Bilingual SEO with hreflang tags and targeted meta content for US and Spanish markets' },
      { short: 'Schema.org Markup', full: 'Service and Organization JSON-LD structured data for enhanced search appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals for the landing page' },
      { short: 'WebP Images', full: 'WebP images for fast loading of all landing page visual assets' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for lead tracking and campaign performance measurement' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with Bootstrap 5',
      description:
        'A custom WordPress theme built from scratch using Bootstrap 5 as the layout framework ensures modern, consistent responsive design with faster development and reliable cross-browser compatibility.',
    },
    {
      title: 'Bilingual Localization (EN + ES)',
      description:
        'The landing page supports both English (US) and Spanish localization, allowing the business to reach both English-speaking and Spanish-speaking business audiences across the United States.',
    },
    {
      title: 'Lead Generation Contact Form',
      description:
        'A conversion-optimized contact form captures business inquiries directly, with PHP-backed server-side validation and email routing to the sales team.',
    },
    {
      title: 'Responsive Design',
      description:
        'The Bootstrap-based layout ensures the landing page is fully responsive across all screen sizes, from mobile devices to large desktop monitors.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Bilingual SEO with hreflang tags, Schema.org Service markup, and optimized meta content improves search visibility for telecommunication solution queries in US markets.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl:
    'https://frontdeskhelpers.com/remote-virtual-services/innovative-telecommunication-solutions-for-business/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default telecommunicationSolutions
