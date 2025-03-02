import { useDispatch, useSelector } from "react-redux";
import {
  isCurrent,
  setCurrentWindowById,
  updateWindow,
} from "../store/windowsSlice";
import "./Task.css";

export default function Task({ data }) {
  const dispatch = useDispatch();
  const collapsed = data?.collapsed;
  const current = useSelector((state) => isCurrent(state, data.id));

  function clickHandler() {
    if (collapsed) {
      dispatch(updateWindow({ id: data.id, collapsed: false }));
    } else if (current) {
      dispatch(updateWindow({ id: data.id, collapsed: !collapsed }));
    }
    dispatch(setCurrentWindowById(data.id));
  }

  return (
    <div
      className={`task ${collapsed ? "collapsed" : ""} ${
        current ? "current" : ""
      }`}
      title={data.title}
      onClick={clickHandler}
    >
      <img className="task-icon" src={data.icon} />
    </div>
  );
}
