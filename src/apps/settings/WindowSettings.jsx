import { memo } from "react";
import Window from "#windows/Window";
import { WINDOW_ICON, WINDOW_TITLE } from "./shared";
import "./WindowSettings.css";
import { useDispatch, useSelector } from "react-redux";
import { setRadius } from "#store/settingsSlice.js";
import { ChangeLanguage } from "#layout/footer/FooterRight.jsx";

function Content() {
  const radius = useSelector((state) => state.settings.radius);
  const dispatch = useDispatch();

  function onRadiusChange(e) {
    dispatch(setRadius(e.target.valueAsNumber));
  }

  function onRadiusReset() {
    dispatch(setRadius(0.2));
  }

  return (
    <div className="section">
      <div className="setting-row-wrapper">
        <label htmlFor="setting-radius">Радиус скругления</label>
        <div className="setting-row">
          <input
            id="setting-radius"
            className="formInput"
            placeholder="Радиус скругления"
            type="number"
            step="0.1"
            min="0"
            max="2"
            value={radius}
            onChange={onRadiusChange}
          />
          <img
            class="reset"
            src="img/close.png"
            title="Сбросить значение"
            onClick={onRadiusReset}
          />
        </div>
      </div>
      <div className="setting-row-wrapper">
        <label htmlFor="setting-radius">Язык</label>
        <div className="setting-row">
          <ChangeLanguage />
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
