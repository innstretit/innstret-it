import React, { useState } from 'react';
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

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

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
        <ContactSection preselectedService={selectedServiceForQuote} />
      </main>

      {/* Footer (#00164A) */}
      <Footer />

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
