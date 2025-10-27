import { useSelector } from "react-redux";
import Window from "./Window";
import { Suspense } from "react";
import { appsMetas } from "#common/apps.js";

//TODO: Придумать как обходить
import "#apps/about/shared.jsx";
import "#apps/apps-list/shared.jsx";
import "#apps/calc/shared.jsx";
import "#apps/chat/shared.jsx";
import "#apps/console/shared.jsx";
import "#apps/contacts/shared.jsx";
import "#apps/dvd/shared.jsx";
import "#apps/frame/shared.jsx";
import "#apps/projects/shared.jsx";
import "#apps/settings/shared.jsx";
import "#apps/trash/shared.jsx";
import "#apps/url2frame/shared.jsx";
import "#apps/welcome/shared.jsx";

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        const WindowComponent = appsMetas.get(v.type)?.component ?? Window;
        return (
          <Suspense key={v.id}>
            <WindowComponent key={v.id} data={v} />
          </Suspense>
        );
      })}
    </div>
  );
}
