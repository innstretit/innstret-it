import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_DATA, SERVICES_DATA } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    whatsapp: '',
    correo: '',
    servicioInteres: preselectedService || 'Todos / Evaluación General',
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hola INNSTRET IT, mi nombre es ${formData.nombre || 'un interesado'}${
      formData.empresa ? ` de la empresa ${formData.empresa}` : ''
    }. Deseo cotizar o solicitar información sobre: ${formData.servicioInteres}. Mensaje: ${formData.mensaje || 'Deseo coordinar una reunión'}. Mi correo es: ${formData.correo || 'no especificado'}.`;
    return `https://wa.me/${BRAND_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 bg-[#F3F3F3] px-3.5 py-1 rounded-full border border-gray-200 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#207BF8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00164A]">
              Contacto & Cotizaciones
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Iniciemos una conversación sobre la eficiencia de tu empresa
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Completa el formulario para recibir una cotización a medida o contáctanos de inmediato por WhatsApp. 
            Evaluamos tu operación para proponerte soluciones directas, aplicables y viables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Quotation Form */}
          <div className="lg:col-span-7 bg-[#F3F3F3]/70 rounded-2xl p-6 sm:p-10 border border-gray-200/90 shadow-2xs">
            {isSubmitted ? (
              <div id="contact-form-success" className="py-8 text-center bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-[#EBF3FF] text-[#207BF8] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#207BF8]/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#00164A] mb-2">
                  ¡Solicitud enviada exitosamente!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Gracias por comunicarte con <strong className="text-[#00164A]">INNSTRET IT</strong>. Revisaremos tu requerimiento y te contactaremos a la brevedad.
                </p>

                <div className="bg-[#F3F3F3] p-5 rounded-xl text-left max-w-md mx-auto mb-6 text-xs text-gray-700 space-y-2 border border-gray-200">
                  <p><strong>Nombre:</strong> {formData.nombre}</p>
                  {formData.empresa && <p><strong>Empresa:</strong> {formData.empresa}</p>}
                  <p><strong>WhatsApp:</strong> {formData.whatsapp}</p>
                  <p><strong>Correo:</strong> {formData.correo}</p>
                  <p><strong>Servicio:</strong> {formData.servicioInteres}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar copia por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nombre: '',
                        empresa: '',
                        whatsapp: '',
                        correo: '',
                        servicioInteres: 'Todos / Evaluación General',
                        mensaje: '',
                      });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-semibold text-gray-600 hover:text-[#00164A] py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <span>Enviar otra consulta</span>
                  </button>
                </div>
              </div>
            ) : (
              <form id="quote-contact-form" onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-[#00164A]">
                    Solicitud de Cotización
                  </h3>
                  <p className="text-xs text-gray-500">
                    Ingresa tus datos para preparar una propuesta adaptada a tu requerimiento.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="contact-nombre" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-3.5 py-2.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Empresa [Opcional] */}
                  <div>
                    <label htmlFor="contact-empresa" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      Empresa <span className="text-gray-400 font-normal">[Opcional]</span>
                    </label>
                    <input
                      type="text"
                      id="contact-empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-3.5 py-2.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+51 987 654 321"
                      className="w-full px-3.5 py-2.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="contact-correo" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      Correo corporativo o personal <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-correo"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Servicio de interés */}
                <div>
                  <label htmlFor="contact-servicio" className="block text-xs font-bold text-[#00164A] mb-1.5">
                    Línea de servicio prioritaria
                  </label>
                  <select
                    id="contact-servicio"
                    name="servicioInteres"
                    value={formData.servicioInteres}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                  >
                    <option value="Todos / Evaluación General">Evaluación integral de procesos y TI</option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.badge})
                      </option>
                    ))}
                  </select>
                </div>

                {/* ¿En qué podemos ayudarte? */}
                <div>
                  <label htmlFor="contact-mensaje" className="block text-xs font-bold text-[#00164A] mb-1.5">
                    ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe los procesos que deseas optimizar, tareas que deseas automatizar o soporte TI requerido..."
                    className="w-full p-3.5 bg-[#F3F3F3]/60 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] focus-visible:ring-offset-2 disabled:opacity-75"
                  >
                    {isLoading ? (
                      <span>Enviando información...</span>
                    ) : (
                      <>
                        <span>Solicitar información</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
                  <span>Tus datos se tratan con total confidencialidad para fines informativos.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Priority Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* WhatsApp Priority Channel */}
            <div className="bg-[#00164A] text-white rounded-2xl p-7 shadow-sm border border-[#00164A]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#207BF8] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-gray-300 block">
                    Canal Directo
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Atención Inmediata por WhatsApp
                  </h4>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                Escríbenos directamente a nuestro canal oficial para coordinar una reunión o resolver consultas operativas.
              </p>

              <div className="bg-white/10 p-3.5 rounded-xl mb-5 flex items-center justify-between">
                <span className="text-xs text-gray-300">Número oficial:</span>
                <span className="text-sm font-bold font-mono text-white">{BRAND_DATA.whatsapp}</span>
              </div>

              <a
                id="direct-whatsapp-card-link"
                href={BRAND_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar por WhatsApp</span>
              </a>
            </div>

            {/* Institutional Email Contact */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#207BF8]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-gray-400 block">
                    Correo Institucional
                  </span>
                  <a 
                    href={`mailto:${BRAND_DATA.email}`}
                    className="text-sm font-bold text-[#00164A] hover:text-[#207BF8] transition-colors"
                  >
                    {BRAND_DATA.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Envíanos términos de referencia (TDR) o solicitudes técnicas formales.
              </p>
            </div>

            {/* Protocol Next Steps */}
            <div className="bg-[#F3F3F3]/80 rounded-2xl p-6 border border-gray-200 shadow-2xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-3">
                Protocolo de Respuesta
              </span>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-md bg-white text-[#207BF8] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] border border-gray-200">1</span>
                  <span>Evaluamos el alcance preliminar de tu solicitud de procesos o TI.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-md bg-white text-[#207BF8] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] border border-gray-200">2</span>
                  <span>Coordinamos una breve reunión para relevar detalles operativos.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-md bg-white text-[#207BF8] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] border border-gray-200">3</span>
                  <span>Te presentamos una propuesta técnica y económica estructurada.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
