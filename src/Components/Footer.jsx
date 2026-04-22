import"../Styles/Footer.css"; 

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>Dream Wedding 💍</h2>
          <p>Making your dream wedding come true with love & perfection.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Booking</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Venue Booking</li>
            <li>Decoration</li>
            <li>Catering</li>
            <li>Photography</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 info@dreamwedding.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Dream Wedding | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;