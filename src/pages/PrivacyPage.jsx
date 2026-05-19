import Navbar from "./navbar";
import styles from "./PrivacyPage.module.css";
import Footer from "./Footer.jsx";

export default function PrivacyPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <article className={styles.container}>
          <h1 className={styles.policyTitle}>Privacy Policy</h1>
          <h2 className={styles.subtitle}>Your Privacy is Important to Us</h2>
          <p className={styles.content}>
            At Cocktails & Code, we are committed to protecting your personal
            information and your right to privacy. If you have any questions or
            concerns about our privacy policy, please feel free to contact us.
          </p>
          <h2 className={styles.subtitle}>Information We Collect</h2>
          <p className={styles.content}>
            We may collect the following types of information from you:
          </p>
          <ul className={styles.infoList}>
            <li>
              Personal Information: This includes your name, email address, and
              other contact details.
            </li>
            <li>
              Usage Information: This includes information about how you
              interact with our website, such as the pages you visit and the
              features you use.
            </li>
          </ul>
          <h2 className={styles.subtitle}>How We Use Your Information</h2>
          <p className={styles.content}>
            We use the information we collect from you to:
          </p>
          <ul className={styles.infoList}>
            <li>Provide and improve our services.</li>
            <li>Communicate with you about your account or our services.</li>
            <li>Personalize your experience on our website.</li>
          </ul>
          <h2 className={styles.subtitle}>Data Security</h2>
          <p className={styles.content}>
            We take the security of your personal information seriously and
            implement appropriate technical and organizational measures to
            protect it from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <h2 className={styles.subtitle}>Third-Party Services</h2>
          <p className={styles.content}>
            We may use third-party services to help us operate our website and
            provide our services. These third-party services may have access to
            your personal information, but they are only allowed to use it to
            perform specific tasks on our behalf and are required to protect it.
          </p>
          <h2 className={styles.subtitle}>Your Rights</h2>
          <p className={styles.content}>
            You have the right to access, correct, or delete your personal
            information. You can also object to the processing of your personal
            information or request that we restrict the processing of your
            personal information. To exercise these rights, please contact us
            using the contact information provided on our website.
          </p>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
