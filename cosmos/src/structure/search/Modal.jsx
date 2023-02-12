import React from "react";
import { NavLink } from "react-router-dom";
import "./modal.css";

export default function SearchModal({ toggle }) {
  return (
    <div className="search-modal">
      <div className="card">
        <h1>Houston, we have a problem!</h1>
        <p>
          It seems you have entered an incorrect date. Try something else!
          Having trouble with the date format? Here is an example:
        </p>
        <NavLink to="/search/apod/date=2005-04-01">2005 04 01</NavLink>
        <button onClick={() => toggle(false)}>
          <span className="material-icons">close</span>
        </button>
      </div>
    </div>
  );
}
