import React, { useState } from "react";
import { ArrowRight, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { countries } from "../data/siteData.js";

function DirectoryPage() {
  const [activeCountry, setActiveCountry] = useState(countries[0]);

  return (
    <main>
      <PageHero
        eyebrow="Country Directory"
        title="A world map for homeopathy organizations, events, institutions, and growth."
        text="Country-wise data for students, practitioners, journalists, and institutions, organized through a global directory view."
      >
        <div className="hero-list">
          <span>India</span>
          <span>Germany</span>
          <span>UK</span>
          <span>UAE</span>
          <span>Brazil</span>
          <span>USA</span>
        </div>
      </PageHero>

      <section className="section directory-layout">
        <div className="map-card">
          <div className="map-surface">
            {countries.map((country) => (
              <button
                key={country.name}
                className={country.name === activeCountry.name ? "map-dot active" : "map-dot"}
                style={country.position}
                type="button"
                onClick={() => setActiveCountry(country)}
                aria-label={`Show ${country.name}`}
              >
                <span></span>
              </button>
            ))}
          </div>
        </div>

        <article className="country-card">
          <MapPinned size={28} />
          <span>Selected country</span>
          <h2>{activeCountry.name}</h2>
          <p>{activeCountry.details}</p>
          <div className="tag-list">
            {activeCountry.sections.map((section) => (
              <span key={section}>{section}</span>
            ))}
          </div>
          <Link to="/contact">
            Share country data <ArrowRight size={16} />
          </Link>
        </article>
      </section>
    </main>
  );
}

export default DirectoryPage;
