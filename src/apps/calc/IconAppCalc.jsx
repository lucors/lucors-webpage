import { createApp } from "./shared";
import "./IconAppCalc.css";

export default function IconAppCalc() {
  return (
    <div
      id="icon-calc"
      className="desktop-icon"
      title="Калькулятор"
      onClick={createApp}
    ></div>
  );
}
