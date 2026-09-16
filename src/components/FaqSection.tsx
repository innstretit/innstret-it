import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-01',
    number: '01',
    question: '¿QUÉ TIPO DE EMPRESAS PUEDEN TRABAJAR CON INNSTRET IT?',
    answer:
      'Empresas y organizaciones que buscan estructurar mejor sus procesos, digitalizar operaciones, automatizar tareas o fortalecer su gestión TI.',
  },
  {
    id: 'faq-02',
    number: '02',
    question: '¿QUÉ PROCESOS SE PUEDEN DIGITALIZAR O AUTOMATIZAR?',
    answer:
      'Procesos operativos y administrativos que actualmente requieren tareas manuales, repetitivas, dispersas o que generan cuellos de botella. Primero analizamos el proceso para determinar qué conviene mejorar y qué tecnología aplicar.',
  },
  {
    id: 'faq-03',
    number: '03',
    question: '¿INNSTRET IT IMPLEMENTA TECNOLOGÍA DIRECTAMENTE O PRIMERO EVALÚA EL PROCESO?',
    answer:
      'Primero analizamos cómo funciona la operación. A partir de ese diagnóstico identificamos oportunidades de simplificación, digitalización o automatización y definimos la solución tecnológica adecuada.',
  },
  {
    id: 'faq-04',
    number: '04',
    question: '¿QUÉ SERVICIOS OFRECE INNSTRET IT?',
    answer:
      'INNSTRET IT ofrece soluciones en siete líneas de servicio: Procesos y Digitalización, Automatización, Operaciones TI, Desarrollo Web, Redes y Networking, Venta de Equipos y Capacitación.',
  },
  {
    id: 'faq-05',
    number: '05',
    question: '¿CÓMO PUEDO SOLICITAR UNA COTIZACIÓN?',
    answer:
      'Puedes contactarnos mediante el formulario de la web o directamente por WhatsApp para contarnos qué proceso, operación o necesidad tecnológica deseas evaluar.',
  },
];

export const FaqSection: React.FC = () => {
  // Allow toggling an active item; opening one closes others for a clear scannable view
  const [openId, setOpenId] = useState<string | null>('faq-01');
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 md:py-28 bg-[#F3F3F3] border-t border-gray-200/80 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div
          className={`mb-12 md:mb-16 text-left transition-all duration-500 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-2xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              PREGUNTAS FRECUENTES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-3">
            ¿Tienes alguna duda?
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl font-normal">
            Resolvemos algunas preguntas antes de comenzar.
          </p>
        </div>

        {/* Single-Column Vertical Minimalist Accordion */}
        <div className="border-t border-gray-300/70 divide-y divide-gray-300/70">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            const delayClasses = ['delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300'][index] || 'delay-100';

            return (
              <div
                key={item.id}
                className={`py-2 transition-all duration-500 ease-out ${delayClasses} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between py-5 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8]/70 focus-visible:rounded-lg"
                  >
                    {/* Left: Monospace Step Number & Question Text */}
                    <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-5 pr-4">
                      <span className="font-mono text-xs font-bold text-[#207BF8] mt-0.5 sm:mt-0 shrink-0">
                        {item.number}
                      </span>
                      <span
                        className={`text-sm sm:text-base md:text-lg font-bold tracking-tight transition-colors duration-200 leading-snug ${
                          isOpen ? 'text-[#207BF8]' : 'text-[#00164A] group-hover:text-[#207BF8]'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Right: Fine '+' icon rotating smoothly to 'x' when open */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-250 ease-out ${
                        isOpen
                          ? 'bg-[#00164A] border-[#00164A] text-white rotate-45'
                          : 'bg-white border-gray-300/80 text-[#00164A] group-hover:border-[#207BF8] group-hover:text-[#207BF8]'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                    </div>
                  </button>
                </h3>

                {/* Animated Collapsible Panel with Permanent DOM Presence for SEO & AEO */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-250 ease-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden pl-7 sm:pl-10 pr-4">
                    <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl transition-opacity duration-200">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

