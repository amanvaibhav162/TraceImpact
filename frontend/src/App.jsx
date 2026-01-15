import "./App.css";
import React from "react";
import Login from "./pages/LoginCitizen.jsx";
import Homepage from "./pages/Homepage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
