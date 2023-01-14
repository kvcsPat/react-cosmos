import React from "react";
import Layout from "../routing/Layout";
import HomeComponent from "./Component";
import SolarSystem from "./SolarSystem";
import "./page.css";

export default function HomePage() {
  return (
    <Layout>
      <div className="home">
        <SolarSystem />
        <HomeComponent />
      </div>
    </Layout>
  );
}
