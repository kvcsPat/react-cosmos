import React from "react";
import useForm from "../../hooks/useForm";
import "./formComponent.scss";

export default function FormComponent({ toggle }) {
  const { year, month, day, handleInput, handleSubmit } = useForm(toggle);

  return (
    <div className="search">
      <div className="text">
        <h1>Search by date</h1>
        <p>
          Since June 16, 1995 NASA uploads a new image every day. You can pick a
          date here to search for an APOD image.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label>
            <input
              value={year}
              type="number"
              name="year"
              id="year"
              placeholder="YYYY"
              onChange={handleInput}
            />
          </label>
          <label>
            <input
              value={month}
              type="number"
              name="month"
              id="month"
              placeholder="MM"
              onChange={handleInput}
            />
          </label>
          <label>
            <input
              value={day}
              type="number"
              name="day"
              id="day"
              placeholder="DD"
              onChange={handleInput}
            />
          </label>
        </div>
        <button type="submit">view entry</button>
      </form>
    </div>
  );
}
