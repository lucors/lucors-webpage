import { createApp } from "./shared";
import "./IconAppTrash.css";
import { useRef } from "react";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppTrash() {
  const timer = useRef();

  return (
    <div
      id="icon-trashcan"
      className="desktop-icon"
      title="Корзина"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
