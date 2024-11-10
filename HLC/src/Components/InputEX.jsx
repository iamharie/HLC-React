import { useState } from "react";
import Button from "./Button";

export default function InputEX({ result, keyStroke }) {
  const [data, setData] = useState(null);

  function printInput(data) {
    setData(data);
  }

  //render checker log
  console.log("<Input/> comp rendering ");
  //
  return (
    <div className="input">
      <h4>Form Component</h4>
      <input type="text" value={result} onChange={keyStroke} />
      <Button onClick={() => printInput(result)}>Print</Button>
      <p>{data}</p>
    </div>
  );
}
