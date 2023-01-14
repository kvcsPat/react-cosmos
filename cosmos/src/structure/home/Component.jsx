import React from "react";
import { NavLink } from "react-router-dom";
import "./component.css";

export default function HomeComponent() {
  return (
    <section className="content">
      <h1 className="welcome-title">Welcome to the page</h1>
      <p className="welcome-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
        explicabo voluptatem beatae sequi adipisci quod, facilis, culpa fugit
        ratione quisquam pariatur, corrupti nisi minima ducimus itaque autem
        ipsam ad eveniet!
      </p>
      <NavLink className="call-to-action" to="/apod">
        discover the cosmos
      </NavLink>
    </section>
  );
}
