import React from "react";

export default function Item({ apod }) {
  return (
    <div className="card">
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
  );
}
