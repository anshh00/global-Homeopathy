import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroCards = [
  {
    icon: FlaskConical,
    title: "Research Center",
    text: "Advancing global studies, trials, and publications.",
    action: "Explore",
    to: "/research",
    tone: "teal",
  },
  {
    icon: Users,
    title: "Global Leaders",
    text: "Uniting visionary leaders and experts.",
    action: "Meet Leaders",
    to: "/leaders",
    tone: "navy",
  },
  {
    icon: Globe2,
    title: "World Summit",
    text: "International events that connect and create impact.",
    action: "Discover",
    to: "/summit",
    tone: "gold",
  },
  {
    icon: BookOpen,
    title: "Publications",
    text: "Journals, articles, and peer-reviewed global insights.",
    action: "View Library",
    to: "/media",
    tone: "olive",
  },
];

const platformStats = [
  { value: "75+", label: "Countries" },
  { value: "95k+", label: "Practitioners" },
  { value: "120+", label: "Research Articles" },
];

const researchItems = [
  {
    label: "Research Note",
    title: "Efficacy of Ultra High Dilutions in Chronic Allergic Rhinitis",
    text: "Clinical notes, source-led evidence, and publication references organized for review.",
    meta: "Journal of Integrative Medicine",
  },
  {
    label: "Whitepaper",
    title: "Standardization of Potentization Processes: Molecular Analysis",
    text: "Manufacturing standards, research methods, and scientific review notes in one place.",
    meta: "Burnett Homeopathy Pvt. Ltd.",
  },
  {
    label: "Public Health",
    title: "Public Health Impact in Developing Economies",
    text: "Reserved for country-level references, healthcare education, and public guidance.",
    meta: "Foundation research desk",
  },
];

const newsroomItems = [
  {
    tag: "Summit Desk",
    title: "World Homeopathy Summit 2024 Agenda",
    text: "Planning and reference space for keynote sessions, summit notes, and public reports.",
    image: "/images/summit-global-stage.jpg",
  },
  {
    tag: "Platform Update",
    title: "New Certification Standards",
    text: "Institutional standards, learning pathways, and reference material for readers.",
  },
  {
    tag: "Media Desk",
    title: "European Research Grants",
    text: "Collaborations, academic updates, and partner notices for the research community.",
  },
];

const calendarItems = [
  { date: "15", label: "Ethics Committee Meeting", note: "Governance and standards review" },
  { date: "08", label: "Regional Symposium", note: "Education and summit planning" },
  { date: "22", label: "Clinical Standards Webinar", note: "Practice guidance and training" },
];

const infrastructurePoints = [
  "State-of-the-art manufacturing and quality-focused operations",
  "Global logistics and summit-led international visibility",
  "Research, education, and media contribution across the platform",
];

const governanceAreas = [
  {
    icon: ShieldCheck,
    title: "Ethics Committee",
    text: "Responsible language, public guidance, and editorial standards for the platform.",
    action: "Documents",
  },
  {
    icon: Microscope,
    title: "Research Board",
    text: "Verified studies, citations, databases, and evidence summaries for researchers.",
    action: "Research",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Education Council",
    text: "Learning paths, public education, and professional resources for global readers.",
    action: "Curriculum",
  },
];

function IconPanel({ icon: Icon, children, className = "" }) {
  return (
    <span className={`stitch-icon-panel ${className}`} aria-hidden="true">
      <Icon size={20} />
      {children}
    </span>
  );
}

function HeroCard({ card }) {
  const Icon = card.icon;

  return (
    <Link className={`stitch-hero-card is-${card.tone}`} to={card.to}>
      <IconPanel icon={Icon} />
      <h2>{card.title}</h2>
      <p>{card.text}</p>
      <span>
        {card.action} <ArrowRight size={14} />
      </span>
    </Link>
  );
}

function ResearchArticle({ item }) {
  return (
    <article className="stitch-research-card">
      <span>{item.label}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <small>
        <FileText size={13} />
        {item.meta}
      </small>
    </article>
  );
}

function HomePage() {
  return (
    <main className="stitch-home">
      <section className="stitch-hero">
        <div className="stitch-hero-copy">
          <div className="stitch-breadcrumb">
            <span>Home</span>
            <span>Global Platform</span>
            <span>Research Hub</span>
          </div>

          <h1>Connecting the Global Homeopathy Community</h1>
          <p>
            A worldwide platform for education, research, innovation, leadership, and
            international collaboration in homeopathy. Uniting practitioners, researchers,
            institutions, and supporters to <strong>advance the science and practice</strong> for
            a healthier world.
          </p>

          <div className="stitch-hero-actions">
            <Link className="stitch-button primary" to="/explore">
              Start Exploring <ArrowRight size={16} />
            </Link>
            <Link className="stitch-button secondary" to="/summit">
              <Sparkles size={15} />
              World Summit
            </Link>
          </div>

          <div className="stitch-stat-row" aria-label="Platform highlights">
            {platformStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="stitch-hero-grid" aria-label="Homepage platform gateways">
          {heroCards.map((card) => (
            <HeroCard card={card} key={card.title} />
          ))}
        </div>
      </section>

      <section className="stitch-section stitch-repository" aria-labelledby="repository-heading">
        <div className="stitch-section-head">
          <div>
            <p className="stitch-kicker">Global Research Repository</p>
          <h2 id="repository-heading">Critical notes and research publications.</h2>
          </div>
          <Link to="/research">
            View Archive <ArrowRight size={14} />
          </Link>
        </div>

        <div className="stitch-research-grid">
          {researchItems.map((item) => (
            <ResearchArticle item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="stitch-section stitch-newsroom" aria-labelledby="newsroom-heading">
        <h2 id="newsroom-heading">Foundation Newsroom</h2>

        <div className="stitch-news-layout">
          <div className="stitch-news-main">
            <img src="/images/summit-global-stage.jpg" alt="World Homeopathy Summit delegates" />
            <div>
              <span>Global Desk</span>
              <h3>World Homeopathy Summit 2024 Agenda</h3>
              <p>
                A structured editorial space for summit coverage, verified media references,
                and public updates.
              </p>
              <Link to="/media">
                Explore archive <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="stitch-news-small-grid">
            {newsroomItems.slice(1).map((item) => (
              <article key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/media">
                  Read Story <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>

          <aside className="stitch-calendar" aria-label="Events calendar">
            <div className="stitch-calendar-head">
              <strong>Events Calendar</strong>
              <CalendarDays size={18} />
            </div>
            {calendarItems.map((item) => (
              <article key={item.date}>
                <time>{item.date}</time>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.note}</span>
                </div>
              </article>
            ))}
            <Link to="/summit">
              Full Calendar <ArrowRight size={13} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="stitch-burnett-band">
        <div className="stitch-burnett-visual">
          <img src="/images/stitch-burnett-lab-reference.jpg" alt="Manufacturing and research infrastructure visual" />
        </div>
        <div className="stitch-burnett-copy">
          <p className="stitch-kicker">Founder Technical Partner</p>
          <h2>Burnett Homeopathy: Setting Global Infrastructure Standards</h2>
          <p>
            Representing the principle of modern manufacturing and research support, Burnett
            Homeopathy Pvt. Ltd. appears through summit, education, and infrastructure activity.
          </p>
          <div className="stitch-burnett-points">
            {infrastructurePoints.map((point) => (
              <span key={point}>
                <CheckCircle2 size={16} />
                {point}
              </span>
            ))}
          </div>
          <Link className="stitch-button light" to="/summit">
            Partnership Details
          </Link>
        </div>
      </section>

      <section className="stitch-section stitch-governance" aria-labelledby="governance-heading">
        <div className="stitch-centered-head">
          <h2 id="governance-heading">Foundation Governance</h2>
          <p>
            A clear framework for editorial, research, and education governance.
          </p>
        </div>

        <div className="stitch-governance-grid">
          {governanceAreas.map((item) => {
            const Icon = item.icon;
            return (
              <article className={item.featured ? "is-featured" : ""} key={item.title}>
                <IconPanel icon={Icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>
                  {item.action} <ArrowRight size={13} />
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
