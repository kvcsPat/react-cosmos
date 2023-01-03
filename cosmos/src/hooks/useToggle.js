import { useState } from "react";

export default function useToggle(defaultValue) {
  const [isOn, setIsOn] = useState(defaultValue);

  function toggleIsOn(value) {
    setIsOn((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [isOn, toggleIsOn];
}
