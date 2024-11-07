import { memo, useEffect, useState } from "react";

const Timer = memo(function Timer() {
  let maxTime = 1;
  const [time, setTime] = useState(maxTime);

  useEffect(() => {
    console.log("timer started");
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return maxTime;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //render checker log
  console.log("<Timer/> comp rendering ");
  return (
    <div className="timer">
      <h4>Timer component</h4>
      <h1>{time}</h1>
      <progress value={time} max={maxTime}></progress>
      {/* <button onClick={() => timer()}>Call</button> */}
    </div>
  );
});

export default Timer;
