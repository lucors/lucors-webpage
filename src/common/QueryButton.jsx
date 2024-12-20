import Button from "./Button";
import ActionNewWindow from "./ActionNewWindow";
import store from "#store/store.js";
import { addWindow, updateWindow } from "#store/windowsSlice.js";
import { WINDOW_TYPE_EXPLORER } from "#main/windows/WindowExplorer.jsx";

export default function QueryButton({
  title,
  winid,
  query,
  onClick,
  children,
}) {
  const setWindowQuery = () => {
    if (!winid) winid = store.getState().windows.current?.id;
    if (!winid) return createWindowWithQuery();
    return store.dispatch(
      updateWindow({
        id: winid,
        title,
        query,
      })
    );
  };

  const createWindowWithQuery = () => {
    store.dispatch(
      addWindow({
        title,
        icon: "img/manager.svg",
        type: WINDOW_TYPE_EXPLORER,
        query,
      })
    );
  };

  return (
    <Button
      onClick={onClick ?? setWindowQuery}
      subAction={<ActionNewWindow onClick={createWindowWithQuery} />}
      inline={false}
    >
      {children}
    </Button>
  );
}
