import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./stytle.css";
export default class NavbarHome extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="nav-display navbar navbar-expand-lg navbar-light fixed-top bg-nav ">
            <div className=" container px-4">
              <a className="navbar-brand " href="/home">
                MouriM
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse-display collapse navbar-collapse bg-nav2"
                id="navbarSupportedContent"
              >
                <ul className=" navbar-nav ml-auto ">
                  <li className=" nav-item active mr-3">
                    <NavLink
                      exact
                      activeClassName="btn1"
                      className="nav-link"
                      to="/home"
                    >
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li className="nav-item mr-3">
                    <NavLink
                      activeClassName="btn1"
                      className="nav-link"
                      to="/movie-list"
                    >
                      Phim
                    </NavLink>
                  </li>
                  <li className="nav-item mr-3">
                    <NavLink
                      activeClassName="btn1"
                      className="nav-link"
                      to="/ungdung"
                    >
                      Ứng Dụng
                    </NavLink>
                  </li>
                </ul>
                <ul className=" navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="btn1"
                      className="nav-link"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
