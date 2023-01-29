import React from "react";
import satelliteDark from "../../assets/satellite.svg";
import signalS from "../../assets/signal-01.svg";
import signalM from "../../assets/signal-02.svg";
import signalL from "../../assets/signal-03.svg";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading">
        <img className="satellite" src={satelliteDark} alt="satellite"></img>
        <img className="signal-01" src={signalS} alt="signal small"></img>
        <img className="signal-02" src={signalM} alt="signal medium"></img>
        <img className="signal-03" src={signalL} alt="signal large"></img>
        <p>loading</p>
      </div>
    </div>
  );
}
