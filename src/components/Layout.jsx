import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navItems } from "../data/siteData.js";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header stitch-layout-header">
        <NavLink
          className="brand stitch-layout-brand"
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Global Homeopathy Foundation home"
        >
          <span className="header-emblem" aria-hidden="true">
            <span className="emblem-ring"></span>
            <span className="emblem-line line-a"></span>
            <span className="emblem-line line-b"></span>
            <span className="emblem-node node-a"></span>
            <span className="emblem-node node-b"></span>
            <span className="emblem-node node-c"></span>
          </span>
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
            <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link className="stitch-nav-join" to="/research" onClick={() => setMenuOpen(false)}>
            Join Research
          </Link>
          <button className="nav-search" type="button" aria-label="Search Global Homeopathy Foundation">
            <Search size={21} />
          </button>
        </nav>
      </header>

      <Outlet />

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

        <nav aria-label="Footer platform links">
          <strong>Foundation</strong>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/summit">Summits</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/media">Media</NavLink>
        </nav>

        <nav aria-label="Footer resource links">
          <strong>Resources</strong>
          <NavLink to="/leaders">Directory</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
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
    </>
  );
}

export default Layout;
