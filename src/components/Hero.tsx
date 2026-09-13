import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Workflow, Server, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'procesos' | 'automatizacion' | 'operaciones'>('procesos');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F3F3F3]/40 to-white">
      {/* Subtle tech background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#207BF8]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00164A]/5 rounded-full blur-2xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#00164A 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag / Category Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center space-x-2 bg-[#F3F3F3] border border-gray-200/80 px-3.5 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#207BF8] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00164A]">
                Consultoría Tecnológica & Gestión de Operaciones
              </span>
            </div>

            {/* Single Clear H1 Title */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#00164A] tracking-tight leading-[1.18] mb-6"
            >
              Transformamos procesos operativos en sistemas{' '}
              <span className="text-[#207BF8] relative inline-block">
                más eficientes
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#207BF8]/20 rounded-full" />
              </span>
              , estructurados y digitales.
            </h1>

            {/* Clear subtitle answering What & How */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-[#00164A]/80 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Ayudamos a empresas a optimizar sus procesos diarios mediante{' '}
              <strong className="font-semibold text-[#00164A]">digitalización</strong>,{' '}
              <strong className="font-semibold text-[#00164A]">automatización de tareas</strong> y{' '}
              <strong className="font-semibold text-[#00164A]">buenas prácticas de gestión TI</strong>. 
              Primero entendemos tu operación; luego implementamos la tecnología que simplifica el trabajo.
            </p>

            {/* Conversion CTA Group */}
            <div id="hero-cta-group" className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* Primary CTA */}
              <button
                id="hero-primary-quote-cta"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:ring-offset-2"
              >
                <span>Solicitar una cotización</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA: WhatsApp */}
              <a
                id="hero-whatsapp-cta"
                href={BRAND_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#F3F3F3] text-[#00164A] border border-gray-200 font-semibold text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-[#207BF8]" />
                <span>Escribir por WhatsApp</span>
              </a>

              {/* Secondary CTA: Scroll to services */}
              <button
                id="hero-explore-services-cta"
                onClick={() => scrollToSection('servicios')}
                className="inline-flex items-center justify-center text-[#00164A]/70 hover:text-[#207BF8] font-medium text-sm py-2 px-3 transition-colors"
              >
                <span>Ver servicios</span>
              </button>
            </div>

            {/* Core Value Pillars / Trust Indicators (Truthful & based strictly on the brief) */}
            <div id="hero-trust-pillars" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200/80 w-full">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#207BF8] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#00164A]/85">
                  Primero el proceso, luego la tecnología
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#207BF8] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#00164A]/85">
                  Soluciones prácticas y aplicables
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#207BF8] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#00164A]/85">
                  Procesos + Operaciones + TI
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Process & Architecture Module */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-interactive-card"
              className="bg-white rounded-2xl border border-gray-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Header of Interactive Card */}
              <div className="bg-[#00164A] text-white p-5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#207BF8]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-300">
                    Enfoque Operativo INNSTRET IT
                  </span>
                </div>
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-md text-gray-200 font-mono">
                  Sistemas Eficientes
                </span>
              </div>

              {/* Selector Tabs for 3 Operational Facets */}
              <div className="grid grid-cols-3 p-2 bg-[#F3F3F3] border-b border-gray-200 text-xs font-semibold">
                <button
                  id="tab-procesos-btn"
                  onClick={() => setActiveTab('procesos')}
                  className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                    activeTab === 'procesos'
                      ? 'bg-white text-[#00164A] shadow-xs'
                      : 'text-gray-600 hover:text-[#00164A]'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5 text-[#207BF8]" />
                  <span className="truncate">Procesos</span>
                </button>
                <button
                  id="tab-auto-btn"
                  onClick={() => setActiveTab('automatizacion')}
                  className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                    activeTab === 'automatizacion'
                      ? 'bg-white text-[#00164A] shadow-xs'
                      : 'text-gray-600 hover:text-[#00164A]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-[#207BF8]" />
                  <span className="truncate">Automatización</span>
                </button>
                <button
                  id="tab-ops-btn"
                  onClick={() => setActiveTab('operaciones')}
                  className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                    activeTab === 'operaciones'
                      ? 'bg-white text-[#00164A] shadow-xs'
                      : 'text-gray-600 hover:text-[#00164A]'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-[#207BF8]" />
                  <span className="truncate">Operación TI</span>
                </button>
              </div>

              {/* Dynamic Content Panel */}
              <div className="p-6">
                {activeTab === 'procesos' && (
                  <div id="hero-tab-procesos-content" className="space-y-4">
                    <div className="flex items-start space-x-3 bg-[#EBF3FF] p-3.5 rounded-xl border border-[#207BF8]/20">
                      <Workflow className="w-5 h-5 text-[#207BF8] mt-0.5 shrink-0" />
                      <div>
                        <h2 className="text-sm font-bold text-[#00164A]">
                          Optimización & Digitalización
                        </h2>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Transformamos flujos lentos o en papel en procesos estructurados con datos claros.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">1. Diagnóstico</span>
                        <span className="font-semibold text-[#00164A]">Identificación de cuellos de botella</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">2. Rediseño</span>
                        <span className="font-semibold text-[#00164A]">Simplificación de tareas manuales</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-[#EBF3FF]/70 rounded-lg text-xs border border-[#207BF8]/20">
                        <span className="text-[#207BF8] font-bold">3. Digitalización</span>
                        <span className="font-semibold text-[#00164A]">Control y trazabilidad continua</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'automatizacion' && (
                  <div id="hero-tab-auto-content" className="space-y-4">
                    <div className="flex items-start space-x-3 bg-[#EBF3FF] p-3.5 rounded-xl border border-[#207BF8]/20">
                      <Cpu className="w-5 h-5 text-[#207BF8] mt-0.5 shrink-0" />
                      <div>
                        <h2 className="text-sm font-bold text-[#00164A]">
                          Automatización de Tareas Repetitivas
                        </h2>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Conectamos sistemas para erradicar el trabajo manual rutinario y reducir errores.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">Detección</span>
                        <span className="font-semibold text-[#00164A]">Mapeo de tareas de alto volumen</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">Integración</span>
                        <span className="font-semibold text-[#00164A]">Conexión fluida entre plataformas</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-[#EBF3FF]/70 rounded-lg text-xs border border-[#207BF8]/20">
                        <span className="text-[#207BF8] font-bold">Resultado</span>
                        <span className="font-semibold text-[#00164A]">Ahorro de horas y cero reprocesos</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'operaciones' && (
                  <div id="hero-tab-ops-content" className="space-y-4">
                    <div className="flex items-start space-x-3 bg-[#EBF3FF] p-3.5 rounded-xl border border-[#207BF8]/20">
                      <Server className="w-5 h-5 text-[#207BF8] mt-0.5 shrink-0" />
                      <div>
                        <h2 className="text-sm font-bold text-[#00164A]">
                          Gestión y Operaciones TI
                        </h2>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Metodologías para responder incidentes y asegurar que los servicios TI operen sin interrupción.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">Incidentes</span>
                        <span className="font-semibold text-[#00164A]">Respuesta rápida y estructurada</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <span className="text-gray-500 font-medium">Problemas</span>
                        <span className="font-semibold text-[#00164A]">Análisis de causa raíz</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-[#EBF3FF]/70 rounded-lg text-xs border border-[#207BF8]/20">
                        <span className="text-[#207BF8] font-bold">Continuidad</span>
                        <span className="font-semibold text-[#00164A]">Estabilidad operativa garantizada</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Direct quick action inside the card */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">¿Deseas evaluar tu operación?</span>
                  <button
                    onClick={onOpenQuoteModal}
                    className="text-xs font-semibold text-[#207BF8] hover:text-[#1664D1] inline-flex items-center space-x-1"
                  >
                    <span>Cotizar diagnóstico</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
