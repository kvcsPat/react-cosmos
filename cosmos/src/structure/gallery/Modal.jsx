import React from "react";
import ApodComponent from "../apod/Component";
import "./modal.scss";

export default function CardModal({ apod, toggle }) {
  return (
    <div className="card-modal">
      <div className="apod-card">
        <ApodComponent apod={apod} />
        <button onClick={() => toggle(false)}>
          <span className="material-icons">close</span>
        </button>
      </div>
    </div>
  );
}
