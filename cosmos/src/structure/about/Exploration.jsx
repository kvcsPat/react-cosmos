import React from "react";
import astornaut from "../../assets/astornaut.svg";
import "./exploration.css";

export default function Exploration() {
  return (
    <div className="exploration">
      <img src={astornaut} alt="astornaut" />
      <div className="star" id="star-01"></div>
      <div className="star" id="star-02"></div>
      <div className="star" id="star-03"></div>
      <div className="star" id="star-04"></div>
      <div className="star" id="star-05"></div>
    </div>
  );
}
