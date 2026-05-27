const express = require("express");
const router = express.Router();
const Venue = require("../models/Venue");

// Get venues by location
router.get("/", async (req, res) => {
  try {
    const { location } = req.query;

    const filter = location ? { location } : {};

    const venues = await Venue.find(filter);
    res.json(venues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;