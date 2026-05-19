import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.infoContainer}>
        <div className={styles.helpfulLinks}>
          <h3>Helpful links</h3>
          <nav aria-label="footer navigation">
            <ul className={styles.navLinks}>
              <li>
                <Link to="/">Browse Cocktails</Link>
              </li>
              <li>
                <Link to="/favorites">
                  <div className={styles.favoritesLink}>View Favorites</div>
                </Link>
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
        </div>
        <div>
          <h3>Get to know us better</h3>
          <div className={styles.socialLinks}>
            <p>
              <FaLinkedin className={styles.icon} />
            </p>
            <p>
              <FaSquareInstagram className={styles.icon} />
            </p>
            <p>
              <FaSquareFacebook className={styles.icon} />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.copyrightText}>
        <p>&copy; 2026 Cocktails and Code</p>
        <p>support@cocktailsandcode.com</p>
      </div>
    </div>
  );
}
