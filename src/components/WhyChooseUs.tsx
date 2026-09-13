import React from 'react';
import { Target, Layers, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_DATA, DIFFERENTIAL_POINTS } from '../data/content';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-[#207BF8]" />;
      case 1:
        return <Layers className="w-6 h-6 text-[#207BF8]" />;
      case 2:
        return <Zap className="w-6 h-6 text-[#207BF8]" />;
      case 3:
      default:
        return <ShieldCheck className="w-6 h-6 text-[#207BF8]" />;
    }
  };

  return (
    <section id="por-que-elegirnos" className="py-20 md:py-28 bg-[#F3F3F3]/60 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-xs mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#207BF8]">
              Propuesta de Valor
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            ¿Por qué elegir INNSTRET IT como tu socio tecnológico?
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            La tecnología por sí sola no resuelve problemas operativos. Nuestro diferencial radica en conectar el entendimiento real de tu negocio con soluciones digitales pragmáticas.
          </p>
        </div>

        {/* Central Comparative Concept Banner */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/90 shadow-sm mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#207BF8] block mb-2">
                Nuestra Filosofía de Trabajo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#00164A] leading-snug mb-3">
                “No incorporamos tecnología solo por utilizar tecnología.”
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Primero analizamos minuciosamente el proceso y la necesidad del negocio para luego identificar con precisión cómo digitalizar, automatizar u optimizar la operación. Así aseguramos que cada solución tenga un impacto positivo real en el día a día de tu equipo.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#00164A] text-white p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#207BF8] font-bold uppercase tracking-wider block mb-1">
                  Enfoque Integrado
                </span>
                <p className="text-sm font-semibold text-gray-100 leading-normal">
                  Combinamos Procesos + Operaciones + TI en una sola visión estratégica.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-300">¿Listo para empezar?</span>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-[#207BF8] hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Cotizar ahora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Differential Core Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DIFFERENTIAL_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:border-[#207BF8]/50 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center mb-5 border border-[#207BF8]/20">
                {getIcon(index)}
              </div>
              <h4 className="text-lg font-bold text-[#00164A] mb-2.5">
                {point.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
