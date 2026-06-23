import { Project } from '../project-types'

const isal: Project = {
  id: 7850,
  title: 'ISAL',
  description: 'Learn English in Boston — US language school website.',
  fullDescription:
    'ISAL (International School of Languages) is a Boston-based English language school. The site was built using Wix Velo with pixel-perfect design control, including a custom payments and fees functionality, ZOHO CRM integration for student lead management, and a blog section for language learning content.',
  detailHeroLine: 'WIX · EDUCATION & LANGUAGE SCHOOL',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Wix Velo', label: 'Site Engine', accent: 'darkGreen' },
    { value: 'ZOHO CRM', label: 'CRM Integration', accent: 'neutral' },
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
      'ISAL is powered by Wix with Velo custom code enabling advanced functionality beyond standard Wix capabilities — including dynamic payments logic and ZOHO CRM integration for student lead capture. The Wix App Market extends functionality with contact forms and marketing tools. All content is served via Wix\'s managed hosting and CDN with SSL encryption.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wix/isal_thumb.webp',
  fullScreenshot: '/Portfolio/images/portfolio/projects/wix/isal_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wix/isal_thumb.webp',
      caption: 'ISAL homepage showcasing the Boston language school and course offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide2.webp',
      caption: 'English language courses page with programme descriptions and enrolment options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide3.webp',
      caption: 'Fees and payments page with custom Velo-powered pricing logic',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide4.webp',
      caption: 'About the school section highlighting ISAL\'s Boston campus and history',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide5.webp',
      caption: 'Student life and campus gallery section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide6.webp',
      caption: 'Contact and inquiry form integrated with ZOHO CRM',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide7.webp',
      caption: 'Blog section with English learning tips and school news',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide8.webp',
      caption: 'Mobile-optimized view of the ISAL language school website',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Wix Editor', full: 'Wix Editor used for pixel-perfect visual design and layout of the ISAL website' },
      { short: 'Wix Velo', full: 'Velo (Wix\'s development platform) used to build custom payments logic and dynamic functionality' },
      { short: 'CSS3', full: 'Custom CSS3 for fine-tuned visual styling beyond the default Wix theme options' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript within Velo for custom business logic and interactive components' },
    ],
    contentManagement: [
      { short: 'Wix CMS', full: 'Wix CMS for managing course content, blog posts, and dynamic page data' },
      { short: 'Wix App Market', full: 'Wix App Market apps integrated for contact forms, live chat, and marketing tools' },
      { short: 'Blog Module', full: 'Wix Blog module set up for publishing English learning articles and school news' },
    ],
    devopsSecurity: [
      { short: 'Wix Hosting', full: 'Wix-managed hosting providing reliable uptime for the ISAL school website' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption securing all site pages and student inquiry forms' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'Google Analytics integrated to track visitor sessions, traffic sources, and enrolment inquiries' },
      { short: 'Wix Analytics', full: 'Wix built-in analytics for monitoring page performance and user behaviour' },
    ],
    seo: [
      { short: 'Wix SEO Tools', full: 'Wix SEO tools configured for course pages targeting Boston English school keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all key pages for improved search visibility' },
    ],
    digitalMarketing: [
      { short: 'ZOHO CRM', full: 'ZOHO CRM integrated via Velo to capture and manage student enrolment leads' },
      { short: 'Marketing Tools', full: 'Wix Marketing tools used for email campaigns and lead nurturing for prospective students' },
    ],
  },
  features: [
    {
      title: 'Custom Velo Payments Logic',
      description: 'Wix Velo was used to build a custom fees and payments functionality, allowing prospective students to view course-specific pricing structures dynamically on the site.',
    },
    {
      title: 'ZOHO CRM Integration',
      description: 'Student inquiry forms were connected to ZOHO CRM via Velo custom code, enabling the ISAL team to automatically capture and manage leads from the website without manual data entry.',
    },
    {
      title: 'Course & Programme Pages',
      description: 'Detailed programme pages were built for each English language course, covering entry requirements, class formats, duration, and enrolment steps to guide prospective students.',
    },
    {
      title: 'Blog for Language Learning Content',
      description: 'A Wix Blog was set up and populated with English learning tips, school news, and student stories to support SEO and keep prospective students engaged with the school\'s brand.',
    },
    {
      title: 'SEO & Local Visibility',
      description: 'On-page SEO was configured across all course and location pages to improve ISAL\'s visibility in Boston-area English language school searches and international student queries.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.isalusa.com/',
  githubUrl: '#',
  category: ['wix'],
}

export default isal
