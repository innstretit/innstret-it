import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MethodologyProps {
  onOpenQuoteModal: () => void;
}

interface PhaseData {
  id: string;
  step: string;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

const PHASES_DATA: PhaseData[] = [
  {
    id: 'fase-01',
    step: '01',
    tag: 'ANALIZAMOS',
    badge: '01 · ANALIZAMOS',
    title: 'Entendimiento & Diagnóstico',
    subtitle: 'Primero el negocio y el proceso.',
    description:
      'Analizamos la operación real de la empresa, cómo fluye la información y dónde se producen los principales cuellos de botella.',
    deliverable: 'Mapeo de la situación actual y puntos de mejora prioritarios.',
  },
  {
    id: 'fase-02',
    step: '02',
    tag: 'DISEÑAMOS',
    badge: '02 · DISEÑAMOS',
    title: 'Diseño del Flujo Óptimo',
    subtitle: 'Estructura antes de la herramienta.',
    description:
      'Simplificamos y optimizamos los pasos operativos antes de digitalizar, evitando automatizar ineficiencias existentes.',
    deliverable: 'Arquitectura de procesos optimizada y plan de acción tecnológico.',
  },
  {
    id: 'fase-03',
    step: '03',
    tag: 'IMPLEMENTAMOS',
    badge: '03 · IMPLEMENTAMOS',
    title: 'Digitalización & Automatización',
    subtitle: 'Implementación práctica.',
    description:
      'Configuramos e integramos las soluciones digitales definidas, automatizando tareas y estructurando los procesos necesarios para mejorar la operación.',
    deliverable: 'Procesos digitalizados y automatizaciones implementadas.',
  },
  {
    id: 'fase-04',
    step: '04',
    tag: 'TRANSFERIMOS',
    badge: '04 · TRANSFERIMOS',
    title: 'Capacitación & Acompañamiento',
    subtitle: 'Adopción y continuidad.',
    description:
      'Capacitamos al equipo en las nuevas prácticas y herramientas para facilitar su adopción y continuidad en la operación.',
    deliverable: 'Equipo capacitado y procesos documentados para facilitar su continuidad.',
  },
];

export const Methodology: React.FC<MethodologyProps> = ({ onOpenQuoteModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activePhase = PHASES_DATA[activeStepIndex];

  return (
    <section id="metodologia" className="py-24 md:py-32 bg-[#F3F3F3] border-y border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-2xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              FLUJO DE TRANSFORMACIÓN
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Un recorrido continuo: del diagnóstico a la autonomía
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
            No implementamos herramientas de forma abrupta. Avanzamos en cuatro fases sucesivas orientadas a generar orden, facilitar la adopción y construir mejoras sostenibles.
          </p>
        </div>

        {/* Mobile Compact Selector (< lg) */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
            {PHASES_DATA.map((phase, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`shrink-0 inline-flex items-center space-x-2 px-4 py-3 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-[#00164A] text-white border-[#00164A] shadow-xs'
                      : 'bg-white text-gray-600 border-gray-200/90 hover:border-gray-300'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={`font-mono font-bold text-xs ${isActive ? 'text-[#207BF8]' : 'text-gray-400'}`}>
                    {phase.step}
                  </span>
                  <span className="tracking-wider">{phase.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Interactive Timeline (lg+) */}
        <div className="hidden lg:block mb-12">
          <div className="relative max-w-5xl mx-auto px-8">
            
            {/* Background Rail */}
            <div className="absolute top-5.5 left-14 right-14 h-1 bg-gray-200/90 rounded-full -z-0">
              {/* Progress Line */}
              <div
                className="h-full bg-[#207BF8] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(activeStepIndex / (PHASES_DATA.length - 1)) * 100}%` }}
              />
            </div>

            {/* 4 Interactive Nodes */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {PHASES_DATA.map((phase, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;

                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8]/60 rounded-xl py-1 transition-transform"
                    aria-pressed={isActive}
                  >
                    {/* Node circle */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 border-2 ${
                        isActive
                          ? 'bg-[#00164A] text-white border-[#207BF8] shadow-md ring-4 ring-[#207BF8]/20 scale-105'
                          : isPassed
                          ? 'bg-[#207BF8] text-white border-[#207BF8]'
                          : 'bg-white text-gray-400 border-gray-300 group-hover:border-gray-400 group-hover:text-gray-600'
                      }`}
                    >
                      {phase.step}
                    </div>

                    {/* Stage Label */}
                    <span
                      className={`mt-3 text-xs font-mono font-bold tracking-widest transition-colors ${
                        isActive ? 'text-[#00164A]' : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    >
                      {phase.tag}
                    </span>

                    {/* Sub-label */}
                    <span
                      className={`text-[11px] font-medium mt-0.5 transition-colors ${
                        isActive ? 'text-[#207BF8] font-semibold' : 'text-gray-400'
                      }`}
                    >
                      Fase {phase.step}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Single Protagonist Content Panel (Replaces the 4 simultaneous cards) */}
        <div className="relative bg-white rounded-3xl p-7 sm:p-10 lg:p-14 border border-gray-200/90 shadow-sm min-h-[360px] flex flex-col justify-center transition-all duration-300">
          <div
            key={activePhase.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center transition-opacity duration-300 motion-reduce:transition-none"
          >
            {/* Left 35%: Identification of the Phase */}
            <div className="lg:col-span-5 text-left border-b lg:border-b-0 lg:border-r border-gray-200/80 pb-6 lg:pb-0 lg:pr-8">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00164A] mb-4 border border-gray-200/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
                <span>{activePhase.badge}</span>
              </div>

              {/* Main Phase Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#00164A] tracking-tight leading-tight mb-3">
                {activePhase.title}
              </h3>

              {/* Subtitle / Philosophy */}
              <p className="text-base sm:text-lg font-medium text-[#207BF8] leading-snug">
                {activePhase.subtitle}
              </p>
            </div>

            {/* Right 65%: Explanation & Deliverable */}
            <div className="lg:col-span-7 text-left lg:pl-4 flex flex-col justify-center">
              
              {/* Paragraph Explanation */}
              <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed mb-8">
                {activePhase.description}
              </p>

              {/* Deliverable Box with Fine Divider */}
              <div className="pt-6 border-t border-gray-200/80">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">
                  ENTREGABLE
                </span>
                
                <div className="flex items-start space-x-3 text-sm sm:text-base md:text-lg font-semibold text-[#00164A] leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{activePhase.deliverable}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Clean Integrated Closing CTA (Unboxed, spacious, minimal) */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight mb-2">
              ¿En qué etapa se encuentra tu operación?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Podemos ayudarte a identificar el punto de partida y definir los siguientes pasos.
            </p>
          </div>

          <button
            id="methodology-cta-quote-btn"
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center space-x-3 bg-[#00164A] hover:bg-[#0A2563] text-white text-sm sm:text-base font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] hover:scale-[1.01] cursor-pointer shrink-0"
          >
            <span>Solicitar diagnóstico inicial</span>
            <ArrowRight className="w-4 h-4 text-[#207BF8]" />
          </button>
        </div>

        {/* Semantic Crawlable Representation for SEO & AEO (Always available in DOM) */}
        <div className="sr-only" aria-label="Fases completas de la metodología INNSTRET IT">
          {PHASES_DATA.map((phase) => (
            <article key={`seo-${phase.id}`}>
              <h3>{phase.step} · {phase.tag} - {phase.title}</h3>
              <p>{phase.subtitle}</p>
              <p>{phase.description}</p>
              <h4>Entregable:</h4>
              <p>{phase.deliverable}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
