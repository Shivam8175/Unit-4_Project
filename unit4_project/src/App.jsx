import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deshboard from "./component/Deshboard";
import RequestDemo from "./component/Requestdemo";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogPage from "./pages/LogPage";
import HomePage from "./component/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/Deshboard" element={<Deshboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LogPage" element={<LogPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
