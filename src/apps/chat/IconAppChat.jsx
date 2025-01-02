import { useRef } from "react";
import { createApp } from "./shared";
import "./IconAppChat.css";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppChat() {
  const timer = useRef();

  return (
    <div
      id="icon-chat"
      className="desktop-icon"
      title="Чат"
      onClick={withDoubleClick(timer, createApp)}
    ></div>
  );
}
