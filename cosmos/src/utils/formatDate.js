import { format } from "date-fns";

//returns date for apod fetch
export function formatDate(value) {
  const date = format(value, "yyyy-MM-dd");
  const urlDate = `date=${date}`;
  return urlDate;
}

//returns date for gallery fetch
export function formatStartDate(value) {
  const date = format(value, "yyyy-MM-dd");
  const urlDate = `start_date=${date}`;
  return urlDate;
}
