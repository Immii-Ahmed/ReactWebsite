import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.contact}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {props.number}%
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-outline-${props.mode==="dark"?"light":"dark"}`} type="submit">
              Search
            </button>
          </form>
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-3`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.textChange}</label>
      </div>
        </div>
      </div>
    </nav>
  );
}

// it defines what type of props should be accessed and use in Ui or properties
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string,
  number: PropTypes.number,
};

// defaultProps used for to display by default properties of the compenent
Navbar.defaultProps = {
  title: "Immii Tech",
  contact: "Contact Us",
};
