import { createApp, WINDOW_TITLE } from "./shared";
import "./IconAppTrash.css";

export default function IconAppTrash() {
  return (
    <div
      id="icon-trashcan"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createApp}
    ></div>
  );
}
