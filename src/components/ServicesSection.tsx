import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeIndex = SERVICES_DATA.findIndex((s) => s.id === selectedServiceId);
  const activeService = SERVICES_DATA[activeIndex] || SERVICES_DATA[0];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              Servicios Especializados
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Cuatro servicios integrados para estructurar tu empresa
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Cada servicio resuelve una dimensión crítica de tu negocio: flujos, automatizaciones, 
            estabilidad tecnológica y autonomía del personal.
          </p>
        </div>

        {/* Mobile Compact Horizontal Selector (< lg) */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
            {SERVICES_DATA.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              const formattedNum = `0${index + 1}`;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`shrink-0 inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#00164A] text-white border-[#00164A] shadow-sm'
                      : 'bg-[#F3F3F3] text-[#00164A]/75 border-gray-200 hover:bg-white hover:border-gray-300'
                  }`}
                >
                  <span className={`font-mono text-[11px] ${isSelected ? 'text-[#207BF8]' : 'text-gray-400'}`}>
                    {formattedNum}
                  </span>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Two-Column Layout (lg+) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Vertical Modular Selector */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col space-y-3">
            {SERVICES_DATA.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              const formattedNum = `0${index + 1}`;

              return (
                <button
                  key={service.id}
                  id={`module-selector-${service.id}`}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] ${
                    isSelected
                      ? 'bg-[#00164A] text-white shadow-xl translate-x-1.5'
                      : 'bg-white hover:bg-[#F8FAFD] text-[#00164A] border border-gray-200/90 hover:border-[#207BF8]/30 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Active Indicator Accent Line on the Left */}
                  {isSelected && (
                    <div className="absolute left-0 top-4 bottom-4 w-1.5 bg-[#207BF8] rounded-r-full shadow-[0_0_12px_rgba(32,123,248,0.7)]" />
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      {/* Monospace Step Number */}
                      <span
                        className={`text-xs font-mono font-bold tracking-widest block mb-2 transition-colors ${
                          isSelected ? 'text-[#207BF8]' : 'text-gray-400 group-hover:text-[#207BF8]'
                        }`}
                      >
                        {formattedNum}
                      </span>

                      {/* Main Service Title */}
                      <h3 className="text-lg xl:text-xl font-bold tracking-tight mb-1.5 leading-snug">
                        {service.title}
                      </h3>

                      {/* Subtitle / Value Pillar */}
                      <p
                        className={`text-xs font-medium tracking-wide uppercase ${
                          isSelected ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {service.badge}
                      </p>
                    </div>

                    {/* Subtle status dot or arrow on active */}
                    <div className="pt-1">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-[#207BF8]/20 flex items-center justify-center text-[#207BF8]">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#207BF8]/60 transition-colors mt-2 mr-1" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Active Module Detailed Content */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white lg:pl-4">
            <div
              key={activeService.id}
              className="animate-in fade-in-50 duration-200"
            >
              {/* Category Eyebrow */}
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#207BF8] mb-3">
                <span>SERVICIO 0{activeIndex + 1}</span>
                <span>·</span>
                <span className="text-gray-400">{activeService.badge}</span>
              </div>

              {/* Main Service Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00164A] tracking-tight mb-3">
                {activeService.title.toUpperCase()}
              </h3>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-[#207BF8] mb-5">
                {activeService.tagline}
              </p>

              {/* Comprehensive Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
                {activeService.description}
              </p>

              {/* Clean Editorial Divider */}
              <div className="h-px bg-gray-200/80 my-8" />

              {/* Two-Column Grid for Alcance & Beneficios without nested box clutter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-10">
                
                {/* Scope Section (Alcance) */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00164A] mb-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
                    <span>Alcance del servicio</span>
                  </h4>

                  <ul className="space-y-3.5">
                    {activeService.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-[#00164A]">
                        <div className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-medium text-gray-800 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits / Operational Impact Section */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00164A] mb-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
                    <span>Beneficios / Impacto operativo</span>
                  </h4>

                  <ul className="space-y-3.5">
                    {activeService.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-sm sm:text-base text-[#00164A]">
                        <div className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-medium text-gray-800 leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Clean Editorial Divider */}
              <div className="h-px bg-gray-200/80 my-8" />

              {/* High-Ticket Action Button */}
              <div className="pt-2">
                <button
                  id={`quote-service-btn-${activeService.id}`}
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center justify-center space-x-3 bg-[#00164A] hover:bg-[#0A2563] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] hover:scale-[1.01] cursor-pointer group"
                >
                  <span>Solicitar cotización de {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#207BF8] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Semantic Structured Index for Search Engines & AEO (Always accessible in DOM) */}
        <div className="sr-only" aria-label="Catálogo semántico completo de servicios INNSTRET IT">
          {SERVICES_DATA.map((srv) => (
            <article key={`seo-${srv.id}`}>
              <h3>{srv.title}</h3>
              <p>{srv.tagline}</p>
              <p>{srv.description}</p>
              <h4>Alcance del servicio:</h4>
              <ul>
                {srv.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
              <h4>Beneficios:</h4>
              <ul>
                {srv.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
