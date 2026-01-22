import React from "react";
import { Link } from "react-router-dom";
import "./Subpage.css";
  
function ImpactPage() {
return (
<div className="page">
<header className="head">
<h1>Traceable Impact</h1>
<p>Real data. Real people. No administrative leakage.</p>
</header>

  <div className="pagecontent">
    <div className="layout">
      <div
        className="infocard"
        style={{ borderColor: "#10b981" }}
      >
        <h2 style={{ fontSize: "3rem", margin: "10px 0" }}>
          $0.00
        </h2>
        <p>Funds currently in escrow</p>
      </div>

      <div
        className="infocard"
        style={{ borderColor: "#8b5cf6" }}
      >
        <h2 style={{ fontSize: "3rem", margin: "10px 0" }}>
          0
        </h2>
        <p>Verified beneficiaries</p>
      </div>
    </div>

    <p style={{ marginTop: "30px" }}>
      TraceImpact uses immutable ledgers to ensure that 100% of your
      donation reaches the intended target. Our smart grievance
      redressal system ensures accountability.
    </p>

    <Link to="/" className="backhomebtn">
      ← Back to Home
    </Link>
  </div>
</div>


);
}

export default ImpactPage;