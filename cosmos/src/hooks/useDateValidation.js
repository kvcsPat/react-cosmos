import { getDaysInMonth } from "date-fns";
import { currentDate, firstDate } from "../utils/dates";
import { selectedDate } from "../utils/selectedDate";

export default function useDateValidation(year, month, day) {
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
      selectedDate(year, month, day) < firstDate ||
      selectedDate(year, month, day) > currentDate;
    return outOfRange;
  };

  //-----INVALID DATE-----
  const invalidDate = () => {
    const invalidDate =
      invalidYear() || invalidMonth() || invalidDay() || outOfRange();

    return invalidDate;
  };

  return { invalidDate };
}
