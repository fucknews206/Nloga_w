import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
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
import CaseStudyModal from './components/CaseStudyModal';
import { content } from './data/content';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
        {/* 4. Core Capabilities Section (#19 - #23) */}
        <Capabilities
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
        {/* 5. Approach section */}
        <Approach
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
        {/* 6. Why Nloga Section */}
        <WhyNloga
          t={t}
        />
        {/* 7. Problems We Help Solve */}
        <Problems
          t={t}
        />
        {/* 8. Selected Work: 4 Cards with 3-Pillar Breakdown (#25 - #26) */}
        <SelectedWork
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCaseStudy={(project) => setSelectedProject(project)}
        />
        {/* 9. Nloga Ecosystem: Forgeware, CreativePics, Now Just Create (#27 - #30) */}
        <Ecosystem
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 10. A Stronger Ecosystem Statement (#10) */}
        <EcosystemStatement
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />     
        {/* 11. Who We Work With: 5 Audiences (#11) */}
        <WhoWeWorkWith
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
        {/* 12. Testimonials Section (#12) */}
        <Testimonials
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <FinalCTA
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <ProcessSection
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />        
        {/* 14. About Section: Story, Vision, Mission, Values (#14 - #18) */}
        <AboutSection
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

      {/* Case Study Drawer (Section 26) */}
      <CaseStudyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        lang={lang}
        onOpenContact={() => { setSelectedProject(null); setIsContactOpen(true); }}
      />
    </div>
  );
}
