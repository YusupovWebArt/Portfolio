import { Cpu, Layers, Check } from 'lucide-react'

const WhyWorkWithMe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="hidden lg:block absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-300 dark:bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-300 dark:bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-500/10 dark:to-lime-600/10 text-purple-700 dark:text-lime-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Why Choose Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why it is{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              profitable
            </span>{' '}
            to work with me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Let me share why partnering with me will be one of the best business decisions you will make. Here is what sets my services apart from the competition:
          </p>
        </div>

        {/* Redesigned 2-Column Core Strengths Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: T-Shaped Developer Expertise */}
          <div className="group relative overflow-hidden bg-white dark:bg-slate-900 lg:bg-white/60 lg:dark:bg-slate-900/60 lg:backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
            {/* Ambient hover light glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500 dark:bg-lime-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon & Title Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400 border border-purple-200/50 dark:border-lime-500/20 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    T-Shaped Developer Expertise
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-lime-400 font-semibold tracking-wide mt-0.5">
                    React/Next.js & WordPress Development
                  </p>
                </div>
              </div>

              {/* Main Paragraph */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                I am a T-shaped developer combining deep expertise in advanced frontend engineering and WordPress architectures with a broad understanding of full-stack processes. I leverage state-of-the-art AI tools to speed up the development cycle, delivering technically robust, clean, and highly secure products.
              </p>

              {/* Core Deliverables list */}
              <div className="mt-auto space-y-2.5">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                  Key Focus Areas
                </div>
                {[
                  'Scalable React, Next.js & TypeScript apps',
                  'Custom WordPress Themes & secure Plugin development',
                  'AI-assisted workflow optimization for rapid delivery',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Broad Knowledge Across Stack */}
          <div className="group relative overflow-hidden bg-white dark:bg-slate-900 lg:bg-white/60 lg:dark:bg-slate-900/60 lg:backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
            {/* Ambient hover light glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500 dark:bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon & Title Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-blue-100 dark:bg-lime-500/10 text-blue-600 dark:text-lime-400 border border-blue-200/50 dark:border-lime-500/20 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Broad Knowledge Across Stack
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-lime-400 font-semibold tracking-wide mt-0.5">
                    End-to-End Digital Solutions
                  </p>
                </div>
              </div>

              {/* Main Paragraph */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Beyond writing code, I bridge the gap between design, marketing, and systems engineering. My multidisciplinary skillset allows me to build digital products that not only work perfectly under the hood but are also optimized for maximum SEO ranking and conversions.
              </p>

              {/* Core Deliverables list */}
              <div className="mt-auto space-y-2.5">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                  Key Focus Areas
                </div>
                {[
                  'SEO auditing, Core Web Vitals & speed tuning',
                  'UI/UX design translation & responsive grids',
                  'CI/CD deployments, cloud hosting & version control',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs">
                    <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-lime-500/10 text-blue-600 dark:text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe
