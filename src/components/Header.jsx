import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ lang, setLang, t, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a href="#hero" className="header-logo-link" onClick={(e) => handleNavClick(e, 'hero')}>
            <img
              src="/assets/nloga-logo.png"
              alt="Nloga"
              className="header-logo-img"
              width="140"
              height="48"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Main Navigation">
            <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, 'hero')}>
              {t.nav.home}
            </a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
              {t.nav.about}
            </a>
            <a href="#capabilities" className="nav-link" onClick={(e) => handleNavClick(e, 'capabilities')}>
              {t.nav.capabilities}
            </a>
            <a href="#work" className="nav-link" onClick={(e) => handleNavClick(e, 'work')}>
              {t.nav.work}
            </a>
            <a href="#ecosystem" className="nav-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
              {t.nav.ecosystem}
            </a>
            <a href="#insights" className="nav-link" onClick={(e) => handleNavClick(e, 'insights')}>
              {t.nav.insights}
            </a>
            <a href="#contact-section" className="nav-link" onClick={(e) => handleNavClick(e, 'contact-section')}>
              {t.nav.contact}
            </a>
          </nav>

          {/* Actions: Language & CTA */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-primary header-cta-btn"
              onClick={onOpenContact}
            >
              <span>{t.nav.cta}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

            <div className="lang-switch" role="group" aria-label="Language selection">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => setLang('fr')}
                aria-pressed={lang === 'fr'}
              >
                FR
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Drawer */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-links">
          <a href="#hero" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'hero')}>
            <span>{t.nav.home}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            <span>{t.nav.about}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#capabilities" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'capabilities')}>
            <span>{t.nav.capabilities}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#process" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'process')}>
            <span>{t.nav.process || "Process"}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#work" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'work')}>
            <span>{t.nav.work}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#ecosystem" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
            <span>{t.nav.ecosystem}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#insights" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'insights')}>
            <span>{t.nav.insights}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#faq" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'faq')}>
            <span>{t.nav.faq || "FAQ"}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#contact-section" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'contact-section')}>
            <span>{t.nav.contact}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mobile-bottom-actions">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', padding: '16px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
          >
            <span>{t.nav.cta}</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </>
  );
}
