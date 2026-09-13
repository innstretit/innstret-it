import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      number: '01',
      title: 'ENTENDER',
      description: 'Comprendemos la operación.',
    },
    {
      number: '02',
      title: 'SIMPLIFICAR',
      description: 'Eliminamos complejidad innecesaria.',
    },
    {
      number: '03',
      title: 'IMPLEMENTAR',
      description: 'Aplicamos la tecnología adecuada.',
    },
  ];

  return (
    <section 
      id="por-que-elegirnos" 
      className="py-28 md:py-36 lg:py-44 bg-[#00164A] text-white relative selection:bg-[#207BF8] selection:text-white overflow-hidden"
    >
      {/* Premium Brand Background Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/agu65138/image/upload/v1789323315/backinstreet.png')`,
        }}
      />

      {/* Calibrated Gradient Veil: Lowered opacity so the 3D background artwork is distinctly visible while keeping typography clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00164A]/80 via-[#00164A]/50 to-[#00164A]/20 pointer-events-none" />
      
      {/* Subtle top & bottom edge blend into Deep Navy */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#00164A] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#00164A] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Eyebrow Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#207BF8]">
            NUESTRO CRITERIO
          </span>
        </div>

        {/* Hero Editorial Manifesto Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8 sm:mb-10">
          Primero el proceso.{' '}
          <span className="text-[#207BF8] block sm:inline">
            Luego la tecnología.
          </span>
        </h2>

        {/* Single Focused Explanatory Sentence with Contained Reading Width */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-20 md:mb-28">
          Entendemos primero cómo funciona tu operación para identificar qué simplificar, digitalizar o automatizar.
        </p>

        {/* The 3-Step Criterion Sequence: Fine typography, no nested cards, spacious flow */}
        <div className="relative mb-20 md:mb-28">
          
          {/* Extremely fine horizontal connector line in desktop */}
          <div 
            className="hidden md:block absolute top-[6px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#207BF8]/80 via-white/20 to-white/10" 
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group text-left">
                
                {/* Desktop Small Accent Node on the line */}
                <div 
                  className="hidden md:flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#00164A] border border-[#207BF8] absolute top-0 left-0 -translate-y-1/2 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
                </div>

                {/* Step Content */}
                <div className="md:pt-8">
                  {/* Step Monospace Number and Title */}
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#207BF8]">
                      {step.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-mono uppercase tracking-widest font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step One-Line Clarification */}
                  <p className="text-sm sm:text-base text-gray-300/90 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discrete High-Level CTA: No outer card or excessive wrappers */}
        <div className="pt-4">
          <button
            id="strategic-criterion-cta"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center space-x-3 bg-[#207BF8] hover:bg-[#1A6EE0] text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
          >
            <span>Conversemos sobre tu proyecto</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
