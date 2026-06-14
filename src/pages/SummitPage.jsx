import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Handshake,
  Lightbulb,
  MapPin,
  Mic,
  Microscope,
  Sparkles,
  Users,
} from "lucide-react";

const summitHeroPins = [
  { city: "Germany", country: "Köthen", className: "pin-germany", image: "/images/summit-recognition.jpg" },
  { city: "Dubai", country: "UAE", className: "pin-dubai", image: "/images/summit-dubai-authority.jpg" },
  { city: "Goa", country: "India", className: "pin-goa", image: "/images/summit-global-stage.jpg" },
  { city: "London", country: "UK", className: "pin-london", image: "/images/dr-nitish-podium.jpg" },
];

const summitJourney = [
  {
    year: "2024",
    title: "World Homeopathy Summit 2",
    place: "Dubai, UAE",
    image: "/images/summit-dubai-authority.jpg",
    text: "Held in Dubai, this summit brought global leaders together to advance the mission of homeopathy.",
    delegates: "800+",
    experts: "150+",
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    year: "2025",
    title: "World Homeopathy Summit 3",
    place: "Köthen, Germany",
    image: "/images/summit-recognition.jpg",
    text: "A historically meaningful chapter connected to Hahnemann's legacy and international dialogue.",
    delegates: "1,000+",
    experts: "180+",
    link: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    year: "2025",
    tag: "Research Summit",
    title: "Evidence-Based Research Summit",
    place: "Goa, India",
    image: "/images/summit-global-stage.jpg",
    text: "A focused research summit designed to elevate evidence, standards, and academic exchange.",
    delegates: "600+",
    experts: "120+",
    link: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
  },
  {
    year: "2026",
    title: "World Homeopathy Summit 4",
    place: "London, UK",
    image: "/images/dr-nitish-podium.jpg",
    text: "A UK chapter connecting tradition, science, institutions, and global collaboration.",
    delegates: "1,200+",
    experts: "200+",
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
];

const summitImpact = [
  { value: "4", label: "Global Summits", icon: Sparkles },
  { value: "110+", label: "Countries Reached", icon: Users },
  { value: "15,000+", label: "Participants", icon: Mic },
  { value: "1,200+", label: "Experts", icon: Microscope },
  { value: "2,500+", label: "Research Papers", icon: BookOpen },
  { value: "20+", label: "Years of Impact", icon: CalendarDays },
];

const collaboration = [
  { icon: Microscope, title: "Research & Evidence" },
  { icon: GraduationCap, title: "Education & Training" },
  { icon: Lightbulb, title: "Innovation & Technology" },
  { icon: Handshake, title: "Global Partnerships" },
];

const nextStops = [
  { label: "Germany", sub: "Köthen 2025", className: "next-germany" },
  { label: "London", sub: "UK 2026", className: "next-london" },
  { label: "Dubai", sub: "UAE 2024", className: "next-dubai" },
  { label: "Goa", sub: "India 2025", className: "next-goa" },
  { label: "Next Summit", sub: "Coming Soon", className: "next-future" },
];

function SummitPage() {
  return (
    <main className="summit-reference-page">
      <section className="summit-reference-hero">
        <motion.div
          className="summit-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">World Homeopathy Summit</p>
          <h1>Uniting the world through homeopathy</h1>
          <p>
            Building the world's largest collaborative movement in homeopathy through
            summits, research, education, leadership, and international dialogue.
          </p>
          <div className="summit-hero-actions">
            <a href="#summit-journey">Explore Summits <ArrowRight size={16} /></a>
            <a href="#summit-impact">About the Summit <Sparkles size={16} /></a>
          </div>
        </motion.div>

        <motion.div
          className="summit-map-visual"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Global summit route map"
        >
          <img src="/images/summit-world-map-hero-4k.jpg" alt="" />
          <div className="summit-route-glow"></div>
          {summitHeroPins.map((pin) => (
            <div className={`summit-map-pin ${pin.className}`} key={pin.city}>
              <img src={pin.image} alt="" />
              <span>
                <strong>{pin.city}</strong>
                <small>{pin.country}</small>
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="summit-journey-panel" id="summit-journey">
        <div className="summit-panel-heading">
          <p className="eyebrow">The Summit Journey</p>
          <h2>Four landmark chapters, one international movement.</h2>
        </div>

        <div className="summit-journey-line" aria-hidden="true"></div>
        <div className="summit-journey-cards">
          {summitJourney.map((item, index) => (
            <motion.article
              className="summit-journey-card"
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="summit-card-dot"></span>
              <div className="summit-card-meta">
                <span>{item.year}</span>
                {item.tag && <small>{item.tag}</small>}
              </div>
              <h3>{item.title}</h3>
              <p className="summit-place"><MapPin size={15} /> {item.place}</p>
              <img src={item.image} alt={`${item.title} visual`} />
              <p>{item.text}</p>
              <div className="summit-card-metrics">
                <span><Users size={18} /><strong>{item.delegates}</strong> Delegates</span>
                <span><Mic size={18} /><strong>{item.experts}</strong> Experts</span>
              </div>
              <a href={item.link} target="_blank" rel="noreferrer">
                Media Coverage <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="summit-impact-section" id="summit-impact">
        <motion.div
          className="summit-impact-strip"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Summit Impact</p>
          <div className="summit-impact-grid">
            {summitImpact.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Icon size={27} />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="summit-collaboration"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <p className="eyebrow">Driving Global Collaboration</p>
          <h2>Summits create powerful platforms for research, education, and future leaders.</h2>
          <p>
            Each chapter connects researchers, educators, practitioners, institutions, and
            public voices into a more organized global homeopathy movement.
          </p>
          <div>
            {collaboration.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.title}>
                  <Icon size={24} />
                  {item.title}
                </span>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="summit-next-section">
        <div className="summit-next-copy">
          <p className="eyebrow">The Journey Continues</p>
          <h2>Next Destination Coming Soon</h2>
          <p>
            A new chapter of knowledge, collaboration, and transformation is on the
            horizon. Stay connected for official summit updates.
          </p>
          <a href="mailto:info@worldhomeopathy.org">
            <Bell size={17} />
            Stay Updated
          </a>
        </div>

        <div className="summit-next-map">
          <img src="/images/summit-world-map-hero-4k.jpg" alt="" />
          <div className="summit-next-arc"></div>
          {nextStops.map((stop) => (
            <span className={`summit-next-pin ${stop.className}`} key={stop.label}>
              <strong>{stop.label}</strong>
              <small>{stop.sub}</small>
            </span>
          ))}
        </div>
      </section>

      <section className="summit-quote-strip">
        <span>“</span>
        <p>
          The World Homeopathy Summits are more than events; they are a global
          movement shaping the future of holistic healthcare.
        </p>
        <strong>WorldHomeopathy.org</strong>
      </section>
    </main>
  );
}

export default SummitPage;
