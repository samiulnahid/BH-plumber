import { useEffect } from "react";
import { pageMeta } from "../../constants/site.js";

export default function Seo({ path }) {
  useEffect(() => {
    const meta = pageMeta[path] || {
      title: "Page not found | BH Plumber",
      description:
        "The page you are looking for could not be found. Return to BH Plumber for local plumbing information in Melbourne.",
    };
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
  }, [path]);

  return null;
}
