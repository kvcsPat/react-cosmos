import React from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../../assets/logo_dark.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logoDark} alt="nasa-logo" />
      <div className="nav-btns">
        <NavLink className="nav-btn" to="/">
          home
        </NavLink>
        <NavLink className="nav-btn" to="/apod">
          apod
        </NavLink>
        <NavLink className="nav-btn" to="/search">
          search
        </NavLink>
        <NavLink className="nav-btn" to="/gallery">
          gallery
        </NavLink>
        <NavLink className="nav-btn" to="/about">
          about
        </NavLink>
      </div>
    </nav>
  );
}
