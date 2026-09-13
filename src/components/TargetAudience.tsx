import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenQuoteModal }) => {
  const cards = [
    {
      id: 'procesos',
      badgeText: 'Diagnóstico prioritario',
      title: 'Procesos Manuales',
      subtitle: 'Mapeo & Estandarización',
      description:
        'Eliminamos la dispersión de información y los cuellos de botella. Mapeamos flujos de trabajo críticos y estructuramos registros con trazabilidad clara y roles definidos.',
      cta: 'Estructurar procesos',
      serviceId: 'procesos',
      bgClasses:
        'bg-gradient-to-br from-white via-white to-[#F0F6FE] border-blue-100/90 hover:border-[#207BF8]/50 shadow-sm hover:shadow-xl',
      // 3D Visual in Brand Colors: Deep Navy & Digital Blue Organic Workflow Token
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-44 h-44 sm:w-56 sm:h-56 select-none pointer-events-none drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brandTokenGrad" x1="40" y1="30" x2="200" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="45%" stopColor="#207BF8" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <radialGradient id="brandTokenLight" cx="35%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#DBEAFE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#207BF8" stopOpacity="0" />
            </radialGradient>
            <filter id="brandTokenShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="12" stdDeviation="16" floodColor="#00164A" floodOpacity="0.25" />
            </filter>
          </defs>
          {/* Main 3D curved pebble/token */}
          <path
            d="M75 40C140 25 210 65 215 130C220 185 175 220 120 215C60 210 30 160 40 100C45 65 55 45 75 40Z"
            fill="url(#brandTokenGrad)"
            filter="url(#brandTokenShadow)"
          />
          {/* Specular clay highlight */}
          <path
            d="M75 40C140 25 210 65 215 130C220 185 175 220 120 215C60 210 30 160 40 100C45 65 55 45 75 40Z"
            fill="url(#brandTokenLight)"
          />
          {/* Inner flow contours */}
          <path
            d="M80 60C130 48 185 80 190 130C195 170 160 195 120 192C75 188 55 150 62 105C66 78 72 63 80 60Z"
            stroke="white"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />
        </svg>
      ),
    },
    {
      id: 'automatizacion',
      badgeText: 'Operación continua',
      title: 'Tareas Repetitivas',
      subtitle: 'Automatización Operativa',
      description:
        'Liberamos a tu equipo del trabajo mecánico. Automatizamos transcripción de datos, conciliaciones, avisos, integraciones de software y reportes de gestión periódicos.',
      cta: 'Automatizar tareas',
      serviceId: 'automatizacion',
      bgClasses:
        'bg-gradient-to-br from-white via-[#F8FAFD] to-[#EBF3FF] border-[#D6E6FA] hover:border-[#207BF8]/50 shadow-sm hover:shadow-xl',
      // 3D Visual in Brand Colors: Digital Blue Shield with 3D White Checkmark
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-44 h-44 sm:w-56 sm:h-56 select-none pointer-events-none drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shieldBrandGrad" x1="40" y1="20" x2="200" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#70AAFE" />
              <stop offset="40%" stopColor="#207BF8" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="shieldInnerBrand" x1="60" y1="40" x2="180" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#0A2563" />
            </linearGradient>
            <radialGradient id="shieldSpecularBrand" cx="35%" cy="25%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#207BF8" stopOpacity="0" />
            </radialGradient>
            <filter id="shieldShadowBrand" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="12" stdDeviation="16" floodColor="#00164A" floodOpacity="0.28" />
            </filter>
            <filter id="checkShadowBrand" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#00164A" floodOpacity="0.35" />
            </filter>
          </defs>
          {/* Outer 3D Shield */}
          <path
            d="M120 28L195 55C195 135 165 185 120 215C75 185 45 135 45 55L120 28Z"
            fill="url(#shieldBrandGrad)"
            filter="url(#shieldShadowBrand)"
          />
          {/* Inner Inset Shield */}
          <path
            d="M120 44L180 66C180 130 155 172 120 196C85 172 60 130 60 66L120 44Z"
            fill="url(#shieldInnerBrand)"
          />
          {/* Specular soft light */}
          <path
            d="M120 28L195 55C195 135 165 185 120 215C75 185 45 135 45 55L120 28Z"
            fill="url(#shieldSpecularBrand)"
          />
          {/* Thick 3D Rounded Checkmark */}
          <path
            d="M95 118L112 135L150 96"
            stroke="white"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#checkShadowBrand)"
          />
        </svg>
      ),
    },
    {
      id: 'operaciones-ti',
      badgeText: 'Control de estabilidad',
      title: 'Gestión TI Desordenada',
      subtitle: 'Continuidad & Soporte',
      description:
        'Ordenamos la infraestructura tecnológica y el soporte diario. Establecemos protocolos claros de atención de incidencias, prevención de fallas y gobernanza operativa.',
      cta: 'Estabilizar TI',
      serviceId: 'operaciones-ti',
      bgClasses:
        'bg-gradient-to-br from-white via-white to-[#F0F6FE] border-blue-100/90 hover:border-[#207BF8]/50 shadow-sm hover:shadow-xl',
      // 3D Visual in Brand Colors: Stacked Isometric Tech Blocks in Digital Blue & Deep Navy
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-44 h-44 sm:w-56 sm:h-56 select-none pointer-events-none drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cubeTopBrand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="cubeLeftBrand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#207BF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="cubeRightBrand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2563" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <filter id="cubeShadowBrand" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="12" stdDeviation="15" floodColor="#00164A" floodOpacity="0.25" />
            </filter>
          </defs>
          <g filter="url(#cubeShadowBrand)">
            {/* Base block 1 (Bottom Left) */}
            <g transform="translate(45, 115)">
              <polygon points="45,5 85,25 45,45 5,25" fill="url(#cubeTopBrand)" />
              <polygon points="5,25 45,45 45,85 5,65" fill="url(#cubeLeftBrand)" />
              <polygon points="45,45 85,25 85,65 45,85" fill="url(#cubeRightBrand)" />
            </g>
            {/* Base block 2 (Bottom Right) */}
            <g transform="translate(105, 115)">
              <polygon points="45,5 85,25 45,45 5,25" fill="url(#cubeTopBrand)" />
              <polygon points="5,25 45,45 45,85 5,65" fill="url(#cubeLeftBrand)" />
              <polygon points="45,45 85,25 85,65 45,85" fill="url(#cubeRightBrand)" />
            </g>
            {/* Top hero block (Elevated) */}
            <g transform="translate(75, 45)">
              <polygon points="45,5 85,25 45,45 5,25" fill="#DBEAFE" />
              <polygon points="5,25 45,45 45,85 5,65" fill="url(#cubeLeftBrand)" />
              <polygon points="45,45 85,25 85,65 45,85" fill="url(#cubeRightBrand)" />
              {/* Highlight edge */}
              <line x1="45" y1="5" x2="5" y2="25" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
              <line x1="45" y1="5" x2="85" y2="25" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: 'digitalizacion-criterio',
      badgeText: 'Criterio & Viabilidad',
      title: 'Digitalización con Criterio',
      subtitle: 'Consultoría Tecnológica',
      description:
        'Acompañamos a tu empresa para elegir la tecnología adecuada. Evaluamos viabilidad técnica, costos reales y retorno antes de adquirir software sobredimensionado.',
      cta: 'Evaluar adopción',
      serviceId: 'consultoria',
      bgClasses:
        'bg-gradient-to-br from-white via-[#F8FAFD] to-[#EBF3FF] border-[#D6E6FA] hover:border-[#207BF8]/50 shadow-sm hover:shadow-xl',
      // 3D Visual in Brand Colors: Digital Blue Sphere & Connected Orbital Ring
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-44 h-44 sm:w-56 sm:h-56 select-none pointer-events-none drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="globeBrandGrad" x1="40" y1="60" x2="190" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="45%" stopColor="#207BF8" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <radialGradient id="globeBrandLight" cx="35%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#207BF8" stopOpacity="0" />
            </radialGradient>
            <filter id="globeBrandShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="12" stdDeviation="16" floodColor="#00164A" floodOpacity="0.25" />
            </filter>
          </defs>
          <g filter="url(#globeBrandShadow)">
            {/* 3D Tech Globe in Brand Gradient */}
            <circle cx="115" cy="140" r="70" fill="url(#globeBrandGrad)" />
            <circle cx="115" cy="140" r="70" fill="url(#globeBrandLight)" />
            
            {/* 3D Orbital Tech Rings */}
            <ellipse
              cx="115"
              cy="140"
              rx="88"
              ry="28"
              transform="rotate(-25 115 140)"
              stroke="white"
              strokeWidth="3.5"
              strokeOpacity="0.65"
              fill="none"
            />
            {/* Orbital node satellite 1 */}
            <circle cx="185" cy="108" r="8" fill="white" filter="drop-shadow(0 2px 4px #00164A)" />
            {/* Orbital node satellite 2 */}
            <circle cx="45" cy="172" r="6" fill="#93C5FD" />
            
            {/* Specular curved meridian */}
            <path
              d="M115 70C145 90 155 180 115 210"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.35"
              strokeDasharray="4 4"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section id="que-hacemos" className="py-20 md:py-28 bg-[#F3F3F3] border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-2xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              Matriz de Transformación
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            De la fricción operativa al control de sistemas
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Identificamos el origen del desorden operativo en tu empresa y aplicamos la solución 
            técnica precisa para convertir cuellos de botella en flujos estructurados y eficientes.
          </p>
        </div>

        {/* 2x2 Card Grid strictly using INNSTRET IT Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onOpenQuoteModal(card.serviceId)}
              className={`group relative min-h-[300px] sm:min-h-[320px] rounded-[28px] p-7 sm:p-9 border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${card.bgClasses}`}
            >
              {/* 3D Visual Asset Anchored at Right Edge (in Brand Colors) */}
              <div className="absolute -right-6 sm:-right-4 -bottom-6 sm:-bottom-4 group-hover:scale-105 transition-transform duration-500 ease-out">
                {card.visual}
              </div>

              {/* Top Row: Translucent Status Pill in Brand Palette */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs bg-white/90 border border-blue-200/60 text-[#00164A] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#207BF8]" />
                  <span>{card.badgeText}</span>
                </div>
              </div>

              {/* Middle: Title & Structured Copy (constrained width leaving space for 3D visual) */}
              <div className="relative z-10 max-w-[260px] sm:max-w-[320px] text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00164A] tracking-tight mb-3 group-hover:text-[#207BF8] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom: Action link in Navy with Digital Blue Hover & Arrow */}
              <div className="relative z-10 pt-6">
                <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#00164A] group-hover:text-[#207BF8] transition-colors">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#207BF8] group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-7 bg-white rounded-2xl border border-gray-200/90 shadow-2xs gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-[#00164A] block mb-1">
              ¿Tu empresa se identifica con alguno de estos escenarios operativos?
            </span>
            <span className="text-xs text-gray-500">
              Evaluamos la arquitectura operativa de tu negocio y delimitamos el alcance exacto sin compromisos.
            </span>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 inline-flex items-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] shadow-xs cursor-pointer"
          >
            <span>Cotizar diagnóstico inicial</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#207BF8]" />
          </button>
        </div>

      </div>
    </section>
  );
};
