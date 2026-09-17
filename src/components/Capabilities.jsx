import React from 'react';

// Custom abstract geometric SVG glyphs matching §1.5 style
function ProductSoftwareGlyph() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <polyline points="16 18 22 12 16 6"/>
       <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

function UXDesignGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="m12 19 7-7 3 3-7 7-3-3z"/>
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="m2 2 7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  );
}

function BrandCreativeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <path d="M12 22c1.25 0 2.25-1 2.25-2.25 0-.61-.24-1.16-.63-1.57-.4-.4-.63-.96-.63-1.55 0-1.24 1-2.25 2.25-2.25H17c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8-5.52 0-10 4.03-10 9 0 4.87 3.5 9.14 8.13 9.87.32.05.6.24.87.5"/>
      <circle cx="6.5" cy="11.5" r="1.5"/>
      <circle cx="9.5" cy="7.5" r="1.5"/>
      <circle cx="14.5" cy="7.5" r="1.5"/>
      <circle cx="17.5" cy="11.5" r="1.5"/>
    </svg>
  );
}

function TrainingKnowledgeGlyph() {
  return (
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <path d="M22 10 12 5 2 10l10 5 10-5Z"/>
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>
      <path d="M22 10v6"/>
    </svg>
  );
}

const glyphs = [
  <ProductSoftwareGlyph key="ps" />,
  <UXDesignGlyph key="ux" />,
  <BrandCreativeGlyph key="bc" />,
  <TrainingKnowledgeGlyph key="tk" />
];

export default function Capabilities({ t, onOpenContact }) {
  const handleAction = (item) => {
    if (item.num === '04' || (item.link && item.link.includes('Now Just Create'))) {
      const el = document.getElementById('nowjustcreate') || document.getElementById('ecosystem');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onOpenContact();
  };

  return (
    <section id="capabilities" className="section bg-tint">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">{t.capabilities.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{t.capabilities.titleLine1}</span>{' '}
            <span className="line-blue">{t.capabilities.titleLine2}</span>
          </h2>
          <p className="section-header-intro">
            {t.capabilities.intro}
          </p>
        </div>

        
        <div className="capabilities-grid">
          {t.capabilities.items.map((item, idx) => {
            const subItems = item.areas || item.services;
            const isAreas = Boolean(item.areas || item.num === '04');
            const ctaLabel = item.link || (item.cta ? item.cta.replace(/\s*→\s*$/, '') : '');

            return (
              <div key={item.num} className="capability-card">
                <div>
                  <div className="capability-card-top">
                    <div className="capability-icon-wrap">
                      {glyphs[idx]}
                    </div>
                    <span className="capability-number">{item.num}</span>
                  </div>

                  <h3 className="capability-title">{item.title}</h3>
                  <div className="capability-subtitle">{item.subtitle}</div>
                  <p className="capability-description">{item.desc}</p>

                  {/* Sub-services / Areas List (§20 - §23) */}
                  {subItems && subItems.length > 0 && (
                    <div className="capability-services-wrap">
                      <div className="capability-services-label">
                        {isAreas
                          ? (t.capabilities.areasLabel || 'Areas')
                          : (t.capabilities.servicesLabel || 'Services')}
                      </div>
                      <ul className="capability-services-list">
                        {subItems.map((service, sIdx) => (
                          <li key={sIdx} className="capability-service-item">
                            <span className="capability-service-dot" aria-hidden="true" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="capability-footer">
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => handleAction(item)}
                  >
                    <span>{ctaLabel}</span>
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
