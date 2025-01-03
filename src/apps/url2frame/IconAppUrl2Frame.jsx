import { createApp, WINDOW_TITLE } from "./shared";
import "./IconAppUrl2Frame.css";

export default function IconAppUrl2Frame() {
  return (
    <div
      id="icon-url2frame"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createApp}
    ></div>
  );
}
