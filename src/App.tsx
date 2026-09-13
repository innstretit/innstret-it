import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Methodology } from './components/Methodology';
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

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Target Audience: ¿A quién ayudamos? */}
        <TargetAudience onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Services Section: 4 Core Pillars */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Why Choose Us: ¿Por qué elegirnos? */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Methodology: Paso a paso */}
        <Methodology onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Contact & Quote Form Section */}
        <ContactSection preselectedService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
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
