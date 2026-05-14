import "../Styles/Goa.css";
import upHero from "../assets/upHero.jpg"; // change image
import { useState } from "react";
import ContactForm from "./ContactForm";

// venue images
import u1 from "../assets/u1.avif";
import u2 from "../assets/u2.avif";
import u3 from "../assets/u3.avif";

// gallery
import ug1 from "../assets/ug1.avif";
import ug2 from "../assets/ug2.jpg";
import ug3 from "../assets/ug3.jpeg";
import ug4 from "../assets/ug4.jpeg";
import ug5 from "../assets/ug5.avif";
import ug6 from "../assets/ug6.jpg";
import ug7 from "../assets/ug7.webp";
import ug8 from "../assets/ug8.jpeg";

// packages (you can reuse Jaipur ones if you want)
import jl1 from "../assets/jl1.jpeg";
import jl2 from "../assets/jl2.jpg";
import jl3 from "../assets/jl3.jpg";

function Uttarpradesh() {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <div className="goa-page"> {/* ✅ SAME CSS */}

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${upHero})` }}
      >
        <div className="overlay">
          <h1>Uttar Pradesh Wedding 💍</h1>
          <p>Tradition • Culture • Grandeur</p>

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

    
      <section className="venues">
        <h2>Top Wedding Venues in Uttar Pradesh</h2>

        <div className="venue-cards">

          <div className="card">
            <img src={u1} alt="Taj Hotel Lucknow" />
            <div className="card-content">
              <h3>Taj Mahal Lucknow</h3>
              <p>Luxury heritage wedding venue</p>
              <div className="details">
                <span>⭐ 4.8</span>
                <span>👥 200-700 guests</span>
              </div>
              <p className="price">₹20L - ₹50L</p>
            </div>
          </div>

          <div className="card">
            <img src={u2} alt="Radisson Blu" />
            <div className="card-content">
              <h3>Radisson Blu</h3>
              <p>Modern banquet wedding venue</p>
              <div className="details">
                <span>⭐ 4.7</span>
                <span>👥 150-600 guests</span>
              </div>
              <p className="price">₹15L - ₹40L</p>
            </div>
          </div>

          <div className="card">
            <img src={u3} alt="Clarks Avadh" />
            <div className="card-content">
              <h3>Clarks Avadh</h3>
              <p>Elegant wedding destination</p>
              <div className="details">
                <span>⭐ 4.6</span>
                <span>👥 100-500 guests</span>
              </div>
              <p className="price">₹12L - ₹35L</p>
            </div>
          </div>

        </div>
      </section>

    
      <section className="packages">
        <h2>Wedding Packages</h2>

        <div className="package-cards">

          <div className="package">
            <img src={jl1} alt="Silver Package" />
            <div className="package-content">
              <h3>Silver Package</h3>
              <p className="price">₹10L - ₹20L</p>
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

          <div className="package popular">
            <div className="badge">Most Popular</div>
            <img src={jl2} alt="Gold Package" />
            <div className="package-content">
              <h3>Gold Package</h3>
              <p className="price">₹20L - ₹40L</p>
              <ul>
                <li>Premium Venue</li>
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

          <div className="package">
            <img src={jl3} alt="Luxury Package" />
            <div className="package-content">
              <h3>Luxury Package</h3>
              <p className="price">₹40L+</p>
              <ul>
                <li>5 Star Venue</li>
                <li>Premium Services</li>
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

  
      {showPopup && (
        <div 
          className="popup-overlay"
          onClick={(e) => {
            if (e.target.className === "popup-overlay") {
              setShowPopup(false);
            }
          }}>
          <div className="popup-box">
            <span 
              className="close-btn"
              onClick={() => setShowPopup(false)} >
              
            </span>

            <h2>Plan Your UP Wedding 💍</h2>
            <p><b>Selected:</b> {selectedPackage}</p>

            <ContactForm selectedPackage={selectedPackage} />
          </div>
        </div>
      )}
  
<section className="gallery">
  <h2>Wedding Gallery</h2>

  <div className="gallery-grid">
    <img src={ug1} alt="Uttar Pradesh Wedding 1" />
    <img src={ug2} alt="Uttar Pradesh Wedding 2" />
    <img src={ug3} alt="Uttar Pradesh Wedding 3" />
    <img src={ug4} alt="Uttar Pradesh Wedding 4" />
    <img src={ug5} alt="Uttar Pradesh Wedding 5" />
    <img src={ug6} alt="Uttar Pradesh Wedding 6" />
    <img src={ug7} alt="Uttar Pradesh Wedding 7" />
    <img src={ug8} alt="Uttar Pradesh Wedding 8" />
  </div>
</section>

<section className="why">
  <h2>Why Choose Uttar Pradesh?</h2>

  <div className="why-grid">

    <div className="why-card">
      <h3> Cultural Heritage </h3>
      <p>Celebrate your wedding with rich traditions and timeless cultural beauty.</p>
    </div>

    <div className="why-card">
      <h3> Iconic Locations </h3>
      <p>Host your wedding near world-famous landmarks and historic venues.</p>
    </div>

    <div className="why-card">
      <h3> Grand Celebrations </h3>
      <p>Perfect for large-scale weddings with spacious venues and arrangements.</p>
    </div>

    <div className="why-card">
      <h3> Budget Friendly </h3>
      <p>Wide range of options from luxury hotels to affordable wedding setups.</p>
    </div>

  </div>
</section>

    </div>
  );
}

export default Uttarpradesh;