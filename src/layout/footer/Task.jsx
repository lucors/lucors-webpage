import { useDispatch, useSelector } from "react-redux";
import {
  isCurrent,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice";
import "./Task.css";
import { useTranslation } from "react-i18next";
import {appsMetas} from "#common/apps.js";
import {DEFAULT_APP_ICON, TITLE_KEY} from "#common/consts.js";

export default function Task({ data }) {
  const {t} = useTranslation(data.type);
  const appMeta = appsMetas.get(data.type);
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
      title={data.title ?? t(TITLE_KEY)}
      onClick={clickHandler}
    >
      <img className="task-icon" src={data?.icon || appMeta?.icon || DEFAULT_APP_ICON} />
    </div>
  );
}
