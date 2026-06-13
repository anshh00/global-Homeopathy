import React from "react";
import {
  BookOpen,
  CalendarDays,
  Globe2,
  Landmark,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

const exploreTiles = [
  {
    icon: Landmark,
    title: "History",
    text: "Explore the historical roots and evolution of homeopathy across generations.",
  },
  {
    icon: Leaf,
    title: "Principles",
    text: "Understand the core principles and philosophy that shape homeopathic practice.",
  },
  {
    icon: CalendarDays,
    title: "World Homeopathy Day",
    text: "Learn about its significance, outreach, and global celebrations.",
  },
  {
    icon: Globe2,
    title: "Global Context",
    text: "Discover homeopathy's role across cultures, systems, and modern healthcare dialogue.",
  },
];

const learningPathway = [
  {
    icon: Landmark,
    title: "Historical Foundation",
    text: "Understand how homeopathy began and evolved over time.",
  },
  {
    icon: Leaf,
    title: "Core Principles",
    text: "Learn the fundamental principles that make homeopathy unique.",
  },
  {
    icon: CalendarDays,
    title: "Global Observance",
    text: "Celebrate World Homeopathy Day and its global impact.",
  },
  {
    icon: Globe2,
    title: "Modern Relevance",
    text: "Explore homeopathy's role in contemporary healthcare.",
  },
];

const trustCards = [
  {
    icon: Leaf,
    title: "Evidence-Informed",
    text: "Research-backed insights and updates from the global homeopathy community.",
  },
  {
    icon: Users,
    title: "For Everyone",
    text: "Resources for learners, professionals, and curious minds.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Knowledge",
    text: "Curated content from reliable sources and expert contributors.",
  },
  {
    icon: Globe2,
    title: "Global Community",
    text: "Connecting people, ideas, and practices worldwide.",
  },
];

function ExplorePage() {
  return (
    <main className="explore-reference-page">
      <section className="explore-reference-hero">
        <div className="explore-reference-leaves explore-reference-leaves-left" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="explore-reference-leaves explore-reference-leaves-right" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="explore-reference-copy">
          <p className="eyebrow">Explore Homeopathy</p>
          <h1>The knowledge hub at the heart of global homeopathy.</h1>
          <p>
            Explore the rich heritage, core principles, global relevance, and the pioneering
            vision that continues to inspire natural healthcare around the world.
          </p>

          <div className="explore-reference-divider" aria-hidden="true">
            <span></span>
            <Leaf size={18} />
            <span></span>
          </div>

          <div className="explore-reference-note">
            <span className="explore-reference-note-icon">
              <BookOpen size={25} />
            </span>
            <p>
              A structured learning area for beginners, students, doctors, researchers,
              journalists, and the public.
            </p>
          </div>
        </div>

        <div className="explore-reference-visual">
          <div className="explore-reference-photo">
            <img
              src="/images/explore-remedy-clean.png"
              alt="Homeopathic remedy bottle, flowers, and pellets"
            />
          </div>

          <div className="explore-reference-topic-grid">
            {exploreTiles.map((item) => {
              const Icon = item.icon;
              return (
                <article className="explore-reference-topic-card" key={item.title}>
                  <span className="explore-reference-topic-icon">
                    <Icon size={30} />
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="explore-reference-pathway">
        <div className="explore-reference-pathway-heading">
          <p className="eyebrow">Learning Pathway</p>
          <div className="explore-reference-pathway-divider" aria-hidden="true">
            <span></span>
            <Leaf size={16} />
            <span></span>
          </div>
          <h2>A structured path to deepen your understanding.</h2>
        </div>

        <div className="explore-reference-pathway-track">
          {learningPathway.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="explore-reference-step" key={item.title}>
                <div className="explore-reference-step-top">
                  <span className="explore-reference-step-icon">
                    <Icon size={28} />
                  </span>
                  {index < learningPathway.length - 1 ? (
                    <span className="explore-reference-step-line" aria-hidden="true"></span>
                  ) : null}
                </div>
                <strong>
                  {index + 1}. {item.title}
                </strong>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="explore-reference-trust-grid">
        {trustCards.map((item) => {
          const Icon = item.icon;
          return (
            <article className="explore-reference-trust-card" key={item.title}>
              <span className="explore-reference-trust-icon">
                <Icon size={34} />
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default ExplorePage;
