import { subDays } from "date-fns";

//apod's current date
export const currentDate = new Date();

//date for gallery fetch
export const startDate = subDays(currentDate, 10);
