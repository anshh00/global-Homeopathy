import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Download,
  FileText,
  Globe2,
  Landmark,
  Leaf,
  Library,
  Microscope,
  Pill,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

const purposePaths = [
  {
    icon: BookOpen,
    label: "Learn Homoeopathy",
    text: "Foundations, principles, history, safety, myths, and beginner FAQs.",
    anchor: "#learn",
  },
  {
    icon: Pill,
    label: "Medicines",
    text: "Materia medica, repertory, tinctures, dilutions, biochemic and related references.",
    anchor: "#medicines",
  },
  {
    icon: Microscope,
    label: "Research & Cases",
    text: "Research papers, clinical cases, evidence notes, news, and downloadable guides.",
    anchor: "#knowledge",
  },
  {
    icon: Landmark,
    label: "Organon & Philosophy",
    text: "Aphorisms, vital force, miasms, minimum dose, and individualization.",
    anchor: "#organon",
  },
  {
    icon: Users,
    label: "Pioneers & Leaders",
    text: "Historical figures and modern contributors shaping the global discussion.",
    anchor: "#pioneers",
  },
  {
    icon: CalendarDays,
    label: "Events & Community",
    text: "Seminars, workshops, conferences, interviews, stories, and public dialogue.",
    anchor: "#events",
  },
];

const learnTopics = [
  "What is Homoeopathy?",
  "Principles of Homoeopathy",
  "History of Homoeopathy",
  "How Homoeopathic Medicines Work",
  "Myths vs Facts",
  "Is Homoeopathy Safe?",
  "FAQs",
];

const medicineGroups = [
  "Materia Medica",
  "Repertory",
  "Mother Tinctures",
  "Biochemic Remedies",
  "Dilutions",
  "Nosodes",
  "Sarcodes",
  "Tissue Salts",
  "Bach Flower Remedies",
];

const knowledgeItems = [
  { icon: FileText, title: "Health Articles", text: "Plain-language explainers for public education." },
  { icon: Microscope, title: "Research Papers", text: "Evidence references and source-aware summaries." },
  { icon: Stethoscope, title: "Clinical Cases", text: "Structured case notes for educational review." },
  { icon: Library, title: "Case Studies", text: "Long-form learning from documented experience." },
  { icon: Globe2, title: "Medical News", text: "Global homeopathy updates and institutional coverage." },
  { icon: Download, title: "Guides & E-books", text: "Downloadable learning resources as content is approved." },
];

const philosophyItems = [
  ["Aphorisms", "Organon-based passages and classical study notes."],
  ["Miasm Theory", "A traditional framework used in some schools of practice."],
  ["Vital Force", "A classical concept in homeopathic philosophy."],
  ["Law of Similars", "The principle often summarized as like cures like."],
  ["Minimum Dose", "A traditional idea around the smallest effective stimulus."],
  ["Individualization", "The patient picture studied beyond isolated disease labels."],
];

const pioneers = [
  "Samuel Hahnemann",
  "James Tyler Kent",
  "Constantine Hering",
  "Boenninghausen",
  "E. B. Nash",
  "H. C. Allen",
  "C. M. Boger",
  "J. C. Burnett",
  "J. H. Clarke",
  "Adolph Lippe",
];

const interactiveTools = [
  {
    icon: Search,
    title: "Symptom Checker",
    text: "Educational only. It should guide reading, not diagnose illness or replace consultation.",
  },
  {
    icon: Pill,
    title: "Medicine Explorer",
    text: "Filter future remedy pages by kingdom, potency, preparation type, and reference category.",
  },
  {
    icon: Sparkles,
    title: "Remedy of the Day",
    text: "A daily learning module that introduces one remedy with safe source-aware language.",
  },
  {
    icon: Landmark,
    title: "This Day in History",
    text: "Important dates from homeopathy history, institutions, publications, and global events.",
  },
  {
    icon: BookOpen,
    title: "Aphorism of the Day",
    text: "Short Organon-based learning prompts for students and practitioners.",
  },
  {
    icon: Leaf,
    title: "Medicinal Plant Gallery",
    text: "A visual gallery connecting plants, remedy sources, and educational references.",
  },
  {
    icon: Brain,
    title: "Interactive Body Map",
    text: "A future organ-wise education map for conditions, symptoms, and reading pathways.",
  },
  {
    icon: CircleHelp,
    title: "Daily Quiz",
    text: "Small knowledge checks for students, readers, and public learning.",
  },
];

const eventItems = [
  "Seminars",
  "Workshops",
  "Conferences",
  "World Homoeopathy Day",
  "Continuing Education",
  "Doctor Interviews",
  "Patient Stories",
  "Success Stories",
];

const faqs = [
  {
    question: "What is homoeopathy?",
    answer:
      "Homoeopathy is a medical system developed around individualized case-taking and the principle of similarity. This website explains it as an educational subject and encourages readers to consult qualified professionals for health decisions.",
  },
  {
    question: "Who founded homoeopathy?",
    answer:
      "Homoeopathy was founded by Dr. Samuel Hahnemann, a German physician whose writings, especially the Organon, became central to classical homeopathic philosophy.",
  },
  {
    question: "What are the core principles of homoeopathy?",
    answer:
      "Commonly discussed principles include the law of similars, minimum dose, individualization, case-taking, remedy provings, and careful observation of the patient as a whole.",
  },
  {
    question: "Is homoeopathy safe?",
    answer:
      "Safety depends on context, product quality, correct use, and whether urgent medical care is delayed. This platform should present educational information and always encourage qualified medical guidance for diagnosis, emergencies, pregnancy, children, and chronic illness.",
  },
  {
    question: "How do homoeopathic medicines work?",
    answer:
      "Classical homeopathy explains medicines through potentization, individualized selection, and the principle of similarity. Scientific interpretation remains debated, so this website should use careful, source-aware language and avoid unsupported medical claims.",
  },
  {
    question: "What is materia medica?",
    answer:
      "Materia medica is a reference body of remedy descriptions, symptom pictures, source notes, and clinical observations used for study and professional reference.",
  },
  {
    question: "How is Burnett Homeopathy Pvt. Ltd. connected to this platform?",
    answer:
      "WorldHomeopathy.org should remain an independent global education platform. Burnett Homeopathy Pvt. Ltd. can be referenced where relevant as a summit organizer, research supporter, manufacturing contributor, or institutional participant, not as the full identity of the website.",
  },
  {
    question: "Which company information can be shown about Burnett Homeopathy?",
    answer:
      "The official Burnett Homeopathy profile publicly lists around 1400 homoeopathic dilutions and mother tinctures, 140 proprietary medicines, skin and hair care products, health supplements, and more products under development. This can be shown as a contributor reference, not as the full identity of WorldHomeopathy.org.",
  },
  {
    question: "Why include jobs, events, and media in Explore?",
    answer:
      "A global homeopathy platform should help people learn, find credible events, discover professional opportunities, read media coverage, and follow the wider institutional movement in one organized place.",
  },
];

function ExplorePage() {
  return (
    <main className="explore-stitch-page explore-edu-page">
      <section className="explore-edu-hero" id="paths" aria-labelledby="explore-title">
        <div className="explore-edu-hero-copy">
          <p className="explore-edu-kicker">Explore Homoeopathy</p>
          <h1 id="explore-title">A structured learning gateway for global homoeopathy.</h1>
          <p>
            Learn the foundations, medicines, philosophy, research language, events, leaders, and
            community pathways through one educational institutional hub.
          </p>
          <div className="explore-edu-actions">
            <a href="#learn">Start Learning <ArrowRight size={15} /></a>
            <a href="#faq">Read FAQ <ChevronDown size={15} /></a>
          </div>
        </div>
        <div className="explore-edu-hero-panel" aria-label="Explore by purpose">
          <div className="explore-edu-panel-header">
            <span>Choose your path</span>
            <strong>Six doors into one knowledge system</strong>
          </div>
          <div className="explore-edu-purpose-grid">
            {purposePaths.map((item) => {
              const Icon = item.icon;
              return (
                <a href={item.anchor} key={item.label}>
                  <Icon size={22} />
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="explore-edu-modern" aria-labelledby="modern-title">
        <div className="explore-edu-section-head">
          <p className="explore-edu-kicker">Modern Explore Categories</p>
          <h2 id="modern-title">Clear routes for students, doctors, researchers, and the public.</h2>
        </div>
        <div className="explore-edu-category-grid">
          {[
            ["Explore", "Learn Homoeopathy", "Organon", "Philosophy", "History"],
            ["Knowledge", "Blogs", "Research", "Case Studies", "Downloads"],
            ["Medicines", "Materia Medica", "Repertory", "Mother Tinctures", "Tissue Salts"],
            ["Diseases", "Disease Library", "Symptoms", "Treatment Principles", "Wellness"],
          ].map(([title, ...items]) => (
            <article key={title}>
              <h3>{title}</h3>
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="explore-edu-split" id="learn" aria-labelledby="learn-title">
        <div>
          <p className="explore-edu-kicker">Learn Homoeopathy</p>
          <h2 id="learn-title">Begin with concepts that make the rest of the subject easier.</h2>
          <p>
            The learning area should introduce homoeopathy without overwhelming the visitor. It
            starts with simple definitions, then moves toward principles, history, safety,
            responsible reading, and common misconceptions.
          </p>
        </div>
        <div className="explore-edu-list-panel">
          {learnTopics.map((topic) => (
            <a href="#faq" key={topic}>
              <CheckCircle2 size={17} />
              {topic}
            </a>
          ))}
        </div>
      </section>

      <section className="explore-edu-medicines" id="medicines" aria-labelledby="medicines-title">
        <div className="explore-edu-section-head">
          <p className="explore-edu-kicker">Medicines</p>
          <h2 id="medicines-title">Browse medicines by preparation, reference system, and study route.</h2>
          <p>
            This section is designed as an educational reference library. Product or remedy details
            should be published with source notes, practitioner guidance, and safety language.
          </p>
        </div>
        <div className="explore-edu-medicine-grid">
          {medicineGroups.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-edu-knowledge" id="knowledge" aria-labelledby="knowledge-title">
        <div className="explore-edu-section-head">
          <p className="explore-edu-kicker">Knowledge Hub</p>
          <h2 id="knowledge-title">A serious archive for articles, cases, papers, news, and guides.</h2>
        </div>
        <div className="explore-edu-knowledge-grid">
          {knowledgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="explore-edu-philosophy" id="organon" aria-labelledby="organon-title">
        <div className="explore-edu-section-head">
          <p className="explore-edu-kicker">Organon & Philosophy</p>
          <h2 id="organon-title">The classical language behind the discipline.</h2>
          <p>
            These themes help visitors understand the vocabulary used by classical practitioners,
            educators, and historical literature.
          </p>
        </div>
        <div className="explore-edu-philosophy-grid">
          {philosophyItems.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-edu-pioneers" id="pioneers" aria-labelledby="pioneers-title">
        <div>
          <p className="explore-edu-kicker">Famous Homoeopaths</p>
          <h2 id="pioneers-title">A historical reading list for the leadership section.</h2>
          <p>
            The full biographies can connect with the Leaders page, while Explore keeps a compact
            overview for students and first-time visitors.
          </p>
        </div>
        <div className="explore-edu-pioneer-cloud">
          {pioneers.map((name) => (
            <Link to="/leaders" key={name}>{name}</Link>
          ))}
        </div>
      </section>

      <section className="explore-edu-tools" aria-labelledby="tools-title">
        <div className="explore-edu-section-head">
          <p className="explore-edu-kicker">Interactive Education Tools</p>
          <h2 id="tools-title">Features that make the page useful beyond reading.</h2>
          <p>
            These modules can be activated as content and technical review are completed. The
            symptom checker and body map must remain educational and non-diagnostic.
          </p>
        </div>
        <div className="explore-edu-tool-grid">
          {interactiveTools.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={22} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="explore-edu-events" id="events" aria-labelledby="events-title">
        <div>
          <p className="explore-edu-kicker">Events & Community</p>
          <h2 id="events-title">A place for learning, dialogue, and real-world participation.</h2>
          <p>
            Explore should direct people into seminars, workshops, conferences, interviews, patient
            stories, success stories, and professional discussions as those pages are finalized.
          </p>
        </div>
        <div className="explore-edu-event-grid">
          {eventItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="explore-edu-faq" id="faq" aria-labelledby="faq-title">
        <div className="explore-edu-faq-copy">
          <p className="explore-edu-kicker">Frequently Asked Questions</p>
          <h2 id="faq-title">Clear answers, careful language, and institutional credibility.</h2>
          <p>
            The FAQ is written for public education. It supports learning while avoiding diagnosis,
            treatment promises, or unsupported medical claims.
          </p>
          <div className="explore-edu-safety">
            <ShieldCheck size={22} />
            <span>Educational only. Health decisions should be made with qualified medical guidance.</span>
          </div>
        </div>
        <div className="explore-edu-faq-list">
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

      <section className="explore-edu-final" aria-label="Explore call to action">
        <div>
          <PlayCircle size={30} />
          <h2>Build the full learning ecosystem from here.</h2>
          <p>
            Detailed medicine pages, health articles, research paper pages, downloadable guides,
            multimedia lessons, and community features can now be added without disturbing the
            institutional structure.
          </p>
        </div>
        <Link to="/contact">
          Share content for this section <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

export default ExplorePage;
