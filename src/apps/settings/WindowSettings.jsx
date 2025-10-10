import { memo } from "react";
import Window from "#windows/Window";
import { WINDOW_ICON, WINDOW_TITLE } from "./shared";
import "./WindowSettings.css";
import { useDispatch, useSelector } from "react-redux";
import { setRadius } from "#store/settingsSlice.js";
import { ChangeLanguageButton } from "#layout/footer/FooterRight.jsx";
import Button from "#common/Button.jsx";

export function FlatRadiusButton() {
  const radius = useSelector((state) => state.settings.radius);
  const dispatch = useDispatch();

  function onRadiusChange() {
    dispatch(setRadius((radius > 0) ? 0 : 0.2));
  }

  return (
    <Button className="primary" onClick={onRadiusChange}>
      {(radius > 0) ? "Мягкий" : "Острый"}
    </Button>
  );
}

function Content() {

  return (
    <div className="section">
      <div className="setting-row-wrapper">
        <label>Радиус скругления</label>
        <div className="setting-row">
          <FlatRadiusButton />
        </div>
      </div>
      <div className="setting-row-wrapper">
        <label>Язык</label>
        <div className="setting-row">
          <ChangeLanguageButton primary />
        </div>
      </div>
    </div>
  );
}

export default memo(function WindowSettings({ data }) {
  return (
    <Window
      data={data}
      icon={WINDOW_ICON}
      title={WINDOW_TITLE}
      content={<Content />}
    />
  );
});
