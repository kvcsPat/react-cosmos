import React from "react";
import "./solarSystem.css";

export default function SolarSystem() {
  return (
    <div className="solar-system">
      <div className="sun"></div>
      <div className="mercury-orbit">
        <div className="mercury"></div>
      </div>
      <div className="venus-orbit">
        <div className="venus"></div>
      </div>
      <div className="earth-orbit">
        <div className="earth"></div>
      </div>
      <div className="mars-orbit">
        <div className="mars"></div>
      </div>
      <div className="jupiter-orbit">
        <div className="jupiter"></div>
      </div>
      <div className="saturn-orbit">
        <div className="saturn"></div>
        <div className="ring"></div>
      </div>
      <div className="uranus-orbit">
        <div className="uranus"></div>
      </div>
      <div className="neptune-orbit">
        <div className="neptune"></div>
      </div>
    </div>
  );
}
