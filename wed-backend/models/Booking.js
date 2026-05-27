const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  weddingDate: String,
  guests: Number,
  functions: [String],
  budget: String,

  // services array (frontend me array ja raha hai)
  services: [Array],

  location: String,
  venue: String,

  // ✅ NEW FIELD
  packageType: String,

  message: String,

  paymentStatus: String,
  paymentId: String,
  orderId: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);