import { Layout, Palette, Brain } from 'lucide-react'
import { SiReact, SiWordpress, SiGoogleanalytics } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'WordPress Development',
      icon: <SiWordpress className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      description: 'Custom Themes & Plugins. Ecommerce.',
      technologies: [
        'Hosting & Google App Engine (GAE) management',
        'WordPress (Custom Themes & Plugins)',
        'PHP 8+ & Object-Oriented Programming',
        'Component-based development in WordPress using ACF',
        'Custom Post Types & Fields',
        'WordPress Hooks & Filters',
        'WordPress REST API & Headless WordPress',
        'Database Optimization & Query Performance',
        'Page Builders (Gutenberg, Elementor, etc)',
        'Custom Gutenberg Blocks (React-based)',
        'WooCommerce (Customization & Extensions)',
        'Multilingual WP Sites (WPML, Polylang)',
        'Multisite Network Management',
        'Internal Technical Optimization (Core Web Vitals)',
        'Security',
        'Theme JSON & Block Editor Styling',
        'Composer & WP-CLI Automation',
        'SEO Tools Integration (Yoast, Rank Math)',
        'Marketing Tools (Mailchimp, HubSpot, Zapier)',
        'AI Tools (OpenAI API, Chatbot Integration)',
        'Third-Party API Integrations (CRM, Payment, etc.)',
        'Performance Auditing (Lighthouse, Query Monitor)',
        'Deployment Workflows (Git, FTP, CI/CD)',
        'Headless CMS Architecture with Next.js',
        'Custom Forms (Contact Form 7) and Form Builders',
        'Google Tag Manager & Analytics Integration',
        'Accessibility Standards (WCAG Compliance)',
      ],
      skillDetails: [
        {
          name: 'WordPress Development',
          description:
            'Custom theme development, plugin architecture, WordPress REST API, custom post types, and advanced customizer implementations.',
        },
        {
          name: 'PHP & MySQL',
          description:
            'Object-oriented PHP programming, database design, query optimization, and secure coding practices for robust backend systems.',
        },
        {
          name: 'API Development',
          description:
            'RESTful API design, authentication systems, data validation, and integration with third-party services and databases.',
        },
        {
          name: 'Server Management',
          description:
            'Linux server administration, deployment strategies, performance monitoring, and security best practices for web applications.',
        },
      ],
    },
    {
      title: 'App Development',
      icon: <SiReact className="w-6 h-6" />,
      color: 'from-sky-300 to-sky-500',
      description:
        'Building fast, scalable web applications using React, Next.js, TypeScript, and Tailwind CSS (or Styled Components or CSS Modules + Sass) — combining modern tools for clean code, optimized performance, and responsive design.',
      technologies: [
        'React (Hooks, Context, Redux)',
        'Next.js (App Router, Server Components)',
        'TypeScript & JavaScript ES6+',
        'HTML5 Semantic Elements',
        'CSS3 & Advanced Animations',
        'Tailwind CSS & Styled Components',
        'Responsive Design Principles',
        'Component Architecture',
        'State Management Patterns',
        'RESTful APIs & GraphQL',
        'Headless CMS (e.g., WordPress REST API, Sanity)',
        'Webpack & Vite',
        'ESLint & Prettier (Code Quality Tools)',
        'Jest & React Testing Library (Testing)',
        'Git & GitHub/GitLab',
        'CI/CD Workflows (GitHub Actions, Vercel)',
        'SEO Optimization Techniques',
        'Performance Tuning & Lighthouse Audits',
        'Accessibility (WCAG, ARIA roles)',
        'Figma to Code (UI Handoff & Prototyping)',
      ],
      skillDetails: [
        {
          name: 'React Ecosystem',
          description:
            'Deep expertise in React hooks, context API, Redux for state management, and modern React patterns for building scalable applications.',
        },
        {
          name: 'TypeScript Mastery',
          description:
            'Strong typing, interface design, generic programming, and leveraging TypeScript for better code quality and developer experience.',
        },
        {
          name: 'Modern CSS',
          description:
            'Advanced CSS3 features, animations, Grid/Flexbox layouts, custom properties, and CSS-in-JS solutions for dynamic styling.',
        },
        {
          name: 'Performance Optimization',
          description:
            'Code splitting, lazy loading, memoization techniques, and bundle optimization for fast-loading React applications.',
        },
      ],
    },

    {
      title: 'SEO & Performance',
      icon: <SiGoogleanalytics className="w-6 h-6" />,
      color: 'from-green-400 to-green-600',
      description: 'Search engine optimization and web performance enhancement',
      technologies: [
        'Technical SEO Auditing',
        'Core Web Vitals Optimization',
        'Schema Markup Implementation',
        'Google Analytics & Search Console',
        'Page Speed Optimization',
        'Image Optimization & WebP',
        'Critical CSS & Resource Loading',
        'Mobile-First Indexing',
      ],
      skillDetails: [
        {
          name: 'Technical SEO',
          description:
            'Site structure optimization, crawlability improvements, meta tag optimization, and technical audits for better search visibility.',
        },
        {
          name: 'Performance Optimization',
          description:
            'Core Web Vitals improvement, image optimization, lazy loading, caching strategies, and resource optimization for faster load times.',
        },
        {
          name: 'Analytics & Tracking',
          description:
            'Google Analytics setup, conversion tracking, user behavior analysis, and data-driven optimization strategies.',
        },
        {
          name: 'Schema Implementation',
          description:
            'Structured data markup, rich snippets optimization, and semantic HTML for enhanced search engine understanding.',
        },
      ],
    },

    {
      title: 'Website Layout & Structure',
      icon: <Layout className="w-6 h-6" />,
      color: 'from-indigo-400 to-indigo-600',
      description: 'Modern layout systems and responsive design architecture',
      technologies: [
        'CSS Grid & Flexbox Mastery',
        'Mobile-First Design Approach',
        'Responsive Breakpoint Strategy',
        'Container Queries',
        'CSS Custom Properties (Variables)',
        'Modern CSS Architecture (BEM, ITCSS)',
        'Progressive Enhancement',
        'Accessibility Standards (WCAG)',
      ],
      skillDetails: [
        {
          name: 'CSS Grid & Flexbox',
          description:
            'Advanced layout techniques, complex grid systems, flexible layouts, and modern CSS layout methods for responsive design.',
        },
        {
          name: 'Responsive Design',
          description:
            'Mobile-first approach, breakpoint strategies, fluid typography, and adaptive layouts that work across all device sizes.',
        },
        {
          name: 'Layout Architecture',
          description:
            'Scalable CSS architecture, component-based styling, design system implementation, and maintainable code organization.',
        },
        {
          name: 'Accessibility',
          description:
            'WCAG compliance, semantic HTML, keyboard navigation, screen reader optimization, and inclusive design practices.',
        },
      ],
    },
    {
      title: 'Design Understanding',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-400 to-pink-600',
      description: 'Visual design principles and user experience optimization',
      technologies: [
        'Design Systems & Style Guides',
        'Typography & Font Pairing',
        'Color Theory & Accessibility',
        'Visual Hierarchy Principles',
        'User Interface Design Patterns',
        'Micro-interactions & Animations',
        'Figma & Design Tool Proficiency',
        'Brand Identity Implementation',
      ],
      skillDetails: [
        {
          name: 'Visual Design Principles',
          description:
            'Understanding of balance, contrast, hierarchy, and composition to create visually appealing and effective user interfaces.',
        },
        {
          name: 'Typography & Color',
          description:
            'Font selection, pairing strategies, color theory application, accessibility considerations, and creating cohesive visual systems.',
        },
        {
          name: 'UI/UX Patterns',
          description:
            'Common interface patterns, user flow optimization, interaction design, and creating intuitive user experiences.',
        },
        {
          name: 'Design Systems',
          description:
            'Creating and maintaining design systems, component libraries, style guides, and ensuring design consistency across projects.',
        },
      ],
    },
    {
      title: 'AI Tools & Automation',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-violet-400 to-violet-600',
      description:
        'Modern AI tools and automation for enhanced development productivity',
      technologies: [
        'GitHub Copilot & AI Code Assistance',
        'Visual Studio Code with AI-extensions',
        'Claude Claude and Cursor for Development',
        'AI Content Generation & SEO',
        'Cursor AI IDE Integration',
        'AI Image generators for Design',
        'Figma AI Plugins & Automation',
        'Automated Code Review Systems',
        'AI-Powered Testing Tools',
      ],
      skillDetails: [
        {
          name: 'AI-Assisted Development',
          description:
            'Leveraging GitHub Copilot, Cursor, and ChatGPT for faster code generation, debugging, and learning new technologies while maintaining code quality.',
        },
        {
          name: 'Prompt/Context Engineering',
          description:
            'Crafting effective prompts for AI tools, understanding model limitations, and integrating AI workflows into development processes efficiently.',
        },
        {
          name: 'Design & Content AI',
          description:
            'Using Midjourney, DALL-E, and Figma AI plugins for rapid prototyping, asset generation, and creative ideation in design workflows.',
        },
        {
          name: 'Automated Testing & QA',
          description:
            'Implementing AI-powered testing tools for automated bug detection, performance optimization, and code quality assurance.',
        },
      ],
    },
  ]

  // const tools = [
  //   { name: "React", category: "Frontend" },
  //   { name: "TypeScript", category: "Language" },
  //   { name: "WordPress", category: "CMS" },
  //   { name: "PHP", category: "Backend" },
  //   { name: "Node.js", category: "Runtime" },
  //   { name: "MySQL", category: "Database" },
  //   { name: "Tailwind CSS", category: "Styling" },
  //   { name: "Git/GitHub", category: "Version Control" },
  //   { name: "Vite", category: "Build Tool" },
  //   { name: "Figma", category: "Design" },
  //   { name: "Google Analytics", category: "Analytics" },
  //   { name: "Web3.js", category: "Blockchain" },
  //   { name: "GitHub Copilot", category: "AI Assistant" },
  //   { name: "ChatGPT", category: "AI Assistant" },
  //   { name: "Cursor AI", category: "AI IDE" },
  //   { name: "Midjourney", category: "AI Design" },
  // ];

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning modern web development, content
            management, SEO optimization, emerging Web3 technologies, design
            principles, and cutting-edge AI tools.
          </p>
        </div>

        {/* Detailed Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-700 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 min-w-[3rem] min-h-[3rem]  bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mr-4`}
                >
                  {category.icon}
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Technologies & Knowledge */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Technologies & Knowledge
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-lime-200 dark:hover:border-purple-200 transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        ></div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Details */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Key Skills & Expertise
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-lime-200 dark:hover:border-purple-200 transition-colors">
                    <div className="space-y-6">
                      {category.skillDetails.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 pb-4 last:pb-0"
                        >
                          <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                            {skill.name}
                          </h5>
                          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Organization Tools */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Work Organization Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Google Workspace',
                description: 'Document collaboration',
              },
              {
                name: 'Notion',
                description: 'Project management & documentation',
              },
              {
                name: 'Figma',
                description: 'Design collaboration & prototyping',
              },
              {
                name: 'GitHub/Gitlab',
                description: 'Code project management',
              },
              {
                name: 'Slack',
                description: 'Team communication & integration',
              },
              { name: 'Trello', description: 'Task management & workflow' },

              {
                name: 'Google Meet/Zoom',
                description: 'Client meetings & presentations',
              },
              {
                name: 'Asana/Jira/Trello/Redmine',
                description: 'Team project planning & task tracking',
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-4 hover:border-lime-300 dark:hover:border-purple-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-slate-700 dark:text-slate-300 font-semibold group-hover:text-purple-600 dark:group-hover:text-lime-500 transition-colors mb-1">
                  {tool.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-purple-400 dark:group-hover:text-lime-400 transition-colors leading-relaxed">
                  {tool.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Problem Solving',
                description:
                  'Analytical thinking and creative solutions for complex technical challenges',
                icon: '🧩',
                gradient: 'from-purple-500 to-indigo-600',
                bgGradient:
                  'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
              },
              {
                name: 'Communication',
                description:
                  'Clear technical communication with clients, teams, and stakeholders',
                icon: '💬',
                gradient: 'from-blue-500 to-cyan-600',
                bgGradient:
                  'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
              },
              {
                name: 'Project Management',
                description:
                  'Agile methodologies, timeline management, and deliverable coordination',
                icon: '📋',
                gradient: 'from-green-500 to-emerald-600',
                bgGradient:
                  'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
              },
              {
                name: 'Adaptability',
                description:
                  'Quick learning of new technologies and adapting to changing requirements',
                icon: '🔄',
                gradient: 'from-orange-500 to-red-600',
                bgGradient:
                  'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
              },
              {
                name: 'Client Relations',
                description:
                  'Building trust, managing expectations, and delivering exceptional service',
                icon: '🤝',
                gradient: 'from-pink-500 to-rose-600',
                bgGradient:
                  'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
              },
              {
                name: 'Team Collaboration',
                description:
                  'Cross-functional teamwork, mentoring, and knowledge sharing',
                icon: '👥',
                gradient: 'from-teal-500 to-cyan-600',
                bgGradient:
                  'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
              },
            ].map((skill, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm`}
              >
                {/* Floating background elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-lg"></div>

                {/* Icon container */}
                <div
                  className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  {skill.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {skill.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
