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
    { label: 'Metodología', href: '#metodologia' },
    { label: '¿Por Qué Elegirnos?', href: '#por-que-elegirnos' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-[#00164A] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-2xs border-b border-gray-100 py-1 sm:py-1.5'
          : 'bg-white/85 backdrop-blur-md border-b border-gray-200/50 py-1.5 sm:py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[58px] sm:min-h-[66px] lg:min-h-[72px]">
          
          {/* Logo container strictly using provided Cloudinary image, scaled to occupy almost entire navbar height */}
          <a
            id="brand-logo-link"
            href="#hero-section"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8]/50 rounded-lg py-0"
            aria-label="INNSTRET IT - Inicio"
          >
            <img
              id="brand-logo-img"
              src={BRAND_DATA.logoUrl}
              alt="INNSTRET IT"
              className="h-12 sm:h-14 md:h-16 lg:h-18 max-h-[74px] w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-sm font-medium text-[#00164A]/80 hover:text-[#00164A] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] rounded group"
              >
                <span>{link.label}</span>
                {/* Discrete expanding line accent on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#207BF8] transition-all duration-250 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons: Single quote button */}
          <div className="hidden lg:flex items-center">
            <button
              id="navbar-quote-button"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8] group"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#207BF8] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full text-[#00164A] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#207BF8]"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white text-[#00164A] border-b border-gray-200 px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
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

            <div className="pt-3 border-t border-gray-100">
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#00164A] hover:bg-[#0A2563] text-white font-semibold py-3.5 px-4 rounded-full shadow-xs text-sm cursor-pointer"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-4 h-4 text-[#207BF8]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
