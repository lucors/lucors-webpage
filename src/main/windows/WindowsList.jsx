import { useSelector } from "react-redux";
import Window from "./Window";
import { lazy, Suspense } from "react";
import { WINDOW_APP_FRAME } from "#apps/frame/shared.js";
import { WINDOW_APP_MANAGER } from "#apps/manager/shared.jsx";
import { WINDOW_APP_TRASH } from "#apps/trash/shared.jsx";
import { WINDOW_APP_CALC } from "#apps/calc/shared.jsx";
import { WINDOW_APP_PAINT } from "#apps/paint/shared.jsx";

const windowTypesMap = {};
(function () {
  windowTypesMap[WINDOW_APP_MANAGER] = lazy(() =>
    import("#apps/manager/WindowExplorer")
  );
  windowTypesMap[WINDOW_APP_FRAME] = lazy(() =>
    import("#apps/frame/WindowFrame")
  );
  windowTypesMap[WINDOW_APP_TRASH] = lazy(() =>
    import("#apps/trash/WindowTrash")
  );
  windowTypesMap[WINDOW_APP_CALC] = lazy(() =>
    import("#apps/calc/WindowCalc")
  );
  windowTypesMap[WINDOW_APP_PAINT] = lazy(() =>
    import("#apps/paint/WindowPaint")
  );
})();

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        const WindowComponent = windowTypesMap[v.type] ?? Window;
        return (
          <Suspense key={v.id}>
            <WindowComponent key={v.id} data={v} />
          </Suspense>
        );
      })}
    </div>
  );
}
