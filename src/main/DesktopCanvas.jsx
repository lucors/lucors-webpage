import { useEffect, useRef } from "react"
import { cursor } from "../backgroundEvents";

export function setCanvas(canvas) {
  if (!canvas) return;
  if (canvas === window.desktopCanvas) return;
  
  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.offsetHeight;
  const desktopCtx = canvas.getContext("2d");
  desktopCtx.clear = function () {
    this.clearRect(0, 0, canvas.width, canvas.height);
  }
  desktopCtx.drawSelection = function(){
    this.strokeStyle = "#a587d7";
    this.fillStyle = "#636db573";
    this.beginPath();
    this.rect(cursor.startX, cursor.startY, cursor.x - cursor.startX, cursor.y - cursor.startY);
    this.fillRect(cursor.startX, cursor.startY, cursor.x - cursor.startX, cursor.y - cursor.startY);
    this.stroke();
  }

  window.desktopCanvas = canvas;
  window.desktopCtx = desktopCtx;
  window.desktopSelection = [cursor.startX, cursor.startY, cursor.x - cursor.startX, cursor.y - cursor.startY];
}

export default function DesktopCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    setCanvas(ref?.current);
  }, [])

  return (
    <canvas ref={ref}></canvas>
  )
}