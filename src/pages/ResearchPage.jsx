import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  ChevronDown,
  FileSearch,
  FlaskConical,
  Globe2,
  GraduationCap,
  Microscope,
  Network,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const researchMetrics = [
  { value: "6,500+", label: "PubMed-indexed articles" },
  { value: "1,700+", label: "LILACS database entries" },
  { value: "2021", label: "HOMIS study mapping" },
  { value: "30+", label: "Goa research presentations" },
  { value: "6", label: "Core research domains" },
];

const prescriptionTrends = [
  { name: "Arsenicum album", value: 16.2 },
  { name: "Nux vomica", value: 13.7 },
  { name: "Sulphur", value: 11.8 },
  { name: "Pulsatilla", value: 8.9 },
  { name: "Natrum muriaticum", value: 6.6 },
  { name: "Sepia", value: 5.4 },
  { name: "Lycopodium clavatum", value: 4.2 },
  { name: "Rhus toxicodendron", value: 3.1 },
  { name: "Belladonna", value: 2.3 },
  { name: "Calcarea carbonica", value: 1.8 },
];

const publications = [
  {
    tag: "Meta-analysis",
    title: "Individualised homeopathic treatment in randomised placebo-controlled trials",
    source: "Mathie et al. / Systematic Reviews / 2014",
    description:
      "A peer-reviewed systematic review and meta-analysis of randomised trials evaluating individualised treatment.",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/2046-4053-3-142",
  },
  {
    tag: "Meta-analysis",
    title: "Non-individualised homeopathic treatment in randomised trials",
    source: "Mathie et al. / Systematic Reviews / 2017",
    description:
      "A structured review of placebo-controlled research involving non-individualised homeopathic treatment.",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-017-0445-3",
  },
  {
    tag: "Review",
    title: "Efficacy of homeopathic treatment: review of meta-analyses",
    source: "Hamre et al. / Systematic Reviews / 2023",
    description:
      "An overview examining the quality, methods, and conclusions of published meta-analyses.",
    link: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-023-02313-2",
  },
];

const repositoryItems = [
  {
    type: "Clinical evidence",
    title: "CORE-Hom clinical research database",
    text: "A specialist index for published clinical research in homeopathy.",
    icon: FileSearch,
  },
  {
    type: "Controlled studies",
    title: "HOMIS research mapping",
    text: "A structured academic project mapping controlled clinical studies.",
    icon: BarChart3,
  },
  {
    type: "Public guidance",
    title: "NIH / NCCIH homeopathy guidance",
    text: "Public information covering evidence, regulation, and responsible care.",
    icon: ShieldCheck,
  },
];

const milestones = [
  { year: "2014", title: "Individualised trials", text: "Major systematic review published." },
  { year: "2017", title: "Non-individualised trials", text: "A second evidence synthesis expanded the review base." },
  { year: "2021", title: "Clinical mapping", text: "HOMIS study mapping strengthened research discovery." },
  { year: "2023", title: "Meta-review", text: "A review of meta-analyses revisited the evidence landscape." },
  { year: "2025", title: "Goa summit", text: "Evidence-focused international dialogue and presentations." },
];

const cases = [
  {
    tag: "Evidence review",
    title: "Clinical outcome research",
    text: "Randomised trials, observational studies, outcome measurement, and case documentation.",
    icon: Stethoscope,
  },
  {
    tag: "Scientific inquiry",
    title: "Basic and high-dilution research",
    text: "Laboratory models, physicochemical studies, and transparent reporting of methods.",
    icon: FlaskConical,
  },
];

const networkItems = [
  { label: "Clinical research", icon: Stethoscope },
  { label: "Basic science", icon: FlaskConical },
  { label: "Education", icon: GraduationCap },
  { label: "Public health", icon: Globe2 },
  { label: "Institutions", icon: Building2 },
  { label: "Collaboration", icon: Network },
];

const faqs = [
  {
    question: "How is research selected for this page?",
    answer:
      "The page prioritizes named databases, peer-reviewed publications, research institutions, and clearly attributed public guidance.",
  },
  {
    question: "Does WorldHomeopathy.org provide medical advice?",
    answer:
      "No. The research page is an educational gateway and visitors should consult qualified healthcare professionals for medical decisions.",
  },
  {
    question: "How is the Goa initiative represented?",
    answer:
      "It is presented as an evidence-focused summit initiative led by Burnett Homeopathy Pvt. Ltd. within a wider international research landscape.",
  },
];

function ResearchPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="research-reference-page">
      <section className="rr-hero">
        <div className="rr-shell rr-hero-grid">
          <div className="rr-hero-copy">
            <p className="rr-kicker">Global research atlas</p>
            <h1>
              <span>Advancing Evidence-</span>
              <span>Based Homeopathy</span>
            </h1>
            <p>
              A focused international gateway to clinical studies, systematic reviews,
              research databases, and evidence-led collaboration.
            </p>
            <div className="rr-actions">
              <a className="rr-button rr-button-dark" href="#featured-research">
                View research <ArrowRight size={15} />
              </a>
              <a className="rr-text-link" href="#research-repository">Explore repository</a>
            </div>
          </div>

          <div className="rr-hero-chart" aria-label="Global prescription trends in homeopathy">
            <header>
              <p>Global data snapshot</p>
              <h2>Global Prescription Trends in Homeopathy</h2>
              <span>Relative frequency of selected remedies in the supplied dataset</span>
            </header>

            <div className="rr-chart-context">
              <span><Globe2 size={16} /><b>100+ countries</b></span>
              <span><Users size={16} /><b>Clinical sources</b></span>
              <span><BarChart3 size={16} /><b>2010–2024</b></span>
            </div>

            <div className="rr-chart-plot">
              <div className="rr-chart-y-axis" aria-hidden="true">
                <span>18%</span><span>12%</span><span>6%</span><span>0%</span>
              </div>
              <div className="rr-chart-bars">
                {prescriptionTrends.map((item) => (
                  <div className="rr-chart-item" key={item.name}>
                    <strong>{item.value}%</strong>
                    <div className="rr-chart-track">
                      <span style={{ height: `${(item.value / 18) * 100}%` }}></span>
                    </div>
                    <small>{item.name}</small>
                  </div>
                ))}
              </div>
            </div>

            <footer>
              <span>Relative frequency only</span>
              <span>Aggregated international data</span>
              <span>Not a measure of efficacy</span>
            </footer>
          </div>
        </div>
      </section>

      <section className="rr-metric-band" aria-label="Research metrics">
        <div className="rr-shell rr-metric-grid">
          {researchMetrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="rr-section rr-shell" id="featured-research">
        <div className="rr-section-heading rr-heading-row">
          <div>
            <p className="rr-kicker">Evidence desk</p>
            <h2>Featured Research</h2>
            <p>Named publications and primary sources form the centre of this research archive.</p>
          </div>
          <a href="#research-repository">View all research <ArrowRight size={14} /></a>
        </div>

        <div className="rr-featured-grid">
          <article className="rr-featured-lead">
            <div className="rr-lab-visual">
              <img src="/images/research-microscope-lab.jpg" alt="Researcher using a microscope in a laboratory" />
              <span>{publications[0].tag}</span>
            </div>
            <div className="rr-featured-copy">
              <small>{publications[0].source}</small>
              <h3>{publications[0].title}</h3>
              <p>{publications[0].description}</p>
              <a href={publications[0].link} target="_blank" rel="noreferrer">
                Read source <ArrowRight size={14} />
              </a>
            </div>
          </article>

          <div className="rr-featured-side">
            {publications.slice(1).map((item) => (
              <article key={item.title}>
                <span>{item.tag}</span>
                <small>{item.source}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  View publication <ArrowRight size={13} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-goa-band">
        <div className="rr-shell rr-goa-grid">
          <div className="rr-goa-copy">
            <p className="rr-kicker">Featured research initiative</p>
            <h2>Burnett Homeopathy Goa Evidence-Based Research</h2>
            <p>
              The 2025 Goa initiative brought clinical discussion, research presentations,
              evidence review, and international professional exchange into one focused forum.
            </p>
            <ul>
              <li><Microscope size={16} /> Clinical research presentations and case review</li>
              <li><Users size={16} /> Researchers, practitioners, educators, and institutions</li>
              <li><BookOpen size={16} /> Documentation, evidence literacy, and knowledge exchange</li>
            </ul>
            <a
              className="rr-button rr-button-dark"
              href="https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa"
              target="_blank"
              rel="noreferrer"
            >
              Read summit coverage <ArrowRight size={15} />
            </a>
          </div>

          <aside className="rr-goa-brief">
            <p className="rr-kicker">Research direction</p>
            {[
              ["01", "Evidence review", "Research quality, methodology, and responsible interpretation."],
              ["02", "Global dialogue", "Connections across countries, disciplines, and institutions."],
              ["03", "Future practice", "Education and standards shaped by transparent research."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <strong>{number}</strong>
                <span><b>{title}</b>{text}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="rr-section rr-shell" id="research-repository">
        <div className="rr-section-heading rr-centered-heading">
          <p className="rr-kicker">Institutional archive</p>
          <h2>Research Repository</h2>
          <p>A clear route into databases, reviews, public guidance, and source-led evidence.</p>
        </div>

        <div className="rr-filter-row" aria-label="Research filters">
          {["All research", "Clinical", "Reviews", "Basic science", "Public guidance", "Summit research"].map((filter, index) => (
            <button className={index === 0 ? "active" : ""} type="button" key={filter}>{filter}</button>
          ))}
        </div>

        <div className="rr-repository-grid">
          {repositoryItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div><Icon size={22} /><span>{item.type}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#research-networks">Open record <ArrowRight size={13} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rr-milestone-band">
        <div className="rr-shell">
          <div className="rr-dark-heading">
            <p className="rr-kicker">Evidence over time</p>
            <h2>Research Milestones</h2>
            <p>Selected moments that help visitors understand the development of the evidence conversation.</p>
          </div>
          <div className="rr-milestone-grid">
            {milestones.map((item) => (
              <article key={item.year}>
                <strong>{item.year}</strong>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-shell">
        <div className="rr-section-heading">
          <p className="rr-kicker">Focused reading</p>
          <h2>Case Research Highlights</h2>
        </div>
        <div className="rr-case-grid">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={26} />
                <div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                <ArrowRight size={18} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="rr-network-band" id="research-networks">
        <div className="rr-shell">
          <div className="rr-section-heading rr-centered-heading">
            <p className="rr-kicker">Connected research</p>
            <h2>Our Research Network</h2>
            <p>Six connected areas give the platform a practical international research structure.</p>
          </div>
          <div className="rr-network-grid">
            {networkItems.map((item) => {
              const Icon = item.icon;
              return <article key={item.label}><Icon size={22} /><span>{item.label}</span></article>;
            })}
          </div>
          <div className="rr-institution-strip" aria-label="Research institution placeholders">
            {["Research institute", "University network", "Clinical database", "Education council", "Public health desk", "Global partners"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-shell rr-faq-section">
        <div className="rr-section-heading rr-centered-heading">
          <p className="rr-kicker">Research guidance</p>
          <h2>Research Ethical Questions</h2>
        </div>
        <div className="rr-faq-list">
          {faqs.map((item, index) => (
            <article className={openFaq === index ? "is-open" : ""} key={item.question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{item.question}</span><ChevronDown size={18} />
              </button>
              <div><p>{item.answer}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="rr-partner-cta">
        <div className="rr-shell">
          <p className="rr-kicker">International collaboration</p>
          <h2>Partner in Progress</h2>
          <p>
            Research grows through transparent methods, qualified institutions, education,
            and meaningful exchange across borders.
          </p>
          <div>
            <a className="rr-button rr-button-light" href="mailto:info@worldhomeopathy.org">
              Research enquiry <ArrowRight size={15} />
            </a>
            <a href="#featured-research">Return to research desk</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResearchPage;
