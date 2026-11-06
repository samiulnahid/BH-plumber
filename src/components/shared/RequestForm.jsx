import { useState } from "react";
import { email } from "../../constants/site.js";
import Icon from "../common/Icon.jsx";

export default function RequestForm({ compact = false }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const service = data.get("service");
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${service}`,
    ];
    const message = data.get("message");
    if (message) lines.push("", "Job details:", message);
    const subject = `Plumbing enquiry: ${service}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus(
      `Your email app should now open with your enquiry ready to send. If it doesn’t, please email us directly at ${email}.`,
    );
  }

  return (
    <form className={`request-form${compact ? " request-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name
          <input
            autoComplete="name"
            maxLength="100"
            name="name"
            placeholder="Your full name"
            required
          />
        </label>
        <label>
          Email address
          <input
            autoComplete="email"
            maxLength="254"
            name="email"
            placeholder="Your email address"
            required
            type="email"
          />
        </label>
        <label>
          Phone number
          <input
            autoComplete="tel"
            maxLength="30"
            name="phone"
            placeholder="04xx xxx xxx"
            required
            type="tel"
          />
        </label>
        <label>
          What do you need help with?
          <select defaultValue="" name="service" required>
            <option disabled value="">
              Choose a service
            </option>
            <option>Blocked drain</option>
            <option>Leak or pipe repair</option>
            <option>Hot water system</option>
            <option>Tap, toilet or fixture repair</option>
            <option>Bathroom or kitchen plumbing</option>
            <option>General maintenance</option>
            <option>Other plumbing enquiry</option>
          </select>
        </label>
        {!compact && (
          <label className="form-full">
            A few details about the job
            <textarea
              maxLength="1500"
              name="message"
              placeholder="Tell us what’s happening and the suburb where the job is located."
              required
              rows="5"
            />
          </label>
        )}
      </div>
      <button className="button button-primary form-submit" type="submit">
        Send enquiry <Icon name="arrow" />
      </button>
      <p className="form-note">
        Submitting opens your email app with your enquiry addressed to BH Plumber.
      </p>
      {status && (
        <p aria-live="polite" className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
