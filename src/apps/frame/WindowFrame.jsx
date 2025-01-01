import { memo } from "react";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import Window from "#main/windows/Window";
import { setCurrentWindowById } from "#store/windowsSlice.js";

export const WINDOW_APP_FRAME = "frame";

export function createFrame(title, href, icon = "img/unknow-app.svg") {
  const frames = store.getState().windows.list.filter((w) => w.type == WINDOW_APP_FRAME && w.href == href);
  if (
    frames.length
  ) {
    store.dispatch(setCurrentWindowById(frames[0].id));
    return;
  }
  store.dispatch(
    addWindow({
      title,
      icon,
      type: WINDOW_APP_FRAME,
      href: href,
    })
  );
}

export default memo(function WindowFrame({ data }) {
  return (
    <Window
      className="frame"
      data={data}
      content={
        <>
          <div className="frame-block"></div>
          <iframe
            src={data?.href}
            allow="autoplay; camera; microphone; display-capture; fullscreen;"
            allowFullScreen={true}
          ></iframe>
        </>
      }
    />
  );
});
