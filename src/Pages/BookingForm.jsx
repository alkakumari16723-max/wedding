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
    message: ""
  });

  const [errors, setErrors] = useState({});

  // 🔹 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  // 🔹 CHECKBOX
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    let updated = checked
      ? [...formData.functions, value]
      : formData.functions.filter((f) => f !== value);

    setFormData((prev) => ({
      ...prev,
      functions: updated
    }));

    if (updated.length > 0) {
      setErrors((prev) => ({
        ...prev,
        functions: ""
      }));
    }
  };

  // 🔹 VALIDATION
  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name required";

    if (!/^[6-9]\d{9}$/.test(formData.phone))
      err.phone = "Invalid phone number";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Invalid email";

    if (!formData.weddingDate) err.weddingDate = "Select date";

    if (formData.functions.length === 0)
      err.functions = "Select at least one function";

    return err;
  };

  // 🔥 SUBMIT (FIXED + SAFE FLOW)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    try {
      // STEP 1: CREATE ORDER
      const orderRes = await axios.post(
        "http://localhost:5000/api/create-order",
        {
          amount: 1000 // change dynamic later
        }
      );

      const order = orderRes.data;

      // STEP 2: OPEN RAZORPAY
      const options = {
        key: "rzp_test_So2uo3dAeHTH77",
        amount: order.amount,
        currency: "INR",
        name: "Wedding Booking",
        description: "Booking Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            // STEP 3: SAVE BOOKING AFTER PAYMENT
            const bookingRes = await axios.post(
              "http://localhost:5000/api/book",
              {
                ...formData,
                paymentStatus: "Paid",
                paymentId: response.razorpay_payment_id,
                orderId: order.id
              }
            );

            alert("Payment Successful ");

            navigate("/payment-success", {
              state: { booking: bookingRes.data }
            });
          } catch (error) {
            console.log(error);
            alert("Booking save failed after payment");
          }
        },

        theme: {
          color: "#ff4d6d"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      console.log("Submit Error:", error);
      alert("Something went wrong while creating order");
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
            maxLength="10"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

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
            placeholder="Guests"
            value={formData.guests}
            onChange={handleChange}
          />

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
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">
            Pay & Book Now 💍
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingForm;