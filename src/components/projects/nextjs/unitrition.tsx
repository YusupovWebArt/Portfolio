import { Project } from "../project-types";

const unitrition: Project = {
  id: 29000,
  title: "Unitrition",
  description:
    "Unitrition is a high-performance, data-driven web application designed to simplify complex dietary management through smart, and visually intuitive insights. This project demonstrates a sophisticated Headless architecture, bridging traditional content management with modern frontend engineering.",
  fullDescription:
    "Unitrition isn't just a calculator; it's a scalable ecosystem built for performance. By leveraging Headless WordPress and Next.js, I created a platform that offers the speed of a static site with the power of a dynamic data engine.",
  image:
    "/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp",
  fullScreenshot:
    "/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp",
  images: [
    {
      src: "/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp",
      caption: "General view of the application Unitrition",
    },
    {
      src: "/Portfolio/images/portfolio/sliders/nextjs/unitrition/diet-exchanger.webp",
      caption:
        "Interface for each diet counting elements for selected products",
    },
    {
      src: "/Portfolio/images/portfolio/sliders/nextjs/unitrition/bread-units.webp",
      caption: "Bread Units Calculator",
    },
    {
      src: "/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition_slide3.webp",
      caption: "Blog page with posts from Headless WordPress",
    },
    {
      src: "/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition_slide4.webp",
      caption: "Custom article page with content from Headless WordPress",
    },
  ],
  technologies: {
    frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    backendApi: ["Node.js", "Express.js (Scalable API for nutritional data)"],
    contentManagement: [
      "Headless WordPress (REST API) for dynamic content flexibility",
    ],
    devopsSecurity: [
      "GitHub (CI/CD)",
      "Vercel deployment",
      "Cloudflare",
      "SSL",
      "Security Best Practices",
    ],
    analytics: ["Google Analytics"],
  },
  features: [
    {
      title: "AI-Driven Development Workflow",
      description:
        "Engineered the entire application lifecycle using advanced AI-augmented workflows, significantly accelerating time-to-market while maintaining high code quality and architectural integrity.",
    },
    {
      title: "Seamless Headless Integration",
      description:
        "Successfully decoupled the backend (WordPress) from the frontend (Next.js), ensuring sub-second page loads and superior SEO performance through Server-Side Rendering (SSR).",
    },
    {
      title: "Complex Data Processing",
      description:
        "Developed a custom Node.js/Express API to fetch, process, and synchronize nutritional data from multiple internal and external sources.",
    },
    {
      title: "Performance-First Architecture",
      description:
        "Achieved optimal Core Web Vitals via Vercel-automated deployments and efficient TypeScript type-safety across the entire stack.",
    },
    {
      title: "Version Control & CI/CD",
      description:
        "Source code is managed with GitHub using branches, pull requests, and CI/CD workflows.",
    },
    {
      title: "Automated Deployment",
      description:
        "Automatically deployed on Vercel, ensuring smooth updates and optimized performance for Next.js apps.",
    },
    {
      title: "Analytics & Monitoring",
      description:
        "Integrated Google Analytics to monitor user interactions, page views, and engagement patterns.",
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: "https://unitrition.info/",
  githubUrl: "#",
  category: ["nextjs", "wordpress"],
};

export default unitrition;
