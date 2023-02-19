import React from "react";
import satellite from "../../assets/satellite.svg";
import signalS from "../../assets/signal-01.svg";
import signalM from "../../assets/signal-02.svg";
import signalL from "../../assets/signal-03.svg";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading">
        <img className="satellite" src={satellite} alt="satellite" />
        <img className="signal-01" src={signalS} alt="signal small" />
        <img className="signal-02" src={signalM} alt="signal medium" />
        <img className="signal-03" src={signalL} alt="signal large" />
        <p>loading</p>
      </div>
    </div>
  );
}
