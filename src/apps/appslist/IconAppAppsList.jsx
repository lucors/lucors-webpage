import { createApp, WINDOW_TITLE } from "./shared";
import "./IconAppAppsList.css";

export default function IconAppAppsList() {
  return (
    <div
      id="icon-appslist"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createApp}
    ></div>
  );
}
