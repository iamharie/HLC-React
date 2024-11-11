//custom hook to handle form logic
// To be completed: Not a priority for now

import { useState } from "react";

export function useInput(defaultValue) {
  const [input, setInput] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInput(event) {
    setInput(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: input,
    handleInput,
    handleInputBlur,
  };
}
