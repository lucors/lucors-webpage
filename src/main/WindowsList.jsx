import { useSelector } from "react-redux";
import WindowExplorer, { WINDOW_TYPE_EXPLORER } from "./WindowExplorer";
import Window from "./Window";

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        if (v.type === WINDOW_TYPE_EXPLORER) {
          return <WindowExplorer key={v.id} data={v} />;
        }
        return <Window key={v.id} data={v} />;
      })}
    </div>
  );
}
