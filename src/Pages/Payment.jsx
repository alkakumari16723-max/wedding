import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  const [loading, setLoading] = useState(false);

  
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
    if (!booking) {
      alert("No booking found");
      return;
    }

    setLoading(true);

    try {
      // 1. Load Razorpay SDK
      const isLoaded = await loadRazorpay();

      if (!isLoaded) {
        alert("Razorpay SDK failed to load");
        setLoading(false);
        return;
      }

      // 2. Create Order from backend
      const { data: order } = await axios.post(
        "http://localhost:5000/api/create-order",
        {
          amount: 500, // change dynamic later
        }
      );

      // 3. Razorpay Options
      const options = {
        key: "rzp_test_SlBZZUec7P4naT",
        amount: order.amount,
        currency: order.currency,
        name: "Wedding Booking 💍",
        description: "Booking Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:5000/api/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingId: booking._id,
              }
            );

            if (verifyRes.data.success) {
              alert("Payment Successful 🎉");
              navigate("/success");
            } else {
              alert("Payment Verification Failed ❌");
            }
          } catch (err) {
            console.log(err);
            alert("Verification error ❌");
          }
        },

        prefill: {
          name: booking.name,
          email: booking.email,
          contact: booking.phone,
        },

        theme: {
          color: "#d6336c",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment failed ❌");
    }

    setLoading(false);
  };

  if (!booking) {
    return <h2 style={{ textAlign: "center" }}>No booking found ❌</h2>;
  }

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h2>Complete Payment 💳</h2>

        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>

        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default Payment;