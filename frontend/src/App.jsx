import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import LoginCitizen from "./pages/LoginCitizen.jsx";
import LoginOrg from "./pages/LoginOrg.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/LoginOrg" element={<LoginOrg />} />
      <Route path="/LoginCitizen" element={<LoginCitizen />} />
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
