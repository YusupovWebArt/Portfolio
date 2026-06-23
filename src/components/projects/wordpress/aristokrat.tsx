import { Project } from '../project-types'

const aristokrat: Project = {
  id: 10800,
  title: 'Aristocrat Hotel & Restaurant',
  description:
    'Ukrainian hotel-restaurant complex offers guests elegant accommodation in a beautifully restored historic building.',
  fullDescription:
    'A custom WordPress theme built from scratch for a Ukrainian hotel-restaurant complex, featuring an integrated room booking system and immersive 3D panorama virtual tours of the venue. Custom CSS3 and JavaScript deliver refined animations and a premium visual experience that reflects the historic elegance of the property.',
  detailHeroLine: 'CUSTOM WORDPRESS · HOSPITALITY & HOTEL BOOKING',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: '3D Panorama', label: 'Virtual Tour', accent: 'darkGreen' },
    { value: 'Booking System', label: 'Room Reservations', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme + Booking', highlight: true },
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
      'A fully custom WordPress PHP theme powers the hotel site, with a booking system integration enabling guests to check availability and reserve rooms directly. 3D panorama technology allows virtual walkthroughs of rooms and event spaces. Cloudflare CDN ensures fast delivery of high-resolution panorama assets and images globally.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/aristokrat_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aristokrat_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aristokrat_thumb.webp',
      caption: 'Home page presenting the hotel\'s historic elegance and main booking CTA',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aristokrat/aristokrat_slide2.webp',
      caption: 'Room listings page with availability and reservation options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aristokrat/aristokrat_slide3.webp',
      caption: 'Restaurant section showcasing dining menu and ambiance',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aristokrat/aristokrat_slide4.webp',
      caption: '3D panorama virtual tour interface for room and venue exploration',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aristokrat/aristokrat_slide5.webp',
      caption: 'Gallery and amenities section highlighting the historic building features',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible hotel content and booking forms' },
      { short: 'CSS3', full: 'Custom CSS3 with refined animations reflecting the hotel\'s premium aesthetic' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript powering interactive booking UI and 3D panorama viewer' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme handling booking logic and dynamic content rendering' },
      { short: 'MySQL', full: 'MySQL database for room data, reservations, and gallery content' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing hotel pages, rooms, restaurant, and blog content' },
      { short: 'Custom Theme', full: 'Fully hand-coded WordPress theme tailored to the hotel\'s brand identity' },
      { short: 'Booking System', full: 'Integrated room booking and availability management system' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of panorama assets and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing guest booking and personal data' },
      { short: 'Nginx', full: 'Nginx server optimized for handling concurrent booking requests' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for booking funnel analysis and visitor engagement' },
      { short: 'Google Maps API', full: 'Google Maps API for hotel location display and directions on contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting local hospitality search terms for the Ukrainian market' },
      { short: 'Schema.org Markup', full: 'JSON-LD Hotel and LodgingBusiness schema for rich results in Google Search' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Optimized Core Web Vitals ensuring fast interactivity and visual stability' },
      { short: 'WebP Images', full: 'WebP format for all hotel photography reducing page weight significantly' },
    ],
  },
  features: [
    {
      title: 'Integrated Room Booking System',
      description:
        'A full booking system allows guests to check room availability, select dates, and complete reservations directly on the site, streamlining the reservation process.',
    },
    {
      title: '3D Panorama Virtual Tours',
      description:
        'Interactive 3D panorama technology lets prospective guests virtually explore rooms, the restaurant, and event spaces before booking, increasing conversion confidence.',
    },
    {
      title: 'Custom WordPress Theme from Scratch',
      description:
        'The theme was hand-coded in PHP to precisely match the hotel\'s historic and elegant brand identity, with no page builder constraints limiting design decisions.',
    },
    {
      title: 'SEO & Local Search Optimization',
      description:
        'Technical SEO with Hotel Schema.org markup and Google Maps integration maximizes local search visibility for guests searching for hotels in the area.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive design with WebP images and Cloudflare CDN ensures the site loads quickly on all devices, even with rich panorama and photography assets.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://aristokrat-hotel24.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default aristokrat
