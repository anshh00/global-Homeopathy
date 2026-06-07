import React from "react";
import { Mail, Send } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { events } from "../data/siteData.js";

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact & participation"
        title="Join the global homeopathy movement."
        text="A direct participation channel for delegates, institutions, media partners, country chapters, researchers, speakers, and summit collaborators."
      >
        <div className="hero-list">
          <span>Become a Delegate</span>
          <span>Become a Partner</span>
          <span>Contact Organizers</span>
        </div>
      </PageHero>

      <section className="section events-contact">
        <div>
          <p className="eyebrow">Events calendar</p>
          <h2>Upcoming global activities can live here.</h2>
          <div className="event-list">
            {events.map((event) => (
              <span key={event}>{event}</span>
            ))}
          </div>
        </div>
        <div className="contact-card">
          <Mail size={28} />
          <p className="eyebrow">Contact</p>
          <h2>Invite collaboration through one clear channel.</h2>
          <p>
            Use this for chapter interest, media enquiries, summit participation, research submissions,
            institutional partnerships, and speaker proposals.
          </p>
          <a className="button primary" href="mailto:info@worldhomeopathy.org">
            <Send size={18} /> Send enquiry
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
