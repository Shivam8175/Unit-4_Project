import React from "react";
import { useNavigate } from "react-router-dom";
import "./Deshboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleRequestDemo = () => {
    navigate("/request-demo");
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">
          <img
            src="project_logo.png"
            alt="VoyageSync Logo"
            className="logo-img"
          />
          <span className="logo-text">VoyageSync</span>
        </div>
        <nav className="nav-links">
          <a href="#why-voyagesync">Why VoyageSync?</a>
          <a href="#expense-management">Expense Management</a>
          <a href="#case-studies">Case Studies</a>
        </nav>
        <div className="header-buttons">
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="request-demo-btn" onClick={handleRequestDemo}>
            Request Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="highlight">VoyageSync for Business</span>
            <br />
            Save on Company Travel Expenses
          </h1>
          <p>
            With special corporate rates on flights & hotels, save your travel
            budget by paying less for more features.
          </p>
          <button className="hero-get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <div className="special-offer">
            <span className="offer-icon">🎉</span>
            <span className="offer-text">
              SPECIAL OFFER: Avail Free Date-Change & Free Cancellation* under
              VoyageSync!
            </span>
            <a href="#learn-more" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
        <div className="platform-preview">
          <video
            className="preview-video"
            poster="platform-preview-poster.jpg"
            muted
            loop
            autoPlay
          >
            <source
              src="https://promos.makemytrip.com/images/myBiz/Onboardingv2/mybizlanding.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="play-button">▶</div>
          <div className="explore-text">Explore VoyageSync</div>
        </div>
      </section>

      <div className="scroll-indicator">
        <span>Scroll down for more</span>
        <div className="arrow-down">▼</div>
      </div>
    </div>
  );
};

export default Dashboard;
