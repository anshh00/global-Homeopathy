import React, { useEffect, useState } from "react";
import { Mail, MapPin, Search, Send, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { navItems } from "../data/siteData.js";

const FORMSPREE_ENDPOINT = "";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [networkFormStatus, setNetworkFormStatus] = useState("");

  useEffect(() => {
    if (!joinModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setJoinModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [joinModalOpen]);

  const openJoinModal = () => {
    setMenuOpen(false);
    setNetworkFormStatus("");
    setJoinModalOpen(true);
  };

  const handleNetworkSubmit = (event) => {
    if (!FORMSPREE_ENDPOINT) {
      event.preventDefault();
      setNetworkFormStatus("Form is ready. Add the Formspree endpoint in Layout.jsx to receive messages.");
    }
  };

  return (
    <>
      <header className="site-header stitch-layout-header">
        <NavLink
          className="brand stitch-layout-brand"
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Global Homeopathy Foundation home"
        >
          <BrandMark compact />
          <span>
            <strong>Global Homeopathy Foundation</strong>
            <small>Research / Education / Summit Hub</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} id="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="nav-menu-item" key={item.path}>
              <NavLink to={item.path} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            </div>
          ))}
          <button className="stitch-nav-join" type="button" onClick={openJoinModal}>
            Join Network
          </button>
          <button className="nav-search" type="button" aria-label="Search Global Homeopathy Foundation">
            <Search size={21} />
          </button>
        </nav>
      </header>

      <Outlet />

      <footer className="stitch-layout-footer">
        <div className="footer-brand-block">
          <Link className="footer-brand-lockup" to="/" aria-label="Global Homeopathy Foundation home">
            <BrandMark compact />
            <span>
              <strong>Global Homeopathy Foundation</strong>
              <small>Research / Education / Summit Hub</small>
            </span>
          </Link>
          <p>
            A global platform for homeopathy education, research, summits,
            media, jobs, and professional collaboration.
          </p>
          <div className="stitch-footer-socials" aria-label="Social links">
            <span>in</span>
            <span>yt</span>
            <span>f</span>
          </div>
        </div>

        <nav aria-label="Footer platform links">
          <strong>Foundation</strong>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explore">Knowledge Hub</NavLink>
          <NavLink to="/leaders">Leadership</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <nav aria-label="Footer resource links">
          <strong>Resources</strong>
          <NavLink to="/summit">Summit Archive</NavLink>
          <NavLink to="/research">Research Center</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/media">Media Desk</NavLink>
        </nav>

        <div className="footer-contact-block">
          <strong>Connect</strong>
          <a href="mailto:info@globalhomeopathy.org">
            <Mail size={16} />
            info@globalhomeopathy.org
          </a>
          <span>
            <MapPin size={16} />
            Global digital platform
          </span>
          <NavLink to="/contact">Submit an update</NavLink>
        </div>

        <div className="stitch-footer-updates">
          <strong>Updates</strong>
          <p>Join the network for summit, research, media, and professional opportunity updates.</p>
          <div>
            <button type="button" onClick={openJoinModal}>
              Open Join Form
            </button>
          </div>
        </div>

        <p className="stitch-footer-copy">
          (c) 2026 Global Homeopathy Foundation. Educational information only.
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Editorial Policy</span>
        </p>
      </footer>

      {joinModalOpen ? (
        <div className="network-modal-shell" role="dialog" aria-modal="true" aria-labelledby="network-modal-title">
          <button className="network-modal-backdrop" type="button" aria-label="Close join form" onClick={() => setJoinModalOpen(false)} />
          <section className="network-modal-card">
            <button className="network-modal-close" type="button" aria-label="Close join form" onClick={() => setJoinModalOpen(false)}>
              <X size={20} />
            </button>
            <div className="network-modal-intro">
              <span>Join the network</span>
              <h2 id="network-modal-title">Connect with the global homeopathy community.</h2>
              <p>
                Share your details for collaboration, research updates, summit participation, media references, or
                professional opportunities.
              </p>
            </div>
            <form
              className="network-modal-form"
              action={FORMSPREE_ENDPOINT || undefined}
              method="POST"
              onSubmit={handleNetworkSubmit}
            >
              <label>
                Full name
                <input name="name" type="text" placeholder="Your full name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Country / region
                <input name="country" type="text" placeholder="Country or region" />
              </label>
              <label>
                Interest area
                <select name="interest" defaultValue="Research updates">
                  <option>Research updates</option>
                  <option>Summit participation</option>
                  <option>Media / publication reference</option>
                  <option>Professional opportunities</option>
                  <option>Institutional collaboration</option>
                </select>
              </label>
              <label className="network-modal-message">
                Message
                <textarea name="message" rows="4" placeholder="Tell us how you would like to connect." />
              </label>
              <input type="hidden" name="_subject" value="Global Homeopathy Foundation network inquiry" />
              <button type="submit">
                Send message
                <Send size={17} />
              </button>
              {networkFormStatus ? <p className="network-modal-status" role="status">{networkFormStatus}</p> : null}
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}

export default Layout;
