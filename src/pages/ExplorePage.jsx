import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Leaf,
  Microscope,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    eyebrow: "Origin",
    title: "A 200-year medical philosophy",
    text: "Trace homeopathy from Samuel Hahnemann's early observations to its present global presence.",
  },
  {
    eyebrow: "Principle",
    title: "Individualized healing approach",
    text: "Understand symptom patterns, case-taking, minimum dose, and the classical idea of similarity.",
  },
  {
    eyebrow: "Practice",
    title: "Global clinical tradition",
    text: "Explore how practitioners, educators, and institutions explain homeopathy across countries.",
  },
  {
    eyebrow: "Evidence",
    title: "Research-aware education",
    text: "Organize learning around published sources, balanced language, and responsible public guidance.",
  },
];

const insightCapsules = [
  {
    number: "01",
    title: "Historical Foundation",
    text: "Hahnemann, Organon, materia medica, provings, and the growth of classical education.",
  },
  {
    number: "02",
    title: "Global Practice",
    text: "Country chapters, professional bodies, academic teaching, public health dialogue, and events.",
  },
  {
    number: "03",
    title: "Modern Learning",
    text: "Clear pathways for students, doctors, researchers, media teams, and curious public readers.",
  },
];

const healingPathway = [
  { icon: BookOpen, title: "Foundation", text: "Begin with history and principles." },
  { icon: Microscope, title: "Evidence", text: "Move into research and citations." },
  { icon: Globe2, title: "Global View", text: "Understand country-wise presence." },
  { icon: Leaf, title: "Practice", text: "Connect learning with real-world dialogue." },
];

const domains = [
  {
    title: "Clinical Care",
    points: ["Case-taking", "Patient observation", "Outcome documentation"],
  },
  {
    title: "Mental Health",
    points: ["Whole-person study", "Long-term patterns", "Professional referral awareness"],
  },
  {
    title: "Public Health",
    points: ["Community education", "Responsible claims", "Country context"],
  },
  {
    title: "Research",
    points: ["Published studies", "Databases", "Evidence summaries"],
  },
];

const stats = [
  ["200+", "years of homeopathic tradition"],
  ["80+", "countries with public references"],
  ["500M+", "people reported using homeopathy globally"],
  ["12K+", "materia medica and literature references"],
];

const glossary = [
  {
    term: "Potentization",
    text: "A traditional preparation process involving serial dilution and succussion in homeopathic pharmacy.",
  },
  {
    term: "Materia Medica",
    text: "A body of remedy descriptions, symptoms, and clinical observations used for education and reference.",
  },
  {
    term: "Miasm",
    text: "A classical concept used by some schools of homeopathy to understand deeper constitutional tendencies.",
  },
];

const mythFacts = [
  {
    myth: "Homeopathy is only a local tradition.",
    fact: "Homeopathy has historical and institutional presence across Europe, India, the Americas, and many other regions.",
  },
  {
    myth: "There is no structured way to study it.",
    fact: "Learning can be organized through history, principles, materia medica, repertory, evidence review, and supervised practice.",
  },
];

const faqs = [
  {
    question: "What is homeopathy?",
    answer:
      "Homeopathy is a system of medicine founded on the principle of similarity, individualized case-taking, and highly diluted preparations selected according to the patient picture.",
  },
  {
    question: "Who founded homeopathy?",
    answer:
      "Homeopathy was founded by Dr. Samuel Hahnemann, a German physician and medical reformer whose work shaped the Organon and early homeopathic philosophy.",
  },
  {
    question: "How should readers use this page?",
    answer:
      "Use it as a gateway: start with foundational concepts, then move to research, summits, media, leadership, and country context.",
  },
  {
    question: "Where does Burnett Homeopathy Pvt. Ltd. appear?",
    answer:
      "Burnett Homeopathy Pvt. Ltd. is referenced through summit organization, research initiatives, education visibility, and global infrastructure activity where relevant.",
  },
  {
    question: "What comes next for this section?",
    answer:
      "Detailed source pages, country references, downloadable learning material, and verified educational resources can be added as content is finalized.",
  },
];

function ExplorePage() {
  return (
    <main className="explore-stitch-page">
      <section className="explore-stitch-hero" aria-labelledby="explore-title">
        <div className="explore-stitch-hero-copy">
          <p className="explore-stitch-kicker">The wellness science and global knowledge hub</p>
          <h1 id="explore-title">Explore the Science and Philosophy of Homeopathy</h1>
          <p>
            Discover the history, philosophy, educational foundations, and evolving global
            conversation around homeopathy through one structured institutional archive.
          </p>
          <div className="explore-stitch-actions">
            <a href="#pillars">Explore Archive</a>
            <a href="#domains">Discover Timeline</a>
          </div>
        </div>
      </section>

      <section className="explore-stitch-section explore-stitch-pillars" id="pillars" aria-labelledby="pillars-title">
        <div className="explore-stitch-heading">
          <span></span>
          <div>
            <h2 id="pillars-title">Foundational Pillars</h2>
            <p>Core areas that help visitors understand homeopathy with context and structure.</p>
          </div>
        </div>

        <div className="explore-stitch-pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <small>{pillar.eyebrow}</small>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <Link to="/research">
                Explore <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>

        <div className="explore-stitch-feature-grid">
          <article className="explore-stitch-feature-card">
            <img src="/images/stitch-burnett-lab-reference.jpg" alt="Homeopathy research and production environment" />
            <div>
              <small>Research View</small>
              <h3>Research-led learning, references, and evidence context</h3>
              <p>
                A clean route into studies, educational references, responsible source language,
                and research initiatives connected to the global platform.
              </p>
              <Link to="/research">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          </article>

          <article className="explore-stitch-feature-card explore-stitch-feature-card-reverse">
            <div>
              <small>Global Practice</small>
              <h3>From philosophy to public understanding</h3>
              <p>
                The page connects foundational language with real institutions, summits,
                country references, media, and leadership profiles.
              </p>
              <Link to="/summit">
                View summits <ArrowRight size={13} />
              </Link>
            </div>
            <div className="explore-stitch-ripple-visual" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        </div>
      </section>

      <section className="explore-stitch-capsules" aria-labelledby="capsules-title">
        <h2 id="capsules-title">Institutional Insight Capsules</h2>
        <div>
          {insightCapsules.map((capsule) => (
            <article key={capsule.title}>
              <span>{capsule.number}</span>
              <h3>{capsule.title}</h3>
              <p>{capsule.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-stitch-pathway" aria-labelledby="pathway-title">
        <p className="explore-stitch-center-kicker">The Healing Pathway</p>
        <h2 id="pathway-title">A simple route through science, education, and global context.</h2>
        <div>
          {healingPathway.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title}>
                <span>
                  <Icon size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="explore-stitch-domains" id="domains" aria-labelledby="domains-title">
        <div className="explore-stitch-domain-head">
          <div>
            <h2 id="domains-title">Therapeutic Domains</h2>
            <p>Organized learning areas for visitors who need a practical map of the subject.</p>
          </div>
          <p>
            This section is educational, source-aware, and designed to direct readers toward
            more detailed pages as verified content is added.
          </p>
        </div>

        <div className="explore-stitch-domain-grid">
          {domains.map((domain) => (
            <article key={domain.title}>
              <h3>{domain.title}</h3>
              <ul>
                {domain.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-stitch-stats" aria-label="Homeopathy overview statistics">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="explore-stitch-glossary" aria-labelledby="glossary-title">
        <div>
          <h2 id="glossary-title">Materia Medica Glossary</h2>
          <p>
            A compact reference area for terms that frequently appear in homeopathy education,
            research writing, and public communication.
          </p>
          <div className="explore-stitch-letters" aria-label="Glossary index">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, 12).map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </div>
        </div>
        <div className="explore-stitch-terms">
          {glossary.map((item) => (
            <article key={item.term}>
              <h3>{item.term}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <Link to="/research">
            Continue to research references <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="explore-stitch-myths" aria-labelledby="myth-title">
        <h2 id="myth-title">Myth vs. Fact</h2>
        <div>
          {mythFacts.map((item) => (
            <article key={item.myth}>
              <p>
                <Sparkles size={16} />
                <strong>Myth</strong>
                {item.myth}
              </p>
              <p>
                <CheckCircle2 size={16} />
                <strong>Fact</strong>
                {item.fact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-stitch-faq" aria-labelledby="faq-title">
        <div className="explore-stitch-faq-copy">
          <h2 id="faq-title">Institutional FAQ</h2>
          <p>Quick answers for students, media teams, practitioners, and institutions.</p>
          <article>
            <Globe2 size={20} />
            <h3>Global homeopathy knowledge desk</h3>
            <p>
              This gateway will expand as the client provides source-approved content,
              downloadable material, and official references.
            </p>
            <Link to="/contact">
              Submit a query <ArrowRight size={13} />
            </Link>
          </article>
        </div>

        <div className="explore-stitch-faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.question}
                <ChevronDown size={17} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

    </main>
  );
}

export default ExplorePage;
