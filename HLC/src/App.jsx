import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components import
import Effect from "./Components/Effect.jsx";
import Timer from "./Components/Timer.jsx";
import InputEX from "./Components/InputEX";
import APICall from "./Components/APICall";
import WeatherCard from "./Components/CheckTailwindCss";
import StateLogin from "./Components/StateLogin.jsx";
import RefLogin from "./Components/RefLogin";
import Signup from "./Components/Signup.jsx";
import Home from "./Components/Home.jsx";
import Root from "./Components/Root.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/ref-login",
          element: <RefLogin />,
        },
        {
          path: "/state-login",
          element: <StateLogin />,
        },
        {
          path: "/login",
          element: <Signup />,
        },
      ],
    },
  ]);

  const [input, setInput] = useState("");

  //example
  function handleInput(event) {
    setInput(event.target.value);
  }
  console.log("-App component");
  return (
    <>
      <RouterProvider router={router} />
      <div className="app">
        {/* <Effect /> */}
        {/* <Timer /> */}
        {/* <InputEX result={input} keyStroke={handleInput} /> */}
        {/* <APICall /> */}
        {/* <WeatherCard /> */}
      </div>
      {/* <StateLogin /> */}
      {/* <RefLogin /> */}
      {/* <Signup /> */}
    </>
  );
}
