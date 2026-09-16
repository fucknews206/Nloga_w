import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function InsightsSection({ t, onOpenContact }) {
  const data = t.insights;
  if (!data) return null;

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All' || selectedCategory === 'Tous'
    ? data.articles
    : data.articles.filter(
        (art) => art.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <section id="insights" className="section bg-white insights-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
          <p className="section-header-intro">
            {data.intro}
          </p>
        </div>

        {/* Category Pills */}
        <div className="insights-categories" role="tablist">
          {data.categories.map((cat, idx) => {
            const isActive =
              selectedCategory === cat ||
              (selectedCategory === 'All' && (cat === 'All' || cat === 'Tous'));

            return (
              <button
                key={idx}
                type="button"
                className={`category-pill ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Article Cards Grid */}
        <div className="insights-grid">
          {filteredArticles.map((article, idx) => (
            <article key={idx} className="insight-card">
              <div className="insight-card-top">
                <span className="insight-category-tag">{article.category}</span>
                <div className="insight-meta">
                  <span className="meta-item">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </div>

              <h3 className="insight-card-title">{article.title}</h3>
              <p className="insight-card-desc">{article.desc}</p>

              <div className="insight-card-footer">
                <button
                  type="button"
                  className="text-link"
                  onClick={onOpenContact}
                >
                  <span>{data.readArticle}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </button>
                <span className="insight-date">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
