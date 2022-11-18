import React from "react";
import Layout from "../routing/Layout";
import ApodComponent from "./Component";
import NavButtons from "./NavButtons";
import useApod from "../../hooks/useApod";
import useDates from "../../hooks/useDate";
import { formatDate } from "../../utils/formatDate";

export default function ApodPage() {
  const { date } = useDates(new Date());

  const { apod } = useApod(formatDate(date));

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
