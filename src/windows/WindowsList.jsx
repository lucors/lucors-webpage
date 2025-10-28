import {useSelector} from "react-redux";
import Window from "./Window";
import {Suspense} from "react";
import {appsMetas} from "#common/apps.js";
import WindowLoading from "#windows/WindowLoading.jsx";

const modules = import.meta.glob('../apps/*/shared.jsx');
for (const path in modules) {
  modules[path]().then((module) => console.log(`Imported ${path}`));
}

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        const WindowComponent = appsMetas.get(v.type)?.component ?? Window;
        return (
          <Suspense key={v.id} fallback={<WindowLoading/>}>
            <WindowComponent key={v.id} data={v}/>
          </Suspense>
        );
      })}
    </div>
  );
}
