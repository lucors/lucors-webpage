import "./ExplorerButton.css";
import { createApp } from "#apps/appslist/shared.jsx";
import store from "#store/store.js";
import { setMenu } from "#store/menuSlice.js";

export default function ExplorerButton() {
  const clickHandler = () => {
    createApp();
    if (store.getState().menu.openned) store.dispatch(setMenu(false));
  };

  return (
    <div
      id="startProgram"
      title="Открыть список приложений"
      onClick={clickHandler}
    >
      <img
        className="programIco"
        src="img/apps.png"
        alt="Открыть список приложений"
      />
    </div>
  );
}
