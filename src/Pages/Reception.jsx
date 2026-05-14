import "../Styles/reception.css";

import heroImg from "../assets/receptioHero.jpeg";
import rec1 from "../assets/rec1.jpg";
import rec2 from "../assets/rec2.avif";
import rec3 from "../assets/rec3.jpg";
import rec4 from "../assets/rec4.webp";
import recMid from "../assets/recMid.jpg";

function Reception() {
  return (
    <div className="reception-page">

      {/* HERO */}
      <div className="rec-hero">
        <img src={heroImg} alt="Reception" />
        <div className="overlay">
          <h1>Celebrate Love in Style 🥂</h1>
          <p>Glamorous Evenings • Music • Dance • Memories</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <h2>The Grand Celebration Night ✨</h2>
        <p>
          Your reception is where elegance meets celebration.
          It’s a night filled with laughter, music, dance,
          and unforgettable moments with your loved ones.
        </p>
        <p>
          We create stunning setups and lively atmospheres that
          make your reception truly magical and memorable.
        </p>
      </section>

{/* RECEPTION EXPERIENCE */}
<section className="experience">
  <h2>An Evening Full of Celebration ✨</h2>

  <p>
    Your reception is where the formalities fade and the celebrations begin.
    It’s the moment where you step into a room filled with smiles, music,
    laughter, and the warmth of your loved ones coming together to celebrate
    your journey.
  </p>

  {/* IMAGE */}
  <div className="exp-image">
    <img src={recMid} alt="Reception Celebration" />
  </div>

  <p>
    Unlike the rituals of the wedding day, the reception is all about
    expression — your style, your energy, and your vibe. From the way
    you make your grand entry to the music that fills the dance floor,
    every element reflects your personality.
  </p>

  <p>
    We focus on creating an atmosphere that feels alive — where guests
    are engaged, moments feel effortless, and the entire evening flows
    beautifully without interruptions.
  </p>

  <p>
    Because at the end of the night, it’s not just about how it looked —
    it’s about how it felt. And we make sure it feels unforgettable.
  </p>
</section>

      {/* SERVICES */}
      <section className="services">
        <h2>Reception Highlights </h2>

        <div className="service-cards">

          <div className="card">
            <h3>Stage & Entry Design</h3>
            <p>
              Grand stage setups and couple entry concepts
              that leave everyone amazed.
            </p>
          </div>

          <div className="card">
            <h3>Lighting & Ambience</h3>
            <p>
              Beautiful lighting effects, LED setups, and
              romantic ambience for the perfect evening vibe.
            </p>
          </div>

          <div className="card">
            <h3>Music & DJ</h3>
            <p>
              High-energy DJ, live music, and dance floor
              setups to keep the celebration alive.
            </p>
          </div>

          <div className="card">
            <h3>Catering Experience</h3>
            <p>
              Delicious multi-cuisine menus and elegant
              dining setups for your guests.
            </p>
          </div>

        </div>
      </section>

     

      

      {/* GALLERY */}
      <section className="gallery">
        <h2>Reception Moments </h2>

        <div className="gallery-grid">
          <img src={rec1} alt="" />
          <img src={rec2} alt="" />
          <img src={rec3} alt="" />
          <img src={rec4} alt="" />
        </div>
      </section>

     
      {/* CTA */}
      <section className="cta">
        <h2>Let’s Plan Your Reception </h2>
        <p>
          Make your celebration night unforgettable with style,
          music, and luxury.
        </p>

        <button
          className="contact-btn"
          onClick={() =>
            window.open(
              "https://wa.me/917009108705?text=Hello%2C%20I%20want%20to%20plan%20a%20wedding%20reception",
              "_blank"
            )
          }
        >
           Contact Us 
        </button>
      </section>

    </div>
  );
}

export default Reception;
