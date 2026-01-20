import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import LoginCitizen from "./pages/LoginCitizen.jsx";
import LoginOrg from "./pages/LoginOrg.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import OrgDashboard from "./pages/OrgDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/LoginOrg" element={<LoginOrg />} />
      <Route path="/LoginCitizen" element={<LoginCitizen />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/OrgDashboard" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App;
