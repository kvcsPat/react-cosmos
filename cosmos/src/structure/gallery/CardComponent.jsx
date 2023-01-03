import React from "react";
import useToggle from "../../hooks/useToggle";
import CardModal from "./Modal";

export default function Item({ apod }) {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <>
      <div onClick={() => toggleIsOn(true)} className="card">
        {apod.media_type === "image" ? (
          <img src={apod.url} alt="apod" />
        ) : (
          <div id="iframe-container">
            <iframe
              src={apod.url}
              title="apod"
              frameBorder="0"
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
