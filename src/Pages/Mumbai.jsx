import "../Styles/Goa.css";
import { useNavigate } from "react-router-dom";

import mumbaiHero from "../assets/mumbaiHero.jpg";

// venue images
import mv1 from "../assets/mv1.jpg";
import mv2 from "../assets/mv2.jpeg";
import mv3 from "../assets/mv3.webp";

// gallery
import mg1 from "../assets/mg1.jpeg";
import mg2 from "../assets/mg2.webp";
import mg3 from "../assets/mg3.jpeg";
import mg4 from "../assets/mg4.jpg";
import mg5 from "../assets/mg5.webp";
import mg6 from "../assets/mg6.jpeg";
import mg7 from "../assets/mg7.jpg";
import mg8 from "../assets/mg8.jpg";

// packages
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";

function Mumbai() {
  const navigate = useNavigate();

  return (
    <div className="goa-page">

      <div className="hero"
              style={{ backgroundImage: `url(${mumbaiHero})` }}>
      
        <div className="overlay">
          <h1>Mumbai Destination Wedding 💍</h1>
          <p>Luxury • Glamour • City Vibes</p>

          <button
            className="btn"
            onClick={() => navigate("/booking")}
          >
            Book Now
          </button>
        </div>
      </div>

  
      <section className="venues">
        <h2>Top Wedding Venues in Mumbai</h2>

        <div className="venue-cards">

          <div className="card">
            <img src={mv1} alt="Taj Mahal Palace" />
            <div className="card-content">
              <h3>Taj Mahal Palace</h3>
              <p>Iconic luxury hotel by the sea</p>

              <div className="details">
                <span> 4.9</span>
                <span> 200-800 guests</span>
              </div>

              <p className="price">₹30L - ₹70L</p>
            </div>
          </div>

          <div className="card">
            <img src={mv2} alt="The St. Regis" />
            <div className="card-content">
              <h3>The St. Regis</h3>
              <p>Ultra luxury indoor wedding venue</p>

              <div className="details">
                <span>⭐ 4.8</span>
                <span>👥 300-900 guests</span>
              </div>

              <p className="price">₹25L - ₹60L</p>
            </div>
          </div>

          <div className="card">
            <img src={mv3} alt="JW Marriott" />
            <div className="card-content">
              <h3>JW Marriott Juhu</h3>
              <p>Beachside luxury wedding venue</p>

              <div className="details">
                <span>⭐ 4.7</span>
                <span>👥 250-700 guests</span>
              </div>

              <p className="price">₹20L - ₹55L</p>
            </div>
          </div>

        </div>
      </section>


      <section className="packages">
        <h2>Wedding Packages</h2>

        <div className="package-cards">

          <div className="package">
            <img src={p1} alt="Silver Package" />
            <div className="package-content">
              <h3>Silver Package</h3>
              <p className="price">₹12L - ₹22L</p>

              <ul>
                <li>Venue Booking</li>
                <li>Basic Decoration</li>
                <li>Catering</li>
              </ul>

              <button>Enquire Now</button>
            </div>
          </div>

          <div className="package popular">
            <div className="badge">Most Popular</div>

            <img src={p2} alt="Gold Package" />
            <div className="package-content">
              <h3>Gold Package ⭐</h3>
              <p className="price">₹25L - ₹45L</p>

              <ul>
                <li>Premium Venue</li>
                <li>Designer Decor</li>
                <li>Photography</li>
              </ul>

              <button>Enquire Now</button>
            </div>
          </div>

          <div className="package">
            <img src={p3} alt="Luxury Package" />
            <div className="package-content">
              <h3>Luxury Package</h3>
              <p className="price">₹50L+</p>

              <ul>
                <li>5 Star Hotel</li>
                <li>Celebrity Makeup</li>
                <li>Full Wedding Planning</li>
              </ul>

              <button>Enquire Now</button>
            </div>
          </div>

        </div>
      </section>


      <section className="gallery">
        <h2>Mumbai Wedding Gallery</h2>

        <div className="gallery-grid">
          <img src={mg1} alt="" />
          <img src={mg2} alt="" />
          <img src={mg3} alt="" />
          <img src={mg4} alt="" />
          <img src={mg5} alt="" />
          <img src={mg6} alt="" />
          <img src={mg7} alt="" />
          <img src={mg8} alt="" />
        </div>
      </section>


      <section className="why">
        <h2>Why Choose Mumbai?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Luxury Venues</h3>
            <p>5-star hotels and iconic venues for grand celebrations.</p>
          </div>

          <div className="why-card">
            <h3>City Glamour</h3>
            <p>Perfect mix of modern luxury and vibrant nightlife.</p>
          </div>

          <div className="why-card">
            <h3>Easy Connectivity</h3>
            <p>Well-connected city for guests from all over India.</p>
          </div>

          <div className="why-card">
            <h3>Premium Experience</h3>
            <p>Top-tier services for a flawless wedding experience.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Mumbai;