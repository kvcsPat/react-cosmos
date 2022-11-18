import React from "react";

export default function ApodComponent({ apod }) {
  return (
    <div className="apod">
      <div className="visual">
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
      <div className="info">
        <h1>{apod.title}</h1>
        <h2>{apod.date}</h2>
        <p>{apod.explanation}</p>
      </div>
    </div>
  );
}
