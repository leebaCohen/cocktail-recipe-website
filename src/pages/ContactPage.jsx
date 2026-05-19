import Navbar from "./navbar";
import styles from "./ContactPage.module.css";
import Footer from "./Footer.jsx";

export default function ContactPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <article className={styles.container}>
          <h1 className={styles.contactUsTitle}>Contact Us</h1>
          <h2 className={styles.subtitle}>Get in Touch</h2>
          <p className={styles.content}>
            Have questions or feedback? We'd love to hear from you! Fill out the
            form below and we'll get back to you as soon as possible.
          </p>
          <form className={styles.contactForm}>
            <div className={styles.formSection}>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className={styles.inputField}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className={styles.formSection}>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                className={styles.inputField}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className={styles.formSection}>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                className={styles.messageField}
                id="message"
                name="message"
              ></textarea>
            </div>
            <button className={styles.submitBtn} type="submit">
              Send Message
            </button>
          </form>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
