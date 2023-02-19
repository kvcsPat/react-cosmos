import { getDaysInMonth, subMonths } from "date-fns";
import { currentDate, firstDate } from "../utils/Dates";

export default function useDateValidation(year, month, day) {
  //-----DATE FROM SEARCH INPUT-----
  const selectedDate = () => {
    const selectedDate = subMonths(new Date(year, month, day), 1);
    return selectedDate;
  };

  //-----YEAR-----
  const yearMax = currentDate.getFullYear();

  const yearMin = 1995;

  const yearLength = 4;

  const invalidYear = () => {
    const invalidYear =
      year < yearMin || year > yearMax || year.length > yearLength;
    return invalidYear;
  };

  //-----MONTH-----
  const monthMax = 12;

  const monthMin = 1;

  const monthLength = 2;

  const invalidMonth = () => {
    const invalidMonth =
      month < monthMin || month > monthMax || month.length !== monthLength;
    return invalidMonth;
  };

  //-----DAY-----
  const dayMax = () => {
    const dayMax = getDaysInMonth(new Date(year, month - 1));
    return dayMax;
  };

  const dayMin = monthMin;

  const dayLength = monthLength;

  const invalidDay = () => {
    const invalidDay =
      day < dayMin || day > dayMax(year, month) || day.length !== dayLength;
    return invalidDay;
  };

  //-----DATE RANGE-----
  const outOfRange = () => {
    const outOfRange =
      selectedDate() < firstDate || selectedDate() > currentDate;
    return outOfRange;
  };

  //-----INVALID DATE-----
  const invalidDate = () => {
    const invalidDate =
      invalidYear() || invalidMonth() || invalidDay() || outOfRange();

    return invalidDate;
  };

  return { invalidDate, selectedDate };
}
