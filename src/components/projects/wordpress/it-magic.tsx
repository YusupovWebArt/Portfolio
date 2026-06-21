import React from 'react'
import { Project } from '../project-types'

const itMagic: Project = {
  id: 19500,
  title: 'IT-Magic',
  description:
    'The IT-Magic project represents a comprehensive, end-to-end AWS and DevOps solution provider — from infrastructure design and migration to ongoing support and optimization.',
  fullDescription:
    'Development of a custom-themed enterprise website for IT-Magic, highlighting the company’s AWS, DevOps, infrastructure management, and cloud consulting services. Built with a custom WordPress theme combined with Elementor for flexible template design, bespoke PHP logic, and Advanced Custom Fields (ACF) Pro. To optimize high-volume tech blogging, it implements automated call-to-action injections and Schema.org markup. For several years, served as the sole developer responsible for ongoing feature updates, technical maintenance, landing page designs, Nginx/MySQL tuning, and deep technical SEO optimizations.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS & DEVOPS SOLUTIONS PORTAL',
  detailMetrics: [
    { value: '95+', label: 'PageSpeed', accent: 'green' },
    { value: '<1.2s', label: 'Page load', accent: 'green' },
    { value: 'Elementor / PHP', label: 'Theme Style', accent: 'darkGreen' },
    { value: 'Top 3 Rank', label: 'Google SEO', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom Theme + Elementor', highlight: true },
          { label: 'ACF & Advanced Views' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'Nginx Cache' },
          { label: 'Cloudflare CDN', highlight: true },
        ],
      },
    ],
    description:
      'A robust corporate portal built using a custom WordPress theme integrated with Elementor and Advanced Custom Fields (ACF) Pro. Dynamic call-to-actions (CTAs) and blog metadata are rendered server-side via the Advanced Views engine. Served with optimized Nginx rules and Cloudflare edge caching for superior page load speeds.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/it-magic_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/it-magic_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/it-magic_thumb.webp',
      caption: 'Home page showcasing cloud solution banners and client highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide1.webp',
      caption: 'AWS solution cards and cloud services presentation grid',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide2.webp',
      caption: 'Enterprise DevOps integration cycles and consultation sections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide3.webp',
      caption: 'Custom corporate blog layout with category filters and SEO grid',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide4.webp',
      caption: 'Single post layout displaying dynamic backend widgets and CTA banners',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide5.webp',
      caption: 'Related articles recommendation logic and lead capture forms',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/it-magic/it-magic_slide6.webp',
      caption: 'Advanced Views administration panel mapping custom PHP variables',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'CSS3 & HTML5',
        full: 'Semantic HTML5 structure and custom CSS3 styles',
      },
      {
        short: 'JavaScript (ES6)',
        full: 'Bespoke ES6 JavaScript for dynamic filters and UI transitions',
      },
      {
        short: 'Elementor',
        full: 'Elementor Page Builder integration for high-flexibility marketing page designs',
      },
      {
        short: 'CSS Grid',
        full: 'Responsive multi-column layouts using CSS Grid and Flexbox',
      },
    ],
    backend: [
      {
        short: 'PHP 8.0+',
        full: 'PHP server-side scripting for custom post templates and contact form processing',
      },
      {
        short: 'MySQL',
        full: 'MySQL database for structured content management and blog indexing',
      },
    ],
    api: [
      {
        short: 'Google Maps API',
        full: 'Google Maps integration for geographic office locations',
      },
      {
        short: 'WP REST API',
        full: 'WordPress REST API hooks for dynamic content callbacks',
      },
    ],
    contentManagement: [
      {
        short: 'Custom Theme',
        full: 'WP custom theme engineered from scratch for optimal rendering speeds',
      },
      {
        short: 'ACF Pro',
        full: 'Advanced Custom Fields Pro for flexible meta fields registration',
      },
      {
        short: 'Advanced Views',
        full: 'Advanced Views plugin integration to separate database fields from HTML templates',
      },
    ],
    devopsSecurity: [
      {
        short: 'Cloudflare Proxy',
        full: 'Cloudflare integration for SSL encryption, DDoS shield, and global edge routing',
      },
      {
        short: 'Nginx Tuning',
        full: 'Optimized server-side caching and redirection rules to boost response times',
      },
    ],
    analytics: [
      {
        short: 'Google Analytics',
        full: 'GA4 metrics tracking visitor page flows, sessions, and lead conversions',
      },
    ],
    aiTools: [
      {
        short: 'Midjourney',
        full: 'AI-generated visual graphics for cloud server conceptual illustrations',
      },
      {
        short: 'Google Gemini',
        full: 'Gemini AI copywriting assistant for tech services and articles metadata',
      },
    ],
    seo: [
      {
        short: 'Schema.org Markup',
        full: 'Bespoke JSON-LD structured data markup for articles and corporate services in search results',
      },
      {
        short: 'SEO-Optimization',
        full: 'Semantic heading structures, alt tags, and XML sitemaps configuration',
      },
    ],
    technicalOptimization: [
      {
        short: 'Core Web Vitals',
        full: 'Fine-tuning render-blocking assets and database queries to hit green Web Vitals targets',
      },
      {
        short: 'Assets Minification',
        full: 'Automated minification and concatenation of CSS/JS libraries',
      },
      {
        short: 'WebP Images',
        full: 'Image compression pipeline for modern next-gen WebP formatting',
      },
    ],
    digitalMarketing: [
      {
        short: 'CRO Strategy',
        full: 'Conversion Rate Optimization with contextual call-to-actions (CTA) mapping',
      },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      description:
        'Built a secure, bespoke theme using clean PHP 8.0 and custom CSS3 styles, designed to showcase the company\'s AWS, DevOps, and cloud consulting services.',
    },
    {
      title: 'Modular ACF & Advanced Views',
      description:
        'Integrated Advanced Custom Fields (ACF) and Advanced Views to feed dynamic call-to-actions, pricing tables, and banners directly from the WordPress administration panel.',
    },
    {
      title: 'Ongoing Sole Development & Maintenance',
      description:
        'Directly responsible for continuous features updates, technical maintenance, landing page creation, and Nginx/database optimizations for several years.',
    },
    {
      title: 'Technical SEO & Schema Markup',
      description:
        'Partnered with SEO strategists to build semantic page hierarchies, JSON-LD Schema.org markups, and structured blog grids, successfully boosting Google search rankings.',
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description:
        'Optimized client contact forms, lead funnels, and dynamic widgets to maximize business inquiries for AWS migration and DevOps consulting.',
    },
  ],
  challenges: [
    'Optimizing page load speeds and Core Web Vitals metrics on a WordPress site utilizing the Elementor page builder.',
    'Dynamic injection of contextual, category-based Call-to-Actions (CTAs) across hundreds of complex technical blog posts.',
  ],
  solutions: [
    'Configured robust server-side Nginx caching, deferred render-blocking CSS/JS files, and converted all graphical assets to next-gen WebP format, achieving sub-second load times.',
    'Utilized the Advanced Views plugin combined with ACF database relations to dynamically render relevant CTA blocks based on the article\'s DevOps or AWS category.',
  ],
  liveUrl: 'https://itmagic.pro/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default itMagic
