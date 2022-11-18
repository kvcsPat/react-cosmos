import useFetch from "./useFetch";

export default function useApod(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&${date}`;

  const { data: apod } = useFetch(url);

  return { apod };
}
