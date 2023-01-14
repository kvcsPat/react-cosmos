import React from "react";
import "./solarSystem.css";

export default function SolarSystem() {
  return (
    <div className="solar-system">
      <div className="sun"></div>
      <div className="mercury-outline">
        <div className="mercury"></div>
      </div>
      <div className="venus-outline">
        <div className="venus"></div>
      </div>
      <div className="earth-outline">
        <div className="earth"></div>
      </div>
      <div className="mars-outline">
        <div className="mars"></div>
      </div>
      <div className="jupiter-outline">
        <div className="jupiter"></div>
      </div>
      <div className="saturn-outline">
        <div className="saturn"></div>
        <div className="ring"></div>
      </div>
      <div className="uranus-outline">
        <div className="uranus"></div>
      </div>
      <div className="neptune-outline">
        <div className="neptune"></div>
      </div>
    </div>
  );
}
