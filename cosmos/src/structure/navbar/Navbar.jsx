import React from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../../assets/logo.svg";
import "./navbar.scss";
import useToggle from "../../hooks/useToggle";

export default function Navbar() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <nav className={`${isOn ? "dark-bg" : "no-dark-bg"}`}>
      <NavLink className="logo" to="/">
        <img src={logoDark} alt="nasa-logo" />
      </NavLink>
      <div className={`nav-btns ${isOn ? "opened" : ""}`}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/apod">apod</NavLink>
        <NavLink to="/search">search</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink to="/about">about</NavLink>
        <button className="close-menu" onClick={() => toggleIsOn(false)}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <button className="open-menu" onClick={() => toggleIsOn(true)}>
        <span className="material-icons">menu</span>
      </button>
    </nav>
  );
}
