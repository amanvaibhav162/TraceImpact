import "./OrgDashboard.css";
import { Link } from "react-router-dom";
import VerificationPanel from "./VerificationPanel";
import Logo from "../../components/Logo";
export default function OverviewDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="nav">
          <div className="nav-item active">Dashboard</div>
          <Link to="/VerificationPanel" className="nav-item">
            Verification Panel
          </Link>
          <Link to="/LoginOrg" className="nav-item">
            LogOut
          </Link>
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
