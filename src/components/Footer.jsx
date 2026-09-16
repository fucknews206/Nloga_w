import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer({ t, onOpenContact }) {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: White logo lockup & tagline */}
          <div className="footer-col">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
              <img
                src="/assets/nloga-logo-white.png"
                alt="Nloga"
                className="footer-logo-img"
                width="140"
                height="48"
              />
            </a>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.navTitle}</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" className="footer-link" onClick={(e) => handleNavClick(e, 'hero')}>
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, 'about')}>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#capabilities" className="footer-link" onClick={(e) => handleNavClick(e, 'capabilities')}>
                  {t.nav.capabilities}
                </a>
              </li>
              <li>
                <a href="#process" className="footer-link" onClick={(e) => handleNavClick(e, 'process')}>
                  {t.nav.process || "Process"}
                </a>
              </li>
              <li>
                <a href="#work" className="footer-link" onClick={(e) => handleNavClick(e, 'work')}>
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="footer-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
                  {t.nav.ecosystem}
                </a>
              </li>
              <li>
                <a href="#insights" className="footer-link" onClick={(e) => handleNavClick(e, 'insights')}>
                  {t.nav.insights}
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link" onClick={(e) => handleNavClick(e, 'faq')}>
                  {t.nav.faq || "FAQ"}
                </a>
              </li>
              <li>
                <a href="#contact-section" className="footer-link" onClick={(e) => handleNavClick(e, 'contact-section')}>
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.ecoTitle}</h4>
            <ul className="footer-links">
              <li>
                <a href="#ecosystem" className="footer-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
                  Forgeware (Software)
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="footer-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
                  CreativePics Art (Design)
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="footer-link" onClick={(e) => handleNavClick(e, 'ecosystem')}>
                  Now Just Create (Academy)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.contactTitle}</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Mail size={16} color="#6C82FF" />
                <a href={`mailto:${t.footer.email}`} className="footer-link">
                  {t.footer.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} color="#6C82FF" />
                <a href={`tel:${t.footer.phone}`} className="footer-link">
                  {t.footer.phone}
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} color="#6C82FF" />
                <span>{t.footer.location}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>{t.footer.copyright}</div>
          <div className="footer-motto">“{t.footer.motto}”</div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy — Nloga 2026"); }}>
              {t.footer.privacy}
            </a>
            <span>·</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions — Nloga 2026"); }}>
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
