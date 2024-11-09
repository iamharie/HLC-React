//React and React-dom library import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//App component mount import
import App from "./App.jsx";
//Styles import
import "./styles/App.css";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
