import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/apod">apod</NavLink>
      <NavLink to="/search">search</NavLink>
      <NavLink to="/gallery">gallery</NavLink>
      <NavLink to="/about">about</NavLink>
    </nav>
  );
}
