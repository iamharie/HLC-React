import { useState } from "react";

//Components import
import Effect from "./Components/Effect.jsx";
import Timer from "./Components/Timer.jsx";
import Input from "./Components/Input";
import APICall from "./Components/APICall";
import WeatherCard from "./Components/CheckTailwindCss";
import Form from "./Components/Form.jsx";

export default function App() {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }
  console.log("-App component");
  return (
    <div className="app">
      {/* <Effect /> */}
      {/* <Timer /> */}
      {/* <Input result={input} keyStroke={handleInput} /> */}
      {/* <APICall /> */}
      {/* <WeatherCard /> */}
      <Form />
    </div>
  );
}
