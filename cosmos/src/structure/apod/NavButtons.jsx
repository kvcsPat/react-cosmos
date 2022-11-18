import React from "react";
import { NavLink } from "react-router-dom";

export default function NavButtons() {
  return (
    <div className="nav-buttons">
      <NavLink to="/search">search by date</NavLink>
      <NavLink to="/gallery">view gallery</NavLink>
    </div>
  );
}
