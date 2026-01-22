import React from "react";
import { Link } from "react-router-dom";
import "./Subpage.css";

function NewsPage() {
return (
<div className="page">
<header className="head">
<h1>News & Stories</h1>
<p>Updates from the frontlines of transparent giving.</p>
</header>

  <div className="pagecontent">
    <div className="layout">
      <div className="infocard">
        <span className="date">Jan 22, 2026</span>
        <h3>TraceImpact v1.2 Released</h3>
        <p>
          Multi-signature wallet support for larger organizations is now
          live on the verification panel.
        </p>
      </div>

      <div className="infocard">
        <span className="date">Jan 15, 2026</span>
        <h3>Impact Tracking Milestone</h3>
        <p>
          Over 500 successful donations have been verified through our
          on-chain redressal system.
        </p>
      </div>

      <div className="infocard">
        <span className="date">Dec 20, 2025</span>
        <h3>New Partner on Board</h3>
        <p>
          Global Relief NGO has joined the network, pledging full
          transparency for its 2026 projects.
        </p>
      </div>
    </div>

    <Link to="/" className="backhomebtn">
      ← Back to Home
    </Link>
  </div>
</div>


);
}

export default NewsPage;