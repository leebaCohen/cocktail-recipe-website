import navstyles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

export default function Navbar() {
  return (
    <header className={navstyles.headerWrapper}>
      <nav className={navstyles.navbar} aria-label="Main Website Navigation">
        <Link to="/" className={navstyles.brandLink}>
          <img
            src={`${import.meta.env.BASE_URL}favicon-32x32.png`}
            alt="Cocktail Recipe Logo"
            width="32"
            height="32"
          />
          <span className={navstyles.pageTitle}>Cocktails and Code</span>
        </Link>

        <ul className={navstyles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? navstyles.activeLink : ""
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${navstyles.favoritesLink} ${isActive ? navstyles.activeLink : ""}`
              }
            >
              <span className={navstyles.linkContent}>
                <MdStarRate aria-hidden="true" />
                Favorites
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? navstyles.activeLink : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? navstyles.activeLink : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive ? navstyles.activeLink : ""
              }
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
