import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import AboutSection from './components/AboutSection';
import Capabilities from './components/Capabilities';
import ProcessSection from './components/ProcessSection';
import WhyNloga from './components/WhyNloga';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Problems from './components/Problems';
import SelectedWork from './components/SelectedWork';
import Ecosystem from './components/Ecosystem';
import EcosystemStatement from './components/EcosystemStatement';
import Testimonials from './components/Testimonials';
import InsightsSection from './components/InsightsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { content } from './data/content';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = content[lang] || content.en;

  return (
    <div className="app-root">
      {/* 1. Header / Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area in Complete Flow */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 3. Introduction Section ("What We Do") */}
        <Introduction
          t={t}
        />

        {/* 4. About Section: Story, Vision, Mission, Values (#14 - #18) */}
        <AboutSection
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 5. Core Capabilities Section (#19 - #23) */}
        <Capabilities
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Process Section: 6 Phases from Ambiguity to Execution (#24) */}
        <ProcessSection
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 7. Why Nloga Section */}
        <WhyNloga
          t={t}
        />

        {/* 8. Who We Work With: 5 Audiences (#11) */}
        <WhoWeWorkWith
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 9. Problems We Help Solve */}
        <Problems
          t={t}
        />

        {/* 10. Selected Work: 4 Cards with 3-Pillar Breakdown (#25 - #26) */}
        <SelectedWork
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 11. Nloga Ecosystem: Forgeware, CreativePics, Now Just Create (#27 - #30) */}
        <Ecosystem
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 12. A Stronger Ecosystem Statement (#10) */}
        <EcosystemStatement
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 13. Testimonials Section (#12) */}
        <Testimonials
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 14. Insights & Perspectives Section (#31 - #32) */}
        <InsightsSection
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 15. FAQ Section: 7 Accordions (#36) */}
        <FAQSection
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 16. Contact Page Section: Full Form with FCFA + Direct Contact (#13, #33 - #35) */}
        <ContactSection
          t={t}
        />

        {/* 17. Final Site-Wide CTA (#37) */}
        <FinalCTA
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* 18. Footer (#38) */}
      <Footer
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Contact / Project Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />
    </div>
  );
}
