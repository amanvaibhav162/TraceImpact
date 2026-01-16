import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import LoginCitizen from "./pages/LoginCitizen.jsx";
import LoginOrg from "./pages/LoginOrg.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/LoginOrg" element={<LoginOrg />} />
      <Route path="/LoginCitizen" element={<LoginCitizen />} />
    </Routes>
  );
}

export default App;
