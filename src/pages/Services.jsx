import { images } from "../constants/site.js";
import { services } from "../constants/services.js";
import Seo from "../components/common/Seo.jsx";
import Callout from "../components/shared/Callout.jsx";
import CheckList from "../components/shared/CheckList.jsx";
import PageHero from "../components/shared/PageHero.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { ServicesGrid } from "../components/shared/ServiceCards.jsx";

export default function ServicesPage() {
  const extraServices = [
    {
      title: "Emergency plumbing",
      description:
        "If a plumbing issue needs prompt attention, call to explain what has happened and discuss availability.",
      icon: "phone",
      image: images.plumber,
      alt: "Plumbing professional ready to discuss a repair",
    },
    {
      title: "Bathroom plumbing",
      description:
        "Repairs and fixture plumbing for bathrooms, including toilets, basins, taps and showers.",
      icon: "faucet",
      image: images.bathroom,
      alt: "Bathroom basin and shower fixtures",
    },
    {
      title: "Kitchen plumbing",
      description:
        "Help with kitchen taps, sinks, connections and plumbing for planned updates.",
      icon: "home",
      image: images.kitchen,
      alt: "Kitchen interior in a residential property",
    },
  ];
  const allServices = [...services, ...extraServices];

  return (
    <>
      <Seo path="/services" />
      <PageHero
        current="Services"
        eyebrow="HOMES & BUSINESSES"
        title="Plumbing services for Melbourne and nearby."
      />
      <section className="section section-services">
        <div className="container">
          <Reveal>
            <SectionHeading
              centered
              eyebrow="OUR SERVICES"
              text="Every property and plumbing issue is different. Get in touch with the details and we can talk through the type of help you need."
              title="Practical help, from repairs to upgrades"
            />
          </Reveal>
          <ServicesGrid items={allServices} />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container service-details">
          <Reveal>
            <SectionHeading
              eyebrow="RESIDENTIAL & COMMERCIAL"
              title="Small repair or planned work?"
              text="BH Plumber can discuss a range of plumbing needs at homes and local commercial properties."
            />
            <CheckList
              items={[
                "Blocked or slow drains",
                "Leaking pipes and visible water leaks",
                "Hot water system repairs and replacements",
                "Taps, toilets, sinks and other fixtures",
                "Bathroom, kitchen and laundry plumbing",
                "Routine plumbing maintenance",
              ]}
            />
          </Reveal>
          <Reveal className="service-detail-image">
            <img
              alt="Plumbing fixtures in a clean modern bathroom"
              loading="lazy"
              src={images.bathroom}
            />
          </Reveal>
        </div>
      </section>
      <Callout title="Not sure which service you need?" />
    </>
  );
}
