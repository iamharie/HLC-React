import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

//Components import
import Effect from "./Components/Effect.jsx";
import Timer from "./Components/Timer.jsx";
import Input from "./Components/Input";

export default function App() {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }
  console.log("App component");
  return (
    <div className="app">
      <Effect />
      <Timer />
      <Input result={input} keyStroke={handleInput} />
    </div>
  );
}
