import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../constants/site.js";
import Icon from "./Icon.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const moreActive = ["/booking", "/team", "/testimonials"].includes(pathname);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="container main-nav" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="BH Plumber home">
          <span className="brand-mark" aria-hidden="true">
            BH
          </span>
          <span className="brand-name">
            <strong>BH Plumber</strong>
            <small>LOCAL PLUMBING, DONE RIGHT</small>
          </span>
        </Link>
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <div
          className={`nav-content${menuOpen ? " nav-content-open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                end={item.end}
                key={item.to}
                onClick={() => setMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <div className={`nav-dropdown${moreActive ? " nav-dropdown-active" : ""}`}>
              <span className="nav-dropdown-label">
                More <Icon className="nav-dropdown-chevron" name="chevron" />
              </span>
              <div className="nav-dropdown-menu">
                <NavLink onClick={() => setMenuOpen(false)} to="/booking">
                  Request a quote
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/team">
                  Our approach
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/testimonials">
                  Customer feedback
                </NavLink>
              </div>
            </div>
          </div>
          <Link
            className="button button-primary nav-cta"
            onClick={() => setMenuOpen(false)}
            to="/booking"
          >
            Request a quote <Icon name="arrow" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
