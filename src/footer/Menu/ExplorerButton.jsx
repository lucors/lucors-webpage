import "./ExplorerButton.css";
import { createExplorer } from "#apps/manager/shared.jsx";

export default function ExplorerButton() {
  return (
    <div id="startProgram" title="Запустить проводник" onClick={createExplorer}>
      <img
        className="programIco"
        src="img/manager.svg"
        alt="Запустить проводник"
      />
    </div>
  );
}