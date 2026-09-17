import React, { useEffect, useRef } from 'react';
import { X, AlertCircle, Layers, Lightbulb, Wrench, Star, Cpu, BarChart3, Bookmark, ArrowRight } from 'lucide-react';

const SECTION_ICONS = {
  challenge:   <AlertCircle  size={18} />,
  context:     <Layers       size={18} />,
  approach:    <Lightbulb    size={18} />,
  solution:    <Wrench       size={18} />,
  experience:  <Star         size={18} />,
  technology:  <Cpu          size={18} />,
  outcome:     <BarChart3    size={18} />,
  takeaway:    <Bookmark     size={18} />,
};

function Pill({ children }) {
  return <span className="cs-pill">{children}</span>;
}

function SectionBlock({ icon, title, children }) {
  return (
    <div className="cs-section-block">
      <div className="cs-section-label">
        <span className="cs-section-icon">{icon}</span>
        <span className="cs-section-title-text">{title}</span>
      </div>
      <div className="cs-section-body">{children}</div>
    </div>
  );
}

export default function CaseStudyModal({ isOpen, onClose, project, lang, onOpenContact }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (dialogRef.current) dialogRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const cs = project.caseStudy;
  if (!cs) return null;

  const labels = lang === 'fr'
    ? {
        challenge:   'Le Défi',
        context:     'Le Contexte',
        approach:    'L\'Approche',
        solution:    'La Solution',
        experience:  'L\'Expérience',
        technology:  'La Technologie',
        outcome:     'Le Résultat',
        takeaway:    'Leçon Clé',
        cta:         'Un défi similaire ? Parlons-en.',
        ctaBtn:      'Démarrer un projet',
        close:       'Fermer',
      }
    : {
        challenge:   'The Challenge',
        context:     'The Context',
        approach:    'The Approach',
        solution:    'The Solution',
        experience:  'The Experience',
        technology:  'The Technology',
        outcome:     'The Outcome',
        takeaway:    'Project Takeaway',
        cta:         'Have a similar challenge? Let\'s talk.',
        ctaBtn:      'Start a project',
        close:       'Close',
      };

  return (
    <div
      className="cs-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cs-modal-title"
    >
      <div className="cs-drawer" ref={dialogRef}>

        {/* ── Sticky top bar ── */}
        <div className="cs-drawer-topbar">
          <div className="cs-topbar-left">
            <Pill>{project.category}</Pill>
          </div>
          <button
            type="button"
            className="cs-close-btn"
            onClick={onClose}
            aria-label={labels.close}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Project Header ── */}
        <div className="cs-project-header">
          <div className="cs-project-meta">
            <span className="cs-project-category">{project.category}</span>
          </div>
          <h2 id="cs-modal-title" className="cs-project-title">{project.title}</h2>
          <p className="cs-project-tagline">{project.desc}</p>

          {/* Outcome badges */}
          {cs.outcomeBadges && cs.outcomeBadges.length > 0 && (
            <div className="cs-badges-row">
              {cs.outcomeBadges.map((b, i) => (
                <div key={i} className="cs-outcome-badge">
                  <span className="cs-outcome-badge-value">{b.value}</span>
                  <span className="cs-outcome-badge-label">{b.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Divider ── */}
        <div className="cs-divider" />

        {/* ── Body sections ── */}
        <div className="cs-body">

          {/* 1. THE CHALLENGE */}
          <SectionBlock icon={SECTION_ICONS.challenge} title={labels.challenge}>
            <p>{cs.challenge.problem}</p>
            {cs.challenge.constraints && (
              <ul className="cs-list">
                {cs.challenge.constraints.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            )}
            {cs.challenge.whyItMattered && (
              <p className="cs-emphasis">{cs.challenge.whyItMattered}</p>
            )}
          </SectionBlock>

          {/* 2. THE CONTEXT */}
          <SectionBlock icon={SECTION_ICONS.context} title={labels.context}>
            {cs.context.business && <p>{cs.context.business}</p>}
            {cs.context.users && <p>{cs.context.users}</p>}
            {cs.context.existingSystem && <p>{cs.context.existingSystem}</p>}
            {cs.context.constraints && cs.context.constraints.length > 0 && (
              <ul className="cs-list">
                {cs.context.constraints.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            )}
          </SectionBlock>

          {/* 3. THE APPROACH */}
          <SectionBlock icon={SECTION_ICONS.approach} title={labels.approach}>
            {cs.approach.narrative && <p>{cs.approach.narrative}</p>}
            {cs.approach.pillars && (
              <div className="cs-approach-pillars">
                {cs.approach.pillars.map((p, i) => (
                  <div key={i} className="cs-approach-pillar">
                    <span className="cs-pillar-label">{p.area}</span>
                    <p className="cs-pillar-text">{p.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </SectionBlock>

          {/* 4. THE SOLUTION */}
          <SectionBlock icon={SECTION_ICONS.solution} title={labels.solution}>
            <p>{cs.solution.description}</p>
            {cs.solution.features && cs.solution.features.length > 0 && (
              <div className="cs-feature-grid">
                {cs.solution.features.map((f, i) => (
                  <div key={i} className="cs-feature-chip">
                    <ArrowRight size={13} className="cs-feature-arrow" />
                    {f}
                  </div>
                ))}
              </div>
            )}
          </SectionBlock>

          {/* 5. THE EXPERIENCE */}
          <SectionBlock icon={SECTION_ICONS.experience} title={labels.experience}>
            {cs.experience.journeys && cs.experience.journeys.length > 0 && (
              <ul className="cs-list">
                {cs.experience.journeys.map((j, i) => <li key={i}>{j}</li>)}
              </ul>
            )}
            {cs.experience.designPrinciples && cs.experience.designPrinciples.length > 0 && (
              <div className="cs-principles-row">
                {cs.experience.designPrinciples.map((p, i) => (
                  <span key={i} className="cs-principle-tag">{p}</span>
                ))}
              </div>
            )}
          </SectionBlock>

          {/* 6. THE TECHNOLOGY */}
          <SectionBlock icon={SECTION_ICONS.technology} title={labels.technology}>
            {cs.technology.description && <p>{cs.technology.description}</p>}
            {cs.technology.stack && cs.technology.stack.length > 0 && (
              <div className="cs-tech-stack">
                {cs.technology.stack.map((tech, i) => (
                  <span key={i} className="cs-tech-badge">{tech}</span>
                ))}
              </div>
            )}
          </SectionBlock>

          {/* 7. THE OUTCOME */}
          <SectionBlock icon={SECTION_ICONS.outcome} title={labels.outcome}>
            {cs.outcome.delivered && <p>{cs.outcome.delivered}</p>}
            {cs.outcome.validated && <p className="cs-emphasis">{cs.outcome.validated}</p>}
            {cs.outcome.learned && <p>{cs.outcome.learned}</p>}
          </SectionBlock>

          {/* 8. PROJECT TAKEAWAY */}
          <div className="cs-takeaway-block">
            <div className="cs-takeaway-icon">{SECTION_ICONS.takeaway}</div>
            <h4 className="cs-takeaway-label">{labels.takeaway}</h4>
            <p className="cs-takeaway-text">{cs.takeaway}</p>
          </div>

          {/* CTA */}
          <div className="cs-cta-block">
            <p className="cs-cta-text">{labels.cta}</p>
            <button
              type="button"
              className="btn btn-primary cs-cta-btn"
              onClick={() => { onClose(); if (onOpenContact) onOpenContact(); }}
            >
              <span>{labels.ctaBtn}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
