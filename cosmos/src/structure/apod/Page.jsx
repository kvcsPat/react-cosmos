import React from "react";
import Layout from "../routing/Layout";
import ApodComponent from "./Component";
import NavButtons from "./NavButtons";
import useDates from "../../hooks/useDate";
import { currentDate } from "../../utils/dates";
import useApod from "../../hooks/useApod";
import { formatDate } from "../../utils/formatDate";

export default function ApodPage() {
  const { date } = useDates(formatDate(currentDate));

  const { apod } = useApod(`date=${date}`);

  return (
    <Layout>
      {apod && (
        <>
          <NavButtons />
          <ApodComponent apod={apod} />
        </>
      )}
    </Layout>
  );
}
