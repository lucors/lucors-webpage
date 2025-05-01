import { useDispatch } from "react-redux";
import { deleteAllWindows } from "#store/windowsSlice";
import "./Task.css";
import "./TaskKillAll.css";

export default function TaskKillAll() {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(deleteAllWindows());
  }

  return (
    <div
      className="task killall"
      title="Закрыть все окна"
      onClick={clickHandler}
    >
      ✕
    </div>
  );
}
