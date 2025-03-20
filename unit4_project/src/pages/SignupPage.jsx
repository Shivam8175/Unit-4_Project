import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const goToLogin = () => navigate("/login");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !validateName(name)) {
      setMessage(
        "Please enter a valid name (only letters and spaces allowed)."
      );
      return;
    }
    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!password || !validatePassword(password)) {
      setMessage(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://unit4project-da1e8-default-rtdb.firebaseio.com/users.json",
        { name, email, password }
      );
      console.log("Signup response:", response.data);
      setMessage("Signup successful! Redirecting to your profile...");
      sessionStorage.setItem("user", JSON.stringify({ email, password }));
      setTimeout(() => navigate("/LogPage"), 1500);
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {message && <p className="message">{message}</p>}
        <h1 className="login-title">Sign up</h1>
        <div className="logo">
          <img
            src="project_logo.png"
            alt="VoyageSync Logo"
            className="logo-img"
          />
          <h2 className="logo-text">VoyageSync</h2>
        </div>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>
        <div className="social-login">
          <button className="social-button google">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="social-icon"
            />
            Sign up with Google
          </button>
          <button className="social-button facebook">
            <img
              src="https://www.facebook.com/favicon.ico"
              alt="Facebook"
              className="social-icon"
            />
            Sign up with Facebook
          </button>
        </div>
        <p className="signup-link">
          Already have an account?{" "}
          <span className="link-button" onClick={goToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
