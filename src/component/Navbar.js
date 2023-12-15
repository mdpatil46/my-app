import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-warning bg-warning ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="textForm"
                  color='blue'> <span className="yellow-text">Home</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="About">{props.about}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Default Title',
  as: "set default a"
};
