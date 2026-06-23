import { Project } from '../project-types'

const lashbouAcademy: Project = {
  id: 7800,
  title: 'Lashbou Academy',
  description: 'USA eyelash technician training academy website.',
  fullDescription:
    'Lashbou Academy is a US-based eyelash training academy offering professional lash technician courses. The site was built on Wix with Velo for pixel-perfect design control, featuring seamless app integrations, an eCommerce booking system for course enrolment, mobile-friendly optimization, and built-in SEO and analytics tools.',
  detailHeroLine: 'WIX · BEAUTY TRAINING ACADEMY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Wix Velo', label: 'Site Engine', accent: 'darkGreen' },
    { value: 'Course Booking', label: 'Key Feature', accent: 'neutral' },
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
      'Lashbou Academy is built on Wix with Velo custom code enabling advanced design control and eCommerce course booking functionality. The Wix App Market provides contact forms, booking systems, and marketing tools. Wix-managed hosting and CDN ensure fast, secure delivery for US-based students and prospective trainees.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wix/lashbouacademy_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wix/lashbouacademy_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wix/lashbouacademy_thumb.webp',
      caption: 'Lashbou Academy homepage showcasing professional lash training courses',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/lashbouacademy/lashbouacademy_slide2.webp',
      caption: 'Course catalogue page with lash technician training programme details',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Wix Editor', full: 'Wix Editor used for pixel-perfect layout and design of the Lashbou Academy site' },
      { short: 'Wix Velo', full: 'Velo custom code for advanced interactive components and eCommerce booking logic' },
      { short: 'CSS3', full: 'Custom CSS3 for refined visual styling with a premium beauty academy aesthetic' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript within Velo for dynamic course content and form interactions' },
    ],
    contentManagement: [
      { short: 'Wix CMS', full: 'Wix CMS managing course pages, trainer profiles, and academy content dynamically' },
      { short: 'Wix App Market', full: 'App Market integrations for booking systems, contact forms, and email marketing' },
      { short: 'eCommerce Integration', full: 'Wix eCommerce set up for course booking and online payment processing' },
    ],
    devopsSecurity: [
      { short: 'Wix Hosting', full: 'Wix-managed hosting providing reliable uptime for the Lashbou Academy website' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption protecting student data and payment information on the site' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'Google Analytics configured to track course page visits, enrolment inquiries, and traffic sources' },
      { short: 'Wix Analytics', full: 'Wix built-in analytics for monitoring site performance and user engagement' },
    ],
    seo: [
      { short: 'Wix SEO Tools', full: 'Wix SEO tools configured for course pages targeting US lash training and beauty academy keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all course and landing pages for search visibility' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Wix Marketing tools used for email campaigns and social media promotion of academy courses' },
    ],
  },
  features: [
    {
      title: 'Professional Academy Design',
      description: 'The site was built with a premium beauty academy aesthetic using Wix Editor and Velo, featuring high-quality trainer photography, branded colour schemes, and a clean course-focused layout.',
    },
    {
      title: 'Course Booking & eCommerce',
      description: 'Wix eCommerce was integrated to allow students to browse course options, select training dates, and complete secure online enrolment and payment directly on the site.',
    },
    {
      title: 'Mobile-Friendly Optimization',
      description: 'Every page was optimized for mobile devices, ensuring that prospective students can browse courses, view trainer credentials, and book training sessions seamlessly on any screen size.',
    },
    {
      title: 'Contact Forms & Lead Capture',
      description: 'Custom contact forms were set up via the Wix App Market to capture student inquiries and course interest, feeding leads directly into the academy\'s communication workflow.',
    },
    {
      title: 'SEO & Content Strategy',
      description: 'Course and location pages were optimized with targeted keywords and meta data to improve organic visibility for US lash technician training searches and beauty academy queries.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.lashbouacademy.com/',
  githubUrl: '#',
  category: ['wix'],
}

export default lashbouAcademy
