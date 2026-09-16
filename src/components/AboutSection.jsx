import React from 'react';
import { Compass, Lightbulb, Sparkles, Target, BookOpen, ShieldCheck } from 'lucide-react';

export default function AboutSection({ t, onOpenContact }) {
  const data = t.aboutStory;
  if (!data) return null;

  const valueIcons = [
    <Compass key="curiosity" size={20} />,
    <Lightbulb key="clarity" size={20} />,
    <Sparkles key="craft" size={20} />,
    <Target key="purpose" size={20} />,
    <BookOpen key="learning" size={20} />,
    <ShieldCheck key="resp" size={20} />
  ];

  return (
    <section id="about" className="section bg-white about-section">
      <div className="container">
        {/* About Hero */}
        <div className="section-header text-left">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="headline-two-tone">
            <span className="line-ink">{data.heading}</span>
          </h2>
          <p className="about-hero-intro">
            {data.intro}
          </p>
        </div>

        {/* Story & Vision Grid */}
        <div className="about-story-grid">
          {/* Story Card */}
          <div className="about-card story-card">
            <span className="about-card-badge">OUR STORY</span>
            <h3 className="about-card-title">{data.storyHeading}</h3>
            <p className="about-card-p">{data.storyP1}</p>

            <div className="story-pillars-list">
              {data.storyPillars.map((point, idx) => (
                <div key={idx} className="story-pillar-item">
                  <span className="pillar-index">0{idx + 1}</span>
                  <span className="pillar-text">{point}</span>
                </div>
              ))}
            </div>

            <p className="about-card-p" style={{ marginTop: '16px' }}>{data.storyP2}</p>
          </div>

          {/* Vision & Mission Column */}
          <div className="about-col-vision-mission">
            {/* Vision */}
            <div className="about-card vision-card">
              <span className="about-card-badge">OUR VISION</span>
              <h3 className="about-card-title">{data.visionHeading}</h3>
              <p className="about-card-p">{data.visionP}</p>
            </div>

            {/* Mission */}
            <div className="about-card mission-card">
              <span className="about-card-badge">OUR MISSION</span>
              <h3 className="about-card-title">{data.missionHeading}</h3>
              <p className="about-card-p">{data.missionP}</p>

              <div className="mission-tags-row">
                {data.missionPoints.map((pt, idx) => (
                  <div key={idx} className="mission-tag-badge">
                    <strong>{pt.label}</strong> {pt.action}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="about-values-block">
          <div className="values-header">
            <span className="eyebrow">OUR CODE</span>
            <h3 className="values-title">{data.valuesHeading}</h3>
          </div>

          <div className="values-grid">
            {data.values.map((val, idx) => (
              <div key={val.num || idx} className="value-card">
                <div className="value-card-top">
                  <span className="value-num">{val.num}</span>
                  <div className="value-icon">{valueIcons[idx % valueIcons.length]}</div>
                </div>
                <h4 className="value-name">{val.name}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
