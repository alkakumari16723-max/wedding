import "../Styles/services.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpeg";

function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <h1>Our Wedding Services 💍</h1>
        <p>We make your dream wedding come true</p>
        <button className="hero-btn">Book Consultation</button>
      </div>

      {/* SERVICES */}
      <section className="services-section">
        <h2>What We Offer</h2>

        <div className="services-grid">

          <div className="service-card">
            <img src={s1} alt="" />
            <h3>Full Wedding Planning</h3>
            <p>Complete end-to-end wedding management.</p>
          </div>

          <div className="service-card">
            <img src={s2} alt="" />
            <h3>Destination Wedding</h3>
            <p>Plan your wedding in Goa, Jaipur & more.</p>
          </div>

          <div className="service-card">
            <img src={s3} alt="" />
            <h3>Venue Selection</h3>
            <p>Find the perfect venue for your big day.</p>
          </div>

          <div className="service-card">
            <img src={s4} alt="" />
            <h3>Decoration & Theme</h3>
            <p>Beautiful decor & customized themes.</p>
          </div>

          <div className="service-card">
            <img src={s5} alt="" />
            <h3>Photography</h3>
            <p>Capture your special moments forever.</p>
          </div>

          <div className="service-card">
            <img src={s6} alt="" />
            <h3>Catering</h3>
            <p>Delicious multi-cuisine catering services.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <h2>How We Work</h2>

        <div className="process-grid">
          <div className="step">
            <h3>1. Consultation</h3>
            <p>We understand your vision and requirements.</p>
          </div>

          <div className="step">
            <h3>2. Planning</h3>
            <p>We design and plan every detail perfectly.</p>
          </div>

          <div className="step">
            <h3>3. Execution</h3>
            <p>We manage everything on your big day.</p>
          </div>

          <div className="step">
            <h3>4. Celebration</h3>
            <p>You enjoy your wedding stress-free 💍</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="why-section">
  <div className="why-container">
    
    <h2 className="why-title">Why Choose Us 💍</h2>
    <p className="why-subtitle">
      We don’t just plan weddings — we create unforgettable experiences.
    </p>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-icon">💎</div>
        <h3>10+ Years Experience</h3>
        <p>Successfully planned 500+ luxury & destination weddings</p>
      </div>

      <div className="why-card">
        <div className="why-icon">💰</div>
        <h3>Budget Friendly</h3>
        <p>Flexible packages tailored to every budget without compromise</p>
      </div>

      <div className="why-card">
        <div className="why-icon">🎯</div>
        <h3>Personalized Planning</h3>
        <p>Every wedding is uniquely designed to match your vision</p>
      </div>

      <div className="why-card">
        <div className="why-icon">⭐</div>
        <h3>Trusted by Clients</h3>
        <p>Top-rated services with hundreds of happy couples</p>
      </div>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="cta">
        <h2>Start Planning Your Dream Wedding 💍</h2>
        <button className="hero-btn">Contact Us</button>
      </section>

    </div>
  );
}

export default Services;