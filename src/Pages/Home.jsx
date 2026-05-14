import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import{useNavigate} from "react-router-dom";
import Footer from "../Components/Footer";
import videoBg from "../assets/videoBg.mp4"; 
import logistics from "../assets/logistics.jpg";
import destination from "../assets/destination.jpg";
import decor from "../assets/decor.jpg";
import entertainment from "../assets/entertainment.jpg";
import catering from "../assets/catering.jpg";
import rituals from "../assets/rituals.jpg";
import gifting from "../assets/gifting.jpg";
import planing from "../assets/planing.jpg";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.avif";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpg";
import r6 from "../assets/r6.jpg";
import { useState, useEffect } from "react";
import REV11 from "../assets/rev11.avif";
import REV2 from "../assets/rev2.jpeg";
import REV3 from "../assets/rev3.webp";
import BookingForm from "./BookingForm";


    function Home() {
    const navigate = useNavigate();

  const reviews = [
    {
      name: "Rahul & Priya",
      text: "Our wedding felt like a fairytale! Every detail was perfectly managed. We didn’t have to worry about anything. Truly amazing experience ❤️",
      img: REV11
    },
    {
      name: "Aman & Neha",
      text: "From decor to catering, everything was beyond expectations. The team handled everything so smoothly. Highly recommended! ❤️",
      img: REV2
    },
    {
      name: "Rohit & Simran",
      text: "We had the most magical wedding day thanks to this incredible team! They took care of every detail, making our dream wedding a reality. We couldn’t be happier! ❤️",
      img: REV3
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      

      {/* HERO */}
      <div className="home">
        <video autoPlay loop muted playsInline className="home-video">
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="home-content">
          <h1>Plan Your Dream Wedding 💍</h1>
          <p>Find best venues, services and book easily</p>
         <button 
        className="btn"
        onClick={() => navigate("/booking")} >
        Book Now
      </button>

        </div>
      </div> {/* ✅ CLOSE HOME HERE */}


  <div className="wedding-slogan">
  <h2>We Create Magic, You Celebrate Love ✨</h2>
  <p>
    Turning your dream wedding into a timeless story filled with elegance,
    emotions, and unforgettable moments 💕
  </p>
</div>

    {/* SERVICES */}
      <div className="services">
        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <img src={logistics} alt="Logistics & Hospitality" />
            <h3>Logistics & Hospitality</h3>
          </div>

          <div className="service-card">
            <img src={destination} alt="Destination & Venue" />
            <h3>Destination & Venue</h3>
          </div>

          <div className="service-card">
            <img src={decor} alt="Decor Design" />
            <h3>Decor Design</h3>
          </div>

          <div className="service-card">
            <img src={entertainment} alt="Entertainment" />
            <h3>Entertainment & Artists</h3>
          </div>

          <div className="service-card">
            <img src={catering} alt="Catering" />
            <h3>Catering</h3>
          </div>

          <div className="service-card">
            <img src={rituals} alt="Rituals" />
            <h3>Rituals & Ceremonies</h3>
          </div>

          <div className="service-card">
            <img src={gifting} alt="Gifting" />
            <h3>Gifting & Collateral</h3>
          </div>

          <div className="service-card">
            <img src={planing} alt="Planning" />
            <h3>Turnkey Planning</h3>
          </div>

        </div>
      </div>

      {/* RECENT EVENTS */}
<div className="recent-events">
  <h2>Recent Events</h2>

  <div className="event-grid">

    <div className="event-card">
      <img src={r1} alt="event" />
      <div className="event-overlay">Rahul ❤️ Priya</div>
    </div>

    <div className="event-card">
      <img src={r2} alt="event" />
      <div className="event-overlay">Aman ❤️ Neha</div>
    </div>

    <div className="event-card">
      <img src={r3} alt="event" />
      <div className="event-overlay">Rohit ❤️ Simran</div>
    </div>

    <div className="event-card">
      <img src={r4} alt="event" />
      <div className="event-overlay">Vikram ❤️ Pooja</div>
    </div>

    <div className="event-card">
      <img src={r5} alt="event" />
      <div className="event-overlay">Arjun ❤️ Meera</div>
    </div>

    <div className="event-card">
      <img src={r6} alt="event" />
      <div className="event-overlay">Dev ❤️ Riya</div>
    </div>


  </div>
</div>


{/* REVIEWS */}
<div className="reviews">

  <h2>What Our Clients Say 💕</h2>

  <div className="review-container">

    <div className="review-text">
      <p>{reviews[index].text}</p>
      <h3>- {reviews[index].name}</h3>
    </div>

    <div className="review-image">
      <img src={reviews[index].img} alt="review" />
    </div>

  </div>
</div>
<BookingForm />

    </>
  );
}


export default Home;