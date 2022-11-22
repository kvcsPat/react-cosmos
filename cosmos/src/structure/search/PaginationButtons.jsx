import React from "react";

export default function PaginationButtons({ handlePrevious, handleNext }) {
  return (
    <div className="pagination-btns">
      <button className="previous-btn" onClick={handlePrevious}>
        previous
      </button>
      <button className="next-btn" onClick={handleNext}>
        next
      </button>
    </div>
  );
}
