import navstyles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={navstyles.navbar}>
      <ul className={navstyles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
