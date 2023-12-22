import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleDarkmode } from "../reduxSlice/mySlice";


export default function Navbar(props) {
  const [menu, setMenu] = useState(false);
  const [darkmode, setDarkmode] = useState(false)
  const dispatch = useDispatch()
  const closeMenu = () => {
    setMenu(false);
  };

  const myDark = () => {
  dispatch(toggleDarkmode(darkmode))
    setDarkmode(!darkmode)
  }
  
  return (
   
    <nav className={`navbar navbar-expand-lg ${darkmode ? `navbar-dark bg-dark` : `navbar-light bg-light`} `} >
    <div className="container">
      <Link className="navbar-brand" to="/">
        <span className="font-weight-bold fs-3">{props.title}</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setMenu(!menu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${menu ? " show" : ""}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/textForm" onClick={closeMenu}>
              <span className="text-warning">Text Area</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator" onClick={closeMenu}>
              <span className="text-warning">Calculator</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeMenu}>
              <span className="text-warning">{props.about}</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={myDark}/>
  <label className={`form-check-label ${darkmode ?`text-white`:`text-darl`}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </nav>

  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Default Title",
  as: "set default a",
};
