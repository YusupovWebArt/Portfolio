import { Project } from '../project-types'

const svkus: Project = {
  id: 10850,
  title: 'Svkus',
  description:
    'Syndicate of Taste is the online portal for a dynamic and creative group of restaurants in Ukraine.',
  fullDescription:
    'Svkus is the online portal for a Ukrainian restaurant group, built on a custom WordPress theme from scratch with e-commerce functionality for table reservations and merchandise. The project included a full content setup with menus, event listings, and restaurant profiles, styled with custom CSS3 and JavaScript to capture the brand\'s creative culinary identity.',
  detailHeroLine: 'CUSTOM WORDPRESS · RESTAURANT GROUP PORTAL',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'E-Commerce + CSS3/JS', highlight: true },
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
      'A custom WordPress theme was built from scratch to serve as the central portal for the Syndicate of Taste restaurant group. E-commerce functionality supports online ordering and reservations, while custom CSS3 and JavaScript deliver an engaging, brand-consistent visual experience across the full menu and event content.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
      caption: 'Home page portal for the Syndicate of Taste restaurant group with featured venues',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/svkus/svkus_slide2.webp',
      caption: 'Restaurant listings, menus, and event section with e-commerce reservation links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible restaurant portal page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with creative layouts and brand-consistent visual styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive menu displays and UI enhancements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme functions and e-commerce logic' },
      { short: 'MySQL', full: 'MySQL database storing restaurant content, menus, events, and product data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing the multi-venue restaurant portal content' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the restaurant group\'s creative brand' },
      { short: 'E-Commerce Setup', full: 'E-commerce functionality integrated for online reservations and product purchases' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast content delivery and security across Ukraine' },
      { short: 'SSL/TLS', full: 'HTTPS encryption protecting customer session and payment data' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal WordPress and e-commerce performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedding interactive location maps for each restaurant venue' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking reservation conversions, menu page views, and user engagement' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Restaurant SEO with optimized meta tags for Ukrainian food and dining searches' },
      { short: 'Schema.org Markup', full: 'Restaurant and FoodEstablishment JSON-LD structured data for rich search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals across all portal pages' },
      { short: 'WebP Images', full: 'WebP format for restaurant photography ensuring fast, high-quality image loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for restaurant promotions and event campaign tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Restaurant Portal',
      description:
        'A fully custom WordPress theme was built from scratch to serve as the central digital hub for the Syndicate of Taste restaurant group, featuring multi-venue presentation and event listings.',
    },
    {
      title: 'E-Commerce Functionality',
      description:
        'Integrated e-commerce features support online table reservations and product purchases, with secure checkout and product management capabilities.',
    },
    {
      title: 'Full Content Setup',
      description:
        'All restaurant menus, venue profiles, event announcements, and supporting content were entered and structured for maximum readability and conversion.',
    },
    {
      title: 'Responsive Design',
      description:
        'The portal is fully responsive across desktops, tablets, and smartphones, ensuring diners can browse venues and reserve tables from any device.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Restaurant-specific SEO with Schema.org FoodEstablishment markup and Google Maps integration maximizes local search visibility across Ukrainian dining searches.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://svkus.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default svkus
