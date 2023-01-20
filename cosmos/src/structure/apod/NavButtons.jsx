import React from "react";
import { NavLink } from "react-router-dom";
import "./navButtons.css";

export default function NavButtons() {
  return (
    <div className="apod-btns">
      <NavLink to="/search">search by date</NavLink>
      <NavLink to="/gallery">view gallery</NavLink>
    </div>
  );
}
