import { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock() { 
  const now = new Date();
  const [time, setTime] = useState(now.toLocaleTimeString("ru-RU"));
  const [date, setDate] = useState(now.toLocaleTimeString("ru-RU"));

  useEffect(() => {
    const interval = setInterval(function(){
      const now = new Date();
      setTime(now.toLocaleTimeString("ru-RU"));
      setDate(now.toLocaleTimeString("ru-RU"));
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
