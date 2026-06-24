import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Landmark,
  Library,
  Microscope,
  Network,
  Search,
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

const audiencePathways = [
  {
    number: "01",
    icon: BookOpen,
    title: "Students and the public",
    text: "Begin with history, foundational ideas, key figures, and a clear introduction to the global context.",
    action: "Enter the knowledge hub",
    to: "/explore",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Practitioners and educators",
    text: "Follow education, professional dialogue, international meetings, and learning resources.",
    action: "Follow the summit journey",
    to: "/summit",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Researchers and institutions",
    text: "Move directly into databases, publications, evidence summaries, and research organizations.",
    action: "Open the research center",
    to: "/research",
  },
  {
    number: "04",
    icon: Network,
    title: "Media and collaborators",
    text: "Find leadership profiles, summit reporting, institutional references, and public updates.",
    action: "Visit the media desk",
    to: "/media",
  },
];

const globalReferenceLinks = [
  {
    icon: Globe2,
    label: "Global strategy",
    title: "WHO Traditional Medicine Strategy 2025–2034",
    text: "A global framework centered on evidence, safety, regulation, health systems, sustainability, and innovation.",
    href: "https://www.who.int/publications/i/item/9789240113176",
  },
  {
    icon: Library,
    label: "Biomedical literature",
    title: "PubMed",
    text: "Search citations and abstracts from biomedical and life-science journals through the U.S. National Library of Medicine.",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=homeopathy",
  },
  {
    icon: Search,
    label: "Registered studies",
    title: "ClinicalTrials.gov",
    text: "Review publicly registered clinical studies, their status, study design, and available results information.",
    href: "https://clinicaltrials.gov/search?term=homeopathy",
  },
  {
    icon: Landmark,
    label: "Public research institution",
    title: "Central Council for Research in Homoeopathy",
    text: "An autonomous research organization under India’s Ministry of AYUSH coordinating scientific research in homoeopathy.",
    href: "https://ccrhindia.ayush.gov.in/",
  },
];

const editorialStandards = [
  {
    title: "Sources before slogans",
    text: "Research pages should lead visitors to the original database, publication, institution, or event record wherever possible.",
  },
  {
    title: "Context around every claim",
    text: "Study design, publication status, limitations, and uncertainty matter. The platform should make those distinctions visible.",
  },
  {
    title: "Education, not diagnosis",
    text: "Public information should support informed discussion and must not replace advice from a qualified healthcare professional.",
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

      <section className="stitch-audience-section" aria-labelledby="audience-heading">
        <div className="stitch-audience-intro">
          <p className="stitch-kicker">One platform, different journeys</p>
          <h2 id="audience-heading">Find the part of the global conversation that matters to you.</h2>
          <p>
            WorldHomeopathy.org is designed as a gateway rather than a single long article.
            Each pathway opens a focused area while keeping education, research, summits,
            leadership, and media connected.
          </p>
        </div>

        <div className="stitch-audience-list">
          {audiencePathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <Link to={pathway.to} className="stitch-audience-row" key={pathway.number}>
                <span className="stitch-audience-number">{pathway.number}</span>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{pathway.title}</h3>
                  <p>{pathway.text}</p>
                </div>
                <span className="stitch-audience-action">
                  {pathway.action}
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="stitch-reference-desk" aria-labelledby="reference-heading">
        <div className="stitch-reference-head">
          <div>
            <p className="stitch-kicker">Global reference desk</p>
            <h2 id="reference-heading">Start with the primary source.</h2>
          </div>
          <p>
            A credible global platform should help readers move beyond summaries. These
            independent public resources provide direct access to policy, literature,
            registered studies, and institutional research.
          </p>
        </div>

        <div className="stitch-reference-list">
          {globalReferenceLinks.map((resource) => {
            const Icon = resource.icon;
            return (
              <a href={resource.href} target="_blank" rel="noreferrer" key={resource.title}>
                <Icon aria-hidden="true" />
                <div>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>

      <section className="stitch-evidence-standard" aria-labelledby="standard-heading">
        <div className="stitch-standard-title">
          <p className="stitch-kicker">Editorial standard</p>
          <h2 id="standard-heading">Credibility is built in the details.</h2>
        </div>
        <div className="stitch-standard-copy">
          <p>
            Homeopathy is discussed differently across countries, healthcare systems, and
            research communities. WorldHomeopathy.org should present that conversation with
            clarity: linking evidence, identifying sources, and avoiding unsupported medical
            promises.
          </p>
        </div>
        <div className="stitch-standard-principles">
          {editorialStandards.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stitch-global-mission" aria-labelledby="mission-heading">
        <div className="stitch-mission-image">
          <img
            src="/images/summit-global-stage.jpg"
            alt="International delegates at a World Homeopathy Summit"
          />
          <span>International dialogue</span>
        </div>
        <div className="stitch-mission-copy">
          <p className="stitch-kicker">A connected global platform</p>
          <h2 id="mission-heading">Knowledge becomes more useful when institutions and people can find one another.</h2>
          <p>
            The platform brings public education, research navigation, summit records,
            leadership profiles, and media references into one coherent international
            destination. Burnett Homeopathy Pvt. Ltd. is referenced through its documented
            contribution to summit organization, research dialogue, and global visibility.
          </p>
          <blockquote>
            Build a clear public record. Connect serious work. Make the global story easier
            to understand.
          </blockquote>
          <div className="stitch-mission-links">
            <Link className="stitch-button primary" to="/explore">
              Explore the platform <ArrowRight size={16} />
            </Link>
            <Link className="stitch-text-link" to="/contact">
              Contact the foundation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
