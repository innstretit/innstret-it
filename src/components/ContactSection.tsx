import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle2, Building, User, HelpCircle, ArrowRight } from 'lucide-react';
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

    // Simulate reliable local processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hola INNSTRET IT, mi nombre es ${formData.nombre || 'un interesado'}${
      formData.empresa ? ` de la empresa ${formData.empresa}` : ''
    }. Deseo solicitar información sobre ${formData.servicioInteres}. Mensaje: ${formData.mensaje || 'Deseo cotizar sus servicios'}. Mi correo es: ${formData.correo || 'no especificado'}.`;
    return `https://wa.me/${BRAND_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const generateMailto = () => {
    const subject = `Solicitud de información / cotización - ${formData.empresa || formData.nombre || 'Nuevo contacto'}`;
    const body = `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa || 'N/A'}\nWhatsApp: ${formData.whatsapp}\nCorreo: ${formData.correo}\nServicio de interés: ${formData.servicioInteres}\n\nDetalle / Consulta:\n${formData.mensaje}`;
    return `mailto:${BRAND_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F3F3F3]/70 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full border border-gray-200 shadow-xs mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#207BF8]">
              Contacto & Cotizaciones
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00164A] tracking-tight mb-4">
            Iniciemos una conversación sobre la eficiencia de tu empresa
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Completa el formulario breve para solicitar una cotización o escríbenos directamente por WhatsApp. 
            Te responderemos con una propuesta orientada a tu realidad operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form (Requested in brief item 13) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/90 shadow-md">
            {isSubmitted ? (
              <div id="contact-form-success" className="py-8 text-center">
                <div className="w-16 h-16 bg-[#EBF3FF] text-[#207BF8] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#207BF8]/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#00164A] mb-2">
                  ¡Solicitud recibida correctamente!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                  Muchas gracias por contactar a <strong className="text-[#00164A]">INNSTRET IT</strong>. Revisaremos tus requerimientos y nos comunicaremos contigo a la brevedad.
                </p>

                <div className="bg-[#F3F3F3] p-5 rounded-xl text-left max-w-md mx-auto mb-6 text-xs text-gray-700 space-y-1.5 border border-gray-200">
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
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar también por WhatsApp</span>
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
              <form id="quote-contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-[#00164A]">
                    Solicitud de Cotización e Información
                  </h3>
                  <p className="text-xs text-gray-500">
                    Por favor completa los siguientes datos para preparar tu cotización.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="contact-nombre" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full pl-3.5 pr-3.5 py-2.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                      />
                    </div>
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
                      placeholder="Ej. Distribuidora del Norte SAC"
                      className="w-full pl-3.5 pr-3.5 py-2.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
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
                      className="w-full pl-3.5 pr-3.5 py-2.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="contact-correo" className="block text-xs font-bold text-[#00164A] mb-1.5">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-correo"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="carlos@empresa.com"
                      className="w-full pl-3.5 pr-3.5 py-2.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Servicio de interés */}
                <div>
                  <label htmlFor="contact-servicio" className="block text-xs font-bold text-[#00164A] mb-1.5">
                    Servicio o área de interés
                  </label>
                  <select
                    id="contact-servicio"
                    name="servicioInteres"
                    value={formData.servicioInteres}
                    onChange={handleChange}
                    className="w-full pl-3.5 pr-8 py-2.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
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
                    placeholder="Cuéntanos brevemente sobre los procesos, tareas manuales o retos de TI que deseas mejorar en tu organización..."
                    className="w-full p-3.5 bg-[#F3F3F3]/50 border border-gray-200 rounded-lg text-sm text-[#00164A] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Button (Exact text requested in brief: "Solicitar información") */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:ring-offset-2 disabled:opacity-75"
                  >
                    {isLoading ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Solicitar información</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[11px] text-gray-500">
                  Respetamos tu privacidad. Tus datos se utilizarán exclusivamente para brindarte información comercial solicitada.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Information */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="bg-[#00164A] text-white rounded-2xl p-7 shadow-lg border border-[#00164A]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#207BF8] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-300 block">
                    Canal Rápido
                  </span>
                  <h4 className="text-lg font-bold">
                    Escríbenos por WhatsApp
                  </h4>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                ¿Prefieres una atención inmediata? Escríbenos directamente a nuestro WhatsApp oficial para agendar una llamada o resolver tus dudas.
              </p>

              <div className="bg-white/10 p-3.5 rounded-xl mb-5 flex items-center justify-between">
                <span className="text-xs text-gray-200">WhatsApp Oficial:</span>
                <span className="text-sm font-bold font-mono text-white">{BRAND_DATA.whatsapp}</span>
              </div>

              <a
                id="direct-whatsapp-card-link"
                href={BRAND_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Iniciar chat en WhatsApp</span>
              </a>
            </div>

            {/* Email Direct Card */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#207BF8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block">
                    Correo Principal
                  </span>
                  <h4 className="text-base font-bold text-[#00164A]">
                    {BRAND_DATA.email}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-4 leading-normal">
                Puedes enviarnos directamente requerimientos técnicos, términos de referencia (TDR) o solicitudes institucionales.
              </p>
              <a
                id="direct-email-link"
                href={`mailto:${BRAND_DATA.email}`}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#207BF8] hover:text-[#1664D1]"
              >
                <span>Enviar correo directo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Commitments Box */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#00164A] mb-3">
                ¿Qué sucede tras tu solicitud?
              </h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Evaluamos el tipo de servicio y alcance preliminar de tu solicitud.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Te contactamos por WhatsApp o correo para coordinar detalles y entender tu proceso.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#207BF8] flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Te enviamos una cotización formal y propuesta de trabajo a medida.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
