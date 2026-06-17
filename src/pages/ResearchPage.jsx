import React from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Database,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Landmark,
  Leaf,
  Microscope,
  Network,
  Search,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const heroMetrics = [
  { value: "6,500+", label: "PubMed-indexed articles", icon: FileText },
  { value: "1,700+", label: "LILACS entries", icon: Globe2 },
  { value: "2021", label: "HOMIS clinical-study mapping", icon: Database },
  { value: "30+", label: "Goa research presentations", icon: Microscope },
];

const evidencePathways = [
  {
    title: "Clinical outcome research",
    region: "Global",
    source: "CORE-Hom",
    text: "Clinical outcome studies, randomized trials, observational work, and case documentation organized for evidence review.",
    link: "https://www.hri-research.org/resources/research-databases/homeopathy-research-databases/",
    icon: BarChart3,
  },
  {
    title: "Controlled clinical studies",
    region: "Switzerland",
    source: "HOMIS",
    text: "A structured mapping project for controlled clinical research in homeopathy, maintained through academic collaboration.",
    link: "https://www.hri-research.org/resources/research-databases/homeopathy-research-databases/",
    icon: Landmark,
  },
  {
    title: "Systematic reviews",
    region: "International",
    source: "Mathie, Hamre, Shang, Linde",
    text: "Published reviews and meta-analyses show why the evidence conversation must be balanced, cited, and transparent.",
    link: "https://www.hri-research.org/resources/essentialevidence/clinical-trials-overview/",
    icon: BookOpen,
  },
  {
    title: "Condition-level summaries",
    region: "Global",
    source: "HRI evidence by condition",
    text: "Research summaries by topic help visitors move from broad claims into specific clinical and public-health questions.",
    link: "https://www.hri-research.org/resources/essentialevidence/evidence-by-condition/",
    icon: Stethoscope,
  },
  {
    title: "Safety and public guidance",
    region: "United States",
    source: "NIH / NCCIH",
    text: "Responsible research pages must include safety, regulation, evidence limitations, and professional-care guidance.",
    link: "https://www.nccih.nih.gov/health/homeopathy",
    icon: ShieldCheck,
  },
];

const researchDomains = [
  {
    title: "Clinical Research",
    text: "Trials, outcomes, patient-reported evidence, and treatment documentation.",
    icon: Users,
  },
  {
    title: "Materia Medica",
    text: "Substance profiles, provings, source records, and modern documentation.",
    icon: Leaf,
  },
  {
    title: "Public Health",
    text: "Access, affordability, adoption, country-level use, and community relevance.",
    icon: Globe2,
  },
  {
    title: "Basic Science",
    text: "Laboratory models, high-dilution research, and physicochemical studies.",
    icon: Microscope,
  },
  {
    title: "Integrative Care",
    text: "Interfaces with conventional care, prevention, and complementary systems.",
    icon: Stethoscope,
  },
  {
    title: "Education Research",
    text: "Training quality, curriculum, practitioner standards, and evidence literacy.",
    icon: GraduationCap,
  },
];

const publicationRows = [
  {
    type: "Meta-analysis",
    title: "Randomised placebo-controlled trials of individualised homeopathic treatment",
    detail: "Mathie et al., Systematic Reviews, 2014",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/2046-4053-3-142",
  },
  {
    type: "Meta-analysis",
    title: "Randomised trials of non-individualised homeopathic treatment",
    detail: "Mathie et al., Systematic Reviews, 2017",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-017-0445-3",
  },
  {
    type: "Review",
    title: "Efficacy of homoeopathic treatment: systematic review of meta-analyses",
    detail: "Hamre et al., Systematic Reviews, 2023",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-023-02313-2",
  },
  {
    type: "Public guidance",
    title: "Homeopathy: What You Need To Know",
    detail: "NIH National Center for Complementary and Integrative Health",
    link: "https://www.nccih.nih.gov/health/homeopathy",
  },
];

const institutions = [
  "Homeopathy Research Institute",
  "University of Bern / HOMIS",
  "Carstens Foundation / HomBRex",
  "GIRI high-dilution research network",
  "WissHom, Köthen",
  "International research partners",
];

function ResearchPage() {
  return (
    <main className="research-pro-page">
      <div className="research-motion-bg" aria-hidden="true">
        <span className="research-bg-orb research-bg-orb-one"></span>
        <span className="research-bg-orb research-bg-orb-two"></span>
        <span className="research-bg-orb research-bg-orb-three"></span>
        <span className="research-bg-ambient research-bg-ambient-one"></span>
        <span className="research-bg-ambient research-bg-ambient-two"></span>
        <span className="research-bg-lens"></span>
      </div>
      <section className="research-pro-hero">
        <div className="research-pro-copy">
          <p className="eyebrow">Research & Innovation</p>
          <h1>Research, evidence, and global collaboration in homeopathy.</h1>
          <p className="research-pro-lead">
            A structured international research desk for studies, databases, evidence reviews,
            summit outcomes, and responsible public education.
          </p>
          <p>
            WorldHomeopathy.org presents research through named sources, clear categories, and
            balanced evidence context. Visitors can move from published studies to institutions,
            condition-level summaries, summit research initiatives, and global collaboration.
          </p>
          <div className="research-pro-actions">
            <a href="#global-evidence">
              Explore evidence <ArrowRight size={16} />
            </a>
            <a href="#goa-research">Goa research summit</a>
          </div>
        </div>

        <div className="research-pro-visual" aria-label="Research and homeopathy visual">
          <img src="/images/explore-remedy-clean.png" alt="Homeopathy remedies and botanical research material" />
          <div className="research-pro-visual-panel">
            <FlaskConical size={24} />
            <strong>Evidence with responsibility</strong>
            <span>Databases, studies, reviews, and research initiatives presented with clear context.</span>
          </div>
        </div>
      </section>

      <section className="research-pro-metrics" aria-label="Research evidence metrics">
        {heroMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <article key={metric.label}>
              <Icon size={24} />
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          );
        })}
      </section>

      <section className="research-pro-evidence" id="global-evidence">
        <div className="research-pro-section-head">
          <div className="research-pro-head-copy">
            <p className="eyebrow">Global evidence landscape</p>
            <h2>Where the research conversation actually lives.</h2>
            <p>
              The page is organized around databases, controlled studies, reviews, condition-level
              summaries, and public safety guidance, so every claim has a clear place.
            </p>
          </div>
          <div className="research-pro-signal-field" aria-label="Evidence desk overview">
            <div className="research-signal-orbit" aria-hidden="true">
              <span className="signal-node signal-node-one"></span>
              <span className="signal-node signal-node-two"></span>
              <span className="signal-node signal-node-three"></span>
              <span className="signal-node signal-node-four"></span>
              <strong>Evidence<br />Desk</strong>
            </div>
            <div className="research-signal-copy">
              <span>
                <Database size={18} />
                Source-led system
              </span>
              <strong>Databases, reviews, safety guidance, and summit-led research gathered into one readable research flow.</strong>
            </div>
            <div className="research-signal-stream">
              <span><Search size={17} /> Review sources</span>
              <span><ShieldCheck size={17} /> Responsible claims</span>
              <span><Network size={17} /> Global collaboration</span>
            </div>
          </div>
        </div>

        <div className="research-pro-pathways">
          {evidencePathways.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <span className="research-pro-index">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={28} />
                <div>
                  <small>{item.region}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.source} <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="research-pro-goa" id="goa-research">
        <div className="research-pro-goa-copy">
          <p className="eyebrow">Featured research initiative</p>
          <h2>Burnett Goa Evidence-Based Research Summit 2025</h2>
          <p>
            The Goa summit is positioned as one important evidence-focused initiative inside the
            wider global research ecosystem. Reported coverage highlighted clinical research,
            real-world evidence, meta-analyses, policy discussions, and international participation.
          </p>
          <ul>
            <li>
              <Microscope size={18} />
              Clinical trials, case reviews, evidence validation, and research presentations
            </li>
            <li>
              <Network size={18} />
              Collaboration between practitioners, researchers, educators, and institutions
            </li>
            <li>
              <BookOpen size={18} />
              Training, documentation, and evidence communication for wider public understanding
            </li>
          </ul>
          <a
            href="https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa"
            target="_blank"
            rel="noreferrer"
          >
            Read summit coverage <ArrowRight size={16} />
          </a>
        </div>
        <div className="research-pro-goa-image">
          <img src="/images/summit-global-stage.jpg" alt="Burnett Homeopathy evidence-based research summit" />
          <div>
            <span>Clinical dialogue</span>
            <span>Case documentation</span>
            <span>Global participation</span>
          </div>
        </div>
      </section>

      <section className="research-pro-domains">
        <div className="research-pro-section-head centered">
          <p className="eyebrow">Research domains</p>
          <h2>Six clear areas for future research pages.</h2>
          <p>
            These domains create a clean information architecture for future articles, papers,
            disease filters, authors, institutions, and country-wise research activity.
          </p>
        </div>
        <div className="research-pro-domain-grid">
          {researchDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <article key={domain.title}>
                <Icon size={30} />
                <h3>{domain.title}</h3>
                <p>{domain.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="research-pro-publications">
        <div className="research-pro-section-head">
          <p className="eyebrow">Published evidence desk</p>
          <h2>Named studies, reviews, and guidance sources.</h2>
          <p>
            This section should grow into a searchable library. For now, it gives the page a real
            evidence spine instead of vague claims.
          </p>
        </div>
        <div className="research-pro-ledger">
          {publicationRows.map((item) => (
            <article key={item.title}>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                View source <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="research-pro-networks">
        <div>
          <p className="eyebrow">Research networks</p>
          <h2>Institutions and databases make the platform credible.</h2>
          <p>
            A global research page should connect visitors to organizations, databases, academic
            projects, and future collaboration channels rather than relying on isolated statements.
          </p>
        </div>
        <div className="research-pro-institutions">
          {institutions.map((institution) => (
            <span key={institution}>
              <Building2 size={20} />
              {institution}
            </span>
          ))}
        </div>
      </section>

      <section className="research-pro-integrity">
        <div>
          <ShieldCheck size={30} />
          <h2>Evidence integrity matters.</h2>
        </div>
        <p>
          Homeopathy is a debated field. A professional global platform should cite supportive
          research, acknowledge critical reviews, explain study quality, and encourage visitors to
          consult qualified healthcare professionals for medical decisions. This page is structured
          to separate databases, reviews, clinical discussions, summit outputs, and future research
          collaborations so visitors can understand evidence with context rather than isolated claims.
          It also helps editors, practitioners, and institutions keep the language responsible,
          source-led, and suitable for an international healthcare audience.
        </p>
      </section>
    </main>
  );
}

export default ResearchPage;
