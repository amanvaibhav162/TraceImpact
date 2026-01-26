import "./OrgDashboard.css";
import { Link } from "react-router-dom";
import VerificationPanel from "./VerificationPanel";
import Logo2 from "../../components/Logo2.jsx";
export default function OverviewDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/">
          <Logo2 />
        </Link>

        <nav className="nav">
          <div className="nav-item active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
              />
            </svg>
            Dashboard
          </div>
          <div className="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 3v18h22V3zm4 6h4.5v2H5zm0 4h4.5v2H5zm13-3a2.5 2.5 0 0 1-1.32 2.204A3.5 3.5 0 0 1 19 15.5v1h-7v-1c0-1.519.967-2.811 2.32-3.296A2.5 2.5 0 1 1 18 10"
              />
            </svg>
            <Link to="/VerificationPanel">Verification Panel</Link>
          </div>
          <div className="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
              />
              <path
                fill="currentColor"
                d="m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
              />
            </svg>
            <Link to="/LoginOrg" className="nav-item">
              LogOut
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <h1 className="org-title">Akshaya Patra Foundation</h1>
        {/* Stats Cards */}
        <section className="stats">
          <div className="stat-card">
            <p>Total Donations Received</p>
            <h2>₹12,40,000</h2>
          </div>

          <div className="stat-card">
            <p>Average Donors (per month)</p>
            <h2>17</h2>
          </div>

          <div className="stat-card">
            <p>Pending Proof Uploads</p>
            <h2>7</h2>
          </div>

          <div className="stat-card">
            <p>Trust Score</p>
            <h2>4.5/5</h2>
          </div>
        </section>

        {/* Donations + Activity */}
        <section className="content">
          {/* Donations Table */}
          <div className="donations">
            <div className="tabs">
              <span className="active">All Donations</span>
              <span>Current Donations</span>
              <span>Verified Donations</span>
              <span>Unverified Donations</span>
            </div>

            <div className="table">
              <div className="table-header">
                <span>Donor ID</span>
                <span>Donation ID</span>
                <span>Amount</span>
                <span>Date</span>
                <span>Status</span>
              </div>

              <div className="table-row">
                <span>A3010880</span>
                <span>B020022</span>
                <span>₹113,000</span>
                <span>Early Jun</span>
                <span className="verified">Verified</span>
              </div>

              <div className="table-row">
                <span>A3010682</span>
                <span>B020023</span>
                <span>₹4,800</span>
                <span>2 April</span>
                <span className="unverified">Unverified</span>
              </div>

              <div className="table-row">
                <span>A3010686</span>
                <span>B020024</span>
                <span>₹2,500</span>
                <span>3 days ago</span>
                <span className="verified">Verified</span>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="activity">
            <h3>Activity Log</h3>

            <ul>
              <li>12 Donations received / week</li>
              <li>5 Donations Verified</li>
              <li className="highlight">7 Donations Unverified</li>
              <li>Rated 4.1 / 5.0 / week</li>
              <li className="danger">1 Report Received ✕</li>
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews">
          <h3>Reviews</h3>

          <div className="review-card">
            <strong>Mayank Singh ⭐⭐⭐⭐☆</strong>
            <p>
              I donated ₹10,000 to Akshaya Patra through TraceImpact and the
              experience was very reassuring. What I really liked was being able
              to track exactly how my donation was used, along with seeing
              actual bills and receipts uploaded as proof...
            </p>
          </div>

          <div className="review-card">
            <strong>Aman ⭐⭐⭐⭐☆</strong>
            <p>
              Donating to NGOs has always been a concern for me due to the lack
              of transparency. However, using TraceImpact changed my
              perspective. The platform's verification process and detailed
              reports gave me confidence that my contributions were making a
              real difference...
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
