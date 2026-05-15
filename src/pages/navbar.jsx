import navstyles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={navstyles.navbar}>
      <Link to="/">
        <h2 className={navstyles.pageTitle}>
          <img
            src={`${import.meta.env.BASE_URL}favicon-32x32.png`}
            alt="Cocktail Recipe Logo"
            width="32"
            height="32"
          />
          Cocktail Recipes
        </h2>
      </Link>
      <ul className={navstyles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}
