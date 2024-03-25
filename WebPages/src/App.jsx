import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
