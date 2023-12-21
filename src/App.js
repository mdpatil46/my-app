import "./App.css";
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
      <Routes>
        <Route index element={<DefaultPage />} />
        <Route path="/textForm" element={<TextForm  darkmode={darkmode} myDark={myDark}/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
