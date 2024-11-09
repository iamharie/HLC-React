// Public dog API : https://dog.ceo/api/breeds/image/random

import { useEffect, useState } from "react";
import Button from "./Button";
import ErrorPage from "./ErrorPage.jsx";
import useFetch from "../hooks/useFetch";

export default function APICall() {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.message);
  //       console.log(data);
  //     });

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         setLoading(true);

  //         const response = await fetch(
  //           "https://dog.ceo/api/breeds/image/randommm"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch response");
  //         }
  //         const responseData = await response.json();

  //         setData(responseData.message);
  //       } catch (err) {
  //         setError({
  //           message: err.message || "could not fetch places",
  //         });
  //         console.log(err);
  //       }
  //       setLoading(false);
  //     }
  //     fetchData();
  //   }, []);

  //resuable FETCH function
  const { isFetching, error, data } = useFetch(
    "https://dog.ceo/api/breeds/image/random",
    []
  );

  console.log(data.message);

  if (isFetching) return <h3>🐶 Image Loading...</h3>;

  if (error) {
    return <ErrorPage title="error occured" message={error} />;
  }
  return (
    <div className="input">
      {/* <h2>{loading}</h2>
      <p>{error}</p> */}

      <img src={data.message} />
    </div>
  );
}
