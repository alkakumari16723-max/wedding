const router = require("express").Router();

const Booking = require("../models/Booking");
const { sendBookingEmails } = require("../utils/sendEmail");

router.post("/book", async (req, res) => {
  try {

    console.log("🔥 BOOKING API HIT");
    console.log("REQ BODY:", req.body);

    const {
      name,
      phone,
      email,
      weddingDate,
      guests,
      functions,
      budget,
      services,
      location,
      venue,
      packageType,
      message,
      paymentStatus,
      paymentId,
      orderId
    } = req.body;

    // ✅ Create booking object
    const booking = new Booking({
      name,
      phone,
      email,
      weddingDate,
      guests,
      functions,
      budget,
      services,
      location,
      venue,
      packageType,
      message,
      paymentStatus,
      paymentId,
      orderId
    });

    // ✅ Save booking
    const savedBooking = await booking.save();

    // ✅ Check MongoDB save
    console.log("💾 SAVED BOOKING:", savedBooking);

    // ✅ Send email
    await sendBookingEmails(savedBooking);

    res.status(201).json({
      success: true,
      booking: savedBooking
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Failed to save booking"
    });
  }
});

module.exports = router;