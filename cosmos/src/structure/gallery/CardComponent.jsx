import React from "react";
import useToggle from "../../hooks/useToggle";
import CardModal from "./Modal";
import "./cardComponent.css";

export default function Item({ apod }) {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <>
      <div className="image-card" onClick={() => toggleIsOn(true)}>
        <div className="text">
          <h1>{apod.title}</h1>
          <h2>{apod.date}</h2>
        </div>
        {apod.media_type === "image" ? (
          <img src={apod.url} alt="apod" />
        ) : (
          <div id="iframe-container">
            <iframe
              src={apod.url}
              title="apod"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      {isOn && <CardModal apod={apod} toggle={toggleIsOn} />}
    </>
  );
}
