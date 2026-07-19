import { SiReact, SiWordpress, SiGoogleanalytics } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";

const About = () => {
  const highlights = [
    {
      icon: <SiWordpress className="w-6 h-6" />,
      title: "WordPress Development",
      points: [
        "Custom themes & plugins (PHP 8.x OOP / WPCS)",
        "Headless CMS setups with React/Next.js",
        "Zero bloated builders — pure native code",
      ],
    },
    {
      icon: <SiReact className="w-6 h-6" />,
      title: "App Development",
      points: [
        "Production-ready React 19 & Next.js 15+ (TypeScript)",
        "Fast rendering via Streaming & Suspense patterns",
        "Rigid compliance with WCAG 2.2 accessibility",
      ],
    },
    {
      icon: <SiGoogleanalytics className="w-6 h-6" />,
      title: "SEO & GEO Optimization",
      points: [
        "Brand citation strategies for ChatGPT, Claude, and Gemini",
        "Advanced JSON-LD schemas & Core Web Vitals audit",
        "Server-side tracking deployments (sGTM)",
      ],
    },
    {
      icon: <LuBrainCircuit className="w-6 h-6" />,
      title: "AI-Augmented Development",
      points: [
        "3x engineering velocity using Claude Code & Cursor",
        "Spec-Driven Development (SDD) execution",
        "Rigorous automated evaluation and regression checks",
      ],
    },
  ];

  const education = [
    {
      year: "2024-Present",
      title: "Advanced Web Engineering & Emerging Tech",
      institution: "Focus on Scalable Ecosystems and AI Integration",
      badge: "R&D / Tech Research",
      description: (
        <ul className="space-y-2 mt-2 list-none">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">WordPress Backend:</strong> Researching custom plugin hooks, OOP standards, and low-level core architectures.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">React Ecosystem:</strong> Implementing high-performance Server-Side Rendered (SSR) patterns and headless connections.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">SEO & GEO Evolution:</strong> Studying and deploying structured schemas for AI search citations and LLM recommendations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">AI SDLC Automation:</strong> Integrating Claude Code, Cursor, and Antigravity into daily workflow via SDD.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Emerging Tech:</strong> Evolving practical skills in building Telegram Mini Apps (TMA).</span>
          </li>
        </ul>
      ),
    },
    {
      year: "2016",
      title: "Specialized courses and practical classes",
      institution: "W3schools, Coursera, Udemy, Codecademy, SoloLearn, Programminghub, YouTube",
      badge: "Continuing Education",
      description: (
        <div className="space-y-3">
          <p>
            Committed to lifelong learning. Continuously updating skills in modern web standards (W3C/MDN), accessibility compliance, and developer tools to keep pace with industry evolution.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["MDN Web Docs", "WordPress Codex", "Coursera", "Udemy", "Codecademy", "W3C"].map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      year: "2005-2010",
      title: "National Technical University (Ukraine)",
      institution: "VNTU - Vinnitsa National Technical University (Ukraine)",
      badge: "Academic Degree",
      description: (
        <ul className="space-y-2 mt-2 list-none">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Specialization:</strong> Administrative management in information security and access control.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Infrastructure:</strong> Systems administration, network security protocols, and infrastructure management.</span>
          </li>
        </ul>
      ),
    },
  ];

  const workExperience = [
    {
      year: "2021-Present",
      title: "Front-end Developer (Remote Full-time/Part-time)",
      company: "Frontdeskhelpers",
      companyUrl: "https://frontdeskhelpers.com/",
      description: (
        <ul className="space-y-2 mt-2 list-none">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Custom WordPress & Wix Dev:</strong> Engineered high-performance themes & plugins from scratch (PHP 8.x, OOP, WPCS) and managed advanced Wix platforms.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Lifecycle Management:</strong> Handled full-cycle deployment, database migrations, security patches, and support for US clients.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">UI/UX Re-engineering:</strong> Led redesigns of legacy sites, converting them into modern, responsive frontends.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Performance & SEO:</strong> Optimized layout structures for Core Web Vitals, achieving stable 90+ Lighthouse scores.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Agile Delivery:</strong> Worked inside active Scrum environments collaborating with international cross-functional teams.</span>
          </li>
        </ul>
      ),
    },
    {
      year: "2020-2021",
      title: "Front-end Developer (Remote Part-time)",
      company: "Agenturro",
      companyUrl: "https://www.agenturro.co/",
      description: (
        <ul className="space-y-2 mt-2 list-none">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Bespoke Theme Development:</strong> Created light, fast custom WordPress sites, completely avoiding bloated pre-made templates.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Full-Cycle Ownership:</strong> Owned web projects from architectural drafting to final server launch and cPanel maintenance.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">Code Modernization:</strong> Refactored legacy codebases to improve UI responsiveness and alignment with current standards.</span>
          </li>
        </ul>
      ),
    },
    {
      year: "2016-2024",
      title: "Freelance and Personal projects",
      company: "Web-developer (WordPress, Shopify, WIX), SEO-specialist.",
      companyUrl: "https://freelancehunt.com/freelancer/arsly.html",
      description: (
        <ul className="space-y-2 mt-2 list-none">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">30+ Delivered Projects:</strong> Successfully designed and launched sites on global freelancing platforms (Upwork, Freelancehunt).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-lime-500 mt-1.5 shrink-0"></span>
            <span><strong className="text-slate-800 dark:text-white">E-commerce & R&D:</strong> Created and promoted personal Shopify e-commerce stores utilizing dropshipping and Print-on-Demand (POD) methodologies, and managed commercial sales on Etsy. Personally owned full-stack execution of SEO, SMM, and digital marketing strategies.</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="space-y-5 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a results-driven Fullstack Web Engineer with 5+ years of experience engineering, scaling, and technically optimizing high-load platforms, with a deep architectural specialization in WordPress. My expertise lies at the sharp intersection of modern frontend ecosystems (React, Next.js) and enterprise-grade WordPress engineering-ranging from custom PHP 8+ architectures and secure plugin development to high-performance Headless CMS configurations and deep performance engineering.
                </p>
                <p>
                  My core competitive edge is a sophisticated, AI-first engineering philosophy. Rather than treating AI as a superficial coding assistant, I systematically integrate next-generation systems - including Claude Code, Cursor, and Google Antigravity - directly into the Software Development Life Cycle (SDLC), following a Spec-Driven Development (SDD) methodology: I define the technical specification first, then have AI implement and verify against it rather than improvise. I heavily leverage AI to automate complex development workflows and conduct deep technical research. By blending my practical architectural experience with AI-augmented development, I fast-track complex refactoring, automate regression checks, and drastically compress Time-to-Market-all while enforcing strict code quality, security, and architectural integrity.
                </p>
                <p>
                  Beyond core development, I actively apply this AI-first framework to continuous learning and knowledge management. I utilize advanced tools like Gemini Notebook for synthesizing complex technical documentation and accelerating research. To anchor this knowledge, I build my own custom educational and utility applications. This continuous loop of automated research, rapid prototyping, and self-directed application development allows me to master new technologies at an unprecedented pace and consistently bring cutting-edge solutions to the teams I work with.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-lime-500 mb-2">
                  50+
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-lime-500 mb-2">
                  5+
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Creative Photo Column */}
          <div className="relative">
            {/* Main Photo Container */}
            <div className="relative bg-white dark:bg-slate-700 rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              <div className="aspect-[9/16] relative">
                <img
                  src="/Portfolio/images/hero-pic.webp"
                  alt="Artur Yusupov - Web developer"
                  className="w-full h-full object-cover"
                />

                {/* Creative Overlay with Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">Artur Yusupov</h4>
                    <p className="text-slate-200 text-sm mb-2">Web developer</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-300">
                      <span>🌍 Spain</span>
                      <span>💼 5+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-500 rounded-2xl opacity-80 blur-sm rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-lime-500 dark:to-lime-400 rounded-full opacity-60 blur-sm"></div>

            {/* Status Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
              Available for Projects
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-8 w-3 h-3 bg-purple-500 dark:bg-lime-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-2 h-2 bg-blue-500 dark:bg-lime-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 -left-4 w-4 h-4 bg-purple-400 dark:bg-lime-600 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Highlights Grid - Full Width */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-lime-200 dark:hover:border-purple-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-lime-100 dark:to-lime-200 rounded-xl flex items-center justify-center text-purple-600 dark:text-lime-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-2 list-none mt-2">
                {item.points.map((pt, i) => (
                  <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-purple-500 dark:before:bg-lime-500 before:rounded-full">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* My Journey - Education and Work Experience */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            My Journey
          </h3>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                My Education
              </h4>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-600"></div>

                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-8 last:mb-0"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-lime-500 dark:to-lime-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg relative z-10">
                      {item.year.includes("Present")
                        ? "Now"
                        : item.year.split("-")[0]}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="text-purple-600 dark:text-lime-500 font-bold text-sm">
                            {item.year}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h5>
                        <div className="text-blue-600 dark:text-lime-500 font-medium text-sm mb-2">
                          {item.institution}
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Timeline */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                My Work Experience
              </h4>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-teal-400 dark:from-lime-400 dark:to-lime-600"></div>

                {workExperience.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-8 last:mb-0"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 dark:from-lime-500 dark:to-lime-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg relative z-10">
                      {item.year.includes("Present")
                        ? "Now"
                        : item.year.split("-")[0]}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow">
                        <div className="text-green-600 dark:text-lime-500 font-bold text-sm mb-1">
                          {item.year}
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h5>
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-teal-600 dark:text-lime-500 font-medium text-sm mb-2 hover:text-teal-700 dark:hover:text-lime-600 transition-colors underline decoration-dotted underline-offset-2"
                        >
                          {item.company}
                        </a>
                        <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
