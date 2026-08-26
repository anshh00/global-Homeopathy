import React from "react";
import { ArrowRight, BookOpen, Globe2, GraduationCap, Landmark, Newspaper, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const audienceNotes = [
  {
    icon: BookOpen,
    title: "Students and the public",
    text: "A calm starting point for definitions, history, principles, safety language, and responsible learning paths.",
  },
  {
    icon: GraduationCap,
    title: "Practitioners and educators",
    text: "A structured reference hub for professional context, institutions, learning resources, and global dialogue.",
  },
  {
    icon: Newspaper,
    title: "Media and institutions",
    text: "A clearer way to follow summits, research updates, public references, and verified external coverage.",
  },
];

const platformAreas = [
  "History of homeopathy and its global journey",
  "Indian homeopathy institutions, education, and public references",
  "Research discussions, databases, papers, and evidence-focused initiatives",
  "World summit coverage, media stories, leaders, jobs, and professional opportunities",
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="about-page-hero__copy">
          <p className="about-page-kicker">About Global Homeopathy Foundation</p>
          <h1 id="about-page-title">
            A global digital home for homeopathy knowledge, institutions, research, and collaboration.
          </h1>
          <p>
            Global Homeopathy Foundation exists to make the worldwide homeopathy story easier to
            understand, verify, and navigate. The website brings together historical context,
            educational references, research conversations, summit activity, leadership profiles,
            media coverage, and professional opportunities in one organised platform.
          </p>
          <div className="about-page-hero__actions">
            <Link className="about-page-button" to="/explore">
              Explore the knowledge hub <ArrowRight size={16} />
            </Link>
            <Link className="about-page-link" to="/contact">
              Contact the platform <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <aside className="about-page-hero__panel" aria-label="Platform focus">
          <Globe2 size={34} />
          <span>Independent Global Platform</span>
          <p>
            Designed for education, public reference, research awareness, summit visibility, and
            institutional connection across the homeopathy community.
          </p>
        </aside>
      </section>

      <section className="about-page-purpose" aria-labelledby="about-purpose-title">
        <div>
          <p className="about-page-kicker">Why this website exists</p>
          <h2 id="about-purpose-title">One place to learn the story before entering the details.</h2>
        </div>
        <div className="about-page-purpose__text">
          <p>
            Homeopathy has a long historical record, a large learning tradition, and active
            communities across many countries. For a visitor, that information can feel scattered:
            history in one place, research in another, summit reports somewhere else, and media
            references across many external platforms. This website is built to reduce that
            confusion by giving every visitor a clear first route.
          </p>
          <p>
            The platform is not designed as a clinic website or a product catalogue. It is an
            educational and institutional gateway where students, doctors, researchers, journalists,
            organisers, and the public can understand what homeopathy is, where it comes from, how
            it is discussed internationally, and where current opportunities or events are visible.
          </p>
          <p>
            Burnett Homeopathy Pvt. Ltd. is referenced where relevant as a contributor to summit,
            research, media, and leadership activity. The wider identity of the website remains a
            global homeopathy platform, so visitors can see Burnett's role naturally inside a larger
            international ecosystem.
          </p>
        </div>
      </section>

      <section className="about-page-audience" aria-labelledby="about-audience-title">
        <p className="about-page-kicker">Who it helps</p>
        <h2 id="about-audience-title">Built for people who need context, not just navigation.</h2>
        <div className="about-page-audience__grid">
          {audienceNotes.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-page-platform" aria-labelledby="about-platform-title">
        <div>
          <p className="about-page-kicker">What the platform organises</p>
          <h2 id="about-platform-title">A practical map of the homeopathy ecosystem.</h2>
          <p>
            Each page is meant to answer a different visitor need while keeping the whole experience
            connected: learn first, then move into research, summits, leadership, jobs, media, and
            contact routes.
          </p>
        </div>
        <ul>
          {platformAreas.map((area) => (
            <li key={area}>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-page-editorial" aria-labelledby="about-editorial-title">
        <Landmark size={28} aria-hidden="true" />
        <div>
          <p className="about-page-kicker">Editorial standard</p>
          <h2 id="about-editorial-title">Clear, responsible, and source-aware.</h2>
          <p>
            The website should present homeopathy with dignity and responsibility. Historical and
            institutional information should be separated from promotional content, medical claims
            should be handled carefully, and external links should help visitors verify important
            references directly.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
