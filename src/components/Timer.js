import React, {useState, useEffect} from "react";

function Timer() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      let cleanTime = setTime(new Date().toLocaleTimeString())
      return clearInterval(cleanTime);
    }, 1000)
  }, [])
  return(
    <div>The time is: {time} </div>
  )
}

export default Timer;