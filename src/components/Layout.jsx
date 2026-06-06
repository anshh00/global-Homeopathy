import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { navItems } from "../data/siteData.js";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="WorldHomeopathy.org home">
          <BrandMark compact />
          <span>
            <strong>WorldHomeopathy.org</strong>
            <small>Global digital headquarters of homeopathy</small>
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
            <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer premium-footer">
        <div className="footer-brand">
          <BrandMark />
          <strong>WorldHomeopathy.org</strong>
          <p>Independent global platform for homeopathy knowledge, summits, research, leaders, media, and country-wise resources.</p>
        </div>

        <nav aria-label="Footer platform links">
          <strong>Platform</strong>
          {navItems.slice(1, 5).map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <nav aria-label="Footer community links">
          <strong>Community</strong>
          <NavLink to="/directory">World Map</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="mailto:info@worldhomeopathy.org">Institutional Enquiry</a>
        </nav>

        <div className="footer-newsletter">
          <strong>Global Updates</strong>
          <p>Receive future summit, research, media, and country chapter updates.</p>
          <div className="newsletter-control">
            <Mail size={17} />
            <span>newsletter@worldhomeopathy.org</span>
            <Send size={17} />
          </div>
        </div>

        <p className="footer-disclaimer">
          Educational information only. Please consult a qualified healthcare professional for medical care.
        </p>
      </footer>
    </>
  );
}

export default Layout;
