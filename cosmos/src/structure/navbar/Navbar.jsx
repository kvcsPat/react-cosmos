import React from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../../assets/logo_dark.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logoDark} alt="nasa_logo" />
      <div className="nav_btns">
        <NavLink className="nav_btn" to="/">
          home
        </NavLink>
        <NavLink className="nav_btn" to="/apod">
          apod
        </NavLink>
        <NavLink className="nav_btn" to="/search">
          search
        </NavLink>
        <NavLink className="nav_btn" to="/gallery">
          gallery
        </NavLink>
        <NavLink className="nav_btn" to="/about">
          about
        </NavLink>
      </div>
    </nav>
  );
}
