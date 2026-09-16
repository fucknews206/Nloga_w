import React from 'react';

/**
 * Signature Graphic Motif §1.4.1:
 * "A single continuous curved blue line that bends and terminates in a small pen-nib/pencil-tip icon"
 * Seen directly in the Nloga and CreativePics Art source posters.
 */
export default function PenNibSwoosh({ className = '', strokeColor = '#1932E6', opacity = 1 }) {
  return (
    <div className={`swoosh-graphic-wrapper ${className}`} aria-hidden="true" style={{ opacity }}>
      <svg
        viewBox="0 0 500 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        {/* Subtle grid background echoing the poster design */}
        <defs>
          <pattern id="swoosh-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(25, 50, 230, 0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#swoosh-grid)" />

        {/* The Signature Continuous Curved Swoosh Path */}
        <path
          d="M 460 -20 C 380 80, 260 140, 240 260 C 220 380, 360 420, 290 540 C 260 590, 220 610, 180 640"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small circular node along the line */}
        <circle cx="240" cy="260" r="6" fill="#FFFFFF" stroke={strokeColor} strokeWidth="3" />
        <circle cx="290" cy="540" r="5" fill={strokeColor} />

        {/* Pen-nib / Stylus icon at the inflection point */}
        <g transform="translate(245, 235) rotate(-35)">
          <path
            d="M 0 0 L 16 12 L 8 28 L 0 34 L -8 28 L -16 12 Z"
            fill="#FFFFFF"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <line x1="0" y1="12" x2="0" y2="26" stroke={strokeColor} strokeWidth="2" />
          <circle cx="0" cy="10" r="2.5" fill={strokeColor} />
        </g>
      </svg>
    </div>
  );
}
