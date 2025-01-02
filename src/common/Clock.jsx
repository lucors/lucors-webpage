import { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock() { 
  const now = new Date();
  const [time, setTime] = useState(now.toLocaleTimeString());
  const [date, setDate] = useState(now.toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(function(){
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString());
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div id="clock">
      <div className="time">{time}</div>
      <div className="date">{date}</div>
    </div>
  );
}
