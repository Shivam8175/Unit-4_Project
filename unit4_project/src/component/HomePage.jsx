import React, { useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("One Way");
  const [formData, setFormData] = useState({
    from: "Delhi, DEL, Delhi Airport India",
    to: "Mumbai, BOM, Chhatrapati Shivaji International",
    departureDate: "2025-03-22",
    returnDate: "",
    travellers: 1,
    travelClass: "Economy",
    fareType: "Regular",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedButton, setSelectedButton] = useState("Flight");

  const gotologin = () => {
    navigate("/login");
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
    if (e.target.value === "One Way") {
      setFormData({ ...formData, returnDate: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const mockResults = [
      {
        flight: "Air India AI-101",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 5000
            : formData.fareType === "Student"
            ? 4500
            : formData.fareType === "Senior Citizen"
            ? 4600
            : formData.fareType === "Armed Forces"
            ? 4400
            : 4700, // Doctor and Nurses
      },
      {
        flight: "IndiGo 6E-202",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 4800
            : formData.fareType === "Student"
            ? 4300
            : formData.fareType === "Senior Citizen"
            ? 4400
            : formData.fareType === "Armed Forces"
            ? 4200
            : 4500, // Doctor and Nurses
      },
      {
        flight: "SpiceJet SG-303",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 4600
            : formData.fareType === "Student"
            ? 4100
            : formData.fareType === "Senior Citizen"
            ? 4200
            : formData.fareType === "Armed Forces"
            ? 4000
            : 4300, // Doctor and Nurses
      },
      {
        flight: "Vistara UK-404",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 5500
            : formData.fareType === "Student"
            ? 5000
            : formData.fareType === "Senior Citizen"
            ? 5100
            : formData.fareType === "Armed Forces"
            ? 4900
            : 5200, // Doctor and Nurses
      },
      {
        flight: "GoAir G8-505",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 4700
            : formData.fareType === "Student"
            ? 4200
            : formData.fareType === "Senior Citizen"
            ? 4300
            : formData.fareType === "Armed Forces"
            ? 4100
            : 4400, // Doctor and Nurses
      },
      {
        flight: "AirAsia AK-606",
        from: formData.from,
        to: formData.to,
        departure: formData.departureDate,
        return: formData.returnDate || "N/A",
        price:
          formData.fareType === "Regular"
            ? 4900
            : formData.fareType === "Student"
            ? 4400
            : formData.fareType === "Senior Citizen"
            ? 4500
            : formData.fareType === "Armed Forces"
            ? 4300
            : 4600, // Doctor and Nurses
      },
    ];
    setSearchResults(mockResults);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleBookNow = (flight) => {
    // For now, just navigate to a booking page (you can create this later)
    navigate(`/book/${flight}`);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-box">
          <img src="http://localhost:5173/project_logo.png" alt="logo" />
          <h1>VoyageSync</h1>
        </div>
        <button onClick={gotologin} className="home-button">
          <img src="http://localhost:5173/project_logo.png" alt="logo" />
          <h1>Login or Create Account</h1>
        </button>
      </div>

      <div className="home-sign">
        {["Flight", "Hotels", "Train", "Bus", "Holiday", "Cabs"].map(
          (buttonName, index) => (
            <button
              key={index}
              className={selectedButton === buttonName ? "active-button" : ""}
              onClick={() => handleButtonClick(buttonName)}
            >
              <img
                src={
                  buttonName === "Flight"
                    ? "https://t4.ftcdn.net/jpg/01/12/62/95/360_F_112629502_IFovdfMReVfLHlHZA56qZxepqy7Gfajn.jpg"
                    : buttonName === "Hotels"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQh06WVfoxM8D5Z4vQHo7qB5gpbLI8DGx-0g&s"
                    : buttonName === "Train"
                    ? "https://www.shutterstock.com/image-vector/train-simple-logo-vector-illustration-260nw-2412187775.jpg"
                    : buttonName === "Bus"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAErmKCDgWiMuwYkX0AQXEdZoH-F7BjKm6A&s"
                    : buttonName === "Holiday"
                    ? "https://thumbs.dreamstime.com/b/classic-black-white-tropical-beach-scene-ideal-summer-vacation-graphics-minimalist-decor-tropical-beach-scene-346335241.jpg"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIN41Zmt9abG1LQblC5rY-aqOWhAd8GLkdA&s"
                }
                alt={buttonName}
              />
              <h1>{buttonName}</h1>
            </button>
          )
        )}
      </div>

      <div className="home-main">
        {/* Trip Type Selection */}
        <div className="home-main-box">
          <label className="main">
            <input
              type="radio"
              name="tripType"
              value="One Way"
              checked={tripType === "One Way"}
              onChange={handleTripTypeChange}
            />
            <span>One Way</span>
          </label>
          <label className="main">
            <input
              type="radio"
              name="tripType"
              value="Round Trip"
              checked={tripType === "Round Trip"}
              onChange={handleTripTypeChange}
            />
            <span>Round Trip</span>
          </label>
          <label className="main">
            <input
              type="radio"
              name="tripType"
              value="Multi City"
              checked={tripType === "Multi City"}
              onChange={handleTripTypeChange}
            />
            <span>Multi City</span>
          </label>
        </div>

        {/* Flight Search Form */}
        <div className="flight-search-form">
          {/* From and To Cities */}
          <div className="form-group">
            <label>From</label>
            <select
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            >
              <option value="Delhi, DEL, Delhi Airport India">
                Delhi (DEL)
              </option>
              <option value="Mumbai, BOM, Chhatrapati Shivaji International">
                Mumbai (BOM)
              </option>
              <option value="Bangalore, BLR, Kempegowda International">
                Bangalore (BLR)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>To</label>
            <select name="to" value={formData.to} onChange={handleInputChange}>
              <option value="Mumbai, BOM, Chhatrapati Shivaji International">
                Mumbai (BOM)
              </option>
              <option value="Delhi, DEL, Delhi Airport India">
                Delhi (DEL)
              </option>
              <option value="Bangalore, BLR, Kempegowda International">
                Bangalore (BLR)
              </option>
            </select>
          </div>

          {/* Departure and Return Dates */}
          <div className="form-group">
            <label>Departure</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
            />
          </div>

          <div className="form-group">
            <label>Return</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              disabled={tripType === "One Way"} // Disable for One Way
              min={formData.departureDate} // Return date must be after departure
            />
          </div>

          {/* Travellers & Class */}
          <div className="form-group">
            <label>Travellers & Class</label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleInputChange}
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
            </select>
            <input
              type="number"
              name="travellers"
              value={formData.travellers}
              onChange={handleInputChange}
              min="1"
              max="10"
              style={{ width: "60px", marginLeft: "10px" }}
            />
          </div>
        </div>

        {/* Special Fares */}
        <div className="special-fares">
          <h3>Select a Special Fare</h3>
          <label className="fare-option">
            <input
              type="radio"
              name="fareType"
              value="Regular"
              checked={formData.fareType === "Regular"}
              onChange={handleInputChange}
            />
            <span>Regular</span>
          </label>
          <label className="fare-option">
            <input
              type="radio"
              name="fareType"
              value="Student"
              checked={formData.fareType === "Student"}
              onChange={handleInputChange}
            />
            <span>Student</span>
          </label>
          <label className="fare-option">
            <input
              type="radio"
              name="fareType"
              value="Senior Citizen"
              checked={formData.fareType === "Senior Citizen"}
              onChange={handleInputChange}
            />
            <span>Senior Citizen</span>
          </label>
          <label className="fare-option">
            <input
              type="radio"
              name="fareType"
              value="Armed Forces"
              checked={formData.fareType === "Armed Forces"}
              onChange={handleInputChange}
            />
            <span>Armed Forces</span>
          </label>
          <label className="fare-option">
            <input
              type="radio"
              name="fareType"
              value="Doctor and Nurses"
              checked={formData.fareType === "Doctor and Nurses"}
              onChange={handleInputChange}
            />
            <span>Doctor and Nurses</span>
          </label>
        </div>

        {/* Search Button */}
        <button className="search-button" onClick={handleSearch}>
          SEARCH
        </button>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h2>Search Results</h2>
            {searchResults.map((result, index) => (
              <div key={index} className="result-item">
                <p>Flight: {result.flight}</p>
                <p>
                  {result.from} to {result.to}
                </p>
                <p>Departure: {result.departure}</p>
                <p>Return: {result.return}</p>
                <p>Price: ₹{result.price}</p>
                <button
                  className="book-now-button"
                  onClick={() => handleBookNow(result.flight)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
