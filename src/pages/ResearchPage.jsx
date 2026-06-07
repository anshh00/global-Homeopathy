import React from "react";
import { ArrowRight, Upload } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { researchCategories } from "../data/siteData.js";

const samplePublications = [
  { title: "Evidence-Focused Homeopathy Summit Notes", author: "Research Desk", year: "2025", category: "Conference" },
  { title: "Case Documentation Framework", author: "Editorial Team", year: "2026", category: "Case Study" },
  { title: "Global Research Collaboration Map", author: "WorldHomeopathy.org", year: "2026", category: "Research Network" },
];

function ResearchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Research Center"
        title="Global Homeopathy Research Center"
        text="Advancing knowledge through research, innovation, publications, case documentation, academic collaboration, and international dialogue."
      >
        <div className="hero-list">
          <span>Explore Research</span>
          <span>Publications</span>
          <span>Collaboration</span>
        </div>
      </PageHero>

      <section className="section research-cards">
        {researchCategories.map((category) => {
          const Icon = category.icon;
          return (
            <article className="research-card" key={category.title}>
              <Icon size={28} />
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <div className="tag-list">
                {category.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Featured research</p>
          <h2>Burnett Evidence-Based Research Summit Goa 2025</h2>
        </div>
        <div className="rich-copy">
          <p>
            This can be presented as one featured research initiative inside a broader global research
            center. The page should keep the emphasis on academic dialogue, structured evidence, case
            documentation, publications, and collaboration.
          </p>
          <p>
            Detailed research content can connect with OxfordBurnettResearch.org while
            WorldHomeopathy.org remains the global overview platform.
          </p>
          <a
            className="inline-link"
            href="https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa"
            target="_blank"
            rel="noreferrer"
          >
            Read media coverage <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="section publications-section">
        <div className="section-heading">
          <p className="eyebrow">Research publications</p>
          <h2>A structured library for papers, journals, and case studies.</h2>
        </div>
        <div className="publication-table">
          {samplePublications.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.author}</span>
              <span>{item.year}</span>
              <span>{item.category}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section submit-panel">
        <div>
          <Upload size={32} />
          <h2>Research Collaboration</h2>
          <p>
            Researchers, institutions, and summit contributors can share papers, case studies,
            articles, conference notes, and collaboration proposals through an editorial review process.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ResearchPage;
