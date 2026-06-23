import { Project } from '../project-types'

const websiteIntegrationCrm: Project = {
  id: 10840,
  title: 'Website integration with CRM',
  description: 'USA (+ localization Spain)',
  fullDescription:
    'Website Integration with CRM is a bilingual landing page (US English and Spanish localization) built on a custom WordPress theme from scratch using Bootstrap 5. The page demonstrates CRM integration capabilities for US businesses, featuring a modern responsive layout, lead capture form, SEO optimization, and clear service value propositions targeting both English and Spanish-speaking business audiences.',
  detailHeroLine: 'CUSTOM WORDPRESS · CRM INTEGRATION LANDING',
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
      'A custom WordPress theme built from scratch uses Bootstrap 5 as the responsive layout framework, ensuring consistent, modern design patterns with custom CSS3 overrides for brand-specific styling. PHP handles contact and lead form processing, while Cloudflare CDN delivers the bilingual page fast to US and Spanish-speaking business audiences.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
      caption: 'Home section presenting CRM integration services with primary lead capture CTA',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/website-integration-crm/website-integration-crm_slide2.webp',
      caption: 'CRM integration services and feature highlights for US business customers',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/website-integration-crm/website-integration-crm_slide3.webp',
      caption: 'Spanish localization section and business inquiry contact form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible, bilingual CRM landing page structure' },
      { short: 'CSS3', full: 'Custom CSS3 extending Bootstrap with brand-specific styling and layout overrides' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive components, animations, and form validation' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework providing the responsive grid and component foundation' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic and lead capture form submission handling' },
      { short: 'MySQL', full: 'MySQL database for page content and lead form submission storage' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing the bilingual landing page content and structure' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch with Bootstrap 5 integration for the CRM service page' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN delivering the page fast to US and Spanish business audiences' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and lead form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress landing page delivery' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API providing location context for the US-based service provider' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking lead form conversions and audience behaviour across both language versions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Bilingual SEO with hreflang tags and targeted meta content for US and Spanish markets' },
      { short: 'Schema.org Markup', full: 'Service and Organization JSON-LD structured data for enhanced search appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization ensuring green Core Web Vitals for the landing page' },
      { short: 'WebP Images', full: 'WebP images for fast loading of all landing page visual and illustration assets' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for lead tracking and campaign performance measurement' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with Bootstrap 5',
      description:
        'A custom WordPress theme built from scratch using Bootstrap 5 ensures a modern, consistent responsive layout with reliable cross-browser compatibility and fast development.',
    },
    {
      title: 'Bilingual Localization (EN + ES)',
      description:
        'The landing page supports English (US) and Spanish localization, enabling the service to engage both English and Spanish-speaking business audiences across the United States.',
    },
    {
      title: 'Lead Generation Contact Form',
      description:
        'A conversion-focused contact form captures business CRM integration inquiries directly, with PHP-backed validation and email routing for efficient lead management.',
    },
    {
      title: 'Responsive Design',
      description:
        'Bootstrap 5 ensures the page is fully responsive across mobile, tablet, and desktop screens, giving potential clients a seamless browsing experience on any device.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Bilingual SEO with hreflang attributes, Schema.org Service markup, and targeted meta content improves search visibility for CRM integration service queries in US markets.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl:
    'https://frontdeskhelpers.com/remote-virtual-services/website-integration-with-crm/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default websiteIntegrationCrm
