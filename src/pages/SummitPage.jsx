import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Download,
  FileText,
  Globe2,
  Image,
  Newspaper,
  Search,
  Users,
} from "lucide-react";

const heroStats = [
  { icon: Globe2, value: "4", label: "Summit Chapters" },
  { icon: Users, value: "110+", label: "Countries Reached" },
  { icon: Search, value: "1,200+", label: "Expert Participants" },
  { icon: FileText, value: "2,500+", label: "Published Outcomes" },
];

const archiveItems = [
  {
    city: "Dubai",
    year: "2024",
    title: "World Homeopathy Summit 2",
    text: "A global summit chapter focused on leadership visibility, international dialogue, and institutional participation.",
    image: "/images/summit-dubai-authority.jpg",
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    city: "Kothen, Germany",
    year: "2025",
    title: "World Homeopathy Summit 3",
    text: "A historically significant chapter connecting modern homeopathy leaders with Hahnemann's legacy.",
    image: "/images/summit-recognition.jpg",
    link: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    city: "Goa, India",
    year: "2025",
    title: "Evidence-Based Research Summit",
    text: "A research-oriented summit focused on evidence discussion, academic exchange, and global standards.",
    image: "/images/summit-global-stage.jpg",
    link: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
  },
  {
    city: "London, UK",
    year: "2026",
    title: "World Homeopathy Summit 4",
    text: "A planned UK chapter connecting institutions, science dialogue, leadership, and global collaboration.",
    image: "/images/dr-nitish-podium.jpg",
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
];

const timelineItems = [
  {
    year: "2024",
    title: "Dubai Summit",
    text: "International summit visibility and leadership dialogue.",
  },
  {
    year: "2025",
    title: "Kothen Summit",
    text: "Historical continuity with Hahnemann's professional roots.",
  },
  {
    year: "2025",
    title: "Goa Research Summit",
    text: "Evidence-based conversations and academic exchange.",
  },
  {
    year: "2026",
    title: "London Summit",
    text: "Institutional collaboration and global media visibility.",
  },
];

const expertPlaceholders = [
  "Expert profile",
  "Research speaker",
  "Clinical leader",
  "Education advisor",
  "Institutional voice",
];

const mediaDesk = [
  {
    icon: FileText,
    title: "Agenda & Proceedings",
    text: "Official agenda notes, keynote summaries, session outcomes, and post-summit documentation.",
    action: "Explore documents",
  },
  {
    icon: Newspaper,
    title: "Media Coverage",
    text: "News coverage, interviews, press releases, and summit coverage from verified external sources.",
    action: "View coverage",
  },
  {
    icon: Image,
    title: "Photo Gallery / Highlights",
    text: "Summit galleries, stage moments, delegate photographs, and visual highlights for each chapter.",
    action: "View gallery",
  },
];

function SummitPage() {
  return (
    <main className="summit-foundation-page">
      <section className="summit-foundation-hero">
        <div className="summit-foundation-shell summit-foundation-hero-grid">
          <div className="summit-foundation-hero-copy">
            <p className="summit-foundation-kicker">Global Summit Platform</p>
            <h1>Uniting the World Through Homeopathy</h1>
            <p>
              Our international summits bring together practitioners, researchers,
              educators, institutions, and media voices to advance dialogue, share
              evidence, and strengthen collaboration across the global homeopathy
              community.
            </p>
            <div className="summit-foundation-actions">
              <a href="#summit-archive">
                Explore Archive <ArrowRight size={15} />
              </a>
              <a href="#summit-media">
                Media Coverage <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="summit-foundation-map" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="summit-foundation-stats">
          <div className="summit-foundation-shell">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label}>
                  <Icon size={24} />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="summit-featured summit-foundation-shell">
        <div className="summit-featured-image">
          <img src="/images/summit-global-stage.jpg" alt="World Homeopathy Summit stage and delegates" />
        </div>
        <div className="summit-featured-copy">
          <p className="summit-foundation-kicker">Featured Global Summit</p>
          <h2>Evidence-Based Research Summit 2025 - Goa</h2>
          <p>
            A research-focused gathering advancing evidence-led homeopathy
            discussion, international participation, and academic exchange.
            Burnett Homeopathy Pvt. Ltd. is referenced through summit
            organization and research visibility.
          </p>
          <ul>
            <li>Research presentations and academic conversations.</li>
            <li>International participation across education and practice.</li>
            <li>Consensus-building around evidence and global standards.</li>
          </ul>
          <div>
            <a href="https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa" target="_blank" rel="noreferrer">
              View summit coverage <ArrowRight size={14} />
            </a>
            <a href="#summit-media">
              Download agenda <Download size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="summit-archive summit-foundation-shell" id="summit-archive">
        <div className="summit-section-heading">
          <p className="summit-foundation-kicker">Global Summit Archive</p>
          <h2>Summit chapters organized by destination and purpose.</h2>
        </div>
        <div className="summit-archive-grid">
          {archiveItems.map((item) => (
            <article key={item.title}>
              <div>
                <span>{item.city}</span>
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Explore summit <ArrowRight size={13} />
                </a>
              </div>
              <img src={item.image} alt={`${item.title} visual`} />
            </article>
          ))}
        </div>
      </section>

      <section className="summit-timeline">
        <div className="summit-foundation-shell">
          <p className="summit-foundation-kicker">Global Summit Timeline</p>
          <div className="summit-timeline-row">
            {timelineItems.map((item) => (
              <article key={`${item.year}-${item.title}`}>
                <span></span>
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="summit-experts summit-foundation-shell">
        <div className="summit-section-heading summit-section-heading-row">
          <div>
            <p className="summit-foundation-kicker">Institutional Voices</p>
            <h2>Experts in World Homeopathy</h2>
          </div>
          <a href="#summit-media">View all experts <ArrowRight size={14} /></a>
        </div>
        <div className="summit-expert-row">
          {expertPlaceholders.map((label, index) => (
            <article key={label}>
              <div>{index + 1}</div>
              <h3>{label}</h3>
              <p>Name, photograph, designation, and contribution details to be added.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="summit-media-desk summit-foundation-shell" id="summit-media">
        <p className="summit-foundation-kicker">Summit Reports & Media Desk</p>
        <div className="summit-media-grid">
          {mediaDesk.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={34} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#summit-archive">
                    {item.action} <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="summit-dialogue summit-foundation-shell">
        <div>
          <Globe2 size={48} />
          <h2>Partner in Global Dialogue</h2>
          <p>
            Join us in shaping the future of homeopathy through collaboration,
            research, education, media documentation, and shared purpose.
          </p>
        </div>
        <div>
          <a href="mailto:info@worldhomeopathy.org">
            Participate in Future Summits <ArrowRight size={15} />
          </a>
          <a href="mailto:info@worldhomeopathy.org">Partner With Us</a>
        </div>
      </section>
    </main>
  );
}

export default SummitPage;
