import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQSection({ t, onOpenContact }) {
  const data = t.faq;
  if (!data) return null;

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section bg-tint faq-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
          <p className="section-header-intro">
            {data.intro}
          </p>
        </div>

        <div className="faq-list">
          {data.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
                  role="region"
                >
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Support Note */}
        <div className="faq-bottom-note">
          <span>Still have a question not answered here?</span>
          <button
            type="button"
            className="text-link"
            onClick={onOpenContact}
          >
            <span>Ask the Nloga team</span>
            <span className="link-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
