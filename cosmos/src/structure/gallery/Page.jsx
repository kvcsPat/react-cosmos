import React from "react";
import Layout from "../routing/Layout";
import useDate from "../../hooks/useDate";
import { startDate } from "../../utils/dates";
import useApod from "../../hooks/useApod";
import { formatDate } from "../../utils/formatDate";
import CardList from "./CardList";
import "./page.css";

export default function GalleryPage() {
  const { date } = useDate(formatDate(startDate));

  const { apod } = useApod(`start_date=${date}`);

  return (
    <Layout>
      <div className="gallery">{apod && <CardList apodList={apod} />}</div>
    </Layout>
  );
}
