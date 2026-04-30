import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  const [loading, setLoading] = useState(false);

  if (!booking) {
    return <h2 style={{ textAlign: "center" }}>No booking found ❌</h2>;
  }

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      // 🔹 Load Razorpay
      const resScript = await loadRazorpay();
      if (!resScript) {
        alert("Razorpay SDK failed to load ❌");
        setLoading(false);
        return;
      }

      // 🔹 Create order
      const { data } = await axios.post(
        "http://localhost:5000/api/create-order",
        { amount: 5000 }
      );

      if (!data || !data.id) {
        alert("Order creation failed ❌");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_ShjcM28TxDs1PB", // ✅ your real key
        amount: data.amount,
        currency: "INR",
        name: "Dream Wedding 💍",
        description: "Wedding Booking Payment",
        order_id: data.id,

        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:5000/api/verify-payment",
              {
                ...response,              // 🔥 IMPORTANT FIX
                bookingId: booking._id
              }
            );

            if (verifyRes.data.success) {
              alert("Payment Successful ✅");
              navigate("/success");
            } else {
              alert("Payment Failed ❌");
            }

          } catch (err) {
            console.log(err);
            alert("Payment verification failed ❌");
          }
        },

        modal: {
          ondismiss: function () {
            alert("Payment cancelled ❌");
          }
        },

        prefill: {
          name: booking.name,
          email: booking.email,
          contact: booking.phone
        },

        theme: {
          color: "#d6336c"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Payment failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h2>Complete Payment 💳</h2>

        <div className="booking-info">
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <p><strong>Phone:</strong> {booking.phone}</p>
          <p><strong>Date:</strong> {booking.weddingDate}</p>
        </div>

        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default Payment;