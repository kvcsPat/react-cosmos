import { useState } from "react";

export default function useDate(defaultValue) {
  const [date, setDate] = useState(defaultValue);

  const handleDate = (value) => {
    setDate(value);
  };

  return { date, handleDate };
}
