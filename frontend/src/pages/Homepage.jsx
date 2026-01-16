import LoginCitizen from "./LoginCitizen.jsx";
import LoginOrg from "./LoginOrg.jsx";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <div className="homepage">
        <div className="topbar">
          <span className="logo">
            <img src="/logo.png" alt="Logo" />
          </span>
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
            <button className="donate-btn">
              <Link to="/LoginCitizen">Donate</Link>
            </button>
            <button className="login-btn">
              <Link to="/LoginCitizen">Log In</Link>
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
            <button className="hero-btn">
              <Link to="/LoginCitizen">DONATE NOW!</Link>
            </button>
            <button className="hero-btn-org-btn">
              <Link to="./LoginOrg">LOGIN AS ORGANIZATION</Link>
            </button>
          </div>
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
      <div className="content-section">
        <div className="Welcome-section">
          <h1>Welcome to TraceImpact</h1>
        </div>
        <div className="mission-vision">
          <h2>Our Mission & Vision</h2>
          <p>
            At TraceImpact, our mission is to revolutionize the donation process
            by leveraging blockchain technology to ensure transparency,
            accountability, and trust. We envision a world where every donor can
            confidently contribute to causes they care about, knowing that their
            donations are tracked and utilized effectively.
          </p>
          <img src="/Ourmission.png" alt="Mission and Vision" />
        </div>
        <div className="Why-Choose-Us">
          <h2>Why Choose TraceImpact?</h2>
          <p>
            At TraceImpact, we leverage cutting-edge blockchain technology to
            bring transparency and accountability to the donation process. Our
            platform ensures that every contribution is traceable, verifiable,
            and fully transparent, empowering donors to make informed decisions
            and see the real impact of their generosity.
          </p>
          <img src="/WhyChooseUs.jpeg" alt="Why Choose Us" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>© 2026 TraceImpact. All rights reserved.</p>
        <div className="Help">
          Let Us Help You:
          <ul>
            <li>Your Profile</li>
            <li>Find Donations</li>
            <li>Donation History</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
