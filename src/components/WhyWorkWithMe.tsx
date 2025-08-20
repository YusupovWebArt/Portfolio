import { DollarSign, Users, Zap, Shield, Clock } from "lucide-react";

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
            Why it is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              profitable
            </span>{" "}
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
                Frontend and WordPress development, combined with{" "}
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

          {/* Full-cycle Development Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Architecture",
                subtitle: "User Interface & Experience",
                description:
                  "Complete frontend development from wireframes to production-ready applications with modern frameworks and optimal user experience.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient:
                  "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                icon: "🎨",
                skills: [
                  "React/Next.js Apps",
                  "Responsive Design",
                  "State Management",
                  "Performance Optimization",
                  "Component Libraries",
                  "Animation & Interactions",
                ],
                depth: "expert",
              },
              {
                title: "Backend Infrastructure",
                subtitle: "Server-side Logic & APIs",
                description:
                  "Robust backend systems with scalable architecture, secure APIs, and efficient database management for reliable application performance.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient:
                  "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
                icon: "⚙️",
                skills: [
                  "RESTful APIs",
                  "Database Design",
                  "Authentication Systems",
                  "Server Configuration",
                  "Security Implementation",
                  "Performance Monitoring",
                ],
                depth: "proficient",
              },
              {
                title: "DevOps & Deployment",
                subtitle: "CI/CD & Production Management",
                description:
                  "Complete deployment pipeline from development to production with automated testing, continuous integration, and monitoring systems.",
                gradient: "from-purple-500 to-violet-500",
                bgGradient:
                  "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
                icon: "🚀",
                skills: [
                  "CI/CD Pipelines",
                  "Cloud Deployment",
                  "Docker Containers",
                  "Monitoring & Logging",
                  "Backup Systems",
                  "Performance Optimization",
                ],
                depth: "proficient",
              },
              {
                title: "Quality Assurance",
                subtitle: "Testing & Code Quality",
                description:
                  "Comprehensive testing strategy including unit tests, integration tests, and end-to-end testing to ensure reliable, bug-free applications.",
                gradient: "from-orange-500 to-red-500",
                bgGradient:
                  "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
                icon: "🧪",
                skills: [
                  "Unit Testing",
                  "Integration Testing",
                  "Code Reviews",
                  "Performance Testing",
                  "Security Audits",
                  "Documentation",
                ],
                depth: "proficient",
              },
            ].map((area, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br ${area.bgGradient} rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm`}
              >
                {/* Floating background elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-lg"></div>

                {/* Depth indicator */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    area.depth === "expert"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {area.depth === "expert" ? "EXPERT" : "PROFICIENT"}
                </div>

                {/* Icon container */}
                <div
                  className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <span className="text-2xl">{area.icon}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-xl group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                    {area.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold mb-3 bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}
                  >
                    {area.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {area.description}
                  </p>

                  {/* Skills list */}
                  <div className="grid grid-cols-2 gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.gradient}`}
                        ></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                ></div>
              </div>
            ))}
          </div>

          {/* Full-cycle Benefits */}
          <div className="mt-12 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Why Full-cycle Development Approach Works
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-lime-500 dark:to-lime-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Seamless Integration
                </h5>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  All components work together perfectly since they're built by
                  the same developer with unified vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-500 dark:from-lime-500 dark:to-lime-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Faster Time-to-Market
                </h5>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  No handoffs between different specialists means faster
                  development and quicker project completion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-violet-500 dark:from-lime-500 dark:to-lime-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Consistent Quality
                </h5>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Unified coding standards, consistent architecture, and
                  cohesive user experience throughout the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
