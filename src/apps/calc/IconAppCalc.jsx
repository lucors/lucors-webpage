import { useRef } from "react";
import { createApp } from "./shared";
import "./IconAppCalc.css";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppCalc() {
  const timer = useRef();

  return (
    <div
      id="calc"
      className="desktop-icon"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
