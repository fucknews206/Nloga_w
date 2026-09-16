import React from 'react';

// High-fidelity visual mockups matching the improved design
function WorkVisual({ type }) {
  if (type === 0) {
    // HRConnect Enterprise Platform: Laptop dashboard + overlapping Smartphone app
    return (
      <div className="work-visual-canvas visual-hrconnect">
        {/* Laptop Mockup */}
        <div className="laptop-mockup">
          <div className="laptop-screen">
            {/* Topbar */}
            <div className="screen-topbar">
              <div className="topbar-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="screen-search-bar">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>hrconnect.nloga.internal</span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="screen-content">
              {/* Sidebar */}
              <div className="screen-sidebar">
                <div className="sidebar-logo-dot" />
                <div className="sidebar-nav-item active" />
                <div className="sidebar-nav-item" />
                <div className="sidebar-nav-item" />
                <div className="sidebar-nav-item" />
              </div>

              {/* Main Workspace */}
              <div className="screen-main">
                {/* Metric Cards */}
                <div className="kpi-row">
                  <div className="kpi-mini-card">
                    <span className="kpi-label">Active Users</span>
                    <span className="kpi-value">2,840</span>
                  </div>
                  <div className="kpi-mini-card">
                    <span className="kpi-label">Efficiency</span>
                    <span className="kpi-value highlight">+40%</span>
                  </div>
                  <div className="kpi-mini-card">
                    <span className="kpi-label">Tasks Done</span>
                    <span className="kpi-value">98.4%</span>
                  </div>
                </div>

                {/* Main Analytics Chart */}
                <div className="chart-preview-card">
                  <div className="chart-preview-header">
                    <span>Platform Activity</span>
                    <span className="chart-badge">Live</span>
                  </div>
                  <svg className="chart-svg" viewBox="0 0 260 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hrBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,52 Q40,48 70,30 T140,25 T200,12 T260,20 L260,70 L0,70 Z"
                      fill="url(#hrBlueGrad)"
                    />
                    <path
                      d="M0,52 Q40,48 70,30 T140,25 T200,12 T260,20"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="laptop-base">
            <div className="laptop-notch" />
          </div>
        </div>

        {/* Overlapping Smartphone Mockup */}
        <div className="phone-mockup phone-hrconnect">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-header">
              <div className="phone-avatar" />
              <div className="phone-user-text">
                <div className="phone-user-line" />
                <div className="phone-user-sub" />
              </div>
            </div>
            <div className="phone-card-accent">
              <div className="phone-badge" />
              <div className="phone-stat">+40%</div>
            </div>
            <div className="phone-list-item" />
            <div className="phone-list-item" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 1) {
    // IMANI-J Apparel Identity: Smartphone + "Modern Style Timeless Identity" banner + apparel card
    return (
      <div className="work-visual-canvas visual-imanij">
        {/* Left: Mobile Showcase */}
        <div className="phone-mockup phone-imanij">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-brand-title">IMANI-J</div>
            <div className="phone-product-photo">
              <div className="garment-silhouette" />
            </div>
            <div className="phone-product-info">
              <div className="phone-product-name">Tailored Coat</div>
              <div className="phone-product-price">$140.00</div>
            </div>
          </div>
        </div>

        {/* Center: Editorial Brand Typography */}
        <div className="editorial-banner">
          <div className="editorial-line">Modern</div>
          <div className="editorial-line">Style</div>
          <div className="editorial-line">Timeless</div>
          <div className="editorial-line accent">Identity</div>
        </div>

        {/* Right: Apparel Lookbook Frame */}
        <div className="apparel-card">
          <div className="apparel-garment-visual">
            <div className="garment-collar" />
            <div className="garment-body" />
            <div className="garment-button" />
          </div>
          <div className="apparel-tag">AW / 26</div>
        </div>
      </div>
    );
  }

  if (type === 2) {
    // Cloud Commerce Infrastructure: High-tech Cloud Console + Microservice Nodes + Mobile DevOps
    return (
      <div className="work-visual-canvas visual-cloud">
        {/* Cloud Console Window */}
        <div className="laptop-mockup cloud-console">
          <div className="laptop-screen dark-screen">
            <div className="screen-topbar dark-topbar">
              <div className="topbar-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="screen-search-bar dark-search">
                <span className="status-live-dot" />
                <span>api.mesh.infrastructure/v2</span>
              </div>
            </div>

            <div className="screen-content dark-content">
              {/* Terminal status line */}
              <div className="console-terminal-badge">
                <span className="method">POST</span>
                <span className="endpoint">/api/v2/deploy</span>
                <span className="status">200 OK (28ms)</span>
              </div>

              {/* Topology / Architecture Microservice Nodes */}
              <div className="cloud-topology-grid">
                <div className="cloud-node">
                  <span className="node-icon">⚡</span>
                  <span className="node-name">Gateway</span>
                  <span className="node-metric">18ms</span>
                </div>
                <div className="cloud-connector" />
                <div className="cloud-node active">
                  <span className="node-icon">❖</span>
                  <span className="node-name">Services</span>
                  <span className="node-metric">99.99%</span>
                </div>
                <div className="cloud-connector" />
                <div className="cloud-node">
                  <span className="node-icon">⛁</span>
                  <span className="node-name">Database</span>
                  <span className="node-metric">Zero Lag</span>
                </div>
              </div>
            </div>
          </div>
          <div className="laptop-base dark-base">
            <div className="laptop-notch" />
          </div>
        </div>

        {/* Mobile DevOps Monitor */}
        <div className="phone-mockup phone-cloud">
          <div className="phone-notch" />
          <div className="phone-screen dark-phone">
            <div className="phone-cloud-title">Uptime Status</div>
            <div className="phone-uptime-circle">
              <span className="uptime-val">99.99%</span>
            </div>
            <div className="phone-metric-row">
              <div className="metric-pill">Zero Downtime</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Type 3: Next-Gen Analytics Interface: Cockpit UI + Glowing Charts + Companion App
  return (
    <div className="work-visual-canvas visual-analytics">
      {/* Analytics Cockpit */}
      <div className="laptop-mockup analytics-console">
        <div className="laptop-screen dark-screen">
          <div className="screen-topbar dark-topbar">
            <div className="topbar-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="screen-search-bar dark-search">
              <span className="status-live-dot" />
              <span>analytics.telemetry.global</span>
            </div>
          </div>

          <div className="screen-content dark-content">
            <div className="analytics-cockpit-main">
              <div className="analytics-stat-strip">
                <div className="stat-item">
                  <span className="stat-label">Query Speed</span>
                  <span className="stat-number cyan">5x Faster</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Satisfaction</span>
                  <span className="stat-number">92%</span>
                </div>
              </div>

              {/* Glowing multi-curve telemetry chart */}
              <div className="analytics-chart-wrap">
                <svg className="analytics-chart-svg" viewBox="0 0 260 65" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cyanArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 Q45,15 90,38 T180,18 T260,8 L260,65 L0,65 Z"
                    fill="url(#cyanArea)"
                  />
                  <path
                    d="M0,50 Q45,15 90,38 T180,18 T260,8"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0,60 Q50,45 100,50 T190,35 T260,25"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base dark-base">
          <div className="laptop-notch" />
        </div>
      </div>

      {/* Companion App */}
      <div className="phone-mockup phone-analytics">
        <div className="phone-notch" />
        <div className="phone-screen dark-phone">
          <div className="phone-cloud-title">Realtime Feed</div>
          <div className="phone-stat-counter">+142.8%</div>
          <div className="phone-sparkline">
            <div className="spark-bar" style={{ height: '40%' }} />
            <div className="spark-bar" style={{ height: '70%' }} />
            <div className="spark-bar" style={{ height: '55%' }} />
            <div className="spark-bar" style={{ height: '90%' }} />
            <div className="spark-bar" style={{ height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Pillar Outline Icons matching the design
function PillarIcon({ type }) {
  if (type === 'challenge') {
    return (
      <svg className="work-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  }
  if (type === 'approach') {
    return (
      <svg className="work-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
      </svg>
    );
  }
  // Outcome
  return (
    <svg className="work-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export default function SelectedWork({ t, onOpenContact }) {
  const labels = t.work.labels || {
    challenge: "The Challenge",
    approach: "The Approach",
    outcome: "The Outcome"
  };

  return (
    <section id="work" className="section bg-tint">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="headline-two-tone">
            <span className="line-ink">{t.work.titleLine1}</span>
            <span className="line-blue">{t.work.titleLine2}</span>
          </h2>
          <p className="section-header-intro">
            {t.work.intro}
          </p>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="work-grid">
          {t.work.items.map((item, idx) => (
            <div key={idx} className="work-card">
              {/* Card Visual / Mockup Preview */}
              <div className="work-card-visual">
                <WorkVisual type={idx} />
              </div>

              {/* Card Main Content */}
              <div className="work-card-content">
                {/* Category Pill Badge */}
                <div className="work-card-category-pill">
                  {item.category}
                </div>

                {/* Project Title */}
                <h3 className="work-card-title">{item.title}</h3>

                {/* Short Description */}
                <p className="work-card-desc">{item.desc}</p>

                {/* 3-Pillar Breakdown: Challenge, Approach, Outcome */}
                <div className="work-card-pillars">
                  {/* Column 1: Challenge */}
                  <div className="work-pillar">
                    <div className="work-pillar-icon-wrap">
                      <PillarIcon type="challenge" />
                    </div>
                    <h4 className="work-pillar-title">{labels.challenge}</h4>
                    <p className="work-pillar-text">{item.challenge}</p>
                  </div>

                  {/* Column 2: Approach */}
                  <div className="work-pillar">
                    <div className="work-pillar-icon-wrap">
                      <PillarIcon type="approach" />
                    </div>
                    <h4 className="work-pillar-title">{labels.approach}</h4>
                    <p className="work-pillar-text">{item.approach}</p>
                  </div>

                  {/* Column 3: Outcome */}
                  <div className="work-pillar">
                    <div className="work-pillar-icon-wrap">
                      <PillarIcon type="outcome" />
                    </div>
                    <h4 className="work-pillar-title">{labels.outcome}</h4>
                    <p className="work-pillar-text">{item.outcome}</p>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="work-card-action-row">
                  <button
                    type="button"
                    className="work-card-link"
                    onClick={onOpenContact}
                  >
                    <span>{item.linkText}</span>
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </button>

                  <button
                    type="button"
                    className="work-card-circle-btn"
                    onClick={onOpenContact}
                    aria-label={item.linkText}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA Block below the row */}
        <div className="work-mini-cta">
          <div className="work-mini-cta-text">{t.work.miniCtaTitle}</div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenContact}
          >
            <span>{t.work.miniCtaLink}</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
