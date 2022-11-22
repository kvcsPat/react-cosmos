import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../routing/Layout";
import useApod from "../../hooks/useApod";
import useDate from "../../hooks/useDate";
import ApodComponent from "../apod/Component";
import PaginationButtons from "./PaginationButtons";
import usePagination from "../../hooks/usePagination";

export default function SearchResults() {
  const params = useParams();

  const { date, handleDate } = useDate(params.value);

  const { handlePrevious, handleNext } = usePagination(date, handleDate);

  const { apod } = useApod(`date=${date}`);

  return (
    <Layout>
      {apod && (
        <>
          <PaginationButtons
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
          <ApodComponent apod={apod} />
        </>
      )}
    </Layout>
  );
}
