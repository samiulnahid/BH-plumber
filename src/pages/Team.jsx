import { Link } from "react-router-dom";
import { images } from "../constants/site.js";
import Seo from "../components/common/Seo.jsx";
import Callout from "../components/shared/Callout.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import Icon from "../components/common/Icon.jsx";

export default function TeamPage() {
  const principles = [
    {
      icon: "home",
      title: "Respect for your property",
      text: "We treat access, preparation and care around your home or workplace as part of the job.",
    },
    {
      icon: "drain",
      title: "Practical problem-solving",
      text: "We focus on understanding the issue and discussing sensible ways to address it.",
    },
    {
      icon: "mail",
      title: "Clear communication",
      text: "You should be able to understand the work being discussed and ask questions along the way.",
    },
  ];

  return (
    <>
      <Seo path="/team" />
      <PageHero
        current="Our approach"
        eyebrow="A PEOPLE-FIRST SERVICE"
        title="Good work begins with listening."
      />
      <section className="section section-about">
        <div className="container about-grid">
          <Reveal className="about-visual about-visual-single">
            <img
              alt="Tradesperson focused on a hands-on repair"
              className="about-image-main"
              loading="lazy"
              src={images.pipes}
            />
            <div className="local-badge">
              <Icon name="pin" />
              <strong>Melbourne</strong>
              <span>Local service area</span>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <SectionHeading
              eyebrow="HOW WE APPROACH THE WORK"
              title="Straightforward service, without the guesswork."
              text="Plumbing work happens in the places you live and work. BH Plumber values a respectful visit, clear explanations and an agreed understanding of the job."
            />
            <p>
              Whether it’s a quick repair or a larger job, we take the time to
              understand what you need. For availability, service coverage or
              questions about a specific job, please call or email us directly.
            </p>
            <Link className="button button-primary" to="/contact">
              Contact BH Plumber <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="WHAT YOU CAN EXPECT"
              title="A considerate, practical approach"
            />
          </Reveal>
          <div className="principle-grid">
            {principles.map((item) => (
              <Reveal className="principle-card" key={item.title}>
                <span className="service-icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Callout title="Have a plumbing question?" />
    </>
  );
}
