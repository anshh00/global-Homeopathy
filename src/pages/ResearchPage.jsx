import React from "react";
import {
  BookOpen,
  Database,
  ExternalLink,
  FileSearch,
  FlaskConical,
  Globe2,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import "../research-evidence.css";

const evidenceSources = [
  {
    eyebrow: "Clinical database",
    title: "CORE-Hom",
    text: "A research database for clinical studies in homeopathy, useful for locating trials by condition, remedy, study type, and publication details.",
    linkLabel: "Open CORE-Hom",
    href: "https://www.hri-research.org/resources/research-databases/core-hom/",
    icon: Database,
  },
  {
    eyebrow: "Research databases",
    title: "HRI Research Databases",
    text: "A central place to discover homeopathy research databases, including clinical research resources and structured evidence tools.",
    linkLabel: "Open HRI resources",
    href: "https://www.hri-research.org/resources/research-databases/",
    icon: FileSearch,
  },
  {
    eyebrow: "Medical literature",
    title: "PubMed Indexed Literature",
    text: "A live literature search for peer-reviewed articles, systematic reviews, clinical studies, and basic science papers mentioning homeopathy.",
    linkLabel: "Search PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=homeopathy",
    icon: BookOpen,
  },
  {
    eyebrow: "Trial registry",
    title: "ClinicalTrials.gov",
    text: "A registry search for current and past studies. It helps visitors separate published articles from registered or ongoing clinical trials.",
    linkLabel: "View trials",
    href: "https://clinicaltrials.gov/search?term=homeopathy",
    icon: Microscope,
  },
  {
    eyebrow: "Public health guidance",
    title: "NCCIH Homeopathy Overview",
    text: "A public-facing evidence and safety page from the U.S. National Center for Complementary and Integrative Health.",
    linkLabel: "Read guidance",
    href: "https://www.nccih.nih.gov/health/homeopathy",
    icon: ShieldCheck,
  },
  {
    eyebrow: "International reference",
    title: "LMHI Research Resources",
    text: "An international homeopathic community reference point for research links, congresses, and institutional homeopathy activity.",
    linkLabel: "Visit LMHI",
    href: "https://www.lmhi.org/",
    icon: Globe2,
  },
];

const readingList = [
  {
    type: "Systematic review",
    title: "Randomised placebo-controlled trials of individualised homeopathic treatment",
    authors: "Mathie et al.",
    year: "2014",
    text: "A systematic review and meta-analysis focused on individualised homeopathic treatment compared with placebo.",
    href: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/2046-4053-3-142",
  },
  {
    type: "Systematic review",
    title: "Randomised placebo-controlled trials of non-individualised homeopathic treatment",
    authors: "Mathie et al.",
    year: "2017",
    text: "A companion review examining non-individualised homeopathic treatment, useful for comparing different study designs.",
    href: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-017-0445-3",
  },
  {
    type: "Meta-analysis review",
    title: "Systematic reviews and meta-analyses of homeopathic treatment",
    authors: "Hamre et al.",
    year: "2023",
    text: "A review of systematic-review evidence that helps readers understand where results differ across methods and clinical contexts.",
    href: "https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-023-02313-2",
  },
  {
    type: "Comparative study",
    title: "Are the clinical effects of homoeopathy placebo effects?",
    authors: "Shang et al.",
    year: "2005",
    text: "A widely discussed comparative study published in The Lancet. Included here because serious evidence pages should show debated literature too.",
    href: "https://pubmed.ncbi.nlm.nih.gov/16125589/",
  },
];

const researchSequence = [
  {
    label: "01",
    title: "Start with databases",
    text: "Search indexed databases first. They help visitors move beyond generic claims and find study records, conditions, authors, and publication context.",
  },
  {
    label: "02",
    title: "Read systematic reviews",
    text: "Systematic reviews show how researchers group studies, assess quality, compare results, and explain uncertainty.",
  },
  {
    label: "03",
    title: "Check condition-level evidence",
    text: "Evidence is not the same for every disease or symptom. A useful page should guide readers by topic, not only by broad opinion.",
  },
  {
    label: "04",
    title: "Separate clinical, basic, and public-health research",
    text: "Clinical trials, laboratory studies, public-health usage, and education research answer different questions and should not be mixed randomly.",
  },
  {
    label: "05",
    title: "Keep safety and responsibility visible",
    text: "Research should be presented with source links, transparent language, and a clear note that website content is educational and not personal medical advice.",
  },
];

const researchAreas = [
  "Clinical outcome research",
  "Systematic reviews",
  "Public health and policy",
  "Materia medica documentation",
  "Education and training research",
  "Pharmacy and manufacturing standards",
  "Digital health and access",
  "Summit-led academic dialogue",
];

const sourceNotes = [
  "External links open original sources so visitors can verify details directly.",
  "Counts and claims are avoided unless a reliable public source supports them.",
  "Burnett Homeopathy Pvt. Ltd. is referenced through public summit and research activity, not as the whole identity of the platform.",
];

function ExternalAnchor({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLink size={15} strokeWidth={2.2} />
    </a>
  );
}

export default function ResearchPage() {
  return (
    <div className="research-evidence-page">
      <section className="reh-hero" id="atlas">
        <div className="reh-hero__copy">
          <p className="reh-kicker">Global research atlas</p>
          <h1>Research & Evidence in Global Homeopathy</h1>
          <p className="reh-lede">
            A source-led evidence gateway for clinical studies, systematic reviews, research databases,
            public guidance, and summit-led academic dialogue.
          </p>
          <p className="reh-body">
            WorldHomeopathy.org should help visitors read research with context. This page organizes
            reliable databases, major review papers, safety guidance, and evidence-focused summit activity
            into a clear sequence without unsupported medical claims.
          </p>
          <div className="reh-hero__actions" aria-label="Research page shortcuts">
            <a href="#evidence-sources">Explore sources</a>
            <a href="#reading-list">Reading list</a>
            <a href="#goa-research">Goa research summit</a>
          </div>
        </div>

        <div className="reh-hero__visual" aria-label="Research laboratory visual">
          <img src="/images/research-microscope-lab.jpg" alt="Microscope and research laboratory" />
          <div className="reh-visual-note">
            <ShieldCheck size={22} />
            <span>Evidence with responsibility</span>
          </div>
        </div>
      </section>

      <section className="reh-source-strip" aria-label="Research source principles">
        {sourceNotes.map((note) => (
          <div key={note}>
            <span />
            <p>{note}</p>
          </div>
        ))}
      </section>

      <section className="reh-section reh-section--sources" id="evidence-sources">
        <div className="reh-section__intro">
          <p className="reh-kicker">Evidence sources</p>
          <h2>Where serious research reading should begin.</h2>
          <p>
            These are not decorative links. They are practical starting points for researchers, students,
            practitioners, journalists, and institutions who want to verify homeopathy research directly.
          </p>
        </div>

        <div className="reh-source-grid">
          {evidenceSources.map((source) => {
            const Icon = source.icon;
            return (
              <article className="reh-source" key={source.title}>
                <Icon size={28} />
                <div>
                  <p>{source.eyebrow}</p>
                  <h3>{source.title}</h3>
                  <span>{source.text}</span>
                  <ExternalAnchor href={source.href}>{source.linkLabel}</ExternalAnchor>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="reh-section reh-sequence" id="research-sequence">
        <div className="reh-section__intro reh-section__intro--wide">
          <p className="reh-kicker">Research sequence</p>
          <h2>A cleaner way to read the global evidence conversation.</h2>
          <p>
            Instead of presenting random research blocks, the page now moves through a transparent order:
            databases, reviews, condition-level reading, research type, and safety context.
          </p>
        </div>

        <div className="reh-sequence__list">
          {researchSequence.map((item) => (
            <article className="reh-step" key={item.label}>
              <strong>{item.label}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reh-section reh-reading" id="reading-list">
        <div className="reh-reading__header">
          <div>
            <p className="reh-kicker">Peer-reviewed reading list</p>
            <h2>Important papers to read before forming an opinion.</h2>
          </div>
          <p>
            The list includes supportive, critical, and method-focused literature because an institutional
            research page should be credible, balanced, and source-linked.
          </p>
        </div>

        <div className="reh-paper-list">
          {readingList.map((paper) => (
            <article className="reh-paper" key={paper.title}>
              <div className="reh-paper__meta">
                <span>{paper.type}</span>
                <strong>{paper.year}</strong>
              </div>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.text}</p>
                <span>{paper.authors}</span>
              </div>
              <ExternalAnchor href={paper.href} className="reh-paper__link">
                Read source
              </ExternalAnchor>
            </article>
          ))}
        </div>
      </section>

      <section className="reh-section reh-goa" id="goa-research">
        <div className="reh-goa__image">
          <img src="/images/summit-global-stage.jpg" alt="International homeopathy summit stage" />
        </div>
        <div className="reh-goa__copy">
          <p className="reh-kicker">Featured research initiative</p>
          <h2>Burnett Homeopathy Goa - Evidence-Based Research Summit</h2>
          <p>
            Public coverage of the Goa research summit positioned the programme around evidence-based
            discussion, global standards, and research dialogue. On WorldHomeopathy.org, Burnett
            Homeopathy Pvt. Ltd. is referenced through this kind of documented summit and research
            contribution.
          </p>
          <ul>
            <li>Research-focused summit coverage with public source link.</li>
            <li>Useful bridge between summit visibility and evidence discussion.</li>
            <li>Presented as one contributor inside a wider global platform.</li>
          </ul>
          <ExternalAnchor
            href="https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa"
            className="reh-button"
          >
            Read public coverage
          </ExternalAnchor>
        </div>
      </section>

      <section className="reh-section reh-fields" id="research-areas">
        <div>
          <p className="reh-kicker">What belongs on this page</p>
          <h2>Research areas worth organizing over time.</h2>
          <p>
            As the website grows, these areas can become dedicated pages with filters, source references,
            author names, publication years, and download links where rights are confirmed.
          </p>
        </div>
        <div className="reh-fields__grid">
          {researchAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="reh-section reh-ethics" id="research-ethics">
        <div className="reh-ethics__panel">
          <FlaskConical size={34} />
          <h2>Editorial standard for research content</h2>
          <p>
            Research content should cite the original source, avoid disease-cure promises, identify the
            research type, and separate educational information from personal medical advice.
          </p>
        </div>
        <div className="reh-ethics__faq">
          <details open>
            <summary>Is this page medical advice?</summary>
            <p>No. It is an educational evidence gateway. Visitors should consult qualified healthcare professionals for personal medical decisions.</p>
          </details>
          <details>
            <summary>How are links selected?</summary>
            <p>Priority is given to research databases, peer-reviewed articles, public health guidance, and public coverage of research-focused events.</p>
          </details>
          <details>
            <summary>How is Burnett Homeopathy included?</summary>
            <p>Burnett Homeopathy Pvt. Ltd. is included through documented summit and research initiatives, while the page remains a broader global research resource.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
