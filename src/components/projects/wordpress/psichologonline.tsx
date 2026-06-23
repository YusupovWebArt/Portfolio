import { Project } from '../project-types'

const psichologonline: Project = {
  id: 10810,
  title: 'Psichologonline',
  description: 'Elena Grechka is a qualified Ukrainian psychologist.',
  fullDescription:
    'Psichologonline is a personal professional website for Ukrainian psychologist Elena Grechka, built on a custom WordPress theme from scratch using Elementor with advanced CSS3 and JavaScript enhancements. The site conveys trust and approachability, featuring service descriptions, an online booking inquiry form, and SEO optimization to attract Ukrainian-language counselling clients.',
  detailHeroLine: 'CUSTOM WORDPRESS · PSYCHOLOGY PRACTICE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + Elementor', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'Elementor + CSS3/JS', highlight: true },
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
      'A custom WordPress theme built from scratch provides the structural foundation, while Elementor enables the client to independently edit page content in the future. Custom CSS3 and JavaScript significantly extend Elementor\'s capabilities with precise animations and interactive elements beyond default builder limitations.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
      caption: 'Home page introducing Elena Grechka with a professional hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide2.webp',
      caption: 'Services section describing available psychology and counselling sessions',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide3.webp',
      caption: 'About page with psychologist biography, credentials, and approach',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide4.webp',
      caption: 'Contact and booking inquiry section with consultation request form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup providing accessible and SEO-ready page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with animations and precise responsive layouts beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and smooth user experience' },
      { short: 'Elementor', full: 'Elementor page builder integrated for client self-editing capability post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic, custom functions, and form handling' },
      { short: 'MySQL', full: 'MySQL database storing all page content and contact form data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform for content publishing and management' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for a unique, professional aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure visitor connections and form data privacy' },
      { short: 'Nginx', full: 'Nginx web server with caching for optimized WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show the practitioner\'s location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor sessions, traffic sources, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian-language SEO with optimized meta tags for psychology practice searches' },
      { short: 'Schema.org Markup', full: 'Person and LocalBusiness JSON-LD structured data for enhanced search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP images for fast loading of professional photography across all pages' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools to support client acquisition and brand awareness' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A bespoke WordPress theme was built from scratch to give the psychologist a unique, trust-inspiring professional presence tailored to her brand and client audience.',
    },
    {
      title: 'Elementor with Advanced Customization',
      description:
        'Elementor was integrated at the client\'s request for future self-editing, enhanced with custom CSS3 and JavaScript to achieve advanced animations and precise styling beyond the builder\'s standard toolkit.',
    },
    {
      title: 'Online Consultation Inquiry Form',
      description:
        'A styled contact and booking form allows potential clients to request consultations directly from the website, with server-side PHP validation and email notifications.',
    },
    {
      title: 'Responsive Design',
      description:
        'The website is fully responsive, providing a comfortable, professional experience for clients browsing on any device including mobile phones and tablets.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Technical SEO with Schema.org markup and Ukrainian-language optimization ensures the practice appears prominently in local psychological counselling search results.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://psichologonline.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default psichologonline
