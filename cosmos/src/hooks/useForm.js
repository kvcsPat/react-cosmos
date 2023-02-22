import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import useDateValidation from "./useDateValidation";

export default function useForm(toggle) {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    year: "",
    month: "",
    day: "",
  });

  const year = inputValues.year;
  const month = inputValues.month;
  const day = inputValues.day;

  const { invalidDate, selectedDate } = useDateValidation(year, month, day);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const next = e.target.parentNode.nextSibling;
    let limit = 2;

    if (name === "year") {
      limit = 4;
    }
    setInputValues((values) => ({ ...values, [name]: value.slice(0, limit) }));
    if (value.length >= limit) {
      next?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (invalidDate()) {
      toggle(true);
      return;
    }

    const date = formatDate(selectedDate());
    navigate(`/search/apod/date=${date}`);
  };

  return { year, month, day, handleInput, handleSubmit };
}
