//Use Effect with a state dependency: Example

import { useEffect, useState } from "react";
import Button from "./Button";

export default function Effect() {
  const [value, setValue] = useState(0);
  const [data, setDate] = useState(0);

  function handleAddClick() {
    setValue((prevState) => prevState + 1);
  }

  function handleDataClick() {
    setDate((prevState) => prevState + 1);
  }

  useEffect(
    function () {
      console.log("Add Value changed", value);
    },
    [value]
  );

  //render checker log
  console.log("<Effect/> comp rendering ");
  return (
    <div className="effect">
      <p>
        This particular react component is dedicated to understand the purspose
        of useEffect() Hook in Recat!
      </p>
      <button onClick={handleAddClick}>Add Value</button>
      <button onClick={handleDataClick}>Add Data</button>
      <h4>Add Value: {value}</h4>
      <h4>Add Data: {data}</h4>
      <Button>YouTube</Button>
    </div>
  );
}
