import "../Styles/Goa.css";

import { useNavigate } from "react-router-dom";

import delhiHero from "../assets/delhiHero.jpg";

// ================= VENUES =================

import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.avif";
import d3 from "../assets/d3.jpg";

// ================= GALLERY =================

import dg1 from "../assets/dg1.jpg";
import dg2 from "../assets/dg2.avif";
import dg3 from "../assets/dg3.webp";
import dg4 from "../assets/dg4.jpg";
import dg5 from "../assets/dg5.jpg";
import dg6 from "../assets/dg6.jpg";
import dg7 from "../assets/dg7.jpg";
import dg8 from "../assets/dg8.jpg";

// ================= PACKAGES =================

import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";

function Delhi() {

  const navigate = useNavigate();

  return (

    <div className="goa-page">

      {/* ================= HERO ================= */}

      <div
        className="hero"
        style={{
          backgroundImage: `url(${delhiHero})`
        }}
      >

        <div className="overlay">

          <h1>
            Delhi Wedding 💍
          </h1>

          <p>
            Luxury • Grand • Elegant
          </p>

          <button
            className="btn"

            onClick={() =>
              navigate("/booking", {

                state: {

                  location: "Delhi"
                }
              })
            }
          >
            Book Now
          </button>

        </div>

      </div>

      {/* ================= VENUES ================= */}

      <section className="venues">

        <h2>
          Top Wedding Venues in Delhi
        </h2>

        <div className="venue-cards">

          {/* CARD 1 */}

          <div className="card">

            <img
              src={d1}
              alt="Leela Palace"
            />

            <div className="card-content">

              <h3>
                The Leela Palace
              </h3>

              <p>
                Luxury 5-star wedding venue
              </p>

              <div className="details">

                <span>
                  ⭐ 4.9
                </span>

                <span>
                  👥 200-800 guests
                </span>

              </div>

              <p className="price">
                ₹30L - ₹80L
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="card">

            <img
              src={d2}
              alt="ITC Maurya"
            />

            <div className="card-content">

              <h3>
                ITC Maurya
              </h3>

              <p>
                Elegant banquet & luxury stay
              </p>

              <div className="details">

                <span>
                  ⭐ 4.8
                </span>

                <span>
                  👥 150-700 guests
                </span>

              </div>

              <p className="price">
                ₹25L - ₹70L
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="card">

            <img
              src={d3}
              alt="Taj Palace"
            />

            <div className="card-content">

              <h3>
                Taj Palace
              </h3>

              <p>
                Grand wedding venue with luxury vibes
              </p>

              <div className="details">

                <span>
                  ⭐ 4.7
                </span>

                <span>
                  👥 300-1000 guests
                </span>

              </div>

              <p className="price">
                ₹28L - ₹75L
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PACKAGES ================= */}

      <section className="packages">

        <h2>
          Wedding Packages
        </h2>

        <div className="package-cards">

          {/* ================= SILVER ================= */}

          <div className="package">

            <img
              src={p1}
              alt="Silver Package"
            />

            <div className="package-content">

              <h3>
                Silver Package
              </h3>

              <p className="price">
                ₹15L - ₹25L
              </p>

              <ul>

                <li>
                  Venue Booking
                </li>

                <li>
                  Basic Decor
                </li>

                <li>
                  Catering
                </li>

              </ul>

              <button

                onClick={() =>
                  navigate("/enquiry", {

                    state: {

                      location: "Delhi",

                      packageType:
                        "Silver Package"
                    }
                  })
                }
              >
                Enquiry Form
              </button>

            </div>

          </div>

          {/* ================= GOLD ================= */}

          <div className="package popular">

            <div className="badge">
              Most Popular
            </div>

            <img
              src={p2}
              alt="Gold Package"
            />

            <div className="package-content">

              <h3>
                Gold Package
              </h3>

              <p className="price">
                ₹25L - ₹50L
              </p>

              <ul>

                <li>
                  Premium Venue
                </li>

                <li>
                  Designer Decor
                </li>

                <li>
                  Photography
                </li>

              </ul>

              <button

                onClick={() =>
                  navigate("/enquiry", {

                    state: {

                      location: "Delhi",

                      packageType:
                        "Gold Package"
                    }
                  })
                }
              >
                Enquiry Form
              </button>

            </div>

          </div>

          {/* ================= LUXURY ================= */}

          <div className="package">

            <img
              src={p3}
              alt="Luxury Package"
            />

            <div className="package-content">

              <h3>
                Luxury Package
              </h3>

              <p className="price">
                ₹50L+
              </p>

              <ul>

                <li>
                  5 Star Venue
                </li>

                <li>
                  Celebrity Services
                </li>

                <li>
                  Full Planning
                </li>

              </ul>

              <button

                onClick={() =>
                  navigate("/enquiry", {

                    state: {

                      location: "Delhi",

                      packageType:
                        "Luxury Package"
                    }
                  })
                }
              >
                Enquiry Form
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery">

        <h2>
          Wedding Gallery
        </h2>

        <div className="gallery-grid">

          <img src={dg1} alt="Delhi Wedding 1" />
          <img src={dg2} alt="Delhi Wedding 2" />
          <img src={dg3} alt="Delhi Wedding 3" />
          <img src={dg4} alt="Delhi Wedding 4" />
          <img src={dg5} alt="Delhi Wedding 5" />
          <img src={dg6} alt="Delhi Wedding 6" />
          <img src={dg7} alt="Delhi Wedding 7" />
          <img src={dg8} alt="Delhi Wedding 8" />

        </div>

      </section>

      {/* ================= WHY ================= */}

      <section className="why">

        <h2>
          Why Choose Delhi?
        </h2>

        <div className="why-grid">

          <div className="why-card">

            <h3>
              Luxury Venues ✨
            </h3>

            <p>
              Delhi offers top-tier
              5-star hotels and grand
              banquet halls.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Perfect Connectivity 🚗
            </h3>

            <p>
              Well-connected city for
              guests from all over
              India and abroad.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Grand Celebrations 🎉
            </h3>

            <p>
              Ideal for big fat Indian
              weddings with lavish
              arrangements.
            </p>

          </div>

          <div className="why-card">

            <h3>
              All-in-One Services 💼
            </h3>

            <p>
              Everything from decor
              to catering available
              at premium level.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Delhi;