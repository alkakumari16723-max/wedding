import { useState } from "react";
import axios from "axios";
import "../Styles/BookingForm.css";
import { useNavigate } from "react-router-dom";

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

  const [errors, setErrors] = useState({});

  // 🔹 handle input (with phone restriction)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // allow only numbers in phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });

    // remove error while typing
    setErrors({ ...errors, [name]: "" });
  };

  // 🔹 checkbox
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    let updatedFunctions = checked
      ? [...formData.functions, value]
      : formData.functions.filter((f) => f !== value);

    setFormData({ ...formData, functions: updatedFunctions });

    if (updatedFunctions.length > 0) {
      setErrors({ ...errors, functions: "" });
    }
  };

  // 🔹 validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit Indian number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.weddingDate) {
      newErrors.weddingDate = "Select wedding date";
    }

    if (formData.functions.length === 0) {
      newErrors.functions = "Select at least one function";
    }

    return newErrors;
  };

  // 🔹 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/book",
        formData
      );

      alert("Booking Submitted! ✅");

      navigate("/payment", { state: { booking: res.data } });

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

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            name="phone"
            type="tel"
            maxLength="10"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Wedding Date</label>
          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
          />
          {errors.weddingDate && <p className="error">{errors.weddingDate}</p>}

          <input
            name="guests"
            type="number"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
          />

          <label>Functions</label>
          <div className="checkbox-group">
            <label><input type="checkbox" value="Haldi" onChange={handleCheckbox} /> Haldi</label>
            <label><input type="checkbox" value="Mehndi" onChange={handleCheckbox} /> Mehndi</label>
            <label><input type="checkbox" value="Wedding" onChange={handleCheckbox} /> Wedding</label>
            <label><input type="checkbox" value="Reception" onChange={handleCheckbox} /> Reception</label>
          </div>
          {errors.functions && <p className="error">{errors.functions}</p>}

          <input
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
          />

          <input
            name="services"
            placeholder="Services Required"
            value={formData.services}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book Now</button>

        </form>
      </div>
    </div>
  );
}

export default BookingForm;