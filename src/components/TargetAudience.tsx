import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TargetAudienceProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenQuoteModal }) => {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

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
        'bg-white hover:bg-white border-gray-200/90 hover:border-[#207BF8]/40 shadow-2xs hover:shadow-md',
      visualPositionTablet: 'md:right-1 md:bottom-2 lg:right-2 lg:bottom-2',
      visualPositionDesktop: 'xl:-right-4 xl:-bottom-4',
      visualSizeClasses: 'w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56',
      // 3D Visual in Brand Colors: Microarchitecture 1 (DISPERSIÓN → ESTRUCTURA)
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full select-none pointer-events-none drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="p1-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFF6FF" />
              <stop offset="60%" stopColor="#DBEAFE" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <linearGradient id="p1-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="p1-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2563" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="p1-rail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#207BF8" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#207BF8" stopOpacity="0.8" />
            </linearGradient>
            <filter id="p1-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#00164A" floodOpacity="0.18" />
            </filter>
          </defs>

          <g filter="url(#p1-shadow)">
            {/* Docking Foundation Base Plane */}
            <polygon points="105,162 165,127 220,158 160,193" fill="#00164A" fillOpacity="0.07" />
            <polygon points="105,162 165,127 220,158 160,193" stroke="#207BF8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />

            {/* Trajectory Guide Rails (Dispersion -> Alignment Vector) */}
            <line x1="50" y1="72" x2="135" y2="132" stroke="url(#p1-rail)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="78" y1="46" x2="155" y2="120" stroke="url(#p1-rail)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="95" y1="98" x2="175" y2="144" stroke="#207BF8" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 3" />

            {/* Dispersed Module A (Isolated, Upper Left, Offset) */}
            <g transform="translate(0, 0)">
              <polygon points="38,50 56,40 74,50 56,60" fill="url(#p1-top)" />
              <polygon points="38,50 56,60 56,76 38,66" fill="url(#p1-left)" />
              <polygon points="56,60 74,50 74,66 56,76" fill="url(#p1-right)" />
              <polyline points="38,50 56,60 74,50" stroke="white" strokeWidth="1.2" strokeOpacity="0.75" />
              <line x1="56" y1="60" x2="56" y2="76" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
            </g>

            {/* Dispersed Module B (In Mid-Transit along alignment channel) */}
            <g transform="translate(0, 0)">
              <polygon points="80,82 98,72 116,82 98,92" fill="url(#p1-top)" />
              <polygon points="80,82 98,92 98,107 80,97" fill="url(#p1-left)" />
              <polygon points="98,92 116,82 116,97 98,107" fill="url(#p1-right)" />
              <polyline points="80,82 98,92 116,82" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
              <line x1="98" y1="92" x2="98" y2="107" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
            </g>

            {/* Docked Modular System (Perfect Structure Locked in Order) */}
            {/* Base Block 1 */}
            <g>
              <polygon points="125,150 145,138 165,150 145,162" fill="url(#p1-top)" />
              <polygon points="125,150 145,162 145,182 125,170" fill="url(#p1-left)" />
              <polygon points="145,162 165,150 165,170 145,182" fill="url(#p1-right)" />
              <polyline points="125,150 145,162 165,150" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
              <line x1="145" y1="162" x2="145" y2="182" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
            </g>

            {/* Base Block 2 (Flush beside Block 1) */}
            <g>
              <polygon points="145,138 165,126 185,138 165,150" fill="url(#p1-top)" />
              <polygon points="145,138 165,150 165,170 145,158" fill="url(#p1-left)" />
              <polygon points="165,150 185,138 185,158 165,170" fill="url(#p1-right)" />
              <polyline points="145,138 165,150 185,138" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
              <line x1="165" y1="150" x2="165" y2="170" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
            </g>

            {/* Stacked Anchor Block 3 (Unifying Key Block) */}
            <g>
              <polygon points="135,130 155,118 175,130 155,142" fill="url(#p1-top)" />
              <polygon points="135,130 155,142 155,158 135,146" fill="url(#p1-left)" />
              <polygon points="155,142 175,130 175,146 155,158" fill="url(#p1-right)" />
              <polyline points="135,130 155,142 175,130" stroke="white" strokeWidth="1.4" strokeOpacity="0.9" />
              <line x1="155" y1="142" x2="155" y2="158" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
            </g>

            {/* Precision Coordinate Markers */}
            <circle cx="155" cy="118" r="2.5" fill="#207BF8" />
            <circle cx="175" cy="130" r="2" fill="white" />
            <circle cx="98" cy="72" r="2" fill="#207BF8" />
          </g>
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
        'bg-white hover:bg-white border-gray-200/90 hover:border-[#207BF8]/40 shadow-2xs hover:shadow-md',
      visualPositionTablet: 'md:right-1 md:bottom-2 lg:right-2 lg:bottom-2',
      visualPositionDesktop: 'xl:-right-4 xl:-bottom-4',
      visualSizeClasses: 'w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56',
      // 3D Visual in Brand Colors: Microarchitecture 2 (REPETICIÓN → FLUJO)
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full select-none pointer-events-none drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="p2-track-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFF6FF" />
              <stop offset="40%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#207BF8" />
            </linearGradient>
            <linearGradient id="p2-track-wall" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2563" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="p2-step-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="p2-step-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#207BF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="p2-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <filter id="p2-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#00164A" floodOpacity="0.18" />
            </filter>
          </defs>

          <g filter="url(#p2-shadow)">
            {/* Ground Plane Shadow */}
            <ellipse cx="130" cy="170" rx="75" ry="32" fill="#00164A" fillOpacity="0.08" />

            {/* Continuous Architectural Ribbon Track (Outer Dimensional Wall) */}
            <path
              d="M106,106 C140,84 185,82 208,110 C225,132 210,165 178,178 C144,192 98,184 75,160 C58,142 66,122 106,106 Z"
              fill="url(#p2-track-wall)"
            />

            {/* Continuous Architectural Ribbon Track (Elevated 3D Surface) */}
            <path
              d="M106,94 C140,72 185,70 208,98 C225,120 210,153 178,166 C144,180 98,172 75,148 C58,130 66,110 106,94 Z"
              fill="url(#p2-track-top)"
              stroke="white"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />

            {/* Inner Core Well */}
            <path
              d="M115,108 C138,94 168,92 182,110 C194,124 182,142 162,150 C140,158 110,154 98,140 C88,128 94,116 115,108 Z"
              fill="#00164A"
              fillOpacity="0.95"
            />

            {/* Continuous Streamline Flow Guides */}
            <path
              d="M106,94 C140,72 185,70 208,98 C225,120 210,153 178,166 C144,180 98,172 75,148"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="10 8"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* Repetitive Discrete Cycle Steps (Entering Sequence Merging into Flow) */}
            {/* Step 1: Initial discrete manual unit */}
            <g transform="translate(-10, -5)">
              <polygon points="45,64 58,56 71,64 58,72" fill="url(#p2-step-top)" />
              <polygon points="45,64 58,72 58,85 45,77" fill="url(#p2-step-left)" />
              <polygon points="58,72 71,64 71,77 58,85" fill="url(#p2-track-wall)" />
              <polyline points="45,64 58,72 71,64" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
            </g>

            {/* Step 2: Cadence step aligning */}
            <g transform="translate(5, 5)">
              <polygon points="58,74 71,66 84,74 71,82" fill="url(#p2-step-top)" />
              <polygon points="58,74 71,82 71,95 58,87" fill="url(#p2-step-left)" />
              <polygon points="71,82 84,74 84,87 71,95" fill="url(#p2-track-wall)" />
              <polyline points="58,74 71,82 84,74" stroke="white" strokeWidth="1" strokeOpacity="0.75" />
            </g>

            {/* Step 3: Accelerating segment entering the continuous conduit */}
            <g transform="translate(20, 15)">
              <polygon points="71,84 84,76 97,84 84,92" fill="url(#p2-step-top)" />
              <polygon points="71,84 84,92 84,105 71,97" fill="url(#p2-step-left)" />
              <polygon points="84,92 97,76 97,89 84,105" fill="url(#p2-track-wall)" />
              <polyline points="71,84 84,92 97,84" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
            </g>

            {/* Dynamic Kinetic Flow Capsule / Gliding High-Speed Pulse */}
            <g transform="translate(178, 126)">
              <polygon points="0,0 14,-8 28,0 14,8" fill="url(#p2-pulse)" />
              <polygon points="0,0 14,8 14,18 0,10" fill="#207BF8" />
              <polygon points="14,8 28,0 28,10 14,18" fill="#0A2563" />
              <polyline points="0,0 14,8 28,0" stroke="white" strokeWidth="1.4" />
            </g>

            {/* Flow Trajectory Accents */}
            <circle cx="208" cy="98" r="2.5" fill="white" />
            <circle cx="178" cy="166" r="2" fill="#207BF8" />
          </g>
        </svg>
      ),
    },
    {
      id: 'operaciones-ti',
      badgeText: 'Control de estabilidad',
      title: 'Gestión TI Desordenada',
      subtitle: 'Continuidad & Soporte',
      description:
        'Organizamos la gestión operativa de TI y establecemos prácticas claras para la atención de incidencias, problemas y continuidad de la operación.',
      cta: 'Estabilizar TI',
      serviceId: 'operaciones-ti',
      bgClasses:
        'bg-white hover:bg-white border-gray-200/90 hover:border-[#207BF8]/40 shadow-2xs hover:shadow-md',
      visualPositionTablet: 'md:-right-1 md:bottom-1 lg:right-0 lg:bottom-1',
      visualPositionDesktop: 'xl:-right-4 xl:-bottom-4',
      visualSizeClasses: 'w-24 h-24 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-42 lg:h-42 xl:w-56 xl:h-56',
      // 3D Visual in Brand Colors: Microarchitecture 3 (FRAGMENTACIÓN → CONEXIÓN)
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full select-none pointer-events-none drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="p3-hub-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFF6FF" />
              <stop offset="50%" stopColor="#DBEAFE" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <linearGradient id="p3-hub-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="p3-hub-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2563" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="p3-truss" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#207BF8" />
            </linearGradient>
            <filter id="p3-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#00164A" floodOpacity="0.18" />
            </filter>
          </defs>

          <g filter="url(#p3-shadow)">
            {/* Base Coordinate Floor Shadow */}
            <polygon points="70,175 120,145 190,175 140,205" fill="#00164A" fillOpacity="0.08" />

            {/* Connecting Architectural Trusses / Unifying Bus Channels */}
            {/* Truss 1: Connecting Satellite A (Incidents/Support) to Central Hub */}
            <polygon points="62,70 100,110 100,118 62,78" fill="#207BF8" fillOpacity="0.85" />
            <line x1="62" y1="70" x2="100" y2="110" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="62" y1="74" x2="100" y2="114" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />

            {/* Truss 2: Connecting Satellite B (Continuity) to Central Hub */}
            <polygon points="57,156 95,142 95,150 57,164" fill="#1D4ED8" fillOpacity="0.85" />
            <line x1="57" y1="156" x2="95" y2="142" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="57" y1="160" x2="95" y2="146" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />

            {/* Truss 3: Connecting Satellite C (Operations/Governance) to Central Hub */}
            <polygon points="192,70 142,108 142,116 192,78" fill="#0A2563" fillOpacity="0.9" />
            <line x1="192" y1="70" x2="142" y2="108" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="192" y1="74" x2="142" y2="112" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />

            {/* Peripheral Satellite Node A (Upper Left) */}
            <g>
              <polygon points="45,60 62,50 79,60 62,70" fill="url(#p3-hub-top)" />
              <polygon points="45,60 62,70 62,86 45,76" fill="url(#p3-hub-left)" />
              <polygon points="62,70 79,60 79,76 62,86" fill="url(#p3-hub-right)" />
              <polyline points="45,60 62,70 79,60" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
              <circle cx="62" cy="70" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Peripheral Satellite Node B (Lower Left) */}
            <g>
              <polygon points="40,146 57,136 74,146 57,156" fill="url(#p3-hub-top)" />
              <polygon points="40,146 57,156 57,172 40,162" fill="url(#p3-hub-left)" />
              <polygon points="57,156 74,146 74,162 57,172" fill="url(#p3-hub-right)" />
              <polyline points="40,146 57,156 74,146" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
              <circle cx="57" cy="156" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Peripheral Satellite Node C (Upper Right) */}
            <g>
              <polygon points="175,60 192,50 209,60 192,70" fill="url(#p3-hub-top)" />
              <polygon points="175,60 192,70 192,86 175,76" fill="url(#p3-hub-left)" />
              <polygon points="192,70 209,60 209,76 192,86" fill="url(#p3-hub-right)" />
              <polyline points="175,60 192,70 209,60" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
              <circle cx="192" cy="70" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Central Unified Coordination Core / Matrix Hub */}
            <g>
              {/* Core Monolith Body */}
              <polygon points="120,95 152,113 120,131 88,113" fill="url(#p3-hub-top)" />
              <polygon points="88,113 120,131 120,175 88,157" fill="url(#p3-hub-left)" />
              <polygon points="120,131 152,113 152,157 120,175" fill="url(#p3-hub-right)" />

              {/* Bevel highlights */}
              <polyline points="88,113 120,131 152,113" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" />
              <line x1="120" y1="131" x2="120" y2="175" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />

              {/* Central Optical Coordination Nexus */}
              <ellipse cx="120" cy="113" rx="14" ry="8" fill="#FFFFFF" fillOpacity="0.9" />
              <ellipse cx="120" cy="113" rx="8" ry="4.5" fill="#207BF8" />
              <circle cx="120" cy="113" r="2.5" fill="#00164A" />

              {/* Joint Connection Rings */}
              <circle cx="100" cy="114" r="3" fill="#60A5FA" />
              <circle cx="95" cy="144" r="3" fill="#60A5FA" />
              <circle cx="142" cy="112" r="3" fill="#60A5FA" />
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
        'Acompañamos a tu empresa a elegir la tecnología adecuada. Evaluamos la necesidad, viabilidad y alcance antes de incorporar herramientas innecesarias o sobredimensionadas.',
      cta: 'Evaluar adopción',
      serviceId: 'consultoria',
      bgClasses:
        'bg-white hover:bg-white border-gray-200/90 hover:border-[#207BF8]/40 shadow-2xs hover:shadow-md',
      visualPositionTablet: 'md:right-0 md:bottom-2 lg:right-1 lg:bottom-2',
      visualPositionDesktop: 'xl:-right-4 xl:-bottom-4',
      visualSizeClasses: 'w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56',
      // 3D Visual in Brand Colors: Microarchitecture 4 (COMPLEJIDAD → DECISIÓN ESTRUCTURADA)
      visual: (
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full select-none pointer-events-none drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="p4-solid-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#DBEAFE" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <linearGradient id="p4-solid-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="p4-solid-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2563" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="p4-gate-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#00164A" />
            </linearGradient>
            <linearGradient id="p4-scanning" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#207BF8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#207BF8" stopOpacity="0.1" />
            </linearGradient>
            <filter id="p4-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#00164A" floodOpacity="0.18" />
            </filter>
          </defs>

          <g filter="url(#p4-shadow)">
            {/* Ground Shadow Base */}
            <polygon points="90,175 160,140 225,170 155,205" fill="#00164A" fillOpacity="0.08" />

            {/* Multiple Incoming Complex Paths (Entering from Left) */}
            {/* Path A (Upper excessive/unvetted tool - dissolves at filter) */}
            <g>
              <polygon points="38,55 52,47 66,55 52,63" fill="#DBEAFE" fillOpacity="0.6" />
              <polygon points="38,55 52,63 52,73 38,65" fill="#207BF8" fillOpacity="0.5" />
              <polygon points="52,63 66,55 66,65 52,73" fill="#00164A" fillOpacity="0.5" />
              <line x1="52" y1="63" x2="96" y2="92" stroke="#207BF8" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
            </g>

            {/* Path B (Lower unviable option - terminates at portal) */}
            <g>
              <polygon points="45,142 59,134 73,142 59,150" fill="#DBEAFE" fillOpacity="0.6" />
              <polygon points="45,142 59,150 59,160 45,152" fill="#207BF8" fillOpacity="0.5" />
              <polygon points="59,150 73,142 73,152 59,160" fill="#00164A" fillOpacity="0.5" />
              <line x1="59" y1="142" x2="98" y2="128" stroke="#207BF8" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
            </g>

            {/* Primary Evaluated Channel entering Criterion Portal */}
            <g>
              <polygon points="42,95 58,86 74,95 58,104" fill="#DBEAFE" fillOpacity="0.8" />
              <polygon points="42,95 58,104 58,116 42,107" fill="#207BF8" />
              <polygon points="58,104 74,95 74,107 58,116" fill="#00164A" />
              <polyline points="42,95 58,104 74,95" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="58" y1="104" x2="98" y2="114" stroke="#207BF8" strokeWidth="1.5" />
            </g>

            {/* The Criterion & Viability Decision Portal (Central Filter Gateway) */}
            <g>
              {/* Upright Portal Arch Frame */}
              <polygon points="96,72 108,65 120,72 108,79" fill="#DBEAFE" />
              <polygon points="96,72 108,79 108,160 96,153" fill="url(#p4-gate-body)" />
              <polygon points="108,79 120,72 120,153 108,160" fill="#00164A" />
              <polyline points="96,72 108,79 120,72" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
              <line x1="108" y1="79" x2="108" y2="160" stroke="#207BF8" strokeWidth="1.2" />

              {/* Diagnostic Evaluation Scanning Aperture */}
              <polygon points="98,88 118,78 118,144 98,154" fill="url(#p4-scanning)" stroke="#207BF8" strokeWidth="1" strokeOpacity="0.7" />
              <line x1="98" y1="116" x2="118" y2="106" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" />
              <circle cx="108" cy="111" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Emerging Single Structured Decision (The Grounded, Defined Monolith) */}
            <g>
              {/* Single Dominant Tower Emerging Forward */}
              <polygon points="148,82 184,62 220,82 184,102" fill="url(#p4-solid-top)" />
              <polygon points="148,82 184,102 184,175 148,155" fill="url(#p4-solid-left)" />
              <polygon points="184,102 220,82 220,155 184,175" fill="url(#p4-solid-right)" />

              {/* Specular Crisp Bevels */}
              <polyline points="148,82 184,102 220,82" stroke="white" strokeWidth="1.6" strokeOpacity="0.95" />
              <line x1="184" y1="102" x2="184" y2="175" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />

              {/* Inner Architectural Precision Grooves / Calibration Lines */}
              <line x1="148" y1="106" x2="184" y2="126" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="184" y1="126" x2="220" y2="106" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
              
              <line x1="148" y1="130" x2="184" y2="150" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="184" y1="150" x2="220" y2="130" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

              {/* Convergence Crown Anchor */}
              <circle cx="184" cy="62" r="3" fill="#207BF8" />
              <circle cx="184" cy="102" r="3" fill="white" />
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="que-hacemos"
      className="py-20 md:py-28 bg-[#F3F3F3] border-y border-gray-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div
          className={`max-w-3xl mb-14 text-left transition-all duration-500 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
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

        {/* 2x2 Card Grid with Staggered Entrance and Micro-elevations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {cards.map((card, idx) => {
            const delayClasses = [
              'delay-100',
              'delay-200',
              'delay-300',
              'delay-400',
            ][idx] || 'delay-100';

            return (
              <div
                key={card.id}
                onClick={() => onOpenQuoteModal(card.serviceId)}
                className={`group relative min-h-[340px] sm:min-h-[350px] md:min-h-[410px] lg:min-h-[380px] xl:min-h-[320px] rounded-[24px] p-6 sm:p-7 md:p-6 lg:p-7 xl:p-9 border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  card.bgClasses
                } ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                } ${delayClasses}`}
              >
                {/* Tablet & Desktop Anchored 3D Visual with individual coordinates and size reduction (20-30%) */}
                <div
                  className={`hidden md:block absolute ${card.visualPositionTablet} ${card.visualPositionDesktop} ${card.visualSizeClasses} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out will-change-transform pointer-events-none select-none`}
                >
                  <div
                    className={`w-full h-full transition-all duration-500 ease-out ${
                      isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
                    }`}
                  >
                    {card.visual}
                  </div>
                </div>

                {/* Top Row: Translucent Status Pill in Brand Palette */}
                <div className="relative z-10 flex items-center justify-between mb-3.5">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 border border-gray-200/90 text-[#00164A] shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#207BF8]" />
                    <span>{card.badgeText}</span>
                  </div>
                </div>

                {/* Middle: Title & Structured Copy with Guaranteed Safe Zone away from 3D visual */}
                <div className="relative z-10 text-left md:max-w-[65%] lg:max-w-[66%] xl:max-w-[320px]">
                  <h3 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#00164A] tracking-tight mb-2.5 sm:mb-3 group-hover:text-[#207BF8] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Area: Action CTA on left, and Mobile-only (< md) safe visual container on right */}
                <div className="relative z-10 pt-4 sm:pt-6 mt-auto flex items-end justify-between gap-3">
                  <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#00164A] group-hover:text-[#207BF8] transition-colors duration-200">
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#207BF8] group-hover:translate-x-1 transition-transform duration-200" />
                  </div>

                  {/* Mobile Dedicated Illustration (< md): Sits cleanly beside/below CTA in the bottom-right corner, NEVER under text */}
                  <div className="md:hidden shrink-0 w-24 h-24 sm:w-28 sm:h-28 -mb-2 -mr-2">
                    <div
                      className={`w-full h-full transition-all duration-500 ease-out ${
                        isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
                      }`}
                    >
                      {card.visual}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between p-6 sm:p-7 bg-white rounded-2xl border border-gray-200/90 shadow-2xs gap-4 transition-all duration-500 ease-out delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
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
            className="shrink-0 inline-flex items-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] active:scale-[0.99] text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] shadow-xs cursor-pointer group"
          >
            <span>Evaluar mi operación</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#207BF8] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
};

