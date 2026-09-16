import { ServicePillar, TargetGroup, MethodologyStep } from '../types';

export const BRAND_DATA = {
  name: 'INNSTRET IT',
  tagline: 'Innovación y Transformación Digital',
  logoUrl: 'https://res.cloudinary.com/agu65138/image/upload/v1789506565/INNSTRET_HorizontalTransparenteLogo_1.png',
  whatsapp: '+51 958 092 111',
  whatsappRaw: '51958092111',
  email: 'innstretit@gmail.com',
  colors: {
    navy: '#00164A',
    blue: '#207BF8',
    cloud: '#F3F3F3',
    white: '#FFFFFF',
  },
  whatsappLink: 'https://wa.me/51958092111?text=Hola%20INNSTRET%20IT%2C%20deseo%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20sobre%20sus%20servicios.',
};

/**
 * Configuración central de SEO, AEO y URLs canónicas.
 * Actualiza 'siteUrl' aquí cuando se conecte el dominio personalizado definitivo.
 */
export const SITE_CONFIG = {
  siteUrl: 'https://innstretit.github.io/innstret-it',
  ogImage: 'https://res.cloudinary.com/agu65138/image/upload/v1789506475/og-innstretit.jpg',
  title: 'INNSTRET IT | Procesos, Digitalización y Automatización',
  metaDescription: 'INNSTRET IT ayuda a empresas a optimizar procesos y operaciones mediante digitalización, automatización, gestión TI y soluciones tecnológicas prácticas.',
  ogDescription: 'Transformamos procesos operativos en sistemas más eficientes, estructurados y digitales.',
};

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'procesos',
    title: 'Procesos y Digitalización',
    tagline: 'Estructuración y transformación de flujos operativos',
    description:
      'Transformamos procesos manuales y dispersos en sistemas organizados, trazables y digitales que eliminan cuellos de botella.',
    items: [
      'Consultoría y optimización de procesos',
      'Digitalización de procesos',
      'Mejora de flujos operativos',
    ],
    iconName: 'Workflow',
    badge: 'Eficiencia Operativa',
    benefits: [
      'Eliminación de pasos innecesarios y duplicidad de tareas',
      'Trazabilidad y orden en el flujo operativo',
      'Documentación clara y estandarización del trabajo operativo',
    ],
    ctaText: 'Solicitar cotización de Procesos y Digitalización',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529750/Premium-panoramic-website-service-banner.png',
      alt: 'Representación conceptual de procesos empresariales y flujos de trabajo optimizados mediante digitalización estructurada',
    },
  },
  {
    id: 'automatizacion',
    title: 'Automatización',
    tagline: 'Sistemas inteligentes que reducen tareas repetitivas',
    description:
      'Identificamos tareas rutinarias y las conectamos con herramientas digitales para que tu equipo se concentre en actividades de alto valor.',
    items: [
      'Automatización de procesos y tareas',
      'Identificación de oportunidades de automatización',
      'Integración de soluciones digitales',
    ],
    iconName: 'Cpu',
    badge: 'Productividad y Precisión',
    benefits: [
      'Disminución significativa de errores operativos manuales',
      'Aceleración de tiempos de respuesta a clientes internos y externos',
      'Conexión fluida entre plataformas y fuentes de datos',
    ],
    ctaText: 'Solicitar cotización de Automatización',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529751/Premium-panoramic-website-service-banner_1.png',
      alt: 'Representación conceptual de automatización de tareas y procesos mediante flujos continuos y orquestación tecnológica',
    },
  },
  {
    id: 'operaciones-ti',
    title: 'Operaciones TI',
    tagline: 'Buenas prácticas, continuidad y gestión de servicios',
    description:
      'Fortalecemos la gestión de tus servicios tecnológicos con metodologías probadas para mitigar riesgos, resolver fallas y asegurar la continuidad del negocio.',
    items: [
      'Consultoría en operaciones de TI',
      'Gestión de incidentes',
      'Gestión de problemas',
      'Mejora de prácticas operativas',
    ],
    iconName: 'Server',
    badge: 'Continuidad de Negocio',
    benefits: [
      'Reducción del tiempo de inactividad ante fallas tecnológicas',
      'Identificación de causas raíz para prevenir incidentes recurrentes',
      'Alineación del soporte tecnológico con los objetivos de la empresa',
    ],
    ctaText: 'Solicitar cotización de Operaciones TI',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529751/Premium-panoramic-website-service-banner_2.png',
      alt: 'Representación conceptual de operaciones de tecnología, soporte de incidentes y arquitectura coordinada',
    },
  },
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    tagline: 'Landings y sistemas web orientados a objetivos de negocio.',
    description:
      'Diseñamos y desarrollamos soluciones web enfocadas en funcionalidad, experiencia de usuario y objetivos comerciales, desde páginas de aterrizaje hasta sistemas web a medida.',
    items: [
      'Landing pages',
      'Sitios web corporativos',
      'Sistemas web',
      'Implementaciones web personalizadas',
    ],
    iconName: 'Globe',
    badge: 'Soluciones Digitales',
    benefits: [
      'Presencia digital profesional',
      'Soluciones adaptadas a las necesidades del negocio',
      'Mejor experiencia para clientes y usuarios',
    ],
    ctaText: 'Solicitar cotización de Desarrollo Web',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529751/Premium-panoramic-website-service-banner_4.png',
      alt: 'Representación conceptual de diseño y desarrollo web mediante componentes y paneles digitales integrados',
    },
  },
  {
    id: 'redes-networking',
    title: 'Redes y Networking',
    tagline: 'Conectividad para una operación estable.',
    description:
      'Acompañamos a las empresas en la implementación y mejora de soluciones de conectividad que permitan una operación tecnológica más organizada, estable y segura.',
    items: [
      'Evaluación de necesidades de conectividad',
      'Implementación y mejora de redes',
      'Configuración de soluciones de networking',
    ],
    iconName: 'Network',
    badge: 'Conectividad Empresarial',
    benefits: [
      'Mayor estabilidad de conexión',
      'Mejor organización de la infraestructura de red',
      'Continuidad de la operación tecnológica',
    ],
    ctaText: 'Solicitar cotización de Redes y Networking',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529751/Premium-panoramic-website-service-banner_6.png',
      alt: 'Representación conceptual de infraestructura de conectividad y topología de redes empresariales interconectadas',
    },
  },
  {
    id: 'venta-equipos',
    title: 'Venta de Equipos',
    tagline: 'Tecnología alineada a las necesidades de tu empresa.',
    description:
      'Ayudamos a seleccionar y adquirir equipos tecnológicos adecuados para las necesidades operativas de cada organización.',
    items: [
      'Evaluación de requerimientos',
      'Recomendación de equipos',
      'Venta de soluciones tecnológicas',
    ],
    iconName: 'Laptop',
    badge: 'Soluciones Tecnológicas',
    benefits: [
      'Equipamiento adecuado al uso real',
      'Mejor decisión de compra',
      'Reducción de compras sobredimensionadas o inadecuadas',
    ],
    ctaText: 'Solicitar cotización de Equipos',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529751/Premium-panoramic-website-service-banner_5.png',
      alt: 'Representación conceptual de equipamiento informático empresarial y selección equilibrada de hardware corporativo',
    },
  },
  {
    id: 'capacitacion',
    title: 'Capacitación',
    tagline: 'Formación práctica para equipos y profesionales.',
    description:
      'Desarrollamos capacitaciones orientadas a fortalecer competencias tecnológicas, de gestión y automatización dentro de las organizaciones.',
    items: [
      'ITIL',
      'Power Automate',
      'Power Apps',
      'Power BI',
    ],
    iconName: 'GraduationCap',
    badge: 'Formación Especializada',
    benefits: [
      'Desarrollo de capacidades internas',
      'Mayor adopción de herramientas digitales',
      'Mejora de procesos y toma de decisiones',
    ],
    ctaText: 'Solicitar información sobre Capacitaciones',
    image: {
      url: 'https://res.cloudinary.com/agu65138/image/upload/q_auto,f_auto/v1789529750/Premium-panoramic-website-service-banner_3.png',
      alt: 'Representación conceptual de formación técnica y transferencia progresiva de capacidades digitales para equipos',
    },
  },
];

export const TARGET_GROUPS: TargetGroup[] = [
  {
    id: 'optimizacion',
    title: 'Empresas con procesos dispersos o lentos',
    challenge: 'Tareas descoordinadas, reprocesos continuos y falta de visibilidad en el estado de las operaciones diarias.',
    solution: 'Mapeamos, rediseñamos y digitalizamos los flujos para que el trabajo fluya con orden y rapidez.',
    iconName: 'GitBranch',
  },
  {
    id: 'automatizacion',
    title: 'Equipos saturados de tareas manuales',
    challenge: 'Carga excesiva de trabajo administrativo repetitivo (ingreso de datos, reportes manuales, correos de seguimiento).',
    solution: 'Detectamos oportunidades clave e implementamos automatizaciones que liberan horas de trabajo humano.',
    iconName: 'Repeat',
  },
  {
    id: 'ti-gestion',
    title: 'Organizaciones con operaciones TI reactivas',
    challenge: 'Incidentes tecnológicos recurrentes, atención caótica de requerimientos y falta de procedimientos estandarizados.',
    solution: 'Estructuramos la gestión de incidentes y problemas con buenas prácticas para garantizar estabilidad.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'crecimiento',
    title: 'Empresas en proceso de digitalización',
    challenge: 'Deseo de modernizarse pero incertidumbre sobre qué herramientas adoptar sin desperdiciar recursos.',
    solution: 'Asesoría tecnológica práctica y objetiva: primero entendemos tu negocio, luego definimos la tecnología adecuada.',
    iconName: 'Building2',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Entendimiento & Diagnóstico',
    subtitle: 'Primero el negocio y el proceso',
    description:
      'Analizamos la operación real de tu empresa, cómo fluye la información, dónde se producen cuellos de botella y cuáles son las necesidades prioritarias.',
    outcome: 'Mapeo claro de la situación actual y puntos de mejora prioritarios.',
  },
  {
    step: '02',
    title: 'Diseño del Flujo Óptimo',
    subtitle: 'Estructura antes de la herramienta',
    description:
      'Simplificamos y optimizamos los pasos operativos antes de digitalizar, garantizando que no se automaticen ineficiencias existentes.',
    outcome: 'Arquitectura de procesos optimizada y plan de acción tecnológico.',
  },
  {
    step: '03',
    title: 'Digitalización & Automatización',
    subtitle: 'Implementación práctica y medible',
    description:
      'Configuramos e integramos las soluciones digitales idóneas, automatizando tareas y estableciendo los estándares operativos de TI.',
    outcome: 'Sistemas operativos funcionando con fluidez y trazabilidad.',
  },
  {
    step: '04',
    title: 'Capacitación & Acompañamiento',
    subtitle: 'Garantía de adopción y sostenibilidad',
    description:
      'Capacitamos a tu equipo en las nuevas prácticas y herramientas, asegurando que la mejora se mantenga sólida en el tiempo.',
    outcome: 'Equipos autónomos y procesos sostenibles a largo plazo.',
  },
];

export const DIFFERENTIAL_POINTS = [
  {
    title: 'Primero el proceso, luego la tecnología',
    description:
      'No buscamos incorporar tecnología solo por utilizar tecnología. Entendemos a fondo la necesidad operativa para luego aplicar la herramienta que verdaderamente simplifique el trabajo.',
  },
  {
    title: 'Trilogía integral de capacidades',
    description:
      'Combinamos conocimiento profundo de procesos, operaciones de negocio y tecnología de la información. Esta perspectiva 360° evita soluciones aisladas o parches temporales.',
  },
  {
    title: 'Soluciones prácticas y aplicables',
    description:
      'Diseñamos propuestas orientadas a mejorar la forma real en que trabaja tu organización, con impacto directo en la eficiencia, sin complejidad técnica innecesaria.',
  },
  {
    title: 'Enfoque en orden, confianza y continuidad',
    description:
      'Construimos operaciones estructuradas que reducen incidentes, disminuyen el estrés operativo y brindan certeza al liderazgo empresarial.',
  },
];
