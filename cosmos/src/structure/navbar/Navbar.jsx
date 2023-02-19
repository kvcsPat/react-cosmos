import React from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../../assets/logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logoDark} alt="nasa-logo" />
      <div className="nav-btns">
        <NavLink to="/">home</NavLink>
        <NavLink to="/apod">apod</NavLink>
        <NavLink to="/search">search</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
    </nav>
  );
}
