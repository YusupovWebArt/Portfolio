import { Project } from '../project-types'

const awsForEcommerce: Project = {
  id: 13500,
  title: 'AWS for Ecommerce',
  description:
    'Website specialized platform designed to help businesses build, scale, and secure their online retail operations using Amazon Web Services (AWS). The site offers a comprehensive suite of solutions tailored for e-commerce, focusing on performance, security, scalability, and AI-driven personalization.',
  fullDescription:
    'A custom WordPress site developed using Elementor enhanced with custom CSS3, JavaScript, and PHP to create a visually distinctive platform promoting AWS e-commerce solutions. AI-generated imagery was integrated throughout the design to illustrate cloud infrastructure concepts, and full SEO optimization positions the site for cloud and e-commerce solution search traffic.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · E-COMMERCE SOLUTIONS',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Elementor + PHP', label: 'Page Engine', accent: 'darkGreen' },
    { value: 'AI Visuals', label: 'Generated Graphics', accent: 'neutral' },
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
      'WordPress with Elementor provides the content management and page layout layer, extended with custom PHP and JavaScript for functionality beyond the builder\'s defaults. AI-generated visuals are served through Cloudflare CDN for fast global delivery. MySQL handles all content, settings, and form data.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
      caption: 'Home page presenting AWS e-commerce cloud solutions with hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-ecommerce/aws-for-ecommerce_slide2.webp',
      caption: 'Custom Elementor layout with CSS3/JS enhancements showcasing AWS services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-ecommerce/aws-for-ecommerce_slide3.webp',
      caption: 'Solution detail section with AI-generated cloud infrastructure visuals',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for clear and accessible solution-focused content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering unique animations and styling beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and dynamic page behaviors' },
      { short: 'Elementor', full: 'Elementor page builder used for rapid custom layout development' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending Elementor with additional dynamic functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, pages, and form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all solution pages, posts, and media content' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global delivery of AI-generated visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and contact form submissions' },
      { short: 'Nginx', full: 'Nginx server configured for optimal WordPress and Elementor performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and lead generation conversions' },
      { short: 'Google Maps API', full: 'Google Maps API for office location display on the contact page' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated imagery used throughout the site to visualize AWS cloud infrastructure concepts' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS and cloud e-commerce solution search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for rich search result presentation' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and photography assets ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'Custom Elementor Design with PHP Extensions',
      description:
        'Elementor provides the page building foundation, extended with custom PHP, CSS3, and JavaScript to achieve a unique, technically polished design that exceeds the builder\'s native capabilities.',
    },
    {
      title: 'AI-Generated Visual Content',
      description:
        'AI-generated graphics illustrate complex AWS cloud infrastructure concepts in a visually compelling way, making technical content more accessible and engaging for business audiences.',
    },
    {
      title: 'AWS Solution Showcase Pages',
      description:
        'Dedicated solution pages explain performance, security, scalability, and AI-driven personalization offerings for e-commerce businesses on AWS, structured for both readability and SEO.',
    },
    {
      title: 'SEO & Schema Optimization',
      description:
        'Full technical SEO with Schema.org structured data targets cloud computing and e-commerce solution keywords, driving qualified organic traffic to the platform.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive design with Cloudflare CDN and WebP images ensures fast load times and excellent user experience across all devices and global locations.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://awsforecommerce.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsForEcommerce
