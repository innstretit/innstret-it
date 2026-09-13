import React, { useState } from 'react';
import { Workflow, Cpu, Server, GraduationCap, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServicePillar } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'GraduationCap':
      default:
        return <GraduationCap className={className} />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#207BF8]">
              Nuestras Soluciones
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Servicios orientados a simplificar y potenciar la operación de tu negocio
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Abordamos de forma integral las dimensiones de procesos, automatización, soporte de TI y formación humana, 
            garantizando que la tecnología sea una palanca real de eficiencia.
          </p>
        </div>

        {/* Desktop / Tablet Service Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                id={`service-nav-btn-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex flex-col items-start text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? 'bg-[#00164A] text-white border-[#00164A] shadow-md ring-2 ring-[#207BF8]/40'
                    : 'bg-[#F3F3F3]/70 hover:bg-white text-[#00164A] border-gray-200 hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? 'bg-[#207BF8] text-white' : 'bg-white text-[#207BF8] border border-gray-200'
                  }`}
                >
                  {getServiceIcon(service.iconName, 'w-5 h-5')}
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-80 mb-1">
                  {service.badge}
                </span>
                <span className="text-base font-bold leading-snug">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Service Detail Card */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-lg p-6 sm:p-10 mb-16 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Scope and Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 bg-[#EBF3FF] text-[#207BF8] text-xs font-semibold px-3 py-1 rounded-md mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00164A] mb-2">
                  {activeService.title}
                </h3>
                <p className="text-base text-[#207BF8] font-medium mb-4">
                  {activeService.tagline}
                </p>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {activeService.description}
                </p>

                <h4 className="text-sm font-bold uppercase tracking-wider text-[#00164A] mb-3">
                  Alcance y servicios incluidos:
                </h4>
                <ul className="space-y-3 mb-8">
                  {activeService.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-[#00164A]">
                      <span className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id={`quote-service-btn-${activeService.id}`}
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200"
                >
                  <span>Solicitar cotización de {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Business Impact / Expected Benefits */}
            <div className="lg:col-span-5 bg-[#F3F3F3] rounded-xl p-6 sm:p-7 border border-gray-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Impacto operativo esperado
              </h4>
              <div className="space-y-4">
                {activeService.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-2xs flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#207BF8] mt-2 shrink-0" />
                    <p className="text-sm font-medium text-[#00164A] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#00164A]/5 border border-[#00164A]/10 text-xs text-[#00164A]/80">
                <span className="font-bold">Principio INNSTRET IT:</span> Toda implementación responde a una necesidad real detectada en la operación, evitando sobrecostos o herramientas innecesarias.
              </div>
            </div>

          </div>
        </div>

        {/* 4 Cards Quick Overview Matrix (All services visible at once for quick scanning) */}
        <div className="border-t border-gray-200 pt-14">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-[#00164A]">
              Visión general de las 4 líneas de servicio
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Haz clic en cualquier servicio para consultar su alcance detallado o cotizarlo directamente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className={`rounded-xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  selectedServiceId === srv.id
                    ? 'border-[#207BF8] bg-[#EBF3FF]/30 shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-[#207BF8] flex items-center justify-center">
                      {getServiceIcon(srv.iconName, 'w-4 h-4')}
                    </div>
                    <span className="text-[11px] font-semibold uppercase text-gray-500">
                      {srv.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#00164A] mb-1.5">
                    {srv.title}
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1 mb-4">
                    {srv.items.map((it, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="text-[#207BF8] font-bold">•</span>
                        <span className="truncate">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectServiceForQuote(srv.title)}
                  className="w-full text-xs font-semibold text-[#207BF8] hover:text-[#1664D1] py-2 px-3 bg-white rounded-lg border border-gray-200 hover:border-[#207BF8]/50 flex items-center justify-center space-x-1 transition-colors"
                >
                  <span>Cotizar servicio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
