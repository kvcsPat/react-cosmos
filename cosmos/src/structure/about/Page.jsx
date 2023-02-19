import React from "react";
import Layout from "../routing/Layout";
import "./page.scss";
import AboutComponent from "./Component";
import Exploration from "./Exploration";

export default function AboutPage() {
  return (
    <Layout>
      <div className="about">
        <Exploration />
        <AboutComponent />
      </div>
    </Layout>
  );
}
