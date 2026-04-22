import "../Styles/about.css";
import aboutImg from "../assets/about.jpg";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";
import contactForm from "./Contactform";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About Us 💍</h1>
          <p>Crafting Dream Weddings with Love & Elegance</p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="about-intro">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate wedding planning team dedicated to turning your
            dream wedding into reality. From royal palaces to beach destinations,
            we design unforgettable experiences filled with love, luxury, and emotions.
          </p>
        </div>

        <div className="about-img">
          <img src={aboutImg} alt="About Wedding Planner" />
        </div>
      </div>


  {/* STORY SECTION */}
<div className="about-story">
  <div className="story-content">
    <h2>Our Story</h2>
    <p>
      What started as a small dream has now grown into a passionate wedding
      planning brand trusted by hundreds of couples. Our journey began with a
      simple goal — to create weddings that are not just events, but lifelong
      memories.
    </p>

    <p>
      Over the years, we have designed luxurious palace weddings, romantic
      beach ceremonies, and elegant destination celebrations across India.
      Every wedding we plan is unique, filled with emotions, culture, and
      beautiful details that reflect each couple’s story.
    </p>

    <p>
      We believe that weddings are not just about decoration or venues —
      they are about love, families, and unforgettable moments. That’s why
      we put our heart into every detail, ensuring your big day is truly magical.
    </p>
  </div>
</div>

      {/* STATS SECTION */}
      <div className="about-stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Weddings Planned</p>
        </div>

        <div className="stat">
          <h3>100+</h3>
          <p>Venues Covered</p>
        </div>

        <div className="stat">
          <h3>50+</h3>
          <p>Team Members</p>
        </div>

        <div className="stat">
          <h3>5★</h3>
          <p>Client Rating</p>
        </div>
      </div>
      {/* FOUNDERS SECTION */}
<div className="about-founders">
  <h2>Meet Our Founders</h2>

  <div className="founders-grid">

    <div className="founder-card">
      <img src={founder1} alt="Founder 1" />
      <h3>Riya Sharma</h3>
      <p className="role">Co-Founder & Creative Director</p>
      <p>
        Riya is the creative soul behind our luxury wedding designs.
        She transforms ideas into breathtaking experiences with her
        eye for detail and passion for elegance.
      </p>
    </div>

    <div className="founder-card">
      <img src={founder2} alt="Founder 2" />
      <h3>Arjun Mehta</h3>
      <p className="role">Co-Founder & Operations Head</p>
      <p>
        Arjun ensures every wedding runs smoothly from start to finish.
        His planning expertise and management skills make every event stress-free.
      </p>
    </div>

  </div>
</div>



    </div>
  );
}

export default About;