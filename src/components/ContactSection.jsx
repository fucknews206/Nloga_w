import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection({ t }) {
  const data = t.contactSection;
  if (!data) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    help: data.fields.helpOptions[0] || 'Product / Software',
    message: '',
    budget: data.fields.budgetOptions[0] || 'Not sure yet',
    timeline: data.fields.timelineOptions[0] || 'As soon as possible'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      help: data.fields.helpOptions[0] || 'Product / Software',
      message: '',
      budget: data.fields.budgetOptions[0] || 'Not sure yet',
      timeline: data.fields.timelineOptions[0] || 'As soon as possible'
    });
  };

  return (
    <section id="contact-section" className="section bg-white contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-left">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
          <p className="contact-hero-copy">
            {data.copy}
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Main Form Column */}
          <div className="contact-form-container">
            <h3 className="form-box-title">{data.formHeading}</h3>

            {!submitted ? (
              <form className="contact-page-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-name">
                      {data.fields.name} *
                    </label>
                    <input
                      id="page-client-name"
                      required
                      type="text"
                      className="form-input"
                      placeholder={data.fields.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-email">
                      {data.fields.email} *
                    </label>
                    <input
                      id="page-client-email"
                      required
                      type="email"
                      className="form-input"
                      placeholder={data.fields.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-company">
                      {data.fields.company}
                    </label>
                    <input
                      id="page-client-company"
                      type="text"
                      className="form-input"
                      placeholder={data.fields.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-help">
                      {data.fields.help}
                    </label>
                    <select
                      id="page-client-help"
                      className="form-select"
                      value={formData.help}
                      onChange={(e) => setFormData({ ...formData, help: e.target.value })}
                    >
                      {data.fields.helpOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="page-client-message">
                    {data.fields.message} *
                  </label>
                  <textarea
                    id="page-client-message"
                    required
                    rows="4"
                    className="form-textarea"
                    placeholder={data.fields.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-budget">
                      {data.fields.budget}
                    </label>
                    <select
                      id="page-client-budget"
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      {data.fields.budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="page-client-timeline">
                      {data.fields.timeline}
                    </label>
                    <select
                      id="page-client-timeline"
                      className="form-select"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      {data.fields.timelineOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <span>{data.fields.submit}</span>
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="form-success-state">
                <div className="success-icon-badge">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="success-title">Message Received</h4>
                <p className="success-desc">
                  {data.fields.success}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReset}
                  style={{ marginTop: '16px' }}
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

          {/* Alternative Direct Contact Column */}
          <div className="contact-direct-card">
            <h3 className="direct-card-title">{data.alternative.heading}</h3>
            <p className="direct-card-copy">{data.alternative.copy}</p>

            <div className="direct-contact-list">
              <a href={`mailto:${data.alternative.email}`} className="direct-contact-item">
                <div className="direct-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="direct-item-text">
                  <span className="direct-item-label">Email</span>
                  <span className="direct-item-val">{data.alternative.email}</span>
                </div>
              </a>

              <a href={`tel:${data.alternative.phone}`} className="direct-contact-item">
                <div className="direct-icon-wrap">
                  <Phone size={18} />
                </div>
                <div className="direct-item-text">
                  <span className="direct-item-label">Phone / WhatsApp</span>
                  <span className="direct-item-val">{data.alternative.phone}</span>
                </div>
              </a>

              <div className="direct-contact-item">
                <div className="direct-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div className="direct-item-text">
                  <span className="direct-item-label">Location</span>
                  <span className="direct-item-val">{data.alternative.location}</span>
                </div>
              </div>
            </div>

            <div className="direct-card-footer">
              <span className="direct-motto">“Think deeply. Design intentionally. Build properly.”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
