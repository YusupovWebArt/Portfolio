import { Project } from '../project-types'

const cloudDeliverySolution: Project = {
  id: 10900,
  title: 'Cloud Delivery solution',
  description:
    'System for dispatching, planning, and tracking your deliveries and courier.',
  fullDescription:
    'A WordPress landing page for the FDH Cloud Delivery Solution, built using the Bootstrap 5 CSS framework for a responsive, mobile-first layout. Custom CSS3 and JavaScript were added for tailored styling and interactivity, presenting the dispatch, planning, and courier tracking capabilities in a clear, conversion-focused single-page format.',
  detailHeroLine: 'CUSTOM WORDPRESS · CLOUD DELIVERY · SAAS LANDING PAGE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Bootstrap 5', label: 'CSS Framework', accent: 'darkGreen' },
    { value: 'Landing Page', label: 'Conversion Focus', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme + Bootstrap 5', highlight: true },
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
      'A custom WordPress PHP theme uses Bootstrap 5 as its responsive CSS foundation, enriched with custom CSS3 and JavaScript for brand-specific styling and interactive elements. MySQL handles all WordPress content. Cloudflare CDN ensures fast global delivery of the landing page to potential business customers.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
      caption: 'Home page presenting the FDH Cloud Delivery Solution with hero and key features',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/delivery-fdh/delivery-fdh_slide2.webp',
      caption: 'Dispatch and planning features section with visual breakdown of capabilities',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/delivery-fdh/delivery-fdh_slide3.webp',
      caption: 'Courier tracking and CTA section with contact and demo request form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for structured and accessible landing page content' },
      { short: 'CSS3', full: 'Custom CSS3 for brand-specific styling layered on top of Bootstrap defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth scroll behaviors' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework providing a responsive, mobile-first layout grid' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ for WordPress theme logic and dynamic content rendering' },
      { short: 'MySQL', full: 'MySQL database for WordPress content and landing page settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all landing page content and media' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast global delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and form submissions' },
      { short: 'Nginx', full: 'Nginx web server for efficient request handling and page caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for landing page engagement and demo request conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting delivery software and courier tracking keywords' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Bootstrap-based layout optimized for green Core Web Vitals performance scores' },
      { short: 'WebP Images', full: 'WebP format for all landing page imagery ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'Bootstrap 5 Responsive Landing Page',
      description:
        'Bootstrap 5 provides a solid, mobile-first responsive grid as the layout foundation, ensuring the delivery solution landing page adapts perfectly to all screen sizes and devices.',
    },
    {
      title: 'Custom CSS3 & JavaScript Styling',
      description:
        'Custom CSS3 and JavaScript layer brand-specific visual elements and interactive behaviors on top of Bootstrap, giving the page a unique identity beyond the framework defaults.',
    },
    {
      title: 'Dispatch & Tracking Feature Showcase',
      description:
        'Dedicated content sections clearly present the platform\'s dispatching, route planning, and real-time courier tracking capabilities to potential business customers.',
    },
    {
      title: 'Conversion-Focused Layout',
      description:
        'The single-page landing structure guides visitors from feature awareness to contact and demo request CTA, optimized for lead generation and product trial sign-ups.',
    },
    {
      title: 'SEO & Performance Optimization',
      description:
        'Technical SEO and Core Web Vitals optimization ensure the landing page loads fast and ranks for relevant delivery software and courier management search terms.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl:
    'https://frontdeskhelpers.com/remote-virtual-services/delivery-solution-fdh-cloud/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default cloudDeliverySolution
