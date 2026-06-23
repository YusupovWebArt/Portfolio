import { Project } from '../project-types'

const awsSecurityService: Project = {
  id: 16500,
  title: 'AWS Security Services',
  description:
    'Specialized platform focused on securing cloud infrastructures built on Amazon Web Services (AWS). The site provides end-to-end solutions for compliance, threat detection, monitoring, and proactive defense to help businesses safeguard their data and operations.',
  fullDescription:
    'A fully custom-coded WordPress theme developed without a page builder, using Advanced Custom Fields (ACF) for structured content management, custom CSS3 and JavaScript for a technical, trustworthy aesthetic, and AI-generated imagery to visualize cybersecurity concepts. The platform positions AWS security services with clear solution pages, compliance guidance, and proactive threat monitoring offerings.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · SECURITY SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Code + ACF', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'AI Visuals', label: 'Generated Graphics', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core + ACF' },
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
      'A fully custom PHP WordPress theme without a page builder manages all solution pages through ACF field groups, enabling structured and consistent content editing. AI-generated imagery visualizes security concepts and is delivered via Cloudflare CDN. MySQL stores all content and ACF data, while Nginx handles server-level caching.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
      caption: 'Home page presenting AWS security solutions with a technical hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide2.webp',
      caption: 'Threat detection and monitoring solutions section with AI-generated visuals',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide3.webp',
      caption: 'Compliance and regulatory solution pages powered by ACF content fields',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide4.webp',
      caption: 'Proactive defense services overview with structured content layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide5.webp',
      caption: 'Security monitoring dashboard concept section with custom CSS3 styling',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide6.webp',
      caption: 'Contact and consultation CTA section for AWS security engagements',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized security content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a technical, professional aesthetic aligned with cybersecurity branding' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive solution demonstrations and UI behaviors' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme without a page builder for full control over markup and performance' },
      { short: 'MySQL', full: 'MySQL database storing all content, ACF fields, and solution page data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation for all security solution pages' },
      { short: 'Advanced Custom Fields (ACF)', full: 'ACF plugin structuring security solution content for consistent and efficient editing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of AI-generated visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption across the entire platform reinforcing the security brand message' },
      { short: 'Nginx', full: 'Nginx server with caching ensuring fast response times under load' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and lead generation analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for business location and contact page integration' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated cybersecurity visuals illustrating threat detection and cloud defense concepts' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS security, cloud compliance, and threat detection keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for professional service rich results in search engines' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance-optimized for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and all visual assets ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'Custom PHP Theme with ACF Content Management',
      description:
        'The theme was built entirely in PHP without a page builder, using ACF field groups to structure security solution content — enabling consistent, efficient content updates without developer involvement.',
    },
    {
      title: 'AI-Generated Cybersecurity Visuals',
      description:
        'AI-generated imagery throughout the site visualizes complex AWS security concepts including threat detection, compliance monitoring, and cloud defense architecture.',
    },
    {
      title: 'Security Solution Pages',
      description:
        'Dedicated pages cover compliance, threat detection, monitoring, and proactive defense services, structured for clarity and conversion of enterprise security buyers.',
    },
    {
      title: 'SEO & Schema for Security Services',
      description:
        'Technical SEO with professional service Schema.org markup positions the platform for cloud security and AWS compliance search queries, driving qualified business leads.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive layout with WebP images and Cloudflare CDN ensures a fast, credible experience for enterprise security decision-makers on any device.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://awssecurityservice.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsSecurityService
