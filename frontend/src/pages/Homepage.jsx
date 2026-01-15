import Login from "./LoginCitizen.jsx";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <div className="homepage">
        <div className="topbar">
          <span className="logo">TRACEIMPACT</span>
          <span>traceimpact@gmail.com</span>
          <span>📞 7880601408 / 76961 38229</span>
          <select>
            <option>India</option>
          </select>
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li>How To Help</li>
            <li>News and Stories</li>
            <li>Blogs</li>
            <li>Impact</li>
            <li>About Us</li>
          </ul>

          <div className="nav-actions">
            <button className="donate-btn">Donate</button>
            <button className="login-btn">
              <Link to="/Login">Log In</Link>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-content">
            <h1>
              Blockchain-Based
              <br />
              Donation Transparency
              <br />
              System
            </h1>
            <p>
              Ensure every donation is traceable,
              <br />
              verifiable, and fully transparent.
            </p>
            <button className="hero-btn">Donate Now</button>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917880601408"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
        >
          💬
        </a>
        <div className="organizations-section">
          <button>LOGIN AS ORGANIZATION</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
