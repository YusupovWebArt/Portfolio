import React from 'react'
import { Project } from '../project-types'

const awsMigrationServices: Project = {
  id: 18500,
  title: 'AWS Migration Services',
  description:
    'Specialized platform designed to assist businesses in transitioning their operations to the Amazon Web Services (AWS) cloud. The website offers a comprehensive suite of services aimed at ensuring a smooth, secure, and cost-effective migration process.',
  fullDescription:
    'A high-end marketing and service platform designed to assist enterprises in migrating legacy infrastructure to the Amazon Web Services (AWS) cloud. Built with a completely custom-themed WordPress engine, bespoke PHP logic, and Advanced Custom Fields (ACF) Pro. To visually communicate complex cloud migration concepts, the site integrates custom-engineered AI graphics depicting cloud server architectures, migration pipelines, and modern security protocols.',
  detailHeroLine: 'CUSTOM WORDPRESS · CLOUD SOLUTION MARKETING',
  detailMetrics: [
    { value: '96+', label: 'PageSpeed', accent: 'green' },
    { value: '<0.8s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / ACF', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Indexability', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP 8 Theme', highlight: true },
          { label: 'ACF Pro' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'Apache/Nginx' },
          { label: 'Cloudflare Edge', highlight: true },
        ],
      },
    ],
    description:
      'A customized WordPress theme built from scratch using PHP 8 and Advanced Custom Fields (ACF). Optimized for lightning-fast speeds and high-conversion marketing. Served through Cloudflare for global caching, security, and performance.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide2.webp',
      caption: 'Visual blocks and service grids displaying AWS core advantages',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide3.webp',
      caption: 'Enterprise migration paths and visual cloud diagrams',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide4.webp',
      caption: 'Pricing packages and contact details for business consultation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide5.webp',
      caption: 'Contact and lead generation forms with secure server handling',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'HTML5 & CSS3',
        full: 'Semantic HTML5 structure and custom CSS3 stylesheets',
      },
      {
        short: 'JavaScript (ES6)',
        full: 'Bespoke ES6 JavaScript for dynamic transitions and visual micro-animations',
      },
      {
        short: 'Responsive CSS Grid',
        full: 'Fluid layout structures using CSS Grid and Flexbox for seamless multi-device scaling',
      },
    ],
    backend: [
      {
        short: 'PHP 8.2',
        full: 'Highly secure, modern PHP 8.2 scripting for page templates and server-side forms handling',
      },
      {
        short: 'MySQL',
        full: 'MySQL database for structured content management',
      },
    ],
    api: [
      {
        short: 'Google Maps API',
        full: 'Google Maps API integration for interactive location pinpoints',
      },
      {
        short: 'SMTP Mailer',
        full: 'Reliable email delivery integration for client inquiry tracking',
      },
    ],
    contentManagement: [
      {
        short: 'Custom Theme',
        full: 'WP custom theme built entirely from scratch to eliminate database bloat and template weight',
      },
      {
        short: 'ACF Pro',
        full: 'Advanced Custom Fields Pro integration for flexible, administration-friendly content blocks',
      },
    ],
    devopsSecurity: [
      {
        short: 'Cloudflare CDN',
        full: 'Cloudflare proxy for SSL encryption, DDoS mitigation, and global edge routing',
      },
      {
        short: 'Nginx Caching',
        full: 'Optimized server-side caching rules for sub-second database response times',
      },
      {
        short: 'Forms Validation',
        full: 'Robust sanitization and anti-spam protection for all user submissions',
      },
    ],
    analytics: [
      {
        short: 'Google Analytics',
        full: 'Detailed GA4 metrics integration to trace user session flows and CTA button conversions',
      },
    ],
    aiTools: [
      {
        short: 'Midjourney',
        full: 'Advanced prompt engineering with Midjourney for conceptual illustrations representing servers and migrations',
      },
      {
        short: 'Google Gemini',
        full: 'Professional copywriting helper for tech-oriented landing page content',
      },
    ],
    seo: [
      {
        short: 'Schema.org Markup',
        full: 'JSON-LD structured data markup representing corporate services for rich Google search snippets',
      },
      {
        short: 'RankMath SEO',
        full: 'Fine-tuned metadata and XML sitemap indexation rules for enhanced organic ranking',
      },
    ],
    technicalOptimization: [
      {
        short: 'Lighthouse Audits',
        full: 'Rigorous performance checks aiming at 95+ PageSpeed scores',
      },
      {
        short: 'WebP Images',
        full: 'Image optimization pipeline converting graphical assets to next-gen WebP formats',
      },
      {
        short: 'Assets Minification',
        full: 'Automated concatenation and minification of CSS/JS files to reduce render-blocking times',
      },
    ],
    digitalMarketing: [
      {
        short: 'CRO Strategy',
        full: 'Conversion Rate Optimization mapping to funnel visitors towards high-impact call-to-actions',
      },
    ],
  },
  features: [
    {
      title: 'Custom Theme from Scratch',
      description:
        'Engineered a unique, lightweight WordPress theme in pure PHP/CSS. Bypassed bulky pre-made page builders (Elementor/Divi), resulting in a clean codebase and rapid load times.',
    },
    {
      title: 'ACF Pro Content Administration',
      description:
        'Constructed custom page fields and edit blocks using Advanced Custom Fields Pro. Provides the client with a modular, intuitive dashboard where they can manage all texts and visuals.',
    },
    {
      title: 'AI-Generated Graphic Identity',
      description:
        'Conceptualized and rendered high-resolution branding graphics using Midjourney, giving the AWS migration services a futuristic, professional, and visually engaging enterprise look.',
    },
    {
      title: 'SEO & Structured Data',
      description:
        'Integrated advanced search engine optimization protocols, including semantic HTML structure, Google-friendly JSON-LD schemas, and customized XML sitemaps.',
    },
    {
      title: 'Security & Caching Hardening',
      description:
        'Protected the website with Nginx-level request limitations, secure server-side form filters, and Cloudflare proxy firewalls to prevent SQL injections and spam.',
    },
  ],
  challenges: [
    'Generating consistent, technically-accurate cloud architecture graphics using creative AI illustration generators.',
    'Achieving top-tier page load metrics on WordPress without sacrificing high-resolution illustrations and dynamic page elements.',
  ],
  solutions: [
    'Designed structured prompt presets and combined multi-layered visual outputs using editing software to establish a unified corporate visual system.',
    'Configured modern WebP image formats, deferred script loading, and setup Cloudflare CDN caching to deliver pages to cloud prospects in less than a second.',
  ],
  liveUrl: 'https://awsmigrationservices.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsMigrationServices
