import React from "react";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Globe2,
  Newspaper,
  Radio,
  Search,
  ShieldCheck,
} from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80";

const heroStats = [
  { value: "2026", label: "Recent summit coverage" },
  { value: "Global", label: "Research and public references" },
  { value: "2015-2026", label: "Recent and archive window" },
];

const sourceLogos = [
  "Homeopathy360",
  "OIMH / GWU",
  "Express Healthcare",
  "Faculty of Homeopathy",
  "Republic World",
  "PharmaBiz",
  "LMHI",
  "The Guardian",
  "NCCIH",
  "ABC News",
  "Australian Government",
  "HRI",
];

const coverageItems = [
  {
    tag: "Conference Coverage",
    date: "2025",
    source: "Homeopathy360",
    country: "United States",
    title: "Joint American Homeopathic Conference 2025",
    summary:
      "Coverage of JAHC 2025, a North American homeopathy gathering focused on education, professional dialogue, and community learning.",
    link: "https://www.homeopathy360.com/jahc-2025-joint-american-homeopathic-conference/",
    image: "https://www.homeopathy360.com/wp-content/uploads/Jahc-2025.png",
  },
  {
    tag: "Academic Event",
    date: "2025",
    source: "OIMH / George Washington University",
    country: "United States",
    title: "Online Joint American Homeopathic Conference 2025",
    summary:
      "A university-hosted event listing for the Joint American Homeopathic Conference, useful for visitors tracking formal education events.",
    link: "https://oimh.smhs.gwu.edu/events/online-joint-american-homeopathic-conference-2025",
    image:
      "https://oimh.smhs.gwu.edu/sites/g/files/zaskib1041/files/2025-01/national_center_for_homeopathy.jpg",
  },
  {
    tag: "Conference Calendar",
    date: "2026",
    source: "Faculty of Homeopathy",
    country: "United Kingdom",
    title: "Faculty of Homeopathy Congress 2026",
    summary:
      "An international congress listing that keeps global homeopathy education, clinical discussion, and professional exchange visible for delegates.",
    link: "https://www.facultyofhomeopathy.org/pages/Congress-2026",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Summit Coverage",
    date: "2026",
    source: "Express Healthcare",
    country: "United Kingdom",
    title: "Burnett Homoeopathy hosts 4th World Homoeopathy Summit 2026",
    summary:
      "Coverage of the London chapter, including the British Parliament, Oxford University, and international summit visibility led by Burnett Homeopathy Pvt. Ltd.",
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
    image: "https://cdn.expresshealthcare.in/wp-content/uploads/2026/04/18163648/New-Project-1-7.jpg",
    burnett: true,
  },
  {
    tag: "Summit Coverage",
    date: "2026",
    source: "PharmaBiz",
    country: "United Kingdom",
    title: "Global summit reaches British Parliament and Oxford University",
    summary:
      "PharmaBiz coverage of Burnett Homoeopathy's world summit activity and India's visibility in international healthcare discussion.",
    link: "https://www.pharmabiz.com/NewsDetails.aspx?aid=185405&sid=2",
    image: "https://cdn.expresshealthcare.in/wp-content/uploads/2026/04/18163648/New-Project-1-7.jpg",
    burnett: true,
  },
  {
    tag: "Conference Coverage",
    date: "2025",
    source: "Homeopathy360",
    country: "India",
    title: "The 10th National Homeopathic Conference 2025",
    summary:
      "Homeopathy360 coverage of HOMCON 2025, adding a professional Indian conference reference to the global media library.",
    link: "https://www.homeopathy360.com/the-10th-national-homeopathic-conference-2025-homcon/",
    image: "https://www.homeopathy360.com/wp-content/uploads/Homcon-01-4-scaled.jpg",
  },
  {
    tag: "Evidence Reference",
    date: "2024",
    source: "Australian Government",
    country: "Australia",
    title: "Natural Therapies Review 2024: Homeopathy Evidence Evaluation",
    summary:
      "A government evidence evaluation reference that belongs in any serious media desk because it shows how public bodies review homeopathy claims.",
    link: "https://www.health.gov.au/resources/publications/natural-therapies-review-2024-homeopathy-evidence-evaluation?language=en",
    image:
      "https://www.health.gov.au/sites/default/files/2025-03/natural-therapies-review-2024-homeopathy-evidence-evaluation.jpg",
  },
  {
    tag: "Research Summit",
    date: "2025",
    source: "Republic World",
    country: "India",
    title: "Burnett Homeopathy Goa Evidence-Based Research Summit",
    summary:
      "A research-focused summit story from Goa, positioning Burnett Homeopathy Pvt. Ltd. within evidence, standards, and academic discussion.",
    link: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
    image:
      "https://img.republicworld.com/all_images/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa-1755871589954-16_9.webp",
    burnett: true,
  },
  {
    tag: "Public Health Reference",
    date: "Updated",
    source: "NCCIH",
    country: "United States",
    title: "Homeopathy: public information and safety overview",
    summary:
      "A public-facing U.S. reference page covering what homeopathy is, how it is discussed, and why evidence and safety language must stay clear.",
    link: "https://www.nccih.nih.gov/health/homeopathy",
    image: "https://files.nccih.nih.gov/files/pills-vitamins-supplements-chondroitin.ThinkstockPhotos-177253300-square.jpg",
  },
  {
    tag: "Summit Coverage",
    date: "2025",
    source: "ThePrint",
    country: "Germany",
    title: "World Homeopathy Summit 3 during Global Week in Koethen",
    summary:
      "Coverage of the Koethen chapter, connecting a modern summit series with the historical city most closely linked to Samuel Hahnemann's work.",
    link: "https://theprint.in/ani-press-releases/burnett-homeopathy-hosts-world-homeopathy-summit-3-during-global-week-in-kothen-germany/2595264/",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    burnett: true,
  },
  {
    tag: "Research Evidence",
    date: "2024",
    source: "HRI",
    country: "International",
    title: "Homeopathy Research Institute Evidence Summary 2024",
    summary:
      "A research-facing evidence summary reference for readers who want a structured entry point into the homeopathy research conversation.",
    link: "https://www.hri-research.org/wp-content/uploads/2024/12/HRI_EvidenceSummary_2024.pdf",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900f578?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Summit Coverage",
    date: "2024",
    source: "Faculty of Homeopathy",
    country: "UAE",
    title: "World Homeopathy Summit 2 in Dubai",
    summary:
      "Faculty coverage of the Dubai summit chapter, adding international context and external visibility to the summit journey.",
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
    image:
      "https://hubble-live-assets.s3.eu-west-1.amazonaws.com/faculty-of-homeopathy/image_asset/file/3338/content_451755481_989103479885200_5862739557236088808_n.jpg",
    burnett: true,
  },
  {
    tag: "World Homeopathy Day",
    date: "2025",
    source: "LMHI",
    country: "International",
    title: "270th anniversary of Samuel Hahnemann's birth",
    summary:
      "LMHI's World Homeopathy Day reference connects current global observance with Hahnemann's historical contribution.",
    link: "https://lmhi.org/news/270th-anniversary-of-s-hahnemann-s-birth-during-world-homeopathy-day-on-10th-of-april-2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Conference Coverage",
    date: "Recent",
    source: "Homeopathy360",
    country: "UAE",
    title: "Homeopathy Maha Kumbh organized in Dubai",
    summary:
      "An international event story from Dubai, useful for tracking homeopathy's professional and public-facing presence in the Gulf region.",
    link: "https://www.homeopathy360.com/homeopathy-award-homeopathy-maha-kumbh-organized-in-dubai/",
    image: "https://www.homeopathy360.com/wp-content/uploads/HomeopathyMahaKumbh.jpg",
  },
  {
    tag: "Public Information",
    date: "Updated",
    source: "NHS Inform",
    country: "Scotland / UK",
    title: "Homeopathy public information",
    summary:
      "A public information page useful for understanding how government health portals describe homeopathy to patients and the public.",
    link: "https://www.nhsinform.scot/tests-and-treatments/medicines-and-medical-aids/complementary-medicine/homeopathy/",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "News Archive",
    date: "2019",
    source: "The Guardian",
    country: "United Kingdom",
    title: "NHS leadership voices concerns about homeopathy",
    summary:
      "Archive coverage showing how homeopathy appears in public health policy debate and mainstream media commentary.",
    link: "https://www.theguardian.com/society/2019/oct/28/head-nhs-voices-serious-concerns-about-homeopathy-simon-stevens",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "News Archive",
    date: "2017",
    source: "The Guardian",
    country: "United Kingdom",
    title: "NHS to end prescription of homeopathic remedies",
    summary:
      "A widely cited archive piece on NHS prescribing policy, included for balanced historical context around homeopathy coverage.",
    link: "https://www.theguardian.com/lifeandstyle/2017/jul/21/a-misuse-of-scarce-funds-nhs-to-end-prescription-of-homeopathic-remedies",
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/11/1426094388505/Homeopathy-pills-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop",
  },
  {
    tag: "News Archive",
    date: "2015",
    source: "ABC News",
    country: "Australia",
    title: "Australian review brought homeopathy into global headlines",
    summary:
      "ABC News coverage of the Australian evidence review, included as older media context for the global public discussion.",
    link: "https://abcnews.com/Health/homeopathy-work-major-australian-study-concludes/story?id=29595411",
    image: "https://s.abcnews.com/images/Health/gty_meds_lb_150312_16x9_992.jpg?w=1600",
  },
];

const recentItems = coverageItems.slice(0, 12);
const archiveItems = coverageItems.slice(12);

function MediaImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.src = fallbackImage;
      }}
    />
  );
}

function CoverageCard({ item }) {
  return (
    <article className={`media-coverage-card${item.burnett ? " is-burnett" : ""}`}>
      <a href={item.link} target="_blank" rel="noreferrer" className="media-card-image" aria-label={item.title}>
        <MediaImage src={item.image} alt={item.title} />
      </a>
      <div className="media-card-body">
        <div className="media-card-meta">
          <span>{item.tag}</span>
          <small>{item.date}</small>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div className="media-card-footer">
          <span>{item.source}</span>
          <span>{item.country}</span>
        </div>
        <a className="media-read-link" href={item.link} target="_blank" rel="noreferrer">
          Read coverage <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

function MediaPage() {
  return (
    <main className="media-coverage-page">
      <section className="media-coverage-hero">
        <div className="media-coverage-shell media-coverage-hero-grid">
          <div className="media-hero-copy">
            <span className="media-coverage-kicker">Global Media Desk</span>
            <h1>Homeopathy coverage, research references, and summit visibility in one place.</h1>
            <p>
              A curated press library for global homeopathy coverage, public-health references, research updates, and
              international summit stories. Each entry links back to the original publication or public source so
              visitors can verify the coverage directly.
            </p>
            <div className="media-hero-actions">
              <a href="#recent-media">
                Browse recent coverage <ArrowRight size={17} />
              </a>
              <a href="#media-archive">
                View archive <Newspaper size={17} />
              </a>
            </div>
          </div>
          <aside className="media-hero-feature" aria-label="Featured media coverage">
            <div className="media-feature-image">
              <MediaImage src={coverageItems[0].image} alt={coverageItems[0].title} />
            </div>
            <div className="media-feature-body">
              <span>Featured coverage</span>
              <h2>{coverageItems[0].title}</h2>
              <p>{coverageItems[0].summary}</p>
              <a href={coverageItems[0].link} target="_blank" rel="noreferrer">
                Open source <ExternalLink size={16} />
              </a>
            </div>
          </aside>
        </div>
        <div className="media-coverage-shell media-hero-stats" aria-label="Media desk summary">
          {heroStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="media-source-band" aria-label="Sources represented">
        <div className="media-coverage-shell media-source-strip">
          <span>Sources tracked</span>
          <div>
            {sourceLogos.map((source) => (
              <small key={source}>{source}</small>
            ))}
          </div>
        </div>
      </section>

      <section className="media-coverage-shell media-section" id="recent-media">
        <div className="media-section-intro">
          <span className="media-coverage-kicker">Recent and Active Coverage</span>
          <h2>Media stories that show the global conversation around homeopathy.</h2>
          <p>
            This page intentionally combines supportive coverage, public references, policy debate, and research sources
            so visitors can see the subject in a credible global context.
          </p>
        </div>
        <div className="media-coverage-grid">
          {recentItems.map((item) => (
            <CoverageCard item={item} key={`${item.source}-${item.title}`} />
          ))}
        </div>
      </section>

      <section className="media-coverage-shell media-editorial-panel">
        <div>
          <span className="media-coverage-kicker">Editorial Standard</span>
          <h2>Coverage is useful only when it is clearly sourced.</h2>
        </div>
        <div className="media-standard-grid">
          <article>
            <ShieldCheck size={28} />
            <h3>External links stay visible</h3>
            <p>Every article links back to the original publication or public reference page.</p>
          </article>
          <article>
            <Search size={28} />
            <h3>Recent and archive items</h3>
            <p>Newer summit coverage appears beside older policy and evidence references for context.</p>
          </article>
          <article>
            <Globe2 size={28} />
            <h3>Worldwide lens</h3>
            <p>Coverage spans India, UAE, Germany, the UK, Australia, the United States, and international bodies.</p>
          </article>
        </div>
      </section>

      <section className="media-coverage-shell media-archive-section" id="media-archive">
        <div className="media-section-intro compact">
          <span className="media-coverage-kicker">Archive</span>
          <h2>Older coverage and public references for background reading.</h2>
        </div>
        <div className="media-archive-list">
          {archiveItems.map((item) => (
            <a className="media-archive-row" href={item.link} target="_blank" rel="noreferrer" key={item.title}>
              <span>{item.date}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
              </div>
              <small>
                {item.source} <ArrowRight size={15} />
              </small>
            </a>
          ))}
        </div>
      </section>

      <section className="media-coverage-shell media-newsroom-cta">
        <div>
          <Radio size={30} />
          <span className="media-coverage-kicker">Media Room</span>
          <h2>Build this into a verified homeopathy newsroom.</h2>
          <p>
            Add future press releases, interviews, event galleries, and Burnett Homeopathy Pvt. Ltd. coverage here as new
            source links become available.
          </p>
        </div>
        <a href="mailto:info@globalhomeopathy.org">
          Submit coverage <FileText size={17} />
        </a>
      </section>
    </main>
  );
}

export default MediaPage;
