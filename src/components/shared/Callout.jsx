import { Link } from "react-router-dom";
import { phone, phoneLink } from "../../constants/site.js";
import Icon from "../common/Icon.jsx";

export default function Callout({ title = "Need a plumber in Melbourne?" }) {
  return (
    <section className="callout-section">
      <div className="container callout-card">
        <div>
          <span className="eyebrow eyebrow-light">LET'S TALK THROUGH IT</span>
          <h2>{title}</h2>
          <p>
            Call to discuss what is happening, or share a few details in a quote
            request.
          </p>
        </div>
        <div className="callout-actions">
          <a className="button button-white" href={`tel:${phoneLink}`}>
            <Icon name="phone" /> Call {phone}
          </a>
          <Link className="button button-outline-light" to="/booking">
            Request a quote <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
