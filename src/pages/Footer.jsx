import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
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
                <Link to="/favorites" className={styles.favoritesLink}>
                  View Favorites
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
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <FaLinkedin className={styles.icon} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaSquareInstagram className={styles.icon} aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Like our Facebook page"
            >
              <FaSquareFacebook className={styles.icon} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={styles.copyrightText}
        aria-label="Copyright information and contact email"
      >
        <p>&copy; 2026 Cocktails and Code</p>
        <address className={styles.contactEmail}>
          <a href="mailto:support@cocktailsandcode.com">
            support@cocktailsandcode.com
          </a>
        </address>
      </div>
    </footer>
  );
}
