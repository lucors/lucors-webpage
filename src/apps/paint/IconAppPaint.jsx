import { createApp, WINDOW_TITLE } from "./shared";
import "./IconAppPaint.css";

export default function IconAppPaint() {
  return (
    <div
      id="icon-paint"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createApp}
    ></div>
  );
}
