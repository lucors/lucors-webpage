import { useRef } from "react";
import { createApp } from "./shared";
import "./IconAppName.css";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppName() {
  const timer = useRef();

  return (
    <div
      id="icon-name"
      className="desktop-icon"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
