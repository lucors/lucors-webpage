import { createApp } from "./shared";
import "./IconAppPaint.css";

export default function IconAppPaint() {
  return (
    <div
      id="icon-paint"
      className="desktop-icon"
      title="Рисовалка"
      onClick={createApp}
    ></div>
  );
}
