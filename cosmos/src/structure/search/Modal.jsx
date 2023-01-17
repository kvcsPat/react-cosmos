import React from "react";
import "./modal.css";

export default function SearchModal({ toggle }) {
  return (
    <div className="search-modal-background">
      <div className="search-modal">
        <h1 className="search-modal-title">Houston, we have a problem!</h1>
        <p className="search-modal-text">
          It seems you have entered an incorrect date. Try something else!
          Having trouble with the date format? Here is an example:
        </p>
        <p className="search-modal-example">2005 04 01</p>
        <button className="search-modal-btn" onClick={() => toggle(false)}>
          <span class="material-symbols-sharp">close</span>
        </button>
      </div>
    </div>
  );
}
