import { Link } from "react-router-dom";
import { images } from "../constants/site.js";
import Seo from "../components/common/Seo.jsx";
import Callout from "../components/shared/Callout.jsx";
import CheckList from "../components/shared/CheckList.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import Icon from "../components/common/Icon.jsx";

export default function AboutPage() {
  return (
    <>
      <Seo path="/about" />
      <PageHero current="About" title="Local plumbing, built on clear communication." />
      <section className="section section-about">
        <div className="container about-grid">
          <Reveal className="about-visual about-visual-single">
            <img
              alt="Plumber working carefully on a household repair"
              className="about-image-main"
              loading="lazy"
              src={images.plumber}
            />
            <div className="local-badge">
              <Icon name="pin" />
              <strong>Melbourne</strong>
              <span>Local service area</span>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <SectionHeading
              eyebrow="ABOUT BH PLUMBER"
              title="A practical approach to plumbing."
              text="BH Plumber is focused on helping local customers understand their plumbing issue and the work involved. Whether it is a repair, routine maintenance or a new fixture, we aim to make the process easy to follow from the first conversation."
            />
            <p>
              Serving Melbourne, Victoria, we welcome enquiries from nearby
              suburbs. Tell us where the job is and what you have noticed, and
              we can discuss whether it is within our service area.
            </p>
            <CheckList
              items={[
                "Residential plumbing and maintenance",
                "Commercial plumbing enquiries",
                "Repairs, replacements and planned work",
              ]}
            />
            <Link className="button button-primary" to="/services">
              Explore our services <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="HOW WE WORK"
              text="A straightforward process helps you know what to expect before a job begins."
              title="No guesswork about the next step"
            />
          </Reveal>
          <div className="process-grid">
            {[
              {
                number: "01",
                title: "Tell us what’s happening",
                text: "Call or describe the issue in a quote request, including the suburb and any useful details.",
              },
              {
                number: "02",
                title: "Talk through the job",
                text: "We’ll discuss the problem, access and the kind of plumbing support you are looking for.",
              },
              {
                number: "03",
                title: "Agree on the next step",
                text: "Before work proceeds, make sure the proposed work and any relevant details are clear.",
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
      <Callout title="Have a plumbing job in mind?" />
    </>
  );
}
