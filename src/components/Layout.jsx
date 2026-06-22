import React, { useState } from "react";
import { Mail, Search, Send } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { navItems } from "../data/siteData.js";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header className={`site-header ${isHome ? "stitch-layout-header" : ""}`}>
        <NavLink className={`brand ${isHome ? "stitch-layout-brand" : ""}`} to="/" onClick={() => setMenuOpen(false)} aria-label="WorldHomeopathy.org home">
          <span className="header-emblem" aria-hidden="true">
            <span className="emblem-ring"></span>
            <span className="emblem-line line-a"></span>
            <span className="emblem-line line-b"></span>
            <span className="emblem-node node-a"></span>
            <span className="emblem-node node-b"></span>
            <span className="emblem-node node-c"></span>
          </span>
          <span>
            <strong>{isHome ? "Global Homeopathy Foundation" : "WorldHomeopathy.org"}</strong>
            <small>{isHome ? "Research • Education • Summit Hub" : "Global digital headquarters of homeopathy"}</small>
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
          {isHome ? (
            <>
              <Link className="stitch-nav-join" to="/research" onClick={() => setMenuOpen(false)}>
                Join Research
              </Link>
              <Link className="stitch-nav-donate" to="/contact" onClick={() => setMenuOpen(false)}>
                Donate
              </Link>
            </>
          ) : null}
          <button className="nav-search" type="button" aria-label="Search WorldHomeopathy.org">
            <Search size={21} />
          </button>
        </nav>
      </header>

      <Outlet />

      {isHome ? (
        <footer className="stitch-layout-footer">
          <div>
            <strong>Global Homeopathy Foundation</strong>
            <p>
              A worldwide platform for homeopathy education, research, summits,
              publications, and institutional collaboration.
            </p>
            <div className="stitch-footer-socials" aria-label="Social links placeholders">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <nav aria-label="Homepage footer links">
            <strong>Foundation</strong>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/summit">Summits</NavLink>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/media">Media</NavLink>
          </nav>

          <nav aria-label="Homepage resource links">
            <strong>Resources</strong>
            <NavLink to="/leaders">Directory</NavLink>
            <NavLink to="/media">Articles</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="mailto:info@worldhomeopathy.org">Enquiry</a>
          </nav>

          <form className="stitch-footer-updates">
            <label htmlFor="stitch-footer-email">Updates</label>
            <p>Join the newsletter for summit and research updates.</p>
            <div>
              <input id="stitch-footer-email" type="email" placeholder="Email Address" />
              <button type="button">Join</button>
            </div>
          </form>

          <p className="stitch-footer-copy">
            © 2026 Global Homeopathy Foundation. Educational information only.
          </p>
        </footer>
      ) : (
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
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="mailto:info@worldhomeopathy.org">Institutional Enquiry</a>
        </nav>

        <div className="footer-newsletter">
          <strong>Global Updates</strong>
          <p>Receive summit, research, media, and country chapter updates.</p>
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
      )}
    </>
  );
}

export default Layout;

