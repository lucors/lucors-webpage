import { createApp, WINDOW_TITLE } from "./shared";
import "./IconAppCalc.css";

export default function IconAppCalc() {
  return (
    <div
      id="icon-calc"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createApp}
    ></div>
  );
}
