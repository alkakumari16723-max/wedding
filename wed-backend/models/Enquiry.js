// ================= models/Enquiry.js =================

const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({

  name: String,

  phone: String,

  email: String,

  location: String,

  packageType: String,

  guests: Number,

  budget: String,

  message: String

}, {
  timestamps: true
});

module.exports =
  mongoose.model(
    "Enquiry",
    enquirySchema
  );