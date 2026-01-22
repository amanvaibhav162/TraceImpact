import React from "react";
import { Link } from "react-router-dom";
import "./Subpage.css";

function HelpPage() {
return (
<div className="page">
<header className="head">
<h1>How to Help</h1>
<p>Your contribution fuels the transparency revolution.</p>
</header>

  <div className="pagecontent">
    <div className="layout">
      <div className="infocard">
        <h3>Crypto Donations</h3>
        <p>
          Send funds directly via smart contracts. Every cent is tracked
          on-chain from the moment you hit send.
        </p>
      </div>

      <div className="infocard">
        <h3>Volunteer for Audits</h3>
        <p>
          Join our decentralized network of auditors to help verify
          real-world impact for reported grievances.
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

export default HelpPage;