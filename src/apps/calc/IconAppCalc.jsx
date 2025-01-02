import { useRef } from "react";
import { createApp } from "./shared";
import "./IconAppCalc.css";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppCalc() {
  const timer = useRef();

  return (
    <div
      id="icon-calc"
      className="desktop-icon"
      title="Калькулятор"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
