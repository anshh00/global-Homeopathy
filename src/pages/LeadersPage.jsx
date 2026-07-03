import React from "react";
import { ArrowRight, Award, Globe2, Heart, Network, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { leaders } from "../data/siteData.js";

const leaderByName = new Map(leaders.map((leader) => [leader.name, leader]));

const councilLeaders = [
  {
    name: "Dr. Nitish Chandra Dubey",
    role: "Chairman",
    subtitle: "Chairman, Burnett Homeopathy",
    text: "Modern contributor positioned through summit leadership, research initiatives, public outreach, and Burnett Homeopathy's global activity.",
    image: "/images/dr-nitish-podium.jpg",
    source: leaderByName.get("Dr. Nitish Chandra Dubey")?.source,
  },
  {
    name: "Samuel Hahnemann",
    role: "Founder of Homeopathy",
    subtitle: "Founder of Homeopathy",
    text: "German physician and founder of homeopathy, known for the principle of like cures like and works such as Organon of the Healing Art.",
    image: leaderByName.get("Samuel Hahnemann")?.image,
    source: leaderByName.get("Samuel Hahnemann")?.source,
  },
  {
    name: "George Vithoulkas",
    role: "Classical Educator",
    subtitle: "Classical Homeopathy Educator",
    text: "Greek teacher, author, and classical homeopathy figure associated with the International Academy of Classical Homeopathy.",
    image: leaderByName.get("George Vithoulkas")?.image,
    source: leaderByName.get("George Vithoulkas")?.source,
  },
  {
    name: "Rajan Sankaran",
    role: "Author & Researcher",
    subtitle: "Doctor, Teacher & Author",
    text: "Mumbai-based homeopathic practitioner, researcher, teacher, and author with decades of international teaching and writing.",
    image: leaderByName.get("Rajan Sankaran")?.image,
    source: leaderByName.get("Rajan Sankaran")?.source,
  },
  {
    name: "Farokh Master",
    role: "Senior Physician",
    subtitle: "Senior Physician & International Teacher",
    text: "Senior homeopathic physician, academic, author, and international teacher connected with advanced clinical education.",
    image: leaderByName.get("Farokh Master")?.image,
    source: leaderByName.get("Farokh Master")?.source,
  },
  {
    name: "Jenny Goodall",
    role: "International Teacher",
    subtitle: "Homeopathic Educator",
    text: "Experienced homeopathic educator and practitioner with global teaching experience and dedication to spreading classical homeopathy.",
  },
  {
    name: "Louis Klein",
    role: "Research Advocate",
    subtitle: "Researcher & Advocate",
    text: "Strong advocate for homeopathy research and evidence-based exploration of homeopathic science.",
  },
  {
    name: "Lina Chery",
    role: "Global Collaborator",
    subtitle: "Global Homeopathy Collaborator",
    text: "Works toward building global partnerships and strengthening homeopathy's institutional presence across continents.",
  },
];

const stats = [
  { icon: Users, value: "25+", label: "Global Leaders" },
  { icon: Globe2, value: "12+", label: "Countries Represented" },
  { icon: Award, value: "100+", label: "Years of Combined Experience" },
  { icon: Heart, value: "1 Mission", label: "Uniting the world through Homeopathy" },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Upholding ethical practice and transparency",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Pursuing knowledge, research and best practices",
  },
  {
    icon: Network,
    title: "Collaboration",
    text: "Working together across borders and disciplines",
  },
  {
    icon: Globe2,
    title: "Impact",
    text: "Creating meaningful change in healthcare and communities",
  },
];

function LeaderPortrait({ leader }) {
  if (leader.image) {
    return <img src={leader.image} alt={leader.name} loading="lazy" />;
  }

  return (
    <div className="leaders-council-placeholder" aria-hidden="true">
      <span>{leader.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
    </div>
  );
}

function LeadersPage() {
  return (
    <main className="leaders-council-page">
      <section className="leaders-council-hero">
        <div className="leaders-council-shell leaders-council-hero-grid">
          <div className="leaders-council-hero-copy">
            <p className="leaders-council-kicker">Our Leaders</p>
            <h1>Guiding the Global Homeopathy Movement</h1>
            <p>
              Meet the visionary leaders, educators, and changemakers who are
              advancing homeopathy through research, education, and global
              collaboration.
            </p>
          </div>
          <div className="leaders-council-visual" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section className="leaders-council-stats leaders-council-shell" aria-label="Leadership statistics">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label}>
              <span>
                <Icon size={27} />
              </span>
              <div>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="leaders-council-section leaders-council-shell">
        <div className="leaders-council-heading">
          <h2>Global Leadership Council</h2>
          <p>
            Our leadership council represents a diverse group of experts and
            advocates, working together to promote the growth, recognition, and
            integration of homeopathy worldwide.
          </p>
        </div>

        <div className="leaders-card-grid">
          {councilLeaders.map((leader) => (
            <article className="leaders-council-card" key={leader.name}>
              <div className="leaders-council-photo">
                <LeaderPortrait leader={leader} />
              </div>
              <span>{leader.role}</span>
              <h3>{leader.name}</h3>
              <small>{leader.subtitle}</small>
              <p>{leader.text}</p>
              <a href={leader.source || "mailto:info@worldhomeopathy.org"} target={leader.source ? "_blank" : undefined} rel={leader.source ? "noreferrer" : undefined}>
                View Profile <ArrowRight size={13} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="leaders-principles leaders-council-shell" aria-label="Leadership principles">
        <div className="leaders-principles-intro">
          <h2>Our Leadership Principles</h2>
          <p>We are committed to these core values that guide every initiative and collaboration.</p>
          <Link to="/contact">Join Our Mission</Link>
        </div>
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <article key={principle.title}>
              <Icon size={27} />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          );
        })}
      </section>

      <section className="leaders-community-cta">
        <div className="leaders-council-shell">
          <div>
            <span>
              <Users size={34} />
            </span>
            <div>
              <h2>Be Part of the Global Homeopathy Community</h2>
              <p>Connect with experts, attend global summits, and contribute to the future of integrative healthcare.</p>
            </div>
          </div>
          <nav>
            <Link to="/summit">Explore Summits</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default LeadersPage;
