import { useSelector } from "react-redux";
import Window from "./Window";
import WindowExplorer, {
  WINDOW_APP_EXPLORER,
} from "#apps/manager/WindowExplorer";
import WindowFrame, { WINDOW_APP_FRAME } from "#apps/frame/WindowFrame";
import WindowTrash, { WINDOW_APP_TRASH } from "#apps/trash/WindowTrash.jsx";

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        switch (v.type) {
          case WINDOW_APP_EXPLORER:
            return <WindowExplorer key={v.id} data={v} />;
          case WINDOW_APP_FRAME:
            return <WindowFrame key={v.id} data={v} />;
          case WINDOW_APP_TRASH:
            return <WindowTrash key={v.id} data={v} />;
          default:
            return <Window key={v.id} data={v} />;
        }
      })}
    </div>
  );
}
