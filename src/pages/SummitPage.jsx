import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Globe2,
  MapPin,
  Mic,
  Microscope,
} from "lucide-react";

const summitStats = [
  { value: "4", label: "Global summit chapters" },
  { value: "110+", label: "Countries represented" },
  { value: "15k+", label: "Participants connected" },
];

const summitChapters = [
  {
    year: "2024",
    title: "World Homeopathy Summit 2",
    location: "Dubai, UAE",
    image: "/images/summit-dubai-authority.jpg",
    summary:
      "A major international chapter connecting delegates, institutions, and public visibility in the Middle East.",
    metrics: ["800+ delegates", "150+ experts"],
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    year: "2025",
    title: "World Homeopathy Summit 3",
    location: "Kothen, Germany",
    image: "/images/summit-recognition.jpg",
    summary:
      "A historically important chapter connecting modern leaders with the city linked to Samuel Hahnemann's work.",
    metrics: ["1,000+ delegates", "180+ experts"],
    link: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    year: "2025",
    title: "Evidence-Based Research Summit",
    location: "Goa, India",
    image: "/images/summit-global-stage.jpg",
    summary:
      "A research-focused summit advancing evidence dialogue, academic exchange, and professional standards.",
    metrics: ["600+ delegates", "120+ experts"],
    link: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
  },
  {
    year: "2026",
    title: "World Homeopathy Summit 4",
    location: "London, UK",
    image: "/images/dr-nitish-podium.jpg",
    summary:
      "A UK chapter designed around institutions, leadership visibility, science dialogue, and international collaboration.",
    metrics: ["1,200+ delegates", "200+ experts"],
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
];

const summitTracks = [
  {
    icon: Microscope,
    title: "Research & Evidence",
    text: "Clinical conversations, evidence-led sessions, and publication-focused outcomes.",
  },
  {
    icon: BookOpen,
    title: "Education & Training",
    text: "Programs for practitioners, students, and institutions building structured learning.",
  },
  {
    icon: Globe2,
    title: "International Chapters",
    text: "Summit destinations that connect country participation with the global story.",
  },
  {
    icon: Mic,
    title: "Media Visibility",
    text: "Press coverage, interviews, leadership addresses, and public-facing documentation.",
  },
];

const summitAgenda = [
  "Opening leadership plenary",
  "Evidence and research sessions",
  "International delegate roundtables",
  "Education and training forums",
  "Media, awards, and institutional recognition",
];

const involvementRoutes = [
  {
    title: "Attend a summit",
    text: "Follow upcoming summit announcements, destination notes, and delegate information.",
  },
  {
    title: "Submit research",
    text: "Reserve space for paper submissions, posters, case documentation, and academic review.",
  },
  {
    title: "Partner with the platform",
    text: "Institutions and contributors can connect through education, research, and summit visibility.",
  },
];

function SummitPage() {
  return (
    <main className="summit-stitch-page">
      <section className="summit-stitch-hero">
        <div className="summit-stitch-hero-copy">
          <p className="summit-stitch-kicker">World Homeopathy Summit</p>
          <h1>Uniting the world through homeopathy</h1>
          <p>
            A focused international summit platform connecting homeopathy leaders,
            research voices, educators, institutions, and delegates across global
            chapters. Burnett Homeopathy Pvt. Ltd. appears through summit
            organization, research support, and international contribution.
          </p>
          <div className="summit-stitch-actions">
            <a href="#summit-chapters">
              Explore chapters <ArrowRight size={15} />
            </a>
            <a href="#summit-agenda">Summit structure</a>
          </div>
          <div className="summit-stitch-stats" aria-label="Summit highlights">
            {summitStats.map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="summit-stitch-visual"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/summit-world-map-hero-4k.jpg" alt="World summit route map" />
          <div className="summit-stitch-route">
            <span className="is-dubai">Dubai</span>
            <span className="is-germany">Kothen</span>
            <span className="is-goa">Goa</span>
            <span className="is-london">London</span>
          </div>
        </motion.div>
      </section>

      <section className="summit-stitch-section summit-stitch-intro">
        <div>
          <p className="summit-stitch-kicker">Summit purpose</p>
          <h2>A global event system, not a single conference page.</h2>
        </div>
        <p>
          The summit page is organized as a living archive: each chapter has a
          location, theme, media trail, delegate story, and research or education
          outcome. This makes the platform feel like an international movement
          while keeping company references indirect and credible.
        </p>
      </section>

      <section className="summit-stitch-chapters" id="summit-chapters">
        <div className="summit-stitch-heading">
          <p className="summit-stitch-kicker">Summit chapters</p>
          <h2>Four landmark destinations, one connected movement.</h2>
        </div>

        <div className="summit-stitch-chapter-grid">
          {summitChapters.map((chapter, index) => (
            <motion.article
              className="summit-stitch-chapter"
              key={chapter.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <img src={chapter.image} alt={`${chapter.title} visual`} />
              <div>
                <span>{chapter.year}</span>
                <h3>{chapter.title}</h3>
                <p className="summit-stitch-location">
                  <MapPin size={14} />
                  {chapter.location}
                </p>
                <p>{chapter.summary}</p>
                <ul>
                  {chapter.metrics.map((metric) => (
                    <li key={metric}>
                      <CheckCircle2 size={14} />
                      {metric}
                    </li>
                  ))}
                </ul>
                <a href={chapter.link} target="_blank" rel="noreferrer">
                  View coverage <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="summit-stitch-dark" id="summit-agenda">
        <div className="summit-stitch-dark-copy">
          <p className="summit-stitch-kicker">Summit architecture</p>
          <h2>Designed around research, education, media, and global leadership.</h2>
          <p>
            The page should guide visitors through the summit journey without making
            them search through scattered content. Every chapter can later expand
            into its own detailed page with galleries, speakers, videos, outcomes,
            downloads, and media coverage.
          </p>
        </div>
        <div className="summit-stitch-track-grid">
          {summitTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title}>
                <Icon size={22} />
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="summit-stitch-program">
        <div className="summit-stitch-program-media">
          <img src="/images/summit-dubai-authority.jpg" alt="World Homeopathy Summit venue visual" />
        </div>
        <div className="summit-stitch-program-copy">
          <p className="summit-stitch-kicker">Program model</p>
          <h2>What each summit chapter can contain</h2>
          <p>
            This structure gives the client room to add official details later while
            the design already feels complete and organized.
          </p>
          <ol>
            {summitAgenda.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="summit-stitch-participation">
        <div className="summit-stitch-heading">
          <p className="summit-stitch-kicker">Join the movement</p>
          <h2>Clear paths for delegates, researchers, and partners.</h2>
        </div>
        <div className="summit-stitch-route-grid">
          {involvementRoutes.map((route) => (
            <article key={route.title}>
              <FileText size={21} />
              <h3>{route.title}</h3>
              <p>{route.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SummitPage;
