import "./App.css";
import React from "react";
import About from "./component/About";
import Calculator from "./component/Calculator";
import DefaultPage from "./component/DefaultPage";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextFrom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Navbar title="EasyText" about="About Us" />
        <div className="container my-3">
      <Routes>
        <Route index element={<DefaultPage />} />
        <Route path="/textForm" element={<TextForm/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
        </div>
    </Router>
  );
}

export default App;
