import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EcosystemStatement({ t, onOpenContact }) {
  const data = t.statement;
  if (!data) return null;

  return (
    <section className="section bg-tint ecosystem-statement-section">
      <div className="container">
        <div className="statement-card">
          <div className="statement-header">
            <span className="eyebrow">THE BIGGER PICTURE</span>
            <h2 className="statement-heading">
              {data.heading}
            </h2>
          </div>

          <div className="statement-grid">
            {/* Left: What is a deliverable */}
            <div className="statement-col statement-col-deliverables">
              <span className="statement-label">The Deliverables</span>
              <ul className="statement-list">
                {data.deliverables.map((item, idx) => (
                  <li key={idx} className="statement-item deliverable-item">
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: The Shift / Bridge */}
            <div className="statement-bridge">
              <div className="bridge-icon">
                <ArrowRight size={20} />
              </div>
              <p className="bridge-text">{data.bridge}</p>
            </div>

            {/* Right: What it enables */}
            <div className="statement-col statement-col-enables">
              <span className="statement-label highlight">What It Enables</span>
              <div className="enables-chips-grid">
                {data.enables.map((item, idx) => (
                  <div key={idx} className="enable-chip">
                    <CheckCircle2 size={16} className="chip-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="statement-footer">
            <p className="statement-tagline">{data.tagline}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenContact}
            >
              <span>{t.nav.cta}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
