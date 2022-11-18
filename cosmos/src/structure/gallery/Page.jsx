import React from "react";
import Layout from "../routing/Layout";
import useDates from "../../hooks/useDate";
import { startDate } from "../../utils/dates";
import useApod from "../../hooks/useApod";
import { formatStartDate } from "../../utils/formatDate";
import CardList from "./CardList";

export default function GalleryPage() {
  const { date } = useDates(startDate);

  const { apod } = useApod(formatStartDate(date));

  return <Layout>{apod && <CardList apodList={apod} />}</Layout>;
}
