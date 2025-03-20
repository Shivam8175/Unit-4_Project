import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setMessage("Please enter a password.");
      return;
    }

    try {
      const response = await axios.get(
        "https://unit4project-da1e8-default-rtdb.firebaseio.com/users.json"
      );
      const users = response.data;
      const userFound = Object.values(users || {}).some(
        (user) => user.email === email && user.password === password
      );

      if (userFound) {
        setMessage("Login successful!");
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify({ email }));
        } else {
          sessionStorage.setItem("user", JSON.stringify({ email }));
        }
        setTimeout(() => navigate("/LogPage"), 1000);
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  const goToSignup = () => navigate("/signup");

  return (
    <div className="login-container">
      <div className="login-box">
        {message && <p className="message">{message}</p>}
        <h1 className="login-title">Login</h1>
        <div className="logo">
          <img
            src="project_logo.png"
            alt="VoyageSync Logo"
            className="logo-img"
          />
          <h2 className="logo-text">VoyageSync</h2>
        </div>
        <form onSubmit={handleLogin}>
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
          <div id="options">
            <div id="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember Me</label>
            </div>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="social-login">
          <button className="social-button google">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="social-icon"
            />
            Login with Google
          </button>
          <button className="social-button facebook">
            <img
              src="https://www.facebook.com/favicon.ico"
              alt="Facebook"
              className="social-icon"
            />
            Login with Facebook
          </button>
        </div>
        <p className="signup-link">
          Don’t have an account?{" "}
          <span className="link-button" onClick={goToSignup}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
