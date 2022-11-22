import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { selectedDate } from "../utils/selectedDate";

export default function useForm() {
  const [inputValues, setInputValues] = useState({
    year: "",
    month: "",
    day: "",
  });

  const year = inputValues.year;
  const month = inputValues.month;
  const day = inputValues.day;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const next = e.target.nextSibling;
    let limit = 2;

    if (name === "year") {
      limit = 4;
    }
    setInputValues((values) => ({ ...values, [name]: value.slice(0, limit) }));
    if (value.length >= limit) {
      next.focus();
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = formatDate(selectedDate(year, month, day));
    navigate(`/search/apod/date=${date}`);
  };

  return { year, month, day, handleInput, handleSubmit };
}
