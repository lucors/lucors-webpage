import { createExplorer, WINDOW_TITLE } from "./shared";
import "./IconAppManager.css";

export default function IconAppManager() {
  return (
    <div
      id="icon-manager"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={createExplorer}
    ></div>
  );
}
