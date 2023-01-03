import React from "react";

export default function SearchModal({ toggle }) {
  return (
    <div className="search_modal">
      <h2>Houston, we have a problem!</h2>
      <p>It seems you have entered an incorrect date.</p>
      <button onClick={() => toggle(false)}>CLOSE</button>
    </div>
  );
}
