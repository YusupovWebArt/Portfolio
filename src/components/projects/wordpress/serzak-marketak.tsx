import { Project } from '../project-types'

const serzakMarketak: Project = {
  id: 14000,
  title: 'Serzak Marketak',
  description:
    'Czech-based digital marketing agency founded and run by marketing specialist Serhiy Venhryn.',
  fullDescription:
    'Serzak Marketak is a digital marketing agency website based in the Czech Republic, built on a custom WordPress theme from scratch with Elementor page builder enhanced by advanced CSS3 and JavaScript. The site showcases the agency\'s services, portfolio, and expertise, with multilingual-ready SEO and Schema.org markup to support business development across the Czech and Ukrainian markets.',
  detailHeroLine: 'CUSTOM WORDPRESS · DIGITAL MARKETING AGENCY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + Elementor', accent: 'darkGreen' },
    { value: 'CZ Market', label: 'Target Region', accent: 'neutral' },
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
      'A custom WordPress theme built from scratch provides the structural foundation and brand identity. Elementor handles page layouts with the client\'s future editing needs in mind, substantially enhanced with custom CSS3 animations and JavaScript interactions. Nginx caching and Cloudflare CDN ensure fast delivery to clients in the Czech Republic and beyond.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
      caption: 'Home page with agency hero section and core digital marketing services overview',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide2.webp',
      caption: 'Services section showcasing SEO, PPC, and social media marketing offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide3.webp',
      caption: 'Portfolio and case studies section demonstrating client campaign results',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide4.webp',
      caption: 'About page with agency founder profile and expertise highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide5.webp',
      caption: 'Contact and consultation request section with inquiry form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized agency pages' },
      { short: 'CSS3', full: 'Custom CSS3 with animations, Grid, and responsive layouts beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and custom animations' },
      { short: 'Elementor', full: 'Elementor page builder enabling client self-editing of page layouts post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme functions and contact form handling' },
      { short: 'MySQL', full: 'MySQL database storing all site content, services, and portfolio entries' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management and publishing foundation' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the agency\'s unique brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast European delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and form data' },
      { short: 'Nginx', full: 'Nginx web server optimized for WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the agency\'s Czech Republic location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking sessions, traffic sources, and lead conversion events' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with multilingual-ready meta tags for Czech and Ukrainian markets' },
      { short: 'Schema.org Markup', full: 'Organization and LocalBusiness JSON-LD structured data for search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals across all pages' },
      { short: 'WebP Images', full: 'WebP images ensuring fast loading across portfolio and service sections' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations aligned with the agency\'s own digital campaigns' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A fully custom WordPress theme was built to establish a distinctive digital agency brand identity with complete control over design, typography, and layout structure.',
    },
    {
      title: 'Elementor with Advanced CSS3 & JavaScript',
      description:
        'Elementor was integrated at the client\'s request for self-editing capability, and significantly enhanced with custom CSS3 animations and JavaScript interactions to deliver a polished, high-end agency look.',
    },
    {
      title: 'Services & Portfolio Showcase',
      description:
        'Dedicated sections present the agency\'s digital marketing services including SEO, PPC, and social media, alongside portfolio case studies demonstrating measurable client results.',
    },
    {
      title: 'Responsive Design',
      description:
        'The site is fully responsive across all devices, ensuring prospective clients have a seamless experience whether browsing on desktop, tablet, or mobile.',
    },
    {
      title: 'SEO Optimization',
      description:
        'Technical SEO with Schema.org markup and multilingual meta tags helps the agency rank for digital marketing queries in both the Czech and Ukrainian markets.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://serzakmarketak.cz/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default serzakMarketak
