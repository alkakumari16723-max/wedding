const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
} = require("../controllers/contactController");

const { sendReply } = require("../controllers/replyController");

// user
router.post("/contact", createContact);

// admin
router.get("/contacts", getContacts);
router.post("/reply", sendReply);

module.exports = router;