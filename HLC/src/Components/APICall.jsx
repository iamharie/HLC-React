// Public dog API : https://dog.ceo/api/breeds/image/random

import { useEffect, useState } from "react";
import Button from "./Button";

export default function APICall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.message);
  //       console.log(data);
  //     });

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }
      setData(responseData.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  if (loading) return <h3>🐶 Image Loading...</h3>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="input">
      <h2>{loading}</h2>
      <p>{error}</p>
      <img src={data} alt="image" />
      <Button onClick={fetchData}>CHANGE</Button>
    </div>
  );
}
