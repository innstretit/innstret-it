import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '¿Qué Hacemos?', href: '#que-hacemos' },
    { label: 'Servicios', href: '#servicios' },
    { label: '¿Por Qué Elegirnos?', href: '#por-que-elegirnos' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo container strictly using provided Cloudinary image without duplicating text */}
          <a
            id="brand-logo-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#207BF8]/50 rounded-lg p-1"
            aria-label="INNSTRET IT - Inicio"
          >
            <img
              id="brand-logo-img"
              src={BRAND_DATA.logoUrl}
              alt="INNSTRET IT - Procesos · Digitalización · Automatización"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 hover:opacity-95"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#00164A]/80 hover:text-[#207BF8] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="navbar-whatsapp-direct"
              href={BRAND_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#00164A]/70 hover:text-[#207BF8] px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              title="Escríbenos por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#207BF8]" />
              <span>+51 958 092 111</span>
            </a>

            <button
              id="navbar-quote-button"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#207BF8] focus:ring-offset-2"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#00164A] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#00164A] hover:text-[#207BF8] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2.5">
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#207BF8] hover:bg-[#1664D1] text-white font-semibold py-3 px-4 rounded-lg shadow-sm text-sm"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="mobile-whatsapp-btn"
                href={BRAND_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] text-white font-medium py-3 px-4 rounded-lg text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#207BF8]" />
                <span>WhatsApp: +51 958 092 111</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
