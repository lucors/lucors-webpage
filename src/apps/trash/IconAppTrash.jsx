import { createApp } from "./shared";
import "./IconAppTrash.css";

export default function IconAppTrash() {
  return (
    <div
      id="icon-trashcan"
      className="desktop-icon"
      title="Корзина"
      onClick={createApp}
    ></div>
  );
}
