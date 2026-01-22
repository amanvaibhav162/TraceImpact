import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import LoginCitizen from "./pages/Loginpages/LoginCitizen.jsx";
import LoginOrg from "./pages/Loginpages/LoginOrg.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import OrgDashboard from "./pages/OrgDashboard/OrgDashboard.jsx";
import VerificationPanel from "./pages/OrgDashboard/VerificationPanel.jsx";
import UserDonations from "./pages/UserDashboard/UserDonations";
import Aboutus from "./pages/Homepage/Subpages/Aboutus.jsx";
import Howtohelp from "./pages/Homepage/Subpages/Howtohelp.jsx";
import News from "./pages/Homepage/Subpages/News.jsx";
import Blogs from "./pages/Homepage/Subpages/Blogs.jsx";
import Impact from "./pages/Homepage/Subpages/Impact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login/citizen" element={<LoginCitizen />} />
      <Route path="/login/org" element={<LoginOrg />} />
      <Route path="/dashboard/user" element={<UserDashboard />} />
      <Route path="/dashboard/org" element={<OrgDashboard />} />
      <Route
        path="/dashboard/org/verification"
        element={<VerificationPanel />}
      />
      <Route path="/dashboard/user/donations" element={<UserDonations />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/howtohelp" element={<Howtohelp />} />
      <Route path="/news" element={<News />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/impact" element={<Impact />} />
    </Routes>
  );
}

export default App;
