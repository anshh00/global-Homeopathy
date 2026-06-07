import React from "react";
import { ArrowRight, BookOpen, FileText, Globe2, MapPinned, Microscope, Newspaper, PlayCircle, ShieldCheck, Users } from "lucide-react";
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
    <main className="home-redesign home-movement structured-home font-sans">
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
            <BrandMark compact />
            <span>Global digital headquarters of homeopathy</span>
          </div>
          <h1>Connecting the Global Homeopathy Community</h1>
          <div className="hero-mantra" aria-label="Platform focus">
            <span>Research.</span>
            <span>Innovation.</span>
            <span>Education.</span>
            <span>Leadership.</span>
          </div>
          <p>
            A worldwide platform for education, research, innovation, leadership, and
            international collaboration in homeopathy.
          </p>
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
          <div className="hero-signal-stage" role="img" aria-label="Animated global homeopathy network">
            <div className="hero-world-disc">
              <span className="map-shape map-shape-one"></span>
              <span className="map-shape map-shape-two"></span>
              <span className="map-shape map-shape-three"></span>
              <span className="signal-ring signal-ring-one"></span>
              <span className="signal-ring signal-ring-two"></span>
              <span className="signal-ring signal-ring-three"></span>
              <span className="signal-path signal-path-one"></span>
              <span className="signal-path signal-path-two"></span>
              <span className="signal-path signal-path-three"></span>
              <span className="signal-dot signal-dubai">Dubai</span>
              <span className="signal-dot signal-germany">Germany</span>
              <span className="signal-dot signal-london">London</span>
              <span className="signal-dot signal-india">India</span>
            </div>
            <div className="hero-visual-caption">
              <span>WorldHomeopathy Atlas</span>
              <strong>Worldwide homeopathy network</strong>
              <p>Education, summits, research, media, and country presence connected into one global movement.</p>
            </div>
          </div>
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
