import React from 'react';
import { GitBranch, Repeat, ShieldAlert, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { TARGET_GROUPS } from '../data/content';

interface TargetAudienceProps {
  onOpenQuoteModal: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-[#207BF8]" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 text-[#207BF8]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#207BF8]" />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-[#207BF8]" />;
    }
  };

  return (
    <section id="que-hacemos" className="py-20 bg-[#F3F3F3]/60 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-xs mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#207BF8]">
              ¿A Quién Ayudamos?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Diseñado para organizaciones que buscan hacer sus operaciones más eficientes
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Trabajamos con empresas que necesitan estructurar sus flujos de trabajo, automatizar tareas repetitivas 
            o profesionalizar la gestión de sus servicios de TI sin fricciones innecesarias.
          </p>
        </div>

        {/* 4 Target Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {TARGET_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center mb-5 border border-[#207BF8]/20">
                  {getIcon(group.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[#00164A] mb-3">
                  {group.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    El desafío común:
                  </span>
                  <p className="text-sm text-gray-700 leading-normal">
                    {group.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#207BF8] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#207BF8] uppercase tracking-wider block mb-0.5">
                      Nuestra solución:
                    </span>
                    <p className="text-sm text-[#00164A] font-medium leading-normal">
                      {group.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside section */}
        <div className="bg-[#00164A] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-1.5">
              ¿Identificas alguno de estos desafíos en tu empresa?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Podemos evaluar la situación actual de tus procesos y plantearte una propuesta de mejora adaptada a tu realidad operativa.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 inline-flex items-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all duration-200"
          >
            <span>Solicitar una cotización</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
