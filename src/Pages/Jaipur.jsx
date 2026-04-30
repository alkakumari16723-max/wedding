import "../Styles/Goa.css";
import jaipurHero from "../assets/jaipurHero.jpg";
import { useState } from "react";
import ContactForm from "../Pages/Contactform";

// venue images
import j1 from "../assets/j1.jpeg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";

// gallery
import jg1 from "../assets/jg1.jpg";
import jg2 from "../assets/jg2.jpg";
import jg3 from "../assets/jg3.jpg";
import jg4 from "../assets/jg4.jpg";
import jg5 from "../assets/jg5.jpg";
import jg6 from "../assets/jg6.jpg";
import jg7 from "../assets/jg7.webp";
import jg8 from "../assets/jg8.jpg";

// packages
import jl1 from "../assets/jl1.jpeg";
import jl2 from "../assets/jl2.jpg";
import jl3 from "../assets/jl3.jpg";

function Jaipur() {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <div className="goa-page">

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${jaipurHero})` }}
      >
        <div className="overlay">
          <h1>Jaipur Royal Wedding 👑</h1>
          <p>Palace • Royal • Luxury</p>

          {/* ✅ FIXED */}
          <button 
            className="hero-btn"
            onClick={() => {
              setShowPopup(true);
              setSelectedPackage("General Enquiry");
            }}
          >
            Plan Now
          </button>
        </div>
      </div>

      {/* VENUES */}
      <section className="venues">
        <h2>Top Wedding Venues in Jaipur</h2>

        <div className="venue-cards">
          <div className="card">
            <img src={j1} alt="City Palace" />
            <div className="card-content">
              <h3>City Palace</h3>
              <p>Royal heritage wedding venue</p>
              <div className="details">
                <span>⭐ 4.9</span>
                <span>👥 200-600 guests</span>
              </div>
              <p className="price">₹30L - ₹80L</p>
            </div>
          </div>

          <div className="card">
            <img src={j2} alt="Rambagh Palace" />
            <div className="card-content">
              <h3>Rambagh Palace</h3>
              <p>Luxury palace wedding</p>
              <div className="details">
                <span>⭐ 4.8</span>
                <span>👥 150-500 guests</span>
              </div>
              <p className="price">₹25L - ₹70L</p>
            </div>
          </div>

          <div className="card">
            <img src={j3} alt="Samode Palace" />
            <div className="card-content">
              <h3>Samode Palace</h3>
              <p>Heritage palace destination</p>
              <div className="details">
                <span>⭐ 4.7</span>
                <span>👥 100-400 guests</span>
              </div>
              <p className="price">₹20L - ₹60L</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">
        <h2>Wedding Packages</h2>

        <div className="package-cards">

          {/* SILVER */}
          <div className="package">
            <img src={jl1} alt="Silver Package" />
            <div className="package-content">
              <h3>Silver Package</h3>
              <p className="price">₹15L - ₹25L</p>
              <ul>
                <li>Venue Booking</li>
                <li>Basic Decor</li>
                <li>Catering</li>
              </ul>
              <button onClick={() => {
                setShowPopup(true);
                setSelectedPackage("Silver Package");
              }}>
                Enquire Now
              </button>
            </div>
          </div>

          {/* GOLD */}
          <div className="package popular">
            <div className="badge">Most Popular</div>
            <img src={jl2} alt="Gold Package" />
            <div className="package-content">
              <h3>Gold Package</h3>
              <p className="price">₹25L - ₹50L</p>
              <ul>
                <li>Premium Palace</li>
                <li>Designer Decor</li>
                <li>Photography</li>
              </ul>
              <button onClick={() => {
                setShowPopup(true);
                setSelectedPackage("Gold Package");
              }}>
                Enquire Now
              </button>
            </div>
          </div>

          {/* LUXURY */}
          <div className="package">
            <img src={jl3} alt="Luxury Package" />
            <div className="package-content">
              <h3>Luxury Package</h3>
              <p className="price">₹50L+</p>
              <ul>
                <li>5 Star Palace</li>
                <li>Celebrity Services</li>
                <li>Full Planning</li>
              </ul>
              <button onClick={() => {
                setShowPopup(true);
                setSelectedPackage("Luxury Package");
              }}>
                Enquire Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div 
          className="popup-overlay"
          onClick={(e) => {
            if (e.target.className === "popup-overlay") {
              setShowPopup(false);
            }
          }}
        >
          <div className="popup-box">
            <span 
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </span>

            <h2>Plan Your Jaipur Wedding 💍</h2>
            <p><b>Selected:</b> {selectedPackage}</p>

            <ContactForm selectedPackage={selectedPackage} />
          </div>
        </div>
      )}
      {/* GALLERY */}
<section className="gallery">
  <h2>Wedding Gallery</h2>

  <div className="gallery-grid">
    <img src={jg1} alt="Jaipur Wedding 1" />
    <img src={jg2} alt="Jaipur Wedding 2" />
    <img src={jg3} alt="Jaipur Wedding 3" />
    <img src={jg4} alt="Jaipur Wedding 4" />
    <img src={jg5} alt="Jaipur Wedding 5" />
    <img src={jg6} alt="Jaipur Wedding 6" />
    <img src={jg7} alt="Jaipur Wedding 7" />
    <img src={jg8} alt="Jaipur Wedding 8" />
  </div>
</section>

{/* WHY CHOOSE JAIPUR */}
<section className="why">
  <h2>Why Choose Jaipur?</h2>

  <div className="why-grid">

    <div className="why-card">
      <h3> Royal Palaces </h3>
      <p>Get married in grand palaces with regal architecture and heritage charm.</p>
    </div>

    <div className="why-card">
      <h3> Heritage Experience </h3>
      <p>Experience traditional Rajasthani culture with royal hospitality.</p>
    </div>

    <div className="why-card">
      <h3> Perfect for Big Weddings </h3>
      <p>Spacious venues ideal for lavish multi-day wedding celebrations.</p>
    </div>

    <div className="why-card">
      <h3> Luxury & Elegance </h3>
      <p>From elephant entries to royal décor, make your wedding truly majestic.</p>
    </div>

  </div>
</section>

    </div>
    
  );
}

export default Jaipur;