import React from 'react';

export default function Approach({ t }) {
  return (
    <section id="approach" className="section approach-section">
      <div className="approach-bg-glow" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="headline-two-tone headline-two-tone--dark">
            <span className="line-ink">{t.approach.titleLine1}</span>
            <span className="line-blue">{t.approach.titleLine2}</span>
          </h2>
          <p className="approach-intro-copy">
            {t.approach.intro}
          </p>
        </div>

        {/* 4-Step Progress Rail */}
        <div className="approach-rail">
          <div className="rail-track" aria-hidden="true" />

          {t.approach.steps.map((step) => (
            <div key={step.num} className="approach-step-card">
              <div className="approach-step-header">
                <div className="step-node">{step.num}</div>
                <div className="step-name">{step.name}</div>
              </div>

              <div className="step-question">{step.question}</div>
              <p className="step-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
