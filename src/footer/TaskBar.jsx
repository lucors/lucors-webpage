import { useSelector } from "react-redux";
import Task from "./Task";
import { useEffect, useRef } from "react";
import $ from "jquery";

export default function TaskBar() {
  const windowsList = useSelector((state) => state.windows.list) ?? [];
  const taskBar = useRef(null);

  useEffect(() => {
    if (!taskBar?.current) return;
    $(taskBar.current).on("mousewheel", function (event) {
      taskBar.current.scrollBy(-event.originalEvent.wheelDelta, 0);
    });

    return () => {
      $(taskBar.current).off("mousewheel");
    };
  }, []);

  return (
    <div id="task-bar" ref={taskBar}>
      {windowsList.map((v) => (
        <Task key={v.id} data={v} />
      ))}
    </div>
  );
}
