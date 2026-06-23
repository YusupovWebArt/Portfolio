import { Project } from '../project-types'

const buhlDe: Project = {
  id: 15500,
  title: 'Buhl WISO',
  description: 'Steuer Jetzt Geld zurückholen. Germany',
  fullDescription:
    'A custom WordPress theme built from scratch using pure code — no page builder — for Buhl\'s WISO tax software product, targeting the German market. Custom CSS3 and JavaScript deliver a polished, conversion-focused landing experience that communicates the software\'s key tax-return benefits and drives product downloads, aligned with the Buhl brand identity.',
  detailHeroLine: 'CUSTOM WORDPRESS · TAX SOFTWARE · GERMANY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Theme', label: 'Pure PHP/CSS/JS', accent: 'darkGreen' },
    { value: 'German Market', label: 'Localized SEO', accent: 'neutral' },
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
      'A fully custom PHP WordPress theme without any page builder provides complete control over the markup and performance of the tax software landing pages. MySQL stores all content and settings. Cloudflare CDN ensures fast delivery for German market visitors, while Nginx handles server-side caching for optimal performance.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
      caption: 'Home page presenting WISO tax software with conversion-focused hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/buhl-de/buhl-de_slide2.webp',
      caption: 'Features and benefits section showcasing WISO tax return capabilities',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/buhl-de/buhl-de_slide3.webp',
      caption: 'Pricing and download CTA section for the German tax software product',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized tax software content' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive grid layout aligned to the Buhl brand identity' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product feature highlights and UI behaviors' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme with no page builder for full markup and performance control' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, landing page data, and settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all WISO product pages and content' },
      { short: 'Custom Theme', full: 'Fully hand-coded WordPress theme matching the Buhl brand design system' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery to German users and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic for the German market' },
      { short: 'Nginx', full: 'Nginx server with caching configuration for high-performance delivery' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for German market visitor behavior and conversion analysis' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'German-market SEO targeting tax software and Steuer keywords for local search' },
      { short: 'Schema.org Markup', full: 'JSON-LD SoftwareApplication schema for rich results in German Google Search' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization delivering green Core Web Vitals for the German audience' },
      { short: 'WebP Images', full: 'WebP format for product screenshots and graphics reducing page weight' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'The entire theme was hand-coded in PHP without a page builder, delivering precise control over every element and ensuring the fastest possible page performance for German users.',
    },
    {
      title: 'Conversion-Focused Landing Design',
      description:
        'The page layout is structured to guide visitors from software benefits to product download CTA, following proven conversion rate optimization patterns for software products.',
    },
    {
      title: 'German Market SEO',
      description:
        'Localized SEO strategy with German-language meta tags and Schema.org SoftwareApplication markup targets tax-related keywords to drive organic traffic in the German market.',
    },
    {
      title: 'Buhl Brand Alignment',
      description:
        'Custom CSS3 and JavaScript ensure the design is precisely aligned with Buhl\'s established brand identity, maintaining visual consistency across the product marketing site.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive design with WebP images and Cloudflare CDN ensures fast load times and a professional experience for German tax filers on all devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.buhl.de/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default buhlDe
