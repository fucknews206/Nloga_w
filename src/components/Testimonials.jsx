import React from 'react';
import { MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function Testimonials({ t, onOpenContact }) {
  const data = t.testimonials;
  if (!data) return null;

  return (
    <section id="testimonials" className="section bg-tint testimonials-section">
      <div className="container">
        <div className="testimonials-card">
          <div className="testimonials-icon-wrap">
            <MessageSquareQuote size={32} />
          </div>

          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="testimonials-heading">
            {data.heading}
          </h2>

          <div className="testimonials-box">
            <div className="transparency-badge">
              <ShieldCheck size={16} />
              <span>Transparent Commitment</span>
            </div>
            <p className="testimonials-temp-heading">
              “{data.tempHeading}”
            </p>
            <p className="testimonials-temp-subtext">
              {data.tempSubtext}
            </p>
          </div>

          <button
            type="button"
            className="btn btn-outline"
            onClick={onOpenContact}
          >
            <span>{t.nav.cta}</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
