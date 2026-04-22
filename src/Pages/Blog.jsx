import "../Styles/blog.css";
import blogHero from "../assets/blogHero.jpeg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const blogs = [
  {
    id: 1,
    title: "Top 10 Wedding Venues in Goa 🌴",
    desc: "Discover the most beautiful beachside venues for your dream wedding.",
    extra: "Goa offers a perfect blend of beaches, luxury resorts, and vibrant nightlife. Popular venues include Taj Exotica, The Leela, and ITC Grand. A destination wedding in Goa ensures a memorable experience for you and your guests.",
    img: blog1,
    category: "Destination",
  },
  {
    id: 2,
    title: "Jaipur Royal Wedding Guide 👑",
    desc: "Plan a luxurious palace wedding in Jaipur.",
    extra: "Jaipur is known for its royal palaces like City Palace and Rambagh Palace. With traditional decor, elephant entries, and royal vibes, Jaipur weddings give a true regal experience.",
    img: blog2,
    category: "Luxury",
  },
  {
    id: 3,
    title: "Budget Wedding Planning Tips 💰",
    desc: "Save money without compromising experience.",
    extra: "Start with a fixed budget, prioritize essentials, and choose off-season dates. Opt for local vendors and minimal decor to reduce costs while still making your wedding beautiful.",
    img: blog3,
    category: "Budget",
  },
  {
    id: 4,
    title: "Latest Wedding Decor Trends ✨",
    desc: "Trending decor ideas for modern weddings.",
    extra: "Floral installations, pastel themes, LED decor, and minimalist aesthetics are trending. Personalization like name boards and themed stages adds a unique touch.",
    img: blog4,
    category: "Trends",
  },
];

function Blog() {
  return (
    <div className="blog-page">

      {/* HERO */}
      <div className="blog-hero">
        <h1>Wedding Blog 💍</h1>
        <p>Ideas, inspiration & expert tips</p>
      </div>

      {/* FEATURED BLOG */}
      <div className="featured-blog">
        <img src={blog1} alt="featured" />
        <div className="featured-content">
          <h2>Plan Your Dream Destination Wedding 🌍</h2>
          <p>
            From Goa beaches to Jaipur palaces, explore top destinations and
            create unforgettable wedding memories. Choose the perfect location,
            manage your budget, and create magical moments with your loved ones.
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="categories">
        <button>All</button>
        <button>Destination</button>
        <button>Luxury</button>
        <button>Budget</button>
        <button>Trends</button>
      </div>

      {/* BLOG GRID */}
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <span className="tag">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              {/* ✅ EXTRA PARAGRAPH */}
              <p className="extra-text">{blog.extra}</p>

            </div>
          </div>
        ))}
      </div>

      {/* WEDDING TIPS */}
      <div className="tips-section">
  <h2>Wedding Planning Tips </h2>

  <div className="tips-grid">

    <div className="tip-card">
      <h3> Set Your Budget</h3>
      <p>Start with a clear budget and allocate it wisely across venue, decor, and catering.</p>
    </div>

    <div className="tip-card">
      <h3> Book Venue Early</h3>
      <p>Popular venues get booked fast. Secure your venue at least 6–12 months in advance.</p>
    </div>

    <div className="tip-card">
      <h3> Hire a Planner</h3>
      <p>A professional planner helps reduce stress and ensures everything runs smoothly.</p>
    </div>

    <div className="tip-card">
      <h3> Choose Theme</h3>
      <p>Select a theme that reflects your personality and keeps everything consistent.</p>
    </div>

    <div className="tip-card">
      <h3> Plan Timeline</h3>
      <p>Create a timeline for events to avoid last-minute chaos and delays.</p>
    </div>

    <div className="tip-card">
      <h3> Capture Moments</h3>
      <p>Invest in a good photographer to preserve your special memories forever.</p>
    </div>

  </div>
</div>
      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>Get Wedding Ideas in Your Inbox 💌</h2>
        <p>Subscribe for latest trends & offers</p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

    </div>
  );
}

export default Blog;