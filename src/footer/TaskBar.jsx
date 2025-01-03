import { useSelector } from "react-redux";
import Task from "./Task";
import { useEffect, useRef } from "react";
import TaskKillAll from "./TaskKillAll";

export default function TaskBar() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];
  const mobile = useSelector((state) => state.screen.mobile);
  const taskBar = useRef(null);

  useEffect(() => {
    if (!taskBar?.current) return;
    $(taskBar.current).on("mousewheel", function (event) {
      $(taskBar.current).scrollBy(-event.originalEvent.wheelDelta, 0);
    });

    return () => {
      $(taskBar.current).off("mousewheel");
    };
  }, []);

  return (
    <div id="task-bar">
      {windowsList.map((v) => (
        <Task key={v.id} data={v} />
      ))}
      {mobile && windowsList.length > 0 && <TaskKillAll />}
    </div>
  );
}
