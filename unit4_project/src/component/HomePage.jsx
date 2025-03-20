import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-box">
          <img src="http://localhost:5173/project_logo.png" alt="logo" />
          <h1>VoyageSync</h1>
        </div>
        <button className="home-button">
          <img src="http://localhost:5173/project_logo.png" alt="logo" />
          <h1>Login or Create Account</h1>
        </button>
      </div>

      <div className="home-sign">
        <button>
          <img
            src="https://t4.ftcdn.net/jpg/01/12/62/95/360_F_112629502_IFovdfMReVfLHlHZA56qZxepqy7Gfajn.jpg"
            alt="flight"
          />
          <h1>Flight</h1>
        </button>
        <button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQh06WVfoxM8D5Z4vQHo7qB5gpbLI8DGx-0g&s"
            alt="hotels"
          />
          <h1>Hotels</h1>
        </button>
        <button>
          <img
            src="https://www.shutterstock.com/image-vector/train-simple-logo-vector-illustration-260nw-2412187775.jpg"
            alt="Train"
          />
          <h1>Train</h1>
        </button>
        <button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAErmKCDgWiMuwYkX0AQXEdZoH-F7BjKm6A&s"
            alt="bus"
          />
          <h1>Bus</h1>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
