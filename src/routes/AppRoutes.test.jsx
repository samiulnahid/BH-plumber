import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App.jsx";

describe("application routes", () => {
  it.each([
    ["/", "Plumbing services for everyday needs"],
    ["/about", "Local plumbing, built on clear communication."],
    ["/services", "Plumbing services for Melbourne and nearby."],
    ["/booking", "Tell us a little about the job."],
    ["/team", "Good work begins with listening."],
    ["/testimonials", "Honest feedback matters."],
    ["/contact", "Talk with BH Plumber."],
    ["/not-a-route", "Looks like this page has moved."],
  ])("renders the expected page for %s", (path, expectedContent) => {
    const markup = renderToStaticMarkup(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );

    expect(markup).toContain(expectedContent);
  });
});
