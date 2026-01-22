import React, { useState } from "react";
import "./UserDonations.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo.jsx";
import Sidebar from "../../components/sidebar/SideBar.jsx";

const UserDonations = () => {
  const [search, setSearch] = useState("");

  const donations = [
    {
      date: "10 December 2025",
      amount: "₹50,000",
      ngo: "Akshaya Foundation",
      logo: "/akshayapatra.png",
      description:
        "Non-profit organization dedicated to nourishing millions of schoolchildren by providing freshly cooked mid-day meals.",
      id: "TRC-AP-2025-00124",
      cause: "Mid-day Meals | Education",
    },
    {
      date: "10 December 2025",
      amount: "₹5,000",
      ngo: "Smile Foundation",
      logo: "/smile.png",
      description:
        "NGO that empowers underprivileged children and families through nutrition, education, and livelihood programs.",
      id: "TRC-SM-2025-00839",
      cause: "Child Education & Healthcare",
    },
  ];

  const filtered = donations.filter((item) =>
    item.ngo.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="don-wrapper">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="main">
        <h2>Your Donations:</h2>

        {/* Search Bar */}
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search your donations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>

        <hr />

        {/* Donation Cards */}
        {filtered.map((item, index) => (
          <div className="donCard" key={index}>
            <div className="left">
              <p>
                <strong>DONATED ON</strong>
                <br />
                {item.date}
              </p>
              <p>
                <strong>AMOUNT</strong>
                <br />
                {item.amount}
              </p>
              <p>
                <strong>TO</strong>
                <br />
                {item.ngo}
              </p>
            </div>

            <div className="mid">
              <img src={item.logo} className="ngoLogo" alt="" />
              <p className="desc">{item.description}</p>
              <p className="sub">
                Donation ID: {item.id}
                <br />
                Cause: {item.cause}
              </p>
            </div>

            <div className="right">
              <button className="track">TRACK DONATION</button>
              <button className="report">Report</button>
              <button className="review">Write Review</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default UserDonations;
