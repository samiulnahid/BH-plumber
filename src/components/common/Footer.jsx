import { Link } from "react-router-dom";
import { email, phone, phoneLink } from "../../constants/site.js";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link className="brand brand-footer" to="/">
            <span className="brand-mark" aria-hidden="true">
              BH
            </span>
            <span className="brand-name">
              <strong>BH Plumber</strong>
              <small>LOCAL PLUMBING, DONE RIGHT</small>
            </span>
          </Link>
          <p>
            Straightforward plumbing support for homes and businesses in
            Melbourne and nearby suburbs.
          </p>
          <a
            className="footer-call"
            href={`tel:${phoneLink}`}
            aria-label={`Call BH Plumber on ${phone}`}
          >
            <Icon name="phone" /> {phone}
          </a>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className="footer-links">
            <li>
              <Link to="/about">About BH Plumber</Link>
            </li>
            <li>
              <Link to="/services">Plumbing services</Link>
            </li>
            <li>
              <Link to="/team">Our approach</Link>
            </li>
            <li>
              <Link to="/testimonials">Customer feedback</Link>
            </li>
            <li>
              <Link to="/booking">Request a quote</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="pin" />
              <span>Service area: Melbourne, Victoria, Australia</span>
            </li>
            <li>
              <Icon name="phone" />
              <a href={`tel:${phoneLink}`} aria-label={`Call BH Plumber on ${phone}`}>
                {phone}
              </a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={`mailto:${email}`} aria-label={`Email ${email}`}>
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>Copyright {new Date().getFullYear()} BH Plumber</span>
          <span>Local plumbing for Melbourne, VIC</span>
          <a
            className="footer-credit"
            href="https://byteheart.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developed by BH Team
          </a>
        </div>
      </div>
    </footer>
  );
}
