import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  MapPinned,
  Microscope,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection.jsx";
import BrandMark from "../components/BrandMark.jsx";

const InteractiveGlobe = React.lazy(() => import("../components/InteractiveGlobe.jsx"));

const heroProofs = [
  {
    icon: Globe2,
    label: "Global authority",
    text: "A neutral front door for worldwide homeopathy knowledge.",
  },
  {
    icon: Microscope,
    label: "Research focus",
    text: "A pathway into evidence, publications, and academic dialogue.",
  },
  {
    icon: Users,
    label: "Summit network",
    text: "International events connected into one global movement.",
  },
];

const impactStats = [
  { value: "75+", label: "Countries connected to homeopathy practice and education" },
  { value: "4+", label: "World summit chapters across global destinations" },
  { value: "500+", label: "Delegates, guests, speakers, and summit participants" },
  { value: "100+", label: "Leaders, institutions, press stories, and knowledge references" },
];

const impactLocations = ["Dubai", "Germany", "London", "India", "Goa"];

const heroValues = [
  {
    icon: Leaf,
    text: "Evidence-based research and clinical excellence",
  },
  {
    icon: GraduationCap,
    text: "Quality education and professional training",
  },
  {
    icon: Users,
    text: "Global collaboration and knowledge exchange",
  },
  {
    icon: Globe2,
    text: "Promoting natural, safe, and holistic healthcare",
  },
];

const heroNetworkCards = [
  {
    icon: Microscope,
    title: "Research Center",
    text: "Advancing global research through studies, trials, and publications.",
    action: "Explore Research",
    path: "/research",
    position: "research",
  },
  {
    icon: Users,
    title: "Global Leaders",
    text: "Uniting visionary leaders and experts shaping the future of homeopathy.",
    action: "Meet Leaders",
    path: "/leaders",
    position: "leaders",
  },
  {
    icon: Globe2,
    title: "World Summit",
    text: "International conferences and events that inspire, connect, and create impact.",
    action: "Discover Summit",
    path: "/summit",
    position: "summit",
  },
  {
    icon: GraduationCap,
    title: "Education Network",
    text: "Empowering learners through courses, training programs, and academic excellence.",
    action: "Explore Education",
    path: "/explore",
    position: "education",
  },
  {
    icon: Newspaper,
    title: "Media Hub",
    text: "News, interviews, insights, and updates from the global homeopathy community.",
    action: "Visit Media",
    path: "/media",
    position: "media",
  },
  {
    icon: BookOpen,
    title: "Publications",
    text: "Journals, articles, case studies, and resources for evidence-based practice.",
    action: "View Publications",
    path: "/research",
    position: "publications",
  },
  {
    icon: Handshake,
    title: "Partner Associations",
    text: "Strengthening ties with leading organizations and institutions worldwide.",
    action: "Our Partners",
    path: "/directory",
    position: "partners",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    text: "Encouraging new ideas, technologies, and approaches to advance homeopathy.",
    action: "Explore Innovation",
    path: "/research",
    position: "innovation",
  },
];

const heroNews = [
  {
    icon: FileText,
    title: "New Research Published",
    text: "Clinical study and case documentation updates",
    time: "2 hours ago",
  },
  {
    icon: Users,
    title: "New Leader Joined",
    text: "International advisory visibility expanded",
    time: "5 hours ago",
  },
  {
    icon: CalendarDays,
    title: "Upcoming Summit",
    text: "World Homeopathy Summit network planning",
    time: "May 20-22, 2025",
  },
  {
    icon: Globe2,
    title: "Global Community",
    text: "New partnerships and country participation",
    time: "1 day ago",
  },
];

const heroStats = [
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Connected",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Practitioners Worldwide",
  },
  {
    icon: BookOpen,
    value: "120+",
    label: "Research Articles",
  },
  {
    icon: CalendarDays,
    value: "100+",
    label: "Summits & Conferences",
  },
  {
    icon: Handshake,
    value: "40+",
    label: "Partner Associations",
  },
  {
    icon: FlaskConical,
    value: "25+",
    label: "Years of Global Impact",
  },
];

const pageGateways = [
  {
    icon: BookOpen,
    title: "Explore Homeopathy",
    text: "History, principles, Hahnemann, World Homeopathy Day, and public education.",
    path: "/explore",
    action: "Open knowledge hub",
  },
  {
    icon: PlayCircle,
    title: "World Summit",
    text: "Dubai, Germany, London, and upcoming summit chapters with galleries and coverage.",
    path: "/summit",
    action: "View summit journey",
  },
  {
    icon: Microscope,
    title: "Research Center",
    text: "Publications, case studies, collaborations, and evidence-focused initiatives.",
    path: "/research",
    action: "Enter research center",
  },
  {
    icon: Users,
    title: "Global Leaders",
    text: "Historical and modern contributors presented with a balanced international lens.",
    path: "/leaders",
    action: "Meet the leaders",
  },
  {
    icon: MapPinned,
    title: "World Map",
    text: "Country-wise resources, organizations, events, institutions, and directory references.",
    path: "/directory",
    action: "Explore map",
  },
  {
    icon: Newspaper,
    title: "Media",
    text: "External coverage, press references, summit articles, and institutional visibility.",
    path: "/media",
    action: "Read coverage",
  },
];

const authoritySignals = [
  "Independent global platform identity",
  "Burnett Homeopathy referenced through real summit and research contributions",
  "Research, leaders, media, and countries organized into dedicated pages",
  "Clear visitor journey from global mission to detailed resources",
];

function HomePage() {
  return (
    <main className="home-redesign home-movement structured-home reference-home font-sans">
      <section className="hero institution-hero">
        <div className="hero-ambient" aria-hidden="true">
          <span className="hero-spotlight spotlight-primary"></span>
          <span className="hero-spotlight spotlight-secondary"></span>
          <span className="hero-grid-glow"></span>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mission-kicker">
            <span>Global digital headquarters of homeopathy</span>
          </div>
          <h1>Connecting the Global Homeopathy Community</h1>
          <p>
            A worldwide platform for education, research, innovation, leadership, and international
            collaboration in homeopathy. Uniting practitioners, researchers, institutions, and
            supporters to <strong>advance the science, practice, and awareness of homeopathy</strong>{" "}
            for a healthier world.
          </p>
          <div className="hero-value-list">
            {heroValues.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.text}>
                  <Icon size={22} />
                  {item.text}
                </span>
              );
            })}
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/explore">
              Start Exploring <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" to="/summit">
              World Summit <PlayCircle size={18} />
            </Link>
            <Link className="button ghost" to="/research">
              Research Center <Microscope size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-network hero-story-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-hub-system" aria-label="WorldHomeopathy.org global platform network">
            <div className="hero-world-watermark" aria-hidden="true"></div>
            <div className="hub-orbit" aria-hidden="true">
              <span className="orbit orbit-a"></span>
              <span className="orbit orbit-b"></span>
              <span className="orbit orbit-c"></span>
            </div>
            <div className="central-hub">
              <span>WorldHomeopathy.org</span>
              <strong>Global Digital Headquarters of Homeopathy</strong>
            </div>
            {heroNetworkCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  className={`network-card ${card.position}`}
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.06, duration: 0.45 }}
                >
                  <span className="network-icon"><Icon size={28} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link to={card.path}>
                    {card.action} <ArrowRight size={15} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="hero-news-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <div className="news-heading">
            <strong>What's Happening Now</strong>
            <span>Live</span>
          </div>
          <div className="news-items">
            {heroNews.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={20} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                    <small>{item.time}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="hero-stats-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          {heroStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label}>
                <span><Icon size={31} /></span>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            );
          })}
        </motion.div>
      </section>

      <section className="home-proof-strip" aria-label="Platform highlights">
        {heroProofs.map((proof) => {
          const Icon = proof.icon;
          return (
            <span key={proof.label}>
              <Icon size={20} />
              <strong>{proof.label}</strong>
              {proof.text}
            </span>
          );
        })}
      </section>

      <AnimatedSection className="section home-intent">
        <div>
          <p className="eyebrow">Global Mission</p>
          <h2>A calm, credible entry point for the worldwide homeopathy community.</h2>
        </div>
        <div className="home-intent-copy">
          <p>
            The platform opens with education first: a clear path for students, practitioners,
            media, institutions, and the public to understand homeopathy in a global context.
          </p>
          <p>
            From there, visitors can move into summit chapters, research initiatives, leadership
            profiles, country references, and verified media coverage without losing the global story.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="impact-section structured-impact">
        <div className="impact-story">
          <div className="impact-globe-card" aria-label="Animated worldwide homeopathy network">
            <React.Suspense fallback={<div className="interactive-globe-canvas globe-fallback"></div>}>
              <InteractiveGlobe />
            </React.Suspense>
            <span className="globe-interaction-hint">Drag to rotate</span>
          </div>
          <div className="impact-heading">
            <p className="eyebrow">Global Impact</p>
            <h2>One international movement, organized into clear destinations.</h2>
            <p>
              Summit locations, research conversations, country participation, and leadership
              visibility connect into one international movement.
            </p>
            <Link className="text-link" to="/directory">
              Open world map <MapPinned size={16} />
            </Link>
          </div>
        </div>
        <div className="impact-counters">
          {impactStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>
        <div className="impact-locations" aria-label="Summit and presence locations">
          {impactLocations.map((location) => (
            <span key={location}>{location}</span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section platform-gateway">
        <div className="gateway-heading">
          <p className="eyebrow">Explore The Platform</p>
          <h2>Every visitor gets a focused path into the global story.</h2>
          <p>
            Students can begin with fundamentals. Delegates can follow the summit journey.
            Researchers, media teams, and institutions can move directly into their areas.
          </p>
        </div>
        <div className="gateway-list">
          {pageGateways.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link className="gateway-row" to={item.path} key={item.title}>
                <span className="gateway-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="gateway-icon"><Icon size={24} /></span>
                <span className="gateway-text">
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
                <span className="gateway-action">
                  {item.action} <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section homepage-authority">
        <div className="authority-photo" aria-label="World Homeopathy Summit institutional visual">
          <img src="/images/summit-global-stage.jpg" alt="World Homeopathy Summit stage and delegates" />
        </div>
        <div className="authority-copy">
          <p className="eyebrow">Authority Signal</p>
          <h2>A global platform identity with credible contributors.</h2>
          <p>
            WorldHomeopathy.org presents homeopathy through education, research, summits, leaders,
            country presence, and media. Burnett Homeopathy appears where it contributes through
            summit organization, research activity, and leadership visibility.
          </p>
          <div className="authority-list">
            {authoritySignals.map((signal) => (
              <span key={signal}>
                <ShieldCheck size={18} />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-final-cta">
        <div>
          <p className="eyebrow">Start Here</p>
          <h2>Explore the platform without losing the global story.</h2>
        </div>
        <div className="final-actions">
          <Link className="button primary" to="/explore">
            Explore Homeopathy <BookOpen size={17} />
          </Link>
          <Link className="button secondary" to="/summit">
            World Summit <PlayCircle size={17} />
          </Link>
          <Link className="button ghost" to="/media">
            Media Coverage <FileText size={17} />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default HomePage;
