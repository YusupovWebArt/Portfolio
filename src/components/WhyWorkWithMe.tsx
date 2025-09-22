import { DollarSign, Users, Zap } from 'lucide-react'

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
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                T-Shaped Developer Expertise
              </h3>
              <h4 className="text-small text-slate-900 dark:text-white mb-6">
                Deep Frontend & WordPress Expertise
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
                I'm a T-shaped developer with <strong>deep expertise</strong> in
                Frontend and WordPress development, combined with{' '}
                <strong>broad knowledge</strong> across the full technology
                stack. This unique combination allows me to understand your
                project holistically and deliver comprehensive solutions.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
                Broad Knowledge Across Stack
              </p>
            </div>
          </div>

          {/* Why T-Shaped Approach Works */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-lime-500 dark:to-lime-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Faster Development
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  No need for multiple specialists. I handle frontend, backend,
                  and deployment in one workflow.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 dark:from-lime-500 dark:to-lime-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Better Communication
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Single point of contact. No miscommunication between different
                  team members.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 dark:from-lime-500 dark:to-lime-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Cost Effective
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  One developer rate instead of hiring multiple specialists for
                  different parts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-cycle Web Application Development Engineer */}
        <div className="mt-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Full-cycle Web Application Development Engineer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
              I handle the <strong>complete development lifecycle</strong> from
              initial concept to production deployment. This comprehensive
              approach ensures seamless integration, consistent quality, and
              faster time-to-market for your web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe
