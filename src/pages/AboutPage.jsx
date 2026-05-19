import Navbar from "./navbar";
import styles from "./AboutPage.module.css";
import { PiCheersLight } from "react-icons/pi";
import Footer from "./Footer.jsx";

export default function AboutPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.container}>
          <h1 className={styles.aboutUsTitle}>About Us</h1>
          <h2 className={styles.subtitle}>Welcome to Cocktails & Code</h2>
          <p className={styles.content}>
            We believe that making a great cocktail should be as enjoyable as
            drinking one. Whether you are a seasoned bartender or trying your
            very first recipe at home, our platform is designed to take the
            guesswork out of mixology.
          </p>
          <h2 className={styles.subtitle}>Our Story</h2>
          <p className={styles.content}>
            We started this website with a simple goal: to build a clean, fast,
            and intuitive space for discovering drink recipes. No endless blog
            stories, no cluttered pages — just beautiful visuals, clear
            ingredients, and straightforward instructions. From timeless
            classics like the perfect Margarita to creative modern twists, we
            source high-quality recipes to help you shake, stir, and pour with
            confidence.
          </p>
          <h2 className={styles.subtitle}>What we offer:</h2>
          <ul className={styles.whatWeOfferList}>
            <li>
              Curated Recipe Library: Fast, searchable access to dozens of
              cocktail recipes and variations.
            </li>
            <li>
              Step-by-Step Clarity: Easy-to-follow instructions with precise
              measurements for flawless results.
            </li>
            <li>
              Designed for Everyone: A streamlined, responsive interface that
              looks great on your phone right at your kitchen counter.
            </li>
          </ul>
          <div className={styles.cheersSubtitle}>
            <h2 className={styles.subtitle}>Cheers to making better drinks </h2>
            <PiCheersLight className={styles.cheersIcon} />
          </div>
          <p className={styles.content}>
            We are constantly expanding our collection and adding new features
            to enhance your home bartending experience. Grab a shaker, explore
            our recipes, and let's mix something incredible together.
          </p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
