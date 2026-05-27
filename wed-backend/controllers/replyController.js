const { transporter } = require("../utils/sendEmail");

// ✅ Admin reply
exports.sendReply = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        message: "Email and message required",
      });
    }

    await transporter.sendMail({
      to: email,
      subject: "Reply from Wedding Planner",
      html: `<p>${message}</p>`,
    });

    res.json({ success: true, message: "Reply sent" });
  } catch (err) {
    res.status(500).json({ message: "Error sending reply" });
  }
};