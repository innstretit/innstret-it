export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  iconName: 'Workflow' | 'Cpu' | 'Server' | 'GraduationCap';
  badge: string;
  benefits: string[];
}

export interface TargetGroup {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  iconName: 'Building2' | 'Repeat' | 'GitBranch' | 'ShieldAlert';
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
}

export interface ContactFormData {
  nombre: string;
  empresa: string;
  whatsapp: string;
  correo: string;
  servicioInteres: string;
  mensaje: string;
}
