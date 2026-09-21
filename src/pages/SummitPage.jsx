import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  FileText,
  Globe2,
  MapPin,
  Microscope,
  Newspaper,
  ShieldCheck,
  Users,
} from "lucide-react";

const summitCards = [
  {
    type: "Burnett Summit",
    title: "World Homeopathy Summit 2",
    date: "2024",
    place: "Dubai, United Arab Emirates",
    organizer: "Burnett Homeopathy Pvt. Ltd.",
    source: "Faculty of Homeopathy",
    image: "/images/summit-dubai-authority.jpg",
    href: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
    summary:
      "A high-visibility Dubai chapter covered by the Faculty of Homeopathy, bringing international delegates into one summit setting.",
  },
  {
    type: "Burnett Summit",
    title: "World Homeopathy Summit 3",
    date: "2025",
    place: "Koethen, Germany",
    organizer: "Burnett Homeopathy Pvt. Ltd.",
    source: "Republic World",
    image: "/images/summit-recognition.jpg",
    href: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
    summary:
      "A historically rooted summit chapter connected with Hahnemann's professional legacy and World Homeopathy Week in Germany.",
  },
  {
    type: "Research Summit",
    title: "Evidence-Based Research Summit",
    date: "2025",
    place: "Goa, India",
    organizer: "Burnett Homeopathy Pvt. Ltd.",
    source: "Republic World",
    image: "/images/summit-global-stage.jpg",
    href: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
    summary:
      "A research-focused Goa initiative positioned around evidence discussion, academic exchange, and global standards.",
  },
  {
    type: "Burnett Summit",
    title: "World Homeopathy Summit 4",
    date: "2026",
    place: "London, United Kingdom",
    organizer: "Burnett Homeopathy Pvt. Ltd.",
    source: "Express Healthcare",
    image: "/images/dr-nitish-podium.jpg",
    href: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
    summary:
      "A UK summit chapter reported around British Parliament, Oxford University, institutional dialogue, and global collaboration.",
  },
];

const programmeCards = [
  {
    type: "World Congress",
    title: "79th LMHI World Congress",
    date: "21-24 October 2026",
    place: "Merida, Mexico",
    organizer: "Liga Medicorum Homoeopathica Internationalis",
    source: "Homeopathy360",
    image: "https://www.homeopathy360.com/wp-content/uploads/2026/07/LMHI-2026.jpg",
    href: "https://www.homeopathy360.com/79th-lmhi-world-congress-liga-medicorum-homoeopathica-internationalis-mexico-2026/",
    summary:
      "An international congress listing for physicians, researchers, and the wider homeopathy community.",
  },
  {
    type: "Congress",
    title: "Faculty of Homeopathy Congress 2026",
    date: "19-22 November 2026",
    place: "Warwick, United Kingdom",
    organizer: "Faculty of Homeopathy",
    source: "Faculty of Homeopathy",
    image:
      "https://hubble-live-assets.s3.eu-west-1.amazonaws.com/facultyofhomeopathy/file_asset/file/2433/content_Congress_2026.jpg",
    href: "https://www.facultyofhomeopathy.org/events/faculty-of-homeopathy-congress-2026",
    summary:
      "A professional congress programme with education, research, and practice conversations for the Faculty community.",
  },
  {
    type: "Research Conference",
    title: "HRI Greece 2025",
    date: "20-22 June 2025",
    place: "Thessaloniki, Greece",
    organizer: "Homeopathy Research Institute",
    source: "HRI Greece",
    image: "/images/research-microscope-lab.jpg",
    href: "https://www.hrigreece2025.org/",
    summary:
      "A research conference space for scientific discussion, evidence review, and international homeopathy research exchange.",
  },
  {
    type: "Education Event",
    title: "LMHI 2025: Joy of Homeopathy",
    date: "14-17 May 2025",
    place: "Utrecht, Netherlands",
    organizer: "LMHI / Dutch Homeopathic community",
    source: "Faculty of Homeopathy",
    image:
      "https://hubble-live-assets.s3.eu-west-1.amazonaws.com/facultyofhomeopathy/file_asset/file/2412/content_LMHI_2025.jpg",
    href: "https://www.facultyofhomeopathy.org/events/lmhi-2025-joy-of-homeopathy",
    summary:
      "An LMHI-linked international learning and community programme focused on education, exchange, and professional connection.",
  },
  {
    type: "National Programme",
    title: "HOMCON 2025",
    date: "2025",
    place: "Lucknow, India",
    organizer: "HOMCON",
    source: "Homeopathy360",
    image:
      "https://www.homeopathy360.com/wp-content/uploads/2025/02/HOMCON-2025-The-Celebration-Of-Homeopathy.jpg",
    href: "https://www.homeopathy360.com/homcon-2025/",
    summary:
      "A listed Indian homeopathy programme bringing clinical, educational, and professional voices together.",
  },
  {
    type: "Joint Conference",
    title: "Groundbreaking Science and Global Health",
    date: "2025",
    place: "Connecticut, United States",
    organizer: "AIH / Faculty of Homeopathy",
    source: "American Institute of Homeopathy",
    image:
      "https://www.homeopathyusa.org/assets/images/upcoming_conferences/Flyer%20Joint%20Conference%202025.jpg",
    href: "https://www.homeopathyusa.org/groundbreaking-science-and-global-health",
    summary:
      "A joint science and global health programme connected with professional education and international dialogue.",
  },
];

const platformNotes = [
  {
    icon: ShieldCheck,
    title: "Source-linked archive",
    text: "Every summit card opens the original media, event, or official reference so visitors can verify details.",
  },
  {
    icon: Globe2,
    title: "Global, not local",
    text: "The page places Burnett chapters beside LMHI, Faculty, HRI, AIH, and other international programmes.",
  },
  {
    icon: Newspaper,
    title: "Designed for coverage",
    text: "Short summaries keep the page clean while the external links carry detailed reports, photos, and registration notes.",
  },
];

function EventCard({ event, featured = false }) {
  return (
    <article className={featured ? "summit-event-card is-featured" : "summit-event-card"}>
      <a className="summit-event-image" href={event.href} target="_blank" rel="noreferrer">
        <img
          src={event.image}
          alt={`${event.title} coverage visual`}
          loading={featured ? "eager" : "lazy"}
          onError={(error) => {
            error.currentTarget.src = "/images/homeopathy-global-collage-hero.webp";
          }}
        />
      </a>
      <div className="summit-event-copy">
        <div className="summit-event-topline">
          <span>{event.type}</span>
          <strong>{event.date}</strong>
        </div>
        <h3>{event.title}</h3>
        <p className="summit-event-location">
          <MapPin size={15} />
          {event.place}
        </p>
        <p>{event.summary}</p>
        <div className="summit-event-meta">
          <span>{event.organizer}</span>
          <span>{event.source}</span>
        </div>
        <a className="summit-event-link" href={event.href} target="_blank" rel="noreferrer">
          Open source coverage <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

function SummitPage() {
  return (
    <main className="summit-foundation-page summit-archive-page">
      <section className="summit-archive-hero">
        <div className="summit-archive-shell summit-archive-hero-grid">
          <div className="summit-archive-hero-copy">
            <p className="summit-archive-kicker">World summit desk</p>
            <h1>Global homeopathy summits, congresses, and programmes.</h1>
            <p>
              A clean source-linked archive for major homeopathy gatherings across countries,
              including Burnett Homeopathy Pvt. Ltd. summit chapters and wider international
              congresses, research meetings, education events, and professional programmes.
            </p>
            <div className="summit-archive-actions">
              <a href="#summit-archive">
                View summit cards <ArrowRight size={16} />
              </a>
              <a href="#global-programmes">
                Explore programmes <Globe2 size={16} />
              </a>
            </div>
          </div>
          <div className="summit-archive-hero-panel" aria-label="Summit archive method">
            <div>
              <CalendarDays size={24} />
              <span>2024-2026</span>
              <strong>Tracked summit window</strong>
            </div>
            <div>
              <Newspaper size={24} />
              <span>Source first</span>
              <strong>News and official references</strong>
            </div>
            <div>
              <Users size={24} />
              <span>Global community</span>
              <strong>Delegates, educators, researchers</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="summit-archive-intro summit-archive-shell">
        {platformNotes.map((note) => {
          const Icon = note.icon;
          return (
            <article key={note.title}>
              <Icon size={24} />
              <div>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="summit-archive-section summit-archive-shell" id="summit-archive">
        <span className="summit-anchor" id="archive" aria-hidden="true"></span>
        <div className="summit-archive-heading">
          <p className="summit-archive-kicker">Burnett summit chapters</p>
          <h2>World Homeopathy Summit coverage, organized into clear cards.</h2>
          <p>
            These cards keep the page concise and route visitors to the original article or
            official page for full details, photographs, and wider coverage.
          </p>
        </div>
        <div className="summit-event-grid">
          {summitCards.map((event, index) => (
            <EventCard key={event.title} event={event} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="summit-programme-band" id="global-programmes">
        <div className="summit-archive-shell">
          <div className="summit-programme-heading">
            <p className="summit-archive-kicker">Worldwide programmes</p>
            <h2>Congresses, research meetings, and education programmes.</h2>
            <p>
              A broader international desk for real homeopathy-related programmes beyond the
              Burnett summit series, useful for students, practitioners, media, and institutions.
            </p>
          </div>
          <div className="summit-programme-grid">
            {programmeCards.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="summit-submit-strip summit-archive-shell" id="submit-reference">
        <div>
          <FileText size={34} />
          <div>
            <p className="summit-archive-kicker">Archive contribution</p>
            <h2>Have a verified summit or programme to include?</h2>
            <p>
              Share the official page, organiser note, media article, event image, and location.
              We can add it to the archive without turning this page into a long article.
            </p>
          </div>
        </div>
        <a href="mailto:info@worldhomeopathy.org">
          Submit event reference <ArrowRight size={16} />
        </a>
      </section>

      <section className="summit-source-note summit-archive-shell">
        <Microscope size={22} />
        <p>
          Summit summaries are intentionally brief. Visitors should use the linked external
          sources for full agenda, organiser, programme, registration, and media details.
        </p>
        <BookOpen size={22} />
      </section>
    </main>
  );
}

export default SummitPage;
