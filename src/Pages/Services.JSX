import servicesData from "../data/servicesData";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h1>Our Services 💍</h1>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(service.path)}
          >
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;