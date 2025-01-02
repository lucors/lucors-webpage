import { useRef } from "react";
import { createApp } from "./shared";
import "./IconAppPaint.css";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppPaint() {
  const timer = useRef();

  return (
    <div
      id="icon-paint"
      className="desktop-icon"
      title="Рисовалка"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
