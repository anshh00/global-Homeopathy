import React, { useState } from "react";
import { ChevronDown, Mail, MapPin, Search } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
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
          {navItems.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;

            return (
              <div className={hasChildren ? "nav-menu-item has-submenu" : "nav-menu-item"} key={item.path}>
                <NavLink
                  className={hasChildren ? "nav-parent-link" : undefined}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  aria-haspopup={hasChildren ? "true" : undefined}
                >
                  {item.label}
                  {hasChildren ? <ChevronDown className="nav-caret" size={14} aria-hidden="true" /> : null}
                </NavLink>

                {hasChildren ? (
                  <div className="nav-dropdown" aria-label={`${item.label} sections`}>
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path} onClick={() => setMenuOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Link className="stitch-nav-join" to="/contact" onClick={() => setMenuOpen(false)}>
            Join Network
          </Link>
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

        <form className="stitch-footer-updates">
          <label htmlFor="stitch-footer-email">Updates</label>
          <p>Join the newsletter for summit and research updates.</p>
          <div>
            <input id="stitch-footer-email" type="email" placeholder="Email Address" />
            <button type="button">Join</button>
          </div>
        </form>

        <p className="stitch-footer-copy">
          (c) 2026 Global Homeopathy Foundation. Educational information only.
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Editorial Policy</span>
        </p>
      </footer>
    </>
  );
}

export default Layout;
