import { Route, Routes } from "react-router-dom";
import About from "../pages/About.jsx";
import Booking from "../pages/Booking.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Services from "../pages/Services.jsx";
import Team from "../pages/Team.jsx";
import Testimonials from "../pages/Testimonials.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Services />} path="/services" />
      <Route element={<Booking />} path="/booking" />
      <Route element={<Team />} path="/team" />
      <Route element={<Testimonials />} path="/testimonials" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
