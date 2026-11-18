'use client'

import { useState, useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import {
  LuCpu as Cpu,
  LuBrain as Brain,
  LuShield as Shield,
  LuZap as Zap,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuPlay as Play,
  LuSquare as Square,
  LuCheck as Check,
  LuCopy as Copy,
  LuFileCode as FileCode,
  LuShieldCheck as ShieldCheck,
  LuSparkles as Sparkles,
  LuArrowRight as ArrowRight,
} from 'react-icons/lu'

interface StepDetail {
  name: string
  description: string
}

interface WorkflowStep {
  title: string
  details: StepDetail[]
  techs: string[]
  aiTools: string[]
}

interface QualityGate {
  label: string
  command: string
  metric: string
}

interface WorkflowCategory {
  phaseCode: string
  artifactBadge: string
  artifactFile: string
  artifactSnippet: string
  qualityGates: QualityGate[]
  title: string
  icon: ReactNode
  color: string
  baseColor: 'violet' | 'blue' | 'emerald' | 'orange'
  description: string
  steps: WorkflowStep[]
}

const PHASE_ARTIFACTS = [
  {
    phaseCode: '01',
    artifactBadge: 'spec.md · EARS',
    artifactFile: 'specs/feature/spec.md',
    artifactSnippet: `# EARS Functional Contract
WHEN the user clicks the reveal button for a contact channel,
THE system SHALL dynamically load the isolated Base64 payload
and populate the verified link into the href attribute.

WHILE JavaScript is disabled,
THE system SHALL render the fallback guidance notice
without exposing any plaintext credentials or scraper tokens.`,
    qualityGates: [
      { label: 'EARS Requirements Syntax', command: 'specs/*/spec.md', metric: '100% deterministic' },
      { label: 'Architecture Plan & Risk Audit', command: 'specs/*/plan.md', metric: '0 ambiguity' },
      { label: 'Zero-Secret Policy Check', command: 'SECURITY.md', metric: 'Verified' },
      { label: '4-Locale i18n Scope Contract', command: 'EN / UA / ES / DE', metric: 'Key parity' },
    ],
  },
  {
    phaseCode: '02',
    artifactBadge: 'AGENTS.md · MCP',
    artifactFile: '.agents/AGENTS.md',
    artifactSnippet: `## Immutable AI-Harness Guardrails
- Strict TypeScript: Zero "any" types across app/ and src/
- MCP Boundary: Read-only DB & DOM inspection via sandboxed servers
- Privacy: Never commit raw emails/phones; use Base64 runtime decode
- Design System: WCAG 2.2 AA contrast (>= 4.5:1) in Light & Dark
- Localization: Enforce 100% key parity across EN, UA, ES, DE`,
    qualityGates: [
      { label: 'Workspace Constitution Rules', command: '.specify/constitution.md', metric: 'Enforced' },
      { label: 'MCP Tool Sandbox Guardrails', command: 'Model Context Protocol', metric: 'Isolated' },
      { label: 'Human-in-the-Loop Architecture', command: 'Claude Code + Antigravity', metric: 'Reviewed' },
      { label: 'Incremental Diff Discipline', command: 'git diff --stat', metric: 'Zero bloat' },
    ],
  },
  {
    phaseCode: '03',
    artifactBadge: 'vitest · axe-core',
    artifactFile: 'src/test/workflow.spec.tsx',
    artifactSnippet: `// TDD Red-Green-Refactor + EAA 2026 A11y Gate
it('passes WCAG 2.2 AA accessibility & semantic role checks', async () => {
  render(<FeaturePanel />)
  const tab = screen.getByRole('tab', { name: /Hybrid Verification/i })
  await userEvent.click(tab)
  expect(tab).toHaveAttribute('aria-selected', 'true')
})
// Playwright + @axe-core/playwright -> 0 critical/serious violations`,
    qualityGates: [
      { label: 'TypeScript Strict Compiler', command: 'pnpm exec tsc --noEmit', metric: '0 errors' },
      { label: 'ESLint & WPCS Rule Gate', command: 'pnpm lint', metric: '0 warnings' },
      { label: 'TDD Unit & Integration Suite', command: 'pnpm test (Vitest)', metric: '230+ specs' },
      { label: 'WCAG 2.2 AA / EAA 2026 Audit', command: 'Playwright + axe-core', metric: '0 violations' },
    ],
  },
  {
    phaseCode: '04',
    artifactBadge: 'ci-cd.yml · GEO',
    artifactFile: '.github/workflows/ci-cd.yml',
    artifactSnippet: `jobs:
  verify-and-ship:
    steps:
      - run: pnpm exec tsc --noEmit && pnpm lint
      - run: pnpm test && pnpm test:a11y
      - run: pnpm build:next && pnpm check:budget
      # Budgets: LCP < 1.2s | INP < 50ms | CLS < 0.02
      # GEO Endpoints: /llms.txt + JSON-LD @graph (519 SSG routes)`,
    qualityGates: [
      { label: 'Core Web Vitals Budget', command: 'Lighthouse CI (LHCI)', metric: '95-100 Score' },
      { label: 'Static Bundle Size Budget', command: 'pnpm check:budget', metric: '196 KB gzip' },
      { label: 'GEO & Linked JSON-LD @graph', command: 'llms.txt + Schema.org', metric: '519 SSG routes' },
      { label: 'Automated Production Deploy', command: 'GitHub Actions -> Vercel', metric: 'Zero downtime' },
    ],
  },
] as const

const AiWorkflow = () => {
  const { t } = useLanguage()
  const aw = t.aiWorkflow
  const vis = aw.visualizer

  const [activeTab, setActiveTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [inspectorTab, setInspectorTab] = useState<'artifact' | 'gates'>('artifact')
  const [isSimulating, setIsSimulating] = useState(false)
  const [copiedPhase, setCopiedPhase] = useState<number | null>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const categoryMeta = [
    {
      icon: <Cpu className="w-5 h-5" aria-hidden="true" />,
      color: 'from-violet-500 to-purple-600',
      baseColor: 'violet' as const,
      steps: [
        {
          techs: ['Context Auditing', 'Structural Profiling', 'Codebase Discovery'],
          aiTools: ['Google NotebookLM (Docs Synthesis)'],
        },
        {
          techs: ['EARS Notation', 'Spec Engineering', 'Test Criteria Mapping'],
          aiTools: ['Claude Code (Spec Refinement)'],
        },
      ],
    },
    {
      icon: <Brain className="w-5 h-5" aria-hidden="true" />,
      color: 'from-blue-500 to-indigo-600',
      baseColor: 'blue' as const,
      steps: [
        {
          techs: ['Context Engineering', 'MCP Integration', 'Environment Tuning'],
          aiTools: ['Cursor Rules', 'Model Context Protocol (MCP)'],
        },
        {
          techs: ['Agentic Workspaces', 'Branch Management', 'Refactoring Workflows'],
          aiTools: ['Claude Code', 'Cursor Composer', 'Google Antigravity'],
        },
        {
          techs: ['Legacy Refactoring', 'Characterization Testing', 'Version Upgrades'],
          aiTools: ['Claude Code', 'Google Antigravity'],
        },
      ],
    },
    {
      icon: <Shield className="w-5 h-5" aria-hidden="true" />,
      color: 'from-emerald-500 to-teal-600',
      baseColor: 'emerald' as const,
      steps: [
        {
          techs: ['TypeScript Strict Mode', 'ESLint Audits', 'WPCS Rules'],
          aiTools: ['TypeScript Compiler Diagnostics'],
        },
        {
          techs: ['TDD Red-Green-Refactor', 'SAST Security Scanning', 'Playwright + axe-core'],
          aiTools: ['Vitest + RTL', 'Playwright Automation'],
        },
      ],
    },
    {
      icon: <Zap className="w-5 h-5" aria-hidden="true" />,
      color: 'from-orange-500 to-amber-600',
      baseColor: 'orange' as const,
      steps: [
        {
          techs: ['Core Web Vitals', 'JSON-LD @graph', 'llms.txt Config', 'GEO Optimization'],
          aiTools: ['Lighthouse CI', 'Schema.org Validators'],
        },
        {
          techs: ['GitHub Actions', 'Husky Hooks', 'Server-Side Analytics (sGTM)'],
          aiTools: ['Bundle Budget Analyzers'],
        },
      ],
    },
  ]

  const workflowCategories: WorkflowCategory[] = aw.categories.map((cat, catIdx) => {
    const meta = categoryMeta[catIdx]
    const artifact = PHASE_ARTIFACTS[catIdx]
    return {
      phaseCode: artifact.phaseCode,
      artifactBadge: artifact.artifactBadge,
      artifactFile: artifact.artifactFile,
      artifactSnippet: artifact.artifactSnippet,
      qualityGates: [...artifact.qualityGates],
      title: cat.title,
      icon: meta.icon,
      color: meta.color,
      baseColor: meta.baseColor,
      description: cat.description,
      steps: cat.steps.map((st, stIdx) => {
        const stepMeta = meta.steps[stIdx]
        return {
          title: st.title,
          details: st.details.map((d) => ({
            name: d.name,
            description: d.description,
          })),
          techs: stepMeta.techs,
          aiTools: stepMeta.aiTools,
        }
      }),
    }
  })

  useEffect(() => {
    if (!isSimulating) return

    const timer = window.setInterval(() => {
      setActiveTab((prev) => {
        if (prev >= workflowCategories.length - 1) {
          setIsSimulating(false)
          return prev
        }
        setActiveStep(0)
        return prev + 1
      })
    }, 2200)

    return () => window.clearInterval(timer)
  }, [isSimulating, workflowCategories.length])

  const handleTabChange = (index: number) => {
    setIsSimulating(false)
    setActiveTab(index)
    setActiveStep(0)
  }

  const handleToggleSimulation = () => {
    if (isSimulating) {
      setIsSimulating(false)
      return
    }
    setActiveTab(0)
    setActiveStep(0)
    setIsSimulating(true)
  }

  const handleNodeKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = workflowCategories.length
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % total
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + total) % total
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = total - 1
    }

    if (nextIndex !== null) {
      event.preventDefault()
      handleTabChange(nextIndex)
      tabRefs.current[nextIndex]?.focus()
    }
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

  const handleCopySnippet = async () => {
    const snippet = workflowCategories[activeTab].artifactSnippet
    try {
      await navigator.clipboard.writeText(snippet)
      setCopiedPhase(activeTab)
      window.setTimeout(() => setCopiedPhase(null), 2000)
    } catch {
      setCopiedPhase(null)
    }
  }

  const handleAskAi = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-ai-chat'))
    }
  }

  const getNodeAccentClasses = (
    baseColor: WorkflowCategory['baseColor'],
    isActive: boolean,
    isCompleted: boolean,
  ) => {
    if (isActive) {
      switch (baseColor) {
        case 'violet':
          return 'border-violet-500/70 bg-violet-50/90 dark:bg-violet-950/35 ring-2 ring-violet-500/25 shadow-lg shadow-violet-500/10'
        case 'blue':
          return 'border-blue-500/70 bg-blue-50/90 dark:bg-blue-950/35 ring-2 ring-blue-500/25 shadow-lg shadow-blue-500/10'
        case 'emerald':
          return 'border-emerald-500/70 bg-emerald-50/90 dark:bg-emerald-950/35 ring-2 ring-emerald-500/25 shadow-lg shadow-emerald-500/10'
        case 'orange':
          return 'border-orange-500/70 bg-orange-50/90 dark:bg-orange-950/35 ring-2 ring-orange-500/25 shadow-lg shadow-orange-500/10'
      }
    }

    if (isCompleted) {
      return 'border-emerald-500/40 bg-white/90 dark:bg-slate-900/80 hover:border-emerald-500/60 shadow-sm'
    }

    return 'border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
  }

  const currentCategory = workflowCategories[activeTab]
  const currentStep = currentCategory.steps[activeStep]
  const isCopied = copiedPhase === activeTab

  return (
    <section
      id="how-i-work"
      aria-labelledby="ai-workflow-heading"
      className="py-20 scroll-mt-20 lg:scroll-mt-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle architectural dot-grid & radial glow */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            id="ai-workflow-heading"
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {aw.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {aw.description.before}{' '}
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              {aw.description.methodology}
            </span>
            {aw.description.middle}{' '}
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              {aw.description.toolClaude}
            </span>
            {aw.description.between}{' '}
            <span className="font-semibold text-sky-700 dark:text-sky-400">
              {aw.description.toolAntigravity}
            </span>
            {aw.description.after}
          </p>
        </div>

        {/* Interactive SDLC Pipeline Toolbar */}
        <div className="max-w-6xl mx-auto mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  isSimulating ? 'bg-lime-500 animate-ping' : 'bg-emerald-500'
                }`}
                aria-hidden="true"
              />
              <span>{vis.pipelineLabel}</span>
            </span>
            <span className="lg:hidden text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {aw.tabs.swipe} →
            </span>
          </div>

          <button
            type="button"
            onClick={handleToggleSimulation}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${
              isSimulating
                ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/40'
                : 'bg-slate-900 dark:bg-lime-400 text-white dark:text-slate-950 border-slate-900 dark:border-lime-400 hover:bg-purple-700 dark:hover:bg-lime-300 shadow-sm'
            }`}
          >
            {isSimulating ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>{vis.stopSimulation}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>{vis.simulatePipeline}</span>
              </>
            )}
          </button>
        </div>

        {/* 4-Node Connected Interactive SDLC Pipeline Graph */}
        <div className="max-w-6xl mx-auto mb-8">
          <div
            role="tablist"
            aria-label={vis.pipelineLabel}
            className="flex lg:grid lg:grid-cols-4 gap-3 lg:gap-4 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x snap-mandatory"
          >
            {workflowCategories.map((category, index) => {
              const isActive = activeTab === index
              const isCompleted = index < activeTab
              const statusLabel = isActive
                ? vis.activeStage
                : isCompleted
                  ? vis.gatePassed
                  : vis.queuedStage

              return (
                <div key={category.phaseCode} className="relative flex items-center snap-start shrink-0 w-[260px] lg:w-auto">
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el
                    }}
                    id={`sdlc-tab-${index}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="sdlc-tabpanel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabChange(index)}
                    onKeyDown={(e) => handleNodeKeyDown(e, index)}
                    className={`w-full text-left rounded-2xl p-4 border transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${getNodeAccentClasses(
                      category.baseColor,
                      isActive,
                      isCompleted,
                    )}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-sm`}
                        >
                          {category.icon}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                          {category.phaseCode}
                        </span>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          isActive
                            ? 'bg-slate-900 dark:bg-lime-400 text-white dark:text-slate-950'
                            : isCompleted
                              ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {isCompleted && <Check className="w-3 h-3" aria-hidden="true" />}
                        <span>{statusLabel}</span>
                      </span>
                    </div>

                    <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug line-clamp-1 mb-2">
                      {category.title}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      <FileCode className="w-3 h-3 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
                      <span>{category.artifactBadge}</span>
                    </div>
                  </button>

                  {/* Directional Connector Arrow between Nodes on Desktop */}
                  {index < workflowCategories.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
                      aria-hidden="true"
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          index < activeTab
                            ? 'text-emerald-600 dark:text-lime-400'
                            : index === activeTab
                              ? 'text-purple-600 dark:text-purple-400'
                              : 'text-slate-400 dark:text-slate-600'
                        }`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Active Pipeline Stage Detail + Live Artifact & Gate Inspector */}
        <div
          id="sdlc-tabpanel"
          role="tabpanel"
          aria-labelledby={`sdlc-tab-${activeTab}`}
          className="max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 lg:backdrop-blur-xl lg:bg-white/75 lg:dark:bg-slate-900/75 border border-slate-200/80 dark:border-white/10 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-black/30">
            {/* Ambient Stage Glow */}
            <div
              className={`hidden lg:block absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-br ${currentCategory.color} rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none`}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stage Breakdown, Techs & Stepper */}
              <div className="xl:col-span-7 flex flex-col gap-6">
                {/* Stage Header */}
                <div className="pb-5 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center bg-gradient-to-br ${currentCategory.color} text-white shadow-lg`}
                    >
                      {currentCategory.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                        {currentCategory.phaseCode} · {currentCategory.title} - {aw.tabs.step}{' '}
                        {activeStep + 1} {aw.tabs.of} {currentCategory.steps.length}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Progress Bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${currentCategory.color} transition-all duration-500 ease-out`}
                      style={{
                        width: `${((activeStep + 1) / currentCategory.steps.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Step Breakdown Cards */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3.5">
                    {aw.tabs.stepBreakdown}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStep.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/70 dark:border-white/5 rounded-2xl p-4 hover:border-slate-300 dark:hover:border-white/15 transition-colors duration-300"
                      >
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center">
                          <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.color} mr-2 shrink-0`}
                            aria-hidden="true"
                          />
                          {detail.name}
                        </h5>
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed pl-4">
                          {detail.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & AI Tools */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3">
                    {aw.tabs.techTools}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.techs.map((tech, techIndex) => (
                      <div
                        key={`tech-${techIndex}`}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 rounded-full"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color} shrink-0`}
                          aria-hidden="true"
                        />
                        <span className="text-slate-800 dark:text-slate-200 text-xs font-medium leading-tight">
                          {tech}
                        </span>
                      </div>
                    ))}
                    {currentStep.aiTools.map((aiTool, aiIndex) => (
                      <div
                        key={`ai-${aiIndex}`}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/30 rounded-full"
                      >
                        <Brain
                          className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-purple-800 dark:text-purple-200 text-xs font-semibold leading-tight">
                          {aiTool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Pagination Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    {currentCategory.steps.map((_, stepIdx) => (
                      <button
                        key={stepIdx}
                        onClick={() => setActiveStep(stepIdx)}
                        className="min-w-[28px] min-h-[28px] flex items-center justify-center p-1 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 cursor-pointer"
                        aria-label={`${aw.tabs.step} ${stepIdx + 1}`}
                        type="button"
                      >
                        <span
                          className={`h-2 rounded-full transition-all duration-300 ${
                            activeStep === stepIdx
                              ? `bg-gradient-to-r ${currentCategory.color} w-5 shadow-sm`
                              : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <button
                      onClick={handlePrevStep}
                      disabled={activeStep === 0}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${
                        activeStep === 0
                          ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                          : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
                      }`}
                      aria-label={aw.tabs.prevStep}
                      type="button"
                    >
                      <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={activeStep === currentCategory.steps.length - 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${
                        activeStep === currentCategory.steps.length - 1
                          ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                          : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
                      }`}
                      aria-label={aw.tabs.nextStep}
                      type="button"
                    >
                      <ChevronRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Artifact & Quality Stop-Gates Inspector */}
              <div className="xl:col-span-5 flex flex-col rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Terminal Top Header */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-xs text-slate-300 truncate ml-1">
                      {currentCategory.artifactFile}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shrink-0">
                    {vis.passBadge}
                  </span>
                </div>

                {/* Inspector Mode Switcher */}
                <div className="px-4 pt-3 pb-2 bg-slate-950 flex items-center justify-between gap-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInspectorTab('artifact')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 ${
                        inspectorTab === 'artifact'
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{vis.liveArtifactTab}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInspectorTab('gates')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 ${
                        inspectorTab === 'gates'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{vis.stopGatesTab}</span>
                    </button>
                  </div>

                  {inspectorTab === 'artifact' && (
                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      aria-label={isCopied ? vis.copied : vis.copySnippet}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-lime-400" aria-hidden="true" />
                          <span className="text-lime-300">{vis.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{vis.copySnippet}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Inspector Body */}
                <div className="p-4 min-h-[250px] flex flex-col justify-between">
                  {inspectorTab === 'artifact' ? (
                    <pre className="font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap overflow-x-auto">
                      <code>{currentCategory.artifactSnippet}</code>
                    </pre>
                  ) : (
                    <ul className="space-y-2.5" aria-label={vis.stopGatesTab}>
                      {currentCategory.qualityGates.map((gate, gateIdx) => (
                        <li
                          key={gateIdx}
                          className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800"
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-100">{gate.label}</div>
                            <div className="font-mono text-[11px] text-slate-400 truncate mt-0.5">
                              {gate.command}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-mono text-[11px] text-lime-300">
                              {gate.metric}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-[10px] font-bold">
                              <Check className="w-3 h-3" aria-hidden="true" />
                              {vis.passBadge}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Ask RAG AI Assistant Bridge CTA */}
                  <div className="mt-5 pt-4 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={handleAskAi}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
                    >
                      <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{vis.askAiCta}</span>
                    </button>
                  </div>
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
