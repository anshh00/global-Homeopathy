import React, { useEffect, useState } from "react";
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
    image: "/images/homepage/summit-awards.jpg",
    eyebrow: "A living global archive",
    title: "Where homeopathy meets the world.",
    text: "A visual record of the people, places, conversations, and milestones shaping homeopathy across generations.",
    note: "Global summit community",
  },
  {
    image: "/images/homepage/hahnemann-memorial.jpg",
    eyebrow: "Heritage with a future",
    title: "Ideas travel further when they are remembered.",
    text: "From the history of Samuel Hahnemann to the questions being asked by today's educators and researchers.",
    note: "History / learning / context",
  },
  {
    image: "/images/homepage/education-community.jpg",
    eyebrow: "Knowledge in conversation",
    title: "Many voices. One growing community.",
    text: "Connect with the people, institutions, and learning spaces making homeopathy more visible around the world.",
    note: "Education and collaboration",
  },
  {
    image: "/images/homepage/homeopathic-practice.jpg",
    eyebrow: "Practice, inquiry, responsibility",
    title: "A clearer way into homeopathy.",
    text: "Explore foundations, research pathways, global events, and professional resources in one considered platform.",
    note: "A public knowledge platform",
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
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <main className="original-home">
      <section
        className="original-home-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
            <p className="original-kicker">WorldHomeopathy.org</p>
            <p className="original-home-hero-eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="original-home-hero-text">{slide.text}</p>
            <div className="original-home-actions">
              <Link className="original-button original-button-light" to="/explore">
                Enter the knowledge hub <ArrowRight size={16} />
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

      <section className="original-home-welcome" id="welcome">
        <div className="original-home-section-label">
          <span>01</span>
          <p>Welcome to the global homeopathy platform</p>
        </div>
        <div className="original-home-welcome-grid">
          <div className="original-home-welcome-heading">
            <p className="original-kicker">A shared starting point</p>
            <h2>Understanding homeopathy begins with a better question.</h2>
          </div>
          <div className="original-home-welcome-copy">
            <p>
              WorldHomeopathy.org is an independent digital platform for learning about homeopathy, its history, its communities, and its evolving conversations.
            </p>
            <p>
              It brings together accessible education, research pathways, summit archives, leadership profiles, and global media so that every visitor can choose a clear place to begin.
            </p>
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
