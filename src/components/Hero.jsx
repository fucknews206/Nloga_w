import React from 'react';
import PenNibSwoosh from './PenNibSwoosh';
import { ChevronRight, Sparkles, Layers, Terminal } from 'lucide-react';

export default function Hero({ t, onOpenContact }) {
  const scrollToCapabilities = (e) => {
    e.preventDefault();
    const el = document.getElementById('capabilities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Decorative pen-nib swoosh motif across the background */}
      <div className="hero-swoosh-container">
        <PenNibSwoosh strokeColor="#1932E6" opacity={0.8} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-layout">
          <div className="hero-content">
            {/* Eyebrow */}
            <span className="eyebrow">{t.hero.eyebrow}</span>

            {/* Two-Line, Two-Tone Signature Headline (§1.3) */}
            <h1 className="hero-h1">
              <span className="line-ink">{t.hero.titleLine1}</span>
              <span className="line-blue">{t.hero.titleLine2}</span>
            </h1>

            {/* Supporting Copy (2 paragraphs) */}
            <div className="hero-paragraphs">
              <p className="hero-p">{t.hero.p1}</p>
              <p className="hero-p">{t.hero.p2}</p>
            </div>

            {/* CTA Row */}
            <div className="hero-ctas">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenContact}
              >
                <span>{t.hero.ctaPrimary}</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>

              <a
                href="#capabilities"
                className="text-link"
                onClick={scrollToCapabilities}
                style={{ fontSize: '1rem', padding: '10px 0' }}
              >
                <span>{t.hero.ctaSecondary}</span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Small supporting line below CTAs */}
            <div className="hero-process-line">
              {t.hero.processLine.map((step, idx) => (
                <React.Fragment key={step}>
                  <span>{step}</span>
                  {idx < t.hero.processLine.length - 1 && (
                    <span className="hero-process-chevron" aria-hidden="true">
                      <ChevronRight size={14} />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Desktop Visual Card echoing the poster composition */}
          <div className="hero-visual-card">
            <div className="hero-interactive-preview">
              <div className="hero-preview-header">
                <div className="hero-preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="hero-preview-title">
                  <Terminal size={15} />
                  <span>nloga.ecosystem</span>
                </div>
              </div>

              {/* Minimal preview mockup */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="brand-dot"></div>
                  <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.9rem' }}>
                    {t.hero.previewStatus}
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-paper-tint)',
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1px solid var(--color-line)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ height: '8px', width: '40%', backgroundColor: 'var(--color-brand-blue)', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '75%', backgroundColor: 'var(--color-line)', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '60%', backgroundColor: 'var(--color-line)', borderRadius: '4px' }}></div>
                </div>

                {/* Sub-brands badges preview */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#0E0E12', color: '#FFF' }}>
                    BUILD · Forgeware
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: 'var(--color-brand-blue)', color: '#FFF' }}>
                    DESIGN · CreativePics
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#EEF2FF', color: 'var(--color-brand-blue)', border: '1px solid #D0DBFF' }}>
                    EMPOWER · Now Just Create
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
