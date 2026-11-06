import { Link } from "react-router-dom";
import { phone, phoneLink } from "../constants/site.js";
import Seo from "../components/common/Seo.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import Icon from "../components/common/Icon.jsx";

export default function TestimonialsPage() {
  return (
    <>
      <Seo path="/testimonials" />
      <PageHero
        current="Customer feedback"
        eyebrow="CUSTOMER FEEDBACK"
        title="Honest feedback matters."
      />
      <section className="section">
        <div className="container feedback-content">
          <Reveal className="feedback-mark" aria-hidden="true">
            “
          </Reveal>
          <Reveal>
            <span className="eyebrow">A NOTE ON REVIEWS</span>
            <h2>We’d love to hear about your experience.</h2>
            <p>
              Customer feedback helps us keep improving. If BH Plumber has
              completed a job for you, we welcome your comments. If you’re
              thinking about getting in touch, we’re happy to answer any
              questions about our service.
            </p>
            <div className="feedback-actions">
              <Link className="button button-primary" to="/contact">
                Ask a question <Icon name="arrow" />
              </Link>
              <a className="button button-outline" href={`tel:${phoneLink}`}>
                <Icon name="phone" /> Call {phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="THINKING OF GETTING IN TOUCH?"
              text="A few helpful details can make the first conversation easier."
              title="What to tell us"
            />
          </Reveal>
          <div className="process-grid">
            {[
              {
                number: "01",
                title: "Where the job is",
                text: "Let us know the suburb and whether it is a home or business.",
              },
              {
                number: "02",
                title: "What you have noticed",
                text: "Describe the issue, when it started and anything that may help explain it.",
              },
              {
                number: "03",
                title: "How to reach you",
                text: "Call or email using the contact details provided on this website.",
              },
            ].map((item) => (
              <Reveal className="process-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
