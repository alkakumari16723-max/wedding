import "../Styles/blog.css";
import blogHero from "../assets/blogHero.jpeg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Wedding Venues in Goa 🌴",
    desc: "Discover the most beautiful beachside venues for your dream wedding.",
    extra: "Goa offers a perfect blend of beaches, luxury resorts...",
    img: blog1,
    category: "Destination",
  },
  {
    id: 2,
    title: "Jaipur Royal Wedding Guide 👑",
    desc: "Plan a luxurious palace wedding in Jaipur.",
    extra: "Jaipur is known for its royal palaces...",
    img: blog2,
    category: "Luxury",
  },
  {
    id: 3,
    title: "Budget Wedding Planning Tips 💰",
    desc: "Save money without compromising experience.",
    extra: "Start with a fixed budget...",
    img: blog3,
    category: "Budget",
  },
  {
    id: 4,
    title: "Latest Wedding Decor Trends ✨",
    desc: "Trending decor ideas for modern weddings.",
    extra: "Floral installations, pastel themes...",
    img: blog4,
    category: "Trends",
  },
];

function Blog() {
  const [email, setEmail] = useState("");
const [error, setError] = useState("");

  const handleSubscribe = () => {
    // reset error
    setError("");

    // ❌ empty check
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    // ❌ email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return;
    }

    // ✅ success
    alert("Subscribed successfully 🎉");

    // optional: clear input
    setEmail("");
  };

  

  return (
    <div className="blog-page">

      {/* HERO */}
      <div className="blog-hero">
        <div className="blog-hero-content">
          <h1>Wedding Blog 💍</h1>
          <p>Ideas, inspiration & expert tips</p>
        </div>
      </div>

      {/* FEATURED */}
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

      {/* BLOG GRID */}
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <span className="tag">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <p className="extra-text">{blog.extra}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TIPS */}
      <div className="tips-section">
        <h2>Wedding Planning Tips</h2>

        <div className="tips-grid">
          <div className="tip-card">
            <h3>Set Budget</h3>
            <p>Start with a clear budget.</p>
          </div>

          <div className="tip-card">
            <h3>Book Early</h3>
            <p>Secure venue 6–12 months early.</p>
          </div>

          <div className="tip-card">
            <h3>Hire Planner</h3>
            <p>Reduces stress significantly.</p>
          </div>

          <div className="tip-card">
            <h3>Choose Theme</h3>
            <p>Keep everything consistent.</p>
          </div>

          <div className="tip-card">
            <h3>Timeline</h3>
            <p>Plan schedule properly.</p>
          </div>

          <div className="tip-card">
            <h3>Photography</h3>
            <p>Capture best memories.</p>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>Get Wedding Ideas in Your Inbox 💌</h2>
        <p>Subscribe for latest trends & offers</p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

    </div>
  );
}

export default Blog;