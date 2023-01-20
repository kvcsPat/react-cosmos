import React from "react";

export default function PaginationButtons({ handlePrevious, handleNext }) {
  return (
    <div className="apod-btns">
      <button className="previous-btn" onClick={handlePrevious}>
        previous day
      </button>
      <button className="next-btn" onClick={handleNext}>
        next day
      </button>
    </div>
  );
}
