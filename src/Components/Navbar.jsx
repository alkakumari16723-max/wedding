import { Link } from "react-router-dom";
import "../Styles/navbar.css"; 
import logo2 from "../assets/logo2.jpg"; 
import locations from "../data/locations";




function Navbar() {
  return (
    <nav className="navbar">
      
<div className="logo">
  <img src={logo2} alt="Wedding Planner Logo" />
</div>
      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        
        {/* Dropdown */}
        <li className="dropdown">
          <span>Locations </span>

          <ul className="dropdown-menu">
            {locations.map((loc) => (
              <li key={loc.id}>
                <Link to={loc.path}>{loc.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/booking">booking</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;