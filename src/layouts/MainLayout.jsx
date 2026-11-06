import { Link } from "react-router-dom";
import BackToTop from "../components/common/BackToTop.jsx";
import Footer from "../components/common/Footer.jsx";
import Header from "../components/common/Header.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import AppRoutes from "../routes/AppRoutes.jsx";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content"><AppRoutes /></main>
      <Footer />
      <BackToTop />
    </>
  );
}
