import { useEffect, useState } from "react";

export default function useFetch(url, initialValue) {
  //Loading State
  const [isFetching, setIsFetching] = useState();
  //Error State
  const [error, setError] = useState();
  //Data State
  const [data, setData] = useState(initialValue);

  //useEffect

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Fetching Failed!");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [url]);
  return { isFetching, error, data, setData };
}
