import React from "react";
import { useParams } from "react-router-dom";
import kenobi from "../../assets/kenobi.jpg";
import "../apod/component.scss";

export default function ErrorComponent() {
  const params = useParams();

  return (
    <div className="apod">
      <div className="visual">
        <img src={kenobi} alt="confused obi-wan kenobi" />
      </div>
      <div className="info">
        <h1>"Impossible. Perhaps the archives are incomplete."</h1>
        <h2>{params.value}</h2>
        <p>
          It seems we are having trouble getting data for this day. Maybe the
          padawan was right, and someone erased it from the archive memory...
        </p>
        <p>Truly wonderful a mind of a child is, hm?</p>
      </div>
    </div>
  );
}
