'use client'

import React, { useState } from 'react'
import {
  LuCalculator as Calculator,
  LuTrendingDown as TrendingDown,
  LuSparkles as Sparkles,
  LuPiggyBank as PiggyBank,
} from 'react-icons/lu'
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa'
import type { ServiceLocale } from '../../data/services/types'
import { openWhatsAppDirect } from '../../lib/contacts'

interface GoogleAdsSavingsCalculatorProps {
  locale: ServiceLocale
}

export default function GoogleAdsSavingsCalculator({
  locale,
}: GoogleAdsSavingsCalculatorProps) {
  const [monthlySpend, setMonthlySpend] = useState<number>(3000)

  // Quality Score improvement (moving from QS 4-5 to QS 9-10) reduces average CPC by ~25%
  const estimatedSavingsRate = 0.25
  const monthlySavings = Math.round(monthlySpend * estimatedSavingsRate)
  const annualSavings = monthlySavings * 12

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat(locale === 'es' ? 'es-ES' : locale === 'ua' ? 'uk-UA' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  const title =
    locale === 'es'
      ? 'Calculadora de Ahorro Publicitario (Google Ads & CRO)'
      : locale === 'ua'
        ? 'Калькулятор економії бюджету в Google Ads'
        : 'Google Ads Speed & Quality Score ROI Calculator'

  const subtitle =
    locale === 'es'
      ? 'Google premia las landing pages con PageSpeed 95+ otorgando un Nivel de Calidad (Quality Score) superior. Esto reduce directamente el coste que pagas por cada clic (CPC).'
      : locale === 'ua'
        ? 'Google підвищує показник якості (Quality Score) для швидких сайтів з PageSpeed 95+, що знижує ціну за кожен клік (CPC) без втрати позицій.'
        : 'Google rewards landing pages with PageSpeed 95+ with higher Quality Scores, directly lowering your effective cost-per-click (CPC).'

  const spendLabel =
    locale === 'es'
      ? 'Tu inversión mensual aproximada en Google Ads:'
      : locale === 'ua'
        ? 'Ваш орієнтовний щомісячний бюджет у Google Ads:'
        : 'Your approximate monthly Google Ads ad spend:'

  const ctaBtnText =
    locale === 'es'
      ? `Ahorrar ${formatCurrency(monthlySavings)}/mes en Google Ads`
      : locale === 'ua'
        ? `Заощаджувати ${formatCurrency(monthlySavings)}/міс у Google Ads`
        : `Save ${formatCurrency(monthlySavings)}/mo on Google Ads`

  const handleWhatsAppInquiry = () => {
    const msg =
      locale === 'es'
        ? `Hola Artur, invierto aproximadamente ${formatCurrency(monthlySpend)} al mes en Google Ads y me interesa una optimización de velocidad para ahorrar hasta ${formatCurrency(monthlySavings)}/mes reduciendo el CPC.`
        : locale === 'ua'
          ? `Вітаю Артуре! Я витрачаю близько ${formatCurrency(monthlySpend)} на місяць у Google Ads і хочу оптимізувати швидкість сайту для економії до ${formatCurrency(monthlySavings)}/міс завдяки покращенню Quality Score.`
          : `Hi Artur, I spend around ${formatCurrency(monthlySpend)} per month on Google Ads and want to optimize site velocity to save up to ${formatCurrency(monthlySavings)}/mo on CPC.`

    openWhatsAppDirect(locale, msg)
  }

  return (
    <section
      aria-label="Google Ads ROI Calculator"
      className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 via-slate-900/40 to-slate-950 border border-purple-500/30 shadow-xl text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Calculator className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            {locale === 'es' ? 'Simulador Financiero' : locale === 'ua' ? 'Фінансовий симулятор' : 'Financial Simulator'}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-8">
          {subtitle}
        </p>

        {/* Slider Controls */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <label htmlFor="ad-spend-range" className="text-xs sm:text-sm font-semibold text-slate-300">
              {spendLabel}
            </label>
            <span className="text-xl sm:text-2xl font-black text-purple-400 font-mono">
              {formatCurrency(monthlySpend)}/mes
            </span>
          </div>

          <input
            id="ad-spend-range"
            type="range"
            min="500"
            max="15000"
            step="250"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
            <span>500 €</span>
            <span>5 000 €</span>
            <span>10 000 €</span>
            <span>15 000 €</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/20 text-left">
            <div className="flex items-center gap-1.5 text-xs text-purple-400 font-bold mb-1">
              <TrendingDown className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === 'es' ? 'Ahorro Mensual' : locale === 'ua' ? 'Щомісячна економія' : 'Monthly Savings'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              ~{formatCurrency(monthlySavings)}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {locale === 'es' ? 'Menor coste por clic (-25% CPC)' : locale === 'ua' ? 'Зниження вартості кліка (-25%)' : 'Reduced cost-per-click (-25%)'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/20 text-left">
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mb-1">
              <PiggyBank className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === 'es' ? 'Ahorro Anual Proyectado' : locale === 'ua' ? 'Річна економія бюджету' : 'Projected Annual Savings'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
              ~{formatCurrency(annualSavings)}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {locale === 'es' ? 'Dinero reinvertible en negocio' : locale === 'ua' ? 'Кошти, що залишаються в бізнесі' : 'Capital saved and re-investable'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/20 text-left">
            <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === 'es' ? 'Impacto en Conversión' : locale === 'ua' ? 'Ріст конверсії' : 'Conversion Lift'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">
              +15% a +25%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {locale === 'es' ? 'Más ventas con el mismo tráfico' : locale === 'ua' ? 'Більше заявок за той самий бюджет' : 'More sales from existing visitors'}
            </div>
          </div>
        </div>

        {/* 1-Click WhatsApp Trigger with calculated numbers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
          <p className="text-xs text-slate-300 leading-relaxed text-center sm:text-left">
            {locale === 'es'
              ? '¿Quieres auditar tu Quality Score actual y calcular el retorno exacto de tu web?'
              : locale === 'ua'
                ? 'Бажаєте перевірити поточний Quality Score вашого сайту та оцінити окупність?'
                : 'Want to audit your current Quality Score and calculate your exact site ROI?'}
          </p>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors cursor-pointer shrink-0"
          >
            <WhatsappIcon className="w-4 h-4" aria-hidden="true" />
            <span>{ctaBtnText}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
