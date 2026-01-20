import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="dash-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">TRACEIMPACT</h2>

        {/* MENU ITEMS */}
        <ul className="sidebar-menu">
          {/* HOME */}
          <li className="active">
            <span className="icon">
              <svg fill="white" width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z" />
              </svg>
            </span>
            Home
          </li>

          {/* NGOs */}
          <li>
            <span className="icon">
              <svg fill="white" width="22" height="22" viewBox="0 0 24 24">
                <path d="M4 3h16v18H4V3zm2 2v14h12V5H6z" />
              </svg>
            </span>
            NGOs
          </li>

          {/* Donations */}
          <li>
            <span className="icon">
              <svg fill="white" width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 21l-8-9h5V3h6v9h5l-8 9z" />
              </svg>
            </span>
            Your Donations
          </li>
        </ul>

        {/* BADGES SECTION (NOT CLICKABLE) */}
        <div className="badge-box">
          <h3>Your Badges</h3>

          <div className="badge-item">
            <img src="badge3.png" />
            <span>1st Donation</span>
          </div>

          <div className="badge-item">
            <img src="badge1.png" />
            <span>Diverse Donor</span>
          </div>

          <div className="badge-item">
            <img src="badge2.png" />
            <span>Thousand Donor </span>
          </div>
        </div>

        {/* SETTINGS AT BOTTOM */}
        <div className="settings-btn">
          <span className="icon">
            <svg fill="white" width="22" height="22" viewBox="0 0 24 24">
              <path d="M12 8a4 4 0 110 8 4 4 0 010-8zm9.4 4a7.38 7.38 0 00-.26-2l2.1-1.64-2-3.46-2.49 1a7.6 7.6 0 00-3.44-2L15 0h-6l-.31 3.9a7.6 7.6 0 00-3.44 2l-2.49-1-2 3.46 2.1 1.64a7.38 7.38 0 000 4L.24 14l2 3.46 2.49-1a7.6 7.6 0 003.44 2L9 24h6l.31-3.9a7.6 7.6 0 003.44-2l2.49 1 2-3.46-2.1-1.64c.17-.65.26-1.32.26-2z" />
            </svg>
          </span>
          Settings
        </div>
      </aside>

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
