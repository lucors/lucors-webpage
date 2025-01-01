import Button from "./Button";
import ActionNewWindow from "./ActionNewWindow";
import store from "#store/store.js";
import { addWindow, byId, setCurrentWindowById, updateWindow } from "#store/windowsSlice.js";
import { WINDOW_TYPE_EXPLORER } from "#apps/manager/WindowExplorer.jsx";

export const setWindowQuery = (title, query, winid = undefined) => {
  if (!winid) winid = store.getState().windows.current?.id;
  if (!winid) return createWindowWithQuery(title, query);
  const win = byId(store.getState(), winid);
  if (win.type !== WINDOW_TYPE_EXPLORER) return createWindowWithQuery(title, query);

  store.dispatch(setCurrentWindowById(winid));
  return store.dispatch(
    updateWindow({
      id: winid,
      title,
      query,
      collapsed: false
    })
  );
};

export const createWindowWithQuery = (title, query) => {
  store.dispatch(
    addWindow({
      title,
      icon: "img/manager.svg",
      type: WINDOW_TYPE_EXPLORER,
      query,
    })
  );
};

export default function QueryButton({
  title,
  winid,
  query,
  onClick,
  children,
  subActionAllow = true,
  inline = false,
}) {
  return (
    <Button
      onClick={() => {
        setWindowQuery(title, query, winid);
        if (onClick) onClick();
      }}
      subAction={
        subActionAllow && (
          <ActionNewWindow
            onClick={() => createWindowWithQuery(title, query)}
          />
        )
      }
      inline={inline}
    >
      {children}
    </Button>
  );
}
