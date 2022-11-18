import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../routing/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="welcome-text">
        <h1>Welcome to the page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          explicabo voluptatem beatae sequi adipisci quod, facilis, culpa fugit
          ratione quisquam pariatur, corrupti nisi minima ducimus itaque autem
          ipsam ad eveniet!
        </p>
      </div>
      <NavLink to="/apod">
        <button className="call-to-action">discover the cosmos</button>
      </NavLink>
    </Layout>
  );
}
