import { Project } from '../project-types'

const lashbouSalon: Project = {
  id: 7750,
  title: 'Lashbousalon',
  description: 'U.S.-based eyelash salon in Arlington, Texas.',
  fullDescription:
    'Lashbou Salon is a US-based eyelash salon located in Arlington, Texas. The site was built on Wix with Velo for pixel-perfect control, featuring seamless app integrations for appointment booking, an eCommerce section for lash product sales, mobile-friendly optimization, and built-in SEO and site analytics.',
  detailHeroLine: 'WIX · BEAUTY SALON',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Wix Velo', label: 'Site Engine', accent: 'darkGreen' },
    { value: 'Appointment Booking', label: 'Key Feature', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'SITE ENGINE',
        steps: [
          { label: 'Wix Editor' },
          { label: 'Velo (Custom Code)', highlight: true },
          { label: 'App Market' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Wix Hosting' },
          { label: 'CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'Lashbou Salon runs on Wix with Velo providing custom design control and interactive booking functionality. The Wix App Market integrates appointment scheduling, contact forms, and marketing tools. Wix-managed hosting with CDN ensures fast page loads for local Arlington visitors, with SSL securing all customer interactions.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wix/lashbousalon_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wix/lashbousalon_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wix/lashbousalon_thumb.webp',
      caption: 'Lashbou Salon homepage showcasing the Arlington salon and lash services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/lashbousalon/lashbousalon_slide2.webp',
      caption: 'Services page with lash extension options and pricing details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/lashbousalon/lashbousalon_slide3.webp',
      caption: 'Appointment booking section and contact information for the Arlington salon',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Wix Editor', full: 'Wix Editor used for pixel-perfect visual design of the Lashbou Salon site' },
      { short: 'Wix Velo', full: 'Velo custom code for advanced interactive components and booking functionality' },
      { short: 'CSS3', full: 'Custom CSS3 for refined visual styling with a premium beauty salon aesthetic' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript within Velo for dynamic interactions and form logic' },
    ],
    contentManagement: [
      { short: 'Wix CMS', full: 'Wix CMS managing salon services, team profiles, and gallery content dynamically' },
      { short: 'Wix App Market', full: 'App Market integrations for appointment booking, contact forms, and email marketing' },
      { short: 'eCommerce Integration', full: 'Wix eCommerce set up for online product sales and gift voucher purchases' },
    ],
    devopsSecurity: [
      { short: 'Wix Hosting', full: 'Wix-managed hosting providing reliable uptime for the Lashbou Salon website' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption protecting customer booking data and online transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'Google Analytics configured to track local salon traffic, booking clicks, and referral sources' },
      { short: 'Wix Analytics', full: 'Wix built-in analytics for monitoring page performance and user engagement metrics' },
    ],
    seo: [
      { short: 'Wix SEO Tools', full: 'Wix SEO tools configured targeting Arlington, Texas lash salon and beauty service keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all service and location pages for local search visibility' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Wix Marketing tools used for email promotions and social media campaigns to attract local clients' },
    ],
  },
  features: [
    {
      title: 'Premium Salon Design',
      description: 'The site was designed with a sleek, feminine beauty aesthetic using Wix Editor and Velo, featuring high-quality lash portfolio imagery, branded colours, and a service-focused layout.',
    },
    {
      title: 'Online Appointment Booking',
      description: 'A Wix Bookings integration was configured to allow clients to browse lash services, select preferred stylists, and book appointments directly online without calling the salon.',
    },
    {
      title: 'eCommerce for Products & Vouchers',
      description: 'Wix eCommerce was set up to allow customers to purchase lash products and gift vouchers online, creating an additional revenue stream beyond in-salon appointments.',
    },
    {
      title: 'Local SEO Optimization',
      description: 'Service and location pages were optimized with Arlington and Texas-specific keywords to improve the salon\'s visibility in local beauty and lash extension searches.',
    },
    {
      title: 'Mobile-Friendly Experience',
      description: 'The entire site was optimized for mobile browsing, ensuring that local clients can view services, check pricing, and book appointments seamlessly from their smartphones.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.arlington.lashbousalon.com/',
  githubUrl: '#',
  category: ['wix'],
}

export default lashbouSalon
