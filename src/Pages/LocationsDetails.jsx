

import { useParams } from "react-router-dom";
import locations from "../data/locations";

function LocationDetails() {
  const { id } = useParams();

  const location = locations.find((loc) => loc.id === parseInt(id));

  if (!location) return <h2>Location not found</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{location.name} Wedding 💍</h1>

      <img src={location.image} alt={location.name} width="400" />

      <p>{location.description}</p>
      <h3>Budget: {location.price}</h3>

      <h3>Top Venues:</h3>
      <ul>
        {location.venues.map((venue, index) => (
          <li key={index}>{venue}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocationDetails;