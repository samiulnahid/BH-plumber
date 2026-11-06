import { Link } from "react-router-dom";
import Seo from "../components/common/Seo.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Icon from "../components/common/Icon.jsx";

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404" />
      <PageHero
        current="Page not found"
        eyebrow="404 · PAGE NOT FOUND"
        title="Looks like this page has moved."
      />
      <section className="section not-found">
        <div className="container">
          <span className="not-found-code">404</span>
          <h2>Let’s get you back on track.</h2>
          <p>
            The page you are looking for is not here. Head home or get in touch
            with BH Plumber.
          </p>
          <div className="feedback-actions">
            <Link className="button button-primary" to="/">
              Back to home <Icon name="arrow" />
            </Link>
            <Link className="button button-outline" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
