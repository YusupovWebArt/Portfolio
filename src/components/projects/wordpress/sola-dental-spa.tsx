import { Project } from '../project-types'

const solaDentalSpa: Project = {
  id: 10970,
  title: 'Sola Dental Spa',
  description: 'Cosmetic Dental Clinic in Staten Island, NY',
  fullDescription:
    'Sola Dental Spa is a cosmetic dentistry website for a clinic in Staten Island, New York, built on a custom WordPress theme from scratch using the WPBakery page builder. The project included full content writing, custom CSS3/JS styling, SEO optimization, and Google Maps integration to drive local patient acquisition in the New York metropolitan area.',
  detailHeroLine: 'CUSTOM WORDPRESS · COSMETIC DENTAL CLINIC',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + WPBakery', accent: 'darkGreen' },
    { value: 'NY Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'WPBakery + CSS3/JS', highlight: true },
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
      'A custom WordPress theme built from scratch forms the structural and visual foundation. WPBakery page builder enables the clinic to manage page layouts independently, with custom CSS3 and JavaScript applied for precise responsive styling and unique interactions beyond the builder\'s defaults. Cloudflare CDN and Nginx ensure fast, secure delivery to patients in New York.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
      caption: 'Home page with cosmetic dental services hero and key treatment highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/soladentalspa/soladentalspa_slide2.webp',
      caption: 'Services page showcasing cosmetic treatments including veneers and whitening',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/soladentalspa/soladentalspa_slide3.webp',
      caption: 'Contact and appointment booking section with Google Maps location display',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and healthcare-SEO-optimized page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive layouts and dental brand-specific visual styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive treatment galleries and UI components' },
      { short: 'WPBakery', full: 'WPBakery page builder integrated for client-managed page layout editing post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress custom theme logic and appointment form processing' },
      { short: 'MySQL', full: 'MySQL database for storing all clinic content, pages, and patient inquiry data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the foundation for content management and publishing' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch to reflect the clinic\'s premium brand' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection for US visitors' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure patient data handling across all forms' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress hosting performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the clinic\'s Staten Island, NY location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking appointment inquiry conversions and patient traffic sources' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local dental SEO targeting cosmetic dentistry searches in Staten Island and NYC' },
      { short: 'Schema.org Markup', full: 'MedicalBusiness and Dentist JSON-LD structured data for local search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning targeting green Core Web Vitals for medical practice credibility' },
      { short: 'WebP Images', full: 'WebP format for treatment before/after photos and clinic imagery' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for patient lead generation and appointment tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'A bespoke WordPress theme was built from scratch to convey the premium, professional atmosphere of the cosmetic dental spa with complete design control.',
    },
    {
      title: 'WPBakery Page Builder Integration',
      description:
        'WPBakery was fully integrated to provide the clinic with a visual drag-and-drop editing interface for maintaining page layouts and content without developer assistance.',
    },
    {
      title: 'Custom CSS3/JS & PHP Enhancements',
      description:
        'Custom CSS3 and JavaScript deliver unique responsive styling and interactive elements beyond WPBakery\'s defaults, while PHP manages form submissions and server-side logic.',
    },
    {
      title: 'Local SEO & Appointment Booking',
      description:
        'Local dental SEO with Schema.org MedicalBusiness markup and Google Maps integration targets patients searching for cosmetic dentistry in Staten Island and the broader NYC area.',
    },
    {
      title: 'Responsive Design',
      description:
        'The website is fully responsive across desktops, tablets, and smartphones, ensuring patients can easily explore services and book appointments from any device.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.soladentalspa.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default solaDentalSpa
