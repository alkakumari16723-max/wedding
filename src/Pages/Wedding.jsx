import "../Styles/wedding.css";

import heroImg from "../assets/weddingHero.jpg";
import wed1 from "../assets/wed1.jpg";
import wed2 from "../assets/wed2.jpg";
import wed3 from "../assets/wed3.jpg";
import wed4 from "../assets/wed4.jpg";

function Wedding() {
  return (
    <div className="wedding-page">

  
      <div className="wed-hero">
        <img src={heroImg} alt="Wedding" />
        <div className="overlay">
          <h1>Turning Your Dream Wedding Into Reality 💍</h1>
          <p>Elegant | Grand | Emotionally Beautiful Celebrations</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <h2>Your Big Day, Perfectly Crafted ✨</h2>
        <p>
          Your wedding is not just an event — it’s a once-in-a-lifetime
          celebration filled with emotions, traditions, and unforgettable
          moments.
        </p>
        <p>
          From the first ritual to the final farewell, we ensure every
          detail is handled with perfection so you can truly enjoy your day.
        </p>
      </section>

    
      <section className="services">
        <h2>Our Wedding Services 💐</h2>

        <div className="service-cards">

          <div className="card">
            <h3>Venue & Decor</h3>
            <p>
              From royal palaces to modern luxury venues, we design stunning
              setups that match your vision and theme.
            </p>
          </div>

          <div className="card">
            <h3>Photography & Films</h3>
            <p>
              Capture every emotion — from candid smiles to grand rituals —
              with cinematic photography and wedding films.
            </p>
          </div>

          <div className="card">
            <h3>Wedding Planning</h3>
            <p>
              End-to-end planning including logistics, timelines,
              coordination, and flawless execution.
            </p>
          </div>

          <div className="card">
            <h3>Makeup & Styling</h3>
            <p>
              Professional artists to make you look your absolute best
              on your most special day.
            </p>
          </div>

        </div>
      </section>

      <section className="process">
        <h2>How We Work 🛠️</h2>

        <div className="steps">
          <div>
            <h3>01. Consultation</h3>
            <p>Understanding your vision, traditions, and expectations.</p>
          </div>

          <div>
            <h3>02. Planning</h3>
            <p>Designing themes, selecting vendors, and preparing timelines.</p>
          </div>

          <div>
            <h3>03. Execution</h3>
            <p>Managing everything smoothly while you enjoy your wedding.</p>
          </div>

          <div>
            <h3>04. Delivery</h3>
            <p>Providing beautifully edited photos, videos, and memories.</p>
          </div>
        </div>
      </section>

  
      <section className="gallery">
        <h2>Wedding Highlights 📸</h2>

        <div className="gallery-grid">
          <img src={wed1} alt="" />
          <img src={wed2} alt="" />
          <img src={wed3} alt="" />
          <img src={wed4} alt="" />
        </div>
      </section>


      <section className="testimonial">
        <h2>Happy Couples 💬</h2>

        <div className="testimonial-box">
          <p>
            “Everything was beyond perfect. We didn’t have to worry about
            anything — the team handled it all beautifully.”
          </p>
          <h4>- Ankit & Priya ❤️</h4>
        </div>
      </section>

      
      <section className="cta">
        <h2>Plan Your Dream Wedding With Us 💖</h2>
        <p>
          Let us turn your vision into a grand celebration filled with love,
          joy, and unforgettable memories.
        </p>

        <button
          className="contact-btn"
          onClick={() =>
            window.open(
              "https://wa.me/917009108705?text=Hello%2C%20I%20am%20interested%20in%20your%20wedding%20planning%20services",
              "_blank"
            )
          }
        >
          Plan your Wedding 💬
        </button>
      </section>

    </div>
  );
}

export default Wedding;