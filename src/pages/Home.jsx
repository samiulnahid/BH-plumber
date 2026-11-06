import { Link } from "react-router-dom";
import { images, phone, phoneLink } from "../constants/site.js";
import { services } from "../constants/services.js";
import Seo from "../components/common/Seo.jsx";
import Callout from "../components/shared/Callout.jsx";
import CheckList from "../components/shared/CheckList.jsx";
import HeroSlider from "../components/shared/HeroSlider.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { ServicesGrid } from "../components/shared/ServiceCards.jsx";
import Icon from "../components/common/Icon.jsx";

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <HeroSlider />
      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <span className="intro-mark">BH</span>
          <p>
            Plumbing help for <strong>Melbourne homes and businesses</strong> —
            clear communication, practical advice and tidy work.
          </p>
          <Link className="text-link" to="/about">
            Meet BH Plumber <Icon name="arrow" />
          </Link>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="WHAT WE CAN HELP WITH"
              text="From small repairs to planned plumbing work, get in touch to talk through the job and your options."
              title="Plumbing services for everyday needs"
            />
          </Reveal>
          <ServicesGrid items={services.slice(0, 3)} />
          <div className="section-action">
            <Link className="button button-outline" to="/services">
              View all services <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-about">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <img
              alt="Plumbing professional preparing equipment for a repair"
              className="about-image-main"
              loading="lazy"
              src={images.plumber}
            />
            <div className="about-image-accent">
              <img
                alt="Modern bathroom fixtures"
                loading="lazy"
                src={images.bathroom}
              />
            </div>
            <div className="local-badge">
              <Icon name="pin" />
              <strong>Melbourne</strong>
              <span>Local service area</span>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <SectionHeading
              eyebrow="A LOCAL PLUMBING CONTACT"
              title="Straight answers. Sensible next steps."
              text="Plumbing problems can interrupt your day. BH Plumber keeps the conversation clear, explains what needs attention and helps you decide how to move forward."
            />
            <CheckList
              items={[
                "Residential repairs and ongoing maintenance",
                "Support for local businesses and properties",
                "A clear discussion before work gets underway",
              ]}
            />
            <Link className="button button-primary" to="/about">
              More about BH Plumber <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="service-band">
        <div className="container service-band-inner">
          <div>
            <span className="eyebrow eyebrow-light">SOMETHING NOT RIGHT?</span>
            <h2>Let’s talk about your plumbing issue.</h2>
            <p>
              Call to describe the problem or request a quote online. For urgent
              issues, tell us what is happening when you get in touch.
            </p>
          </div>
          <a className="button button-white" href={`tel:${phoneLink}`}>
            <Icon name="phone" /> Call {phone}
          </a>
        </div>
      </section>

      <section className="section section-services section-soft">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="MORE WAYS WE CAN HELP"
              text="Discuss the right service for your home, renovation or commercial property."
              title="From hot water to bathroom plumbing"
            />
          </Reveal>
          <ServicesGrid items={services.slice(3)} />
        </div>
      </section>

      <section className="section section-contact-promo">
        <div className="container contact-promo-grid">
          <Reveal>
            <span className="eyebrow">REQUEST A QUOTE</span>
            <h2>Tell us what’s going on.</h2>
            <p>
              Share a few details about the job and the suburb you’re in, and
              we’ll get back to you to talk through your options.
            </p>
            <Link className="button button-primary" to="/booking">
              Start a quote request <Icon name="arrow" />
            </Link>
          </Reveal>
          <Reveal className="promo-image">
            <img
              alt="Welcoming residential interior in the local area"
              loading="lazy"
              src={images.kitchen}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
