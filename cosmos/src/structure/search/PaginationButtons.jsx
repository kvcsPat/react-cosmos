import React from "react";
import { firstDate, currentDate } from "../../utils/Dates";
import { formatDate } from "../../utils/formatDate";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function PaginationButtons({ handlePrevious, handleNext }) {
  const params = useParams();

  const [isDisabled, setIsDisabled] = useState({
    isFirstDate: false,
    isCurrentDate: false,
  });

  useEffect(() => {
    if (params.value === formatDate(firstDate)) {
      setIsDisabled((prevState) => {
        return { ...prevState, isFirstDate: true };
      });
    }
    if (params.value === formatDate(currentDate)) {
      setIsDisabled((prevState) => {
        return { ...prevState, isCurrentDate: true };
      });
    }
    if (
      params.value !== formatDate(firstDate) &&
      params.value !== formatDate(currentDate)
    ) {
      setIsDisabled(() => {
        return { isFirstDate: false, isCurrentDate: false };
      });
    }
  }, [params.value]);

  return (
    <div className="apod-btns">
      <button
        className={`previous-btn ${isDisabled.isFirstDate ? "disabled" : ""}`}
        onClick={handlePrevious}
      >
        previous day
      </button>
      <button
        className={`previous-btn ${isDisabled.isCurrentDate ? "disabled" : ""}`}
        onClick={handleNext}
      >
        next day
      </button>
    </div>
  );
}
