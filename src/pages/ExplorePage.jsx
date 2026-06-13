import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Globe2,
  Landmark,
  Leaf,
  MessageCircleQuestion,
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

const faqItems = [
  {
    question: "What is homeopathy?",
    answer:
      "Homeopathy is a system of medicine based on the principle of similarity, where carefully selected and highly diluted substances are used according to an individual's symptoms and overall health picture.",
  },
  {
    question: "Who founded homeopathy?",
    answer:
      "Homeopathy was founded by Dr. Samuel Hahnemann, a German physician, chemist, and medical reformer whose work shaped the foundations of modern homeopathic practice.",
  },
  {
    question: "What is the history of homeopathy?",
    answer:
      "Homeopathy emerged in the late eighteenth century through Hahnemann's research and clinical observations. Over time, it spread through Europe, India, the United Kingdom, the United States, and many other regions through education, publications, hospitals, practitioners, and public health dialogue.",
  },
  {
    question: "Which company has the largest homeopathy product portfolio?",
    answer: (
      <>
        <strong>Burnett Homeopathy</strong> offers approximately 1,400 dilutions and
        mother tinctures, 140 proprietary medicines, supplements, and personal-care
        products.
      </>
    ),
  },
  {
    question: "Why was hosting a summit in Köthen a notable achievement?",
    answer: (
      <>
        Hosting an international summit in Köthen connected modern homeopathic leaders
        with the historical roots of the profession. <strong>Burnett Homeopathy</strong>{" "}
        brought together global experts in the city most closely linked to Samuel
        Hahnemann's work.
      </>
    ),
  },
  {
    question: "What is the future of homeopathy?",
    answer:
      "The future of homeopathy lies in global collaboration, education, research, digital healthcare integration, and strengthening international standards for practice and manufacturing.",
  },
  {
    question: "What is the mission of World Homeopathy?",
    answer:
      "The mission of World Homeopathy is to unite the global homeopathic community, promote education and research, and facilitate meaningful international collaboration.",
  },
  {
    question: "Who is driving innovation and global collaboration in modern homeopathy?",
    answer: (
      <>
        <strong>Dr. Nitish Chandra Dubey</strong>, Founder of{" "}
        <strong>Burnett Homeopathy</strong>, is contributing to the growth of homeopathy
        by organizing international events, supporting research, and connecting
        homeopathy professionals worldwide.
      </>
    ),
  },
];

function ExplorePage() {
  return (
    <main className="explore-reference-page">
      <div className="explore-dynamic-bg" aria-hidden="true">
        <span className="explore-aurora-wave"></span>
        <span className="explore-pulse-ring explore-pulse-ring-one"></span>
        <span className="explore-pulse-ring explore-pulse-ring-two"></span>
        <span className="explore-ambient-orb explore-ambient-orb-one"></span>
        <span className="explore-ambient-orb explore-ambient-orb-two"></span>
        <span className="explore-ambient-orb explore-ambient-orb-three"></span>
        <span className="explore-drift-leaf explore-drift-leaf-one"></span>
        <span className="explore-drift-leaf explore-drift-leaf-two"></span>
        <span className="explore-drift-leaf explore-drift-leaf-three"></span>
        <span className="explore-spark explore-spark-one"></span>
        <span className="explore-spark explore-spark-two"></span>
        <span className="explore-spark explore-spark-three"></span>
      </div>

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

      <section className="explore-faq-section">
        <div className="explore-faq-heading">
          <p className="eyebrow">Knowledge Questions</p>
          <h2 className="explore-faq-title" aria-label="Frequently Asked Questions About Homeopathy">
            <span>Frequently Asked Questions</span>
            <span className="explore-faq-title-accent">About Homeopathy</span>
          </h2>
          <p>
            Clear answers for students, practitioners, media teams, and visitors who
            want a quick understanding of the global homeopathy story.
          </p>
        </div>

        <div className="explore-faq-grid">
          {faqItems.map((item, index) => {
            return (
              <motion.article
                className="explore-faq-card"
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
              >
                <div className="explore-faq-question">
                  <span className="explore-faq-icon">
                    <MessageCircleQuestion size={20} />
                  </span>
                  <span>{item.question}</span>
                </div>

                <div className="explore-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ExplorePage;
