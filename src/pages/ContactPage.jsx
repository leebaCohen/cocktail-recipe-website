import Navbar from "./navbar";
export default function ContactPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Contact Us</h1>
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </>
  );
}
