import "../Styles/prewedding.css";

import heroImg from "../assets/hero.jpg";
import shoot1 from "../assets/shoot1.webp";
import shoot2 from "../assets/shoot2.webp";
import shoot3 from "../assets/shoot3.jpg";
import shoot4 from "../assets/shoot4.webp";

function PreWedding() {
  return (
    <div className="prewedding-page">

      {/* HERO */}
      <div className="pre-hero">
        <img src={heroImg} alt="Pre Wedding Shoot" />
        <div className="overlay">
          <h1>Your Love Story Begins Here 💕</h1>
          <p>Timeless, cinematic & beautifully crafted pre-wedding experiences</p>
        </div>
      </div>

      {/* INTRO STORY */}
      <section className="intro">
        <h2>Not Just a Shoot, A Memory for Life ✨</h2>
        <p>
          Your pre-wedding shoot is the first chapter of your forever story.
          It’s where laughter feels natural, moments feel real, and emotions
          unfold without filters. We don’t just pose you — we let your story
          flow naturally and capture it as it is.
        </p>
        <p>
          Whether it’s a quiet walk by the beach, a royal palace backdrop,
          or a cozy candid moment, every frame is designed to reflect
          your bond, your chemistry, and your journey together.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience">
        <h2>The Experience We Create </h2>
        <p>
          From the moment you connect with us, we focus on understanding your
          personalities, your comfort, and your vision. Every shoot is planned
          with attention to detail — from location scouting to styling, lighting,
          and storytelling.
        </p>

        <p>
          We believe the best photographs are not forced — they are felt.
          That’s why we create an environment where you can simply be yourselves,
          while we capture those authentic, heartfelt moments.
        </p>
      </section>

      {/* SERVICES (REFINED TEXT HEAVY) */}
      <section className="services">
        <h2>What We Offer </h2>

        <div className="service-cards">
          <div className="card">
            <h3>Cinematic Photography</h3>
            <p>
              Soft, romantic, and cinematic frames that feel like scenes
              from a love story. Every shot is carefully composed to
              highlight emotions and connection.
            </p>
          </div>

          <div className="card">
            <h3>Storytelling Videography</h3>
            <p>
              We create films, not just videos — capturing your journey
              in motion with music, slow-motion moments, and beautiful edits.
            </p>
          </div>

          <div className="card">
            <h3>Concept & Theme Planning</h3>
            <p>
              From royal elegance to modern romance, we design themes
              that match your personality and make your shoot truly unique.
            </p>
          </div>

          <div className="card">
            <h3> Styling & Guidance</h3>
            <p>
              We guide you through outfits, poses, and expressions so you
              feel confident, comfortable, and natural throughout the shoot.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS (MORE WRITTEN) */}
      <section className="process">
        <h2>Our Process </h2>

        <div className="steps">
          <div>
            <h3>01. Understanding You</h3>
            <p>
              We start by knowing your story — how you met, what you love,
              and what makes your bond special.
            </p>
          </div>

          <div>
            <h3>02. Planning the Vision</h3>
            <p>
              Locations, themes, outfits, and concepts are designed to
              reflect your unique love story.
            </p>
          </div>

          <div>
            <h3>03. The Shoot</h3>
            <p>
              A relaxed and fun experience where we capture real emotions,
              candid laughter, and beautiful chemistry.
            </p>
          </div>

          <div>
            <h3>04. Final Delivery</h3>
            <p>
              Carefully edited photos and cinematic videos delivered with
              elegance and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Captured Moments </h2>
        <p className="gallery-text">
          Every picture tells a story — a smile, a glance, a feeling that
          lasts forever.
        </p>

        <div className="gallery-grid">
          <img src={shoot1} alt="" />
          <img src={shoot2} alt="" />
          <img src={shoot3} alt="" />
          <img src={shoot4} alt="" />
        </div>
      </section>

     <section className="testimonial">
  <h2>Words From Our Couples 💬</h2>

  <div className="testimonial-box">
    <p>
      “We were nervous at first, but the team made us feel so comfortable.
      It didn’t feel like a shoot — it felt like a beautiful day captured forever.
      The photos are beyond what we imagined.”
    </p>
    <h4>- A Happy Couple ❤️</h4>
  </div>

  <div className="testimonial-box">
    <p>
      “Absolutely magical experience! Every moment was captured so beautifully.
      The team understood our vision perfectly.”
    </p>
    <h4>- Riya & Arjun 💖</h4>
  </div>

  <div className="testimonial-box">
    <p>
      “From planning to execution, everything was seamless.
      We didn’t have to worry about anything on our big day.”
    </p>
    <h4>- Neha & Karan 💍</h4>
  </div>

  <div className="testimonial-box">
    <p>
      “Highly professional and super creative team.
      Our wedding album looks like a dream!”
    </p>
    <h4>- Simran & Rahul ✨</h4>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="cta">
  <h2>Let’s Tell Your Story 💖</h2>
  <p>
    Your story deserves to be captured in the most beautiful way.
    Let’s create something timeless together.
  </p>

  <button 
    className="contact-btn"
    onClick={() =>
      window.open(
        "https://wa.me/917009108705?text=Hello%2C%20I%20am%20interested%20in%20your%20wedding%20planning%20services.%20Please%20share%20details%20%F0%9F%92%8D",
        "_blank"
      )
    }
  >
    Contact Us on WhatsApp 💬
  </button>
</section>

    </div>
  );
}

export default PreWedding;