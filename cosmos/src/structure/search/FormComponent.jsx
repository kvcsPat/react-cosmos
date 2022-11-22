import React from "react";
import useForm from "../../hooks/useForm";

export default function FormComponent() {
  const { year, month, day, handleInput, handleSubmit } = useForm();

  return (
    <div className="search">
      <h1>Search by date</h1>
      <p>
        Since June 16, 1995 NASA uploads a new image every day. You can pick a
        date here to search for an APOD image.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={year}
          type="number"
          name="year"
          id="year"
          onChange={handleInput}
        />
        <input
          value={month}
          type="number"
          name="month"
          id="month"
          onChange={handleInput}
        />
        <input
          value={day}
          type="number"
          name="day"
          id="day"
          onChange={handleInput}
        />
        <button type="submit">view entry</button>
      </form>
    </div>
  );
}
