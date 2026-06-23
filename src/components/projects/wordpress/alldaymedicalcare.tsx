import { Project } from '../project-types'

const alldayMedicalcare: Project = {
  id: 14500,
  title: 'All Day Medical Care Clinic',
  description:
    'Healthcare provider focused on offering a wide range of medical services.',
  fullDescription:
    'A custom WordPress theme developed on top of an existing client theme using Elementor enhanced with custom HTML, CSS3, JavaScript, and PHP. Advanced Custom Fields (ACF) power flexible content management, while a bespoke PHP-based doctor directory template enables dynamic filtering of providers by specialty, location, and other parameters — giving patients fast access to the right care.',
  detailHeroLine: 'CUSTOM WORDPRESS · HEALTHCARE & MEDICAL SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'ACF + Elementor', label: 'Content Engine', accent: 'darkGreen' },
    { value: 'Doctor Filter', label: 'Custom Template', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core + ACF' },
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
      'WordPress with ACF manages structured medical content including provider profiles and services. Elementor provides client-editable page layouts, extended with custom CSS3 and JavaScript for animations and interactivity beyond the builder\'s defaults. A custom PHP template powers the doctor directory with real-time filtering by specialty and parameters.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
      caption: 'Home page presenting the clinic\'s key services and call-to-action',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/all-day-medical/all-day-medical-care-clinic_slide2.webp',
      caption: 'Custom provider filter using PHP to search doctors by specialty and parameters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/all-day-medical/all-day-medical-care-clinic_slide3.webp',
      caption: 'Individual provider profile pages built with custom PHP templates',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible medical content structure' },
      { short: 'CSS3', full: 'Custom CSS3 animations and styling extending Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic provider filtering' },
      { short: 'Elementor', full: 'Elementor page builder used per client requirement for independent content editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ for the doctor directory template with dynamic filtering logic' },
      { short: 'MySQL', full: 'MySQL database storing provider profiles, services, and ACF field data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all clinic content, posts, and custom post types' },
      { short: 'Advanced Custom Fields (ACF)', full: 'ACF plugin powering flexible structured data for provider profiles and service pages' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for DDoS protection and fast global content delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring patient data and site traffic are fully secured' },
      { short: 'Nginx', full: 'Nginx web server for efficient request handling and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for patient journey analysis and service page engagement' },
      { short: 'Google Maps API', full: 'Google Maps API for displaying clinic locations on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with optimized meta tags and page structure for local healthcare search' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for medical business rich snippets in search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals across all clinic pages' },
      { short: 'WebP Images', full: 'WebP image format for fast-loading provider photos and service visuals' },
    ],
  },
  features: [
    {
      title: 'Custom Doctor Directory with PHP Filtering',
      description:
        'A bespoke PHP template powers the provider directory page, allowing patients to filter doctors by specialty, location, and other custom parameters — providing fast access to the right care.',
    },
    {
      title: 'Advanced Custom Fields (ACF) Integration',
      description:
        'ACF structures all provider and service content as reusable field groups, enabling the clinic staff to update physician profiles and medical services without developer assistance.',
    },
    {
      title: 'Elementor Enhanced with Custom Code',
      description:
        'Elementor was implemented per the client\'s request and enriched with custom CSS3 and JavaScript, delivering advanced animations and interactive elements beyond the builder\'s native capabilities.',
    },
    {
      title: 'Responsive Healthcare Design',
      description:
        'Fully responsive layout ensures patients can access services, find providers, and book appointments comfortably across desktop, tablet, and mobile devices.',
    },
    {
      title: 'SEO & Schema Optimization',
      description:
        'Technical SEO with Schema.org medical business markup drives local search visibility, helping patients discover the clinic through Google and map results.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://alldaymedicalcare.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default alldayMedicalcare
