import { email, phone, phoneLink } from "../../constants/site.js";
import Icon from "./Icon.jsx";
import Navbar from "./Navbar.jsx";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar-inner">
            <span>
              <Icon name="pin" /> Service area: Melbourne, Victoria, Australia
            </span>
            <div className="topbar-links">
              <a href={`mailto:${email}`} aria-label={`Email ${email}`}>
                <Icon name="mail" /> {email}
              </a>
              <a href={`tel:${phoneLink}`} aria-label={`Phone: ${phone}`}>
                <Icon name="phone" /> {phone}
              </a>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}
