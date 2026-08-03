import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Landmark,
  Microscope,
  Play,
  Quote,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import MedicalMotionBackground from "../components/MedicalMotionBackground.jsx";

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

const liveEvents = [
  {
    id: "sri-lanka-public-health",
    date: "2026-07-21T09:00:00+05:30",
    displayDate: "21–24 July 2026",
    place: "Colombo, Sri Lanka",
    title: "Public Health Summit 2026",
    description: "A regional public-health gathering included for its wider healthcare context. It is not a homeopathy-only event.",
    source: "https://summit2026.ccpsl.lk/",
    image: "/images/homepage/education-community.jpg",
  },
  {
    id: "lmhi-mexico",
    date: "2026-10-21T09:00:00-06:00",
    displayDate: "21–24 October 2026",
    place: "Mérida, Mexico",
    title: "LMHI's 79th Homeopathic Medicine Congress",
    description: "An international congress for homeopathic physicians, researchers, and the wider professional community.",
    source: "https://lmhimexico2026.org/",
    image: "/images/homepage/heritage-gathering.jpg",
  },
  {
    id: "faculty-warwick",
    date: "2026-11-19T09:00:00Z",
    displayDate: "19–22 November 2026",
    place: "Warwick, United Kingdom",
    title: "Faculty of Homeopathy Congress 2026",
    description: "A professional congress exploring the role of homeopathy in tomorrow's health, with research and education sessions.",
    source: "https://www.hri-research.org/events/",
    image: "/images/homepage/research-lab.jpg",
  },
  {
    id: "athens-homeopathy",
    date: "2026-11-13T09:00:00+02:00",
    displayDate: "13–15 November 2026",
    place: "Athens, Greece",
    title: "20th Panhellenic Congress of Homeopathic Medicine",
    description: "A national homeopathic medicine congress focused on scientific dialogue and clinical experience exchange.",
    source: "https://homeocongress2026.gr/",
    image: "/images/homepage/academic-recognition.jpg",
  },
  {
    id: "hri-malta",
    date: "2027-06-18T09:00:00+02:00",
    displayDate: "18–20 June 2027",
    place: "St Julian's, Malta",
    title: "HRI International Homeopathy Research Conference",
    description: "The Homeopathy Research Institute's next international research conference, announced for Malta.",
    source: "https://www.hri-research.org/events/",
    image: "/images/homepage/homeopathic-practice.jpg",
  },
  {
    id: "jahc-2027",
    date: "2027-04-09T09:00:00-04:00",
    displayDate: "9-11 April 2027",
    place: "Online, United States",
    title: "Joint American Homeopathic Conference 2027",
    description: "The National Center for Homeopathy's announced 2027 virtual event for learning, exchange, and professional connection.",
    source: "https://homeopathycenter.org/all-events/",
    image: "/images/homepage/education-community.jpg",
  },
];

function getCountdown(date, now) {
  const difference = Math.max(0, new Date(date).getTime() - now);
  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [typedAbout, setTypedAbout] = useState("");
  const [currentTime, setCurrentTime] = useState(() => Date.now());
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
    const timer = window.setInterval(() => setCurrentTime(Date.now()), 1000);
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
        <MedicalMotionBackground />
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
              <p className="original-kicker original-archive-kicker">From the historical archive</p>
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

      <section className="original-home-live" aria-labelledby="live-heading">
        <div className="original-home-live-heading">
          <p className="original-kicker">Live updates</p>
          <h2 id="live-heading">What's happening next in the homeopathy community.</h2>
          <div className="original-home-live-source-marquee" aria-label="Dates and links are collected from official event organisers and research organisations. Open each update to confirm registration, programme, and venue details.">
            <div className="original-home-live-source-track">
              <span>Dates and links are collected from official event organisers and research organisations. Open each update to confirm registration, programme, and venue details.</span>
              <span aria-hidden="true">Dates and links are collected from official event organisers and research organisations. Open each update to confirm registration, programme, and venue details.</span>
            </div>
          </div>
        </div>
        <div className="original-home-live-list">
          {liveEvents.map((event) => {
            const countdown = getCountdown(event.date, currentTime);
            return (
              <article className="original-home-live-item" key={event.id} style={{ "--event-image": `url(${event.image})` }}>
                <div className="original-home-live-image" aria-hidden="true" />
                <div className="original-home-live-content">
                <div className="original-home-live-meta">
                  <span><CalendarDays size={15} /> {event.displayDate}</span>
                  <span>{event.place}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="original-home-live-footer">
                  <div className="original-home-live-countdown" aria-label={`Countdown to ${event.title}`}>
                    <Clock3 size={16} />
                    <span>Starts in</span>
                    <strong>
                      <b>{countdown.days}</b><em>days</em>
                      <b>{String(countdown.hours).padStart(2, "0")}</b><em>hours</em>
                      <b>{String(countdown.minutes).padStart(2, "0")}</b><em>min</em>
                      <b>{String(countdown.seconds).padStart(2, "0")}</b><em>sec</em>
                    </strong>
                  </div>
                  <a className="original-text-link" href={event.source} target="_blank" rel="noreferrer">Official details <ArrowUpRight size={15} /></a>
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="original-home-quote">
        <Quote size={34} />
        <blockquote>“A global platform should make knowledge easier to enter, easier to question, and easier to share.”</blockquote>
        <p>WorldHomeopathy.org / Editorial principle</p>
      </section>

    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={18} />;
}

export default HomePage;
