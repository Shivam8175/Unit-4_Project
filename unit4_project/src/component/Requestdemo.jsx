import React, { useState } from "react";
import "./Requestdemo.css";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      setMessage("Please fill in all required fields.");
      return;
    }
    // Simulate form submission (e.g., send data to an API)
    setMessage(
      "Thank you! Your demo request has been submitted. We'll contact you soon."
    );
    setFormData({ name: "", email: "", company: "", role: "" });
  };

  return (
    <div className="request-demo-container">
      <header className="request-demo-header">
        <div className="logo">
          <img
            src="project_logo.png"
            alt="VoyageSync Logo"
            className="logo-img"
          />
          <span className="logo-text">VoyageSync</span>
        </div>
      </header>

      <section className="request-demo-section">
        <div className="request-demo-content">
          <h1>
            Request a Demo of <span className="highlight">VoyageSync</span>
          </h1>
          <p>
            Discover how VoyageSync can streamline your company’s travel
            expenses with special corporate rates on flights and hotels.
            Schedule a demo today and see the difference!
          </p>
          <div className="trust-indicators">
            <span>Trusted by 500+ Companies</span>
            <span>⭐ 4.8/5 Rating</span>
          </div>
        </div>

        <div className="request-demo-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Business Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your business email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter your role (optional)"
              />
            </div>
            <button type="submit" className="submit-btn">
              Request Demo
            </button>
          </form>
          {message && <p className="form-message">{message}</p>}
        </div>
      </section>
    </div>
  );
};

export default RequestDemo;
