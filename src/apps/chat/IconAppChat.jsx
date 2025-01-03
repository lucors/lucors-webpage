import { createApp } from "./shared";
import "./IconAppChat.css";

export default function IconAppChat() {
  return (
    <div
      id="icon-chat"
      className="desktop-icon"
      title="Чат"
      onClick={createApp}
    ></div>
  );
}
