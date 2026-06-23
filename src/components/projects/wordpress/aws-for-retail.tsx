import { Project } from '../project-types'

const awsForRetail: Project = {
  id: 15000,
  title: 'AWS for Retail',
  description:
    'Website focused on promoting retail-oriented cloud solutions and services built on Amazon Web Services (AWS). It positions AWS not just as infrastructure, but as a strategic backbone for retail businesses to modernize operations, scale dynamically, and provide seamless customer experiences.',
  fullDescription:
    'A custom WordPress site built with Elementor and extended with custom CSS3, JavaScript, and PHP to showcase AWS retail cloud solutions. AI-generated imagery communicates complex cloud concepts visually, while a full SEO strategy drives organic traffic from retail businesses evaluating cloud modernization options.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · RETAIL SOLUTIONS',
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
      'WordPress with Elementor handles content management and page layout, with custom PHP and JavaScript extending the builder\'s capabilities for unique interactions. AI-generated visuals represent AWS retail infrastructure concepts and are delivered globally via Cloudflare CDN. MySQL stores all content, settings, and form data.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
      caption: 'Home page presenting AWS retail cloud solutions with strategic messaging',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide2.webp',
      caption: 'Custom Elementor layout with CSS3/JS showcasing AWS retail services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide3.webp',
      caption: 'Solution feature section with AI-generated cloud retail visuals',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide4.webp',
      caption: 'Call-to-action and contact section for retail cloud consultations',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for clear retail solution content structure' },
      { short: 'CSS3', full: 'Custom CSS3 for unique animations and visual styling extending Elementor' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive page components and dynamic behaviors' },
      { short: 'Elementor', full: 'Elementor page builder enabling rapid and structured page layout development' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with dynamic functionality' },
      { short: 'MySQL', full: 'MySQL database for all site content, solution pages, and lead data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all pages, posts, and media assets' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global delivery of AI visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and form submissions' },
      { short: 'Nginx', full: 'Nginx web server providing efficient request handling and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and conversion funnel analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for business location display on the contact page' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated visuals illustrating AWS retail cloud concepts throughout the site' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS retail and cloud modernization keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for enhanced search result presentation' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization ensuring green Core Web Vitals across all solution pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and photography assets ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'AWS Retail Solution Showcase',
      description:
        'Dedicated solution pages explain how AWS enables retail businesses to modernize operations, scale dynamically, and deliver seamless omnichannel customer experiences.',
    },
    {
      title: 'AI-Generated Visual Storytelling',
      description:
        'AI-generated graphics translate complex AWS cloud infrastructure concepts into compelling visuals that communicate value to retail decision-makers quickly.',
    },
    {
      title: 'Custom Elementor Design with Code Extensions',
      description:
        'Elementor is extended with custom CSS3 and JavaScript to produce advanced animations and interactive elements that differentiate the site from standard builder output.',
    },
    {
      title: 'SEO & Structured Data Strategy',
      description:
        'Full technical SEO with Schema.org markup targets retail cloud computing search terms, driving qualified organic traffic from businesses evaluating AWS retail solutions.',
    },
    {
      title: 'Responsive & Globally Optimized',
      description:
        'Fully responsive layout with Cloudflare CDN and WebP images ensures a fast, professional experience for retail stakeholders across all devices and regions.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://awsforretail.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsForRetail
