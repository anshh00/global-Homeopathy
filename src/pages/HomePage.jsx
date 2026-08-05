import React, { useEffect, useState } from "react";
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
import globalNetworkGlobe from "../assets/homepage-redesign/global-network-globe.png";
import historicalArchiveBuilding from "../assets/homepage-redesign/historical-archive-building.png";
import historicalBooksManuscripts from "../assets/homepage-redesign/historical-books-manuscripts.png";
import homeopathyBottleFlower from "../assets/homepage-redesign/homeopathy-bottle-flower.png";
import samuelHahnemann from "../assets/homepage-redesign/samuel-hahnemann.png";

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

const storyParagraphs = [
  "WorldHomeopathy.org is an independent digital platform created to make the global homeopathy story easier to discover, understand, and follow.",
  "It brings together history, education, research conversations, international summits, leadership, media coverage, and country perspectives in one clear place.",
  "Visitors can begin with trusted foundations, explore professional pathways, discover the homeopathy jobs portal, and connect with opportunities across the worldwide community.",
  "The platform is designed to help students, practitioners, researchers, institutions, journalists, and the public find useful context without losing sight of the people and ideas behind the movement.",
  "By giving knowledge, collaboration, events, publications, and career connections a shared home, it helps the community learn from one another and move the conversation forward.",
  "This is a place to begin with a better question and move confidently through the Center of the Experience.",
];

const storyFocusItems = [
  {
    icon: Landmark,
    title: "History & Foundations",
    text: "Explore the roots of homeopathy.",
    path: "/explore",
  },
  {
    icon: Microscope,
    title: "Research & Learning",
    text: "Discover evidence, papers, and academic work.",
    path: "/research",
  },
  {
    icon: Users,
    title: "People, Events & Opportunities",
    text: "Meet the community behind the movement.",
    path: "/summit",
  },
];

const archivePanels = [
  {
    image: samuelHahnemann,
    eyebrow: "The founder",
    title: "Samuel Hahnemann",
    text: "Discover the life and vision of the founder of homeopathy.",
    source: "https://www.nature.com/articles/151724c0",
  },
  {
    image: historicalBooksManuscripts,
    eyebrow: "His life & work",
    title: "Writings & Contributions",
    text: "Explore original writings, letters, and historical documents.",
    source: "https://pubmed.ncbi.nlm.nih.gov/17564158/",
  },
  {
    image: historicalArchiveBuilding,
    eyebrow: "Historical archives",
    title: "Places that shaped homeopathy",
    text: "From Koethen to around the world, follow places linked with homeopathy's historical memory.",
    source: "https://www.koethen-anhalt.de/de/samuel-hahnemann.html",
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
  const [currentTime, setCurrentTime] = useState(() => Date.now());
  const slide = heroSlides[activeSlide];

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

      <section className="homepage-story-redesign" id="about" aria-labelledby="homepage-story-title">
        <div className="homepage-story-redesign__hero">
          <div className="homepage-story-redesign__hero-copy">
            <p className="homepage-story-redesign__eyebrow">About Us</p>
            <h2 id="homepage-story-title">
              A shared place to understand the <span>global homeopathy story.</span>
            </h2>
            <p>
              One international starting point for heritage, learning, evidence, conversations, and the people keeping
              the discipline in motion.
            </p>
            <div className="homepage-story-redesign__actions">
              <Link className="homepage-story-redesign__button" to="/explore">
                Start Your Journey <ArrowRight size={16} />
              </Link>
              <a className="homepage-story-redesign__text-link" href="#home-story-purpose">
                Learn More <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <figure className="homepage-story-redesign__globe">
            <img
              src={globalNetworkGlobe}
              alt="Transparent globe with global connection lines and botanical details"
              width="1280"
              height="960"
            />
          </figure>
        </div>

        <div className="homepage-story-redesign__signal-strip" aria-label="Platform focus">
          <span>Global Connections</span>
          <span>Professionals</span>
          <span>Research and Learning</span>
          <span>International Summits</span>
        </div>

        <section className="homepage-story-redesign__purpose" id="home-story-purpose" aria-labelledby="home-story-purpose-title">
          <div className="homepage-story-redesign__purpose-copy">
            <p className="homepage-story-redesign__eyebrow">Our Purpose</p>
            <h3 id="home-story-purpose-title">Uniting knowledge, people, and purpose.</h3>
            <div className="homepage-story-redesign__paragraphs">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link className="homepage-story-redesign__button homepage-story-redesign__button--compact" to="/explore">
              Start with the essentials <ArrowRight size={15} />
            </Link>
          </div>
          <figure className="homepage-story-redesign__bottle">
            <img
              src={homeopathyBottleFlower}
              alt="Homeopathy bottle with white flower and green leaves"
              width="1280"
              height="960"
              loading="lazy"
            />
          </figure>
        </section>

        <nav className="homepage-story-redesign__pathways" aria-label="Introductory homepage pathways">
          {storyFocusItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link className="homepage-story-redesign__pathway" to={item.path} key={item.title}>
                <span className="homepage-story-redesign__pathway-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon className="homepage-story-redesign__pathway-icon" size={22} aria-hidden="true" />
                <span className="homepage-story-redesign__pathway-copy">
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
        <article className="homepage-story-redesign__hahnemann">
          <figure className="homepage-story-redesign__portrait">
            <img
              src={samuelHahnemann}
              alt="Portrait of Samuel Hahnemann"
              width="960"
              height="1280"
              loading="lazy"
            />
            <figcaption>1755 - 1843</figcaption>
          </figure>
          <div className="homepage-story-redesign__hahnemann-copy">
            <p className="homepage-story-redesign__eyebrow">A Short Historical Note</p>
            <h3>Samuel Hahnemann and the origins of homeopathy</h3>
            <p>
              Samuel Hahnemann, a German physician, established the foundations of homeopathy in the late eighteenth
              and early nineteenth centuries. His work remains an important part of the tradition's historical record.
            </p>
            <div className="homepage-story-redesign__tags" aria-label="Historical context">
              <span>Origins</span>
              <span>History</span>
              <span>Learning Context</span>
            </div>
          </div>
          <Link className="homepage-story-redesign__round-link" to="/explore" aria-label="Read the history of homeopathy">
            <ArrowUpRight size={18} />
          </Link>
        </article>
        <section className="homepage-story-redesign__archive" aria-labelledby="archive-heading">
          <div className="homepage-story-redesign__archive-heading">
            <p className="homepage-story-redesign__eyebrow">From the historical archive</p>
            <h3 id="archive-heading">A story preserved in pages, places, and memory.</h3>
            <Link className="homepage-story-redesign__text-link" to="/explore">
              Explore the history <ArrowRight size={15} />
            </Link>
          </div>
          <div className="homepage-story-redesign__archive-grid">
            {archivePanels.map((panel, index) => (
              <article className="homepage-story-redesign__archive-panel" key={panel.title}>
                <span className="homepage-story-redesign__archive-number">{String(index + 1).padStart(2, "0")}</span>
                <img
                  src={panel.image}
                  alt={panel.title}
                  width="1280"
                  height="960"
                  loading="lazy"
                />
                <div>
                  <p>{panel.eyebrow}</p>
                  <h4>{panel.title}</h4>
                  <span className="homepage-story-redesign__archive-text">{panel.text}</span>
                  <a href={panel.source} target="_blank" rel="noreferrer">
                    Read original source <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
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

export default HomePage;
