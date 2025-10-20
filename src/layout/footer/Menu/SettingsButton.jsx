import { createApp } from "#apps/settings/shared.jsx";
import "./SettingsButton.css";
import {useTranslation} from "react-i18next";

export default function SettingsButton() {
  const { t } = useTranslation();

  return (
    <div id="settings-button" title={t("open_settings")} onClick={createApp}>
      <div className="ico"></div>
    </div>
  );
}
