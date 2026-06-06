import React from "react";

function BrandMark({ compact = false }) {
  return (
    <span className={compact ? "brand-system compact" : "brand-system"} aria-hidden="true">
      <svg viewBox="0 0 72 72" role="img">
        <circle className="brand-disc" cx="36" cy="36" r="31" />
        <path className="brand-land primary" d="M14 31c4-8 10-14 18-16l8 5-3 7 7 2 6-4 8 6-3 9-10 2-5 8-11-2-2-8-8-1Z" />
        <path className="brand-land secondary" d="M21 47l8 2 3 9-6 4-8-6Z" />
        <path className="brand-land tertiary" d="M49 45l9 2 2 8-8 5-6-6Z" />
        <path className="brand-parallel" d="M10 36h52" />
        <path className="brand-parallel soft" d="M14 25c13 4 29 4 44 0M14 47c13-4 29-4 44 0" />
        <path className="brand-meridian" d="M36 7c8 8 12 17 12 29S44 57 36 65c-8-8-12-17-12-29S28 15 36 7Z" />
        <path className="brand-meridian side" d="M16 18c8 5 13 11 13 18S24 49 16 54M56 18c-8 5-13 11-13 18s5 13 13 18" />
        <path className="brand-orbit" d="M11 42c10-19 28-28 50-25" />
        <path className="brand-orbit muted" d="M11 31c15 4 31 13 50 27" />
        <circle className="brand-dot" cx="58" cy="17" r="3.4" />
        <text className="brand-letter" x="36" y="43" textAnchor="middle">
          WH
        </text>
      </svg>
    </span>
  );
}

export default BrandMark;
