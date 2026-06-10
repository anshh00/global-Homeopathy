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

const platformStats = [
  {
    icon: Globe2,
    value: 75,
    suffix: "+",
    label: "Countries",
    detail: "Connected",
  },
  {
    icon: Users,
    value: 95000,
    suffix: "+",
    label: "Practitioners",
    detail: "Worldwide",
  },
  {
    icon: BookOpen,
    value: 120,
    suffix: "+",
    label: "Research Articles",
    detail: "",
  },
  {
    icon: CalendarDays,
    value: 100,
    suffix: "+",
    label: "Summits &",
    detail: "Conferences",
  },
  {
    icon: Handshake,
    value: 40,
    suffix: "+",
    label: "Partner",
    detail: "Associations",
  },
  {
    icon: FlaskConical,
    value: 25,
    suffix: "+",
    label: "Years of Global",
    detail: "Impact",
  },
];

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
    text: "Advancing global research",
    action: "Explore Research",
    path: "/research",
  },
  {
    icon: Users,
    title: "Global Leaders",
    text: "Uniting visionary leaders",
    action: "Meet Leaders",
    path: "/leaders",
  },
  {
    icon: Globe2,
    title: "World Summit",
    text: "International events",
    action: "Discover Summit",
    path: "/summit",
  },
  {
    icon: GraduationCap,
    title: "Education Network",
    text: "Empowering education",
    action: "Explore Education",
    path: "/explore",
  },
  {
    icon: Newspaper,
    title: "Media Hub",
    text: "News and interviews",
    action: "Visit Media",
    path: "/media",
  },
  {
    icon: BookOpen,
    title: "Publications",
    text: "Journals and articles",
    action: "View Publications",
    path: "/research",
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

const missionPillars = [
  {
    icon: GraduationCap,
    label: "Education",
    text: "A clear path for learning",
  },
  {
    icon: Microscope,
    label: "Research",
    text: "Evidence for better outcomes",
  },
  {
    icon: Users,
    label: "Leadership",
    text: "Profiles that inspire trust",
  },
  {
    icon: Globe2,
    label: "Global Reach",
    text: "One story, many nations",
  },
];

function AnimatedNumber({ value, suffix = "" }) {
  const ref = React.useRef(null);
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frameId = 0;
    let hasAnimated = false;
    const duration = 1200;

    const runCounter = () => {
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * eased));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          runCounter();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <strong ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </strong>
  );
}

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
          <h1>
            <span>Connecting the Global</span>
            <span>Homeopathy Community</span>
          </h1>
          <div className="hero-scope-line" aria-label="Platform focus areas">
            <span>Research</span>
            <span>Education</span>
            <span>World Summits</span>
            <span>Leadership</span>
          </div>
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
          <div className="hero-feature-grid" aria-label="WorldHomeopathy.org platform features">
            {heroNetworkCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  className="network-card"
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

      <AnimatedSection id="global-mission" className="section home-intent mission-showcase">
        <div className="mission-showcase-copy">
          <p className="eyebrow">Global Mission</p>
          <h2>A calm, credible entry point for the worldwide homeopathy community.</h2>
          <div className="mission-leaf-divider" aria-hidden="true">
            <Leaf size={18} />
            <span></span>
          </div>
          <div className="mission-body">
            <p>
              The platform opens with <strong>education</strong> first: a clear path for students,
              practitioners, media, institutions, and the public to understand homeopathy in a
              global context.
            </p>
            <p>
              From there, visitors can move into summit chapters, <strong>research</strong>{" "}
              initiatives, leadership profiles, country references, and verified{" "}
              <strong>media coverage</strong> without losing the global story. Each path keeps
              learning, evidence, leadership, and international participation connected inside
              one credible global platform.
            </p>
          </div>
          <div className="mission-pillars" aria-label="Global mission pillars">
            {missionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.label}>
                  <span><Icon size={29} /></span>
                  <strong>{pillar.label}</strong>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mission-visual-panel" aria-label="Worldwide homeopathy mission visual">
          <div className="mission-reference-art" aria-hidden="true">
            <img src="/images/mission-globe-generated.png" alt="" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>

      <section className="home-stat-ribbon" aria-label="WorldHomeopathy platform numbers">
        {platformStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.article
              className="home-stat-item"
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
            >
              <span className="home-stat-icon">
                <Icon size={28} />
              </span>
              <div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p>
                  {stat.label}
                  {stat.detail ? (
                    <>
                      <br />
                      {stat.detail}
                    </>
                  ) : null}
                </p>
              </div>
            </motion.article>
          );
        })}
      </section>

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
          <img src="/images/summit-dubai-authority.jpg" alt="World Homeopathy Summit 2 at Burj Al Arab, Dubai" />
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
        <div className="final-cta-copy">
          <p className="eyebrow">Start Here</p>
          <h2>Explore the platform without losing the global story.</h2>
          <p>
            Choose the route that matches your purpose. Each pathway opens a dedicated
            section while keeping education, summits, research, and media connected.
          </p>
        </div>
        <div className="final-pathways" aria-label="Homepage next-step routes">
          <Link className="final-pathway" to="/explore">
            <span className="final-pathway-number">01</span>
            <span className="final-pathway-icon"><BookOpen size={22} /></span>
            <span className="final-pathway-copy">
              <strong>Knowledge Hub</strong>
              <small>Start with history, principles, education, and global context.</small>
            </span>
            <span className="final-pathway-link">Open hub <ArrowRight size={16} /></span>
          </Link>
          <Link className="final-pathway" to="/summit">
            <span className="final-pathway-number">02</span>
            <span className="final-pathway-icon"><PlayCircle size={22} /></span>
            <span className="final-pathway-copy">
              <strong>Summit Trail</strong>
              <small>Follow Dubai, Germany, London, and future summit chapters.</small>
            </span>
            <span className="final-pathway-link">View journey <ArrowRight size={16} /></span>
          </Link>
          <Link className="final-pathway" to="/media">
            <span className="final-pathway-number">03</span>
            <span className="final-pathway-icon"><FileText size={22} /></span>
            <span className="final-pathway-copy">
              <strong>Media Desk</strong>
              <small>Read external coverage, references, and institutional visibility.</small>
            </span>
            <span className="final-pathway-link">Read coverage <ArrowRight size={16} /></span>
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default HomePage;
