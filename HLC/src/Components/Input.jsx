import { useState } from "react";
import Button from "./Button";

export default function Input({ result, keyStroke }) {
  const [data, setData] = useState(null);

  function printInput(data) {
    setData(data);
  }

  //render checker log
  console.log("<Input/> comp rendering ");
  return (
    <div>
      <input type="text" value={result} onChange={keyStroke} />
      <Button onClick={() => printInput(result)}>Custom</Button>
      <p>{data}</p>
    </div>
  );
}
