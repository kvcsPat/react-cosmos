import React from "react";
import useApod from "../../hooks/useApod";
import Layout from "../routing/Layout";

export default function ApodPage() {
  //testing useApod and useFetch
  const { apod } = useApod("date=2022-11-18");

  console.log(apod);
  //----------------------------

  return (
    <Layout>
      <div>Apod</div>
    </Layout>
  );
}
