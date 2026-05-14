import "../Styles/Goa.css";
import {useNavigate} from "react-router-dom";
import goaHero from "../assets/goaHero.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// venue images
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";

import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";

function Goa() {
  const navigate = useNavigate();
  return (
    <div className="goa-page">
        <img src={goaHero} className="hero-img" />

      {/* HERO */}
      <div className="hero">
        <div className="overlay">
          <h1>Goa Destination Wedding 💍</h1>
          <p>Beach • Luxury • Celebration</p>
           <button 
        className="btn"
        onClick={() => navigate("/booking")} >
        book now
      </button>
        </div>
      </div>

      {/* VENUES */}
      <section className="venues">
        <h2>Top Wedding Venues in Goa</h2>

        <div className="venue-cards">

          <div className="card">
            <img src={v1} alt="Taj Exotica" />
            <div className="card-content">
              <h3>Taj Exotica</h3>
              <p>Luxury beachfront resort</p>

              <div className="details">
                <span>⭐ 4.8</span>
                <span>👥 300-800 guests</span>
              </div>

              <p className="price">₹25L - ₹60L</p>
            </div>
          </div>

          <div className="card">
            <img src={v2} alt="Leela Goa" />
            <div className="card-content">
              <h3>The Leela Goa</h3>
              <p>Beach + garden wedding venue</p>

              <div className="details">
                <span>⭐ 4.7</span>
                <span>👥 200-700 guests</span>
              </div>

              <p className="price">₹20L - ₹50L</p>
            </div>
          </div>

          <div className="card">
            <img src={v3} alt="ITC Grand Goa" />
            <div className="card-content">
              <h3>ITC Grand Goa</h3>
              <p>Elegant venue with sea view</p>

              <div className="details">
                <span>⭐ 4.6</span>
                <span>👥 250-900 guests</span>
              </div>

              <p className="price">₹18L - ₹55L</p>
            </div>
          </div>

        </div>
      </section>

      <section className="packages">
  <h2>Wedding Packages</h2>

  <div className="package-cards">

    {/* Silver */}
    <div className="package">
      <img src={p1} alt="Silver Package" />

      <div className="package-content">
        <h3>Silver Package</h3>
        <p className="price">₹10L - ₹20L</p>

        <ul>
          <li>Venue Booking</li>
          <li>Basic Decoration</li>
          <li>Catering</li>
        </ul>

        <button>Enquire Now</button>
      </div>
    </div>

    {/* Gold */}
    <div className="package popular">
      <div className="badge">Most Popular</div>

      <img src={p2} alt="Gold Package" />

      <div className="package-content">
        <h3>Gold Package ⭐</h3>
        <p className="price">₹20L - ₹40L</p>

        <ul>
          <li>Premium Venue</li>
          <li>Designer Decor</li>
          <li>Photography</li>
        </ul>

        <button>Enquire Now</button>
      </div>
    </div>

    {/* Luxury */}
    <div className="package">
      <img src={p3} alt="Luxury Package" />

      <div className="package-content">
        <h3>Luxury Package</h3>
        <p className="price">₹40L+</p>

        <ul>
          <li>5 Star Resort</li>
          <li>Celebrity Makeup</li>
          <li>Full Wedding Planning</li>
        </ul>

        <button>Enquire Now</button>
      </div>
    </div>

  </div>
</section>

     <section className="gallery">
  <h2>Wedding Gallery</h2>

  <div className="gallery-grid">

    <div className="gallery-img">
      <img src={g1} alt="wedding1" />
    </div>

    <div className="gallery-img">
      <img src={g2} alt="wedding2" />
    </div>

    <div className="gallery-img">
      <img src={g3} alt="wedding3" />
    </div>

    <div className="gallery-img">
      <img src={g4} alt="wedding4" />
    </div>

    <div className="gallery-img">
      <img src={g5} alt="wedding5" />
    </div>

    <div className="gallery-img">
      <img src={g6} alt="wedding6" />
    </div>

    <div className="gallery-img">
      <img src={g7} alt="wedding7" />
    </div>

    <div className="gallery-img">
      <img src={g8} alt="wedding8" />
    </div>

  </div>
</section>
      {/* WHY CHOOSE */}
      <section className="why">
        <h2>Why Choose Goa?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3> Stunning Beaches</h3>
            <p>Say your vows with the ocean as your backdrop and golden sunsets.</p>
          </div>

          <div className="why-card">
            <h3>Perfect Destination</h3>
            <p>Ideal location for multi-day wedding celebrations with guests.</p>
          </div>

          <div className="why-card">
            <h3> Food & Nightlife</h3>
            <p>Enjoy world-class cuisine, beach parties, and vibrant nightlife.</p>
          </div>

          <div className="why-card">
            <h3> Flexible Budget</h3>
            <p>Options available from luxury resorts to budget-friendly venues.</p>
          </div>

        </div>
      </section>
      <footer />


    </div>
  );
}

export default Goa;