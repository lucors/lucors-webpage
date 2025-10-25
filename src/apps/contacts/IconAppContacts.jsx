import { createApp, WINDOW_ICON, WINDOW_APP_CONTACTS } from "./shared";
import { useTranslation } from "react-i18next";

export default function IconAppContacts() {
  const {t} = useTranslation(WINDOW_APP_CONTACTS);
  return (
    <div
      id="icon-paint"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src={WINDOW_ICON} />
      <div className="label">{t("title")}</div>
    </div>
  );
}
