import React from "react";
import Layout from "../routing/Layout";
import useDates from "../../hooks/useDate";
import { startDate } from "../../utils/dates";
import useApod from "../../hooks/useApod";
import { formatDate } from "../../utils/formatDate";
import CardList from "./CardList";

export default function GalleryPage() {
  const { date } = useDates(formatDate(startDate));

  const { apod } = useApod(`start_date=${date}`);

  return <Layout>{apod && <CardList apodList={apod} />}</Layout>;
}
