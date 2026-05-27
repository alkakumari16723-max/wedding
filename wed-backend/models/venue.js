const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
});

module.exports = mongoose.model("Venue", venueSchema);