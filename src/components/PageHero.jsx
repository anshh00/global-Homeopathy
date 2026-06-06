import React from "react";

function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children ? <div className="page-hero-panel">{children}</div> : null}
    </section>
  );
}

export default PageHero;
