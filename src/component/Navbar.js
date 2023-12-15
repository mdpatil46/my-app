import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
       <span className="font-weight-bold fs-3"> {props.title}</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/textForm">
              <span className="text-warning">Text Area</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">
              <span className="text-warning">Calculator</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <span className="text-warning">{props.about}</span>
            </Link>
          </li>
        </ul>
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
