import React from 'react';
import { Rocket, TrendingUp, Building2, Users2, Sparkles, ArrowRight } from 'lucide-react';

export default function WhoWeWorkWith({ t, onOpenContact }) {
  const data = t.whoWeWorkWith;
  if (!data) return null;

  const icons = [
    <Rocket key="rocket" size={24} />,
    <TrendingUp key="trending" size={24} />,
    <Building2 key="building" size={24} />,
    <Users2 key="users" size={24} />,
    <Sparkles key="sparkles" size={24} />
  ];

  return (
    <section id="who-we-work-with" className="section bg-white who-work-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
        </div>

        <div className="who-work-grid">
          {data.items.map((item, idx) => (
            <div key={item.id || idx} className="who-work-card">
              <div className="who-work-icon-wrap">
                {icons[idx % icons.length]}
              </div>
              <h3 className="who-work-card-title">{item.title}</h3>
              <p className="who-work-card-desc">{item.desc}</p>
              <div className="who-work-card-cta">
                <button
                  type="button"
                  className="text-link"
                  onClick={onOpenContact}
                >
                  <span>{t.nav.cta}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
