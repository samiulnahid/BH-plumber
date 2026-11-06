import { useEffect, useState } from "react";
import { scrollBehavior } from "../../constants/site.js";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;
  return (
    <button
      aria-label="Back to top"
      className="back-to-top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: scrollBehavior() })
      }
      type="button"
    >
      ↑
    </button>
  );
}
