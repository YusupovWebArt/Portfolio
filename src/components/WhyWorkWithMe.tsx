const WhyWorkWithMe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-300 dark:bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-300 dark:bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-100 dark:to-lime-200 text-purple-700 dark:text-lime-700 rounded-full text-sm font-semibold mb-6">
            Why Choose Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why it is{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              profitable
            </span>{' '}
            to work with me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Dear potential client, let me share why partnering with me will be
            one of the best business decisions you'll make it. Here's what sets
            me apart from the competition:
          </p>
        </div>

        {/* Main Content - Letter Style */}
        <div className="max-w-5xl mx-auto">
          {/* Opening Statement */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                T-Shaped Developer Expertise
              </h3>
              <h4 className="text-small text-slate-900 dark:text-white">
                Advanced Frontend, WordPress & React/Next.js Development
              </h4>
            </div>
            <div className="text-left">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
                I&#39;m a T-shaped developer with deep expertise in Frontend and
                WordPress development, including backend architecture and custom
                plugin creation, complemented by broad knowledge across the full
                technology stack. I also specialize in building dynamic
                React/Next.js applications that are fast, scalable, and
                user-friendly. I leverage AI tools to streamline development,
                optimize workflows, and enhance website functionality,
                delivering solutions that are technically robust, user-friendly,
                SEO-optimized, and aligned with business goals.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Broad Knowledge Across Stack
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
                Beyond my core expertise, I bring experience in UI/UX, SEO,
                digital marketing, and DevOps, enabling me to deliver end-to-end
                solutions that meet both technical and business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe
