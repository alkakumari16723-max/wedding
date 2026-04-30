import ContactForm from "./ContactForm";
import "../Styles/contact.css";
import bg from "../assets/contact-bg.jpg";

function Contact() {
  return (
    <div className="contact-page">

      {/* TOP SECTION (BG + RIGHT FORM) */}
         <div
        className="contact-top"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className="contact-overlay">

          {/* LEFT TEXT */}
          <div className="contact-text">
            <h1>Contact Us 📞</h1>
            <p>We would love to plan your wedding 💍</p>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box">
            <ContactForm />
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION (NORMAL) */}
      <div className="contact-bottom">

        <h3>Get in Touch</h3>

        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>📧 Email:</strong> info@weddingplanner.com</p>
        <p><strong>📍 Address:</strong> Jaipur, Rajasthan, India</p>

        <p><strong>🕒 Timing:</strong> Mon–Sat (10 AM – 7 PM)</p>

        <a
          href="https://wa.me/917009108705?text=Hello%2C%20I%20am%20interested%20in%20your%20wedding%20planning%20services.%20Please%20share%20details%20%F0%9F%92%8D"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>

        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q={location}&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;