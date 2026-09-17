import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { ServicesSection } from './components/ServicesSection';
import { Methodology } from './components/Methodology';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';

const getInitialPath = (): string => {
  const params = new URLSearchParams(window.location.search);
  const pParam = params.get('p');
  if (pParam) {
    return pParam.startsWith('/') ? pParam : `/${pParam}`;
  }
  const pathname = window.location.pathname;
  if (pathname.endsWith('/privacidad') || pathname.endsWith('/privacidad/')) {
    return '/privacidad';
  }
  const hash = window.location.hash;
  if (hash === '#/privacidad' || hash === '#privacidad') {
    return '/privacidad';
  }
  return '/';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  useEffect(() => {
    // Si llegó mediante el 404.html con ?p=..., limpiar la barra de direcciones de forma amigable
    const params = new URLSearchParams(window.location.search);
    if (params.has('p')) {
      const p = params.get('p') || '';
      params.delete('p');
      const remainingQuery = params.toString() ? `?${params.toString()}` : '';
      const cleanRelative = p.startsWith('/') ? p : `/${p}`;
      window.history.replaceState({}, '', `${cleanRelative}${remainingQuery}${window.location.hash}`);
    }

    const handleLocationChange = () => {
      setCurrentPath(getInitialPath());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    const targetUrl = path === '/' ? '/' : path;
    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  // Vista de Política de Privacidad
  if (currentPath === '/privacidad') {
    return <PrivacyPolicyPage onNavigateHome={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-white text-[#00164A] flex flex-col selection:bg-[#207BF8]/20 selection:text-[#00164A]">
      {/* Top Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections with alternating #FFFFFF and #F3F3F3 rhythm */}
      <main className="flex-grow">
        {/* Hero Section (#FFFFFF) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Target Audience: ¿A quién ayudamos? (#F3F3F3) */}
        <TargetAudience onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Services Section: 4 Core Pillars (#FFFFFF) */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Methodology: Flujo de Transformación (#F3F3F3) */}
        <Methodology onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Why Choose Us: Criterio & Diferencial Editorial (#00164A Dark Pause) */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* FAQ Section: Preguntas Frecuentes (#F3F3F3) */}
        <FaqSection />

        {/* Contact & Quote Form Section (#FFFFFF) */}
        <ContactSection
          preselectedService={selectedServiceForQuote}
          onNavigatePrivacy={() => navigateTo('/privacidad')}
        />
      </main>

      {/* Footer (#00164A) */}
      <Footer onNavigate={(path) => navigateTo(path)} />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
