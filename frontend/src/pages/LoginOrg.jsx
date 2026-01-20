import "./LoginOrg.css";
import { Link } from "react-router-dom";

function LoginOrg() {
  return (
    <div className="login-page">
      <div className="login-card split">
        {/* LEFT – FORM */}
        <div className="card-left">
          <div className="header">
            <img src="/logo.png" alt="Logo" />
          </div>

          <h1>Organization Login</h1>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Organization ID" />
          <p className="forgotpassword">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>

          <button className="login-button">Login</button>

          <div className="noaccount">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="card-right">
          <img src="/logincitizen.png" alt="Login visual" />
        </div>
      </div>
    </div>
  );
}

export default LoginOrg;
