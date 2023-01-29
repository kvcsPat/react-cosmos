import React from "react";
import Layout from "../routing/Layout";
import ApodComponent from "./Component";
import NavButtons from "./NavButtons";
import useDate from "../../hooks/useDate";
import { currentDate } from "../../utils/dates";
import useApod from "../../hooks/useApod";
import { formatDate } from "../../utils/formatDate";
import Loading from "../loading/Loading";

export default function ApodPage() {
  const { date } = useDate(formatDate(currentDate));

  const { apod } = useApod(`date=${date}`);

  return (
    <Layout>
      {apod ? (
        <>
          <NavButtons />
          <ApodComponent apod={apod} />
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
