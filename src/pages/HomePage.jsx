import React from "react";
import { ArrowRight, Award, Building2, ExternalLink, FileText, Globe2, MapPinned, Microscope, Newspaper, PlayCircle, ShieldCheck, Users, Video } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection.jsx";
import BrandMark from "../components/BrandMark.jsx";
import { exploreCards, leaders, mediaItems } from "../data/siteData.js";

const InteractiveGlobe = React.lazy(() => import("../components/InteractiveGlobe.jsx"));

const impactStats = [
  { value: "75+", label: "Countries connected to homeopathy practice and education" },
  { value: "500+", label: "Delegates, guests, speakers, and summit participants" },
  { value: "4+", label: "World summit chapters across major global destinations" },
  { value: "100+", label: "Leaders, institutions, press stories, and knowledge references" },
];

const heroProofs = [
  {
    icon: Globe2,
    label: "Global authority",
    text: "A neutral platform for worldwide homeopathy knowledge.",
  },
  {
    icon: Microscope,
    label: "Research focus",
    text: "Case documentation, publications, and academic collaboration.",
  },
  {
    icon: Users,
    label: "Summit network",
    text: "International dialogue through visible global events.",
  },
];

const impactLocations = ["Dubai", "Germany", "London", "India", "Goa"];

const storySteps = [
  {
    title: "Mission",
    text: "Position homeopathy through education, research, and international collaboration.",
  },
  {
    title: "Understanding",
    text: "Help visitors learn the history, principles, founder legacy, and global growth.",
  },
  {
    title: "Research",
    text: "Organize evidence-focused initiatives, publications, case studies, and partnerships.",
  },
  {
    title: "Summit",
    text: "Connect Dubai, Germany, London, Goa, and future chapters into one global story.",
  },
  {
    title: "Leadership",
    text: "Feature historical voices and modern contributors with a balanced international lens.",
  },
];

const presencePoints = [
  "Country-wise education and public awareness resources",
  "International summit chapters connected into one journey",
  "Research, media, and institutional references in one platform",
  "Global leaders presented with historical and modern balance",
];

const researchStreams = [
  {
    icon: Microscope,
    title: "Evidence and Case Documentation",
    text: "A modern research interface for structured case studies, conference notes, and evidence-focused discussions.",
  },
  {
    icon: FileText,
    title: "Publications and Knowledge Library",
    text: "A future searchable library organized by topic, author, country, year, and publication type.",
  },
  {
    icon: Building2,
    title: "Academic Collaboration",
    text: "A platform for institutional cooperation, research groups, universities, and international exchanges.",
  },
];

const summitShowcase = [
  {
    city: "Dubai",
    year: "2024",
    image: "/images/summit-recognition.jpg",
    title: "International visibility, delegates, awards, and media attention.",
  },
  {
    city: "Germany",
    year: "2025",
    image: "/images/summit-global-stage.jpg",
    title: "A historically meaningful chapter connected to Hahnemann's European legacy.",
  },
  {
    city: "London",
    year: "2026",
    image: "/images/dr-nitish-podium.jpg",
    title: "Institutional dialogue, research conversations, and global leadership presence.",
  },
];

const mediaLogos = ["Faculty of Homeopathy", "Republic World", "Express Healthcare", "ThePrint", "Business Standard"];

function HomePage() {
  const featuredLeader = leaders.find((leader) => leader.featured) || leaders[leaders.length - 1];
  const leaderPreview = leaders.filter((leader) => leader.name !== featuredLeader.name).slice(0, 4);

  return (
    <main className="home-redesign home-movement">
      <section className="hero institution-hero">
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
            Across continents. Across generations. Across borders. A global platform for knowledge,
            summits, research, leadership, media, and institutional collaboration.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/explore">
              Explore Homeopathy <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" to="/summit">
              World Summit <PlayCircle size={18} />
            </Link>
            <Link className="button ghost" to="/research">
              Research Center <Microscope size={18} />
            </Link>
          </div>
        </motion.div>

        <div className="hero-network hero-story-visual">
          <div className="hero-image-feature" role="img" aria-label="International homeopathy summit visual">
            <div className="hero-image-copy">
              <span>Global Network</span>
              <h2>A visual centerpiece for the worldwide homeopathy network.</h2>
              <p>Summits, research conversations, leadership visibility, and international collaboration in one global platform.</p>
            </div>
            <div className="hero-image-meta">
              <span>Dubai</span>
              <span>Germany</span>
              <span>London</span>
              <span>India</span>
            </div>
          </div>
        </div>
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

      <AnimatedSection className="impact-section">
        <div className="impact-story">
          <div className="impact-globe-card" aria-label="Animated worldwide homeopathy network">
            <React.Suspense fallback={<div className="interactive-globe-canvas globe-fallback"></div>}>
              <InteractiveGlobe />
            </React.Suspense>
            <span className="globe-interaction-hint">Drag to rotate</span>
          </div>
          <div className="impact-heading">
            <p className="eyebrow">Global Impact</p>
            <h2>Built around the scale of a worldwide movement, not a local campaign.</h2>
            <p>
              Animated country flags open real summit and research coverage, showing how
              key locations connect into one international homeopathy movement.
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

      <section className="home-journey" aria-label="Global platform journey">
        <div className="journey-copy">
          <p className="eyebrow">Global Platform Journey</p>
          <h2>A clear global pathway: mission, impact, knowledge, research, summit, leadership.</h2>
        </div>
        <div className="journey-steps">
          {storySteps.map((step, index) => (
            <span key={step.title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <b>{step.title}</b>
              {step.text}
            </span>
          ))}
        </div>
      </section>

      <AnimatedSection className="section mission-band">
        <div className="section-intro">
          <p className="eyebrow">Global Mission</p>
          <h2>A global digital headquarters for homeopathy knowledge, research, and collaboration.</h2>
        </div>
        <div className="mission-text">
          <p>
            WorldHomeopathy.org presents homeopathy through a wider international lens: education,
            public awareness, research discussion, country-wise resources, global leaders, and summit
            visibility.
          </p>
          <p>
            Burnett Homeopathy appears naturally through summit organization, research initiatives,
            leadership visibility, and media coverage while the platform remains independent in tone
            and global in identity.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section global-presence">
        <div className="presence-visual" aria-label="Global presence map">
          <div className="presence-map-grid">
            <span className="presence-dot p-india">India</span>
            <span className="presence-dot p-dubai">Dubai</span>
            <span className="presence-dot p-germany">Germany</span>
            <span className="presence-dot p-london">London</span>
            <span className="presence-arc arc-one"></span>
            <span className="presence-arc arc-two"></span>
            <span className="presence-arc arc-three"></span>
          </div>
        </div>
        <div className="presence-copy">
          <p className="eyebrow">Global Presence</p>
          <h2>One map for countries, organizations, research centers, and summit locations.</h2>
          <p>
            The homepage needs to show visitors that this is a worldwide platform from the first few
            scrolls. The map layer turns scattered content into a connected international system.
          </p>
          <div className="presence-list">
            {presencePoints.map((point) => (
              <span key={point}>
                <ShieldCheck size={18} />
                {point}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section understanding-section">
        <div className="section-intro wide">
          <p className="eyebrow">Explore Homeopathy</p>
          <h2>Begin with the foundations of global homeopathy.</h2>
        </div>
        <div className="knowledge-lines">
          {exploreCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link className="knowledge-line" to={card.path} key={card.title}>
                <span className="knowledge-index">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={25} />
                <div>
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                </div>
                <ArrowRight size={18} />
              </Link>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="summit-showcase">
        <div className="summit-showcase-heading">
          <p className="eyebrow">World Homeopathy Summit</p>
          <h2>Dubai, Germany, London, and the next international chapter.</h2>
          <Link className="text-link" to="/summit">
            Explore summit journey <ArrowRight size={16} />
          </Link>
        </div>
        <div className="summit-photo-grid">
          {summitShowcase.map((summit) => (
            <Link className="summit-photo-card" to="/summit" key={summit.city}>
              <img src={summit.image} alt={`${summit.city} World Homeopathy Summit`} />
              <span>{summit.year}</span>
              <strong>{summit.city} Summit</strong>
              <p>{summit.title}</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section research-story">
        <div className="research-photo-panel">
          <img src="/images/summit-global-stage.jpg" alt="Academic discussion and summit presentation" />
        </div>
        <div className="research-editorial">
          <p className="eyebrow">Research Center</p>
          <h2>Research should feel like institutional dialogue, not an empty text page.</h2>
          <p>
            The homepage now introduces research through conference outcomes, publications, case
            documentation, academic collaboration, and evidence-focused initiatives.
          </p>
          <div className="research-streams">
            {researchStreams.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={24} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <Link className="text-link" to="/research">
            Explore research center <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section leaders-editorial">
        <div className="leader-feature">
          <img src={featuredLeader.image} alt={featuredLeader.name} />
          <div>
            <p className="eyebrow">Global Leaders</p>
            <h2>{featuredLeader.name}</h2>
            <span>{featuredLeader.role}</span>
            <p>{featuredLeader.text}</p>
            <Link className="text-link" to="/leaders">
              View global leaders <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="leader-roster">
          {leaderPreview.map((leader) => (
            <Link to="/leaders" key={leader.name}>
              <img src={leader.image} alt={leader.name} />
              <span>{leader.role}</span>
              <strong>{leader.name}</strong>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section media-coverage">
        <div className="media-wall">
          <p className="eyebrow">Media Coverage</p>
          <h2>Featured coverage creates authority beyond the platform itself.</h2>
          <div className="media-logo-wall" aria-label="Featured media logos">
            {mediaLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
          <div className="news-list">
            {mediaItems.map((item) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
                <Newspaper size={22} />
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
                <p>{item.source}</p>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="video-feature">
        <div className="video-copy">
          <p className="eyebrow">Summit Highlights</p>
          <h2>World Homeopathy Summit Highlights</h2>
          <p>
            This section is ready for the official YouTube highlight film. Once the final video link is
            shared, it can be embedded directly here without changing the homepage layout.
          </p>
          <Link className="button secondary" to="/summit">
            Watch the journey <PlayCircle size={16} />
          </Link>
        </div>
        <div className="video-frame">
          <div className="video-placeholder">
            <Video size={44} />
            <strong>Official highlight video</strong>
            <span>Embed YouTube link here</span>
          </div>
          <div className="video-metrics">
            <span><Award size={16} /> Summit chapters</span>
            <span><Building2 size={16} /> Institutional venues</span>
            <span><Users size={16} /> Global delegates</span>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default HomePage;
