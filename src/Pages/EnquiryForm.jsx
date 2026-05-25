

import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../Styles/EnquiryForm.css";

function EnquiryForm() {

  const locationData = useLocation();

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",

    // AUTO FILL
    location:
      locationData.state?.location || "",

    packageType:
      locationData.state?.packageType || "",

    guests: "",
    budget: "",
    message: ""
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "http://localhost:5000/api/enquiry",

        formData
      );

      console.log(res.data);

      alert(
        "Enquiry Sent Successfully 💍"
      );

      // RESET

      setFormData({

        name: "",
        phone: "",
        email: "",

        location:
          locationData.state?.location || "",

        packageType:
          locationData.state?.packageType || "",

        guests: "",
        budget: "",
        message: ""
      });

    } catch (err) {

      console.log(err);

      alert(
        "Failed To Send Enquiry"
      );
    }
  };


  return (

    <div className="enquiry-page">

      <div className="enquiry-box">


        <div className="enquiry-left">

          <span className="tag">
            Premium Wedding Packages
          </span>

          <h1>
            Plan Your Dream Wedding 💍
          </h1>

          <p>
            Get the best wedding venues,
            luxury decor, catering and
            complete wedding planning
            services for your dream day.
          </p>

        </div>


        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Enquire Now
          </h2>


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <div className="input-group">

            <label>
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              placeholder="Location"
              readOnly
            />

          </div>


          <div className="input-group">

            <label>
              Package
            </label>

            <input
              type="text"
              name="packageType"
              value={formData.packageType}
              placeholder="Package"
              readOnly
            />

          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
          />

          <input
            type="text"
            name="budget"
            placeholder="Wedding Budget"
            value={formData.budget}
            onChange={handleChange}
          />


          <textarea
            name="message"
            placeholder="Tell us about your wedding"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">

            Send Enquiry

          </button>

        </form>

      </div>

    </div>
  );
}

export default EnquiryForm;