import { useDispatch } from "react-redux";
import { deleteAllWindows } from "#store/windowsSlice";
import "./Task.css";
import "./TaskKillAll.css";
import {useTranslation} from "react-i18next";

export default function TaskKillAll() {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(deleteAllWindows());
  }

  return (
    <div
      className="task killall"
      title={t("kill_all_tasks")}
      onClick={clickHandler}
    >
      ✕
    </div>
  );
}
