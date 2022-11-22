import { format } from "date-fns";

export function formatDate(value) {
  const date = format(value, "yyyy-MM-dd");
  return date;
}
