import React from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { leaders } from "../data/siteData.js";

function LeadersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Global Leaders"
        title="Historical voices and modern contributors in one credible directory."
        text="A profile area for major figures in homeopathy, with Dr. Nitish Chandra Dubey positioned through Burnett Homeopathy leadership, summit activity, and research initiatives."
      >
        <div className="hero-list">
          <span>Founder</span>
          <span>International teachers</span>
          <span>Modern contributors</span>
        </div>
      </PageHero>

      <section className="section leaders-page-grid">
        {leaders.map((leader) => (
          <article className={`leader-profile ${leader.featured ? "featured" : ""}`} key={leader.name}>
            <div className="leader-profile-photo">
              <img src={leader.image} alt={leader.name} loading="lazy" />
            </div>
            <div className="leader-profile-body">
              <span>{leader.role}</span>
              <h2>{leader.name}</h2>
              <p>{leader.text}</p>
              <ul>
                {leader.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a href={leader.source} target="_blank" rel="noreferrer">
                Source profile <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default LeadersPage;
