import navstyles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className={navstyles.navbar}>
      <Link to="/">
        <p className={navstyles.pageTitle}>
          <img
            src={`${import.meta.env.BASE_URL}favicon-32x32.png`}
            alt="Cocktail Recipe Logo"
            width="32"
            height="32"
          />
          Cocktails and Code
        </p>
      </Link>
      <ul className={navstyles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? navstyles.activeLink : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? navstyles.activeLink : "")}
          >
            <div className={navstyles.favoritesLink}>
              <MdStarRate aria-hidden="true" />
              Favorites
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? navstyles.activeLink : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? navstyles.activeLink : "")}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) => (isActive ? navstyles.activeLink : "")}
          >
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
