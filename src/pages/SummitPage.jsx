import React from "react";
import { ArrowRight, Camera, Handshake, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import StatBand from "../components/StatBand.jsx";
import { summitStats, summits } from "../data/siteData.js";

const highlights = [
  { icon: Users, title: "International Delegates", text: "Doctors, researchers, educators, guests, and homeopathy professionals." },
  { icon: Trophy, title: "Awards & Recognition", text: "A space for summit awards, honors, and contributor recognition." },
  { icon: Camera, title: "Premium Gallery", text: "Photos, videos, awards, networking, research sessions, and media moments." },
  { icon: Handshake, title: "Partnerships", text: "Burnett can appear naturally as a strategic summit and research partner." },
];

function SummitPage() {
  return (
    <main>
      <PageHero
        eyebrow="World Homeopathy Summit"
        title="Uniting the world through homeopathy."
        text="The summit area for destinations, delegates, highlights, outcomes, media, galleries, and international participation."
      >
        <div className="hero-list">
          <span>View Summit Journey</span>
          <span>Upcoming Summit</span>
          <span>Media Gallery</span>
        </div>
      </PageHero>

      <StatBand stats={summitStats} />

      <section className="section summit-section">
        <div className="section-heading">
          <p className="eyebrow">Summit timeline</p>
          <h2>Dubai to Germany to London to the next global chapter.</h2>
        </div>
        <div className="summit-grid">
          {summits.map((summit) => (
            <article className="summit-card" key={`${summit.city}-${summit.year}`}>
              <div className="summit-year">{summit.year}</div>
              <span>{summit.city}</span>
              <h3>{summit.title}</h3>
              <p>{summit.text}</p>
              <ul>
                {summit.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {summit.link ? (
                <a href={summit.link} target="_blank" rel="noreferrer">
                  View coverage <ArrowRight size={16} />
                </a>
              ) : (
                <Link to="/contact">
                  Register interest <ArrowRight size={16} />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section content-grid four-up">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article className="content-card" key={item.title}>
              <Icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Summit outcomes</p>
          <h2>Summit outcomes connect events with research, institutions, and global dialogue.</h2>
        </div>
        <div className="rich-copy">
          <p>
            Outcomes include research initiatives, international collaborations, healthcare dialogues,
            academic discussions, country chapter growth, and partner announcements.
          </p>
          <p>
            Burnett Homeopathy can be named here as a strategic summit partner, organizer, or research
            contributor where appropriate.
          </p>
          <div className="tag-list">
            <span>Research Initiatives</span>
            <span>Global Collaborations</span>
            <span>Healthcare Dialogues</span>
            <span>International Partnerships</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SummitPage;
