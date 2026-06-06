import React from "react";
import { ArrowRight, Camera, Newspaper, Video } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { mediaItems } from "../data/siteData.js";

const galleryBuckets = [
  { icon: Camera, title: "Photos", text: "Summit photos, leadership moments, awards, and networking galleries." },
  { icon: Video, title: "Videos", text: "Event reels, interviews, keynote clips, research sessions, and public messages." },
  { icon: Newspaper, title: "Press", text: "External media coverage, publication logos, article summaries, and press releases." },
];

function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Media Coverage"
        title="A media wall for summits, interviews, research news, and press releases."
        text="This page gives external credibility to the global platform while keeping summit and research activity organized."
      >
        <div className="hero-list">
          <span>News articles</span>
          <span>Interviews</span>
          <span>Summit coverage</span>
          <span>Research announcements</span>
        </div>
      </PageHero>

      <section className="section media-grid">
        {mediaItems.map((item) => (
          <a className="media-card" href={item.link} target="_blank" rel="noreferrer" key={item.title}>
            <span>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.source}</p>
            <strong>
              Open article <ArrowRight size={16} />
            </strong>
          </a>
        ))}
      </section>

      <section className="section content-grid">
        {galleryBuckets.map((item) => {
          const Icon = item.icon;
          return (
            <article className="content-card" key={item.title}>
              <Icon size={28} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default MediaPage;
