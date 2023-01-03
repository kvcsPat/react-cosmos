import React from "react";
import ApodComponent from "../apod/Component";

export default function CardModal({ apod, toggle }) {
  return (
    <div className="card_modal">
      <button onClick={() => toggle(false)}>CLOSE</button>
      <ApodComponent apod={apod} />
    </div>
  );
}
