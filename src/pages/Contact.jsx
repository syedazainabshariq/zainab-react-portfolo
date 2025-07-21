import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Let's connect — I’d love to hear from you!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
