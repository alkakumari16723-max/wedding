

import locations from "../data/locations";
import { useNavigate } from "react-router-dom";
import "../styles/location.css";

function Locations() {
  const navigate = useNavigate();

  return (
    <div className="locations-page">
      <h1>Wedding Locations 💍</h1>

      <div className="locations-grid">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="location-card"
            onClick={() => navigate(loc.path)}  
          >
            <img src={loc.image} alt={loc.name} />
            <h2>{loc.name}</h2>
            <p>{loc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;