import { useState } from 'react'
import {
  Cpu,
  Brain,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface StepDetail {
  name: string
  description: string
  codeBlock?: string
}

interface WorkflowStep {
  title: string
  details: StepDetail[]
  techs: string[]
  aiTools: string[]
}

interface WorkflowCategory {
  title: string
  icon: React.ReactNode
  color: string
  baseColor: string
  description: string
  steps: WorkflowStep[]
}

const AiWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const workflowCategories: WorkflowCategory[] = [
    {
      title: 'Spec Engineering',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-violet-400 to-violet-600',
      baseColor: 'violet',
      description: 'System architecture, precise requirements, and strict verification design',
      steps: [
        {
          title: 'Requirements & Context Auditing',
          details: [
            {
              name: 'Sourcing & Discovery',
              description: 'Gathering raw user requirements and conducting a low-level audit of the existing codebase, dependencies, and api endpoints before formulate instructions.',
            },
            {
              name: 'Preventing Hallucinations',
              description: 'Explicitly profiling constraints and boundary conditions. A lack of human architectural guidance on this step is the primary cause of AI logic errors.',
            },
          ],
          techs: ['Context Auditing', 'Structural Profiling', 'Codebase Discovery'],
          aiTools: ['Gemini Notebook (Documentation Synthesis)'],
        },
        {
          title: 'Executable Acceptance Criteria (EARS)',
          details: [
            {
              name: 'From Text to Verification',
              description: 'Translating loose specifications into EARS (Easy Approach to Requirements Syntax) format, providing unambiguous guidelines that can be compiled directly into automated tests.',
            },
            {
              name: 'Structured EARS Example',
              description: 'Defining precise conditions and outcomes for the AI agent to verify against, rather than improvising logic:',
              codeBlock: `WHEN пользователь наводит курсор на иконку email,
THE система SHALL декодировать Base64-строку и подставить
реальный mailto:-адрес в href в течение 100мс.

WHILE JavaScript отключён,
THE система SHALL отображать email как текстовый индикатор
без раскрытия кликабельной ссылки.`,
            },
          ],
          techs: ['EARS Notation', 'Spec Engineering', 'Test Criteria Mapping'],
          aiTools: ['Claude (Spec Refinement)'],
        },
      ],
    },
    {
      title: 'Agentic Execution',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      baseColor: 'blue',
      description: 'Agentic code synthesis inside strict pre-configured system boundaries',
      steps: [
        {
          title: 'Context Engineering & Guardrails',
          details: [
            {
              name: 'Workspace Config (.cursorrules)',
              description: 'Establishing project-level rules (CLAUDE.md / .cursorrules / AGENTS.md) that detail architectural standards, libraries, and coding styles.',
            },
            {
              name: 'Model Context Protocol (MCP)',
              description: 'Plugging agents directly into databases, code search utilities, and environment APIs. This keeps models aligned and stops context drift over long sessions.',
            },
          ],
          techs: ['Context Engineering', 'MCP Integration', 'Environment Tuning'],
          aiTools: ['Cursor Rules Configurator', 'MCP Tools'],
        },
        {
          title: 'Multi-File Agentic Coding',
          details: [
            {
              name: 'Parallel Branch Writing',
              description: 'Executing complex feature updates across multiple files simultaneously, leveraging sandboxed agents working in concurrent branches.',
            },
            {
              name: 'Human-in-the-Loop Supervision',
              description: 'Maintaining clear role separation: Artur designs the system and signs off on criteria, while AI speeds up syntax and boilerplate generation.',
            },
          ],
          techs: ['Agentic Workspaces', 'Branch Management', 'Refactoring Workflows'],
          aiTools: ['Claude Code', 'Cursor Composer', 'Google Antigravity'],
        },
        {
          title: 'Legacy Code Migration',
          details: [
            {
              name: 'Incremental Upgrades',
              description: 'Migrating legacy backend systems (e.g. PHP 7 custom scripts) to modern standards (PHP 8+, React 19) in small, testable chunks.',
            },
            {
              name: 'Refactoring Safety Nets',
              description: 'Writing quick characterization tests to capture the baseline behavior before refactoring begins, eliminating regression risks.',
            },
          ],
          techs: ['Legacy Refactoring', 'Characterization Testing', 'Version Upgrades'],
          aiTools: ['Claude Refactor Agent', 'Google Antigravity'],
        },
      ],
    },
    {
      title: 'Hybrid Verification',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-emerald-400 to-emerald-600',
      baseColor: 'emerald',
      description: 'Strict static checks, compiler passes, and automated test loops',
      steps: [
        {
          title: 'Static Analysis & Compiler Checks',
          details: [
            {
              name: 'TypeScript Strict Mode',
              description: 'Running compiler audits (npx tsc --noEmit) to catch type mismatches, null values, and parameter mismatches instantly.',
            },
            {
              name: 'Linter Standard Gates',
              description: 'Enforcing strict code cleanliness rules using ESLint and custom coding standards (like WordPress Coding Standards) with no exemptions for AI code.',
            },
          ],
          techs: ['TypeScript Compiler', 'ESLint Audits', 'WPCS Rules'],
          aiTools: ['TypeScript Compiler Diagnostics'],
        },
        {
          title: 'Security Auditing & Test Coverage',
          details: [
            {
              name: 'Dependency & SAST Audits',
              description: 'Scanning packages for known vulnerabilities (npm audit) and running static security analyzers to ensure zero secret/key leakage in commits.',
            },
            {
              name: 'Agentic Test Runs',
              description: 'Writing regression tests and running browser automation scripts (Playwright) to capture screen execution and verify user flows.',
            },
          ],
          techs: ['SAST Security Scanning', 'Regression Testing', 'Playwright Automation'],
          aiTools: ['Playwright Codegen', 'Automated Test Runners'],
        },
      ],
    },
    {
      title: 'Optimization & Deploy',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-400 to-orange-600',
      baseColor: 'orange',
      description: 'Core Web Vitals tuning, semantic indexing, and automated pipelines',
      steps: [
        {
          title: 'Core Web Vitals & Semantic SEO',
          details: [
            {
              name: 'Performance Tuning',
              description: 'Compressing assets to WebP, enabling code splitting, and preloading hero assets to achieve sub-second loading speeds (TTFB/LCP).',
            },
            {
              name: 'AI-Crawler Optimization',
              description: 'Deploying structured JSON-LD schemas and configuring optimized llms.txt endpoints to feed context directly to AI search engines (GEO).',
            },
          ],
          techs: ['Web Performance', 'JSON-LD Schema', 'llms.txt Config', 'GEO Optimization'],
          aiTools: ['Lighthouse Audits', 'SEO Schema Generators'],
        },
        {
          title: 'Deployment & Telemetry',
          details: [
            {
              name: 'Automated CI/CD Pipelines',
              description: 'Running pre-commit hooks (Husky) locally to reject invalid syntax and using GitHub Actions to automatically deploy verified master builds.',
            },
            {
              name: 'Post-Launch Audits',
              description: 'Tracking live performance baselines, server-side events, and gdpr-compliant analytics to verify optimization results against specs.',
            },
          ],
          techs: ['GitHub Actions', 'Husky Hooks', 'Server-Side Analytics (sGTM)'],
          aiTools: ['Performance Baseline Analyzers'],
        },
      ],
    },
  ]

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    setActiveStep(0)
  }

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleNextStep = () => {
    const currentCategory = workflowCategories[activeTab]
    if (activeStep < currentCategory.steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const getTabActiveClasses = (category: WorkflowCategory, isActive: boolean) => {
    if (!isActive) {
      return 'border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-sm'
    }
    switch (category.baseColor) {
      case 'blue':
        return 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold shadow-md shadow-blue-500/5'
      case 'sky':
        return 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold shadow-md shadow-sky-500/5'
      case 'emerald':
        return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold shadow-md shadow-emerald-500/5'
      case 'orange':
        return 'border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold shadow-md shadow-orange-500/5'
      case 'violet':
        return 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold shadow-md shadow-violet-500/5'
      default:
        return 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold shadow-md shadow-purple-500/5'
    }
  }

  const currentCategory = workflowCategories[activeTab]
  const currentStep = currentCategory.steps[activeStep]

  return (
    <section
      id="how-i-work"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            AI Workflow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Not vibe coding: every feature travels a strict path from written specification to compiler pass and test verification — a methodology the industry calls{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Spec-Driven Development (SDD)</span>. I execute routine, architectural, and optimization tasks faster and more reliably by amplifying my expertise with specialized AI tools like{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Claude Code</span> and{' '}
            <span className="font-semibold text-sky-600 dark:text-sky-400">Google Antigravity</span>.
          </p>
        </div>

        {/* Top Horizontal Row of Tabs (Titles Only) */}
        <div className="w-full mb-8">
          <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-3 pb-3 scrollbar-none snap-x snap-mandatory">
            {workflowCategories.map((category, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`snap-start flex-shrink-0 flex items-center space-x-2.5 px-5 py-3 rounded-full border transition-all duration-300 text-xs font-semibold
                    ${getTabActiveClasses(category, isActive)}
                  `}
                  type="button"
                >
                  <span
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'scale-110 text-slate-900 dark:text-white'
                        : 'text-slate-450 dark:text-slate-500 group-hover:text-slate-650'
                    }`}
                  >
                    {category.icon}
                  </span>
                  <span>{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Interactive Step Card (T-Shaped Specialist style panel) */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 lg:backdrop-blur-xl lg:bg-white/60 lg:dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 transition-all duration-500 ease-out shadow-xl shadow-slate-200/50 dark:shadow-black/20 animate-fade-in">
            {/* Specular Reflection Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none" />

            {/* Background Liquid Glow */}
            <div
              className={`hidden lg:block absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br ${currentCategory.color} rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none transition-all duration-500`}
            />

            {/* Card Header with Category Icon, Step Title, and Step Progress Bar */}
            <div className="relative z-10 flex flex-col mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-850">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-br ${currentCategory.color} text-white shadow-lg`}
                >
                  {currentCategory.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                    {currentCategory.title} — Step {activeStep + 1} of {currentCategory.steps.length}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5 truncate">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              {/* Sleek Specular Step Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-5 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${currentCategory.color} transition-all duration-500 ease-out`}
                  style={{ width: `${((activeStep + 1) / currentCategory.steps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Card Content Elements */}
            <div className="relative z-10 flex flex-col gap-6">
              {/* Workflow Details Section in 2x2 Grid */}
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                  Step Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentStep.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-300"
                    >
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center">
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color} mr-2 flex-shrink-0`}
                        />
                        {detail.name}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-450 text-xs sm:text-[13px] leading-relaxed pl-3.5">
                        {detail.description}
                      </p>
                      {detail.codeBlock && (
                        <pre className="font-mono bg-slate-100 dark:bg-slate-950/60 p-3 rounded-xl text-[11px] sm:text-xs mt-3 border border-slate-200/50 dark:border-white/5 whitespace-pre-wrap text-slate-800 dark:text-slate-300 leading-normal">
                          {detail.codeBlock}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Divider */}
              <div className="border-t border-slate-150 dark:border-slate-800/80 my-1" />

              {/* Technologies & AI Tools Section */}
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                  Technologies & AI Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStep.techs.map((tech, techIndex) => (
                    <div
                      key={`tech-${techIndex}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100/40 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 rounded-full transition-all duration-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color} flex-shrink-0`}
                      />
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-tight">
                        {tech}
                      </span>
                    </div>
                  ))}
                  {currentStep.aiTools.map((aiTool, aiIndex) => (
                    <div
                      key={`ai-${aiIndex}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-purple-50/55 dark:bg-purple-950/10 border border-purple-200/50 dark:border-purple-500/25 rounded-full shadow-sm shadow-purple-500/5 transition-all duration-300 hover:scale-[1.03]"
                    >
                      <Brain className="w-3.5 h-3.5 text-purple-500 dark:text-purple-450 flex-shrink-0" />
                      <span className="text-purple-700 dark:text-purple-300 text-xs font-semibold leading-tight">
                        {aiTool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Navigation Footer */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80">
                {/* Step dots on the left */}
                <div className="flex items-center space-x-2.5">
                  {currentCategory.steps.map((_, stepIdx) => (
                    <button
                      key={stepIdx}
                      onClick={() => setActiveStep(stepIdx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeStep === stepIdx
                          ? `bg-gradient-to-r ${currentCategory.color} w-4 scale-105 shadow-sm`
                          : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                      }`}
                      aria-label={`Go to step ${stepIdx + 1}`}
                      type="button"
                    />
                  ))}
                </div>

                {/* Left/Right Circular Arrow Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrevStep}
                    disabled={activeStep === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      activeStep === 0
                        ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                        : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:scale-105 active:scale-95'
                    }`}
                    aria-label="Previous workflow step"
                    type="button"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={activeStep === currentCategory.steps.length - 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      activeStep === currentCategory.steps.length - 1
                        ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                        : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:scale-105 active:scale-95 shadow-sm'
                    }`}
                    aria-label="Next workflow step"
                    type="button"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiWorkflow
