import { createApp } from "#apps/settings/shared.jsx";
import "./SettingsButton.css";

export default function SettingsButton() {
  return (
    <div id="settings-button" title="Открыть настройки" onClick={createApp}>
      <div className="ico"></div>
    </div>
  );
}
