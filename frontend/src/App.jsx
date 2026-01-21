import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import LoginCitizen from "./pages/Loginpages/LoginCitizen.jsx";
import LoginOrg from "./pages/Loginpages/LoginOrg.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import OrgDashboard from "./pages/OrgDashboard/OrgDashboard.jsx";
import VerificationPanel from "./pages/OrgDashboard/VerificationPanel.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/LoginOrg" element={<LoginOrg />} />
      <Route path="/LoginCitizen" element={<LoginCitizen />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/OrgDashboard" element={<OrgDashboard />} />
      <Route path="/VerificationPanel" element={<VerificationPanel />} />
    </Routes>
  );
}

export default App;
