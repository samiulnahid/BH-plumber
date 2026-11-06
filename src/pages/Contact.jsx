import { phone, phoneLink, email } from "../constants/site.js";
import Seo from "../components/common/Seo.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import RequestForm from "../components/shared/RequestForm.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import Icon from "../components/common/Icon.jsx";

export default function ContactPage() {
  return (
    <>
      <Seo path="/contact" />
      <PageHero
        current="Contact"
        eyebrow="GET IN TOUCH"
        title="Talk with BH Plumber."
      />
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-details">
            <SectionHeading
              eyebrow="CONTACT DETAILS"
              title="Let’s talk plumbing."
              text="Call or email BH Plumber to discuss a repair, maintenance visit or upcoming plumbing job."
            />
            <a className="contact-detail" href={`tel:${phoneLink}`}>
              <span className="contact-icon">
                <Icon name="phone" />
              </span>
              <span>
                <small>Phone</small>
                <strong>{phone}</strong>
              </span>
            </a>
            <a className="contact-detail" href={`mailto:${email}`}>
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <span>
                <small>Email</small>
                <strong>{email}</strong>
              </span>
            </a>
            <div className="contact-detail">
              <span className="contact-icon">
                <Icon name="pin" />
              </span>
              <span>
                <small>Based in</small>
                <strong>Melbourne, Victoria, Australia</strong>
              </span>
            </div>
            <p className="small-print">
              We service Melbourne and nearby suburbs. Let us know your suburb
              when you get in touch.
            </p>
          </Reveal>
          <Reveal className="form-card">
            <h2>Send an enquiry</h2>
            <p className="form-intro">
              Fill in your details and we’ll prepare an email to BH Plumber for
              you to send.
            </p>
            <RequestForm compact />
          </Reveal>
        </div>
      </section>
      <section className="location-section">
        <div className="container location-heading">
          <SectionHeading
            eyebrow="LOCAL SERVICE AREA"
            title="Melbourne and nearby suburbs"
            text="Service availability can vary by job. Call to confirm whether your location is covered."
          />
        </div>
        <div className="map-frame">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Melbourne%2C%20Victoria%2C%20Australia&t=&z=11&ie=UTF8&iwloc=&output=embed"
            title="Map showing Melbourne, Victoria, Australia"
          />
        </div>
      </section>
    </>
  );
}
