import "./LoginOrg.css";
import UserDashboard from "../UserDashboard/UserDashboard.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginOrg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [orgid, setOrgid] = useState("");

  const validateOrgid = (e) => {
    const orgid = e.target.value;
    if (orgid.length > 12 || isNaN(orgid)) {
      alert("Please enter a valid 12-digit Organization ID.");
    } else {
      setOrgid(orgid);
    }
  };

  const isLoginEnabled = username && password && orgid;
  return (
    <div className="login-page">
      <div className="login-card split">
        <div className="card-left">
          <div className="header">
            <img src="/logo.png" alt="Logo" />
          </div>

          <h1>Organization Login</h1>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Organization ID"
            value={orgid}
            onChange={validateOrgid}
          />
          <p className="forgotpassword">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>

          <button className="login-button" disabled={!isLoginEnabled}>
            <Link to={isLoginEnabled ? "/OrgDashboard" : "#"}>Login</Link>
          </button>

          <div className="noaccount">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="card-right">
          <img src="/logincitizen.png" alt="Login visual" />
        </div>
      </div>
    </div>
  );
}

export default LoginOrg;
