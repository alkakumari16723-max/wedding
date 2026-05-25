import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "../Styles/Login.css";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      alert(res.data.message);

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (

    <div className="login-page">

      <form
        onSubmit={handleSubmit}
        className="login-form"
      >

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

        <p>
          New User ?
          <Link to="/register">Register</Link>
         
        </p>

      </form>

    </div>
  );
}

export default Login;