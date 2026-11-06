import { phone, phoneLink, email } from "../constants/site.js";
import Seo from "../components/common/Seo.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import RequestForm from "../components/shared/RequestForm.jsx";
import Icon from "../components/common/Icon.jsx";

export default function BookingPage() {
  return (
    <>
      <Seo path="/booking" />
      <PageHero
        current="Request a quote"
        eyebrow="PLUMBING ENQUIRY"
        title="Tell us a little about the job."
      />
      <section className="section">
        <div className="container booking-grid">
          <Reveal className="booking-copy">
            <span className="eyebrow">REQUEST A QUOTE</span>
            <h2>Start with the details you know.</h2>
            <p>
              Share the kind of plumbing help you are looking for, where the job
              is located and the best way to reach you. You can also call or
              email us directly if you’d prefer.
            </p>
            <div className="booking-contact">
              <a href={`tel:${phoneLink}`}>
                <span className="contact-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <small>Prefer to speak?</small>
                  <strong>{phone}</strong>
                </span>
              </a>
              <a href={`mailto:${email}`}>
                <span className="contact-icon">
                  <Icon name="mail" />
                </span>
                <span>
                  <small>Email BH Plumber</small>
                  <strong>{email}</strong>
                </span>
              </a>
            </div>
            <p className="small-print">
              Servicing Melbourne, Victoria, and nearby suburbs. Call to confirm
              whether your location is covered.
            </p>
          </Reveal>
          <Reveal className="form-card">
            <RequestForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
