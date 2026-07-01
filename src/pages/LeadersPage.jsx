import React from "react";
import {
  ArrowRight,
  BookOpen,
  Database,
  FileText,
  FlaskConical,
  Globe2,
  Landmark,
  Library,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { leaders } from "../data/siteData.js";

const liveReach = [
  { icon: Globe2, value: "110+", label: "Member nations" },
  { icon: Users, value: "15,420", label: "Active scholars" },
  { icon: FileText, value: "1.2k+", label: "Indexed papers" },
];

const portalTabs = [
  "Founder Registry",
  "International Faculty",
  "Research Voices",
  "Modern Contributors",
];

const frameworkCards = [
  {
    icon: Globe2,
    title: "Global Standardization",
    text: "Connecting country chapters, summit outcomes, documentation practices, and institutional references in one leadership framework.",
    points: ["Country leadership registers", "Summit archives", "Professional documentation"],
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Dialogue",
    text: "Supporting structured conversations around research, education, pharmacy quality, and international academic exchange.",
    points: ["Research discussions", "Goa evidence summit", "Academic collaboration"],
  },
  {
    icon: Landmark,
    title: "Institutional Diplomacy",
    text: "Positioning homeopathy leaders through global summits, historical locations, and public education initiatives.",
    points: ["Kothen legacy chapter", "London institutional visibility", "Burnett Homeopathy Pvt. Ltd. contribution"],
  },
];

const scholarlyPapers = [
  {
    tag: "Comparative analysis",
    title: "Leadership records and homeopathic education networks.",
    text: "A reserved area for verified publications, proceedings, and country-level institutional notes.",
  },
  {
    tag: "Summit paper",
    title: "Framework for global homeopathy standardization.",
    text: "Summit outcomes, expert recommendations, and institutional collaboration references can be linked here.",
  },
  {
    tag: "Archive entry",
    title: "Hahnemann legacy and modern international forums.",
    text: "Historical context for Kothen, World Homeopathy Day, and professional heritage chapters.",
  },
];

function LeadersPage() {
  const featuredLeader = leaders.find((leader) => leader.featured) || leaders[0];
  const directoryLeaders = leaders.filter((leader) => leader.name !== featuredLeader.name).slice(0, 4);

  return (
    <main className="leaders-portal-page">
      <section className="leaders-portal-hero">
        <div className="leaders-portal-shell leaders-portal-hero-grid">
          <div className="leaders-portal-hero-copy">
            <p className="leaders-portal-kicker">Global leadership and summit archive</p>
            <h1>Master Institutional Portal for World Homeopathy Summits</h1>
            <p>
              The editorial repository of the Global Homeopathy Foundation, uniting
              international pedagogy, verified resources, and professional
              summit records in one institutional leadership portal.
            </p>
            <div className="leaders-portal-actions">
              <a href="#leadership-archive">
                Access archive <ArrowRight size={14} />
              </a>
              <a href="#proceedings">
                Submit proceedings <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <aside className="leaders-reach-panel" aria-label="Live global reach">
            <div>
              <span>Live global reach</span>
              <Search size={16} />
            </div>
            {liveReach.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label}>
                  <Icon size={20} />
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                  <ArrowRight size={14} />
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="leaders-portal-directory" id="leadership-archive">
        <div className="leaders-portal-shell leaders-directory-grid">
          <aside className="leaders-directory-sidebar">
            <p>Global leadership & pedagogy</p>
            <h2>Curated registry for founders, educators, researchers, and modern contributors.</h2>
            <nav aria-label="Leadership directory filters">
              {portalTabs.map((tab, index) => (
                <a className={index === 0 ? "active" : ""} href="#leadership-archive" key={tab}>
                  {tab}
                  <ArrowRight size={13} />
                </a>
              ))}
            </nav>
            <div>
              <strong>Profile data status</strong>
              <span>Images and final expert details can be added after client approval.</span>
            </div>
          </aside>

          <div className="leaders-matrix">
            <article className="leaders-matrix-card founder">
              <span>Founding archive</span>
              <h3>Samuel Hahnemann</h3>
              <p>Founder profile, historical writings, professional roots, and classical source references.</p>
              <a href="https://en.wikipedia.org/wiki/Samuel_Hahnemann" target="_blank" rel="noreferrer">
                Archive <ArrowRight size={13} />
              </a>
            </article>

            <article className="leaders-matrix-card featured">
              <div>
                <img src={featuredLeader.image} alt={featuredLeader.name} />
              </div>
              <span>Chairman profile</span>
              <h3>{featuredLeader.name}</h3>
              <p>
                Burnett Homeopathy Pvt. Ltd. leadership, global summit visibility,
                research initiatives, and international collaboration.
              </p>
              <a href={featuredLeader.source} target="_blank" rel="noreferrer">
                Profile details <ArrowRight size={13} />
              </a>
            </article>

            {directoryLeaders.map((leader) => (
              <article className="leaders-matrix-card" key={leader.name}>
                <span>{leader.role}</span>
                <h3>{leader.name}</h3>
                <p>{leader.text}</p>
                <a href={leader.source} target="_blank" rel="noreferrer">
                  Read profile <ArrowRight size={13} />
                </a>
              </article>
            ))}

            <article className="leaders-matrix-card reserved">
              <Library size={22} />
              <h3>Additional experts</h3>
              <p>Reserved for summit speakers, institutional representatives, and verified leadership profiles.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="leaders-framework">
        <div className="leaders-portal-shell">
          <div className="leaders-framework-heading">
            <div>
              <p className="leaders-portal-kicker">Scientific collaborative mission</p>
              <h2>Strategic framework for leadership, research, and global education.</h2>
            </div>
            <span>Aligned with summit documentation, public education, and institutional visibility.</span>
          </div>

          <div className="leaders-framework-grid">
            {frameworkCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title}>
                  <Icon size={28} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="leaders-scholarship" id="proceedings">
        <div className="leaders-portal-shell leaders-scholarship-grid">
          <aside className="leaders-scholarship-sidebar">
            <p>GHF scholarly repository</p>
            <h2>Access is curated for authenticated members and institutional contributors.</h2>
            <div className="leaders-search-box">
              <input type="search" placeholder="Search leader, paper, summit..." />
              <button type="button">Search</button>
            </div>
            <div className="leaders-category-list">
              {["Clinical research", "Education", "Founders", "Summit papers", "Country chapters"].map((item) => (
                <span key={item}>
                  {item}
                  <b>0{item.length % 7 + 2}</b>
                </span>
              ))}
            </div>
            <div className="leaders-portal-card-dark">
              <Database size={20} />
              <strong>Scholastic portal</strong>
              <p>Protected repository area for proceedings, publications, and institutional documents.</p>
              <a href="mailto:info@worldhomeopathy.org">Request access</a>
            </div>
          </aside>

          <div className="leaders-paper-grid">
            {scholarlyPapers.map((paper) => (
              <article key={paper.title}>
                <span>{paper.tag}</span>
                <h3>{paper.title}</h3>
                <p>{paper.text}</p>
                <a href="mailto:info@worldhomeopathy.org">
                  Request paper <ArrowRight size={13} />
                </a>
              </article>
            ))}
            <article className="leaders-curated-alliance">
              <ShieldCheck size={28} />
              <h3>Curated alumni atlas</h3>
              <p>Reserved area for summit alumni, country delegates, and expert credentials.</p>
              <button type="button">Enter repository</button>
            </article>
          </div>
        </div>
      </section>

      <section className="leaders-question-strip">
        <div className="leaders-portal-shell">
          <BookOpen size={24} />
          <h2>Need to add a leader profile?</h2>
          <p>
            Share name, designation, country, biography, photo, source link, and
            summit contribution. The page is ready for verified additions.
          </p>
          <a href="mailto:info@worldhomeopathy.org">Submit profile information</a>
        </div>
      </section>
    </main>
  );
}

export default LeadersPage;
