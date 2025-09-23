import { SiReact, SiWordpress, SiGoogleanalytics } from 'react-icons/si'
import { LuBrainCircuit } from 'react-icons/lu'

const About = () => {
  const highlights = [
    {
      icon: <SiWordpress className="w-6 h-6" />,
      title: 'WordPress development',
      description:
        'Full-stack WordPress development with custom themes and plugins',
    },
    {
      icon: <SiReact className="w-6 h-6" />,
      title: 'App Development',
      description: 'Expert in React/Next.js, TypeScript, and JavaScript',
    },
    {
      icon: <SiGoogleanalytics className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Technical SEO implementation and performance optimization',
    },
    {
      icon: <LuBrainCircuit className="w-6 h-6" />,
      title: 'Agentic AI development',
      description:
        'Prompt/Context engineering. Explore and integrate AI tools into WordPress and React projects development workflows.',
    },
  ]

  const education = [
    {
      year: '2024-Present',
      title: 'REACT/Next.js/Javascript | AI-tools | TMA | Web3',
      institution:
        'Full-stack App Development, AI-tools, Blockchain technologies',
      description:
        'In parallel with my main work and specialization, I study and practice App Development with in-depth study of React/Next.js and Javascript. AI-tools. TMA development.',
    },
    {
      year: '2016',
      title: 'Specialized courses and practical classes',
      institution:
        'W3schools, Coursera, Udemy, Codecademy, SoloLearn, Programminghub, YouTube',
      description:
        'NEVER STOP LEARNING! (lifelong learning). Constantly learning, improving my knowledge and skills every day in my profession. Also, I read a lot and watch video courses with up-to-date information from related areas of interest to me. In my daily work, also use resources such as ChatGPT, Claude Code and others AI-tools. W3C, MDN, CODEX WordPress, Stack Overflow, GitHub, CodePen, Udemy, Google, YouTube.',
    },
    {
      year: '2005-2010',
      title: 'National Technical University (Ukraine)',
      institution: 'VNTU - Vinnitsa National Technical University (Ukraine)',
      description:
        'Administrative management in the field of information security with limited access in companies and in production. System Administrator.',
    },
  ]

  const workExperience = [
    {
      year: '2021-Present',
      title: 'Front-end Developer (Remote Full-time/Part-time)',
      company: 'Frontdeskhelpers',
      companyUrl: 'https://frontdeskhelpers.com/',
      description:
        'WordPress/Wix developer/SEO. Working remote full time work according to methodology Agile. US English and Spanish speaking customers. (USA, ES).',
    },
    {
      year: '2020-2021',
      title: 'Front-end Developer (Remote Part-time)',
      company: 'Agenturro',
      companyUrl: 'https://www.agenturro.co/',
      description:
        'HTML/CSS/JS - developer. Working with CMS - WordPress, Shopify. SEO-optimization. German customers.',
    },
    {
      year: '2017-2024',
      title: 'Freelance and Personal projects',
      company: 'Web-developer (WordPress, Shopify, WIX), SEO-specialist.',
      companyUrl: 'https://freelancehunt.com/freelancer/arsly.html',
      description:
        'I worked remotely as a freelancer on Ukrainian and American freelance platforms - Freelancehunt, Upwork, Freelancer, etc. Part-time as a remote worker for a few companies that are focused on European clients. Personal projects based on affiliate marketing, dropshipping and POD on Etsy.',
    },
  ]

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
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I&#39;m a Fullstack WordPress Developer and React/Next.js
                Engineer focused on building scalable, high-performance websites
                that align with business goals. I combine clean code with SEO
                expertise to deliver functional, results-driven solutions. As a
                T-shaped specialist, I bring deep knowledge of web development
                along with broad skills in UI/UX, DevOps, SEO, and digital
                marketing strategy.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I also specialize in <strong>AI-Assisted Development</strong>,
                leveraging modern AI-powered tools to streamline development,
                accelerate content creation, and enhance website functionality.
                From generating code snippets and automating workflows to
                optimizing SEO strategies and delivering personalized user
                experiences, I seamlessly integrate AI into the web development
                process to achieve faster, smarter, and more impactful results.
                Additionally, I am experienced in
                <strong> Prompt engineering</strong> and
                <strong> Context engineering</strong>, enabling me to maximize
                the effectiveness of AI tools and deliver highly tailored
                solutions.
              </p>
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

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
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
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
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
                      {item.year.includes('Present')
                        ? 'Now'
                        : item.year.split('-')[0]}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow">
                        <div className="text-purple-600 dark:text-lime-500 font-bold text-sm mb-1">
                          {item.year}
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h5>
                        <div className="text-blue-600 dark:text-lime-500 font-medium text-sm mb-2">
                          {item.institution}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
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
                      {item.year.includes('Present')
                        ? 'Now'
                        : item.year.split('-')[0]}
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
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-lime-500 font-medium text-sm mb-2 hover:text-teal-700 dark:hover:text-lime-600 transition-colors underline decoration-dotted underline-offset-2"
                        >
                          {item.company}
                        </a>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
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
  )
}

export default About
