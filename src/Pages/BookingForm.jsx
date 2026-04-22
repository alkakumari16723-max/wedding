import { useState } from "react";
import axios from "axios";
import  "../Styles/BookingForm.css";
import { useNavigate } from "react-router-dom";
import REV3 from "../assets/rev3.webp";


function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    guests: "",
    functions: [],
    budget: "",
    services: "",
    location: "",
    message: "",
    paymentStatus: "Pending"
  });

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // checkbox (functions)
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        functions: [...formData.functions, value]
      });
    } else {
      setFormData({
        ...formData,
        functions: formData.functions.filter((f) => f !== value)
      });
    }
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/book", formData);
      alert("Booking Submitted!");

      // redirect to payment page
      navigate("/payment");

    } catch (err) {
      console.log(err);
      alert("Error submitting form");
    }
  };

  return (
  <div className="booking-page">

    <div className="booking-container">
      <h2>Wedding Booking Form 💍</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />

        <label>Wedding Date</label>
        <input type="date" name="weddingDate" onChange={handleChange} required />

        <input name="guests" type="number" placeholder="Number of Guests" onChange={handleChange} />

        <label>Functions</label>
        <div className="checkbox-group">
          <label><input type="checkbox" value="Haldi" onChange={handleCheckbox} /> Haldi</label>
          <label><input type="checkbox" value="Mehndi" onChange={handleCheckbox} /> Mehndi</label>
          <label><input type="checkbox" value="Wedding" onChange={handleCheckbox} /> Wedding</label>
          <label><input type="checkbox" value="Reception" onChange={handleCheckbox} /> Reception</label>
        </div>

        <input name="budget" placeholder="Budget" onChange={handleChange} />
        <input name="services" placeholder="Services Required" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />

        <textarea name="message" placeholder="Additional Message" onChange={handleChange}></textarea>

        <button type="submit">Book Now</button>

      </form>
    </div>


  </div>
);}
export default BookingForm;