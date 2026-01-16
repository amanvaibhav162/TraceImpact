import "./LoginCitizen.css";
import { Link } from "react-router-dom";

function LoginCitizen() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="header">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1>Login page for Citizen</h1>
        <div className="form">
          <p>
            Username:
            <input type="text" placeholder="Enter Username" />
          </p>
          <p>
            Password:
            <input type="password" placeholder="Enter Password" />
          </p>
        </div>
      </div>
      <div className="image">
        <img src="/Ourmission.png" alt="Login" />
      </div>
    </div>
  );
}

export default LoginCitizen;
