import { subDays } from "date-fns";

//apod's current date
export const currentDate = new Date();

//apod's first date
export const firstDate = new Date(1995, 5, 16, 0);

//date for gallery fetch
export const startDate = subDays(currentDate, 11);
