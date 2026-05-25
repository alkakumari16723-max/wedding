import "../Styles/Goa.css";

import { useNavigate } from "react-router-dom";

import upHero from "../assets/upHero.jpg";

// ================= VENUES =================

import u1 from "../assets/u1.avif";
import u2 from "../assets/u2.avif";
import u3 from "../assets/u3.avif";

// ================= GALLERY =================

import ug1 from "../assets/ug1.avif";
import ug2 from "../assets/ug2.jpg";
import ug3 from "../assets/ug3.jpeg";
import ug4 from "../assets/ug4.jpeg";
import ug5 from "../assets/ug5.avif";
import ug6 from "../assets/ug6.jpg";
import ug7 from "../assets/ug7.webp";
import ug8 from "../assets/ug8.jpeg";

// ================= PACKAGES =================

import jl1 from "../assets/jl1.jpeg";
import jl2 from "../assets/jl2.jpg";
import jl3 from "../assets/jl3.jpg";

function Uttarpradesh() {

  const navigate = useNavigate();

  return (

    <div className="goa-page">

      {/* ================= HERO ================= */}

      <div
        className="hero"
        style={{
          backgroundImage: `url(${upHero})`
        }}
      >

        <div className="overlay">

          <h1>
            Uttar Pradesh Wedding 💍
          </h1>

          <p>
            Tradition • Culture • Grandeur
          </p>

          <button
            className="btn"

            onClick={() =>
              navigate("/booking", {

                state: {

                  location:
                    "Uttar Pradesh"
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
          Top Wedding Venues in Uttar Pradesh
        </h2>

        <div className="venue-cards">

          {/* CARD 1 */}

          <div className="card">

            <img
              src={u1}
              alt="Taj Hotel Lucknow"
            />

            <div className="card-content">

              <h3>
                Taj Mahal Lucknow
              </h3>

              <p>
                Luxury heritage wedding venue
              </p>

              <div className="details">

                <span>
                  ⭐ 4.8
                </span>

                <span>
                  👥 200-700 guests
                </span>

              </div>

              <p className="price">
                ₹20L - ₹50L
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="card">

            <img
              src={u2}
              alt="Radisson Blu"
            />

            <div className="card-content">

              <h3>
                Radisson Blu
              </h3>

              <p>
                Modern banquet wedding venue
              </p>

              <div className="details">

                <span>
                  ⭐ 4.7
                </span>

                <span>
                  👥 150-600 guests
                </span>

              </div>

              <p className="price">
                ₹15L - ₹40L
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="card">

            <img
              src={u3}
              alt="Clarks Avadh"
            />

            <div className="card-content">

              <h3>
                Clarks Avadh
              </h3>

              <p>
                Elegant wedding destination
              </p>

              <div className="details">

                <span>
                  ⭐ 4.6
                </span>

                <span>
                  👥 100-500 guests
                </span>

              </div>

              <p className="price">
                ₹12L - ₹35L
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
              src={jl1}
              alt="Silver Package"
            />

            <div className="package-content">

              <h3>
                Silver Package
              </h3>

              <p className="price">
                ₹10L - ₹20L
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

                      location:
                        "Uttar Pradesh",

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
              src={jl2}
              alt="Gold Package"
            />

            <div className="package-content">

              <h3>
                Gold Package
              </h3>

              <p className="price">
                ₹20L - ₹40L
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

                      location:
                        "Uttar Pradesh",

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
              src={jl3}
              alt="Luxury Package"
            />

            <div className="package-content">

              <h3>
                Luxury Package
              </h3>

              <p className="price">
                ₹40L+
              </p>

              <ul>

                <li>
                  5 Star Venue
                </li>

                <li>
                  Premium Services
                </li>

                <li>
                  Full Planning
                </li>

              </ul>

              <button

                onClick={() =>
                  navigate("/enquiry", {

                    state: {

                      location:
                        "Uttar Pradesh",

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

          <img src={ug1} alt="UP Wedding 1" />
          <img src={ug2} alt="UP Wedding 2" />
          <img src={ug3} alt="UP Wedding 3" />
          <img src={ug4} alt="UP Wedding 4" />
          <img src={ug5} alt="UP Wedding 5" />
          <img src={ug6} alt="UP Wedding 6" />
          <img src={ug7} alt="UP Wedding 7" />
          <img src={ug8} alt="UP Wedding 8" />

        </div>

      </section>

      {/* ================= WHY ================= */}

      <section className="why">

        <h2>
          Why Choose Uttar Pradesh?
        </h2>

        <div className="why-grid">

          <div className="why-card">

            <h3>
              Cultural Heritage
            </h3>

            <p>
              Celebrate your wedding
              with rich traditions and
              timeless cultural beauty.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Iconic Locations
            </h3>

            <p>
              Host your wedding near
              world-famous landmarks
              and historic venues.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Grand Celebrations
            </h3>

            <p>
              Perfect for large-scale
              weddings with spacious
              venues and arrangements.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Budget Friendly
            </h3>

            <p>
              Wide range of options
              from luxury hotels to
              affordable wedding setups.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Uttarpradesh;