import { useState } from 'react'
import {
  Layout,
  Palette,
  Brain,
  ChevronDown,
  Target,
  MessageSquare,
  ClipboardCheck,
  TrendingUp,
  Handshake,
  Users,
} from 'lucide-react'
import { SiReact, SiWordpress, SiGoogleanalytics } from 'react-icons/si'

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0)

  const skillCategories = [
    {
      title: 'WordPress Development',
      icon: <SiWordpress className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      baseColor: 'blue',
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
      baseColor: 'sky',
      description:
        'Building fast, scalable web applications using React, Next.js, TypeScript, and Tailwind CSS — combining modern tools for clean code, optimized performance, and responsive design.',
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
      title: 'AI Tools & Automation',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-violet-400 to-violet-600',
      baseColor: 'violet',
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
            'My workflow is centered around AI-augmented development practices, utilizing Cursor, Antigravity, Claude, Visual Studio Code with GitHub Copilot and Windsurf to significantly accelerate the product lifecycle while maintaining superior code quality. I actively leverage the MCP, Skills, RAG etc, to provide AI models with deep integration into local tools, databases, and file systems, ensuring full project awareness for complex architectural tasks. Through Context Engineering and the strategic use of .cursorrules, I enforce strict coding standards and maintain project consistency across every file. By implementing Agentic workflows for automated refactoring and unit testing, I deliver scalable, maintainable solutions that minimize technical debt and allow me to focus on high-impact business logic and rapid innovation.',
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
    {
      title: 'SEO & Performance',
      icon: <SiGoogleanalytics className="w-6 h-6" />,
      color: 'from-green-400 to-green-600',
      baseColor: 'green',
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
      baseColor: 'indigo',
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
      baseColor: 'pink',
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
  ]

  const getTabActiveClasses = (category: typeof skillCategories[0], isActive: boolean) => {
    if (!isActive) {
      return 'border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-900/60'
    }
    switch (category.baseColor) {
      case 'blue':
        return 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold shadow-md shadow-blue-500/5 dark:shadow-blue-500/5'
      case 'sky':
        return 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold shadow-md shadow-sky-500/5 dark:shadow-sky-500/5'
      case 'violet':
        return 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold shadow-md shadow-violet-500/5 dark:shadow-violet-500/5'
      case 'green':
        return 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 font-semibold shadow-md shadow-green-500/5 dark:shadow-green-500/5'
      case 'indigo':
        return 'border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold shadow-md shadow-indigo-500/5 dark:shadow-indigo-500/5'
      case 'pink':
        return 'border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 font-semibold shadow-md shadow-pink-500/5 dark:shadow-pink-500/5'
      default:
        return 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold'
    }
  }

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            T-Shaped Specialist
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Skills & Expertise a multi-disciplinary skill set focused on
            building high-performance web ecosystems. From Full-stack WordPress
            and React/Next.js engineering to AI-augmented workflows, I combine
            clean architecture with SEO-driven strategies to deliver scalable,
            future-proof digital solutions.
          </p>
        </div>

        {/* Interactive Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mobile Horizontal Tab Selector */}
          <div className="lg:hidden flex overflow-x-auto space-x-2 pb-4 scrollbar-none snap-x snap-mandatory">
            {skillCategories.map((category, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`snap-start flex-shrink-0 flex items-center space-x-2 px-5 py-3 rounded-full border transition-all duration-300 text-xs font-semibold
                    ${getTabActiveClasses(category, isActive)}
                  `}
                  type="button"
                >
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} ${isActive ? 'scale-100' : 'scale-75 opacity-50'}`} />
                  <span>{category.title}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop Sidebar Tabs */}
          <div className="hidden lg:flex flex-col space-y-2 lg:col-span-4">
            {skillCategories.map((category, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group w-full flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-300 text-left
                    ${getTabActiveClasses(category, isActive)}
                  `}
                  type="button"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                          : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/10 group-hover:scale-105'
                      }
                    `}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm tracking-tight">{category.title}</div>
                    <div className="text-xs opacity-80 font-normal mt-0.5 truncate max-w-[200px]">
                      {category.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Dashboard Content Panel */}
          <div className="lg:col-span-8">
            {skillCategories.map((category, index) => {
              if (activeTab !== index) return null

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 transition-all duration-500 ease-out shadow-xl shadow-slate-200/50 dark:shadow-black/20 animate-fade-in"
                >
                  {/* Световой блик на стекле (Specular reflection) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none" />

                  {/* Жидкое цветное свечение, которое просыпается при наведении */}
                  <div className={`absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none`} />

                  {/* Заголовок панели */}
                  <div className="relative z-10 flex items-center space-x-4 mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Сетка колонок контента */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Левая колонка: Technologies & Knowledge */}
                    <div className="md:col-span-7">
                      <h4 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
                        Technologies & Knowledge
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-xl hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-200"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                            <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Правая колонка: Key Skills & Expertise */}
                    <div className="md:col-span-5 space-y-4">
                      <h4 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
                        Key Skills & Expertise
                      </h4>
                      <div className="space-y-4">
                        {category.skillDetails.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-white/5 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-300"
                          >
                            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                              {detail.name}
                            </h5>
                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                              {detail.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

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
              {
                name: 'Trello/Redmine',
                description: 'Task management & workflow',
              },

              {
                name: 'Google Meet/Zoom',
                description: 'Client meetings & presentations',
              },
              {
                name: 'Asana/Jira',
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
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-purple-600 dark:text-lime-400 uppercase">
              Personal Attributes
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Soft Skills
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Problem Solving',
                description:
                  'Analytical thinking and creative solutions for complex technical challenges',
                icon: <Target className="w-6 h-6" />,
                gradient: 'from-purple-500 to-indigo-600',
                iconColor: 'text-purple-600 dark:text-purple-400',
                hoverBorder: 'group-hover:border-purple-500/50',
              },
              {
                name: 'Communication',
                description:
                  'Clear technical communication with clients, teams, and stakeholders',
                icon: <MessageSquare className="w-6 h-6" />,
                gradient: 'from-blue-500 to-cyan-600',
                iconColor: 'text-blue-600 dark:text-blue-400',
                hoverBorder: 'group-hover:border-blue-500/50',
              },
              {
                name: 'Project Management',
                description:
                  'Agile methodologies, timeline management, and deliverable coordination',
                icon: <ClipboardCheck className="w-6 h-6" />,
                gradient: 'from-green-500 to-emerald-600',
                iconColor: 'text-green-600 dark:text-green-400',
                hoverBorder: 'group-hover:border-green-500/50',
              },
              {
                name: 'Adaptability',
                description:
                  'Quick learning of new technologies and adapting to changing requirements',
                icon: <TrendingUp className="w-6 h-6" />,
                gradient: 'from-orange-500 to-red-600',
                iconColor: 'text-orange-600 dark:text-orange-400',
                hoverBorder: 'group-hover:border-orange-500/50',
              },
              {
                name: 'Client Relations',
                description:
                  'Building trust, managing expectations, and delivering exceptional service',
                icon: <Handshake className="w-6 h-6" />,
                gradient: 'from-pink-500 to-rose-600',
                iconColor: 'text-pink-600 dark:text-pink-400',
                hoverBorder: 'group-hover:border-pink-500/50',
              },
              {
                name: 'Team Collaboration',
                description:
                  'Cross-functional teamwork, mentoring, and knowledge sharing',
                icon: <Users className="w-6 h-6" />,
                gradient: 'from-teal-500 to-cyan-600',
                iconColor: 'text-teal-600 dark:text-teal-400',
                hoverBorder: 'group-hover:border-teal-500/50',
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:bg-white/80 dark:hover:bg-slate-900/85 hover:border-slate-300 dark:hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-500 ease-out"
              >
                {/* Световой блик на стекле (Specular reflection) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none" />

                {/* Жидкое цветное свечение, которое просыпается при наведении */}
                <div className={`absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br ${skill.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.12] dark:group-hover:opacity-[0.20] transition-opacity duration-500 pointer-events-none`} />

                {/* Контент: иконка слева, текст под ней, все выровнено по левому краю */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  {/* Стеклянный контейнер для иконки */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 ${skill.iconColor} ${skill.hoverBorder} transition-all duration-500 mb-6`}
                  >
                    {skill.icon}
                  </div>

                  {/* Заголовок */}
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight mb-2">
                    {skill.name}
                  </h4>

                  {/* Описание */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
