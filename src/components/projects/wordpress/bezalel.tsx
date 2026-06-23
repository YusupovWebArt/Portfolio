import { Project } from '../project-types'

const bezalel: Project = {
  id: 10870,
  title: 'Bezalel Care Management',
  description: 'Care coordination agency located in New York City.',
  fullDescription:
    'A custom WordPress theme built from scratch for a New York City care coordination agency, using Elementor enhanced with custom CSS3, JavaScript, and PHP. The site clearly presents care management services, provider information, and contact channels to families and individuals seeking professional care coordination support in the NYC area.',
  detailHeroLine: 'CUSTOM WORDPRESS · CARE MANAGEMENT · NEW YORK CITY',
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
      'WordPress with Elementor powers the page layout and content management layer, extended with custom PHP, CSS3, and JavaScript for unique design elements and enhanced functionality. MySQL stores all agency content and service information. Cloudflare CDN ensures fast delivery for NYC-area visitors.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
      caption: 'Home page presenting care coordination services with trust-focused design',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide2.webp',
      caption: 'Services overview page detailing care management and coordination offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide3.webp',
      caption: 'About and team section building client trust and credibility',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide4.webp',
      caption: 'Contact page with Google Maps and appointment inquiry form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible healthcare service content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a warm, trust-focused visual design for the agency' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth page transitions' },
      { short: 'Elementor', full: 'Elementor page builder enabling client-managed layout editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with agency-specific functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, service pages, and form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all care management content and service pages' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast NYC-area delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing client inquiry and contact form data' },
      { short: 'Nginx', full: 'Nginx server with caching for responsive performance under traffic' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for service page engagement and inquiry conversion analysis' },
      { short: 'Google Maps API', full: 'Google Maps API displaying the NYC agency location on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local SEO targeting NYC care coordination and care management keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD LocalBusiness and HealthAndBeautyBusiness schema for local search rich results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP image format for faster loading of team photos and service visuals' },
    ],
  },
  features: [
    {
      title: 'Elementor Enhanced with Custom Code',
      description:
        'Elementor provides a client-editable page structure, extended with custom CSS3 and JavaScript for advanced animations and a refined aesthetic beyond the builder\'s native capabilities.',
    },
    {
      title: 'Service & Provider Information Pages',
      description:
        'Clear service pages explain the agency\'s care coordination offerings and provider network, helping families understand what support is available and how to engage.',
    },
    {
      title: 'Local NYC SEO & Schema Markup',
      description:
        'Local SEO strategy with Schema.org markup targets NYC care management search queries, improving visibility in Google Maps and local search results for families in need.',
    },
    {
      title: 'Contact & Inquiry System',
      description:
        'An integrated contact form and Google Maps display make it easy for potential clients to reach the agency and find the office location in New York City.',
    },
    {
      title: 'Responsive & Accessible Design',
      description:
        'Fully responsive design ensures caregivers and family members can access information and make inquiries seamlessly from any device, including mobile phones.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.bezalelservices.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default bezalel
