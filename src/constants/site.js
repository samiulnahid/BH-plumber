export const phone = "(03) 9123 4567";
export const phoneLink = "+61391234567";
export const email = "info@byteheart.com";
export const scrollBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

export const images = {
  hero: "/images/hero-pipework.jpg",
  plumber: "/images/plumber-at-work.jpg",
  bathroom: "/images/bathroom-fixtures.jpg",
  kitchen: "/images/residential-interior.jpg",
  tools: "/images/plumbing-tools.jpg",
  home: "/images/home-interior.jpg",
  pipes: "/images/pipe-repair.jpg",
};

export const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const pageMeta = {
  "/": {
    title: "BH Plumber | Plumbing in Melbourne",
    description: "Local plumbing support for homes and businesses in Melbourne, Victoria. Discuss repairs, maintenance or your next plumbing project with BH Plumber.",
  },
  "/about": {
    title: "About BH Plumber | Melbourne Plumber",
    description: "Learn about BH Plumber and our straightforward approach to residential and commercial plumbing in Melbourne and nearby suburbs.",
  },
  "/services": {
    title: "Plumbing Services | BH Plumber Melbourne",
    description: "Explore residential, commercial, emergency, drain, leak, hot water, kitchen and bathroom plumbing services from BH Plumber in Melbourne.",
  },
  "/booking": {
    title: "Request a Plumbing Quote | BH Plumber",
    description: "Tell BH Plumber about your plumbing job in Melbourne. Request a quote online or call to discuss the job.",
  },
  "/team": {
    title: "Our Approach | BH Plumber",
    description: "Meet the standards and practical values that guide BH Plumber's local plumbing work in Melbourne and surrounding suburbs.",
  },
  "/testimonials": {
    title: "Customer Feedback | BH Plumber",
    description: "Share your feedback with BH Plumber or get in touch to discuss a plumbing job in Melbourne.",
  },
  "/contact": {
    title: "Contact BH Plumber | Melbourne, Victoria",
    description: "Contact BH Plumber in Melbourne by phone, email or online enquiry. Find our local service area.",
  },
};
