import "./ExplorerButton.css";
import { createApp } from "#apps/appslist/shared.jsx";

export default function ExplorerButton() {
  return (
    <div id="startProgram" title="Запустить проводник" onClick={createApp}>
      <img
        className="programIco"
        src="img/apps.png"
        alt="Запустить проводник"
      />
    </div>
  );
}
