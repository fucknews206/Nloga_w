import React, { useState } from 'react';
import { Search, Compass, Palette, Code2, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

export default function ProcessSection({ t, onOpenContact }) {
  const data = t.process;
  if (!data) return null;

  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Search key="discover" size={22} />,
    <Compass key="define" size={22} />,
    <Palette key="design" size={22} />,
    <Code2 key="build" size={22} />,
    <Rocket key="launch" size={22} />,
    <RefreshCw key="evolve" size={22} />
  ];

  return (
    <section id="process" className="section bg-tint process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
          <p className="section-header-intro">
            {data.intro}
          </p>
        </div>

        {/* 6 Process Steps Grid */}
        <div className="process-grid">
          {data.steps.map((step, idx) => (
            <div
              key={step.num || idx}
              className={`process-card ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="process-card-top">
                <span className="process-num">{step.num}</span>
                <div className="process-icon-wrap">
                  {stepIcons[idx % stepIcons.length]}
                </div>
              </div>

              <h3 className="process-step-name">{step.name}</h3>
              <p className="process-step-desc">{step.desc}</p>

              <div className="process-output-box">
                <span className="output-label">OUTPUT</span>
                <p className="output-text">{step.output}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Bottom CTA */}
        <div className="process-footer-cta">
          <span>Ready to move through this process with your team?</span>
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
    </section>
  );
}
