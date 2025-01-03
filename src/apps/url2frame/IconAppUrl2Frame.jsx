import { createApp } from "./shared";
import "./IconAppUrl2Frame.css";

export default function IconAppUrl2Frame() {
  return (
    <div
      id="icon-url2frame"
      className="desktop-icon"
      title="Сайт в окно"
      onClick={createApp}
    ></div>
  );
}
