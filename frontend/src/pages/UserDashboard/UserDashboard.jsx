import React from "react";
import "./UserDashboard.css";
import { Link } from "react-router-dom";
import UserDonations from "./UserDonations";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const UserDashboard = () => {
  return (
    <div className="dash-wrapper">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN AREA */}
      <main className="main">
        {/* TOP BAR: SEARCH + FILTER + PROFILE */}
        <div className="topbar">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />

            <button className="search-icon-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 015.293 13.707l4 4a1 1 0 01-1.414 1.414l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            </button>
          </div>

          <div className="profile-box">
            <img src="https://i.pravatar.cc/50" className="profile-img" />
            <span className="username">User</span>
          </div>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="categories">
          <button>Health</button>
          <button>Education</button>
          <button>Food</button>
          <button>Women</button>
          <button>Environment</button>
        </div>

        {/* NGO GRID */}
        <div className="ngo-grid">
          <div className="ngo-card">
            <img src="https://source.unsplash.com/400x250/?school" />
            <h3>Akshaya Foundation</h3>
            <p>
              Helping underprivileged children get access to food & education.
            </p>
            <button className="donate-btn">Donate Now</button>
          </div>

          <div className="ngo-card">
            <img src="https://source.unsplash.com/400x250/?water" />
            <h3>Arogya Seva Trust</h3>
            <p>Clean drinking water projects in rural & tribal areas.</p>
            <button className="donate-btn">Donate Now</button>
          </div>

          <div className="ngo-card">
            <img src="https://source.unsplash.com/400x250/?health" />
            <h3>BrightPath Foundation</h3>
            <p>Women empowerment & health support initiatives.</p>
            <button className="donate-btn">Donate Now</button>
          </div>

          <div className="ngo-card">
            <img src="/NGO1.png" />

            <h3>Green Horizons Wildlife Society</h3>
            <p>Protecting wildlife and restoring natural habitats.</p>
            <button className="donate-btn">Donate Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
