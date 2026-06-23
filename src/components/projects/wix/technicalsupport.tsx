import { Project } from '../project-types'

const technicalsupport: Project = {
  id: 7900,
  title: 'TST - Technical Support Team',
  description:
    'U.S.-based web development and digital marketing agency founded in 2015.',
  fullDescription:
    'TST (Technical Support Team) is a US-based web development and digital marketing agency founded in 2015. The agency website was built on Wix with Velo for pixel-perfect design control, featuring seamless app integrations, lead capture contact forms, SEO configuration, and site analytics to support the agency\'s own digital marketing efforts.',
  detailHeroLine: 'WIX · DIGITAL AGENCY WEBSITE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Wix Velo', label: 'Site Engine', accent: 'darkGreen' },
    { value: 'Lead Capture', label: 'Key Feature', accent: 'neutral' },
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
      'The TST agency site runs on Wix with Velo enabling custom interactive components and advanced form logic for lead capture. The Wix App Market provides contact forms, live chat, and marketing integrations. Wix-managed hosting and CDN ensure fast, reliable delivery for US visitors, with SSL securing all data exchange.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wix/technicalsupport_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wix/technicalsupport_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wix/technicalsupport_thumb.webp',
      caption: 'TST agency homepage showcasing web development and digital marketing services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/technicalsupport/technicalsupport_slide2.webp',
      caption: 'Services page detailing web development, SEO, and digital marketing offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/technicalsupport/technicalsupport_slide3.webp',
      caption: 'Portfolio section and contact form for client lead capture',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Wix Editor', full: 'Wix Editor used for pixel-perfect visual design of the TST agency website' },
      { short: 'Wix Velo', full: 'Velo custom code for advanced interactive components and dynamic content sections' },
      { short: 'CSS3', full: 'Custom CSS3 for a professional agency aesthetic with polished visual design' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript within Velo for animations, form logic, and dynamic UI behaviour' },
    ],
    contentManagement: [
      { short: 'Wix CMS', full: 'Wix CMS for managing service descriptions, case studies, and agency content' },
      { short: 'Wix App Market', full: 'App Market integrations for contact forms, live chat, and email marketing tools' },
    ],
    devopsSecurity: [
      { short: 'Wix Hosting', full: 'Wix-managed hosting ensuring reliable uptime for the TST agency website' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption securing all visitor interactions and contact form submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'Google Analytics configured to track agency site traffic, lead form submissions, and referral sources' },
      { short: 'Wix Analytics', full: 'Wix built-in analytics for monitoring page performance and visitor engagement' },
    ],
    seo: [
      { short: 'Wix SEO Tools', full: 'Wix SEO tools configured targeting US web development and digital marketing agency keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions across all service pages for improved search visibility' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Wix Marketing tools used to run email campaigns and manage the agency\'s own digital presence' },
    ],
  },
  features: [
    {
      title: 'Professional Agency Design',
      description: 'The TST website was built with a clean, authoritative agency aesthetic using Wix Editor and Velo, featuring a structured services layout, case study sections, and professional brand identity.',
    },
    {
      title: 'Lead Capture Contact Forms',
      description: 'Custom contact and project inquiry forms were implemented via the Wix App Market, enabling prospective clients to submit service requests and receive timely follow-up from the TST team.',
    },
    {
      title: 'Services & Portfolio Pages',
      description: 'Dedicated pages were built for each service offering — web development, SEO, and digital marketing — with supporting case studies and clear calls to action to convert visitors into leads.',
    },
    {
      title: 'SEO Configuration',
      description: 'On-page SEO was fully configured across all service and location pages using Wix SEO tools, targeting keywords relevant to US web development and digital marketing agency searches.',
    },
    {
      title: 'Analytics & Performance Tracking',
      description: 'Google Analytics and Wix Analytics were both configured to give the TST team full visibility into website traffic, lead form conversion rates, and top-performing content pages.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.technicalsupport.team/',
  githubUrl: '#',
  category: ['wix'],
}

export default technicalsupport
