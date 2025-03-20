import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogPage.css";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the logged-in user's email from localStorage or sessionStorage
        const storedUser =
          JSON.parse(localStorage.getItem("user")) ||
          JSON.parse(sessionStorage.getItem("user"));

        if (!storedUser || !storedUser.email) {
          // If no user is found, redirect to login
          navigate("/login");
          return;
        }

        const userEmail = storedUser.email;

        // Fetch all users from Firebase
        const response = await axios.get(
          "https://unit4project-da1e8-default-rtdb.firebaseio.com/users.json"
        );
        const users = response.data;

        // Find the user with the matching email
        const userFound = Object.values(users || {}).find(
          (user) => user.email === userEmail
        );

        if (userFound) {
          setEmail(userFound.email);
          setPassword(userFound.password || "••••••••"); // Display password or placeholder
        } else {
          setError("User not found.");
          navigate("/login");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Clear user data from storage
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="profile-settings-container">
      <div className="sidebar">
        <div className="profile-icon">
          <div className="icon-circle">
            <span className="user-icon">👤</span>
            <span className="edit-icon">✏️</span>
          </div>
        </div>
        <h3>PERSONAL PROFILE</h3>
        <ul>
          <li>Profile</li>
          <li className="active">Login Details</li>
          <li>Co-Travellers</li>
          <li>Logged In Devices</li>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="section">
          <h2>Login Details</h2>
          <p>Manage your mobile, email address and password</p>
          <div className="login-details">
            <div className="detail-item">
              <label>MOBILE NUMBER</label>
              <a href="#add-mobile">+ Add your mobile number</a>
            </div>
            <div className="detail-item">
              <label>EMAIL ID</label>
              <span>{email || "Not available"}</span>
              <span className="verified">✔ Verified</span>
            </div>
            <div className="detail-item">
              <label>PASSWORD</label>
              <span id="pass">{password || "••••••••"}</span>
              <a href="#" className="change-password">
                Change Password?
              </a>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Co-Travellers</h2>
          <p>Add, Remove and Update your traveller list</p>
          <button className="add-traveller">ADD TRAVELLER</button>
        </div>

        <div className="section">
          <h2>Logged In Devices</h2>
          <p>Check all the devices where your account is logged in</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
