import { addDays, isToday, subDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { firstDate } from "../utils/dates";

export default function usePagination(date, handleDate) {
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (date === formatDate(firstDate)) {
      return;
    }
    const previousDay = formatDate(subDays(new Date(date), 1));
    handleDate(previousDay);
    navigate(`/search/apod/date=${previousDay}`);
  };

  const handleNext = () => {
    if (isToday(new Date(date))) {
      return;
    }
    const nextDay = formatDate(addDays(new Date(date), 1));
    handleDate(nextDay);
    navigate(`/search/apod/date=${nextDay}`);
  };

  return { handlePrevious, handleNext };
}
