import React from 'react';
import PenNibSwoosh from './PenNibSwoosh';

export default function FinalCTA({ t, onOpenContact }) {
  return (
    <section className="final-cta-section">
      {/* Background pen-nib flourish at low opacity */}
      <div className="final-cta-swoosh">
        <PenNibSwoosh strokeColor="#FFFFFF" opacity={0.3} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="final-cta-content">
          <h2 className="final-cta-heading">
            {t.finalCta.title}
          </h2>
          <p className="final-cta-subtitle">
            {t.finalCta.subtitle}
          </p>
          <button
            type="button"
            className="btn btn-white final-cta-btn"
            onClick={onOpenContact}
          >
            <span>{t.finalCta.btnText}</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
