import React from "react";
import { Link } from "react-router-dom";
import "./Subpage.css";

function AboutUs() {
return (
<div className="page">
<header className="head">
<h1>About TraceImpact</h1>
<p>
The intersection of decentralized tech and social responsibility.
</p>
</header>

  <div className="pagecontent">
    <section>
      <h2>Our Vision</h2>
      <p>
        TraceImpact was born from the realization that traditional philanthropy
        is kind of a <em>"black box"</em>.
        Donors give money but rarely see the granular details of how it's spent.
        By leveraging <strong>Blockchain Technology</strong>, we provide an
        immutable ledger of every transaction.
      </p>
    </section>

    <div className="layout">
      <div className="infocard">
        <h3>Zero Leakage</h3>
        <p>
          We eliminate administrative middlemen to ensure funds reach the
          intended recipient directly.
        </p>
      </div>

      <div className="infocard">
        <h3>Decentralized Audit</h3>
        <p>
          Our Smart Grievance Redressal system allows community members to
          verify the success of projects.
        </p>
      </div>
    </div>

    <Link to="/" className="backhomebtn">
      Back to Home
    </Link>
  </div>
</div>


);
}

export default AboutUs;