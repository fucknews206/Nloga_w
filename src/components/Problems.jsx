import React from 'react';

export default function Problems({ t }) {
  return (
    <section id="problems" className="section bg-paper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="headline-two-tone">
            <span className="line-ink">{t.problems.titleLine1}</span>
            <span className="line-blue">{t.problems.titleLine2}</span>
          </h2>
        </div>

        {/* 3-Column Problem Cards Grid */}
        <div className="problems-grid">
          {t.problems.items.map((item, idx) => (
            <div key={idx} className="problem-card">
              <div>
                <span className="problem-card-badge">{item.badge}</span>
                <h3 className="problem-card-heading">“{item.problem}”</h3>
              </div>
              <p className="problem-card-solution">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
