import "./ActionNewWindow.css";
import {useTranslation} from "react-i18next";

export default function ActionNewWindow({onClick}) {
  const { t } = useTranslation();

  return (
    <img
      className="new-window"
      src="img/new-window.svg"
      title={t("new_window")}
      onClick={onClick}
    />
  );
}
