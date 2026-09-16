import React from 'react';

export default function Introduction({ t }) {
  return (
    <section id="intro" className="section bg-paper">
      <div className="container">
        <div className="intro-grid">
          {/* Left Column (Sticky on desktop) */}
          <div className="intro-left-sticky">
            <h2 className="headline-two-tone">
              <span className="line-ink">{t.intro.titleLine1}</span>
              <span className="line-blue">{t.intro.titleLine2}</span>
            </h2>
          </div>

          {/* Right Column: Stacked punchy lines */}
          <div className="intro-body">
            {t.intro.points.map((point, idx) => (
              <div key={idx} className="intro-line-item">
                {point}
              </div>
            ))}

            <p className="intro-lead-highlight">
              {t.intro.leadParagraph}
            </p>

            <div className="intro-closing">
              <p>{t.intro.closing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
