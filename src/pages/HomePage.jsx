import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Globe2,
  Landmark,
  Microscope,
  Play,
  Quote,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image: "/images/homepage/hahnemann-statue.jpg",
    eyebrow: "Heritage with a future",
    title: "A tradition that keeps asking better questions.",
    text: "Begin with the history of homeopathy, then follow the people and ideas carrying its global conversation forward.",
    note: "History / learning / context",
  },
  {
    image: "/images/homepage/old-homeopathic-medicine.jpeg",
    eyebrow: "A tradition in objects",
    title: "Every remedy carries a story.",
    text: "Look back at the materials, texts, and practices that helped homeopathy travel across generations and borders.",
    note: "History / materia medica / memory",
  },
  {
    image: "/images/homepage/research-lab.jpg",
    eyebrow: "Practice, inquiry, responsibility",
    title: "The questions behind the practice matter.",
    text: "Follow research conversations, professional learning, and the work of making homeopathy easier to understand responsibly.",
    note: "Research and inquiry",
  },
  {
    image: "/images/homepage/summit-awards.jpg",
    eyebrow: "A living global archive",
    title: "Where homeopathy meets the world.",
    text: "A visual record of the people, places, conversations, and milestones shaping homeopathy across generations.",
    note: "Global summit community",
  },
];

const knowledgeThreads = [
  {
    number: "01",
    icon: BookOpen,
    title: "Begin with the foundations",
    text: "Learn about the history, language, principles, and people that shaped homeopathy. Start with context before moving into deeper resources.",
    to: "/explore",
    link: "Open the knowledge hub",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Follow the evidence conversation",
    text: "Find research pathways, reviews, databases, and evidence-focused initiatives with clear references and responsible language.",
    to: "/research",
    link: "Explore research",
  },
  {
    number: "03",
    icon: Globe2,
    title: "See the global movement",
    text: "Follow summits, country chapters, media coverage, and professional opportunities that connect the homeopathy community internationally.",
    to: "/summit",
    link: "View the summit journey",
  },
];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [typedAbout, setTypedAbout] = useState("");
  const aboutRef = useRef(null);
  const slide = heroSlides[activeSlide];
  const aboutTextLines = [
    "WorldHomeopathy.org is an independent digital platform created to make the global homeopathy story easier to discover, understand, and follow.",
    "It brings together history, education, research conversations, international summits, leadership, media coverage, and country perspectives in one clear place.",
    "Visitors can begin with trusted foundations, explore professional pathways, discover the homeopathy jobs portal, and connect with opportunities across the worldwide community.",
    "The platform is designed to help students, practitioners, researchers, institutions, journalists, and the public find useful context without losing sight of the people and ideas behind the movement.",
    "By giving knowledge, collaboration, events, publications, and career connections a shared home, it helps the community learn from one another and move the conversation forward.",
    "This is a place to begin with a better question and move confidently through the Center of the Experience.",
  ];
  const aboutText = aboutTextLines.join(" ");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4300);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aboutVisible || typedAbout.length >= aboutText.length) return undefined;
    const timer = window.setTimeout(() => {
      setTypedAbout(aboutText.slice(0, typedAbout.length + 1));
    }, 12);
    return () => window.clearTimeout(timer);
  }, [aboutText, aboutVisible, typedAbout]);

  return (
    <main className="original-home">
      <section
        className="original-home-hero"
        aria-label="Global Homeopathy visual introduction"
      >
        <div className="original-home-hero-media" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <img
              className={index === activeSlide ? "is-active" : ""}
              key={item.image}
              src={item.image}
              alt=""
            />
          ))}
        </div>
        <div className="original-home-hero-shade" aria-hidden="true" />
        <div className="original-home-hero-inner">
          <div className="original-home-hero-copy">
            <p className="original-home-hero-welcome">Welcome to the World Homeopathy Organisation</p>
            <p className="original-home-hero-eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="original-home-hero-text">{slide.text}</p>
            <div className="original-home-actions">
              <a className="original-button original-button-light" href="#about">
                About Us <ArrowRight size={16} />
              </a>
              <Link className="original-button original-button-outline" to="/contact">
                Join us <Users size={16} />
              </Link>
              <Link className="original-play-link" to="/media">
                <span className="original-play-icon"><Play size={14} fill="currentColor" /></span>
                Watch the global story
              </Link>
            </div>
          </div>

          <div className="original-home-hero-aside">
            <span className="original-home-hero-index">0{activeSlide + 1} / 0{heroSlides.length}</span>
            <span className="original-home-hero-note">{slide.note}</span>
            <button
              className="original-scroll-cue"
              type="button"
              onClick={() => document.querySelector("#welcome")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll to welcome section"
            >
              <ArrowDownRight size={18} />
              Discover the platform
            </button>
          </div>
        </div>
        <div className="original-home-slide-controls" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </button>
          ))}
        </div>
      </section>

      <section className="original-home-welcome" id="about" ref={aboutRef}>
        <div className="original-home-about-label">
          <span>About Us</span>
        </div>
        <div className="original-home-welcome-grid">
          <div className="original-home-welcome-heading">
            <h2>A shared place to understand the global homeopathy story.</h2>
          </div>
          <div className="original-home-welcome-copy">
            <div className={`original-home-typing ${aboutVisible ? "is-visible" : ""}`} aria-live="polite">
              {aboutTextLines.map((line, index) => {
                const start = aboutTextLines.slice(0, index).join(" ").length + (index ? 1 : 0);
                const visibleLine = typedAbout.slice(start, start + line.length);
                const isCurrentLine = typedAbout.length >= start && typedAbout.length < start + line.length;
                return (
                  <span className="original-home-typing-line" key={line}>
                    <span className="original-home-typing-text">
                      {visibleLine}
                      {isCurrentLine ? (
                        <span className="original-home-typing-caret" aria-hidden="true">|</span>
                      ) : null}
                    </span>
                  </span>
                );
              })}
            </div>
            <Link className="original-text-link" to="/explore">Start with the essentials <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="original-home-heritage-strip">
          <img src="/images/homepage/hahnemann-portrait.jpg" alt="Historical portrait of Samuel Hahnemann" />
          <div>
            <p className="original-kicker">A short historical note</p>
            <h3>Samuel Hahnemann and the origins of homeopathy</h3>
            <p>Samuel Hahnemann, a German physician, established the foundations of homeopathy in the late eighteenth and early nineteenth centuries. His work remains an important part of the tradition's historical record.</p>
          </div>
          <Link className="original-round-link" to="/explore" aria-label="Read the history of homeopathy"><ArrowUpRightIcon /></Link>
        </div>
        <div className="original-home-archive" aria-labelledby="archive-heading">
          <div className="original-home-archive-heading">
            <div>
              <p className="original-kicker">From the historical archive</p>
              <h3 id="archive-heading">A story preserved in pages, places, and memory.</h3>
            </div>
            <Link className="original-text-link" to="/explore">Explore the history <ArrowRight size={16} /></Link>
          </div>
          <div className="original-home-archive-grid">
            <figure>
              <img src="/images/homepage/archive/hahnemann-book-archive.jpeg" alt="Archival book reference about Samuel Hahnemann" />
              <figcaption><span>Nature archive · 1943</span> Samuel Hahnemann (1755–1843), a historical profile of homeopathy's founder.</figcaption>
              <a className="original-home-archive-source" href="https://www.nature.com/articles/151724c0" target="_blank" rel="noreferrer">Read original source <ArrowUpRight size={14} /></a>
            </figure>
            <figure>
              <img src="/images/homepage/archive/koethen-heritage-archive.jpeg" alt="Historic building connected with the history of homeopathy" />
              <figcaption><span>PubMed review · 2007</span> A brief history of homeopathy and its development through medical history.</figcaption>
              <a className="original-home-archive-source" href="https://pubmed.ncbi.nlm.nih.gov/17564158/" target="_blank" rel="noreferrer">Read original source <ArrowUpRight size={14} /></a>
            </figure>
            <figure>
              <img src="/images/homepage/archive/hahnemann-memorial-archive.jpg" alt="Samuel Hahnemann memorial" />
              <figcaption><span>Köthen official archive</span> Samuel Hahnemann's work and years in Köthen, Germany.</figcaption>
              <a className="original-home-archive-source" href="https://www.koethen-anhalt.de/de/samuel-hahnemann.html" target="_blank" rel="noreferrer">Read original source <ArrowUpRight size={14} /></a>
            </figure>
          </div>
        </div>
      </section>

      <section className="original-home-threads" aria-labelledby="threads-heading">
        <div className="original-home-section-label">
          <span>02</span>
          <p id="threads-heading">Choose your way in</p>
        </div>
        <div className="original-home-threads-intro">
          <h2>Three routes into one worldwide story.</h2>
          <p>Whether you are learning, researching, or following the international community, the platform keeps the connections visible.</p>
        </div>
        <div className="original-home-thread-list">
          {knowledgeThreads.map((thread) => {
            const Icon = thread.icon;
            return (
              <Link className="original-home-thread" to={thread.to} key={thread.number}>
                <span className="original-home-thread-number">{thread.number}</span>
                <span className="original-home-thread-icon"><Icon size={24} /></span>
                <span className="original-home-thread-content">
                  <h3>{thread.title}</h3>
                  <p>{thread.text}</p>
                  <span className="original-text-link">{thread.link} <ArrowRight size={15} /></span>
                </span>
                <ArrowRight className="original-home-thread-arrow" size={22} />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="original-home-perspectives" aria-labelledby="perspectives-heading">
        <div className="original-home-perspectives-image">
          <img src="/images/homepage/heritage-gathering.jpg" alt="Homeopathy professionals gathered at an international event" />
          <span>People make a platform global.</span>
        </div>
        <div className="original-home-perspectives-copy">
          <p className="original-kicker">03 / The wider picture</p>
          <h2>Homeopathy is a history, a practice, and a conversation.</h2>
          <p>Its story includes foundational texts, clinical traditions, educational institutions, research questions, public discussions, and the people who continue to carry the work forward.</p>
          <div className="original-home-perspective-lines">
            <div><Users size={20} /><span>People and leadership</span></div>
            <div><Landmark size={20} /><span>History and institutions</span></div>
            <div><Microscope size={20} /><span>Research and inquiry</span></div>
          </div>
          <Link className="original-button original-button-dark" to="/leaders">Meet the global community <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="original-home-quote">
        <Quote size={34} />
        <blockquote>“A global platform should make knowledge easier to enter, easier to question, and easier to share.”</blockquote>
        <p>WorldHomeopathy.org / Editorial principle</p>
      </section>

      <section className="original-home-cta">
        <div>
          <p className="original-kicker">Continue exploring</p>
          <h2>Find the part of the global story that matters to you.</h2>
        </div>
        <div className="original-home-cta-links">
          <Link to="/research">Research Center <ArrowRight size={15} /></Link>
          <Link to="/summit">World Summit <ArrowRight size={15} /></Link>
          <Link to="/media">Media Desk <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={18} />;
}

export default HomePage;
