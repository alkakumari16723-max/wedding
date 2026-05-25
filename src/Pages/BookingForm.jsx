import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/BookingForm.css";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    guests: "",
    functions: [],
    budget: "",
    services: [],
    location: "",
    venue: "",
    packageType: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));

    if (name === "location") {
      const filtered = venues.filter((v) => v.location === value);
      setFilteredVenues(filtered);

      setFormData((prev) => ({
        ...prev,
        venue: ""
      }));
    }
  };

  // ================= CHECKBOX =================
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    const updated = checked
      ? [...formData.functions, value]
      : formData.functions.filter((f) => f !== value);

    setFormData((prev) => ({
      ...prev,
      functions: updated
    }));
  };

  // ================= VENUES =================
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/venues");
        setVenues(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVenues();
  }, []);

  // ================= VALIDATION =================
  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name required";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) err.phone = "Invalid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = "Invalid email";
    if (!formData.weddingDate) err.weddingDate = "Select date";
    if (formData.functions.length === 0) err.functions = "Select function";
    if (!formData.location) err.location = "Select location";
    if (!formData.venue) err.venue = "Select venue";
    if (!formData.packageType) err.packageType = "Select package";

    return err;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    try {
      const orderRes = await axios.post(
        "http://localhost:5000/api/create-order",
        { amount: 1000 }
      );

      const order = orderRes.data;

      const options = {
        key: "rzp_test_So2uo3dAeHTH77",
        amount: order.amount,
        currency: "INR",
        name: "Wedding Booking",
        description: "Booking Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            console.log("PAYMENT SUCCESS:", response);

            const bookingData = {
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              weddingDate: formData.weddingDate,
              guests: Number(formData.guests),
              functions: formData.functions,
              budget: formData.budget,
              services: formData.services,
              location: formData.location,
              venue: formData.venue,
              packageType: formData.packageType,
              message: formData.message,

              paymentStatus: "Paid",
              paymentId: response.razorpay_payment_id,
              orderId: order.id
            };

            console.log("SENDING TO BACKEND:", bookingData);

            const bookingRes = await axios.post(
              "http://localhost:5000/api/book",
              bookingData
            );

            console.log("SAVED:", bookingRes.data);

            alert("Booking Successful 💍");

            navigate("/payment-success", {
              state: { booking: bookingRes.data }
            });

          } catch (error) {
            console.log("BOOKING ERROR:", error.response?.data || error.message);
            alert("Booking save failed");
          }
        },

        theme: {
          color: "#ff4d6d"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      console.log("ORDER ERROR:", error);
      alert("Order creation failed");
    }
  };

  // ================= UI =================
  return (
    <div className="booking-page">
      <div className="booking-container">

        <h2>Wedding Booking 💍</h2>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}

          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <input type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} />

          <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} />

          <div className="checkbox-group">
            <label><input type="checkbox" value="Haldi" onChange={handleCheckbox} /> Haldi</label>
            <label><input type="checkbox" value="Mehndi" onChange={handleCheckbox} /> Mehndi</label>
            <label><input type="checkbox" value="Wedding" onChange={handleCheckbox} /> Wedding</label>
            <label><input type="checkbox" value="Reception" onChange={handleCheckbox} /> Reception</label>
          </div>

          <input name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} />

          <select name="packageType" value={formData.packageType} onChange={handleChange}>
            <option value="">Select Package</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="luxury">Luxury</option>
          </select>

          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">Select Location</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Goa">Goa</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>

          <select name="venue" value={formData.venue} onChange={handleChange}>
            <option value="">Select Venue</option>
            {filteredVenues.map((v, i) => (
              <option key={i} value={v.name}>{v.name}</option>
            ))}
          </select>

          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />

          <button type="submit">Pay & Book Now 💍</button>

        </form>

      </div>
    </div>
  );
}

export default BookingForm;