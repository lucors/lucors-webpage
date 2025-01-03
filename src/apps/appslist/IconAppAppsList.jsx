import { createApp } from "./shared";
import "./IconAppAppsList.css";
import { useRef } from "react";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppAppsList() {
  const timer = useRef();

  return (
    <div
      id="icon-appslist"
      className="desktop-icon"
      title="Приложения"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
