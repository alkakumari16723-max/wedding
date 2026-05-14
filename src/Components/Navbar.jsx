import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/navbar.css"; 
import logo2 from "../assets/logo2.jpg"; 
import locations from "../data/locations";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo2} alt="Wedding Planner Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

      
        <li className={`dropdown ${locationOpen ? "active" : ""}`}>
          <span onClick={() => setLocationOpen(!locationOpen)}>
            Locations
          </span>

          <ul className="dropdown-menu">
            {locations.map((loc) => (
              <li key={loc.id}>
                <Link to={loc.path} onClick={() => setMenuOpen(false)}>
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            Booking
          </Link>
        </li>

      
        <li className={`dropdown ${serviceOpen ? "active" : ""}`}>
          <span onClick={() => setServiceOpen(!serviceOpen)}>
            Services
          </span>

          <ul className="dropdown-menu">
            <li><Link to="/services/pre-wedding">Pre-Wedding</Link></li>
            <li><Link to="/services/wedding">Wedding</Link></li>
            <li><Link to="/services/reception">Reception</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
  
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;