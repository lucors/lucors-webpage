import { useSelector } from "react-redux";
import Window from "./Window";
import WindowExplorer, {
  WINDOW_TYPE_EXPLORER,
} from "#apps/manager/WindowExplorer";
import WindowFrame, { WINDOW_TYPE_FRAME } from "#apps/frame/WindowFrame";

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        switch (v.type) {
          case WINDOW_TYPE_EXPLORER:
            return <WindowExplorer key={v.id} data={v} />;
          case WINDOW_TYPE_FRAME:
            return <WindowFrame key={v.id} data={v} />;
          default:
            return <Window key={v.id} data={v} />;
        }
      })}
    </div>
  );
}
