import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import { BRAND_DATA, SERVICES_DATA } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [correo, setCorreo] = useState('');
  const [servicio, setServicio] = useState(initialService || SERVICES_DATA[0].title);
  const [mensaje, setMensaje] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServicio(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 450);
  };

  const getWhatsAppQuoteUrl = () => {
    const text = `Hola INNSTRET IT, deseo cotizar el servicio de *${servicio}*.\nNombre: ${nombre}\nEmpresa: ${empresa || 'N/A'}\nWhatsApp: ${whatsapp}\nCorreo: ${correo}\nDetalles: ${mensaje || 'Solicitud de cotización de servicio'}`;
    return `https://wa.me/${BRAND_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00164A]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="quote-modal-dialog"
        className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-200 flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#00164A] text-white p-5 sm:p-6 flex items-center justify-between rounded-t-2xl relative">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#207BF8] block mb-1">
              INNSTRET IT
            </span>
            <h3 className="text-xl font-bold">
              Solicitar una Cotización
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar modal de cotización"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 animate-in fade-in-0 zoom-in-95 duration-250 ease-out">
              <div className="w-16 h-16 bg-[#EBF3FF] text-[#207BF8] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#207BF8]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#00164A] mb-2">
                ¡Cotización solicitada con éxito!
              </h4>
              <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                Hemos registrado tu solicitud para el servicio de <strong>{servicio}</strong>. Te contactaremos con la propuesta correspondiente.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppQuoteUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] active:scale-[0.99] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar datos al WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto text-xs font-semibold text-gray-600 hover:text-[#00164A] active:scale-[0.99] py-3 px-5 border border-gray-200 rounded-xl cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-600 mb-2">
                Cuéntanos sobre tu necesidad y te enviaremos una propuesta formal adaptada a los procesos de tu negocio.
              </p>

              {/* Servicio a cotizar */}
              <div>
                <label className="block text-xs font-bold text-[#00164A] mb-1">
                  Servicio principal de interés
                </label>
                <select
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150 cursor-pointer"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Diagnóstico Integral de Operaciones y TI">
                    Diagnóstico Integral de Operaciones y TI
                  </option>
                </select>
              </div>

              {/* Nombre y Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#00164A] mb-1">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Martín Vega"
                    className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00164A] mb-1">
                    Empresa <span className="text-gray-400 font-normal">[Opcional]</span>
                  </label>
                  <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Ej. Corporación Andina"
                    className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150"
                  />
                </div>
              </div>

              {/* WhatsApp y Correo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#00164A] mb-1">
                    WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+51 958 000 000"
                    className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00164A] mb-1">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="contacto@empresa.com"
                    className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150"
                  />
                </div>
              </div>

              {/* Mensaje / Requerimiento */}
              <div>
                <label className="block text-xs font-bold text-[#00164A] mb-1">
                  ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Detalles sobre los procesos a optimizar, volumen aproximado de tareas o necesidades de TI..."
                  className="w-full p-2.5 bg-[#F3F3F3] border border-gray-200 rounded-lg text-sm text-[#00164A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#207BF8]/25 focus:border-[#207BF8] transition-all duration-150"
                />
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] active:scale-[0.99] text-white font-semibold text-sm py-3.5 px-4 rounded-xl shadow transition-all duration-200 disabled:opacity-70 cursor-pointer group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Solicitar información</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

