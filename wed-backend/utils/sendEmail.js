require("dotenv").config();

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});



const sendBookingEmails = async (data) => {
  try {

    
    await transporter.sendMail({
      from: `"Wedding Planner 💍" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject: "New Wedding Booking 🎉",

      html: `
        <div style="font-family: Arial; padding:20px;">

          <h2 style="color:#d6336c;">
            New Booking Received 💍
          </h2>

          <p><b>Name:</b> ${data.name}</p>

          <p><b>Email:</b> ${data.email}</p>

          <p><b>Phone:</b> ${data.phone}</p>

          <p><b>Wedding Date:</b> ${data.weddingDate}</p>

          <p><b>Guests:</b> ${data.guests}</p>

          <p><b>Location:</b> ${data.location}</p>

          <p><b>Functions:</b> ${data.functions}</p>

          <p><b>Budget:</b> ${data.budget}</p>

          <p><b>Services:</b> ${data.services}</p>

          <p><b>Message:</b> ${data.message}</p>

        </div>
      `
    });


    
    await transporter.sendMail({
      from: `"Wedding Planner 💍" <${process.env.EMAIL_USER}>`,

      to: data.email,

      subject: "Booking Confirmed 💖",

      html: `
        <div style="font-family: Arial; padding:20px;">

          <h2 style="color:#d6336c;">
            Booking Confirmed 💍
          </h2>

          <p>Hello <b>${data.name}</b>,</p>

          <p>
            Your wedding booking has been confirmed successfully 🎉
          </p>

          <h3>Your Booking Details:</h3>

          <p><b>Name:</b> ${data.name}</p>

          <p><b>Email:</b> ${data.email}</p>

          <p><b>Phone:</b> ${data.phone}</p>

          <p><b>Wedding Date:</b> ${data.weddingDate}</p>

          <p><b>Guests:</b> ${data.guests}</p>

          <p><b>Location:</b> ${data.location}</p>

          <p><b>Functions:</b> ${data.functions}</p>

          <p><b>Budget:</b> ${data.budget}</p>

          <p><b>Services:</b> ${data.services}</p>

          <p><b>Message:</b> ${data.message}</p>

          <br/>

          <p>
            Our team will contact you soon ❤️
          </p>

          <p>
            Thank you for choosing Wedding Planner 💖
          </p>

        </div>
      `
    });

    console.log("Booking emails sent ✅");

  } catch (error) {

    console.log("BOOKING EMAIL ERROR ❌:", error);

  }
};




const sendContactEmails = async (data) => {
  try {

  
    await transporter.sendMail({
      from: `"Wedding Planner 💍" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject: "New Contact Message 💌",

      html: `
        <div style="font-family: Arial; padding:20px;">

          <h2 style="color:#d6336c;">
            New Contact Message 💌
          </h2>

          <p><b>Name:</b> ${data.name}</p>

          <p><b>Email:</b> ${data.email}</p>

          <p><b>Phone:</b> ${data.phone}</p>

          <p><b>Message:</b> ${data.message}</p>

        </div>
      `
    });


    
    await transporter.sendMail({
      from: `"Wedding Planner 💍" <${process.env.EMAIL_USER}>`,

      to: data.email,

      subject: "We Received Your Message 💌",

      html: `
        <div style="font-family: Arial; padding:20px;">

          <h2 style="color:#d6336c;">
            Message Received 💌
          </h2>

          <p>Hello <b>${data.name}</b>,</p>

          <p>
            We have received your message successfully 🎉
          </p>

          <h3>Your Details:</h3>

          <p><b>Name:</b> ${data.name}</p>

          <p><b>Email:</b> ${data.email}</p>

          <p><b>Phone:</b> ${data.phone}</p>

          <p><b>Message:</b> ${data.message}</p>

          <br/>

          <p>
            Our team will contact you soon ❤️
          </p>

          <p>
            Thank you for contacting Wedding Planner 💍
          </p>

        </div>
      `
    });

    console.log("Contact emails sent ✅");

  } catch (error) {

    console.log("CONTACT EMAIL ERROR :", error);

  }
};



module.exports = {sendBookingEmails,sendContactEmails};