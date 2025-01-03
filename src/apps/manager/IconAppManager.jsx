import { createExplorer } from "./shared";
import "./IconAppManager.css";

export default function IconAppManager() {
  return (
    <div
      id="icon-manager"
      className="desktop-icon"
      title="Проводник"
      onClick={createExplorer}
    ></div>
  );
}
