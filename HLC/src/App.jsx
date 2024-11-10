import { useState } from "react";

//Components import
import Effect from "./Components/Effect.jsx";
import Timer from "./Components/Timer.jsx";
import Input from "./Components/Input";
import APICall from "./Components/APICall";
import WeatherCard from "./Components/CheckTailwindCss";
import StateLogin from "./Components/StateLogin.jsx";
import RefLogin from "./Components/RefLogin";
import Signup from "./Components/Signup.jsx";

export default function App() {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }
  console.log("-App component");
  return (
    <>
      <div className="app">
        {/* <Effect />
        <Timer />
        <Input result={input} keyStroke={handleInput} />
        <APICall />
        <WeatherCard />*/}
      </div>
      {/* <StateLogin /> */}
      <RefLogin />
      {/* <Signup />  */}
    </>
  );
}
