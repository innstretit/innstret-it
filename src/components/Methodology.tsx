import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/content';

interface MethodologyProps {
  onOpenQuoteModal: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#207BF8]">
              Paso a Paso
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Metodología estructurada para transformar tu operación
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Un camino claro, ordenado y predecible desde la evaluación inicial hasta la plena autonomía de tu equipo.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {METHODOLOGY_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-[#F3F3F3]/40 hover:bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-[#207BF8]">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Fase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#00164A] mb-1">
                  {stepItem.title}
                </h3>
                <span className="text-xs font-semibold text-[#207BF8] block mb-3">
                  {stepItem.subtitle}
                </span>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {stepItem.description}
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/70 text-xs">
                <span className="font-bold text-[#00164A] block mb-0.5">
                  Entregable / Resultado:
                </span>
                <span className="text-gray-600 leading-tight block">
                  {stepItem.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            ¿Quieres saber cuál sería el plan de acción para tu empresa?
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
          >
            <span>Solicitar cotización y diagnóstico</span>
            <ArrowRight className="w-4 h-4 text-[#207BF8]" />
          </button>
        </div>

      </div>
    </section>
  );
};
