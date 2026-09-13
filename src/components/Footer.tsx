import React from 'react';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_DATA, SERVICES_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#00164A] text-white pt-16 pb-12 border-t border-[#0A2563]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column strictly using the provided logo without duplicating brand text */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-white p-2.5 rounded-xl inline-block mb-4 shadow-sm">
              <img
                src={BRAND_DATA.logoUrl}
                alt="INNSTRET IT - Procesos · Digitalización · Automatización"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm mb-6">
              Consultoría tecnológica enfocada en ayudar a empresas a mejorar sus procesos y operaciones mediante digitalización, automatización y buenas prácticas de gestión TI.
            </p>

            <div className="text-xs text-gray-400 font-mono">
              <p>Tecnología para simplificar el trabajo</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#207BF8] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#que-hacemos" className="hover:text-white transition-colors">
                  ¿A quién ayudamos?
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-white transition-colors">
                  ¿Por qué nosotros?
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Solicitar cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#207BF8] mb-4">
              Servicios Especializados
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#207BF8] mb-4">
              Canales Directos
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={BRAND_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-[#207BF8] shrink-0" />
                <div>
                  <span className="block font-medium">WhatsApp:</span>
                  <span className="font-bold text-white font-mono">{BRAND_DATA.whatsapp}</span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_DATA.email}`}
                className="flex items-center space-x-2.5 text-gray-300 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/10"
              >
                <Mail className="w-4 h-4 text-[#207BF8] shrink-0" />
                <div>
                  <span className="block font-medium">Correo:</span>
                  <span className="font-bold text-white break-all">{BRAND_DATA.email}</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} INNSTRET IT. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Volver al inicio"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#207BF8]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
