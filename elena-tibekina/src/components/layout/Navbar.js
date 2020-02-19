import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="logo" href="#">
        <img
          className="d-inline-block align-top"
          src={`${process.env.PUBLIC_URL}/pokeball.png`}
          alt='logo'
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to="/">Main</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/caught">Caught</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
