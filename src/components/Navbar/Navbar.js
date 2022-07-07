import React from "react";
import nav_logo from "../../image/nav-logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-5 border-bottom mb-5 py-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={nav_logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Estatery
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
              <a className="nav-link active" aria-current="page">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Property
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <button
              type="button"
              className="d-inline-block mx-1 btn btn-outline-primary"
            >
              Login
            </button>
            <button
              className="d-inline-block mx-1 btn btn-primary"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
