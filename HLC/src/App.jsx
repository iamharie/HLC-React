import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

//Components import
import Effect from "./Components/Effect.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Effect />
    </>
  );
}
