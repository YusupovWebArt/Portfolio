import { useState } from 'react'
import {
  Layout,
  Zap,
  Bot,
  MapPin,
  ShoppingCart,
  ShieldCheck,
  Lock,
  Code2,
  Sparkles,
  Search,
  Handshake,
  Check,
  Building2,
  Briefcase,
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const pymesIcons = [Layout, Zap, Bot, MapPin, ShoppingCart, ShieldCheck]
const agencyIcons = [Lock, Code2, Sparkles, Search, Handshake]

const B2bServices = () => {
  const { t } = useLanguage()
  const b2b = t.b2bServices
  const [activeTab, setActiveTab] = useState<'pymes' | 'agencies'>('pymes')

  const isPymes = activeTab === 'pymes'
  const activeContent = isPymes ? b2b.pymesContent : b2b.agenciesContent
  const activeIcons = isPymes ? pymesIcons : agencyIcons

  return (
    <section
      id="b2b-services"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hidden lg:block absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-300 dark:bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-300 dark:bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-500/10 dark:to-lime-600/10 text-purple-700 dark:text-lime-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {b2b.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {b2b.title.before}{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              {b2b.title.highlight}
            </span>{' '}
            {b2b.title.after}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {b2b.subtitle}
          </p>

          {/* Interactive Audience Switcher (Tabs) */}
          <div className="inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-300/50 dark:border-white/10 shadow-inner max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('pymes')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                isPymes
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-lime-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{b2b.tabs.pymes}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('agencies')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                !isPymes
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-lime-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{b2b.tabs.agencies}</span>
            </button>
          </div>
        </div>

        {/* Tab Intro Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {activeContent.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {activeContent.subtitle}
          </p>
        </div>

        {/* Dynamic Grid of Cards (Preserving WhyWorkWithMe Visual System) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activeContent.cards.map((card, idx) => {
            const IconComponent = activeIcons[idx % activeIcons.length]
            return (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white dark:bg-slate-900 lg:bg-white/60 lg:dark:bg-slate-900/60 lg:backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-between"
              >
                {/* Ambient hover light glow */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500 dark:bg-lime-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Title Header */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400 border border-purple-200/50 dark:border-lime-500/20 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-[11px] text-purple-600 dark:text-lime-400 font-semibold tracking-wide mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                    {card.body}
                  </p>

                  {/* Key Benefit Banner Box */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{card.benefitLabel}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {card.benefit}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default B2bServices
