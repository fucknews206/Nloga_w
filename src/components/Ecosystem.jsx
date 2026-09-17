import React from 'react';
import { Terminal, PenTool, GraduationCap } from 'lucide-react';

export default function Ecosystem({ t, onOpenContact }) {
  return (
    <section id="ecosystem" className="section ecosystem-section bg-paper">
      <div className="container ecosystem-container">
        {/* Section Header (§27) */}
        <div className="section-header">
          {t.ecosystem.eyebrow && <span className="eyebrow">{t.ecosystem.eyebrow}</span>}
          <h2 className="headline-two-tone">
            <span className="line-ink">{t.ecosystem.titleLine1}</span>{' '}
            <span className="line-blue">{t.ecosystem.titleLine2}</span>
          </h2>
          {Array.isArray(t.ecosystem.copy) ? (
            t.ecosystem.copy.map((p, pIdx) => (
              <p key={pIdx} className="section-header-intro">
                {p}
              </p>
            ))
          ) : (
            <p className="section-header-intro">
              {t.ecosystem.intro}
            </p>
          )}
          {t.ecosystem.pillars && t.ecosystem.pillars.length > 0 && (
            <div className="ecosystem-pillars-banner">
              {t.ecosystem.pillars.map((pillar, pIdx) => (
                <span key={pIdx} className="ecosystem-pillar-item">
                  {pillar}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Recreating the 3 Stacked Pill Cards from the Framed Poster */}
        <div className="ecosystem-cards-stack">
          {/* 1. FORGEWARE (BUILD - Dark Card) (§28) */}
          <div id="forgeware" className="eco-card eco-card--forgeware">
            <div className="eco-card-content">
              <div className="eco-header-badge">
                <span className="eco-pill-badge eco-tag">BUILD</span>
                <span style={{ fontSize: '0.82rem', letterSpacing: '0.1em', opacity: 0.7 }}>FORGEWARE</span>
              </div>

              <h3 className="eco-title">Forgeware</h3>
              <div className="eco-subhead">{t.ecosystem.cards[0].tag}</div>
              <p className="eco-desc">{t.ecosystem.cards[0].desc}</p>

              {/* Capabilities List (§28) */}
              {t.ecosystem.cards[0].capabilities && (
                <div className="eco-capabilities-wrap">
                  <div className="eco-capabilities-title">
                    {t.ecosystem.capabilitiesLabel || 'Capabilities'}
                  </div>
                  <ul className="eco-capabilities-list">
                    {t.ecosystem.cards[0].capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="eco-capability-item">
                        <span className="eco-cap-dot" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="eco-action">
                {t.ecosystem.cards[0].ctaPrefix && (
                  <div className="eco-cta-prefix">{t.ecosystem.cards[0].ctaPrefix}</div>
                )}
                <button
                  type="button"
                  className="text-link"
                  onClick={onOpenContact}
                >
                  <span>{t.ecosystem.cards[0].link}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              <div style={{ fontSize: '0.74rem', letterSpacing: '0.08em', color: '#7E7E90', marginTop: '12px' }}>
                {t.ecosystem.cards[0].subtext}
              </div>
            </div>

            {/* Illustration panel right */}
            <div className="eco-visual-panel">
              <div
                style={{
                  width: '100%',
                  background: '#15151C',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#435BFF', fontWeight: 700, fontSize: '0.85rem' }}>
                    <Terminal size={16} />
                    <span>forgeware.dev</span>
                  </div>
                  <span style={{ color: '#27C93F', fontSize: '0.75rem', fontFamily: 'monospace' }}>● active</span>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#B0B0C0', lineHeight: 1.6 }}>
                  <div><span style={{ color: '#435BFF' }}>const</span> system = <span style={{ color: '#FFBD2E' }}>createArchitecture</span>();</div>
                  <div>system.<span style={{ color: '#27C93F' }}>scale</span>({'{'} reliability: <span style={{ color: '#FF708F' }}>true</span> {'}'});</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CREATIVEPICS ART (DESIGN - Royal Blue Card) (§29) */}
          <div id="creativepics" className="eco-card eco-card--creativepics">
            <div className="eco-card-content">
              <div className="eco-header-badge">
                <span className="eco-pill-badge eco-tag">DESIGN</span>
                <span style={{ fontSize: '0.82rem', letterSpacing: '0.1em', opacity: 0.9 }}>CREATIVEPICS ART</span>
              </div>

              <h3 className="eco-title">CreativePics Art</h3>
              <div className="eco-subhead">{t.ecosystem.cards[1].tag}</div>
              <p className="eco-desc">{t.ecosystem.cards[1].desc}</p>

              {/* Capabilities List (§29) */}
              {t.ecosystem.cards[1].capabilities && (
                <div className="eco-capabilities-wrap">
                  <div className="eco-capabilities-title">
                    {t.ecosystem.capabilitiesLabel || 'Capabilities'}
                  </div>
                  <ul className="eco-capabilities-list">
                    {t.ecosystem.cards[1].capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="eco-capability-item">
                        <span className="eco-cap-dot" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="eco-action">
                {t.ecosystem.cards[1].ctaPrefix && (
                  <div className="eco-cta-prefix">{t.ecosystem.cards[1].ctaPrefix}</div>
                )}
                <button
                  type="button"
                  className="text-link"
                  onClick={onOpenContact}
                >
                  <span>{t.ecosystem.cards[1].link}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              <div style={{ fontSize: '0.74rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginTop: '12px' }}>
                {t.ecosystem.cards[1].subtext}
              </div>
            </div>

            {/* Illustration panel right */}
            <div className="eco-visual-panel">
              <div
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  color: '#FFFFFF'
                }}
              >
                <PenTool size={36} />
                <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.04em' }}>
                  VISUAL IDENTITY & UX
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ height: '8px', width: '28px', background: '#FFFFFF', borderRadius: '4px' }}></span>
                  <span style={{ height: '8px', width: '48px', background: 'rgba(255,255,255,0.5)', borderRadius: '4px' }}></span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NOW JUST CREATE (EMPOWER - Soft Tint Card) (§30) */}
          <div id="nowjustcreate" className="eco-card eco-card--nowjustcreate">
            <div className="eco-card-content">
              <div className="eco-header-badge">
                <span className="eco-pill-badge eco-tag">EMPOWER</span>
                <span style={{ fontSize: '0.82rem', letterSpacing: '0.1em', opacity: 0.8 }}>NOW JUST CREATE</span>
              </div>

              <h3 className="eco-title">Now Just Create</h3>
              <div className="eco-subhead">{t.ecosystem.cards[2].tag}</div>
              <p className="eco-desc">{t.ecosystem.cards[2].desc}</p>

              {/* Capabilities / Areas List (§30) */}
              {(t.ecosystem.cards[2].areas || t.ecosystem.cards[2].capabilities) && (
                <div className="eco-capabilities-wrap">
                  <div className="eco-capabilities-title">
                    {t.ecosystem.areasLabel || 'Areas of Focus'}
                  </div>
                  <ul className="eco-capabilities-list">
                    {(t.ecosystem.cards[2].areas || t.ecosystem.cards[2].capabilities).map((cap, cIdx) => (
                      <li key={cIdx} className="eco-capability-item">
                        <span className="eco-cap-dot" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {t.ecosystem.cards[2].closingStatement && (
                <div className="eco-closing-quote">
                  "{t.ecosystem.cards[2].closingStatement}"
                </div>
              )}

              <div className="eco-action">
                <button
                  type="button"
                  className="text-link"
                  onClick={onOpenContact}
                >
                  <span>{t.ecosystem.cards[2].link}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              <div style={{ fontSize: '0.74rem', letterSpacing: '0.08em', color: '#6A7599', marginTop: '12px' }}>
                {t.ecosystem.cards[2].subtext}
              </div>
            </div>

            {/* Illustration panel right with vertical badge */}
            <div className="eco-visual-panel">
              <div
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  border: '1.5px solid #D7DFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  position: 'relative'
                }}
              >
                <span className="vertical-pill-tag">NOW JUST CREATE</span>
                <GraduationCap size={36} color="var(--color-brand-blue)" />
                <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-ink)' }}>
                  Learn. Create. Grow.
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-ink-soft)', textAlign: 'center' }}>
                  Mentorship & Practical Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
