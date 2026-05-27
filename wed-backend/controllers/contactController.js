const Contact = require("../models/Contact");
const { sendContactEmails } = require("../utils/sendEmail");

// ✅ Create Contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 🔹 Empty validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔹 Name validation
    if (name.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 3 characters",
      });
    }

    // 🔹 Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // 🔹 Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }

    // 🔹 Message validation
    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters",
      });
    }

    // ✅ Save to DB
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone,
      message: message.trim(),
    });

    // ✅ Send email (auto + owner)
    await sendContactEmails(newContact);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (err) {
    console.error("CONTACT ERROR:", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ✅ Get all contacts (Admin Panel)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: contacts,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching data",n
    });
  }
};