import "./LoginCitizen.css";
import UserDashboard from "../UserDashboard/UserDashboard.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../components/Logo.jsx";
function LoginCitizen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const validateAadhaar = (e) => {
    const aadhaar = e.target.value;
    if (aadhaar.length > 12 || isNaN(aadhaar)) {
      alert("Please enter a valid 12-digit Aadhaar number.");
    } else {
      setAadhaar(aadhaar);
    }
  };

  const isLoginEnabled = username && password && aadhaar;

  return (
    <div className="login-page">
      <div className="login-card split">
        <div className="card-left">
          <Link to="/">
            <Logo />
          </Link>
          <h1>Citizen Login</h1>
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
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={validateAadhaar}
          />

          <p className="forgotpassword">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>

          <button className="login-button" disabled={!isLoginEnabled}>
            <Link to={isLoginEnabled ? "/UserDashboard" : "#"}>Login</Link>
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

export default LoginCitizen;
