import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <h1 onClick={home}>User<span>Prof</span></h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
