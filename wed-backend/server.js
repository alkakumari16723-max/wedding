require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/AuthRoute");
const venueRoutes = require("./routes/venueRoutes");
const enquiryRoutes = require("./routes/EnquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());





app.use("/api", require("./routes/BookingRoutes"));
app.use("/api", require("./routes/PaymentRoutes"));
app.use("/api", require("./routes/contactRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));
app.use("/api/auth", authRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api", enquiryRoutes);





mongoose.connect("mongodb://127.0.0.1:27017/wedding")
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});


app.listen(5000, () => console.log("Server running on port 5000"));