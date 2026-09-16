import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, t }) {
  const fields = t.contactSection?.fields || {
    name: "Full Name",
    namePlaceholder: "Your name",
    email: "Email Address",
    emailPlaceholder: "you@example.com",
    company: "Company / Organization",
    companyPlaceholder: "Your company or organization",
    help: "What do you need help with?",
    helpOptions: [
      "Product / Software",
      "UX/UI Design",
      "Brand / Creative",
      "Training",
      "Digital Strategy",
      "Other"
    ],
    message: "Tell us about your project",
    messagePlaceholder: "What are you trying to build, improve, solve, or launch?",
    budget: "Budget range",
    budgetOptions: [
      "Not sure yet",
      "Under 500,000 FCFA",
      "500,000 – 1,500,000 FCFA",
      "1,500,000 – 3,000,000 FCFA",
      "3,000,000+ FCFA",
      "Let's discuss"
    ],
    timeline: "Timeline",
    timelineOptions: [
      "As soon as possible",
      "Within 1 month",
      "1–3 months",
      "3–6 months",
      "Flexible"
    ],
    submit: "Send project enquiry",
    success: "Thank you. We've received your message and will review your project details before getting back to you."
  };

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    help: fields.helpOptions[0],
    message: '',
    budget: fields.budgetOptions[0],
    timeline: fields.timelineOptions[0]
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      help: fields.helpOptions[0],
      message: '',
      budget: fields.budgetOptions[0],
      timeline: fields.timelineOptions[0]
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="eyebrow" style={{ marginBottom: '8px' }}>NLOGA STUDIO</span>
              <h3 id="contact-modal-title" className="modal-title">{t.nav?.cta || "Start a Project"}</h3>
              <p className="modal-desc">
                {t.contactSection?.copy || "Tell us what you are trying to build, improve, solve, redesign, or communicate. We'll take it from there."}
              </p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-name">{fields.name} *</label>
                  <input
                    id="modal-client-name"
                    required
                    type="text"
                    className="form-input"
                    placeholder={fields.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-email">{fields.email} *</label>
                  <input
                    id="modal-client-email"
                    required
                    type="email"
                    className="form-input"
                    placeholder={fields.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-company">{fields.company}</label>
                  <input
                    id="modal-client-company"
                    type="text"
                    className="form-input"
                    placeholder={fields.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-discipline">{fields.help}</label>
                  <select
                    id="modal-client-discipline"
                    className="form-select"
                    value={formData.help}
                    onChange={(e) => setFormData({ ...formData, help: e.target.value })}
                  >
                    {fields.helpOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-budget">{fields.budget}</label>
                  <select
                    id="modal-client-budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    {fields.budgetOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-client-timeline">{fields.timeline}</label>
                  <select
                    id="modal-client-timeline"
                    className="form-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    {fields.timelineOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-client-message">{fields.message} *</label>
                <textarea
                  id="modal-client-message"
                  required
                  rows="3"
                  className="form-textarea"
                  placeholder={fields.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <span>{fields.submit}</span>
                <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="form-success-state">
            <div className="success-icon-badge">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="modal-title" style={{ margin: 0 }}>Message Received</h3>
            <p className="modal-desc" style={{ maxWidth: '420px' }}>
              {fields.success}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
              style={{ marginTop: '12px' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
