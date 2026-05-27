const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});



router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount required" });
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.json(order);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});



router.post("/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      await Booking.findByIdAndUpdate(bookingId, {
        paymentStatus: "Paid",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id
      });

      return res.json({ success: true });

    } else {
      return res.status(400).json({ success: false });
    }

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;