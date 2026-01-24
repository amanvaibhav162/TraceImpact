import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo.jsx";
import Logo2 from "../Logo2.jsx";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const showlogo1 = ["/", "/LoginCitizen", "/LoginOrg"].includes(
    location.pathname,
  );

  return (
    <aside className="sidebar">
      <h2 className="logo">
        <Link to="/">{showlogo1 ? <Logo /> : <Logo2 />}</Link>
      </h2>

      {/* MENU */}
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/UserDashboard"
            className={isActive("/UserDashboard") ? "active" : ""}
          >
            <span className="icon">🏠</span> Home
          </Link>
        </li>
        <li>
          <Link to="/NGOs" className={isActive("/NGOs") ? "active" : ""}>
            <span className="icon">🏢</span> NGOs
          </Link>
        </li>
        <li>
          <Link
            to="/UserDonations"
            className={isActive("/UserDonations") ? "active" : ""}
          >
            <span className="icon">💰</span> Your Donations
          </Link>
        </li>
      </ul>

      {/* BADGES */}
      <div className="badge-box">
        <h3>Your Badges</h3>

        <div className="badge-item">
          <img src="/badge3.png" alt="" />
          <span>1st Donation</span>
        </div>

        <div className="badge-item">
          <img src="/badge1.png" alt="" />
          <span>Diverse Donor</span>
        </div>

        <div className="badge-item">
          <img src="/badge2.png" alt="" />
          <span>Thousand Donor</span>
        </div>
      </div>

      {/* SETTINGS */}
      <div className="settings-btn">
        <span className="icon">⚙️</span>
        Settings
      </div>
    </aside>
  );
}

export default Sidebar;
