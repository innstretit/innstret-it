import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const bgImageUrl =
    'https://res.cloudinary.com/agu65138/image/upload/v1789322034/hf_20260913_175303_93b03153-1025-4373-bcf2-f740f9fc8050.png';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] flex items-center pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden text-[#00164A] selection:bg-[#207BF8]/20 selection:text-[#00164A]"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Calibrated white veil overlay: lowers opacity so the organic background waves are visibly noticeable while keeping navy typography razor-sharp */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/35 pointer-events-none" />
      <div className="absolute inset-0 bg-white/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F3F3F3] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Full-width editorial single-column layout: grand visual presence */}
        <div className="max-w-5xl text-left">
          
          {/* Pill Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-gray-200/90 px-4 py-1.5 rounded-full mb-8 text-[#00164A] shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              Consultoría Tecnológica & Gestión de Operaciones
            </span>
          </div>

          {/* Monumental Typographic Headline in High-Contrast Deep Navy and Digital Blue */}
          <h1
            id="hero-main-title"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#00164A] tracking-tight leading-[1.04] mb-8"
          >
            <span className="font-serif italic font-light text-[#00164A] block text-3xl sm:text-5xl md:text-6xl lg:text-[4.8rem] mb-2 sm:mb-3">
              Transformamos
            </span>
            procesos operativos en{' '}
            <span className="text-[#207BF8] inline-block font-extrabold">
              Sistemas eficientes
            </span>
            , estructurados y digitales.
          </h1>

          {/* Subtitle with high contrast and readable line length */}
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl md:text-2xl text-[#00164A]/85 leading-relaxed max-w-3xl mb-12 font-normal"
          >
            Estructuramos, digitalizamos y automatizamos las operaciones diarias de tu empresa.{' '}
            <strong className="text-[#00164A] font-semibold">
              Primero entendemos a fondo tu proceso
            </strong>
            ; luego aplicamos la tecnología que simplifica el trabajo y asegura la continuidad de tu negocio.
          </p>

          {/* Action Buttons in High-Ticket Rounded Pills */}
          <div id="hero-cta-group" className="flex flex-wrap items-center gap-4 mb-14">
            
            {/* Primary Solid Navy Pill with Digital Blue Arrow Accent */}
            <button
              id="hero-primary-quote-cta"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center space-x-3 bg-[#00164A] hover:bg-[#0A2563] text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] hover:scale-[1.02] cursor-pointer"
            >
              <span>Solicitar una cotización</span>
              <ArrowRight className="w-4 h-4 text-[#207BF8]" />
            </button>

            {/* Secondary Crisp White Pill with subtle border and WhatsApp icon */}
            <a
              id="hero-whatsapp-cta"
              href={BRAND_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 bg-white/95 hover:bg-white text-[#00164A] border border-gray-300 text-base font-semibold px-7 py-4 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              <MessageCircle className="w-4 h-4 text-[#207BF8]" />
              <span>Escribir por WhatsApp</span>
            </a>

            {/* Subtle Services Link */}
            <button
              id="hero-explore-services-cta"
              onClick={() => scrollToSection('servicios')}
              className="inline-flex items-center justify-center text-xs font-mono font-semibold uppercase tracking-wider text-gray-600 hover:text-[#207BF8] py-2 px-4 transition-colors"
            >
              <span>Explorar servicios ↓</span>
            </button>
          </div>

          {/* Trust Pillars in a clean, elevated horizontal row */}
          <div
            id="hero-trust-pillars"
            className="pt-8 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
          >
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-[#EBF3FF] border border-[#207BF8]/25 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#207BF8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00164A] block mb-0.5">
                  Primero el proceso
                </span>
                <span className="text-xs text-gray-600">
                  Luego la tecnología necesaria, sin sobrecostos.
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-[#EBF3FF] border border-[#207BF8]/25 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#207BF8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00164A] block mb-0.5">
                  Soluciones prácticas
                </span>
                <span className="text-xs text-gray-600">
                  Aplicables desde el primer ciclo operativo.
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-[#EBF3FF] border border-[#207BF8]/25 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#207BF8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00164A] block mb-0.5">
                  Procesos + TI
                </span>
                <span className="text-xs text-gray-600">
                  Alineación entre negocio y soporte técnico.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
