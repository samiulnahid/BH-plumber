import { Link } from "react-router-dom";
import { images } from "../../constants/site.js";

export default function PageHero({ eyebrow = "BH PLUMBER", title, current }) {
  return (
    <section className="page-hero">
      <img
        alt=""
        className="page-hero-image"
        fetchPriority="high"
        src={images.hero}
      />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </nav>
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
