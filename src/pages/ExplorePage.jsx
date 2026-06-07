import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { historyTimeline, organizations, principles } from "../data/siteData.js";

const faqItems = [
  {
    q: "Who founded homeopathy?",
    a: "Samuel Hahnemann, a German physician, is recognized as the founder of homeopathy.",
  },
  {
    q: "How is homeopathy practiced worldwide?",
    a: "Practice varies by country, with different institutions, associations, educational systems, and regulatory contexts.",
  },
  {
    q: "How is this knowledge hub organized?",
    a: "The hub connects timelines, founder history, principles, organizations, research references, media, and leader profiles in one learning path.",
  },
];

function ExplorePage() {
  return (
    <main>
      <PageHero
        eyebrow="Explore Homeopathy"
        title="The knowledge hub at the heart of WorldHomeopathy.org."
        text="A structured learning area for beginners, students, doctors, researchers, journalists, and the public."
      >
        <div className="hero-list">
          <span>History</span>
          <span>Principles</span>
          <span>World Homeopathy Day</span>
          <span>Global Context</span>
        </div>
      </PageHero>

      <section className="section split">
        <div>
          <p className="eyebrow">Learning Pathway</p>
          <h2>From foundation to global context.</h2>
        </div>
        <div className="rich-copy">
          <p>
            Explore moves beyond the homepage introduction into the historical timeline, founder
            legacy, core principles, country-wise presence, institutions, and public awareness moments
            that shaped homeopathy worldwide.
          </p>
          <p>
            The section is designed as a learning route: first the roots, then the principles, then the
            organizations, events, and leaders connected to the global homeopathy movement.
          </p>
          <Link className="inline-link" to="/leaders">
            Meet global leaders <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section knowledge-row">
        <article className="timeline-card">
          <p className="eyebrow">History timeline</p>
          <h2>From Hahnemann to the modern global movement.</h2>
          <div className="timeline">
            {historyTimeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <strong>{item.year}</strong>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="principles-card">
          <p className="eyebrow">Principles</p>
          <h2>Clear explanations with visual learning blocks.</h2>
          <div className="principles-grid detailed">
            {principles.map((principle) => (
              <div key={principle.title}>
                <strong>{principle.title}</strong>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section content-grid">
        <article className="content-card">
          <p className="eyebrow">Samuel Hahnemann</p>
          <h2>Founder profile and legacy.</h2>
          <p>
            Biography, contributions, historical context, major texts, and the link between his
            birthday and World Homeopathy Day are presented as part of the global foundation.
          </p>
        </article>
        <article className="content-card">
          <p className="eyebrow">World Homeopathy Day</p>
          <h2>April 10 as a global awareness moment.</h2>
          <p>
            A global awareness moment for messages, celebrations, conferences, educational
            activities, and country participation.
          </p>
        </article>
        <article className="content-card">
          <p className="eyebrow">Organizations</p>
          <h2>Institutions and associations.</h2>
          <div className="tag-list">
            {organizations.map((org) => (
              <span key={org}>{org}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQs</p>
          <h2>Public questions answered with a neutral global tone.</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExplorePage;
