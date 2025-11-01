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
        const META = appsMetas.get(v.type);
        const WindowComponent = META?.component ?? Window;

        const props = {
          key: v.id,
          data: v,
          META: (META?.isRemote() ? META : null),
          Window: (META?.isRemote() ? Window : null),
        }

        return (
          <Suspense key={v.id} fallback={<WindowLoading/>}>
            <WindowComponent {...props} />
          </Suspense>
        );
      })}
    </div>
  );
}
