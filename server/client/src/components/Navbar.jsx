// eslint-disable-next-line no-use-before-define
import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            TO-DO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-4 ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu me-auto" aria-labelledby="navbarDropdown">
                  <li>
                  <Link class="dropdown-item" to="/signup">
                    Register
                  </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Logout">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ToDo">
                  To-Do
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
