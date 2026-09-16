import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { useInView } from '../hooks/useInView';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const activeIndex = SERVICES_DATA.findIndex((s) => s.id === selectedServiceId);
  const activeService = SERVICES_DATA[activeIndex] || SERVICES_DATA[0];

  // Mobile horizontal scroll references and state
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollIndicators = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollIndicators();
    const handleResize = () => updateScrollIndicators();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateScrollIndicators]);

  // Preload all 7 service images on mount for instant zero-latency transitions
  useEffect(() => {
    SERVICES_DATA.forEach((service) => {
      if (service.image?.url) {
        const img = new Image();
        img.src = service.image.url;
      }
    });
  }, []);

  const handleSelectService = (serviceId: string, index: number) => {
    setSelectedServiceId(serviceId);

    const container = mobileScrollRef.current;
    const button = buttonRefs.current[index];
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Center the target button within the visible scroll container
    const targetScrollLeft =
      container.scrollLeft +
      (buttonRect.left - containerRect.left) -
      (containerRect.width - buttonRect.width) / 2;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    // Re-verify indicators after smooth scroll animation completes
    setTimeout(updateScrollIndicators, 350);
  };

  return (
    <section ref={sectionRef} id="servicios" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-12 sm:mb-16 text-left transition-all duration-500 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              Servicios Especializados
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Soluciones tecnológicas para estructurar y potenciar tu empresa
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Integramos procesos, automatización, operaciones TI, conectividad, soluciones web, equipamiento y capacitación según las necesidades de tu empresa.
          </p>
        </div>

        {/* Mobile Horizontal Scroll Selector (< lg) with Edge Indicators & Scroll-Snap */}
        <div className="lg:hidden mb-8 relative w-full">
          {/* Subtle Left Fade Indicator */}
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* Subtle Right Fade Indicator */}
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-white via-white/80 to-transparent transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* Scrollable Track */}
          <div
            ref={mobileScrollRef}
            onScroll={updateScrollIndicators}
            className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-0.5 scroll-smooth snap-x snap-mandatory no-scrollbar touch-pan-x"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {SERVICES_DATA.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              const formattedNum = `0${index + 1}`;
              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  onClick={() => handleSelectService(service.id, index)}
                  className={`snap-start shrink-0 inline-flex items-center space-x-2.5 px-4.5 py-3 rounded-full text-xs font-semibold transition-all duration-250 border cursor-pointer min-h-[44px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] ${
                    isSelected
                      ? 'bg-[#00164A] text-white border-[#00164A] shadow-xs'
                      : 'bg-[#F3F3F3] text-[#00164A]/80 border-gray-200/90 hover:bg-white hover:border-gray-300'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`font-mono text-xs ${
                      isSelected ? 'text-[#207BF8]' : 'text-gray-400'
                    }`}
                  >
                    {formattedNum}
                  </span>
                  <span className="whitespace-nowrap">{service.title}</span>
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
                  className={`w-full text-left p-4.5 xl:p-5 rounded-xl xl:rounded-2xl transition-all duration-250 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] ${
                    isSelected
                      ? 'bg-[#00164A] text-white shadow-lg translate-x-1'
                      : 'bg-white hover:bg-[#F8FAFD] text-[#00164A] border border-gray-200/90 hover:border-[#207BF8]/40 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Active Indicator Accent Line on the Left */}
                  {isSelected && (
                    <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#207BF8] rounded-r-full" />
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

          {/* RIGHT COLUMN: Active Module Detailed Content with Stabilized Min-Height */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white lg:pl-4 min-h-[500px]">
            <div
              key={activeService.id}
              className="animate-in fade-in-0 slide-in-from-right-2 duration-250 ease-out"
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
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                {activeService.description}
              </p>

              {/* Premium Panoramic Visual Resource (16:9 Aspect Ratio with Zero CLS & Smooth Easing Transition) */}
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#F3F3F3] border border-gray-200/90 shadow-2xs mb-8">
                <img
                  key={activeService.id}
                  src={activeService.image.url}
                  alt={activeService.image.alt}
                  className="w-full h-full object-cover animate-service-image select-none"
                  loading={activeIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  // @ts-ignore
                  fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
                />
              </div>

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
                  className="inline-flex items-center justify-center space-x-3 bg-[#00164A] hover:bg-[#0A2563] active:scale-[0.99] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] cursor-pointer group"
                >
                  <span>{activeService.ctaText || `Solicitar cotización de ${activeService.title}`}</span>
                  <ArrowRight className="w-4 h-4 text-[#207BF8] group-hover:translate-x-1 transition-transform duration-200" />
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

