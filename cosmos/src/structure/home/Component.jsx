import React from "react";
import { NavLink } from "react-router-dom";
import "./component.scss";

export default function HomeComponent() {
  return (
    <section className="welcome-text">
      <h1>Welcome to the page</h1>
      <p>
        This app features NASA's Astronomy Picture of the Day API, an archive
        which contains data reaching back to 1995.
      </p>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <NavLink to="/apod">discover the cosmos</NavLink>
    </section>
  );
}
