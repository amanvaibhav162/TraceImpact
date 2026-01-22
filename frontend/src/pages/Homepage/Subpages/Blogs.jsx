import React from "react";
import { Link } from "react-router-dom";
import "./Subpage.css";

function Blogs() {
  return (
    <div className="page">
      <header className="head">
        <h1>Engineering & Impact Blog</h1>
        <p>Deep dives into blockchain, transparency, and social tech.</p>
      </header>

      <div className="pagecontent">
        <div className="layout">
          <article className="infocard">
            <h3>The Problem with Opaque Giving</h3>
            <p>Why traditional donation systems fail and how public ledgers restore trust in charity.</p>
          </article>
          
          <article className="infocard">
            <h3>Smart Contracts for Social Good</h3>
            <p>A technical guide on how TraceImpact uses automated logic to release funds based on milestones.</p>
          </article>
          <article className="infocard">
            <h3>Decentralized Grievance Redressal</h3>
            <p>How we solved the problem of "fake reports" using community-driven verification nodes.</p>
          </article>
        </div>
        
        <Link to="/" className="backhomebtn">Back to Home</Link>
      </div>
    </div>
  );
}

export default Blogs;