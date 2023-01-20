import React from "react";
import { NavLink } from "react-router-dom";
import "./component.css";

export default function HomeComponent() {
  return (
    <section className="welcome-text">
      <h1>Welcome to the page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
        explicabo voluptatem beatae sequi adipisci quod, facilis, culpa fugit
        ratione quisquam pariatur, corrupti nisi minima ducimus itaque autem
        ipsam ad eveniet!
      </p>
      <NavLink to="/apod">discover the cosmos</NavLink>
    </section>
  );
}
