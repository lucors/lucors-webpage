import { useSelector } from "react-redux";
import Window from "./Window";
import { Suspense } from "react";
import { appsComponents } from "#common/apps.js";

export default function WindowsList() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];

  return (
    <div id="windows">
      {windowsList.map((v) => {
        const WindowComponent = appsComponents.get(v.type) ?? Window;
        return (
          <Suspense key={v.id}>
            <WindowComponent key={v.id} data={v} />
          </Suspense>
        );
      })}
    </div>
  );
}
