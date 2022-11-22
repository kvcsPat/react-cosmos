import { subMonths } from "date-fns";

//date from search input
export function selectedDate(year, month, day) {
  const date = subMonths(new Date(year, month, day), 1);
  return date;
}
