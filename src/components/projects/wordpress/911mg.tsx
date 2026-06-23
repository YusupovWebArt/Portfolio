import { Project } from '../project-types'

const mg911: Project = {
  id: 11000,
  title: '911mg',
  description:
    'US online health resource offering an extensive database of medications.',
  fullDescription:
    'A custom WordPress theme built entirely from scratch using pure PHP, custom CSS3, and JavaScript ES6, with no page builder dependency. The site serves as a comprehensive US medication database, featuring structured drug categories, coupon listings, product detail pages, and user reviews. Full SEO optimization and Google Analytics integration were implemented to maximize organic reach.',
  detailHeroLine: 'CUSTOM WORDPRESS · HEALTH & MEDICATION DATABASE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Theme', label: 'Pure PHP/CSS/JS', accent: 'darkGreen' },
    { value: 'Schema.org', label: 'Structured Data', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
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
      'The site is powered by a fully custom WordPress PHP theme with no page builder, enabling precise control over markup and performance. MySQL stores all medication data, categories, and user reviews. Cloudflare CDN and Nginx handle caching and global content delivery, ensuring fast load times across the US market.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
      caption: 'Home page showcasing the medication database hero and navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide2.webp',
      caption: 'Individual medication product page with dosage and details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide3.webp',
      caption: 'Medication categories browse view with filtering',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide4.webp',
      caption: 'Product categories listing page with structured layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide5.webp',
      caption: 'Coupons and discount offers section for medications',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide6.webp',
      caption: 'Category page displaying grouped medication listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide7.webp',
      caption: 'User reviews section with ratings for medications',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and structured content' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive grid layout for all screen sizes' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic filtering' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme logic for dynamic medication data rendering' },
      { short: 'MySQL', full: 'MySQL database for storing medication records, categories, and reviews' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all content, categories, and posts' },
      { short: 'Custom Theme', full: 'Fully hand-coded WordPress theme with no page builder dependency' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for DDoS protection and global content delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure data transmission for all users' },
      { short: 'Nginx', full: 'Nginx web server with caching configuration for fast response times' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for user sessions, popular medications, and traffic sources' },
      { short: 'Google Maps API', full: 'Google Maps API for location-based pharmacy finder functionality' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with optimized meta tags, headings, and canonical URLs' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for rich search results on medication pages' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance-tuned for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'Next-gen WebP image format delivering faster page loads' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'The entire theme was hand-coded in PHP without any page builder, giving full control over every HTML element, performance characteristic, and design decision specific to a medication database site.',
    },
    {
      title: 'Structured Medication Database',
      description:
        'Medications are organized into hierarchical categories with individual product pages, dosage information, and coupon listings, making it easy for users to find and compare options.',
    },
    {
      title: 'User Reviews System',
      description:
        'A custom reviews module allows site visitors to leave ratings and written feedback on specific medications, increasing trust and dwell time.',
    },
    {
      title: 'SEO & Schema.org Integration',
      description:
        'Built-in technical SEO best practices combined with JSON-LD Schema.org markup on medication pages drive rich snippets in search results and improved organic rankings.',
    },
    {
      title: 'Responsive Design',
      description:
        'Fully responsive CSS Grid layout ensures an optimal browsing experience across desktop, tablet, and mobile devices for US health consumers.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.911mg.org/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default mg911
