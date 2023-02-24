import React from "react";
import { NavLink } from "react-router-dom";
import "./apodButtons.scss";

export default function NavButtons() {
  return (
    <div className="apod-btns">
      <NavLink to="/search">
        <span className="btn-text">search by date</span>
        <span className="text-mobile">search</span>
      </NavLink>
      <NavLink to="/gallery">
        <span className="btn-text">view gallery</span>
        <span className="text-mobile">gallery</span>
      </NavLink>
    </div>
  );
}
