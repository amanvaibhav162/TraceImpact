import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.jsx";
import LoginOrg from "./pages/Loginpages/LoginOrg.jsx";
import LoginCitizen from "./pages/Loginpages/LoginCitizen.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import OrgDashboard from "./pages/OrgDashboard/OrgDashboard.jsx";
import VerificationPanel from "./pages/OrgDashboard/VerificationPanel.jsx";

// ⭐ NEW PAGE YOU CREATED
import UserDonations from "./pages/UserDonations/UserDonations.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/LoginOrg" element={<LoginOrg />} />
      <Route path="/LoginCitizen" element={<LoginCitizen />} />

      {/* User Dashboard */}
      <Route path="/UserDashboard" element={<UserDashboard />} />

      {/* NEW Donations Page */}
      <Route path="/UserDonations" element={<UserDonations />} />

      {/* Organization Dashboard */}
      <Route path="/OrgDashboard" element={<OrgDashboard />} />
      <Route path="/VerificationPanel" element={<VerificationPanel />} />
    </Routes>
  );
}

export default App;
