import { Link } from "react-router-dom";
import { services } from "../../constants/services.js";
import Icon from "../common/Icon.jsx";
import Reveal from "./Reveal.jsx";

export function ServiceCard({ service }) {
  return (
    <Reveal className="service-card-wrap">
      <article className="service-card">
        <Link
          aria-label={`Learn about ${service.title}`}
          className="service-image-link"
          to="/services"
        >
          <img
            alt={service.alt}
            className="service-image"
            loading="lazy"
            src={service.image}
          />
        </Link>
        <div className="service-card-content">
          <span className="service-icon">
            <Icon name={service.icon} />
          </span>
          <h3>
            <Link to="/services">{service.title}</Link>
          </h3>
          <p>{service.description}</p>
          <Link className="text-link" to="/services">
            Explore service <Icon name="arrow" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function ServicesGrid({ items = services }) {
  return (
    <div className="service-grid">
      {items.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
