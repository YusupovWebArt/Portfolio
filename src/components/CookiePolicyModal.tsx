import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const pm = t.consent.policyModal;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-policy-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h2 id="cookie-policy-title" className="text-xl font-bold">
                {pm.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {pm.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={pm.closeButton}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              {pm.purposeHeader}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {pm.purposeText}
            </p>
          </section>

          {/* Table */}
          <section className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3 font-semibold">{pm.tableHeaders.cookie}</th>
                  <th className="p-3 font-semibold">{pm.tableHeaders.provider}</th>
                  <th className="p-3 font-semibold">{pm.tableHeaders.purpose}</th>
                  <th className="p-3 font-semibold">{pm.tableHeaders.expiry}</th>
                  <th className="p-3 font-semibold">{pm.tableHeaders.type}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                  <td className="p-3 font-mono font-medium text-purple-600 dark:text-purple-400">{pm.gaRow.cookie}</td>
                  <td className="p-3">{pm.gaRow.provider}</td>
                  <td className="p-3">{pm.gaRow.purpose}</td>
                  <td className="p-3">{pm.gaRow.expiry}</td>
                  <td className="p-3">{pm.gaRow.type}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              {pm.rightsHeader}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {pm.rightsText}
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-500 transition-colors shadow-sm"
          >
            {pm.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};
