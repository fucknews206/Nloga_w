import React from 'react';

export default function WhyNloga({ t }) {
  return (
    <section id="why" className="section bg-paper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{t.why.titleLine1}</span>
            <span className="line-blue">{t.why.titleLine2}</span>
          </h2>
        </div>

        {/* 5-Item Horizontal-Divider List */}
        <div className="why-list">
          {t.why.items.map((item) => (
            <div key={item.num} className="why-item">
              <div className="why-item-left">
                <div className="brand-dot-ring" aria-hidden="true" />
                <span className="why-number">{item.num}</span>
                <h3 className="why-title">{item.title}</h3>
              </div>

              <div className="why-item-right">
                <p className="why-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
