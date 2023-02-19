import React from "react";
import Layout from "../routing/Layout";
import useDate from "../../hooks/useDate";
import { startDate } from "../../utils/Dates";
import useApod from "../../hooks/useApod";
import { formatDate } from "../../utils/formatDate";
import CardList from "./CardList";
import "./page.scss";
import Loading from "../loading/Loading";

export default function GalleryPage() {
  const { date } = useDate(formatDate(startDate));

  const { apod } = useApod(`start_date=${date}`);

  return (
    <Layout>
      <div className="gallery">
        {apod ? (
          <>
            <h1 className="gallery-title">APODs from the last 30 days</h1>
            <CardList apodList={apod} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
}
