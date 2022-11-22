import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../routing/Layout";
import useApod from "../../hooks/useApod";
import useDate from "../../hooks/useDate";
import ApodComponent from "../apod/Component";

export default function SearchResults() {
  const params = useParams();

  const { date } = useDate(params.value);

  const { apod } = useApod(`date=${date}`);

  return <Layout>{apod && <ApodComponent apod={apod} />}</Layout>;
}
