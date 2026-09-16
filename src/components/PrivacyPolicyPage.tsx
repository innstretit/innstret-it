import React, { useEffect } from 'react';
import { ArrowLeft, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND_DATA, SITE_CONFIG } from '../data/content';
import { Footer } from './Footer';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';

    document.title = 'Política de Privacidad | INNSTRET IT';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Consulta la Política de Privacidad de INNSTRET IT y conoce cómo tratamos la información proporcionada a través de nuestros canales de contacto.'
      );
    }
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `${SITE_CONFIG.siteUrl}/privacidad`);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      if (canonicalLink && prevCanonical) {
        canonicalLink.setAttribute('href', prevCanonical);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#00164A] flex flex-col font-sans selection:bg-[#207BF8]/20 selection:text-[#00164A]">
      {/* Simplified Corporate Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3 sm:py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] rounded-lg"
            aria-label="INNSTRET IT - Volver al inicio"
          >
            <img
              src={BRAND_DATA.logoUrl}
              alt="INNSTRET IT - Innovación y Transformación Digital"
              className="h-9 sm:h-11 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#00164A] transition-colors py-2 px-3 sm:px-4 rounded-lg border border-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#207BF8]" />
            <span>Volver al inicio</span>
          </button>
        </div>
      </header>

      {/* Main Document Body */}
      <main className="flex-grow py-12 md:py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Document Header */}
          <div className="border-b border-gray-200 pb-8 mb-10">
            <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#207BF8]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
                Marco Normativo Peruano
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00164A] tracking-tight mb-4">
              Política de Privacidad
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              En INNSTRET IT respetamos la privacidad de las personas que se comunican con nosotros. Esta Política de Privacidad explica de manera clara cómo pueden tratarse los datos personales proporcionados voluntariamente a través de nuestros canales de contacto.
            </p>

            <p className="text-xs text-gray-500 mt-4 font-mono">
              Referencia: Ley N.º 29733, Ley de Protección de Datos Personales, y su Reglamento aprobado mediante Decreto Supremo N.º 016-2024-JUS.
            </p>
          </div>

          {/* Document Sections */}
          <div className="space-y-10 text-sm sm:text-base text-gray-700 leading-relaxed">
            
            {/* 1. Responsable */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                1. Responsable
              </h2>
              <p>
                El responsable del tratamiento de los datos personales proporcionados a través de los canales institucionales es <strong>INNSTRET IT E.I.R.L.</strong>
              </p>
            </section>

            {/* 2. Datos que podemos recibir */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                2. Datos que podemos recibir
              </h2>
              <p>
                Cuando una persona decide contactar a INNSTRET IT a través del sitio web o canales directos, puede proporcionar de manera voluntaria información personal tal como:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>Nombre completo;</li>
                <li>Empresa u organización a la que representa;</li>
                <li>Número de teléfono o WhatsApp;</li>
                <li>Correo electrónico corporativo o personal;</li>
                <li>Línea de servicio de interés;</li>
                <li>Información y antecedentes incluidos en su consulta o requerimiento operativo.</li>
              </ul>
            </section>

            {/* 3. Formulario de contacto */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                3. Formulario de contacto
              </h2>
              <p className="p-4 bg-[#F3F3F3] rounded-xl border border-gray-200 text-gray-800">
                El formulario disponible en este sitio web no almacena ni envía directamente los datos ingresados a servidores de INNSTRET IT. Su función es generar un mensaje con la información proporcionada por el usuario y facilitar su envío mediante WhatsApp.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                En consecuencia, INNSTRET IT no asume la recepción formal de una solicitud hasta que el usuario efectivamente confirme y transmita el mensaje prellenado a través de su propia cuenta de WhatsApp.
              </p>
            </section>

            {/* 4. Finalidad */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                4. Finalidad
              </h2>
              <p>
                Los datos recibidos voluntariamente a través de los canales de contacto pueden utilizarse exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>Responder consultas y atender solicitudes de información;</li>
                <li>Evaluar requerimientos operativos, de digitalización o soporte TI;</li>
                <li>Preparar cotizaciones y propuestas técnicas estructuradas;</li>
                <li>Coordinar reuniones técnicas o comerciales;</li>
                <li>Brindar información sobre los servicios solicitados;</li>
                <li>Mantener comunicaciones relacionadas con el requerimiento iniciado por el usuario.</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-500">
                No realizamos envíos de publicidad masiva no solicitada ni transferimos datos personales con fines de prospección comercial a terceros.
              </p>
            </section>

            {/* 5. Uso de WhatsApp */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                5. Uso de WhatsApp
              </h2>
              <p>
                Al continuar la comunicación mediante WhatsApp, el usuario pasa a interactuar en una plataforma provista y operada por un tercero independiente (WhatsApp LLC / Meta Platforms), la cual se rige bajo sus propios términos de servicio y políticas de privacidad.
              </p>
            </section>

            {/* 6. Conservación */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                6. Conservación
              </h2>
              <p>
                Los datos recibidos serán conservados únicamente durante el tiempo necesario para atender la consulta, requerimiento o relación comercial correspondiente, y posteriormente durante los plazos que resulten aplicables cuando exista una obligación legal o contractual.
              </p>
            </section>

            {/* 7. Derechos del titular */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                7. Derechos del titular
              </h2>
              <p>
                El titular de los datos personales puede ejercer en cualquier momento los derechos de acceso, rectificación, cancelación y oposición (derechos ARCO), así como los demás derechos reconocidos por la normativa peruana de protección de datos personales.
              </p>
              <p>
                Para ejercer estos derechos o realizar consultas sobre el tratamiento de sus datos, el titular puede comunicarse a nuestro canal institucional oficial:
              </p>
              <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm">
                <Mail className="w-4 h-4 text-[#207BF8]" />
                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="font-bold text-[#00164A] hover:text-[#207BF8] transition-colors"
                >
                  {BRAND_DATA.email}
                </a>
              </div>
            </section>

            {/* 8. Seguridad */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                8. Seguridad
              </h2>
              <p>
                INNSTRET IT procura adoptar medidas técnicas y organizativas razonables para proteger la información y comunicaciones que recibe frente a accesos no autorizados, pérdidas o alteraciones indebidas.
              </p>
            </section>

            {/* 9. Cambios en la política */}
            <section className="space-y-3 pt-4 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00164A] tracking-tight">
                9. Cambios en la política
              </h2>
              <p>
                Esta Política de Privacidad puede actualizarse periódicamente cuando se modifiquen los canales de atención, funcionalidades o prácticas de tratamiento de información. Toda modificación estará disponible en este mismo apartado.
              </p>
              <p className="text-xs font-mono font-semibold text-gray-500">
                Última actualización: septiembre de 2026
              </p>
            </section>

          </div>

          {/* Back to Home Action at Bottom */}
          <div className="mt-14 pt-8 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#00164A] hover:text-[#207BF8] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#207BF8]" />
              <span>Volver a la página principal</span>
            </button>

            <a
              href={BRAND_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-600 hover:text-[#00164A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#207BF8]" />
              <span>Contacto oficial</span>
            </a>
          </div>

        </article>
      </main>

      {/* Standard Footer */}
      <Footer onNavigate={(path) => {
        if (path === '/') {
          onNavigateHome();
        } else if (path === '/privacidad') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }} />
    </div>
  );
};
