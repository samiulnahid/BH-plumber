import { useState } from "react";
import { Link } from "react-router-dom";
import { images, phone, phoneLink } from "../../constants/site.js";
import Icon from "../common/Icon.jsx";

export default function HeroSlider() {
  const slides = [
    {
      eyebrow: "LOCAL PLUMBING · MELBOURNE, VIC",
      title: "Good plumbing starts with a clear conversation.",
      description:
        "From a dripping tap to a planned bathroom update, BH Plumber is here to help you work out the next step.",
      image: images.hero,
      imageAlt: "Plumbing professional working with equipment",
    },
    {
      eyebrow: "HOMES & LOCAL BUSINESSES",
      title: "Help with the plumbing jobs that keep life moving.",
      description:
        "Discuss a repair, maintenance visit or plumbing project for your home or business in Melbourne and nearby suburbs.",
      image: images.plumber,
      imageAlt: "Tradesperson carrying out a plumbing job",
    },
  ];
  const [active, setActive] = useState(0);

  function moveSlide(direction) {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }

  const slide = slides[active];

  return (
    <section aria-label="Welcome to BH Plumber" className="hero">
      <img
        alt={slide.imageAlt}
        className="hero-image"
        fetchPriority="high"
        key={slide.image}
        src={slide.image}
      />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-copy" key={slide.title}>
          <span className="eyebrow eyebrow-light">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/services">
              Explore our services <Icon name="arrow" />
            </Link>
            <a className="button button-outline-light" href={`tel:${phoneLink}`}>
              <Icon name="phone" /> Call {phone}
            </a>
          </div>
        </div>
        <div className="hero-controls" aria-label="Choose a hero slide">
          <button
            aria-label="Previous slide"
            className="hero-arrow"
            onClick={() => moveSlide(-1)}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          {slides.map((item, index) => (
            <button
              aria-current={active === index ? "true" : undefined}
              aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
              className={`hero-dot${active === index ? " hero-dot-active" : ""}`}
              key={item.title}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
          <button
            aria-label="Next slide"
            className="hero-arrow"
            onClick={() => moveSlide(1)}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <a className="hero-contact-card" href={`tel:${phoneLink}`}>
        <span className="hero-contact-icon">
          <Icon name="phone" />
        </span>
        <span>
          <small>Talk to a local plumber</small>
          <strong>{phone}</strong>
        </span>
      </a>
    </section>
  );
}
